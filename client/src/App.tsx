import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {Normalize} from 'styled-normalize';
import {MainPage} from './components/Main';
import {store} from './store';
import {defaultTheme} from './theme/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Normalize />
        <MainPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
