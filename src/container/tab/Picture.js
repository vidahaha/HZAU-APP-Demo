import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ScrollView
} from 'react-native';



export default class Picture extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView>
				<View  style={styles.listWrap}>
					<Image source={require("@/image/back.png")} style={styles.image}/>
					<Image source={require("@/image/back.png")} style={styles.image}/>			
					<Image source={require("@/image/back.png")} style={styles.image}/>			
					<Image source={require("@/image/back.png")} style={styles.image}/>			
					<Image source={require("@/image/back.png")} style={styles.image}/>
				</View>								
			</ScrollView>
		);
	}

}

const styles = StyleSheet.create({
	image: {
		width: 180,
		height: 300	
	},
	listWrap: {
		paddingLeft: 20,
		paddingRight: 20,
		marginTop: 10,	
		flex:1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		// alignContent: 'space-around',
	},
	list: {
		fontSize:18,
		marginTop: 5,
		marginBottom: 5,
	}
});