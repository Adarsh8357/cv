export default function CV() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">My CV</h1>
      <div className="shadow rounded overflow-hidden">
        <iframe
          src="/Adarsh_CV.pdf"
          className="w-full h-[80vh]"
        />
      </div>
      <div className="text-center mt-4">
        <a
          href="/Adarsh_CV.pdf"
          download
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
