import styled from 'styled-components';


export const List = styled.ul`
    margin: auto;
    width: 50%;
    padding-left: 0;
`;

export const Header = styled.li`
    padding: 5px;
    color: #fff;
    font-weight: bold;
    font-size:24px;
    list-style-type: none;
    background-color:#034f84
`;

export const TextField = styled.input`
    display: inline;
    border-top: 1px solid #888;
    list-style-type: none;
    width: auto;
    padding: 10px 0;
    border: none;
    background-color: #eee;
    outline: none;
`;

export const Button = styled.button`
    float:right;  
`;


export const Item = styled.li`
  display: block;
  border-top: 1px solid #888;
  list-style-type: none;
  padding: 5px 0;
  &:hover {
      background: #EEE;
  }  
`;