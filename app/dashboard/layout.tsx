import SideNav from '@/app/ui/dashboard/sidenav';
import Navbar from '../ui/shared/navbar';
import TabBar from '../ui/shared/tabbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="hidden w-full md:block">
        <Navbar />
      </div>
      <div className="block md:hidden w-full">
        <TabBar />
      </div>
      <div className="p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
