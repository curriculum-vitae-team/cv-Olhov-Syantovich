import React, { FC } from 'react';
import { CustomGrid } from '@pages/EmployeeInfo/components/Form/PersonalInfoForm/PersonalInfoForm.styles';
import { PersonalInfoFormProps } from '@pages/EmployeeInfo/components/Form/PersonalInfoForm/PersonalInfoForm.types';
import { MenuItem, TextField } from '@mui/material';

export const PersonalInfoForm: FC<PersonalInfoFormProps> = ({ register, departments, positions, user }) => {
  return (
    <CustomGrid>
      <TextField
        placeholder="First Name"
        required
        label="First Name"
        {...register('profile.first_name', {
          required: 'Please, specify the field'
        })}
      />
      <TextField
        placeholder="Last Name"
        required
        label="Last Name"
        {...register('profile.last_name', {
          required: 'Please, specify the field'
        })}
      />
      <TextField
        select
        required
        placeholder="Department"
        label="Department"
        defaultValue={user.department_name || departments[0].name}
        inputProps={register('departmentId', {
          required: 'Please, specify the field'
        })}
      >
        {departments.map(({ name, id }) => (
          <MenuItem key={id} value={name}>
            {name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        required
        placeholder="Position"
        label="Position"
        defaultValue={user.position_name || positions[0].name}
        inputProps={register('positionId', {
          required: 'Please, specify the field'
        })}
      >
        {positions.map(({ name, id }) => (
          <MenuItem key={id} value={name}>
            {name}
          </MenuItem>
        ))}
      </TextField>
    </CustomGrid>
  );
};
