import { createTheme } from 'helpers/createTheme';
import { ThemeProvider } from 'components/themeProvider/ThemeProvider';
import { Button } from 'components/buttons/Button';

export const App = () => {
	const theme = {
		palette: {
			primary: {
				900: '#43302b',
			},
		},
	};

	return (
		<ThemeProvider theme={createTheme(theme)}>
			<Button label='#43302b' primary />

			<button className='u-mt-16'>margin</button>

			<p className='u-text-primary-900'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
				perferendis, cumque sint ea, sed fugit voluptate explicabo ipsum
				quibusdam quia dolorum voluptates deleniti quaerat aspernatur? Optio
				saepe fugit tenetur aperiam!
			</p>
		</ThemeProvider>
	);
};
