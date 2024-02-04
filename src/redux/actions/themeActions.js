export const setDarkMode = () => {
  localStorage.setItem('darkTheme', 'true');
  return { type: 'SET_DARK_MODE' };
};

export const setLightMode = () => {
  localStorage.setItem('darkTheme', 'false');
  return { type: 'SET_LIGHT_MODE' };
};
