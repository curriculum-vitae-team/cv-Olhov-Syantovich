import { WrapColumn } from '@atoms/wrap-column';
import { CircularProgress } from '@mui/material';

export const Loader = () => {
  return (
    <WrapColumn>
      <CircularProgress />
    </WrapColumn>
  );
};
