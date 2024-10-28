import Head from "next/head";
import Image from "next/image";

// const imgixUrl = "https://your-subdomain.imgix.net";

export default function Home() {
  // Construct the image URL manually
  const imageUrl = `https://demo-source.imgix.net/mountains.jpg`;

  return (
    <div>
      <Head>
        <title>Hello World App</title>
        <meta
          name="description"
          content="A simple Hello World app with Imgix"
        />
      </Head>
      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Hello World!</h1>
        <Image
          width={800}
          height={600}
          src={imageUrl}
          alt="Hello World Image"
          style={{ borderRadius: "10px" }}
        />
      </main>
    </div>
  );
}
