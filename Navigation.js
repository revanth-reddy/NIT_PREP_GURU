import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import App from './App';
import SplashScreen from './screens/SplashScreen';

const navigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    App: App,
  },
  {
    intialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(navigator);
