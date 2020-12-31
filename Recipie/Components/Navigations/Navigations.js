import {createSwitchNavigator, createAppContainer, createDrawerNavigator, createStackNavigator} from 'react-navigation';
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import ForgotPassword from "../Screens/ForgotPassword";

const AppDrawerNavigator = createDrawerNavigator({
    SignIn:{
        screen: SignIn,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    SignUp:{
        screen: SignUp,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    ForgotPassword:{
        screen: ForgotPassword,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
});

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: { screen: AppDrawerNavigator }

});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
