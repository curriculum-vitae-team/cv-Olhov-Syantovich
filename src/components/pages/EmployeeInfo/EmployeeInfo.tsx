import React, { FC, useContext, useState } from 'react';
import { PageHeader } from '@molecules/page-header';
import { PersonalInformation } from '@pages/EmployeeInfo/components/PersonalInformation';
import { Button, Divider } from '@mui/material';
import { WrapRow } from '@atoms/wrap-row';
import { SkillsInfo } from '@pages/EmployeeInfo/components/SkillsInfo';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '@api/users/queries';
import { Loader } from '@atoms/loader/loader';
import { LanguagesInfo } from '@pages/EmployeeInfo/components/LanguagesInfo';
import { AppContext } from '@templates/app/app.context';

const EmployeeInfo: FC = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_USER_BY_ID, {
    variables: { id: id }
  });

  const { user } = useContext(AppContext);

  const [edit, setEdit] = useState<boolean>(true);

  const togglePublic = () => setEdit(!edit);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <PageHeader header={'Employees'} description={`Employee's details`} />

      <PersonalInformation user={data.user} />

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

      {(user?.role === 'ADMIN' || user?.id === data.user.id) && (
        <WrapRow>
          <Button color="primary" onClick={togglePublic}>
            Edit
          </Button>
        </WrapRow>
      )}
    </>
  );
};

export default EmployeeInfo;
