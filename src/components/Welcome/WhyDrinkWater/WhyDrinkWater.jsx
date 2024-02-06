import { useSelector } from 'react-redux';
import { WhyDrinkWaterStyled } from './WhyDrinkWaterStyled.styled';
import { useTranslation } from 'react-i18next';

export const WhyDrinkWater = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const { t } = useTranslation();

  return (
    <WhyDrinkWaterStyled
      className={`dark-modal ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <h2>{t('whyDrinkWater.title')}</h2>
      <ul>
        <li>{t('whyDrinkWater.list.item1')}</li>
        <li>{t('whyDrinkWater.list.item2')}</li>
        <li>{t('whyDrinkWater.list.item3')}</li>
        <li>{t('whyDrinkWater.list.item4')}</li>
        <li>{t('whyDrinkWater.list.item5')}</li>
        <li>{t('whyDrinkWater.list.item6')}</li>
        <li>{t('whyDrinkWater.list.item7')}</li>
      </ul>
    </WhyDrinkWaterStyled>
  );
};
