import React, { FC, useMemo } from 'react';
import { SkillsFormProps } from '@pages/EmployeeInfo/components/Form/SkillsForm/SkillsForm.types';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import {
  buttonSX,
  iconSX,
  SkillGrid,
  titleSX,
  wrapSX
} from '@pages/EmployeeInfo/components/Form/SkillsForm/SkillForm.styles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { skillMastery } from '@constants/skillMasteries';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ISkillMastery } from '@interfaces/ISkillMastery';

export const SkillsForm: FC<SkillsFormProps> = ({ allSkills }) => {
  const { control, register, getValues } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: 'profile.skills' });
  const availableSkills = useMemo(() => {
    const currSkills = getValues('profile.skills');
    return [
      ...allSkills.filter((skill) => !currSkills.find((item: ISkillMastery) => item.skill_name === skill.name))
    ].reduce((res, value) => [...res, value.name], [] as string[]);
  }, [allSkills, getValues('profile.skills')]);

  const handleSkillAdd = () => append({ skill_name: availableSkills[0], mastery: skillMastery[0] });

  const handleDelete = (id: number) => () => remove(id);

  return (
    <Box sx={wrapSX}>
      <Typography variant={'h3'} sx={titleSX}>
        Skills
      </Typography>
      {fields.map((field, index) => (
        <SkillGrid key={field.id}>
          <TextField
            select
            required
            placeholder="Skill"
            label="Skill"
            defaultValue={getValues('profile.skills')[index].skill_name}
            // onChange={handleChange(index, 'skill_name')}
            {...register(`profile.skills.${index}.skill_name`)}
          >
            {[getValues('profile.skills')[index].skill_name, ...availableSkills].map((name) => (
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
            defaultValue={getValues('profile.skills')[index].mastery}
            {...register(`profile.skills.${index}.mastery`)}
          >
            {skillMastery.map((mastery: string) => (
              <MenuItem key={mastery} value={mastery}>
                {mastery}
              </MenuItem>
            ))}
          </TextField>
          <IconButton edge="start" color="inherit" sx={iconSX} onClick={handleDelete(index)}>
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
