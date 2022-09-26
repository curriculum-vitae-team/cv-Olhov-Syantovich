import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { wrapSX, titleSX } from '@pages/EmployeeInfo/components/SkillsInfo/SkillsInfo.styles';
import { SkillsInfoProps } from '@pages/EmployeeInfo/components/SkillsInfo/SkillsInfo.types';

export const SkillsInfo: FC<SkillsInfoProps> = ({ skills }) => {
  return (
    <Box sx={wrapSX}>
      <Typography variant={'h3'} sx={titleSX}>
        Skills
      </Typography>

      {skills.map(({ skill_name, mastery }) => (
        <Typography key={skill_name} variant={'h4'}>
          {skill_name}: {mastery}
        </Typography>
      ))}
    </Box>
  );
};
