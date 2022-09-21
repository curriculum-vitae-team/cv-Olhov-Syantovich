import { UseFormRegister } from 'react-hook-form';
import { IUpdateUserInput } from '@interfaces/inputs/IUpdateUserInput';
import { IUser } from '@interfaces/IUser';
import { ILanguage } from '@interfaces/ILanguage';

export type LanguagesFormProps = {
  register: UseFormRegister<IUpdateUserInput>;
  languages: ILanguage[];
  user: IUser;
};
