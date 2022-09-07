import { IProfile } from '@interfaces/IProfile';
import { ICv } from '@interfaces/ICv';

export interface IUser {
  id: string;
  created_at: string;
  email: string;
  profile: IProfile;
  role: string;
  cvs: ICv[];
}
