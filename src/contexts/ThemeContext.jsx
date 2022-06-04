import React, {
  createContext,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isThemeDark, setIsThemeDark] = useState(true);

  const darkTheme = useMemo(() => ({
    isThemeDark,
    setIsThemeDark,
  }), [isThemeDark]);

  return (
    <ThemeContext.Provider value={darkTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
