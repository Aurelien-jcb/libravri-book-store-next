import { XMarkIcon } from '@heroicons/react/24/outline';
import NavLinks from '../dashboard/nav-links';

interface NavbarOverlayProps {
  onClose: () => void;
}

const NavbarOverlay: React.FC<NavbarOverlayProps> = ({ onClose }) => {
  return (
    <div className="z-10 right-0 fixed top-0 h-full w-full bg-black bg-opacity-50">
      <div className="flex h-full w-96 flex-col bg-white">
        <div className="flex justify-end p-4">
          <XMarkIcon className="w-6 cursor-pointer" onClick={onClose} />
        </div>
        <NavLinks/>
      </div>
    </div>
  );
};

export default NavbarOverlay;
