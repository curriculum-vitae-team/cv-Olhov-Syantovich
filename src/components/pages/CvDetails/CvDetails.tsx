import { FC, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, IconButton } from '@mui/material';
import { WrapRow } from '@atoms/wrap-row';
import { userStore } from '@store/UserStore';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useMutation, useQuery } from '@apollo/client';
import { Loader } from '@atoms/loader/loader';
import { ICv } from '@interfaces/ICv';
import { GET_CV_BY_ID } from '@api/cv/queries';
import { UNBIND_CV } from '@api/cv/mutations';
import { CvInfo } from '@pages/CvDetails/components/CvInfo';
import { EmployeeDetailsContext } from '@templates/employee-details-tabs/employee-details.context';
import { getPathToCvs } from '@utils/getPathToCv';

const CvDetails: FC = () => {
  const { userCvs, setCvTab } = useContext(EmployeeDetailsContext);
  const { id, cvId } = useParams();
  const { loading, data } = useQuery<{ cv: ICv }>(GET_CV_BY_ID, {
    variables: { id: cvId }
  });

  const navigate = useNavigate();

  const [unbindCv, { loading: deleteLoading }] = useMutation(UNBIND_CV);

  const handleUnbind = () =>
    unbindCv({ variables: { id: cvId } }).then(() => {
      setCvTab(userCvs.find((cv) => cv.id !== cvId)?.name || 0);
      navigate(
        getPathToCvs(
          userCvs.filter((cv) => cv.id !== cvId),
          id as string
        )
      );
    });

  if (loading || deleteLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <CvInfo cv={data?.cv as ICv} />
      <WrapRow>
        {(userStore.user$?.role === 'admin' || userStore.user$?.id === id) && (
          <>
            <Button color="error" onClick={handleUnbind}>
              Unbind
            </Button>
            <Button color="primary">Edit</Button>
          </>
        )}
        <IconButton>
          <PictureAsPdfIcon />
        </IconButton>
      </WrapRow>
    </Box>
  );
};

export default CvDetails;
