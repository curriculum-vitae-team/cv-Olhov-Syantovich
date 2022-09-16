import React, { forwardRef } from 'react';
import { Paper, InputBase, IconButton, InputBaseProps } from '@mui/material';
import { Search } from '@mui/icons-material';

export const SearchInput = forwardRef((props: InputBaseProps, ref) => {
  return (
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
      <InputBase placeholder={props.placeholder || 'Search'} {...props} ref={ref} />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
});
SearchInput.displayName = 'SearchInput';
