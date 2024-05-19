import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import ChatCard from '../../components/ChatCard';

const listData = [
  {
    name: 'Devin',
    imageUri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    name: 'Dan',
    imageUri:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {name: 'Dominic', imageUri: ''},
  {
    name: 'Jackson',
    imageUri:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'James',
    imageUri:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {name: 'Joel', imageUri: ''},
  {name: 'John', imageUri: ''},
  {name: 'Jillian', imageUri: ''},
  {
    name: 'Jimmy',
    imageUri:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {name: 'Julie', imageUri: ''},
  {
    name: 'Devin',
    imageUri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    name: 'Dan',
    imageUri:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {name: 'Dominic', imageUri: ''},
  {
    name: 'Jackson',
    imageUri:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'James',
    imageUri:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {name: 'Joel', imageUri: ''},
  {name: 'John', imageUri: ''},
  {name: 'Jillian', imageUri: ''},
  {
    name: 'Jimmy',
    imageUri:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  },
  {name: 'Julie', imageUri: ''},
];

const HomeScreen = () => {
  return (
    <View style={[styles.container]}>
      <FlatList
        data={listData}
        initialNumToRender={10}
        renderItem={({item}) => ChatCard(item)}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});
