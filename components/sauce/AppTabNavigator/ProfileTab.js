import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {
	Icon,
	Container,
	Header,
	Content,
	Body,
	Left,
	Right,
	Title,
	Button
} from 'native-base';

export default class ProfileTab extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => (
			<Icon name="person" style={{ color: tintColor }} />
		)
	};

	render() {
		return (
			<Container>
				{/* Navbar */}
				<Header style={styles.androidHeader}>
					<Left>
						<Icon name="person-add" style={{ paddingLeft: 10 }} />
					</Left>
					<Body style={styles.androidTitle}>
						<Text>AinulBedjo</Text>
					</Body>
					<Right>
						<EntypoIcon
							name="back-in-time"
							style={{ paddingRight: 10, fontSize: 30 }}
						/>
					</Right>
				</Header>
				{/* Content */}
				<Content />
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	androidHeader: {
		...Platform.select({
			android: {
				marginTop: StatusBar.currentHeight,
				backgroundColor: 'white'
			}
		})
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
