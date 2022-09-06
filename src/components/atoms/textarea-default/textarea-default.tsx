import React, { FC } from 'react';
import { TextAreaType } from '@atoms/textarea-default/textarea-default.types';
import { DefaultTextarea } from '@atoms/textarea-default/textarea-default.styles';

const TextareaDefault: FC<TextAreaType> = ({ placeholder, required }) => {
  return <DefaultTextarea placeholder={placeholder} required={required} />;
};

export default TextareaDefault;
