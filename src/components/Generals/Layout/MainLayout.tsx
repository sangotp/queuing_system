import { Layout } from 'antd'
import { Menubar } from "../Menubar";
import { Topbar } from '../Topbar';
import { MainContent } from '../Content/MainContent';
import { MainFooter } from '../Footer';


export const MainLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Menubar />
      <Layout>
        <Topbar />
        <MainContent />
        <MainFooter />
      </Layout>
    </Layout>
  )
}