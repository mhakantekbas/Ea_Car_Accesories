import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';
import logo from '../assets/EACA_Std_L_White.png';
import { resetCart } from '../slices/cartSlice';
import axios from 'axios';

const Header = () => {
	const { cartItems } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.auth);
	const [categories, setCategories] = useState([]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [logoutApiCall] = useLogoutMutation();

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			dispatch(resetCart());
			navigate('/login');
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get('/api/products/categories');
				setCategories(response.data);
			} catch (error) {
				console.error('Error fetching categories:', error);
			}
		};

		fetchCategories();
	}, []);

	return (
		<header>
			<Navbar bg='primary' variant='dark' expand='lg' color='' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<div>
								<img width='100' height='100' src={logo} alt='Ea Car Accessories' />
							</div>
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto d-flex gap-3'>
							<LinkContainer to='/'>
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>

							{/* Render dropdown button with categories */}
							{categories.length > 0 && (
								<NavDropdown title='Products' id='categories-dropdown'>
									{categories.map(category => (
										<LinkContainer key={category} to={`/category/${category}`}>
											<NavDropdown.Item>{category}</NavDropdown.Item>
										</LinkContainer>
									))}
								</NavDropdown>
							)}

							<LinkContainer to='/about'>
								<Nav.Link>About Us</Nav.Link>
							</LinkContainer>

							<LinkContainer to='/contact'>
								<Nav.Link>Contact Us</Nav.Link>
							</LinkContainer>
							<SearchBox />
							<LinkContainer to='/cart'>
								<Nav.Link>
									<FaShoppingCart /> Cart
									{cartItems.length > 0 && (
										<Badge pill bg='success' style={{ marginLeft: '5px' }}>
											{cartItems.reduce((a, c) => a + c.qty, 0)}
										</Badge>
									)}
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<>
									<NavDropdown title={userInfo.name} id='username'>
										<LinkContainer to='/profile'>
											<NavDropdown.Item>Profile</NavDropdown.Item>
										</LinkContainer>
										<NavDropdown.Item onClick={logoutHandler}>
											Logout
										</NavDropdown.Item>
									</NavDropdown>
								</>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<FaUser /> Sign In
									</Nav.Link>
								</LinkContainer>
							)}

							{/* Admin Links */}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Admin' id='adminmenu'>
									<LinkContainer to='/admin/productlist'>
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orderlist'>
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/userlist'>
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
