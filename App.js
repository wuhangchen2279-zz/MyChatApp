import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class App extends React.Component {

  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.jpg'
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages)
      }
    });
  }

  render() {
    return (
      <GiftedChat 
        messages = {this.state.messages}
        onSend = {(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
