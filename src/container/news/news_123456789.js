import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  View,
  WebView,
  Image,
  Dimensions
} from 'react-native';

export default class news_123456789 extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: {
				title: '【双甲子校庆】延展这条文脉的轨迹',
				content: '<h2>文脉其远：巍巍上庠 耕读悠长</h2><p>1898年，湖广总督张之洞为实现富国利农的宏愿创办了湖北农务学堂，1905年，张之洞在学堂新校址的开学典礼上勉励师生“手脑并用，知行合一”，并写下楹联“凡民俊秀皆入学，天下大利必归农。”这便是华农120年办学历程的理念之蕴、文脉之源。</p><p>抗战爆发，学堂被迫西迁，改为湖北省立农学院，教务长包望敏教授在《论“耕读”与“新农”》中写道：“湖北省立农学院创立于烽烟遍地，万方多难之日，集海内农学者及三楚青年一堂，朝夕孜孜，耕读不辍，以革新农业为己任，其艰苦卓绝之精神与乎兴农建国之宏愿均有足多者。”</p><h2>学术轨迹：熠熠星辰 作育栋梁</h2><p>湖北农务学堂建设之初，国学大师罗振玉受邀出任监督，他创建的蚕桑实验室，开启了“中学”耕读传统与“西学”近代高等教育办学理念紧密结合的新篇章。西迁时期，条件艰苦、设备简陋，师生仍坚持教学、耕作、实习。抗战胜利后，农学院恢复工作逐渐完成。</p><p>办学兴校，学术为要。从1950年春开始，田叔民、杨惠安、许传桢、任筱波、余传斌、谢孟明、沈聆苏等老师着手开展科研工作，对苹果、柑桔、梨、番茄、马铃薯、水稻等品种做了大量的试验观察。在师生们的共同努力下，学术在传承，文脉在延续。</p>'
			}
		}

		this.deviceHeight = Dimensions.get('window').height
		this.deviceWidth = Dimensions.get('window').width		
	}

	render() {
		return (
			<ScrollView>
				<Image source={require("@/image/back.png")} style={styles.image}/>
				<WebView 
					style={styles.containerWrap}
					source={{html: this.state.data.content,  baseUrl: ''}}
					scalesPageToFit={true}>
				</WebView>
				<View style={styles.footerWrap}>
					<Text style={{textAlign: 'center',color: '#ddd'}}>地址：湖北省武汉市洪山区狮子山街1号 邮编：430070 电话：027-87282027 传真：027-87384670</Text>
					<Text style={{textAlign: 'center',color: '#ddd'}}>CopyRight © 华中农业大学版权所有</Text>
				</View>			
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	image: {
		width: 500,
		height: 260
	},
	containerWrap: {

	},
	footerWrap: {
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 20,
		paddingBottom: 20,		
		marginTop: 10,	
		backgroundColor: '#00712F',
	},
});