import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../slices/productsApiSlice'; // Import the new hook
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';


const ProductsByCategoryScreen = () => {
	const { category, pageNumber } = useParams(); // Get category from URL params

	const { data, isLoading, error } = useGetProductsByCategoryQuery({
		category,
		pageNumber,
	}); // Use the new hook passing category as argument

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
					<h1 id="Car Gear Hoodies" className='px-5 pt-4 '>{category}</h1> { }
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
						category={category} // Pass category to Paginate component
					/>
				</>
			)}
		</>
	)
}

export default ProductsByCategoryScreen
