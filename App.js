import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from "./src/screens/HomePage";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import BoxScreen from './src/screens/BoxScreen';
import Exercise from './src/screens/Exercise'



const navigator = createStackNavigator(
  {
    Home: HomePage,
    Component: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Box: BoxScreen,
    Ex: Exercise
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
