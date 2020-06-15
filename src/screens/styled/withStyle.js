import React from 'react'
import styled from 'styled-components';

const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.fontColor || '#58506B'};
    `
const SmallText = styled.Text`
    font-size: 10px;
    color: ${props => props.fontColor || '#58506B'}
`
const MedText = styled.Text`
    font-size: 14px;
    color: ${props => props.fontColor || '#817699'}
`
const BoldMedText = styled(MedText)`
    font-weight: bold;
`
const WhiteContainer = styled.View`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
    margin-top: 20px;
    box-shadow: 0px 8px 20px rgba(197, 166, 236, 0.05);
    
`
const Pill = styled.View`
    padding: 3px 10px;
    background-color: ${props => props.bgColor || '#E4FFEE'} ;
    border-radius: 20px;
    border: solid 1px #41CF69;
    
`

const BreadCrumb = styled.View`
    border-radius: 20px;
    width: 10px;
    height: 10px;
    background-color: ${props => props.bgColor || '#D7C7FF'} ;
    margin-left: 10px;
`

export { Title, SmallText, MedText, BoldMedText, WhiteContainer, Pill, BreadCrumb }