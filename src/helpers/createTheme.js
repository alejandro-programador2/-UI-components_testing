const flatObject = (object) => {
	let newObject = {};

	for (let i in object) {
		if (typeof object[i] === 'object') {
			const temporal = flatObject(object[i]);
			for (let j in temporal) {
				newObject = {
					...newObject,
					[i.includes('accents') || i.includes('palette') ? j : `${i}-${j}`]:
						temporal[j],
				};
			}
		} else {
			newObject[i] = object[i];
		}
	}

	return newObject;
};

export const createTheme = (theme) => {
	return flatObject(theme);
};
