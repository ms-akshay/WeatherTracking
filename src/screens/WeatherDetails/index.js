import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { styles } from './style';

const WeatherDetails = ({ route }) => {
  const { weather } = route.params; 

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Weather Details</Text>
      <Text style={styles.subtitle}>Location: {weather.location.name}</Text>
      <Text>Region: {weather.location.region}</Text>
      <Text>Country: {weather.location.country}</Text>
      <Text>Temperature: {weather.current.temp_c} °C</Text>
      <Text>Condition: {weather.current.condition.text}</Text>
      <Image
        source={{ uri: `http:${weather.current.condition.icon}` }}
        style={styles.weatherIcon}
      />
      <Text>Wind Speed: {weather.current.wind_mph} mph</Text>
      <Text>Humidity: {weather.current.humidity}%</Text>
      <Text style={styles.forecastTitle}>Forecast</Text>
      {weather.forecast.map((day) => (
        <View key={day.date} style={styles.forecastItem}>
          <Text>Date: {day.date}</Text>
          <Text>Max Temp: {day.day.maxtemp_c} °C</Text>
          <Text>Min Temp: {day.day.mintemp_c} °C</Text>
          <Text>Condition: {day.day.condition.text}</Text>
          <Image
            source={{ uri: `http:${day.day.condition.icon}` }}
            style={styles.forecastIcon}
          />
        </View>
      ))}
    </ScrollView>
  );
};


export default WeatherDetails;