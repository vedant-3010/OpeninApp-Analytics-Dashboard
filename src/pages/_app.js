// pages/_app.js
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css'; // Import Tailwind CSS styles

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="font-sans">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
