import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.redBox} />
				<View style={styles.blueBox} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'lightgrey'
	},
	redBox: {
		flex: 1,
		backgroundColor: '#bada55'
	},
	blueBox: {
		flex: 1,
		backgroundColor: 'blue'
	}
});
