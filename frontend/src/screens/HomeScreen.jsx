import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import Hoodie from '../components/Hoodie';
import Features from '../components/Features';
import Cover from '../components/Cover';

const HomeScreen = () => {
	const { pageNumber, keyword } = useParams();

	const { data, isLoading, error } = useGetProductsQuery({
		keyword,
		pageNumber,
	});

	const scrollToLatestProducts = () => {
		const latestProductsSection = document.getElementById('latestProducts');
		if (latestProductsSection) {
			latestProductsSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>{!keyword ?
			(<>
				<Cover scrollToLatestProducts={scrollToLatestProducts} />
				<Features />
				<Hoodie scrollToLatestProducts={scrollToLatestProducts} />
			</>

			) : (
				<Link to='/' className='btn btn-light mx-5 my-3 '>
					Go Back
				</Link>
			)
		}
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>
					{error?.data?.message || error.error}
				</Message>
			) : (
				<>

					<Meta />
					<h1 id="latestProducts" className='px-5'>Latest Products</h1>
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
						keyword={keyword ? keyword : ''}
					/>
				</>
			)}
		</>
	);
};

export default HomeScreen;
