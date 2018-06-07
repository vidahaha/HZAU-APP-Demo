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

import {Actions} from "react-native-router-flux";

import {item} from '@/data/list.json'

export default class News extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item,
		}
	}

	render() {
		return (
			<View>
				<Image source={require("@/image/back.png")} style={styles.image}/>	
				<View style={styles.listWrap}>
					<FlatList data={this.state.item}  renderItem={({item,index}) => 
						<Text style={styles.list} key={index} onPress={()=> {
							Actions.news_123456789()
						}}>
							{this.format(item.title, 20)} 
						</Text>
					} />
				</View>
				<View style={styles.footerWrap}>
					<Text style={{textAlign: 'center',color: '#ddd'}}>地址：湖北省武汉市洪山区狮子山街1号 邮编：430070 电话：027-87282027 传真：027-87384670</Text>
					<Text style={{textAlign: 'center',color: '#ddd'}}>CopyRight © 华中农业大学版权所有</Text>
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
	footerWrap: {
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 20,
		paddingBottom: 20,		
		marginTop: 10,	
		backgroundColor: '#00712F',
	},
	list: {
		fontSize:18,
		marginTop: 5,
		marginBottom: 5,
	},

});