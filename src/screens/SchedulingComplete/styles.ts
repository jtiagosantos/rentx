import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
  padding-top: ${RFValue(30)}px;
`;

export const Content = styled.View`
  flex: 1;
  padding-bottom: 80px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  margin-top: 40px;
`;

export const Message = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  line-height: ${RFValue(25)}px;
  text-align: center;
  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  margin: 80px 0;
  
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  width: ${RFValue(80)}px;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.shape_dark};

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;