import './App.css';
import {RegistrationModal} from "./authorization/RegistrationModal";
import {OrderPage} from "./order/OrderPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegistrationModal></RegistrationModal>
        {/*  <OrderPage></OrderPage>*/}
      </header>
    </div>
  );
}

export default App;
