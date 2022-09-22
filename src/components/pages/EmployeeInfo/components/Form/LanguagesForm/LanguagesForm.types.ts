import { ILanguage } from '@interfaces/ILanguage';
import { Dispatch, SetStateAction } from 'react';
import { ILanguageProficiency } from '@interfaces/ILanguageProficiency';

export type LanguagesFormProps = {
  languages: ILanguageProficiency[];
  setLanguages: Dispatch<SetStateAction<ILanguageProficiency[]>>;
  allAvailableLanguages: ILanguage[];
};
