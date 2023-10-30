import Header from './header';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};
export default function LayoutMain({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
