import React, { FC } from 'react';
import { EmployeeDialogProps } from '@pages/EmployeeInfo/components/EmployeeDialog/EmployeeDialog.types';
import { Avatar, Box, Divider } from '@mui/material';
import { avatarSX, boxSX } from '@pages/EmployeeInfo/components/EmployeeDialog/EmployeeDialog.styles';
import { useQuery } from '@apollo/client';
import { GET_DEPARTMENTS } from '@api/department/queries';
import { Loader } from '@atoms/loader/loader';
import { GET_SKILLS } from '@api/skill/queries';
import { GET_POSITIONS } from '@api/position/queries';
import { GET_LANGUAGES } from '@api/language/queries';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUpdateUserInput } from '@interfaces/inputs/IUpdateUserInput';
import { PersonalInfoForm } from '@pages/EmployeeInfo/components/Form/PersonalInfoForm';
import { FullScreenDialog } from '@templates/FullScreenDialog';
import { SkillsForm } from '@pages/EmployeeInfo/components/Form/SkillsForm';
import { LanguagesForm } from '@pages/EmployeeInfo/components/Form/LanguagesForm';

export const EmployeeDialog: FC<EmployeeDialogProps> = ({ user, dialogOpen, closeDialog }) => {
  const { loading: loadingDepartments, error: errorDepartments, data: departmentsData } = useQuery(GET_DEPARTMENTS);
  const { loading: loadingSkills, error: errorSkills, data: skillsData } = useQuery(GET_SKILLS);
  const { loading: loadingPositions, error: errorPositions, data: positionsData } = useQuery(GET_POSITIONS);
  const { loading: loadingLanguages, error: errorLanguages, data: languagesData } = useQuery(GET_LANGUAGES);

  const { register, handleSubmit } = useForm<IUpdateUserInput>({
    defaultValues: {
      profile: {
        first_name: user.profile.first_name,
        last_name: user.profile.last_name,
        skills: user.profile.skills,
        languages: user.profile.languages
      }
    }
  });

  const check: SubmitHandler<IUpdateUserInput> = (obj) => {
    console.log(obj);
  };

  if (loadingDepartments || loadingSkills || loadingPositions || loadingLanguages) {
    return <Loader />;
  }

  return (
    <form onSubmit={handleSubmit(check)}>
      <FullScreenDialog dialogOpen={dialogOpen} closeDialog={closeDialog} isUpdate={true} header={'Employee'}>
        <Box sx={boxSX}>
          <Avatar sx={avatarSX} src={user.profile.full_name || ''} />
          <PersonalInfoForm
            register={register}
            departments={departmentsData.departments}
            positions={positionsData.positions}
            user={user}
          />
          <Divider />
          <SkillsForm register={register} skills={skillsData.skills} user={user} />
          <Divider />
          <LanguagesForm register={register} languages={languagesData.languages} user={user} />
        </Box>
      </FullScreenDialog>
    </form>
  );
};
