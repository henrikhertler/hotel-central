export const formatDateTime = (isoString: string) => {
	const date = new Date(isoString);

	const months = [
		'Januar',
		'Februar',
		'März',
		'April',
		'Mai',
		'Juni',
		'Juli',
		'August',
		'September',
		'Oktober',
		'November',
		'Dezember',
	];

	const day = date.getDate();
	const month = months[date.getMonth()];
	const hour = date.getHours();

	return `${day}. ${month} | ${hour} Uhr`;
};
