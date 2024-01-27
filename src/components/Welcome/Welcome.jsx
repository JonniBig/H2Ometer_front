import { WaterConsumptionTracker } from './WaterConsumptionTracer/WaterСonsumptionTracker.jsx';
import { WelcomeStyled } from './WelcomeStyled.styled.js';
import { WhyDrinkWater } from './WhyDrinkWater/WhyDrinkWater.jsx';

const Welcome = () => {
  return (
    <WelcomeStyled>
      <WaterConsumptionTracker />
      <WhyDrinkWater />
    </WelcomeStyled>
  );
};

export default Welcome;
