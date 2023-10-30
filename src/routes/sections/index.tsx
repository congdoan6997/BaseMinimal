import { useRoutes } from 'react-router-dom';
import LayoutMain from '../../layouts/main/layout';
import HomePage from '../../pages/home';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <LayoutMain>
          <HomePage />
        </LayoutMain>
      ),
    },
  ]);
}
