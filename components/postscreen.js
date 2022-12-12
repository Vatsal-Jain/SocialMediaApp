import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import Header from './Header';
import userData from '../assets/data';
import Stories from './Stories';

function Post() {
  return (
    <>
      <View>
        <FlatList
          data={userData}
          ListFooterComponent={<View style={{paddingBottom: 50}} />}
          ListHeaderComponent={
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{backgroundColor: 'black'}}
              data={userData}
              renderItem={({item}) => {
                return <Stories item={item} />;
              }}
              keyExtractor={item => item.id}
            />
          }
          renderItem={({item}) => {
            return <Header item={item} />;
          }}
        />
      </View>
    </>
  );
}

export default Post;
