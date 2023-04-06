import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import moment from 'moment/moment';

const Article = props => {
  return (
    <TouchableOpacity
      // onPress={gotoSource}
      activeOpacity={0.8}
      style={styles.mainCont}>
      <Image
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        style={styles.image}
        source={{
          uri: props.urlToImage,
        }}
      />
      <View style={{paddingHorizontal: 12}}>
        <Text style={styles.title}>{props.Title}</Text>
        <Text numberOfLines={2} style={styles.des}>
          {props.Description}
        </Text>
        <View style={styles.direction}>
          <Text style={{fontSize: 18, color: 'black'}}>by: {props.Author}</Text>
          <Text style={{color: 'red'}}>
            {moment(props.PublishedAt).format('MMM Do YY')}
          </Text>
        </View>
        <Text style={{fontSize: 14, color: 'red'}}>
          <Text children={'source: '} style={{color: 'black'}} />
          {props.SourceName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Article;

const styles = StyleSheet.create({
  direction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  des: {
    fontSize: 14,
    color: 'black',
  },
  mainCont: {
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingBottom: 10,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
});
