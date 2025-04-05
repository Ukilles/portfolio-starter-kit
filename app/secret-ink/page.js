
import Head from 'next/head';

export default function SecretInkPage() {
  return (
    <>
      <Head>
        <title>Secret Ink Page</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to the Secret Ink Page</h1>
        <p>This page is only accessible via direct link.</p>
      </main>
    </>
  );
}
Add secret-ink route
