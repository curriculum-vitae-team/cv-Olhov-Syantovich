import { IProfile } from '@interfaces/IProfile';
import { ICv } from '@interfaces/ICv';
import { IDepartment } from '@interfaces/IDepartment';
import { IPosition } from '@interfaces/IPosition';
import { AbstractData } from '@pages/Employees/components/Table/Table.type';

export interface IUser {
  id: string;
  created_at: string;
  email: string;
  profile: IProfile;
  cvs?: ICv[];
  department?: IDepartment;
  department_name?: string;
  position?: IPosition;
  position_name?: string;
  role: string;
}
