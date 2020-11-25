import styled from "@emotion/styled";
import React, { forwardRef } from "react";
const StyledButton = styled.button({
    padding: '0.8em 1.6em',
    textTransform: 'uppercase',
    background: 'none',
    border: '1px solid red',
    borderRadius: '4px',
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
        background: 'gray'
    }
});
export const Button = forwardRef((props, ref) => {
    return (<StyledButton {...props} ref={ref}/>);
});
