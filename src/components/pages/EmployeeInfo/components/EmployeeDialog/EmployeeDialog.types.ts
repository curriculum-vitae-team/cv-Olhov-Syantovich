import { IUser } from '@interfaces/IUser';

export type EmployeeDialogProps = {
  user: IUser;
  dialogOpen: boolean;
  closeDialog: () => void;
};
