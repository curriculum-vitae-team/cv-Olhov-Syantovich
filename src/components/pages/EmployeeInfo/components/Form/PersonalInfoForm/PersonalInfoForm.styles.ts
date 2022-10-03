import { styled } from '@mui/material/styles';

export const CustomGrid = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    padding: '10px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    columnGap: '20px'
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr',
    padding: '10px 50px'
  }
}));
