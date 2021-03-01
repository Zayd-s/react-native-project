/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//export let Screens = ['Start', 'Home'];

AppRegistry.registerComponent(appName, () => App);
