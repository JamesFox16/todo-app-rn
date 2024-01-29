import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import AddTask from './screens/AddTask';
import TodoList from './screens/TodoList';
import { DatabaseProvider } from './hooks/useDatabase';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DatabaseProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='TodoList'>
            <Stack.Screen
              name='TodoList'
              component={TodoList}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='AddTask'
              component={AddTask}
              options={{
                animation: 'slide_from_bottom',
                headerShown: true,
                presentation: 'modal',
                headerTitle: 'New Task',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </DatabaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
