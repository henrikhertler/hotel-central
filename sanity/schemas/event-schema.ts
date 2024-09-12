import { defineField, defineType } from 'sanity';
import { formatDateTime } from '../helper';

export const eventSchema = defineType({
	name: 'event',
	title: 'Events',
	type: 'document',
	icon: () => '🎉',
	fields: [
		defineField({
			name: 'date',
			title: 'Date & Time',
			type: 'datetime',
			validation: Rule => Rule.required(),
			description: 'When will the event take place?',
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: Rule => Rule.required(),
			description: 'What is the name of the event?',
		}),
		defineField({
			name: 'location',
			title: 'Location',
			type: 'string',
			initialValue: 'Steinstr. 13',
			description: 'Where will the event take place?',
		}),
	],
	preview: {
		select: {
			title: 'name',
			date: 'date',
			location: 'location',
		},
		prepare({ title, date, location }) {
			return {
				title,
				subtitle: `${formatDateTime(date)} at ${location}`,
			};
		},
	},
});
