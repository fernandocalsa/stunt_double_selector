import React from 'react'
import { connect } from 'react-redux'
import styles from './styles'

const Notification = ({ notification }) => {
  if(!notification) {
    return null
  }
  return (
    <div style={styles.wrapper}>
      <span>{notification}</span>
    </div>
  )
}

const mapState = ({ notification }) => ({
  notification
})

export default connect(mapState)(Notification)
