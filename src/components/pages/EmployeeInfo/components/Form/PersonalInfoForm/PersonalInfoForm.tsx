import { FC } from 'react';
import { CustomGrid } from '@pages/EmployeeInfo/components/Form/PersonalInfoForm/PersonalInfoForm.styles';
import { PersonalInfoFormProps } from '@pages/EmployeeInfo/components/Form/PersonalInfoForm/PersonalInfoForm.types';
import { MenuItem, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export const PersonalInfoForm: FC<PersonalInfoFormProps> = ({
  personalInfo,
  departments,
  positions
}) => {
  const { register } = useFormContext();

  return (
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
        {...register('department_name')}
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
        defaultValue={personalInfo.positionId || null}
        {...register('position_name')}
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
