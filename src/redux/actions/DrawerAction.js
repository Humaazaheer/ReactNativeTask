import AsyncStorage from '@react-native-async-storage/async-storage';
import {Toast} from '../../components';
import {routeName} from '../../navigation/routeName';
import {goBack, navigate} from '../../NavService';
import {ErrorHandler, FormDataInstance, Instance} from '../../utils';
import {
  AboutUsURL,
  ContactUsURL,
  FaqURL,
  PrivacyPolicyURL,
  TermConditonURL,
} from '../../utils/apis';

export const termsandcondition = () => dispatch => {
  Instance.get(TermConditonURL)
    .then(res => {
      const {status, message, data} = res.data;
      if (res.data.statusCode === 200) {
        Toast(message);
        dispatch({
          type: 'SET_TermConditon',
          payload: res.data.response.data.content,
        });
      } else {
        Toast('Try again');
      }
    })
    .catch(ErrorHandler);
};

export const PrivacyPolicyContent = () => dispatch => {
  Instance.get(PrivacyPolicyURL)
    .then(res => {
      const {status, message, data} = res.data;
      if (res.data.statusCode === 200) {
        Toast(message);
        dispatch({
          type: 'SET_PrivacyPolicy',
          payload: res.data.response.data.content,
        });
      } else {
        Toast('Try again');
      }
    })
    .catch(ErrorHandler);
};
export const AboutUs = () => dispatch => {
  Instance.get(AboutUsURL)
    .then(res => {
      const {status, message, data} = res.data;
      if (res.data.statusCode === 200) {
        Toast(message);
        dispatch({
          type: 'SET_AboutUs',
          payload: res.data.response.data.content,
        });
      } else {
        Toast('Try again');
      }
    })
    .catch(ErrorHandler);
};

export const Faq = () => dispatch => {
  Instance.get(FaqURL)
    .then(res => {
      const {status, message, data} = res.data;
      if (res.data.statusCode === 200) {
        Toast(message);
        dispatch({
          type: 'SET_Faq',
          payload: res.data.response.data.content,
        });
      } else {
        Toast('Try again');
      }
    })
    .catch(ErrorHandler);
};
// export const ContactUs = () => dispatch => {
//   Instance.get(ContactUsURL)
//     .then(res => {
//       const {status, message, data} = res.data;
//       if (res.data.statusCode === 200) {
//         Toast(message);
//         dispatch({
//           type: 'SET_ContactUs',
//           payload: res.data.response.data.content,
//         });
//       } else {
//         Toast('Try again');
//       }
//     })
//     .catch(ErrorHandler);
// };
export const contactUs = data => dispatch => {
  dispatch({type: 'LOADER_TRUE'});
  FormDataInstance.post(ContactUsURL, data)
    .then(res => {
      const {message, errors} = res.data;
      if (errors.length === 0 && res.data.statusCode === 200) {
        Toast(message);
        AsyncStorage.setItem('token', res.data.access_token);
        navigate(routeName.Profile);
      } else {
        Toast('Try again');
      }
    })
    .catch(ErrorHandler)
    .finally(() => {
      dispatch({type: 'LOADER_FALSE'});
    });
};
