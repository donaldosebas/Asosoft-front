import React, {
  useState, useEffect, useRef,
} from 'react'
import {
  StyleSheet, FlatList, View, Dimensions,
} from 'react-native'
import PropTypes from 'prop-types'
import NewsCard from '../newsCard/newsCard'

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

const NewsCarousel = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const [actual, setActual] = useState(0)
  const flatList = useRef()
  const onViewRef = React.useRef((viewableItems) => setActual(viewableItems.viewableItems[0].index))
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  useEffect(() => {
    const interval = setInterval(() => {
      setActual((old) => {
        const newActual = (old === (data.length - 1)) ? 0 : old + 1
        if (flatList.current) {
          flatList.current.scrollToIndex(
            { index: ((data.length > 1) ? newActual : 0), animated: true },
          )
        }
        return newActual
      })
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatList}
        data={data}
        horizontal
        pagingEnabled
        scrollEnabled
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => (
          <View style={{ width }}>
            <NewsCard notice={item} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

NewsCarousel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
}

export default NewsCarousel
