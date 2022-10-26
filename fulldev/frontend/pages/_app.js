import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
// the loading bar
import '../components/styles/nprogress.css';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

MyApp.getInitialPops = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialPops) {
    pageProps = await Component.getInitialPops(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
