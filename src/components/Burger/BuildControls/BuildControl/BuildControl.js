import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = (props) =>(
    <div className={styles.BuildControl}>
        <div className={styles.Label}>
            {props.label}
            <button className={styles.Less}>Less</button>
            <button className={styles.More}>More</button>
        </div>
    </div>
);

export default buildControl;