import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TokenGatingWrapper } from '../.';
import { configData } from './config';

const API_KEY: any = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

const App = () => {
  return (
    <TokenGatingWrapper config={configData} alchemyApiKey={API_KEY}>
      <div>
        <a>Private Page</a>
      </div>
    </TokenGatingWrapper>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
