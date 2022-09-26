import { FC } from 'react';
import { EmployeeDialogProps } from '@pages/EmployeeInfo/components/EmployeeDialog/EmployeeDialog.types';
import { Avatar, Box, Divider } from '@mui/material';
import {
  avatarSX,
  boxSX
} from '@pages/EmployeeInfo/components/EmployeeDialog/EmployeeDialog.styles';
import { useQuery } from '@apollo/client';
import { GET_DEPARTMENTS } from '@api/department/queries';
import { Loader } from '@atoms/loader/loader';
import { GET_SKILLS } from '@api/skill/queries';
import { GET_POSITIONS } from '@api/position/queries';
import { GET_LANGUAGES } from '@api/language/queries';
import { IUpdateUserInput } from '@interfaces/inputs/IUpdateUserInput';
import { PersonalInfoForm } from '@pages/EmployeeInfo/components/Form/PersonalInfoForm';
import { SkillsForm } from '@pages/EmployeeInfo/components/Form/SkillsForm';
import { LanguagesForm } from '@pages/EmployeeInfo/components/Form/LanguagesForm';
import { useForm, FormProvider } from 'react-hook-form';
import { DialogStore } from '@store/FullScreenDialogStore/FullScreenDialogStore';

export const EmployeeDialog: FC<EmployeeDialogProps> = ({ user }) => {
  const { loading: loadingDepartments, data: departmentsData } = useQuery(GET_DEPARTMENTS);
  const { loading: loadingSkills, data: skillsData } = useQuery(GET_SKILLS);
  const { loading: loadingPositions, data: positionsData } = useQuery(GET_POSITIONS);
  const { loading: loadingLanguages, data: languagesData } = useQuery(GET_LANGUAGES);

  const useForm_ = useForm({
    defaultValues: DialogStore.defaultValuesForm
  });

  if (loadingDepartments || loadingSkills || loadingPositions || loadingLanguages) {
    return <Loader />;
  }
  return (
    <Box sx={boxSX}>
      <FormProvider {...useForm_}>
        <form
          onSubmit={useForm_.handleSubmit((data) => alert(JSON.stringify(data)))}
          id="formInDialog"
        >
          <Avatar sx={avatarSX} src={user.profile.full_name || ''} />
          <PersonalInfoForm
            personalInfo={
              {
                profile: {
                  first_name: user.profile.first_name,
                  last_name: user.profile.last_name,
                  skills: user.profile.skills,
                  languages: user.profile.languages
                },
                departmentId: user.department_name,
                positionId: user.position_name
              } as IUpdateUserInput
            }
            departments={departmentsData.departments}
            positions={positionsData.positions}
          />
          <Divider />
          <SkillsForm allSkills={skillsData.skills} />
          <Divider />
          <LanguagesForm
            languages={user.profile.languages}
            allAvailableLanguages={languagesData.languages}
          />
        </form>
      </FormProvider>
    </Box>
  );
};
