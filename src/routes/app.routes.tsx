import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../pages/Feed';
import PostPiu from '../pages/PostPiu';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Feed" component={Feed}/>
        <AppStack.Screen name="PostPiu" component={PostPiu}/>
    </AppStack.Navigator>
);

export default AppRoutes;


// const { Navigator, Screen } = createStackNavigator();

// function AppStack() {
//     return (
//       <NavigationContainer>
//         <Navigator screenOptions={{ headerShown: false }}>
//           <Screen name="Login" component={Login} />
//           <Screen name="Feed" component={Feed} />
//         </Navigator>
//       </NavigationContainer>
//     );
//   }
  
//   export default AppStack;