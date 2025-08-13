import React from 'react';
import _Layout, { Props } from '@theme/Layout';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter5Adapter } from 'use-query-params/adapters/react-router-5';
import Head from '@docusaurus/Head';
import Footer from './Footer/Footer';

const Layout: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;
  return (
    <_Layout {...restProps} noFooter>
      <Head>
        <></>
        {/* <!-- Start of tealtools Zendesk Widget script --> */}
        {/* <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=9594ecd9-292a-4d7f-9732-41583a519fa5"> </script> */}
        {/* <!-- End of tealtools Zendesk Widget script --> */}

      </Head>
      <QueryParamProvider adapter={ReactRouter5Adapter}>
        {/* <a style={{ padding: '1rem', display: 'block', textAlign: 'center', backgroundColor: '#fe6e6e', color: '#fff', fontWeight: 'bold' }} href="/blog/pricing-changes-june-2025">
          Pricing changes are coming July 5, 2025. Free tier will be discontinued.
        </a> */}
        {props.children}
      </QueryParamProvider>

      <Footer />
    </_Layout>
  );
}

export default Layout;
