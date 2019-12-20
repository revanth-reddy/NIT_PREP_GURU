import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import App from './App';
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';

const navigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    App: App,
    Login: Login,
  },
  {
    intialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(navigator);
