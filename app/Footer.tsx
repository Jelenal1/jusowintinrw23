import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-red-600 p-3 flex flex-col items-center mt-5">
      <div className="flex items-center text-2xl gap-2 p-1 select-none">
        <img src="/img/jusologonoir.svg" className="h-14" alt="jusologo noir" />
        JUSO Winterthur
      </div>
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/securitypolicy" className="hover:underline">
        Datenschutzerklärung
      </Link>
      <span className="mt-2.5 text-gray-800">Maintained by Jelena Speer</span>
    </div>
  );
}
