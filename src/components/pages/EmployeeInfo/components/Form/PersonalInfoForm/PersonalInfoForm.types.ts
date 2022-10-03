import { IUpdateUserInput } from '@interfaces/inputs/IUpdateUserInput';
import { IDepartment } from '@interfaces/IDepartment';
import { IPosition } from '@interfaces/IPosition';
import { Dispatch, SetStateAction } from 'react';

export type PersonalInfoFormProps = {
  personalInfo: IUpdateUserInput;
  departments: IDepartment[];
  positions: IPosition[];
};
