import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Shorten from "../components/Shorten";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shortly</title>
        <meta name="description" content="Shortly" />
      </Head>

      <Navbar />

      <Hero />

      <Shorten />

      <Stats />

      <Features />

      <Cta />

      <Footer />

    </div>
  );
}
