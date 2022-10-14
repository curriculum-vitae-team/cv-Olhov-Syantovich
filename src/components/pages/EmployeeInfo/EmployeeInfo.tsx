import { FC, useEffect } from 'react';
import { PersonalInfo } from '@pages/EmployeeInfo/components/Info/PersonalInfo';
import { Button, Divider } from '@mui/material';
import { WrapRow } from '@atoms/wrap-row';
import { SkillsInfo } from '@pages/EmployeeInfo/components/Info/SkillsInfo';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '@api/user/queries';
import { Loader } from '@atoms/loader';
import { LanguagesInfo } from '@pages/EmployeeInfo/components/Info/LanguagesInfo';
import { EmployeeDialog } from '@pages/EmployeeInfo/components/EmployeeDialog';
import { userStore } from '@store/UserStore';
import { PageHeaderStore } from '@store/PageHeaderStore/PageHeaderStore';
import { DialogStore } from '@store/FullScreenDialogStore/FullScreenDialogStore';

const EmployeeInfo: FC = () => {
  const { id } = useParams();
  const { loading, data, refetch } = useQuery(GET_USER_BY_ID, {
    variables: { id: id }
  });

  useEffect(() => {
    PageHeaderStore.setPageInfo({ header: 'Employees', description: "Employee's details" });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
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
                element: <EmployeeDialog user={data.user} refetch={refetch} />,
                textOfSubmit: 'Update',
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
