import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '@api/users/queries';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { Loader } from '@atoms/loader/loader';
import { WrapRow } from '@atoms/wrap-row';
import { PublicInfoViewProps } from '@pages/EmployeeDetails/components/PublicInfoView/PublicInfoView.types';

export const PublicInfoView: FC<PublicInfoViewProps> = ({ togglePublic }) => {
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { id: '146' }
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <Box sx={{ padding: '20px' }}>
      <Avatar
        sx={{ height: '200px', width: '200px', margin: 'auto' }}
        src="https://tlgrm.ru/_/stickers/e3c/62f/e3c62fd2-0ab5-431a-bd8d-7210299657bf/10.jpg"
      />
      <Typography variant={'h3'} sx={{ textAlign: 'center' }}>
        {data.user.profile.full_name || 'Vitalya Bleat'}{' '}
      </Typography>
      <Typography variant={'h4'}>Department: {data.user.profile.department_name}</Typography>
      <Typography variant={'h4'}>Position: {data.user.profile.position_name}</Typography>

      <WrapRow>
        <Button color="primary" onClick={togglePublic}>
          Edit
        </Button>
      </WrapRow>
    </Box>
  );
};
