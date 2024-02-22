// import { AppProps } from "next/app";

// const App = ({ Component, pageProps }: AppProps) => {
//   return (
//     <Component {...pageProps} />
//   );
// };


// export default App;

// import { SessionProvider } from 'next-auth/react';
// import { AppProps } from 'next/app';

// const App = ({ Component, pageProps }: AppProps) => {
//   return (
//     <SessionProvider session={pageProps.session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// };

// export default App;

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

interface MyAppProps extends AppProps {
  pageProps: {
    session: Session | null | undefined; // 这里根据实际情况调整 Session 的类型
  };
}

const App = ({ Component, pageProps }: MyAppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;


// import { SessionProvider } from 'next-auth/react';
// import { AppProps } from 'next/app';

// const App = ({ Component, pageProps }: AppProps) => {
//   return (
//     <SessionProvider session={pageProps.session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// };

// export default App;