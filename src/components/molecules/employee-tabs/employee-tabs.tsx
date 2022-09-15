import React, { FC, SyntheticEvent, useState } from 'react';
import { Tab, Tabs } from '@mui/material';

export const EmployeeTabs: FC = () => {
  const [currentValue, setCurrentValue] = useState<string>('Info');

  const handleChange = (event: SyntheticEvent, newValue: string) => setCurrentValue(newValue);

  return (
    <Tabs value={currentValue} onChange={handleChange}>
      <Tab value="Info" label="Info" />
      <Tab value="CV" label="CV" />
    </Tabs>
  );
};
