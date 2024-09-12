import { defineConfig } from 'sanity';
import schemas from './sanity/schemas';
import { structureTool } from 'sanity/structure';
import { sanityStructure } from './sanity/sanity-structure';

const config = defineConfig({
	projectId: '4l6zibbo',
	dataset: 'production',
	title: 'Hotel Central',
	apiVersion: '2024-08-11',
	basePath: '/admin',
	plugins: [structureTool({ structure: sanityStructure })],
	schema: { types: schemas },
});

export default config;
