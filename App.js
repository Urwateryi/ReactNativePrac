/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab : 'home'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_polular'}
                        selectedTitleStyle={
                            { color : 'red' }
                        }
                        title="最热"
                        renderIcon={() => <Image style={styles.icon} source={require('./res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon,{ tintColor:'red'}]} source={require('./res/images/ic_polular.png')}/>}
                        onPress={() => this.setState({ selectedTab : 'tb_polular' })}>
                        <View style={styles.page1}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_trending'}
                        title="趋势"
                        selectedTitleStyle={
                            { color : 'red' }
                        }
                        renderIcon={() => <Image style={styles.icon} source={require('./res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon,{ tintColor:'red'}]} source={require('./res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({ selectedTab : 'tb_trending' })}>
                        <View style={styles.page2}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_favorite'}
                        selectedTitleStyle={
                            { color : 'red' }
                        }
                        title="收藏"
                        renderIcon={() => <Image style={styles.icon} source={require('./res/images/ic_favorite.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon,{ tintColor:'red'}]} source={require('./res/images/ic_favorite.png')}/>}
                        onPress={() => this.setState({ selectedTab : 'tb_favorite' })}>
                        <View style={styles.page1}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_my'}
                        title="我的"
                        selectedTitleStyle={
                            { color : 'red' }
                        }
                        renderIcon={() => <Image style={styles.icon} source={require('./res/images/ic_my.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.icon,{ tintColor:'red'}]} source={require('./res/images/ic_my.png')}/>}
                        onPress={() => this.setState({ selectedTab : 'tb_my' })}>
                        <View style={styles.page2}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#F5FCFF',
    },
    page1 : {
        flex : 1,
        backgroundColor : 'red'
    },
    page2 : {
        flex : 1,
        backgroundColor : 'yellow'
    },
    icon : {
        height : 22,
        width : 22
    }
});
