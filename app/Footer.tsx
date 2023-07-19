import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-rose-500 p-3 flex flex-col items-center mt-5">
      <div className="flex items-center text-2xl gap-2 p-1 select-none">
        <img src="/img/jusologonoir.svg" className="h-14" alt="jusologo noir" />
        JUSO Winterthur
      </div>
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/imprint" className="hover:underline">
        Impressum
      </Link>
      <Link href="/securitypolicy" className="hover:underline">
        Datenschutzerklärung
      </Link>
    </div>
  );
}
