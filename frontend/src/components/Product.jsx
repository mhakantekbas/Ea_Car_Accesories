import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
	const discount = product.discount;

	return (
		<Card className='my-3 p-3 rounded text-center position-relative'>
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} variant='top' />
			</Link>
			{discount > 0 && (<div className="discount-badge">{discount}% OFF</div>)}
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
					{discount ? (
						<>
							<span className="discounted-price">${(product.price - (product.price * (discount / 100))).toFixed(2)}</span>
							<span className="actual-price">${product.price}</span>
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
