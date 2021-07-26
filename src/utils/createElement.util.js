export default (options) => {
	const children = options.children || [];
	const attributes = options.attributes || {};

	const el = document.createElement(options.selector);

	for (const [key, value] of Object.entries(attributes)) {
		const attr = document.createAttribute(key);
		attr.value = value;
		el.setAttributeNode(attr);
	}

	children.forEach((child) => {
		el.appendChild(child);
	});

	return el;
};
