import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Toast} from '../../components';
import {routeName} from '../../navigation/routeName';
import {goBack, navigate, replace, reset} from '../../NavService';
import {ErrorHandler, FormDataInstance, Instance} from '../../utils';
import {apis} from '../../utils/apis';

export const setUser = val => dispatch => {
  dispatch({type: 'SET_USER', payload: val});
};

export const registerUser = data => dispatch => {
  dispatch({type: 'LOADER_TRUE'});
  FormDataInstance.post(apis.ReigsterURL, data)
    .then(res => {
      AsyncStorage.setItem('token', res.data.access_token);
      navigate(routeName.login);
    })
    .catch(ErrorHandler)
    .finally(() => {
      dispatch({type: 'LOADER_FALSE'});
    });
};

export const registerSeller = data => dispatch => {
  dispatch({type: 'LOADER_TRUE'});
  FormDataInstance.post('/auth/register', data)
    .then(res => {
      AsyncStorage.setItem('token', res.data.access_token);
      navigate('GlobalStack1', {screen: 'SelectSubscriptionType'});
    })
    .catch(ErrorHandler)
    .finally(() => {
      dispatch({type: 'LOADER_FALSE'});
    });
};

export const loginUser = (data, navigation) => dispatch => {
  dispatch({type: 'LOADER_TRUE'});
  FormDataInstance.post(apis.LoginURL, data)
    .then(res => {
      const {message} = res.data.response.data.user;
      Toast(message);
      AsyncStorage.setItem('token', res?.data.response?.data.accessToken);
      navigate('GlobalStack');

      //   navigate({
      //     index: 0,
      //     name: ['GlobalStack'],
      //   });
    })

    .catch(ErrorHandler)
    .finally(() => {
      dispatch({type: 'LOADER_FALSE'});
    });
};

export const forgotPassword = data => dispatch => {
  dispatch({type: 'LOADER_TRUE'});
  FormDataInstance.post(apis.ForgotURL, data)
    .then(res => {
      const {message, error} = res.data;
      Toast(message || error);
      AsyncStorage.setItem('token', res.data.access_token);
      navigate(routeName.createPassword);
    })
    .catch(ErrorHandler)
    .finally(() => {
      dispatch({type: 'LOADER_FALSE'});
    });
};
// export const ChangePassword = data => dispatch => {
// dispatch({type: 'LOADER_TRUE'});
// FormDataInstance.post(apis.ResetPasswordURL, data)
//   .then(res => {
//     const {message, error} = res.data;
//     Toast(message || error);
//     AsyncStorage.setItem('token', res.data.access_token);
//     goBack();
//   })
//   .catch(ErrorHandler)
//   .finally(() => {
//     dispatch({type: 'LOADER_FALSE'});
//   });
export const ChangePassword =
  (password, confirm_password, navigation) => dispatch => {
    dispatch({type: 'LOADER_TRUE'});
    Instance.post(apis.ResetPasswordURL, {
      password,
      confirm_password,
    })
      .then(x => {
        Toast(x.data.message);
        if (x.data.status) {
          navigate(routeName.login);
        }
      })
      .catch(ErrorHandler)
      .finally(() => {
        dispatch({type: 'LOADER_FALSE'});
      });
  };
