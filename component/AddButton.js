import styles from "./../styles/AddButton.module.css";
const AddButton = ({ setClose }) => {
  return (
    <div
      onClick={() => {
        setClose(true);
      }}
      className={styles.mainAddButton}
    >
      Add New pizza
    </div>
  );
};
export default AddButton;
