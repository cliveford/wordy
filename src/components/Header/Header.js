import React from 'react';
import './Header.css';
import categories from '../../data/category';
import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from '@material-ui/core';

const Header = ({ setCategory, category, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        // main: '#81c784',
        main: lightMode ? '#000' : '#fff',
      },
      type: lightMode ? 'light' : 'dark',
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord('');
  };

  return (
    <div className='header'>
      <span className='title'>{word ? word : 'Wordier'}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            label='Search'
            variant='standard'
            className='search'
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            label='Language'
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            variant='standard'
            className='select'
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
