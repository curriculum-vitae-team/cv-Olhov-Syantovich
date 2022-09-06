import React, { FC } from 'react';
import { TextAreaType } from '@atoms/textarea/textarea.types';
import { DefaultTextarea } from '@atoms/textarea/textarea.styles';

const Textarea: FC<TextAreaType> = ({ placeholder, required }) => {
  return <DefaultTextarea placeholder={placeholder} required={required} />;
};

export default Textarea;
