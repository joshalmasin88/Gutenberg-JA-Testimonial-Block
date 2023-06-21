import { TextControl, TextareaControl  } from "@wordpress/components"

import {useBlockProps, MediaPlaceholder  } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import "./editor.scss";

export default function Edit({  attributes, setAttributes }) {
	const { url,  name, quote } = attributes;
	const stockUrl = new URL("./stockimg.jpg", import.meta.url).href; // Get current directory for image url.

	const updateName = (value) => {
		setAttributes({name: value})
	}

	const updateQuote = (value) => {
		setAttributes({quote: value})
	}

	return (
		<div {...useBlockProps}>
			<TextControl label="Name" value={name} onChange={updateName} />
			<TextareaControl label="Quote" value={quote} onChange={updateQuote} />
			<MediaPlaceholder
				onSelect={(el) => {
					setAttributes({ url: el.url });
				}}
				allowedTypes={["image"]}
				multiple={false}
				labels={{ title: "The Image" }}
			/>
	
		</div>
	);
}
