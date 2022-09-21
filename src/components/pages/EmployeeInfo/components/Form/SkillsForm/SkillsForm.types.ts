import { UseFormRegister } from 'react-hook-form';
import { IUpdateUserInput } from '@interfaces/inputs/IUpdateUserInput';
import { IUser } from '@interfaces/IUser';
import { ISkill } from '@interfaces/ISkill';

export type SkillsFormProps = {
  register: UseFormRegister<IUpdateUserInput>;
  skills: ISkill[];
  user: IUser;
};
