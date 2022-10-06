import { ApolloCache, DefaultContext, MutationUpdaterFunction } from '@apollo/client';

export type cacheUpdater<T, K> = MutationUpdaterFunction<
  T,
  K,
  DefaultContext,
  ApolloCache<unknown>
>;
