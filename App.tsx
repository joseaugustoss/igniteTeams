import { Groups } from '@screens/Groups';
import {theme} from './src/theme';
import { ThemeProvider } from 'styled-components';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  
    return (
    
      <ThemeProvider theme={theme}>
      {!fontsLoaded ? (
        <ActivityIndicator
          color={theme.COLORS.GREEN_500}
          size="large"
          style={{flex: 1, backgroundColor: theme.COLORS.GRAY_600}}
        />
      ) : (
        <Groups />
      )}
      </ThemeProvider>
    );
  
}
