import React from 'react';
import _Layout, { Props } from '@theme/Layout';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter5Adapter } from 'use-query-params/adapters/react-router-5';

const Layout: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;
  return (
    <_Layout {...restProps}>
      <QueryParamProvider adapter={ReactRouter5Adapter}>
        {props.children}
      </QueryParamProvider>
    </_Layout>
  );
}

export default Layout;