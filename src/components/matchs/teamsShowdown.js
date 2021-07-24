import React from 'react'
import {
  StyleSheet, View, Text,
} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 15,
    padding: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  showdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataContainer: {
    width: '49%',
  },
  separator: {
    height: '100%',
    width: 2,
    backgroundColor: '#DADADA',
  },
  teamTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5,
  },
})

const TeamsShowdown = ({
  title, localTitle, localData, visitTitle, visitData,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.showdown}>
      <View style={styles.dataContainer}>
        <Text style={styles.teamTitle}>{localTitle}</Text>
        {
          localData
        }
      </View>
      <View style={styles.separator} />
      <View style={styles.dataContainer}>
        <Text style={[styles.teamTitle, { textAlign: 'right' }]}>{visitTitle}</Text>
        {
          visitData
        }
      </View>
    </View>
  </View>
)

TeamsShowdown.propTypes = {
  title: PropTypes.string.isRequired,
  localTitle: PropTypes.string.isRequired,
  localData: PropTypes.element.isRequired,
  visitTitle: PropTypes.string.isRequired,
  visitData: PropTypes.element.isRequired,
}

export default TeamsShowdown
