import React, { ChangeEvent, FC } from 'react';
import { CustomGrid } from '@pages/EmployeeInfo/components/Form/PersonalInfoForm/PersonalInfoForm.styles';
import { PersonalInfoFormProps } from '@pages/EmployeeInfo/components/Form/PersonalInfoForm/PersonalInfoForm.types';
import { MenuItem, TextField } from '@mui/material';

export const PersonalInfoForm: FC<PersonalInfoFormProps> = ({
  personalInfo,
  setPersonalInfo,
  departments,
  positions
}) => {
  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPersonalInfo({ ...personalInfo, profile: { ...personalInfo.profile, first_name: event.target.value } });

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPersonalInfo({ ...personalInfo, profile: { ...personalInfo.profile, last_name: event.target.value } });

  const handleDepartmentChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPersonalInfo({ ...personalInfo, departmentId: event.target.value });

  const handlePositionChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPersonalInfo({ ...personalInfo, positionId: event.target.value });

  return (
    <CustomGrid>
      <TextField
        placeholder="First Name"
        required
        label="First Name"
        value={personalInfo.profile.first_name}
        onChange={handleFirstNameChange}
      />
      <TextField
        placeholder="Last Name"
        required
        label="Last Name"
        value={personalInfo.profile.last_name}
        onChange={handleLastNameChange}
      />
      <TextField
        select
        required
        placeholder="Department"
        label="Department"
        value={personalInfo.departmentId || departments[0].name}
        onChange={handleDepartmentChange}
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
        value={personalInfo.positionId || positions[0].name}
        onChange={handlePositionChange}
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
