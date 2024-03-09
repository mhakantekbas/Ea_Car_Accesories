import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import Message from './Message';

const ProductCarousel = () => {
	const { data: products, isLoading, error } = useGetTopProductsQuery();

	return isLoading ? null : error ? (
		<Message variant='danger'>{error?.data?.message || error.error}</Message>
	) : (
		<Carousel pause='hover' className='bg-primary'>
			{products.map(product => (
				<Carousel.Item key={product.id}>
					<Image src={product.image} fluid style={{ maxWidth: '100%', height: 'auto' }} />
					<Carousel.Caption className='carousel-caption'>
						<h2>
							{product.name} ({product.price})
						</h2>
					</Carousel.Caption>

				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default ProductCarousel;
