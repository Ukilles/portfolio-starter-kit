import Head from 'next/head';

export default function SecretInkPage() {
  return (
    <>
      <Head>
        <title>Secret Ink Page</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to the Secret Ink Page</h1>
        <p>This page is only accessible via direct link.</p>

        <img
          src="/images/secret-image.jpg"
          alt="Echo Cipher Decoding Interface"
          style={{
            maxWidth: '100%',
            height: 'auto',
            marginTop: '2rem',
            border: '2px solid #00ffcc',
            borderRadius: '12px'
          }}
        />
      </main>
    </>
  );
}
