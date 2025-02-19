import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-32 w-32 rotate-[15deg]" />  */}
      <p className="h-20 text-[24px]">Agenda Digital</p>
    </div>
  );
}
