import { StructureResolver } from 'sanity/structure';

export const sanityStructure: StructureResolver = S =>
	S.list()
		.id('root')
		.title('Content')
		.items([
			S.listItem()
				.title('Upcoming Events')
				.schemaType('event')
				.icon(() => '🎉')
				.child(S.documentList().title('Upcoming Events').apiVersion('v2024-11-11').filter('date > now()')),
			S.listItem()
				.title('Past Events')
				.schemaType('event')
				.icon(() => '🎉')
				.child(S.documentList().title('Past Events').apiVersion('v2024-11-11').filter('date < now()')),
			S.divider(),
			S.documentTypeListItem('page')
				.title('Pages')
				.icon(() => '📄'),
		]);
