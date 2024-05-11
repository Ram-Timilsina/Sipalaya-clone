import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Navbar.js';
import FormRegister from './FormRegister';
import Ending from './Ending.js';
const App = () => {
  return (<>
    <Navbar />
    <FormRegister />
    <Ending />
    </>
  );
};
export default App;
