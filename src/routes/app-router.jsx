import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { DummyTable, DummyChart, DummyList } from '../pages/dummy';

export const AppRouter = () => {
  return (
    <Box sx={{ px: 2 }}>
      <Routes>
        <Route path="/dummyTable" element={<DummyTable />} />
        <Route path="/dummyChart" element={<DummyChart />} />
        <Route path="/dummyList" element={<DummyList />} />
      </Routes>
    </Box>
  );
}
