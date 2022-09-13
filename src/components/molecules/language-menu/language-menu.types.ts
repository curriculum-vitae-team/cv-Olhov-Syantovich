import { MouseEvent } from 'react';

export interface ILanguageMenuProps {
  anchorElLanguage: null | HTMLElement;
  toggleAnchorElLanguage: (event: MouseEvent<HTMLElement>) => void;
}
