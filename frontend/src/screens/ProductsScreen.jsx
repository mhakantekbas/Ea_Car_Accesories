import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';


const ProductsScreen = () => {
	const { category: category } = useParams();
	const { pageNumber, } = useParams();

	const { data, isLoading, error } = useGetProductsQuery({
		pageNumber,
	});



	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>
					{error?.data?.message || error.error}
				</Message>
			) : (
				<>
					<h1 id="Car Gear Hoodies" className='px-5'>Latest Products</h1>
					<Row className='px-5'>
						{data.products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
					<Paginate
						pages={data.pages}
						page={data.page}
					/>
				</>
			)}
		</>
	)
}

export default ProductsScreen
