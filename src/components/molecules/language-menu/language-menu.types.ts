import { MouseEvent } from 'react';

export interface ILanguageMenuProps {
  anchorElLanguage: null | HTMLElement;
  toggleAnchorElLanguage: (e: MouseEvent<HTMLElement>) => void;
}

export const languages: string[] = ['English', 'Russian'];
