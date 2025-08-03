import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow">
      <div className="max-w-5xl mx-auto flex justify-center md:justify-between items-center p-4">
        <h1 className="font-bold text-lg hidden md:block">Adarsh's Portfolio</h1>
        <div className="flex space-x-4 md:space-x-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/projects" className="hover:text-blue-400">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
