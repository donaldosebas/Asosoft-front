/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
import React from 'react'
import {
  StyleSheet, View, Text, Image,
} from 'react-native'
import PropTypes from 'prop-types'
import SportsIcons from '../../../assets/icons/sportsIcons'
import { notificationsText } from '../../../text/es.json'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 10,
    padding: 1,
    borderWidth: 1,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  data: {
    flex: 2,
  },
  title: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    color: 'black',
  },
  body: {
    fontSize: 12,
    marginBottom: 5,
    color: 'black',
  },
  dateTime: {
    fontSize: 10,
    color: '#555',
  },
  image: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
})

const NotificationCard = ({ notification }) => {
  const {
    id, title, body, date, read, preview, association,
  } = notification

  // function format seconds to date
  const formatDate = (seconds) => {
    const dateF = new Date(seconds * 1000)
    const day = dateF.getDate()
    const month = dateF.getMonth() + 1
    const year = dateF.getFullYear()
    const hours = dateF.getHours()
    const minutes = dateF.getMinutes()
    const secondsF = dateF.getSeconds()
    return `${day}/${month}/${year} a las ${hours}:${minutes}:${secondsF}`
  }

  return (
    <View style={[styles.container, read ? { borderColor: 'white' } : { borderColor: '#1B9CC4' }]}>
      <View style={styles.icon}>
        { SportsIcons[association](40, 40, read ? '#888' : '#1B9CC4') }
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.data}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body}>{body}</Text>
          <Text style={styles.dateTime}>{`${formatDate(date.seconds)}`}</Text>
          { read ? null
            : (
              <Text style={[styles.dateTime, { marginBottom: 5 }]}>
                {notificationsText.notReaded}
              </Text>
            ) }
        </View>
        { preview && <Image style={styles.image} source={{ uri: preview }} /> }
      </View>
    </View>
  )
}

NotificationCard.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.shape({
      nanoseconds: PropTypes.number.isRequired,
      seconds: PropTypes.number.isRequired,
    }).isRequired,
    read: PropTypes.bool.isRequired,
    preview: PropTypes.string,
    association: PropTypes.string.isRequired,
  }).isRequired,
}

export default NotificationCard
