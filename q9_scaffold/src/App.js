import { ButtonView } from "./ButtonVariants.styled";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3>Button Variants</h3>
      <div>
        <h3>Outlined Button</h3>
        <ButtonView >OUTLINED</ButtonView>
      </div>
      <div>
        <h3>Filled Button</h3>
        <ButtonView filled bg='#00ffff' color='#FD0202'>FILLED</ButtonView>
      </div>
    </div>
  );
}
