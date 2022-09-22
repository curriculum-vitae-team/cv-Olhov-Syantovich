import React, { FC, FormEvent, useState } from 'react';
import { EmployeeDialogProps } from '@pages/EmployeeInfo/components/EmployeeDialog/EmployeeDialog.types';
import { Avatar, Box, Divider } from '@mui/material';
import { avatarSX, boxSX } from '@pages/EmployeeInfo/components/EmployeeDialog/EmployeeDialog.styles';
import { useMutation, useQuery } from '@apollo/client';
import { GET_DEPARTMENTS } from '@api/department/queries';
import { Loader } from '@atoms/loader/loader';
import { GET_SKILLS } from '@api/skill/queries';
import { GET_POSITIONS } from '@api/position/queries';
import { GET_LANGUAGES } from '@api/language/queries';
import { IUpdateUserInput } from '@interfaces/inputs/IUpdateUserInput';
import { PersonalInfoForm } from '@pages/EmployeeInfo/components/Form/PersonalInfoForm';
import { FullScreenDialog } from '@templates/FullScreenDialog';
import { SkillsForm } from '@pages/EmployeeInfo/components/Form/SkillsForm';
import { LanguagesForm } from '@pages/EmployeeInfo/components/Form/LanguagesForm';
import { ISkillMastery } from '@interfaces/ISkillMastery';
import { ILanguageProficiency } from '@interfaces/ILanguageProficiency';
import { UPDATE_USER } from '@api/user/mutations';

export const EmployeeDialog: FC<EmployeeDialogProps> = ({ user, dialogOpen, closeDialog }) => {
  const { loading: loadingDepartments, error: errorDepartments, data: departmentsData } = useQuery(GET_DEPARTMENTS);
  const { loading: loadingSkills, error: errorSkills, data: skillsData } = useQuery(GET_SKILLS);
  const { loading: loadingPositions, error: errorPositions, data: positionsData } = useQuery(GET_POSITIONS);
  const { loading: loadingLanguages, error: errorLanguages, data: languagesData } = useQuery(GET_LANGUAGES);

  const [updateUser, { data, error, loading }] = useMutation(UPDATE_USER);

  const [skills, setSkills] = useState<ISkillMastery[]>(user.profile.skills);
  const [languages, setLanguages] = useState<ILanguageProficiency[]>(user.profile.languages);
  const [personalInfo, setPersonalInfo] = useState<IUpdateUserInput>({
    profile: {
      first_name: user.profile.first_name,
      last_name: user.profile.last_name,
      skills,
      languages
    },
    departmentId: user.department_name,
    positionId: user.position_name
  } as IUpdateUserInput);

  const check = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(personalInfo);
    // updateUser({
    //   variables: {
    //     id: '146',
    //     user: { ...personalInfo, departmentId: '1', positionId: '2' } as IUpdateUserInput
    //   }
    // });
  };

  if (loadingDepartments || loadingSkills || loadingPositions || loadingLanguages) {
    return <Loader />;
  }

  return (
    <form onSubmit={check}>
      <FullScreenDialog dialogOpen={dialogOpen} closeDialog={closeDialog} isUpdate={true} header={'Employee'}>
        <Box sx={boxSX}>
          <Avatar sx={avatarSX} src={user.profile.full_name || ''} />
          <PersonalInfoForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            departments={departmentsData.departments}
            positions={positionsData.positions}
          />
          <Divider />
          <SkillsForm skills={skills} setSkills={setSkills} allSkills={skillsData.skills} />
          <Divider />
          <LanguagesForm
            languages={languages}
            setLanguages={setLanguages}
            allAvailableLanguages={languagesData.languages}
          />
        </Box>
      </FullScreenDialog>
    </form>
  );
};
