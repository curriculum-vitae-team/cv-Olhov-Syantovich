import { FC } from 'react';
import { PageHeader } from '@molecules/page-header';
import { PersonalInfo } from '@pages/EmployeeInfo/components/Info/PersonalInfo';
import { Button, Divider } from '@mui/material';
import { WrapRow } from '@atoms/wrap-row';
import { SkillsInfo } from '@pages/EmployeeInfo/components/Info/SkillsInfo';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '@api/user/queries';
import { Loader } from '@atoms/loader/loader';
import { LanguagesInfo } from '@pages/EmployeeInfo/components/Info/LanguagesInfo';
import { EmployeeDialog } from '@pages/EmployeeInfo/components/EmployeeDialog';
import { userStore } from '@store/UserStore';
import { DialogStore } from '@store/FullScreenDialogStore/FullScreenDialogStore';

const EmployeeInfo: FC = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_USER_BY_ID, {
    variables: { id: id }
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <PageHeader header={'Employees'} description={`Employee's details`} />

      <PersonalInfo user={data.user} />

      {!!data.user.profile.skills.length && (
        <>
          <Divider />
          <SkillsInfo skills={data.user.profile.skills} />
        </>
      )}

      {!!data.user.profile.languages.length && (
        <>
          <Divider />
          <LanguagesInfo languages={data.user.profile.languages} />
        </>
      )}

      {(userStore.user$?.role === 'admin' || userStore.user$?.id === data.user.id) && (
        <WrapRow>
          <Button
            color="primary"
            onClick={() =>
              DialogStore.openDialog({
                defaultValuesForm: {
                  profile: { last_name: '', first_name: '', skills: [] },
                  position_name: '',
                  department_name: ''
                },
                element: EmployeeDialog,
                propsOfElement: { user: data.user },
                isUpdate: false,
                header: 'Employee'
              })
            }
          >
            Edit
          </Button>
        </WrapRow>
      )}
    </>
  );
};

export default EmployeeInfo;
