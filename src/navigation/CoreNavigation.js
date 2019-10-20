import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from '../containers/HomePage';
import OptionDetailsScreen from '../containers/OptionDetailsScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: { headerTitle: 'Home Page', headerStyle: { backgroundColor: '#F8FCF8' } },
  },
  Details: {
    screen: OptionDetailsScreen,
  }
});

export default createAppContainer(AppNavigator);
