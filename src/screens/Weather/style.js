import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      // flex: 1,
      height: '100%',
      backgroundColor: '#f0f8ff',
    },
    scrollView: {
      padding: 20,
    },
    counterText: {
      fontSize: 20,
      marginBottom: 20,
      textAlign: 'center',
      color: '#333',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    weatherContainer: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
    },
    currentWeatherTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign: 'center',
    },
    weatherIcon: {
      width: 64,
      height: 64,
      alignSelf: 'center',
    },
    forecastTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      textAlign: 'center',
    },
    forecastItem: {
      marginVertical: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor: '#e6f7ff',
    },
    forecastIcon: {
      width: 48,
      height: 48,
      alignSelf: 'center',
    },
  });