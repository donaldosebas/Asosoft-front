import React, {
  useState, useEffect, useRef,
} from 'react'
import {
  StyleSheet, FlatList, View, Dimensions,
} from 'react-native'
import PropTypes from 'prop-types'
import NewsCard from './newsCard'

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
        if (flatList.current) flatList.current.scrollToIndex({ index: newActual, animated: true })
        return newActual
      })
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <FlatList
      ref={flatList}
      data={data}
      horizontal
      pagingEnabled
      scrollEnabled
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfigRef.current}
      renderItem={({ item }) => (
        <View style={[styles.container, { width }]}>
          <NewsCard notice={item} />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

NewsCarousel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
}

export default NewsCarousel
