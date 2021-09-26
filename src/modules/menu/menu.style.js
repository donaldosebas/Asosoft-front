import {
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
  },
  containerTop: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  containerTopTitles: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  teamsContainer: {
    paddingLeft: 10,
    width: '100%',
  },
  favoriteTeamsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  middleContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
  },
  bottomContiner: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    margin: 5,
  },
  button: {
    display: 'flex',
    width: '80%',
    height: 50,
    backgroundColor: '#1B9CC4',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  versionText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1B9CC4',
  },
})
export default styles
