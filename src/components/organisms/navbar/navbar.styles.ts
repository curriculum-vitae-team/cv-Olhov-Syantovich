export const boxWrapSX = {
  flexGrow: 1,
  position: 'sticky',
  zIndex: 10,
  top: 0
};

export const boxToolbarSX = {
  mr: 2,
  flexGrow: 1
};

export const menuItemSX = {
  borderRadius: 1,
  mr: 2
};

export const typographySX = {
  textAlign: 'center',
  display: {
    xs: 'none',
    sm: 'block'
  },
  ml: 2
};

export const getAnchor = () => (window.innerWidth >= 600 ? 'left' : 'top');
