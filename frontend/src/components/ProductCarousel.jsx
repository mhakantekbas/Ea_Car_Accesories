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
			<Image src={"/images/Cover_EA.png"} fluid style={{ width: 'auto', height: '75%' }} />
		</Carousel>
	);
};

export default ProductCarousel;
