import React from 'react'
import {
  StyleSheet, View, Text,
} from 'react-native'
import NotificationCard from './NotificationCard/notificationCard'
import { notificationsText } from '../../text/es.json'

const notData = [
  {
    id: 1,
    title: 'Notification 1',
    body: 'This is the body of the notification',
    date: '2020-01-01',
    time: '12:00',
    read: false,
    preview: 'https://scontent.fgua9-1.fna.fbcdn.net/v/t1.6435-9/241180514_233005005499667_7092593696011908572_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=AHj9mFz7iUUAX9bmthm&_nc_ht=scontent.fgua9-1.fna&oh=718c8f19e07337141e240344a27dec90&oe=61597740',
    association: 'softbol',
  },
  {
    id: 2,
    title: 'Notification 2',
    body: 'This is the body of the notification',
    date: '2020-01-01',
    time: '12:00',
    read: true,
    association: 'basketball',
  },
  {
    id: 5,
    title: 'Notification 2',
    body: 'This is the body of the notification',
    date: '2020-01-01',
    time: '12:00',
    read: true,
    preview: 'https://static.wbsc.org/wp-content/uploads/2017-cag-3-1024x683-768x512.jpg',
    association: 'basketball',
  },
]

const notDataNotRead = [
  {
    id: 1,
    title: 'Notification 3',
    body: 'This is the body of the notification',
    date: '2020-01-01',
    time: '12:00',
    read: false,
    association: 'softbol',
  },
  {
    id: 2,
    title: 'Notification 4',
    body: 'This is the body of the notification',
    date: '2020-01-01',
    time: '12:00',
    read: false,
    association: 'basketball',
  },
]

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

const Notifications = () => (
  <View style={styles.container}>
    <Text>{notificationsText.recents}</Text>
    {
      notData.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))
    }
    <Text>{notificationsText.notReaded}</Text>
    {
      notDataNotRead.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))
    }
  </View>
)

export default Notifications
