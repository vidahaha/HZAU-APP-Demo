import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Alert
} from 'react-native';

import {item} from '../data/list.json'


export default class Index extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item,
		}
	}

	render() {
		return (
			<View>
				<Image source={require("../image/back.png")} style={styles.image}/>	
				<View style={styles.listWrap}>
					<FlatList data={this.state.item} renderItem={({item}) => 
						<Text style={styles.list} onPress={()=>{
							Alert.alert('ok');
						}}>
							{this.format(item.title, 20)} 
						</Text>
					} />
				</View>			
			</View>
		);
	}

	format( text, len ) {
		if (text.length > len ) {
			text = text.slice(0, len-1) + '...';
		}
		return text;
	}
}

const styles = StyleSheet.create({
	image: {
		width: 500,
		height: 260
	},
	listWrap: {
		paddingLeft: 20,
		paddingRight: 20,
		marginTop: 10,	
	},
	list: {
		fontSize:18,
		marginTop: 5,
		marginBottom: 5,
	}
});