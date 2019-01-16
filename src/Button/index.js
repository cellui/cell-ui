/*
* @Author: docoder
* @Email:  docoder@163.com
*/
import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
    padding: 16px;
    overflow: hidden;
    background: #ec407a;
    color: white;
    user-select: none;
`;

export default function Button(props) {
    return (
        <ButtonContainer>
            {props.children}
        </ButtonContainer>
    )
}