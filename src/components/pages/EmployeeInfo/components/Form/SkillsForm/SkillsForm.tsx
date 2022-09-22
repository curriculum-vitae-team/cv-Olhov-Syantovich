import React, { ChangeEvent, FC, useMemo } from 'react';
import { SkillsFormProps } from '@pages/EmployeeInfo/components/Form/SkillsForm/SkillsForm.types';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import {
  buttonSX,
  iconSX,
  SkillGrid,
  titleSX,
  wrapSX
} from '@pages/EmployeeInfo/components/Form/SkillsForm/SkillForm.styles';
import { ISkillMastery } from '@interfaces/ISkillMastery';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { skillMastery } from '@constants/skillMasteries';

export const SkillsForm: FC<SkillsFormProps> = ({ skills, setSkills, allSkills }) => {
  const availableSkills = useMemo(
    () =>
      [...allSkills.filter((skill) => !skills.find((item) => item.skill_name === skill.name))].reduce(
        (res, value) => [...res, value.name],
        [] as string[]
      ),
    [allSkills, skills]
  );

  const handleSkillChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) =>
    setSkills(
      skills.reduce(
        (res, skill, id) => [...res, id === index ? { ...skill, skill_name: event.target.value } : skill],
        [] as ISkillMastery[]
      )
    );

  const handleMasteryChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) =>
    setSkills(
      skills.reduce(
        (res, skill, id) => [...res, id === index ? { ...skill, mastery: event.target.value } : skill],
        [] as ISkillMastery[]
      )
    );

  const handleSkillDelete = (skill_name: string) =>
    setSkills(skills.filter((skill) => skill.skill_name !== skill_name));

  const handleSkillAdd = () => setSkills([...skills, { skill_name: availableSkills[0], mastery: skillMastery[0] }]);

  return (
    <Box sx={wrapSX}>
      <Typography variant={'h3'} sx={titleSX}>
        Skills
      </Typography>
      {skills.map(({ skill_name, mastery }, index) => (
        <SkillGrid key={skill_name}>
          <TextField
            select
            required
            placeholder="Skill"
            label="Skill"
            value={skill_name}
            onChange={(event) => handleSkillChange(event, index)}
          >
            {[skill_name, ...availableSkills].map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            required
            placeholder="Mastery"
            label="Mastery"
            value={mastery}
            onChange={(event) => handleMasteryChange(event, index)}
          >
            {skillMastery.map((mastery) => (
              <MenuItem key={mastery} value={mastery}>
                {mastery}
              </MenuItem>
            ))}
          </TextField>
          <IconButton edge="start" color="inherit" sx={iconSX} onClick={() => handleSkillDelete(skill_name)}>
            <CloseIcon />
          </IconButton>
        </SkillGrid>
      ))}
      {!!availableSkills.length && (
        <Button color="primary" sx={buttonSX} onClick={handleSkillAdd}>
          Add
        </Button>
      )}
    </Box>
  );
};
