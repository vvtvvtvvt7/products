import styled from 'styled-components';
import { Img } from 'src/components/styled';
import Panel from 'src/components/ui/panel/panel';
import Title from 'src/components/ui/title/title';

export const ProductImage = styled(Img)`
  width: 248px;
  height: 248px;
  margin-right: 20px;
`;

export const ContentWrapper = styled.div`
  position: relative;
  min-height: 200px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

export const ProductPanel = styled(Panel)`
  display: flex;
`;

export const ProductTitle = styled(Title)`
  margin-bottom: 15px;
`;

export const Price = styled.span`
  position: absolute;
  bottom: 0;
  padding: 4px 8px;
  background-color: ${(props) => props.theme.backgroundColorBlue};
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  display: inline-block;
`;
