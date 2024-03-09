import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
	const discountedPrice = (product.price - (product.price * (product.discount / 100))).toFixed(2);
	const previousPrice = product.price.toFixed(2);

	return (
		<Card className='my-3 p-3 rounded text-center position-relative'>
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} variant='top' />
			</Link>
			{product.discount > 0 && (<div className="discount-badge">{product.discount}% OFF</div>)}
			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title as='div' className='product-title'>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>
				<Card.Text as='div'>
					<Rating value={product.rating} text={`${product.numReviews} reviews`} />
				</Card.Text>
				<div className="price-container">
					{product.discount ? (
						<>
							<span className="discounted-price">${discountedPrice}</span>
							<span className="actual-price">${previousPrice}</span>
						</>
					) : (
						<span className="normal-price">${product.price}</span>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};

export default Product;
