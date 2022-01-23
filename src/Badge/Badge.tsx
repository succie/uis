import styled from '@emotion/styled';
import React, { forwardRef } from 'react';

type Props = {
  children: string;
};

const StyledBadge = styled.div({
  display: 'inline-block',
  padding: '0.3em 1em',
  background: '#e0e0e0',
  borderRadius: '2em',
  fontSize: '0.8em',
});

export const Badge = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <StyledBadge {...props} ref={ref} />;
});
