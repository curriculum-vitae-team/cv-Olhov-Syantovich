import { FC } from 'react';
import {
  CustomGrid,
  titleSX
} from '@pages/EmployeeInfo/components/Form/PersonalInfoForm/PersonalInfoForm.styles';
import { PersonalInfoFormProps } from '@pages/EmployeeInfo/components/Form/PersonalInfoForm/PersonalInfoForm.types';
import { MenuItem, TextField, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export const PersonalInfoForm: FC<PersonalInfoFormProps> = ({
  personalInfo,
  departments,
  positions
}) => {
  const { register } = useFormContext();

  return (
    <>
      <Typography variant={'h3'} sx={titleSX}>
        Personal Information
      </Typography>
      <CustomGrid>
        <TextField
          placeholder="First Name"
          required
          label="First Name"
          defaultValue={personalInfo.profile.first_name}
          {...register('profile.first_name')}
        />
        <TextField
          placeholder="Last Name"
          required
          label="Last Name"
          defaultValue={personalInfo.profile.last_name}
          {...register('profile.last_name')}
        />
        <TextField
          select
          required
          placeholder="Department"
          label="Department"
          defaultValue={personalInfo.departmentId || null}
          {...register('departmentId')}
        >
          {departments.map(({ name, id }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          required
          placeholder="Position"
          label="Position"
          defaultValue={personalInfo.positionId || null}
          {...register('positionId')}
        >
          {positions.map(({ name, id }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      </CustomGrid>
    </>
  );
};
