import { error } from '@sveltejs/kit';
import all_art from '#lib/data/art.json';

export function entries() {
	return all_art.map((item) => ({
		slug: item.slug
	}));
}

export function load({ params }) {
	const artwork = all_art.find((item) => item.slug === params.slug);

	if (!artwork) {
		throw error(404, 'Artwork not found');
	}

	return {
		artwork
	};
}

