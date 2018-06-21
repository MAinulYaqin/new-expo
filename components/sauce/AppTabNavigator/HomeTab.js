import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, StatusBar, ScrollView} from 'react-native';
import {Icon, Container, Content, Right, Left, Thumbnail} from 'native-base';

// import components
import CardComponent from '../CardComponent';

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7, marginTop: 4}}>
                            <Text style={{ fontWeight: 'bold' }}>Stories</Text>

                            <View style={{ flexDirection: 'row', 'alignItems': 'center' }}>
                                <Icon name="play" style={{ fontSize: 14 }}></Icon>
                                <Text style={{ fontWeight: 'bold' }}> Watch All</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                alignItems: 'center',
                                paddingStart: 5,
                                paddingEnd: 5
                            }}>
                            <Thumbnail style={styles.stories} source={require('../../../assets/feeder/feed-3.png')}/>
                            <Thumbnail style={styles.stories} source={require('../../../assets/feeder/feed-3.png')}/>
                            <Thumbnail style={styles.stories} source={require('../../../assets/feeder/feed-3.png')}/>
                            <Thumbnail style={styles.stories} source={require('../../../assets/feeder/feed-3.png')}/>
                            <Thumbnail style={styles.stories} source={require('../../../assets/feeder/feed-3.png')}/>
                            <Thumbnail style={styles.stories} source={require('../../../assets/feeder/feed-3.png')}/>
                            <Thumbnail style={styles.stories} source={require('../../../assets/feeder/feed-3.png')}/>
                            <Thumbnail style={styles.stories} source={require('../../../assets/feeder/feed-3.png')}/>
                            <Thumbnail style={styles.stories} source={require('../../../assets/feeder/feed-3.png')}/>
                        </ScrollView>
                    </View>
                    <CardComponent imageSource="2" likes="20"/>
                    <CardComponent imageSource="3" likes="103"/>
                </Content>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHight
            }
        }),
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
    },
    stories: {
        marginHorizontal: 5,
        borderColor: 'pink',
        borderWidth: 2
    }
});