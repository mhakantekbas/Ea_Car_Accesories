import React from 'react';
import { Image } from 'react-bootstrap';

const Hoodie = ({ scrollToLatestProducts }) => {
	return (
		<div className="container col-xxl-8 px-0 py-0">
			<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div className="col-10 col-sm-8 col-lg-6">
					<Image src="/images/Cover_EA_950x500.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="950" height="600" loading="lazy" />
				</div>
				<div className="col-lg-6">
					<h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Car Gear Hoodie</h1>
					<p className="lead">Crafted with premium materials and featuring a sleek design inspired by gear shift patterns, this hoodie offers both style and durability. With strategically placed pockets resembling a car's dashboard and a hood designed like a racing helmet, it's as practical as it is stylish. Whether you're cruising the streets or chilling at home, the Car Gear Hoodie is the perfect choice to elevate your automotive fashion game. Gear up in style today!</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-start">
						<button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={scrollToLatestProducts}>Buy Now!</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hoodie;
