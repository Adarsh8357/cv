import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center py-6 border-t mt-10 px-4 text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} Adarsh&apos;s Portfolio. All rights reserved.
      </p>
      <p className="mt-2 flex justify-center items-center gap-2">
        <FaGithub className="text-black text-xl" />
        <a
          href="https://github.com/Adarsh8357"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:underline font-medium"
          style={{ color: "black" }} 
        >
          github.com/Adarsh8357
        </a>
      </p>
    </footer>
  );
}
