import Toast from "react-native-toast-message";

const showToast = (val) => {
  Toast.show({
    text1: val,
  });
};

export default showToast;
