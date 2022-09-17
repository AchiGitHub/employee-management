import Navbar from '../Navbar';
import styles from '../../../styles/Layout.module.css'
import { Container } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container maxWidth='lg'>
                <div className={styles.main}>
                    {children}
                </div>
            </Container>
        </>
    )
}

export default Layout