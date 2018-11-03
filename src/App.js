import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from "react-redux"
import { createStore } from "redux"
import { Header } from "./components/common"
import reducers from "./reducers"
import firebase from "firebase"

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCawX6HM7qLKSXB-dJkNz3NUIqOX2bgeJY",
      authDomain: "react-native-routes.firebaseapp.com",
      databaseURL: "https://react-native-routes.firebaseio.com",
      projectId: "react-native-routes",
      storageBucket: "",
      messagingSenderId: "599614273503"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="React-Redux Advanced" />
        </View>
      </Provider>
    );
  }

}


export default App;
