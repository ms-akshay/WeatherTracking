import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import axios from 'axios';
import LocationSearch from '../../Components/LocationSearch';

import { styles } from './style';

const API_KEY = 'ab1a919076ca4574b7722944250502';
const BASE_URL = 'http://api.weatherapi.com/v1';

const Weather = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [count, setCount] = useState(3);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleLocationSelect = (lat, lng) => {
    setLatitude(lat);
    setLongitude(lng);
    fetchWeatherData(`${lat},${lng}`).then(result => {
      setWeatherData(result);
    });
  };

  const fetchWeatherData = async (location, days = count) => {
    try {
      const currentWeatherResponse = await axios.get(
        `${BASE_URL}/current.json`,
        {
          params: {
            key: API_KEY,
            q: location,
          },
        },
      );

      const forecastResponse = await axios.get(`${BASE_URL}/forecast.json`, {
        params: {
          key: API_KEY,
          q: location,
          days: days,
        },
      });

      return {
        currentWeather: currentWeatherResponse.data,
        forecast: forecastResponse.data.forecast.forecastday,
      };
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  };

  const increment = () => {
    setCount(count + 1);
    fetchWeatherData(`${latitude},${longitude}`, count + 1).then(result => {
      setWeatherData(result);
    });
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      fetchWeatherData(`${latitude},${longitude}`, count - 1).then(result => {
        setWeatherData(result);
      });
    }
  };

  return (
    <View style={styles.container}>
      <LocationSearch onLocationSelect={handleLocationSelect} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.counterText}>Select Number of Days: {count}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Decrement" onPress={decrement} color="#ff6347" />
          <Button title="Increment" onPress={increment} color="#32cd32" />
        </View>

        {weatherData && (
          <View style={styles.weatherContainer}>
            <Text style={styles.currentWeatherTitle}>
              Current Weather in {weatherData.currentWeather.location.name}
            </Text>
            <Text>Region: {weatherData.currentWeather.location.region}</Text>
            <Text>Country: {weatherData.currentWeather.location.country}</Text>
            <Text>
              Temperature: {weatherData.currentWeather.current.temp_c} °C
            </Text>
            <Text>
              Condition: {weatherData.currentWeather.current.condition.text}
            </Text>
            <Image
              source={{
                uri: `http:${weatherData.currentWeather.current.condition.icon}`,
              }}
              style={styles.weatherIcon}
            />
            <Text>
              Wind Speed: {weatherData.currentWeather.current.wind_mph} mph
            </Text>
            <Text>
              Humidity: {weatherData.currentWeather.current.humidity}%
            </Text>

            <Text style={styles.forecastTitle}>{count} Day Forecast</Text>

            <FlatList
              data={weatherData.forecast}
              keyExtractor={item => item.date}
              renderItem={({item}) => (
                <View style={styles.forecastItem}>
                  <Text>Date: {item.date}</Text>
                  <Text>Max Temp: {item.day.maxtemp_c} °C</Text>
                  <Text>Min Temp: {item.day.mintemp_c} °C</Text>
                  <Text>Condition: {item.day.condition.text}</Text>
                  <Image
                    source={{uri: `http:${item.day.condition.icon}`}}
                    style={styles.forecastIcon}
                  />
                </View>
              )}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};




export default Weather;
