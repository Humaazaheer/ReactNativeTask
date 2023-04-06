const initialState = {
  movies: '',
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_Movies': {
      return {
        ...state,
        movies: action.payload,
      };
    }

    default:
      return state;
  }
};
export default MoviesReducer;
