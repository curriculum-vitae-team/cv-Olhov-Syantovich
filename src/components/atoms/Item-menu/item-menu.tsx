import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ItemMenuType } from '@atoms/Item-menu/item-menu.type';

export const ItemMenu = ({ text, Icon, handlerOnClick }: ItemMenuType) => {
  return (
    <ListItem disablePadding onClick={handlerOnClick}>
      <ListItemButton>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
