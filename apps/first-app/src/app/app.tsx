// Uncomment this line to use CSS modules
// import styles from './app.module.scss';

import { Footer, Header } from '@my-workspace/common-ui';

import { Products } from '@my-workspace/products';

export function App() {
  return (
    <div>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <Header />
      <h1>This is First App</h1>
      <Products />
      <Footer />
    </div>
  );
}

export default App;
