import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import TripPortugal from './pages/portugal';
import TripInProgress from './pages/inprogress';

const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/portugal" element={<TripPortugal />} />
           <Route path="/trails" element={<TripInProgress />} />
           <Route path="/europe" element={<TripInProgress />} />
           <Route path="/africa" element={<TripInProgress />} />
        </Routes>
     </>
  );
};


export default App;
