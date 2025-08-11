import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mt-12 px-4 text-center md:text-left gap-8">
      <div className="flex-shrink-0">
        <Image
          src="/profile.jpg"
          alt="Adarsh Profile"
          width={180}
          height={180}
          className="rounded-2xl shadow-lg border border-gray-200"
        />
      </div>

      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Hi, I&apos;m Adarsh
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
          A passionate BCA student exploring the world of web development.
          I love building modern, responsive websites using Next.js and Tailwind CSS.
        </p>

        <Link
          href="/cv/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold no-underline hover:bg-blue-700 transition"
        >
          View CV
        </Link>
      </div>
    </section>
  );
}
