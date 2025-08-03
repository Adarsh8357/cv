import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adarsh's Portfolio</title>
        <meta name="description" content="A modern portfolio built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-screen p-4 bg-gradient-to-b from-gray-50 to-white">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
