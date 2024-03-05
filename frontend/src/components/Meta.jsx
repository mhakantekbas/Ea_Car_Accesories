import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: 'Welcome to Ea Car Accessories',
	description: 'We sell the best products for cheap',
	keywords: 'car parts, buy car parts, cheap car parts, car accessories, buy car accessories, cheap car accessories',
};

export default Meta;
