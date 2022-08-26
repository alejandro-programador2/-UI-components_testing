import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const ThemeProvider = ({ children, theme = {} }) => {
	const updateCSSProperties = (customProperties) => {
		const rootElement = document.documentElement;

		for (const variable in customProperties) {
			rootElement.style.setProperty(
				`--${variable}`,
				customProperties[variable]
			);
		}
	};

	useEffect(() => {
		if (theme) updateCSSProperties(theme);
	}, [theme]);

	return children;
};

ThemeProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
	theme: PropTypes.object.isRequired,
};
