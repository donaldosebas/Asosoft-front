import {
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  containerTop: {
    display: 'flex',
    height: '35%',
    width: '100%',
    justifyContent: 'space-between',
    padding: '5%',
  },
  containerTopTitles: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  favoriteTeamsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  middleContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '50%',
    width: '100%',
    justifyContent: 'center',
  },
  bottomContiner: {
    display: 'flex',
    height: '15%',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    width: '90%',
    height: '50%',
    backgroundColor: '#1B9CC4',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  versionText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1B9CC4',
  },
})
export default styles
