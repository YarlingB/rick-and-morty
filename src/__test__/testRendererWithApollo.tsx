// import { GraphQLHandler, GraphQLRequest } from 'msw';
import { render } from '@testing-library/react';
import WithApolloClient from 'hoc/withApollo';
// import { server } from 'mocks/server';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { BrowserRouter } from 'react-router-dom';

export const testRendererWithApollo = (children: React.ReactNode) => {
  return render(
    <Provider store={store}>
      <WithApolloClient>{children}</WithApolloClient>
    </Provider>,
    { wrapper: BrowserRouter }
  );
};
