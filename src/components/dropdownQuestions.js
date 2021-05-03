import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
})

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState('java')
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 300 }}
      >
        <Picker.Item label="¿Habrá parqueo?" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 100 }}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  )
}

export default Dropdown
