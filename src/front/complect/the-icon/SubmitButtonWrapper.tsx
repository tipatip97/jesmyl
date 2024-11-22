import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const SubmitButtonWrapper = ({
  children,
  ...props
}: { children: React.ReactNode } & OmitOwn<HTMLAttributes<HTMLButtonElement>, 'onSubmit'>) => {
  return (
    <Button
      {...props}
      type="submit"
      formAction=""
      className={(props.className || '') + ' pointer'}
    >
      {children}
    </Button>
  );
};

const Button = styled.button`
  padding: 0;
  background-color: none;
  background: none;
  border: none;
  outline: none;
`;
