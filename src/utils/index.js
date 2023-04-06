import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {Toast} from '../components';

const baseURL = 'http://admin-apriccot.developer-ourbase-camp.com/api';
const imageUrl =
  'https://coel-web.developer-ourbase-camp.com/storage/documents/media/';

const ErrorHandler = err => {
  console.warn('error in : ', err);
  if (err?.request?._response?.includes('{')) {
    let ErrorResoponse = JSON.parse(err?.request?._response);
    if (typeof ErrorResoponse?.errors == 'string') {
      Toast(ErrorResoponse?.errors);
    } else if (
      Array.isArray(ErrorResoponse?.errors) &&
      ErrorResoponse?.errors?.length
    ) {
      Toast(ErrorResoponse?.errors[0]);
    } else if (Object?.values(ErrorResoponse?.errors)?.length) {
      let val = Object.values(ErrorResoponse?.errors).reduce((a, b) => {
        return a + '\n' + b;
      });
      Toast(val);
    } else if (typeof ErrorResoponse?.message == 'string') {
      Toast(ErrorResoponse.message);
    } else {
      Toast('else', err?.message);
    }
  } else {
    Toast(err?.request?._response);
  }
};

const getDistanceApi = (apiKey, origin, destination) =>
  `https://maps.googleapis.com/maps/api/distancematrix/json?key=${apiKey}&origins=${origin}&destinations=${destination}`;

let Instance = Axios.create({
  baseURL,
});

let FormDataInstance = Axios.create({
  baseURL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
});

FormDataInstance.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

Instance.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export {
  baseURL,
  imageUrl,
  Instance,
  FormDataInstance,
  getDistanceApi,
  ErrorHandler,
};
