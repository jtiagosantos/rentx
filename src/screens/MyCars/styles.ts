import { FlatList, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

const deviceHeight = Dimensions.get('screen').height;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};

  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 273px;
  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;
  padding: 25px;
  margin-top: -22px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  margin-top: 24px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
  margin-top: 24px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 16px;

  flex: 1;
`;

export const Appointments = styled.View`
  width: 100%;
  padding: 24px 0;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AppointmentsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;

export const AppointmentsQuantity = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Separator = styled.View`
  height: 16px;
`;

export const MessageError = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.main};
  text-align: center;
  padding-top: ${deviceHeight/4}px;
`;

export const CarWrapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CarFooterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterDate = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(13)}px;
`;

export const ListEmptyText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.main};
  text-align: center;
  padding-top: ${deviceHeight/4}px;
`;