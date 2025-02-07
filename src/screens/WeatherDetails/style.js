import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#f0f8ff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 10,
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