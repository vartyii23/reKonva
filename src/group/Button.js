//allow nested modules export in diff file 
import styles from './Button.module.scss'

const Button = () => {
    return (
        <>
            <button className={styles.btn}>
                I am Button
            </button></>
    )
}

export default Button;