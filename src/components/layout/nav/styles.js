import styled from 'styled-components';
import Button from 'src/components/ui/button/button';

export const StyledButton = styled(Button)`
  position: relative;
  padding: 0;
  width: auto;
  min-width: 0;
  display: inline-block;
  background-color: ${(props)=> props.theme.colorWhite};
  color: ${(props)=> props.theme.fontColorBlack};
  font-size: 18px;
  line-height: 1;
  min-height: 18px;
  padding-top: 21px;
  padding-bottom: 21px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 19px;
    height: 1px;
    background-color: ${(props)=> props.theme.fontColorBlack};
    opacity: 0;
    transition: opacity  0.2s ease-out;
  }

  &:hover,
  &:active {
    background-color: ${(props)=> props.theme.colorWhite};

    &::after {
      opacity: 1;
    }
  }

  &:hover {
    box-shadow: none;
  }
`;
