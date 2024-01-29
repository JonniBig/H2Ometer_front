import { WaterConsumptionTracker } from './WaterConsumptionTracer/WaterСonsumptionTracker.jsx';
import { Conteiner, WelcomeStyled } from './WelcomeStyled.styled.js';
import { WhyDrinkWater } from './WhyDrinkWater/WhyDrinkWater.jsx';

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
