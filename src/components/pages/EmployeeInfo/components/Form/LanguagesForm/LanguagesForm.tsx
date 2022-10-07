import { FC } from 'react';
import { LanguagesFormProps } from '@pages/EmployeeInfo/components/Form/LanguagesForm/LanguagesForm.types';
import {
  titleSX,
  wrapSX
} from '@pages/EmployeeInfo/components/Form/LanguagesForm/LanguagesForm.styles';
import { Box, Typography } from '@mui/material';

export const LanguagesForm: FC<LanguagesFormProps> = ({ languages, allAvailableLanguages }) => {
  return (
    <Box sx={wrapSX}>
      <Typography variant={'h3'} sx={titleSX}>
        Languages
      </Typography>
      {JSON.stringify(languages)}
      {JSON.stringify(allAvailableLanguages)}
    </Box>
  );
};