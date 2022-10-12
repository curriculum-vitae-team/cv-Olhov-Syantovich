import { CSSProperties } from 'react';

export const boxSX = {
  justifyContent: 'center',
  background: '#333333',
  borderRadius: '50%',
  width: '200px',
  height: '200px',
  margin: '20px auto 0'
};

export const centerSX = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const avatarSX = {
  height: '200px',
  width: '200px',
  borderRadius: '50%'
};

export const inputSX = {
  height: '200px',
  width: '200px',
  borderRadius: '50%',
  zIndex: '1',
  opacity: '0',
  position: 'absolute',
  cursor: 'pointer'
} as CSSProperties;

export const addSX = {
  height: '200px',
  width: '200px',
  position: 'absolute',
  zIndex: '1',
  padding: '50px',
  borderRadius: '50%',
  backgroundColor: 'rgba(0,0,0,0.5)'
};

export const closeSX = {
  position: 'absolute',
  margin: '0 180px'
};
