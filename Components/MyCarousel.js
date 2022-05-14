import * as React from 'react'
import { Text, View, StyleSheet, Pressable, SafeAreaView } from 'react-native'

import Carousel from 'react-native-snap-carousel'

export default class MyCarousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeIndex: 0,
			plants: [
				{
					title: 'Monsterra',
					text: 'Text 1',
				},
				{
					title: 'Snake Plant',
					text: 'Text 2',
				},
				{
					title: 'Swiss Cheese Plant',
					text: 'Text 3',
				},
				{
					title: 'Egg Plant',
					text: 'Text 4',
				},
				{
					title: 'Banana Ficus',
					text: 'Text 5',
				},
			],
			seeds: [
				{
					title: 'Papaya',
					text: 'Text 1',
				},
				{
					title: 'Tomato',
					text: 'Text 2',
				},
				{
					title: 'Apple',
					text: 'Text 3',
				},
				{
					title: 'Poppy',
					text: 'Text 4',
				},

				{
					title: 'Pumpkin',
					text: 'Text 5',
				},
			],
			clippings: [
				{
					title: 'Spider',
					text: 'Text 1',
				},
				{
					title: 'Ivy',
					text: 'Text 2',
				},
				{
					title: 'Other',
					text: 'Text 3',
				},
				{
					title: 'Another other',
					text: 'Text 4',
				},
				{
					title: 'Potato',
					text: 'Text 5',
				},
			],
			modalVisible: false,
		}
	}
	hideModal() {
		this.setState({ modalVisible: false })
	}
	_renderItem({ item, index }) {
		// const [modalVisible, setModalVisible] = useState(false);
		return (
			<View
				style={{
					backgroundColor: 'floralwhite',
					borderRadius: 12,
					height: 100,
					width: 100,
					marginTop: 15,
					padding: 15,
					marginLeft: 25,
					marginRight: 25,
				}}>
				<Text style={{ fontSize: 20 }}>{item.title}</Text>
				<Text>{item.text}</Text>

				<Pressable
					style={[styles.button, styles.buttonOpen]}
					// onPress={() => this.setState({modalVisible: true})}
				>
					<Text style={styles.textStyle}>learn more!</Text>
				</Pressable>
			</View>
		)
	}

	render() {
		return (
			<SafeAreaView
				style={{
					flex: 4,
					backgroundColor: '#57784E',
					paddingTop: 1,
					borderRadius: 12,
					height: 500,
				}}>
				<View
					style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center' }}>
					<Carousel
						layout={'default'}
						ref={(ref) => (this.carousel = ref)}
						data={this.state.plants}
						sliderWidth={100}
						itemWidth={120}
						renderItem={this._renderItem}
						onSnapToItem={(index) => this.setState({ activeIndex: index })}
					/>
				</View>
				<View
					style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center' }}>
					<Carousel
						layout={'default'}
						ref={(ref) => (this.carousel = ref)}
						data={this.state.seeds}
						sliderWidth={300}
						itemWidth={300}
						renderItem={this._renderItem}
						onSnapToItem={(index) => this.setState({ activeIndex: index })}
					/>
				</View>
				<View
					style={{ flex: 0.4, flexDirection: 'row', justifyContent: 'center' }}>
					<Carousel
						layout={'default'}
						ref={(ref) => (this.carousel = ref)}
						data={this.state.clippings}
						sliderWidth={300}
						itemWidth={300}
						renderItem={this._renderItem}
						onSnapToItem={(index) => this.setState({ activeIndex: index })}
					/>
				</View>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},

	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		//   marginBottom: 15,
	},
})
