import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

type Props = {} & React.ComponentPropsWithoutRef<'button'>;

const StyledButton = styled.button({
  padding: '0.8em 1.6em',
  textTransform: 'uppercase',
  background: '#ffffff',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover': {
    background: '#f0f0f0',
  },
  '&:active': {
    background: '#e0e0e0',
  },
});

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <StyledButton {...props} ref={ref} />;
});
