import { AppRouter } from './routes/app-router';
import { Stack } from '@mui/material';
import { Tabs } from './components/tabs';

export const App = () => {
  return (
    <Stack spacing={2}>
      <Tabs />
      <AppRouter />
    </Stack>
  );
}
