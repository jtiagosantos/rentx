import React, { FC } from 'react';
import { 
  Calendar as CustomCalendar, 
  LocaleConfig, 
  CalendarProps,
} from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

//locale
import { ptBRConfig } from './localeConfig';

LocaleConfig.locales['pt-br'] = ptBRConfig;
LocaleConfig.defaultLocale = 'pt-br';

export const Calendar: FC<CalendarProps> = ({ markedDates, onDayPress }) => {
  const theme = useTheme();

  return (
    <CustomCalendar 
      renderArrow={(direction) => (
        <Feather 
          size={24}
          color={theme.colors.shape}
          name={`chevron-${direction}`}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        textMonthFontFamily: theme.fonts.secondary_600,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date().toString()}
      markingType='period'
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}