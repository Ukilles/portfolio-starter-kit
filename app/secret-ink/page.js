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

        {/* 👇 This is your image */}
        <img 
          src="/secret-image.jpg" 
          alt="Echo Cipher Decoder" 
          style={{ 
            maxWidth: '100%', 
            height: 'auto', 
            borderRadius: '10px', 
            marginTop: '2rem' 
          }} 
        />
      </main>
    </>
  );
}
