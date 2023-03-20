import WithApolloClient from './hoc/withApollo';
import { AppRouter } from './routes/appRouter';

import './styles/global.scss';

const App = () => {
  return (
    <div className='App'>
      <WithApolloClient>
        <AppRouter />
      </WithApolloClient>
    </div>
  );
};

export default App;
