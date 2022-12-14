import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import {
  boxSX,
  emailSX,
  wrapSX
} from '@pages/EmployeeInfo/components/Info/PersonalInfo/PersonalInfo.styles';
import { PersonalInformationProps } from '@pages/EmployeeInfo/components/Info/PersonalInfo/PersonalInfo.types';

export const PersonalInfo: FC<PersonalInformationProps> = ({ user }) => {
  return (
    <Box sx={wrapSX}>
      <Typography variant={'h3'}>{user.profile.full_name || ''}</Typography>
      <Typography variant={'h5'} sx={emailSX}>
        {user.email || 'vitalyableat@gmail.com'}
      </Typography>
      <Box sx={boxSX}>
        <Typography variant={'h4'}>Department: {user.department_name}</Typography>
        <Typography variant={'h4'}>Position: {user.position_name}</Typography>
      </Box>
    </Box>
  );
};
