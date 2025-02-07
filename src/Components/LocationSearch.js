import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const LocationSearch = ({onLocationSelect}) => {
  const googlePlacesRef = useRef('');

  const handleLocationSelect = (data, details) => {
    const {lat, lng} = details.geometry.location;

    onLocationSelect(lat, lng);
  };

  const renderAddresses = (item, index) => {
    return (
      <View>
        <Text style={{color: 'black'}}>{item?.description}</Text>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        ref={googlePlacesRef}
        placeholder="Search"
        styles={{
          container: {
            width: '100%',
            flex: 1,
            marginTop: 12,
          },
          textInputContainer: {
            height: 50,
            width: '100%',
            borderRadius: 4,
            flexDirection: 'row',
            alignItems: 'center',
          },
          textInput: {
            height: '95%',
            width: '90%',
            fontSize: 14,
            color: 'black',
            paddingHorizontal: 10,
          },
        }}
        onPress={handleLocationSelect}
        fetchDetails={true}
        query={{
          key: 'AIzaSyAfiFRuEzIuwNuTCJKkk9zgHejZOAby2JY',
          language: 'en',
          types: '(regions)',
        }}
        enablePoweredByContainer={false}
        keepResultsAfterBlur={false}
        textInputProps={{
          autoFocus: true,
        }}
        onFail={error => console.error(error)}
        renderRow={(data, index) => renderAddresses(data, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 16,
    height: 200,
    paddingHorizontal: 20,
  },
});

export default LocationSearch;
