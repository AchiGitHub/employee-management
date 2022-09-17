import styles from '../styles/NotFound.module.css';
function NotFound() {
  return (
    <div className={styles.NotFound}>
      <h3>Not Found</h3>
      <h4 className="">
        {/* The requested page doesn't exist. */}
      </h4>
    </div>
  );
}

export default NotFound;
