import styled from 'styled-components';
import Button from 'src/components/ui/button/button';

export const StyledButton = styled(Button)`
  padding: 0;
  width: auto;
  min-width: 0;
  display: inline-block;
  background-color: ${(props)=> props.theme.colorWhite};
  color: ${(props)=> props.theme.fontColorBlack};
  font-size: 18px;

  &:hover,
  &:active {
    background-color: ${(props)=> props.theme.colorWhite};
    text-decoration: underline;
  }

  &:hover {
    box-shadow: none;
  }
`;
