import { FlatList, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

const deviceHeight = Dimensions.get('screen').height;

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0 24px 32px 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: -4px;
`;

export const CardList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})`
  background-color: ${({ theme }) => theme.colors.background_tertiary};
`;

export const Separator = styled.View`
  height: 16px;
`;

export const MessageError = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.main};
  text-align: center;
  padding-top: ${deviceHeight/3}px;
  background-color: ${({ theme }) => theme.colors.background_tertiary};
`;

export const MyCarsButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 30px;

  position: absolute;
  right: 22px;
  bottom: 13px;

  align-items: center;
  justify-content: center;
`;