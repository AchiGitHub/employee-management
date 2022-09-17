import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/common/Layout'
import { store } from '../app/store';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
