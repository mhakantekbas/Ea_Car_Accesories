import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Form,
	Modal,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import {
	useGetProductDetailsQuery,
	useCreateReviewMutation,
} from '../slices/productsApiSlice';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { addToCart } from '../slices/cartSlice';

const ProductScreen = () => {
	const { id: productId } = useParams();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [qty, setQty] = useState(1);
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');
	const [showModal, setShowModal] = useState(false);

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	const addToCartHandler = () => {
		dispatch(addToCart({ ...product, qty }));
		navigate('/cart');
	};

	const {
		data: product,
		isLoading,
		refetch,
		error,
	} = useGetProductDetailsQuery(productId);

	const { userInfo } = useSelector((state) => state.auth);

	const [createReview, { isLoading: loadingProductReview }] =
		useCreateReviewMutation();

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			await createReview({
				productId,
				rating,
				comment,
			}).unwrap();
			refetch();
			toast.success('Review created successfully');
		} catch (err) {
			toast.error(err?.data?.message || err.error);
		}
	};

	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>
					{error?.data?.message || error.error}
				</Message>
			) : (
				<>
					<Meta title={product.name} description={product.description} />
					<Row>
						<Col md={6}>
							<Image src={product.image} alt={product.name} fluid />
						</Col>
						<Col md={3}>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<h3>{product.name}</h3>
								</ListGroup.Item>
								<ListGroup.Item>
									<Rating
										value={product.rating}
										text={`${product.numReviews} reviews`}
									/>
								</ListGroup.Item>
								<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
								<ListGroup.Item>
									Description: {product.description}
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={3}>
							<Card>
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<Row>
											<Col>Price:</Col>
											<Col>
												<strong>${product.price}</strong>
											</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										<Row>
											<Col>Status:</Col>
											<Col>
												{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
											</Col>
										</Row>
									</ListGroup.Item>

									{/* Qty Select */}
									{product.countInStock > 0 && (
										<ListGroup.Item>
											<Row>
												<Col>Qty</Col>
												<Col>
													<Form.Control
														as='select'
														value={qty}
														onChange={(e) => setQty(Number(e.target.value))}
													>
														{[...Array(product.countInStock).keys()].map(
															(x) => (
																<option key={x + 1} value={x + 1}>
																	{x + 1}
																</option>
															)
														)}
													</Form.Control>
												</Col>
											</Row>
										</ListGroup.Item>
									)}

									<ListGroup.Item>
										<Button
											className='btn-block'
											type='button'
											disabled={product.countInStock === 0}
											onClick={addToCartHandler}
										>
											Add To Cart
										</Button>
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					</Row>
					<Row className='review'>
						<Col md={6}>
							<h2>Reviews</h2>
							{product.reviews.length === 0 && <Message>No Reviews</Message>}
							<ListGroup variant='flush'>
								{product.reviews.map((review) => (
									<ListGroup.Item key={review._id}>
										<strong>{review.name}</strong>
										<Rating value={review.rating} />
										<p>{review.createdAt.substring(0, 10)}</p>
										<p>{review.comment}</p>
									</ListGroup.Item>
								))}
								<ListGroup.Item>
									<h2>Write a Customer Review</h2>
									<Modal show={showModal} onHide={closeModal}>
										<Modal.Header closeButton>
											<Modal.Title>Publication Criteria</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<p>
												Product reviews are an important tool in creating an honest trading environment where our customers can share their opinions and suggestions about the products on our platform, find answers to their questions, and learn what other customers think about the products. In this respect, when publishing comments on products, regardless of whether they are positive or negative, the text and visuals, if any, are taken into account.
											</p>
											<ul>
												<li>Compliant with the legislation,</li>
												<li>Does not violate intellectual/industrial rights, does not create unfair competition</li>
												<li>Does not contain a health claim (all statements that state, suggest or imply that it is directly or indirectly beneficial to human health or that it is effective against, protects or treats diseases or their symptoms) (accelerates metabolism, regulates the digestive system, provides collagen synthesis, etc.),</li>
												<li>Does not contain insults/swearing, does not violate personal rights, does not contain any criminal elements and is not contrary to general morality and public order,</li>
												<li>Does not contain obscenities and is not unrelated to the product,
												</li>
												<li>Non-provocative, non-threatening,</li>
												<li>Does not violate the personal data of others or the privacy of private life,</li>
												<li>Does not encourage/support an unlawful situation,</li>
												<li>In response to the comments of our other customers, in a way that is not harassing/embarrassing, does not contain any negative comments about other brands, etc. does not create unfair competition,</li>
												<li>Does not contain links, advertisements or comparisons directing to different sites,</li>
												<li>Does not contain screenshots taken from digital media,</li>
												<li>Contains images that are linked to the product commented on</li>
											</ul>
											<p>We publish the comments.</p>
											<p>Comments regarding orders outside Türkiye are evaluated separately within the framework of the rulesets for the relevant country.</p>
											<p>
												In order to guide our customers correctly, only customers who have purchased the relevant product can comment. A comment you have made regarding the product you purchased may be rejected or removed from the platform as a result of a determination that it violates the legislation or the above-mentioned criteria. If you think that your comment has been unfairly removed or rejected, you can contact our call center.
											</p>
											<p>
												When listing product reviews, the following criteria are taken into consideration, regardless of whether the score is high or low, so that our customers can access accurate information:
											</p>
											<ul>
												<li>
													The comment contains information about the product (size, quality, etc.)
												</li>
												<li>
													Number of likes for comments
												</li>
												<li>
													Including the image in the comment
												</li>
												<li>
													The comment was made recently
												</li>
												<li>
													The comment must contain the information specifically sought about the product.
												</li>
											</ul>
											<p>
												The products to which images can be added are determined by Ea Car Accessories. Visuals cannot be added to products for which Ea Car Accessories does not allow adding visual comments, such as digital support cards, some underwear and fantasy products offered for sale by non-governmental organization sellers.
											</p>
										</Modal.Body>
										<Modal.Footer>
											<Button variant="primary" onClick={closeModal}>
												Understood
											</Button>
										</Modal.Footer>
									</Modal>
									{loadingProductReview && <Loader />}
									{userInfo ? (
										<Form onSubmit={submitHandler}>
											<Form.Group className='my-2' controlId='rating'>
												<Form.Label>Rating</Form.Label>
												<Form.Control
													as='select'
													required
													value={rating}
													onChange={(e) => setRating(e.target.value)}
												>
													<option value=''>Select...</option>
													<option value='1'>1 - Poor</option>
													<option value='2'>2 - Fair</option>
													<option value='3'>3 - Good</option>
													<option value='4'>4 - Very Good</option>
													<option value='5'>5 - Excellent</option>
												</Form.Control>
											</Form.Group>
											<Form.Group className='my-2' controlId='comment'>
												<Form.Label>Comment</Form.Label>
												<Form.Control
													as='textarea'
													row='3'
													required
													value={comment}
													onChange={(e) => setComment(e.target.value)}
												></Form.Control>

											</Form.Group>
											<Button
												disabled={loadingProductReview}
												type='submit'
												variant='primary'
											>
												Submit
											</Button>

											<Button className="btn-link text-decoration-underline " style={{ boxShadow: 'none', backgroundColor: 'transparent', border: 'none' }} onClick={openModal}>Publication criteria</Button>
										</Form>
									) : (
										<Message>
											Please <Link to='/login'>sign in</Link> to write a review
										</Message>
									)}
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</>
			)}
		</>
	);
};

export default ProductScreen;
