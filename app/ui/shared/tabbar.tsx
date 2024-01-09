import {
  HomeIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import UserDropdown from './user-dropdown';
import NavLinks from '../dashboard/nav-links';

const TabBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 flex items-center justify-around border-t border-gray-200 bg-white py-3">
      <NavLinks />
      <UserDropdown />
    </div>
  );
};

export default TabBar;
