import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform,
	StatusBar,
	ScrollView
} from 'react-native';
import {
	Icon,
	Container,
	Content,
	Right,
	Left,
	Thumbnail,
	Header,
	Title,
	Body
} from 'native-base';
import { LinearGradient } from 'expo';

// import components
import CardComponent from '../CardComponent';

export default class HomeTab extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => (
			<Icon name="home" style={{ color: tintColor }} />
		)
	};

	render() {
		const stories = [1, 2, 3, 4, 5, 6];

		return (
			<Container>
				<Header style={styles.androidHeader}>
					<Left>
						<Icon name="camera" style={{ paddingLeft: 10 }} />
					</Left>
					<Body style={styles.androidTitle}>
						<Text
							style={{
								color: 'black',
								fontFamily: 'Billabong',
								fontWeight: '300',
								fontSize: 27
							}}>
							Yaudin
						</Text>
					</Body>
					<Right>
						<Icon name="paper-plane" style={{ paddingRight: 10 }} />
					</Right>
				</Header>

				<Content>
					<View>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								paddingHorizontal: 7,
								marginTop: 4
							}}>
							<Text style={{ fontWeight: 'bold' }}>Stories</Text>

							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Icon name="play" style={{ fontSize: 14 }} />
								<Text style={{ fontWeight: 'bold' }}> Watch All</Text>
							</View>
						</View>
					</View>
					<View>
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{
								alignItems: 'center',
								paddingStart: 5,
								paddingEnd: 5
							}}>
							{stories.map(e => (
								<LinearGradient key={e} colors={['#f09433', '#e5583c', '#dc2743', '#cc2366', '#bc1888']}>
									<Thumbnail
									source={require('../../../assets/feeder/feed-3.png')}/>
								</LinearGradient>
							))}
						</ScrollView>
					</View>
					<CardComponent imageSource="2" likes="20" />
					<CardComponent imageSource="3" likes="103" />
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	androidHeader: {
		...Platform.select({
			android: {
				marginTop: StatusBar.currentHeight,
				backgroundColor: 'white'
			}
		}),
	},
	androidTitle: {
		...Platform.select({
			android: {
				alignItems: 'flex-end',
				marginTop: 10
			}
		})
	}
});
