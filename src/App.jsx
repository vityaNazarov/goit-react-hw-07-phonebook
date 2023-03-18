import { BrowserRouter } from 'react-router-dom';

import NavBar from 'NavBar/NavBar';
import UserRoutes from 'UserRoutes';

function App() {
  return (
    <BrowserRouter basename="/goit-react-hw-07-phonebook">
      <NavBar />
      <UserRoutes />
    </BrowserRouter>
  );
}

export default App;

