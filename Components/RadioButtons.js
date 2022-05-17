import {useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Pressable} from 'react-native'

export default function RadioButton({ data, onSelect }) {
     const [userOption, setUserOption] = useState(null)
  return (
    <View>
      {data.map((item) => {
        return (
        <Pressable
      style={
        item.value === userOption ? styles.selected : styles.unselected
      }
      onPress={() => setUserOption(item.value)}
    >
      <Text style={styles.option}>{item.value}</Text>
    </Pressable>
        )
      })}
      <Text>User option: {userOption}</Text>
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