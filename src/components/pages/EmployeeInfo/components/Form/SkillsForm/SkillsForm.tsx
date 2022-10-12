import { FC, useMemo } from 'react';
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
  const { control, register, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: 'profile.skills' });

  const watchFieldArray = watch('profile.skills');

  const controlledFields = fields.map((field, index) => {
    return { ...field, ...watchFieldArray[index] };
  });

  const availableSkills = useMemo(() => {
    return [
      ...allSkills.filter(
        (skill) => !controlledFields.find((item: ISkillMastery) => item.skill_name === skill.name)
      )
    ].reduce((res, value) => [...res, value.name], [] as string[]);
  }, [allSkills, controlledFields]);

  const handleAdd = () =>
    append({
      skill_name: availableSkills[0],
      mastery: skillMastery[0]
    });

  const handleDelete = (id: number) => () => remove(id);

  return (
    <Box sx={wrapSX}>
      <Typography variant={'h3'} sx={titleSX}>
        Skills
      </Typography>
      {controlledFields.map((field, index) => (
        <SkillGrid key={field.id}>
          <TextField
            select
            required
            placeholder="Skill"
            label="Skill"
            value={controlledFields[index].skill_name}
            {...register(`profile.skills.${index}.skill_name` as const)}
          >
            {[controlledFields[index].skill_name, ...availableSkills].map((name) => (
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
            value={controlledFields[index].mastery}
            {...register(`profile.skills.${index}.mastery` as const)}
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
        <Button color="primary" sx={buttonSX} onClick={handleAdd}>
          Add
        </Button>
      )}
    </Box>
  );
};
