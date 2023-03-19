import { Children } from 'react';
import { Outlet } from 'react-router-dom';
import RMHeader from '../../components/common/header/header';

interface IMainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const [header] = Children.toArray(children);
  return (
    <>
      {header ? <Outlet /> : <RMHeader />}
      <Outlet />
    </>
  );
};

export default MainLayout;
