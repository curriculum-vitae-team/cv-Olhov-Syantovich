import { cacheUpdater } from '@utils/cacheUpdater';
import { IDeleteResult } from '@interfaces/results/IDeleteResult';
import { IDeleteInput } from '@interfaces/inputs/IDeleteInput';
import { GET_USER_BY_ID, GET_USERS } from '@api/user/queries';
import { UsersCacheType } from '@interfaces/cache/types';
import { ICreateUserInput } from '@interfaces/inputs/ICreateUserInput';
import { ICreateUserOutput } from '@interfaces/results/ICreateUserOutput';
import { IUpdateUserInput } from '@interfaces/inputs/IUpdateUserInput';
import { IUpdateUserOutput } from '@interfaces/results/IUpdateUserOutput';

export const deleteUserCacheUpdate =
  (id: string): cacheUpdater<IDeleteResult, IDeleteInput> =>
  (cache, { data }) => {
    const existingUsers = cache.readQuery<UsersCacheType>({ query: GET_USERS });

    if (existingUsers && data?.deleteUser.affected) {
      cache.writeQuery({
        query: GET_USERS,
        data: {
          users: existingUsers.users.filter((user) => user.id !== id)
        }
      });
    }
  };

export const createUserCacheUpdate =
  (): cacheUpdater<ICreateUserOutput, ICreateUserInput> =>
  (cache, { data }) => {
    const existingUsers = cache.readQuery<UsersCacheType>({
      query: GET_USERS
    });

    if (existingUsers) {
      cache.writeQuery({
        query: GET_USERS,
        data: {
          users: [data?.user, ...existingUsers.users]
        }
      });
    }
  };
export const updateUserCacheUpdate =
  (id: string): cacheUpdater<IUpdateUserOutput, { id?: string; user: IUpdateUserInput }> =>
  (cache, { data }) => {
    const existingUser = cache.readQuery<UsersCacheType>({
      query: GET_USER_BY_ID,
      variables: { id }
    });
    if (existingUser) {
      cache.writeQuery({
        query: GET_USER_BY_ID,
        variables: { id },
        data: { user: data?.updateUser }
      });
    }
    const existingUsers = cache.readQuery<UsersCacheType>({
      query: GET_USERS
    });

    if (existingUsers) {
      cache.writeQuery({
        query: GET_USERS,
        data: {
          users: [data?.updateUser, ...existingUsers.users]
        }
      });
    }
  };
