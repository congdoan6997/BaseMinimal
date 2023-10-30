import { Helmet } from 'react-helmet-async';
import { HomeView } from '../sections/home/view';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>This is home page</title>
      </Helmet>

      <HomeView />
    </>
  );
}
