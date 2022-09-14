import React from 'react';
import { Box, Tabs, Tab, AppBar } from '@mui/material';
import { PathEnum } from '@templates/router/router.types';
import { Link } from 'react-router-dom';

export const TabsBetweenSign = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar>
      <Box sx={{ width: '100%', position: 'absolute', top: '200px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label={PathEnum.signIn} component={Link} to={PathEnum.signIn} />
            <Tab label={PathEnum.signUp} component={Link} to={PathEnum.signUp} />
          </Tabs>
        </Box>
      </Box>
    </AppBar>
  );
};
