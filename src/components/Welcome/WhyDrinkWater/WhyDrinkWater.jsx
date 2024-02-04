import { useSelector } from 'react-redux';
import { WhyDrinkWaterStyled } from './WhyDrinkWaterStyled.styled';

export const WhyDrinkWater = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  return (
    <WhyDrinkWaterStyled
      className={`dark-modal ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <h2>Why Drink Water</h2>
      <ul>
        <li>Supply of nutrients to all organs</li>
        <li>Providing oxygen to the lungs</li>
        <li>Maintaining the work of the heart</li>
        <li>Release of processed substances</li>
        <li>Ensuring the stability of the internal environment</li>
        <li>Maintaining within the normal temperature</li>
        <li>Maintaining an immune system capable of resisting disease</li>
      </ul>
    </WhyDrinkWaterStyled>
  );
};
