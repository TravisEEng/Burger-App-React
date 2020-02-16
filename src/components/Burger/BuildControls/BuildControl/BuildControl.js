import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = (props) =>(
    <div className={styles.BuildControl}>
        <div className={styles.Label}>
            {props.label}
            <button 
                className={styles.Less} 
                onClick={props.removed} 
                disabled={props.disabled}>Less</button>
            <button className={styles.More} onClick={props.added}>More</button>
        </div>
    </div>
);

export default buildControl;