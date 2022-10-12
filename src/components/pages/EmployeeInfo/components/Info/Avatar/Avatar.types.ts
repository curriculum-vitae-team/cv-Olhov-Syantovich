import { ApolloQueryResult, OperationVariables } from '@apollo/client';
import { IProfile } from '@interfaces/IProfile';
import { IUser } from '@interfaces/IUser';

export type AvatarFormProps = {
  profile: IProfile;
  haveRights: boolean;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<{ user: IUser }>>;
};
