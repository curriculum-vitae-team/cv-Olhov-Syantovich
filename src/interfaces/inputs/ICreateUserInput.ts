import { IProfileInput } from '@interfaces/inputs/IProfileInput';
import { IAuthInput } from '@interfaces/inputs/IAuthInput';

export interface ICreateUserInput {
  auth: IAuthInput;
  profile: IProfileInput;
  cvsIds: string[];
  departmentId?: string;
  positionId?: string;
  role: string;
}
