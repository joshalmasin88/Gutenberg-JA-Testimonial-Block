import { useBlockProps } from "@wordpress/block-editor";


export default function save({ attributes }) {
	const { url, name, quote } = attributes;

	return (
		<div className="testimonial-card">
			{url ? <img src={ url } /> : '' }
			<p>{quote ? quote : ''}</p>
			<small>- {name ? name : ''}</small>
		</div>
	);
}
