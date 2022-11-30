import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/common/Layout'
import '../styles/globals.css'
import { AppProps } from 'next/app';
import { store } from '../app/store';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
