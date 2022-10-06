import { FC } from 'react';

export type ItemMenuType = {
  Icon: FC;
  text: string;
  handlerOnClick: () => void;
};
