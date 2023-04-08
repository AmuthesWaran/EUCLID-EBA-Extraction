import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Extract from './components/Extract';
import DataTableReact from './components/DataTableReact';

function App() {
  return (
    <div>
      <MainLayout />
      <Routes>
        <Route path="/" element={<Extract />} />
        <Route path="/react-data-table" element={<DataTableReact />} />
      </Routes>
    </div>
  );
}

export default App;
