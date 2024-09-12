import { TypedObject } from '@portabletext/types';

export type PageContent = {
	headline: string;
	content: TypedObject | TypedObject[];
};
