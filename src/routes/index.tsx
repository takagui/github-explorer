import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Repository } from '../pages/Repository';

const Router = () => (
  <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/repository/:repository/*' element={<Repository />} />
  </Routes>
);

export { Router };
