import {useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function RadioButton({ data, onSelect }) {
     const [userOption, setUserOption] = useState(null)
    
     const selectHandler = (value) => {
  onSelect(value);
  setUserOption(value);
};
  return (
    <View>
      {data.map((item) => {
        return (
        <Pressable onPress={() => selectHandler(item.value)}
      style={
        item.value === userOption ? styles.selected : styles.unselected
      }
    >
      <Text style={styles.option}>{item.value}</Text>
    </Pressable>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  unselected: {
    backgroundColor: 'red',
    margin: 5,
  },
  selected: {
    backgroundColor: 'blue',
    margin: 6,
    padding: 10,
    borderRadius: 10,
  },
});