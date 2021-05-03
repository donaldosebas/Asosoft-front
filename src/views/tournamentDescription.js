import React from 'react'
import {
  View, Text, StyleSheet, SafeAreaView, ScrollView,
} from 'react-native'
import IconIonic from 'react-native-vector-icons/Ionicons'
import TeamImage from '../components/teamVersus'
import DateInformation from '../components/dateInfo'
import Transmision from '../components/transimisionInfo'
import Dropdown from '../components/dropdownQuestions'

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: 'flex-start',
  },
  perfil: {
    width: '80%',
    height: 200,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textBiography: {
    backgroundColor: '#C4C4C4',
    borderRadius: 5,
    padding: 23,
    color: 'black',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
  },
  faceicon: {
    width: 55,
    height: 55,
    marginLeft: 15,
  },
  description: {
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  contact: {
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 24,
    marginBottom: 15,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  notificationIconActive: {
    color: '#1B9CC4',
    fontSize: 30,
    textAlign: 'center',
  },
  notificationIconDeactive: {
    color: 'grey',
    fontSize: 30,
    textAlign: 'center',
  },
})

const TournamentDescription = ({ isNotification = true }) => (
  <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        <TeamImage />
        <IconIonic
          name="ios-notifications-outline"
          style={isNotification ? styles.notificationIconActive : styles.notificationIconDeactive}
        />
        <Text style={styles.description}>Descripción</Text>
        <Text style={styles.textBiography}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged.
        </Text>
        <DateInformation />
        <Text style={styles.description}>Mas información</Text>
        <Text style={styles.textBiography}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged.
        </Text>
        <Transmision />
        <Dropdown />
      </View>
    </ScrollView>
  </SafeAreaView>

)
export default TournamentDescription
