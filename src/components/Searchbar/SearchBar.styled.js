import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
  opacity: 1;
}
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  
  &::placeholder {
  font: inherit;
  font-size: 18px;
}
`;
export const Input = styled.input`
display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 1px solid black;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`
