import React, { Component } from 'react';
import firebase from "firebase"
import { View } from 'react-native';
import { Provider } from "react-redux"
import ReduxThunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import reducers from "./services/reducers"
import Router from "./Router"

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCawX6HM7qLKSXB-dJkNz3NUIqOX2bgeJY",
      authDomain: "react-native-routes.firebaseapp.com",
      databaseURL: "https://react-native-routes.firebaseio.com",
      projectId: "react-native-routes",
      storageBucket: "react-native-routes.appspot.com",
      messagingSenderId: "599614273503"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={{ flex: 1 }}>
          <Router/>
        </View>
      </Provider>
    );
  }

}


export default App;
