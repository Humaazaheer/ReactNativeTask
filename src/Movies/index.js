import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {MoviesGet} from '../redux/actions/MoviesAction';
import Article from '../components/Article';

const Movies = () => {
  const [data, setData] = useState([]);
  const [articles, setArticles] = useState('');

  const getNews = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=bb787670881942678eb6c4e983f33ff8',
        {
          params: {
            category: 'technology',
          },
        },
      )
      .then(res => {
        console.log(res.data);
        setArticles(res.data.articles);
      })
      .catch(error => console.log(error)).finally;
  };

  useEffect(() => {
    getNews();
    MoviesGet();
  }, []);

  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={articles}
          ListEmptyComponent={() => (
            <Text style={{fontSize: 30, textAlign: 'center'}}>NO Data</Text>
          )}
          renderItem={({item}) => (
            <Article
              urlToImage={item.urlToImage}
              Title={item.title}
              Description={item.description}
              Author={item.author}
              PublishedAt={item.publishedAt}
              SourceName={item.source.name}
              url={item.url}
            />
          )}
          keyExtractor={item => item.title}
        />
      </SafeAreaView>
    </View>
  );
};

export default Movies;
