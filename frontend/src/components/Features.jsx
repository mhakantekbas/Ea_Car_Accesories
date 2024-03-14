import React from 'react'
import { FaTruck, FaWallet } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";

const Features = () => {
	return (
		<div className="container px-4 py-3" id="icon-grid">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-0">
				<div className="col d-flex align-items-start">
					<FaTruck className="text-body-secondary flex-shrink-0 me-3" size="1.75em" />
					<div>
						<h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Fast delivery</h3>
						<p>Get your order within 3 days.</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<AiFillSafetyCertificate className="text-body-secondary flex-shrink-0 me-3" size="1.75em" />
					<div>
						<h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Buyer protection</h3>
						<p>Get a refund if items arrived late or not as described.</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<FaWallet className="text-body-secondary flex-shrink-0 me-3" size="1.75em" />
					<div>
						<h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Safe payments</h3>
						<p> Make your payment with Paypal assurance.</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<BsCartFill className="text-body-secondary flex-shrink-0 me-3" size="1.75em" />
					<div>
						<h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Easy shopping</h3>
						<p>Effortless shopping experience, streamlined checkout.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Features
