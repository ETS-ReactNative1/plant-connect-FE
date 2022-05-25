import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import styled from 'styled-components'

export default function Header() {
	return (
		<View style={styles.header}>
			<PlantBackground source={require('../planty.png')}>
				<Image
					style={styles.logo}
					source={require('../planty_swapper.png')}></Image>
			</PlantBackground>
		</View>
	)
}

const PlantBackground = styled.ImageBackground`
	width: 100%;
	height: 50%;
`
const styles = StyleSheet.create({
	header: {
		height: 900,
		marginBottom: 100,
	},
	logo: {
		marginTop: 1,
		width: 220,
		height: 76,
		marginLeft: 10,
	},
})
