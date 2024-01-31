import { WaterConsumptionTracker } from './WaterConsumptionTracer/WaterСonsumptionTracker.jsx';
import { WhyDrinkWater } from './WhyDrinkWater/WhyDrinkWater.jsx';

import { Conteiner, WelcomeStyled } from './WelcomeStyled.styled.js';

const Welcome = () => {
  return (
    <Conteiner>
      <WelcomeStyled>
        <WaterConsumptionTracker />
        <WhyDrinkWater />
      </WelcomeStyled>
    </Conteiner>
  );
};

export default Welcome;
