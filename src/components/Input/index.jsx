import React from 'react';
import { Controller } from 'react-hook-form';

import { InputContainer, InputText, IconContainer } from './styles';

const Input = ({ leftIcon, name, control, defaultValue, ...rest }) => {
  return (
    <InputContainer>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ''}
        render={({ field }) => (
          <InputText
            {...field}
            {...rest}
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
          />
        )}
      />
    </InputContainer>
  );
};

export { Input };
