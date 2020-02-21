import React from 'react';
import { Button, Text, View, TextInput, FlatList } from 'react-native';
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBr9Nsyj3f6ie-EKvfLzuG_JtZY2CbJV0I",
    authDomain: "piple-testproject.firebaseapp.com",
    databaseURL: "https://piple-testproject.firebaseio.com",
    projectId: "piple-testproject",
    storageBucket: "piple-testproject.appspot.com",
    messagingSenderId: "989607910704",
    appId: "1:989607910704:web:6d97ae667554062cd57cf5",
    measurementId: "G-NJTG4DYZ6R"
};

// Connect with database
firebase.initializeApp(config);

// References in database
const rootRef = firebase.database().ref()
const testRef = rootRef.child('test/')

export default class FirebaseDB extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      countOfClicks: 0
    })

    testRef.on('value', snap => { 
      var count = snap.val().countOfClicks
      if(count > 0){
        console.log("count: "+ count)
        this.setState({
          countOfClicks: count
        })
      }
      else{
        this.setState = ({
          countOfClicks: 0
        })
      }
      return;
    })
  }

  incrementCountOfClicks(){
    testRef.on('value', snap => {         
        if(snap.val() != null){
          testRef.update({
            countOfClicks: this.state.countOfClicks+1
          })
        }
        else{
          testRef.update({
            countOfClicks: 1
        })
        }
    })
  }

  render(){
    return(
    <View style={{bottom: -50}}>
    <Text>Nombre de clics: {this.state.countOfClicks}</Text>
      <Button title="Click here!"
      width="5em" heigth="2em" 
      color="grey" onPress={() => {this.incrementCountOfClicks()}}>
      </Button>
    </View>
    );
  }
}