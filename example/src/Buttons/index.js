/*
* @Author: docoder
* @Email:  docoder@163.com
*/
import React from 'react'
import { Button } from 'cell-ui'
import styled from 'styled-components'
const ButtonContainer = styled.div`
    padding: 10px;
`;
export default function() {
    return (
        <ButtonContainer>
            <Button>Primary</Button>
        </ButtonContainer>
    )
}