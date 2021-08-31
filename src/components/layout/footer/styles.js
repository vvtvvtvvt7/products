import styled from 'styled-components';
import { Section } from 'src/components/styled';

export const StyledSection = styled(Section)`
  position: absolute;
  width: ${(props) => props.theme.pageWidth};
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
  height: 79px;
  background-color: ${(props) => props.theme.colorWhite};
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Copyright = styled.span`
  min-width: 148px;
  max-width: bold;
  font-size: ${(props) => props.theme.fontSizeDefault};
  vertical-align: middle;
  text-align: right;
`;
