import { FC } from 'react';
import { EmployeeDialogProps } from '@pages/EmployeeInfo/components/EmployeeDialog/EmployeeDialog.types';
import { Box, Divider } from '@mui/material';
import { boxSX } from '@pages/EmployeeInfo/components/EmployeeDialog/EmployeeDialog.styles';
import { useMutation, useQuery } from '@apollo/client';
import { GET_DEPARTMENTS } from '@api/department/queries';
import { Loader } from '@atoms/loader/loader';
import { GET_SKILLS } from '@api/skill/queries';
import { GET_POSITIONS } from '@api/position/queries';
import { GET_LANGUAGES } from '@api/language/queries';
import { IUpdateUserInput } from '@interfaces/inputs/IUpdateUserInput';
import { PersonalInfoForm } from '@pages/EmployeeInfo/components/Form/PersonalInfoForm';
import { SkillsForm } from '@pages/EmployeeInfo/components/Form/SkillsForm';
import { LanguagesForm } from '@pages/EmployeeInfo/components/Form/LanguagesForm';
import { FormProvider, useForm } from 'react-hook-form';
import { UPDATE_USER } from '@api/user/mutations';
import { ToastStore } from '@store/toastStore/ToastsStore';
import { SeverityEnum } from '@store/toastStore/ToastsStore.type';

export const EmployeeDialog: FC<EmployeeDialogProps> = ({ user = {} }) => {
  const [updateUser] = useMutation(UPDATE_USER);
  const { loading: loadingDepartments, data: departmentsData } = useQuery(GET_DEPARTMENTS);
  const { loading: loadingSkills, data: skillsData } = useQuery(GET_SKILLS);
  const { loading: loadingPositions, data: positionsData } = useQuery(GET_POSITIONS);
  const { loading: loadingLanguages, data: languagesData } = useQuery(GET_LANGUAGES);

  const useForm_ = useForm({
    defaultValues: {
      profile: {
        last_name: user.profile?.last_name || '',
        first_name: user.profile?.first_name || '',
        skills: user.profile?.skills || '',
        languages: []
      },
      positionId: user.position?.id || '',
      departmentId: user.department?.id || '',
      cvsIds: []
    }
  });

  if (loadingDepartments || loadingSkills || loadingPositions || loadingLanguages) {
    return <Loader />;
  }
  return (
    <Box sx={boxSX}>
      <FormProvider {...useForm_}>
        <form
          onSubmit={useForm_.handleSubmit((data) =>
            updateUser({ variables: { id: user.id, user: data } }).then(() =>
              ToastStore.addToast(SeverityEnum.success, 'Success')
            )
          )}
          id="formInDialog"
        >
          <PersonalInfoForm
            personalInfo={useForm_.getValues() as IUpdateUserInput}
            departments={departmentsData.departments}
            positions={positionsData.positions}
          />
          <Divider />
          <SkillsForm allSkills={skillsData.skills} />
          <Divider />
          <LanguagesForm
            languages={user.profile?.languages || []}
            allAvailableLanguages={languagesData.languages}
          />
        </form>
      </FormProvider>
    </Box>
  );
};
