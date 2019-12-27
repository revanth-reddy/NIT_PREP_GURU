import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import App from './App';
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import HomeScreen from './screens/Home';
import HelpScreen from './screens/Contribute';
import CompScreen from './screens/comp';

const navigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    App: App,
    Login: Login,
    Home: {screen: HomeScreen},
    Help: {screen: HelpScreen},
    Comp: {screen: CompScreen},
  },
  {
    intialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);



export default createAppContainer(navigator);
