import { styled } from '@mui/material/styles';

export const wrapSX = {
  padding: '0 10px 20px',
  display: 'flex',
  flexDirection: 'column'
};

export const titleSX = {
  textAlign: 'center'
};

export const SkillGrid = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    padding: '10px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 30px',
    columnGap: '20px'
  },
  [theme.breakpoints.up('md')]: {
    padding: '10px 50px'
  }
}));

export const iconSX = {
  mt: '23px',
  width: '30px',
  height: '30px'
};

export const buttonSX = {
  margin: 'auto'
};
