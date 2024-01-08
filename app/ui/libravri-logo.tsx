import { BookOpenIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function LibravriLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-gray-600`}
    >
      <BookOpenIcon className="h-8 w-8 rotate-[15deg]" />
      <p className="text-[20px]">Libravri</p>
    </div>
  );
}
