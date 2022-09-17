import React, { FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import {
  avatarSX,
  boxSX,
  emailSX,
  wrapSX
} from '@pages/EmployeeInfo/components/PersonalInformation/PersonalInformation.styles';
import { PersonalInformationProps } from '@pages/EmployeeInfo/components/PersonalInformation/PersonalInformation.types';

export const PersonalInformation: FC<PersonalInformationProps> = ({ user }) => {
  return (
    <Box sx={wrapSX}>
      <Avatar sx={avatarSX} src={user.profile.full_name || ''} />
      <Typography variant={'h3'}>{user.profile.full_name || 'Vitalya Bleat'}</Typography>
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