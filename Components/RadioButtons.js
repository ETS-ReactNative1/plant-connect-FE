import { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function RadioButton({ data, onSelect }) {
	const [userOption, setUserOption] = useState(null)

	const selectHandler = (value) => {
		onSelect(value)
		setUserOption(value)
	}
	return (
		<View style={styles.radioBtnContainer}>
			{data.map((item) => {
				return (
					<Pressable
						onPress={() => selectHandler(item.value)}
						style={
							item.value === userOption ? styles.selected : styles.unselected
						}>
						<Text style={styles.option}>{item.value}</Text>
					</Pressable>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	option: {
		fontSize: 20,
		color: 'white',
		textAlign: 'center',
	},
	unselected: {
		backgroundColor: '#D4C298',
		margin: 6,
		padding: 8,
		borderRadius: 4,
	},
	selected: {
		backgroundColor: '#57784E',
		margin: 6,
		padding: 8.5,
		borderRadius: 4,
	},
	radioBtnContainer: {
		width: 300,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
