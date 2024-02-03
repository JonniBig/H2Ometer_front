const initialState = {
  isDarkMode: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DARK_MODE':
      return { ...state, isDarkMode: true };
    case 'SET_LIGHT_MODE':
      return { ...state, isDarkMode: false };
    default:
      return state;
  }
};

export default themeReducer;
