import { FC, useMemo } from 'react';
import { LanguagesFormProps } from '@pages/EmployeeInfo/components/Form/LanguagesForm/LanguagesForm.types';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import {
  buttonSX,
  iconSX,
  LanguageGrid,
  titleSX,
  wrapSX
} from '@pages/EmployeeInfo/components/Form/LanguagesForm/LanguagesForm.styles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { languageProficiency } from '@constants/languageProficiency';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ILanguageProficiency } from '@interfaces/ILanguageProficiency';

export const LanguagesForm: FC<LanguagesFormProps> = ({ allLanguages }) => {
  const { control, register, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: 'profile.languages' });

  const watchFieldArray = watch('profile.languages');

  const controlledFields = fields.map((field, index) => {
    return { ...field, ...watchFieldArray[index] };
  });

  const availableLanguages = useMemo(() => {
    return [
      ...allLanguages.filter(
        (language) =>
          !controlledFields.find(
            (item: ILanguageProficiency) => item.language_name === language.name
          )
      )
    ].reduce((res, value) => [...res, value.name], [] as string[]);
  }, [allLanguages, controlledFields]);

  const handleAdd = () =>
    append({
      language_name: availableLanguages[0],
      proficiency: languageProficiency[0]
    });

  const handleDelete = (id: number) => () => remove(id);

  return (
    <Box sx={wrapSX}>
      <Typography variant={'h3'} sx={titleSX}>
        Languages
      </Typography>
      {controlledFields.map((field, index) => (
        <LanguageGrid key={field.id}>
          <TextField
            select
            required
            placeholder="Language"
            label="Language"
            value={controlledFields[index].language_name}
            {...register(`profile.languages.${index}.language_name` as const)}
          >
            {[controlledFields[index].language_name, ...availableLanguages].map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            required
            placeholder="Proficiency"
            label="Proficiency"
            value={controlledFields[index].proficiency}
            {...register(`profile.languages.${index}.proficiency` as const)}
          >
            {languageProficiency.map((proficiency: string) => (
              <MenuItem key={proficiency} value={proficiency}>
                {proficiency}
              </MenuItem>
            ))}
          </TextField>
          <IconButton edge="start" color="inherit" sx={iconSX} onClick={handleDelete(index)}>
            <CloseIcon />
          </IconButton>
        </LanguageGrid>
      ))}
      {!!availableLanguages.length && (
        <Button color="primary" sx={buttonSX} onClick={handleAdd}>
          Add
        </Button>
      )}
    </Box>
  );
};
