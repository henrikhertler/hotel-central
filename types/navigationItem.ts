export type NavigationItem = {
	name: string;
	href: string;
	subItems?: NavigationItem[];
	options?: { target: string };
};