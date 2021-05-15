import React from 'react'
import {
  View, Text, StyleSheet, SafeAreaView, ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import TeamImage from '../components/teamVersus'
import DateInformation from '../components/dateInfo'
import Transmision from '../components/transimisionInfo'
import Dropdown from '../components/dropdownQuestions'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  perfil: {
    width: '80%',
    height: 200,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textBiography: {
    backgroundColor: '#1B9CC4',
    borderRadius: 5,
    padding: 23,
    color: 'white',
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

const MatchDescription = ({ route }) => {
  // TODO: quitar deshabilitacion de linea al usar la constante
  // eslint-disable-next-line no-unused-vars
  const { match } = route.params

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TeamImage />
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
}

MatchDescription.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      match: PropTypes.shape({
        local: PropTypes.shape({
          image: PropTypes.string,
          title: PropTypes.string,
          isSubscribed: PropTypes.bool,
        }),
        visit: PropTypes.shape({
          image: PropTypes.string,
          title: PropTypes.string,
          isSubscribed: PropTypes.bool,
        }),
        localScore: PropTypes.number,
        visitScore: PropTypes.number,
        date: PropTypes.string,
        time: PropTypes.string,
        stadium: PropTypes.string,
        price: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default MatchDescription
