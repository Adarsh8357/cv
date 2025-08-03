export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center mt-12 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center">
        Hi, I'm Adarsh 
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center mb-6">
        A passionate BCA student exploring the world of web development.
        I love building modern, responsive websites using Next.js and Tailwind CSS.
      </p>

      <a
        href="/cv"
        style={{ textDecoration: 'none' }}
        className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
      >
        View CV
      </a>
    </section>
  );
}
