import axios from 'axios';
import {Toast} from '../../components/toast';

export const MoviesGet = () => dispatch => {
  //   axios
  //     .get(
  //       'https://newsapi.org/v2/top-headlines?country=us&apiKey=bb787670881942678eb6c4e983f33ff8',
  //     )
  //     .then(res => {
  //       const {status, message, data} = res.data;
  //       Toast(message);
  //       dispatch({
  //         type: 'SET_Movies',
  //         payload: res.data.response.data.content,
  //       });
  //     })
  //     .catch(error => console.log(error)).finally;
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
      //   setArticles(res.data.articles);
    })
    .catch(error => console.log(error)).finally;
};
