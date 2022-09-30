import { createContext, Dispatch, SetStateAction } from 'react';
import { ICv } from '@interfaces/ICv';

type EmployeeDetailsContextType = {
  cvTab: string | number;
  setCvTab: Dispatch<SetStateAction<string | number>>;
  userCvs: ICv[];
};

const defaultValue = {} as EmployeeDetailsContextType;

export const EmployeeDetailsContext = createContext(defaultValue);
