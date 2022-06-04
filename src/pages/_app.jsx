import React from 'react';
import ThemeProvider from 'contexts/ThemeContext';
import 'styles/globals.sass';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
