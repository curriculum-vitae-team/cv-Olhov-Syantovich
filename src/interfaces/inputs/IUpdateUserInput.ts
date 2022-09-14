import { IProfileInput } from '@interfaces/inputs/IProfileInput';

export interface IUpdateUserInput {
  profile: IProfileInput;
  cvsIds: string[];
  departmentId?: string;
  positionId?: string;
}
