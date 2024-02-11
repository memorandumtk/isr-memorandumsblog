import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-16 mt-8 px-8">
      <Link href="/" className="hover:underline">
        Memorandum Blog
      </Link>
    </h2>
  );
}
