import { MouseEvent } from 'react';

export type settingsUserType = {
  anchorElSettings: null | HTMLElement;
  toggleAnchorElSettings: (event: MouseEvent<HTMLElement>) => void;
  id: string;
};
