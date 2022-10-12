import { IUser } from '@interfaces/IUser';
import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export type EmployeeDialogProps = {
  user?: IUser;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<{ user: IUser }>>;
};
