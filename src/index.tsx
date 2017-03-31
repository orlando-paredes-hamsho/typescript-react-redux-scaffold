import * as React from 'react';
import { render } from 'react-dom';
const { AppContainer } = require('react-hot-loader');
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import App from './app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

declare const module: { hot: any };

render(
	<AppContainer>
		<Provider store={createStoreWithMiddleware(reducers)}>
			<App />
		</Provider>
	</AppContainer>,
	document.getElementById('main')
);

if (module.hot) {
	module.hot.accept('./app', () => {
		const NextApp = require('./app').default;
		render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			document.getElementById('main')
		);
	});
}
