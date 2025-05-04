// Uncomment this line to use CSS modules
// import styles from './app.module.scss';

import { Button, Footer, Header } from '@my-workspace/common-ui';

import { Orders } from '@my-workspace/orders';

export function App() {
  return (
    <div>
      <Header />
      <h1>This is second app for build</h1>
      <Orders />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
