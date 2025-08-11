export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto mt-10 md:p-8 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">My Projects</h1>

      <p className="mb-4">
        <a
          href="https://game-nine-umber.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline break-all"
          style={{ color: 'blue', textDecoration: 'none' }}
        >
          https://game-nine-umber.vercel.app/
        </a>
      </p>

      <p className="mb-4">
        <a
          href="https://backend-1-72w3.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline break-all"
          style={{ color: 'blue', textDecoration: 'none' }}
        >
          https://backend-1-72w3.onrender.com/
        </a>
      </p>
    </div>
  );
}
