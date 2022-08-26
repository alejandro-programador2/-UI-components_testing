import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const ThemeProvider = ({ children, theme = {} }) => {
	const updateCSSProperties =  (customProperties) => {
		// Se crea una nueva hoja de estilos
		const sheet = new CSSStyleSheet();
		let rule = ':root { ';

		for (const variable in customProperties) {
			rule += `--clr-${variable}: ${customProperties[variable]};\n`;
		}
		rule += '};'

		// Aplicamos las reglas a la hoja de estilos
		sheet.replaceSync(rule);
		// Aplicamos la hoja de estilo al document
		document.adoptedStyleSheets = [sheet];
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
