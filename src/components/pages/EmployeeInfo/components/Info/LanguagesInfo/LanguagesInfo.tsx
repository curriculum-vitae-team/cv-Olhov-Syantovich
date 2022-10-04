import { FC } from 'react';
import { LanguagesInfoProps } from '@pages/EmployeeInfo/components/Info/LanguagesInfo/LanguagesInfo.types';
import { Box, Typography } from '@mui/material';
import {
  wrapSX,
  titleSX
} from '@pages/EmployeeInfo/components/Info/LanguagesInfo/LanguagesInfo.styles';

export const LanguagesInfo: FC<LanguagesInfoProps> = ({ languages }) => {
  return (
    <Box sx={wrapSX}>
      <Typography variant={'h3'} sx={titleSX}>
        Languages
      </Typography>

      {languages.map(({ language_name, proficiency }) => (
        <Typography key={language_name} variant={'h4'}>
          {language_name}: {proficiency}
        </Typography>
      ))}
    </Box>
  );
};
