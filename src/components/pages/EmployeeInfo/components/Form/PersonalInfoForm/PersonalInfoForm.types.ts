import { UseFormRegister } from 'react-hook-form';
import { IUpdateUserInput } from '@interfaces/inputs/IUpdateUserInput';
import { IDepartment } from '@interfaces/IDepartment';
import { IUser } from '@interfaces/IUser';
import { IPosition } from '@interfaces/IPosition';

export type PersonalInfoFormProps = {
  register: UseFormRegister<IUpdateUserInput>;
  departments: IDepartment[];
  positions: IPosition[];
  user: IUser;
};
