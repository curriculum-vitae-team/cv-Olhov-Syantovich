import React, { FC } from 'react';
import { SkillsFormProps } from '@pages/EmployeeInfo/components/Form/SkillsForm/SkillsForm.types';
import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { iconSX, SkillGrid, titleSX, wrapSX } from '@pages/EmployeeInfo/components/Form/SkillsForm/SkillForm.styles';
import { ISkillMastery } from '@interfaces/ISkillMastery';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export const SkillsForm: FC<SkillsFormProps> = ({ register, skills, user }) => {
  const skillArr: ISkillMastery[] = [
    { skill_name: 'JavaScript', mastery: 'Middle' },
    { skill_name: 'TypeScript', mastery: 'Middle' },
    { skill_name: 'React', mastery: 'Junior' }
  ];

  return (
    <Box sx={wrapSX}>
      <Typography variant={'h3'} sx={titleSX}>
        Skills
      </Typography>
      {skillArr.map(({ skill_name, mastery }) => (
        <SkillGrid key={skill_name}>
          {/*Надо делать селектами*/}
          <TextField placeholder="Skill" required label="Skill" value={skill_name} />
          <TextField placeholder="Mastery" required label="Mastery" value={mastery} />
          <IconButton edge="start" color="inherit" sx={iconSX}>
            <CloseIcon />
          </IconButton>
        </SkillGrid>
      ))}
    </Box>
  );
};
