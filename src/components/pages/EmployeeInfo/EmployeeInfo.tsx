import React, { FC, useContext, useState } from 'react';
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
import { AppContext } from '@templates/app/app.context';
import { EmployeeDialog } from '@pages/EmployeeInfo/components/EmployeeDialog';

const EmployeeInfo: FC = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const { user } = useContext(AppContext);
  const { id } = useParams();
  const { loading, data } = useQuery(GET_USER_BY_ID, {
    variables: { id: id }
  });

  const toggleDialogOpen = () => setDialogOpen(!dialogOpen);

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

      {(user?.role === 'admin' || user?.id === '146' || data.user.id) && (
        <WrapRow>
          <Button color="primary" onClick={toggleDialogOpen}>
            Edit
          </Button>
        </WrapRow>
      )}

      {dialogOpen && <EmployeeDialog user={data.user} dialogOpen={dialogOpen} closeDialog={toggleDialogOpen} />}
    </>
  );
};

export default EmployeeInfo;
