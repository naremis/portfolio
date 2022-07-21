import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.svg";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Naremis</title>
      </Head>

      <main>
        <Image src={logo} alt="Vercel Logo" width={500} />
      </main>
    </div>
  );
}
