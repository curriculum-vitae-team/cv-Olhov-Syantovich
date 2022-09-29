import { FC } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { dividerSX } from '@pages/CvDetails/components/CvInfo/CvInfo.styles';
import { CvInfoProps } from '@pages/CvDetails/components/CvInfo/CvInfo.types';

export const CvInfo: FC<CvInfoProps> = ({ cv }) => {
  return (
    <>
      <Typography variant="h3" textAlign="center">
        {cv.name}
      </Typography>

      <Typography variant="h4">Personal Info</Typography>
      <Typography variant="h5">{cv.user?.email}</Typography>
      <Divider sx={dividerSX} />

      <Typography variant="h4">Skills</Typography>
      {cv.skills.map(({ skill_name, mastery }) => (
        <Typography variant="h5" key={skill_name}>
          {skill_name} - {mastery}
        </Typography>
      ))}
      <Divider sx={dividerSX} />

      <Typography variant="h4">Languages</Typography>
      {cv.languages.map(({ language_name, proficiency }) => (
        <Typography variant="h5" key={language_name}>
          {language_name} - {proficiency}
        </Typography>
      ))}
      <Divider sx={dividerSX} />

      <Typography variant="h3" textAlign="center">
        Experience
      </Typography>

      {cv.projects?.map(({ name, start_date, end_date, description }) => (
        <Box key={name}>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="h5">
            {start_date} - {end_date || '...'}
          </Typography>
          <Typography variant="h6">{description}</Typography>
        </Box>
      ))}
    </>
  );
};
