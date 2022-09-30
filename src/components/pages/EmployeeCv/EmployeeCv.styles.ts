import { styled } from '@mui/material';

export const TemplateCv = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    padding: '10px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px'
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '200px 1fr'
  }
}));
