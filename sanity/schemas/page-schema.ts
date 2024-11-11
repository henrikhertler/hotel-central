import { defineField, defineType } from 'sanity';

export const pageSchema = defineType({
	name: 'page',
	title: 'Pages',
	type: 'document',
	icon: () => '📄',
	fields: [
		defineField({
			name: 'name',
			title: 'Title',
			description: 'Internal use only',
			type: 'string'
		}),
		defineField({
			name: 'headline',
			title: 'Headline',
			type: 'string'
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }, {
				type: 'image', fields: [
					{
						name: 'alt',
						type: 'string',
						title: 'Alternative text',
						description: 'Important for SEO and accessibility'
					}
				]
			}]
		})
	],
	preview: {
		select: {
			title: 'name',
			content: 'content'
		},
		prepare({ title, content }) {
			return {
				title,
				subtitle: content[0]?.children[0]?.text
			};
		}
	}
});
