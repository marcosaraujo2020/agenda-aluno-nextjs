import AcmeLogo from '@/app/ui/agenda-logo';
import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    // These are Tailwind casses (nome dessas classes são estilos do Tailwind)
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-1 md:w-2/5 md:px-20">

          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal${lusitana.className}`} >
            <strong>📅 "Organize seu tempo, conquiste seus objetivos! Sua jornada acadêmica mais produtiva começa aqui." 🚀</strong> 
          </p>
  
          <Link
            href="/home"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Home</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/pexels-coralbellestudios-811572.jpg"
            width={1000}  
            height={760}
            className='hidden md:block'
            alt='Screenshots of the dashboard project showing desktop version'
          />
        </div>

      </div>
    </main>
  );
}
