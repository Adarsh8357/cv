import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center mt-12 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center">
        Hi, I&apos;m Adarsh
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center mb-6">
        A passionate BCA student exploring the world of web development.
        I love building modern, responsive websites using Next.js and Tailwind CSS.
      </p>

      <Link
        href="/cv/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold no-underline"
      >
        View CV
      </Link>
    </section>
  );
}
