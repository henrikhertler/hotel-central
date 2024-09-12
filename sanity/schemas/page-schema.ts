import { defineArrayMember, defineField, defineType } from 'sanity';

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
			type: 'string',
		}),
		defineField({
			name: 'headline',
			title: 'Headline',
			type: 'string',
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'array',
			// @ts-ignore
			of: [defineArrayMember({ type: 'block' })],
		}),
	],
	preview: {
		select: {
			title: 'name',
			content: 'content',
		},
		prepare({ title, content }) {
			return {
				title,
				subtitle: content[0]?.children[0]?.text,
			};
		},
	},
});
