import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { boxSX } from '@atoms/wrap-page-info/wrap-page-info.styles';

export const WrapPageInfo: FC<PropsWithChildren> = ({ children }) => {
  return <Box sx={boxSX}>{children}</Box>;
};
