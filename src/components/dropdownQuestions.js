import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import IconIonic from 'react-native-vector-icons/Ionicons'
import {
  Collapse, CollapseHeader, CollapseBody,
} from 'accordion-collapse-react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  drop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 15,
  },
})

const Dropdown = () => (
  <View style={styles.container}>
    <Collapse>
      <CollapseHeader>
        <View style={styles.drop}>
          <Text style={styles.title}>¿Cuantos boletos venderán?</Text>
          <IconIonic
            name="ios-arrow-down-outline"
            style={styles.arrow}
          />
        </View>
      </CollapseHeader>
      <CollapseBody>
        <Text>Aproximadamente 100 entradas</Text>
      </CollapseBody>
    </Collapse>
    <Collapse>
      <CollapseHeader>
        <View style={styles.drop}>
          <Text style={styles.title}>¿Habrá parqueo?</Text>
          <IconIonic
            name="ios-arrow-down-outline"
            style={styles.arrow}
          />
        </View>
      </CollapseHeader>
      <CollapseBody>
        <Text>Estimado usuario, sí contaremos con parqueo</Text>
      </CollapseBody>
    </Collapse>
    <Collapse>
      <CollapseHeader>
        <View style={styles.drop}>
          <Text style={styles.title}>¿Cuantos jugadores tendrá cada equipo?</Text>
          <IconIonic
            name="ios-arrow-down-outline"
            style={styles.arrow}
          />
        </View>
      </CollapseHeader>
      <CollapseBody>
        <Text>La cantidad de jugadores es de acuerdo al partido</Text>
      </CollapseBody>
    </Collapse>
  </View>
)

export default Dropdown
