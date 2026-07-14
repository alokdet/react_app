import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
  return (
    <div className={styles.card}
      key={props.key}>
      <img className={styles['card-image']} src="https://th.bing.com/th/id/OIP.5Eddf-iZqa_MN20nbwtGiwHaNK?w=187&h=333&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Card Image" />
      <h5 className={styles['card-title']}>{props.title}</h5>
      <p className={styles['card-description']}>{props.description}</p>
    </div>
  )
}

export default Card
