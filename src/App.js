import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screen/Home'
import AlimList from './screen/AlimList'
import Login from './screen/Login'
import Main from './screen/Main'
import ListDetail from './screen/ListDetail'
import AlimFlatList from './components/AlimFlatList'
import Loading from './components/Loading'

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions:({navigation}) => ({
                header: null,
            }),
        },
        Login: {
            screen: Login,
        },
        AlimList: {
            screen: AlimList,
            navigationOptions:({navigation}) => ({
                header: null,
            }),
        },

        Main: {
            screen: Main
        },
        ListDetail: {
            screen: ListDetail,
            navigationOptions:({navigation}) => ({
                header: null,
            }),
        },
        AlimFlatList: {
            screen: AlimFlatList
        },
        Loading: {
            screen: Loading,
        }
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return <AppContainer />;
    }
}
