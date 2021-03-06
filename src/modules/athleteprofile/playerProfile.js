import React from 'react'
import {
  View, StyleSheet, ScrollView, Text,
} from 'react-native'
import PropTypes from 'prop-types'
import IconIonic from 'react-native-vector-icons/Ionicons'
import ImageProfile from './profileImage/profileImagePlayer'
import ProfileData from './playerProfileData/dataPlayerProfile'
import RouteProfile from './athletehistory/routePlayerProfile'
import BiographyProfile from './playerBiography/biographyPlayerProfile'

const styles = StyleSheet.create({
  container: {
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
    textAlign: 'justify',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
  },
  faceicon: {
    fontSize: 35,
    color: '#1B9CC4',
    borderRadius: 15,
    margin: 5,
    padding: 4,
    alignItems: 'center',
  },
  biography: {
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  red: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
  },
})

const teams = [
  {
    id: 1,
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQRERYUFBMWGBYWGhgZFhYZFhoZGRgaGhoZGhgYGxocICsiGhwoHxkZIzQjKiwuMTExGSE3PDcwPiswMS4BCwsLDw4PHRERHTYoISQwMDAuOjs5MDAwLjAwMDAwLjEzMDA7MDIwMDAwMDAwLjszMDAyMDAwMDAwMDAwMDAwMP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABwUGAQMEAgj/xABTEAABAgMEBQUHEQYEBgMBAAABAgMABBEFEiExBgdBUXETImGBsQgXMjNykdEUFjVCRFJTVGKCkpOhsrPB0iM0Q3PT8BUldINklKPC4fE2Y+Ik/8QAGgEAAQUBAAAAAAAAAAAAAAAAAAECAwQFBv/EADERAAIBAgQEBAYCAgMAAAAAAAABAgMRBBIhMRNBUXEFBhQyIlJhgZHBMzShsRUkNf/aAAwDAQACEQMRAD8AcsEEJPWhrLW84uVlHChlBKXXkminCMClChkgHCo8Lhm6EHN2QjdhhaRaxZCSUUOPX3Bm20L6gdxI5qT0KIisua8pavNlZgjpLYPmvGEwBSPLhoCYtrDxW4245+/lL/FHvpt+mDv5S/xR76bfpiRGpizt7/1o/TEBaWhliMOKbW5MhacCOUH6YglOhHe5LTpVKjywV39Dv7+bHxR76bfpg7+bHxR76bfpiI9bVg/CzP1g/TB62rB+FmfrB+mGcbDdSx6HFfI/wyX7+bHxR76bfpg7+bHxR76bfpiI9bVg/CzP1g/TB62rB+FmfrB+mF42G6h6HFfI/wAMl+/kx8Ue+m36YO/kx8Ue+m36YiPW1YPwsz9YP0wetqwfhZn6wfpg42F6h6HFfI/wyX7+bHxR76bfpg7+bHxR76bfpiI9bVg/CzP1g/TB62rB+FmfrB+mDjYbqHocV8j/AAyW7+THxR76bfpg7+bHxR/6bfphY6WyrDUypEsSWQE3byipWWJUSkUPQK8YkNA7Kkny+Z1TqUoDfJ3FXcVFd6uB3JiZxpZM/Ig4VTPkt8XTmX/v5sfFHvpt+mDv5sfFHvpt+mIj1tWD8LM/WD9MHrasH4WZ+sH6Yh42G6k/ocV8j/DJfv5sfFHvpt+mDv5sfFHvpt+mIj1tWD8LM/WD9MHrasH4WZ+sH6YONhuoehxXyP8ADJfv5sfFHvpt+mDv5sfFHvpt+mIj1tWD8LM/WD9MHrasH4WZ+sH6YONhuoehxXyP8Ml+/lL/ABR76bfpjB15S/xR76TfpiJ9bVg/CzP1g/TExYWrGypxrlWjM3bykglwCpSopJ8HKohYzw8tiKphq1JXnFpfVGW9eMtXnSr4G8FsnzFQiz6Oaw5CeUENPXXDk04Liydya81ZwySTHz9b8u21MvNtBSW0LUlIUq8qiTTFVBUmleuOEiJ/Txkror3PreCEzqs1lLStEpOLvoXRLLyjzkKOAQ4o+Ek5BRxBwNQea5oqzg4OzHJ3MwRiMw0Upmt23zJ2cu4q668Qy2Rmm8CVqFMiEBVDsJEfPQENnuiHTWTTs/bqp0jkgD5ifPCmi9h1aN+ox7hHl7wTwj1Hh7wTwicQ+uU5QlNPf397yodacoSmn37+95Uc/jPau50Xl7+y+37RX1OARjlhGp7OPEUFE611GmdHLCDlhHPBC5ROIzo5YQcqI54IMonEkdHLCPaVVjkjfL5QjVh8JtvUg7a8crgnsjv0Y8B//a7VxwW145XBPZHfox4D/wDtdq425/0fschR/wDX+7JFSqR45YRiYyjRGIlc6+c2nY6OWEHLCOeCFyjOJI6OWEHLCOeCEyhxJHWDWG3qk9jU/wAx78RUKJrKG7qj9jU/zHvxFRawnuZi+YXehHv+hD6S/vkx/Nc+8Yj4kNJf3yY/mufeMR8dHT9q7HGARH0Xqrt8z1nNrWautEtOnaVIpRR6VJKCekmPnSG/3Oz5Lc4jYlbShxUlYP3BEWIjeF+gqGzBBBFEeJ7uifGSXkzHazCohr90T4yS8mY7WYVEaFD2IY9wjy94J4R6jy94J4RKIfXCcoSmn37+95UOMzzQwLiARmCtII+2Erp9PN+r3uenwvfDdGBi03FW6nQeAzjDENydtP2iBeTjGukbPVzfvx542JKVioII3xQ1W6OsUqc38Ek33OeCMrGMYhUNYQQQCFAKR0MjCBCQBUxrM+379Pnhur2JLwp6zkkQ1teOVwT2R36MeA//ALXauI61XAp0lJBFBiOEduj0whCHrygmvJ0qc6Fcbck/RW+hyFKcf+VzX0u9eRIvjCNFI2pnWyaBaSTsrHp1EYmq0Z1941Lyg0zRBBBDiMKRm7G9lEeFTjYNL4w6YTV7Ic8sVeckja1lDc1Sexqf5j34ioTv+INfCJ88NrVPOtizUVcQP2jxxUB/EVvMWcJFqTujC8fqU5UYqMk9eoj9Jf3yY/mufeMR8SGkhrNzBGI5Vyh+cY9aOWKqcf5NKrqQLzi6VuJqBltUSQAOnoMdDGSjBN7WORSu7IjYbfc6+7eMv2OxAz+gDFwhpx9LtCUcoUKQojYQlIUOqtIn+55QUmeSRQhTAI3EcqCIrzrwq03lew+VOUH8Q3IIxGYqAJ7uifGSXkzHazCohr90T4yS8mY7WYVEaND2IY9wgggiYQ9l1RxKiSczUxkPK98rzmNcENyroKfQOpbGyGScyp6p2n9qsdgHminaxR/mD3zfupi5alPYZjynvxnIpusf2Qd+b91MYeO2fc6Dy9/ZfZlUezjxGx/ONcZy2Orn7mEZTnGIynOHDTbN+LX5KuyK3y6vfK+kYss54tfkq7Iq0anhSTUvsc75k98Ox6UonMk8cYyhxQyURXOhIrTLtPnjxBGxZbHMHdZDqi+0CokFaagk0OMWB3b1xXbF/eGf5ie2LE5t64w/FFacex1/lz+Ofdf6OOCN8rLcoTzkoSkVUtRolIyx6dgG2OWZt/kzclW6EApU84kFyuVW6EhscMemKUKTkr8i3i8fTw7s9ZdCWas525eKLqQKlSyEADfziMItNoWwwbDEimZaExcbTTlObULv0vjDwQTCxcl3HVFbri1KIAKlKJJA3748rswf32RPTcKb0Zg47F1MWoqSSS2Nc6y8yoJcvpKheTVVQpO9JBoRHmSYemFhDSXHVn2qKqPE0yHScIv2j7rc1Llt4khsIStBFQQOalaaZHEA9VOmSWl1sL5KZW0nApRySCgJSkJANKVoE1y29EXlj4Ws46ma8NLfkQli6tzguddu7eRbIUs5YLcyG6ia+UIs/LS8m1caQ202MTTCpHtlLOKj0k9cVS1tOwE3GqOLoLy8kVpien+8Yp8/aDr6rzqyro9qOA/POGKFfE+7SIuanT21ZdbV0yZPgrCruPNNancIn+58dK1T6jmpTBPWHYUUNvudfd3GX7HYn9LGjBtO97EVSq5tXG5GYxBEQwT/AHRPjJLyZjtZhUQ1+6J8ZJeTMdrMKiNCh7EMe4QQQRMIEEEEAH0FqU9hmPKe/Gcinax/ZB35v3UxcdSnsMx5T34zkU3WP7IO/N+6mMLH7PudD5e/svs/0VV/ONcbH841xmrY6ufuYRlOcYgTDhqN034tfkq7Iq8Wmc8UvyVdkVaNTwraX2Oc8ye+HZhBBBGycwdli/vDP8xPbFpl5NTriWk4FZpU5AZlR6Amp6oq9hpJmWQASb6TQCpoDUmg3AV6ovayiRTeWVcqoG+okqCAv+HT2vNoCdhJpujF8SSdSPb9nReE4r09Cb5t/rcjNLJltlrkGWwpuo5Vaqkrp7YgbtlKAV88RYtkLcISyguE0IKfBA3lRwSOMbf8abW4oKNb5SE4E1rgQRsGXnMSMjN+plAtgADAoGCVAmtCB04xSk3BZWiq5cSTne5KyuhPNq6+AdzYqlJ6Vq8LgBFPnbMeQ4pCyapNDTAdBBOwih64l7R0lmHDQYbqYCnREWptazVZ80NTcRHZm+w3jLLvlQIIKVJvVJB3ZiozHSBFpRaySinhVFUHIKH5dI2fbFMVLJ3GN8nOJbo2o8xRwpmlWwg7Ds3HLpCNZu46MnE59JGngUlxtpKSTQobQipOJrcAH/qIeLu6A+0plZBqKpV2KH97xFMfZKFFKs0mhjawGI4kXCXuRQxFJRd47M1w2u51928ZfsdhSw2u51928ZfseizX9jKyG9BBBGePE93RPjJLyZjtZhUQ1+6J8ZJeTMdrMKiNGh7EMe4QQQRMIEEEEAH0FqU9hmPKe/GcinaxvZB35v3UxcdSnsMx5T34zkU3WP7IO/N+6mMLH7PudD5e/svs/wBFVfzjXGx/ONcZy2OrnuwjKc4xADAxqN874pfkq7Iq0XuV0efmEG43dSoEBxfMRiMwTioeSDEzYerWWaot9ZeVuxbar0JHPX1kA7o0cBWjRjJy52Od8etWqRUGnZO/0FzZFjTE0opl2VuUzIACU+UtRCR1mLtY+q4JouceoPgmcSeguEfdB4xf0FLaEoQkIQkUSkJAoPkoGCeMR09OhIONN+OPWrZwEOq+IzlpDT/ZjQwqXuOVtDMmkplmUt5E3cXFgEVvOE3vOYrNrzgacSoqqlWCjjXoWOwjZHcLUTy11RFFAjcAcwd+YGJxpWIy3bMDl4VospNwXqA7evq2UjPlLNNZy1FWg8pHzdlI8a0SorN7E7CBS7hh/wCcaxoFadP91643/tGiEuZAAVGVP7wr/Z2rAzGRz9PQYSUntL7MVJbr7kZLya0KUQRcIqEnNKujcDDS0W1fyLzCHlPLfCgDgrk0A7UlKTeBBwIKtkUC5UVGI/vzGLVoroR6oSHXeag5JA5yxvJ2J+09G2Wm5SlZq5FUilHSVin6R2B6mmnWalSUqNw1qCg4o6K0IB6QY6NEbjLx5UUYdQtt6owuLGCqZkpUEqwx5sNyX0PlkJolhHWKnznGIq3dAmHUm4m4dhRhTqyibgTvdMj4kWrMVNmvFYu156RXiaY06DQ9YEa7as/llJWk0WoUu0POIFcxkaA57o2WzIOyMwU+3SKpOQUBx6jtoY55C3wpXOupwFaDAG8MBTDacuiCmp05547rcWcoyWV8yGeZUg0UkpO4inWN46Ya/c6+7eMv2OxQZuYaWgocUo7Umg/Zq2qxORGaeG6L93PAoZ6hqKsY78Hd8aTxCq0npZopyp5GNyMxiMxXGie7onxkl5Mx2swqIa/dE+MkvJmO1mFRGjQ9iGPcIIIImECCCCAD6C1KewzHlPfjORTdY/sg7837qYuWpT2GY8p78ZyKbrHP+YO/N+6mMLH7PudB5ff/AGX2ZVX841ExZLO0OffotyjLZ9ssc8+S3n56RbbH0fYlqKbbqofxnOcqu9Cck9Qr0xnxi+ZuYnxClTbUfif02/JTbJ0OmHgFKAZbPtnAbxHyUeEeug6YuFlaLy0vRSW76h/Edx60J8EeYnpiSW7TEnE+2Vio8ExzuzOO2vnV6Ew+6Wxi1sXVq7uy6LQ6lrxqTU++ViT5KY53ZqhO/acCrrOSI4X56nprn87M8BERP2qEjPL7OAyH2mG3bK2xJTtogA45/b+avsEVK3tIEpGKuGP2Cn5eeIi29J7xKWzeO01wHE7T/eEQDLTj7gSkKdcOSUgqV1AZDpi7h8G5/FLRFapWtoiXsdK56ZQ2LyRio0IBATliRhVRSOuLPb1jLaQhKFLcWlQBVVICVAGpxzTX/wBDGsfZsiZFuhI9UOFJcKcUoQk1DQUMFKJxVTDADZWLE5aKX0gjfjXO9TbxxPWRsiLEzhGVoa2/yXI4ecaSlNWzXK/Zz5eauukFxJIOABGzgY8KZKDQYjd6Ojo/sd70q0FFIohxar4NcVKoASBtwAqB/wCY8LbNKKz2EZHgYqOSb20YKLtvqebDZC5hpFBRaqKByIAJofNDMYl5inhgYZBRA2ZYYUP97YWVlzaWphtSsClY4EEFJPQRWGfKT4NMYu4VKzK9WTT0R7ROzDKufimoFT4IF2ilE7BWitnthurLSc+h1F4VB2pOYO0HgQRxSY4RMAjOIhyaDDySkpCVClBXDqOwU2YAVyBJi3sQ2U9LWZXNb8gChLwGKFA9W37K7IU041yawsZHZs6+jGvVDX1nWskyq01BKsB0k5flC3YkllAqLwIy3xFUnkkpAo5o2OVoJW2q7W8kjwsajEkfngYaXc7e7uMv2Owp2w40sC6UCvtsgPbVrspDc7ny7WdKDUH1OaUIukh2qemm+LEJLJJdbEE76X5DZgjMENsME93RPjJLyZjtZhUQ1+6J8ZJeTMdrMKiNCh7EMe4QQRkCpAGJJoAMSScgBtMTCGIAMQNpwA2k7ABti36P6uJh+inzyCM6KF50job9p88g9BhgWBo9LSX7u0C4M33KKX086lE8EgRUrY2FPTdk0KM5EhqwUZOyWUPpUhwF1RQoUUApxak1ByqCDQ4x6mENqdU+lpIWr+KvEigA5lcstkeVLHhE3vlKwSOA2xodmcenYSKk+SnZGLVrubuXqVLh7Pc6XFgYk1PvlYn5qY0OzNDtr04q82SRHA9OUr9prj1qyHARHTNoAD8saebNXE4RXuSkk/O5mvE17V5ngIjJq0aber/8/mqIe0LbSnEqpu38BT8vPEFMTzjuXMTv9seA9rxOMOUObJKdOdR5YK7Jm09IAk0BJUfaipUf/HmERCrzpq6qg2Ng4fOO3gMOMaGmgnLbmTiTxMe6wOXKJs4Xw2MGpVdX05EkJnAJLbKwMAFsNroBkBVMbVWq7dKAoISc0tpS2DxCAKxFXzGCqGuU7WuzTVKgnmUFfsja9jiFKSd6VEeceCesQSs6tC6rIUDgTQJqNxAwBwGI2gGNNYwRUUgu7WZVxOEhWu0rMn1FDqbi8QfBVkQeOxQ/vAxvbaIQAs3iMCd9MldBiuS04WsFC8g7d26v5H+zMyk7zc7yN+1I+V0fKy4VpDZRaWmxgTg6cnGa1Oe1peib1RgQOnGJKxtJbt1tw3VUABOSuB39EcZk1ggBRcaVgpKzVSQcilR8IdBiMmLECLwqSg5JOISd4OY4RLSmoPcgnFy5F3Tb1TQKiBtvShAcBqCEZKxNVfJNcKY8emKo3ZilpqhxV05UUdhy8+yPaNHK4KUanbmabc4tPER2bIlBrWKMqnFTzySfASapB37VGJ51CW01JAAwqcIJGzEseDwr+UcFpzjSypC7wCakEHPNJHQc4rturPTYelw467kFb7CgsXnCoqxCa4DcfNX7IZ3c5ignab5fsdhTuLvGorQYJFftwwxhs9zr7t4y/Y7GwqWSjd7mbOWaVxuwQQRAIJ7uifGSXkzHazCohr90T4yS8mY7WYVEaND2IY9zpsuRVMPNspICnFBIJyG0k8ACeqG/o7YEvJpHJI55FC6qinV76H+Gn5KadcJ2Qmiy6hxOaDX0jzVhsWPaYUgFJHOFRTFRH5RS8RnUjZLZlrDRi7t7k+pWw/QHaoxpemsNhp1IH6jHC/N4U2bRXD5ytp6I4npw+g0x+aMkjpMY7ZdR3PTmOZrsqMfmp9qOkxwTM8BXHjjnxVmeAiPmp8AHH7c+JzV2Rx2bIzVoOXZZsrANFPKN1pHQV7T8lAJhYU3J6CSmorU2z1rBIrXLqpwGQ+0xBTFprd8AYH26hh1DNXGLBpFq9mJOjq//AOlugKlNoI5NW2rdSSn5Yr0hMQaSFioII3iHTvTdrGn4fgqeJWZyXZb/AHOJDIBqSVK98c+rcI2R0FmNZZMQud9WdBDDqlHLBWRrgj3yRjHJmC4uVnmCPVwwcmd0Fwys8wR7DRj0GITMhVCT5GqkDDa2zeaNPkk4dR2R0JZEbGkKWsNtoU44rwW0C8o9QyHScBDoybdokGJoUXC9bRLn0ML0iQ0jnoUFmvNGXEAbcRlhn4NMdctpMlwkKQaUBAHhDoIPRj/dYZ2hurhtCS7PNtOurFA0pIW20k0qBXBSzQVVspQbSaPrnsGRlHWkSrQbdIUt0IUq7Q0COYSQMlZU2Rfp4WMlZrVnF18RlqNU3eK2PNnsNJqUK8ab4SSBjTGgzrvHRGtMlyK3XVY3iThibqRRIodsUpqcWileddxzrwwIqDwMdf8Ajjlb5UVGlMUkE9B5xCt0MlgpqT133COLja1idtGfU4hLjbiQlOab1Dnjhtw82MV607VU+rIBGWA8Lr3RxuzAWaXgR70ApFa7qmu3zRmL+Fwsd+hWq1pTCG13Ovu3jL9j0KWG13Ovu3jL9j0W6/8AGyFDegggjPHCe7onxkl5Mx2swqIa/dE+MkvJmO1mFRGjQ9iGPcIsmi1qlKS0TiMU4nEbsN35xW49IUQag0I2wV6SqQcWOpzcJXGEi1ARicssh5t3bEVatvpRhWp96Mz1fmYrKrQdIpfPVQHzxzUjOp+HNv4noWZYnT4TsnrTcdrU3UnYMzxMNHVnrOaS2iVmglu4AltxICW6DIKA8HjCigi/6amo5YqxWc5Sd2fWbbiVpCkkFJFQQagjeCIrtvaByc2orU2W3Dm40biid6h4Kz0qBhFaOaZTcif2DygnMtq5yD805cc4YNj67hgJmWPSttX/AGK9MVqmHkuV0OhUlB3i7M6LR1UvpqWJltY2JdQUHgVoqD9ERCzOgtoo9zBY3tuoI8yyk/ZF+s/WfZrvui4dziVD7RVP2xMy2ksm74E2wroDqK+atYqSwsHurGnS8ZxdPTNfvqJl+wpxHhSUz81lS/uVjnMi+M5aZHGXdH/ZD+bfQrwVpPAg9ke4jeEh1ZaXmHErdL8Hz76ke+AmP+Xd/THpNnTJylJo8JZ39EfQMeVLAzIHEwnpIdWD8w4jlFf5EYxoxPL8GSf+cEt/fUIkZPV1aLlKtstb+UdvEdSAoHzw15i2Jdvw5hlPlOIT2mIuc0+s5oVVNtHyCXPuAw+OFh0IZ+OYuWzS7Irlm6p01rMzK1j3jSQ2ngVEqUeopi5WLYEvJousMpQDmQKqV0qUaqUeJMUu1ddEo3UMtuOnYTRCfPifsijaR61Z2ZBShQZQdjeCiOlefmIi1Tw75RsZtbE1arvOTY0tONPpezkKSFBx/wBq2DW6d66ZDozP2wgbXtNyZdW86oqWskkns4RzOLKjUmpO0x5i7SpKGvMrN3CCCCJxDBSK1pjGYIILAENrudfdvGX7HoUsNrudfdvGX7Hogr/xschvQQQRnjhPd0T4yS8mY7WYVENfuifGSXkzHazCojRoexDHuEEEETCBBBBAARPaK6LerwsiblmShSUhLrl1SrwrVIpiNnGsQMbGBz0eUntENne2gF+nNT77Cbzs7KNpJoFLUpIruqQBXA+aKezY96c9S8uwOepvliv9jhXnX6eCaUHSRDc7oMf5ex/qU/hPQkYiouU43bFYw+83MFvlPVkrydL1+8u7Tfeu0p0xS7Ts1bMyqXQ4l5QUlCVMqK0rUoJICCMzVV2m8EReJdZ9aLgrgHwmmynLoVThXGIzUrLoXazd+nMbcWivvwAnzhKlHqhsXK0nLWwHU3q2UyhBnLTl5RxYqlpakqVTpJWkdBpUdMdTGqu0C+EJmWyypJUmYSolOyibmd412EigOOyIfWXo7OItCYedZdW24tSkPJQpaOT9okkA3bqaJoaZdcTGovSgtzBk1r/ZOpUpoE4IcTzlBO4KTeJG9I3mGtPLmTT+w4ob868lSkl1ZuqUnPO6SPyjQuYWfbKPRmT0CPVo+PdplyjlDvF80MWPVXYombQbK/FS4L7pOVEEFAJ8uhptCVRO1GMb2GnjTfQ1+ywwXHb4fQSaApDbibpU2TU3qXhQ4VocMIrEPbS/k7bsMvsA1TV1sHwgpsqStPEpvjrBhEgw2jLNHXdAzKUkkAAkkgAAVJJwAA2mLxI6q3g0Hp2ZZkkGlA4QVY5BVVJSk9F4neBElqI0bS8+5NuJqliiGgcuUUKqVxSkinl9EVzWhba5u0n6qJbZWpptOxIQbqyBvUsKJO3DcIRzlKeSPIORKO6p318muVmmJpla0oU62oDkwSApZTeIUEg1ICq9EVbSqxTIzbssXOULRSL927evISvwamnhUz2RJ6tdJVSE+2bxDLyktvJrzSlRoldMqpJBruvDbHRrhRdtiY6Q0f8ApNj8oWLmp5ZPkBUYIIImECCCCAAhtdzr7t4y/Y9Clhtdzr7t4y/Y9EFf+NjkN6CCCM8cJ7uifGSXkzHazCohr90T4yS8mY7WYVEaND2IY9wgggiYQIIIIACNkv4aPKT2iNcF4jEZjEcRlCAO7ug/Y9j/AFKfwXoSMPfTOV/x6x0LlSFLCkOpRUA30gpW0ScErAWoY7QNhrCha0On1OcmJGYvVpi0tKetagEAdNaRWoSSVmKy2S3/AMSc/wBQPxkRVNC5KadmgqSpy7CVPAkgC6miVDHwq3wm7tCjFs01CbNsdizFLSqYcXyr4SahtN4rA89wDfdUY16gvZR3/SufiswqlaEpLqBYLD13tKSkTUu4hWFVtUWjjdJCk8OdE8pNkW6hSByTi6ZhPJvo+UKgKpWm9J21hf6wNWj7D63ZRpTrDilKCWxeW2SalFwYqTWtCAcMDlU7dVOicyzOJnJhtcuwwlxSlOgtlVUKTS6qhui9eKiKc2I5RhlzRdmLqUrSSyFSU09LqNS0spve+SQFIVTZVJSabKwwtFdGJkWE6ZZq/MT6gDzkouy4qMSojBQv5fCjdFbnZF63bVdcYac5Fx1KS7cNxDaUpQFqURRKriQq6ccQImNcktMomUJbaeRKS7LaELQlfJAbSVpwSfBTQn2o3xLJuWWN9d2IW7U/YU9ItvszTIS0pQcaPKIXRRF1aSEqNAQEHLYrfCn07sP1DPvsAUQFX2t3Jr5yAOFSn5pjZoVaE03OsvMomHuSWkuIbS47+zVzVgpTWlUlVK7YY+vLRZyYQzMsNLccRVpxLaCtZQqqkqugVISqo/3IYnw6mr3F3R1agFJ/w50DMTC73W21T7KeaE7pICJ2ZBzD71ePKrrFo1SaXps6ZW08brL1ApRrRtaahK1bk4lKt2B2GJHWloE+Zpc3KtKeZfotQbF9SFkC8boxUlXhAiuJNaYVWPwVHfmJyFuTHZa0g+w4EzCFpcWlKxyhqpSDUJVWpqMCOqLHonq+mH3QuabWxKtm+848C3zE4qSAuhxGF6lAKmuQMfrAt8T8+68jxYo2zhT9mnAGmypvK+dEqneVkBAQQQRKIEEEEABDa7nX3bxl+x6FLDa7nX3bxl+x6IK/8bHIb0EEEZ44T3dEjnyR2XZgfazCoh7687GL9nB1IqqWWFnCp5NQuL81UqPQgwiI0MO/gGPcIIIInECCCCAAggggA7bKtp+UUVsPuNE+EUKICqZXk5K6wYlXtZNpLTdM8unyUtIP0kpBHniHshVJhg7nmj/1Ex9LW46+1yXqeVQ9eWA5VxDfJo2rqoG9wGMV6s4wavG4qR8wrdKyVKUVKUaqUSVEnaSTiTHTZdqPSyy4w4ptaklBUg0JQoglNeIB6hDU14WKyRK8i0n1W87cSlACVuIKTWoFK0VyeJyvHpiGa1JzpSkl+XCiReTVw3QflXecRuw4wqqwcddAsynWLpROSYpLzLiEnG7UKRXabiwU1O+mMZtvSucnE3ZiZcWjO5glBOwlCAEk8RE23qwmzP8AqK+1eDYdW6CooQ2pRSKggG+SDzft2xrt7V68xOtSjLiJhbqSQUgIuFPh8om8q4ACDU51wFcIXPTvyDUhrG0lm5NKkS8wttKjeUE0oVUAriDjQAdUbp/TSffbW07NuLbUKLRzaEbjQVphFjtbU9PMMqcStp0oSVKbbv3sBU3LwF89GBOzHCL7ZNlrndHGmGilK3WEIClVCRRQBJoCcgYZKrBfEkmFmJSxrdmJMqVLvLbKwAoppzgKkVqDlU+eJPvhWn8ed8yP0x16YauJuzmw4sodaKgi83evJUo0SFJIrQnAEVxNNorKSepeeW2FqcYQsgHklFRKa0wUpKSArPAVGGcPc6b1dgsxfuuVJUo4kkkk4knEk9MSljaXzcmm6xNOIRsRUKQN9ELBSOoQwtBdDnrLtlpt1bSw8y9dKLxwSWybyVAXTWmRMXOwqG2bQTdFEtSewe9eP/dEc60el0CQira0onJ0BMxMrcTncJCUdBKEAJJ6SIioldMF1tGcP/EPjqDigOyIqLEbW0ECCCCHAEEEEABDc7nVBuzqthUwBxAcJ7RCjh+ak7GMvZiVqFFTCi9TcggJb6ilN758V8S7RFRfIIIIojzS+ylaShQCkqBCgcQQRQgjaCI+edYug7lmvEpBVLLP7JzO5X+Es7FDYT4Q6agfRcaZyVQ6hSHEJWhQopCgFJUNxBwMSU6jg7iNXPk6CHPpDqUYdUVyr6ma48moX0cEmoUkcSqKy5qVtAHByVI2HlHB9nJxcjXg+Y2zF9BDA7y1o+/lfrXP6UHeWtH38r9a5/SheNDqFmL+CGB3lrR9/K/Wuf0oO8taPv5X61z+lBxodQsylWOi9MMJ3vNDzuJEfR2l9mTcw22mUmvUy0rvLXcv3k0Iu3TgcaHqhTd5a0ffyv1rn9KNvejtb4wz/wAw9/TiGq4zaeYVaDB050glZV+RD60XxMBWYq2ktONlxW5FVpz47I7Jqwn12mzOJnFJZS2UKlxW44SF0PhXcSpJrQnmDqVp1MWiSSVyxJzJdcqeJ5LGNvehtWiU8uxdT4KeXdonZzRydE4E5b4jyQtpIW7Lotp/1xqLLjQR6ma5dtZN5aLzgq2AMVJUE4kil7pjQ/aEjLaRJIWhLj7Cm3jUXQ6VoLYUckrUlBBHkb8agjU/aiVXg9LhWPOD7oVjmKhusa+8raPv5X61z+lC5Yc5crCajaebeYW+tmXlkoUC4XVPqSpxYSKconkqJGFL180AHARWjsk5NWC2224WXHmSUrTXmFairCmNMaYY0MUBeqG1FIuKfYKNiC+6U4Zc0t0jWnU3aYpR2WFMqPOilMiP2eENUI/MhRgaUWg3ZlmsNzTvKrSuVTVWK3S260ta6Yk3UpKtuQxqY77aslycfk5lidU20yq+pCDVDyVFJGINDUApxrgo06Vk9qdtNxV5bzC1UpeU+6o03VLdaRkaoLUCbgfZCK1uB90JrWtbvJ0rXGsLkh82oDEtVH+fSZ/4aY+xSPTBo8n/ADu0z/8AXJfcc9ELk6nbTre5Zi977lnb3n5OsCdT1qAkh6XBOZDztTxPJ4wZIfNyE1KhpYP8wm/9TMfiriMhgHUvaPv5X61z+lB3lrR9/K/Wuf0osqrBK1xLMX8EMDvLWj7+V+tc/pQd5a0ffyv1rn9KF40OoWYv4IYTWpWfJ5zsskbTyjivs5MV88WjR3UvLskLmnVPkY3AOTb+dQlSvOBvEJKvBcwsyjatNBF2i8HHElMq2eerLlCP4aN/yjsHTSPoNtASAAAABQAZADICPErLIaQlDaEoQkAJSkBKUgZAAYARuilUm5u45KwRmCCGChBBBAAQQQQiAIIIIUAggggAIxGYIACCCCAAggggAIIIIQAggghQMQRmCAAggggAIIIIACMRmCEYBBBBCgEEEEAH/9k=',
    title: 'USAC Baseball',
  },
  {
    id: 2,
    image: 'data:image/jpeg;base64,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',
    title: 'Piratas',
  },
  {
    id: 3,
    title: 'Orioles',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Baltimore_Orioles_cap.svg/1200px-Baltimore_Orioles_cap.svg.png',
  },
]

const matches = [
  {
    id: 1,
    local: {
      ...teams[0],
      players: [
        {
          number: 5,
          name: 'Oriol Zhu',
        },
        {
          number: 12,
          name: 'Arturo Puente',
        },
        {
          number: 1,
          name: 'Eduardo Chaves',
        },
        {
          number: 2,
          name: 'Melchor Serrano',
        },
        {
          number: 7,
          name: 'Gerard Perello',
        },
      ],
      summary: [
        {
          title: 'Jugador del partido',
          data: 'Eduardo Chaves',
        },
        {
          title: 'Bateos',
          data: '28',
        },
        {
          title: 'Atrapadas',
          data: '28',
        },
      ],
    },
    visit: {
      ...teams[1],
      players: [
        {
          number: 5,
          name: 'Jose-Andres Viera',
        },
        {
          number: 12,
          name: 'Esteban Manrique',
        },
        {
          number: 1,
          name: 'Felipe Calle',
        },
        {
          number: 2,
          name: 'Christian Bernabe',
        },
        {
          number: 7,
          name: 'Eugenio Toledano',
        },
      ],
      summary: [
        {
          title: 'Jugador del partido',
          data: 'Esteban Manrique',
        },
        {
          title: 'Bateos',
          data: '28',
        },
        {
          title: 'Atrapadas',
          data: '28',
        },
      ],
    },
    localScore: 15,
    visitScore: 13,
    journey: 5,
    date: '07-10-2020',
    time: '14:00',
    estimateEndTime: '16:00',
    stadium: 'Estadio X',
    price: 'Q25.00',
    parking: 'S??, gratis',
    transmissions: [
      {
        platform: 'instagram',
        link: 'www.instagram.com',
      },
      {
        platform: 'facebook',
        link: 'www.facebook.com',
      },
    ],
    event: {
      id: 1,
      title: 'Torneo 2021',
      category: 'Masculino Mayor A',
      winner: '',
      actualJourney: 12,
    },
  },
  {
    id: 2,
    local: {
      ...teams[0],
      players: [
        {
          number: 5,
          name: 'Oriol Zhu',
        },
        {
          number: 12,
          name: 'Arturo Puente',
        },
        {
          number: 1,
          name: 'Eduardo Chaves',
        },
        {
          number: 2,
          name: 'Melchor Serrano',
        },
        {
          number: 7,
          name: 'Gerard Perello',
        },
      ],
      summary: [
        {
          title: 'Jugador del partido',
          data: 'Eduardo Chaves',
        },
        {
          title: 'Bateos',
          data: '28',
        },
        {
          title: 'Atrapadas',
          data: '28',
        },
      ],
    },
    visit: {
      ...teams[1],
      players: [
        {
          number: 5,
          name: 'Jose-Andres Viera',
        },
        {
          number: 12,
          name: 'Esteban Manrique',
        },
        {
          number: 1,
          name: 'Felipe Calle',
        },
        {
          number: 2,
          name: 'Christian Bernabe',
        },
        {
          number: 7,
          name: 'Eugenio Toledano',
        },
      ],
      summary: [
        {
          title: 'Jugador del partido',
          data: 'Esteban Manrique',
        },
        {
          title: 'Bateos',
          data: '28',
        },
        {
          title: 'Atrapadas',
          data: '28',
        },
      ],
    },
    localScore: 19,
    visitScore: 8,
    journey: 5,
    date: '07-11-2020',
    time: '14:00',
    estimateEndTime: '16:00',
    stadium: 'Estadio X',
    price: 'Q25.00',
    parking: 'S??, gratis',
    transmissions: [
      {
        platform: 'instagram',
        link: 'www.instagram.com',
      },
      {
        platform: 'facebook',
        link: 'www.facebook.com',
      },
    ],
    event: {
      id: 1,
      title: 'Torneo 2021',
      category: 'Masculino Mayor A',
      winner: '',
      actualJourney: 12,
    },
  },
]

const player = {
  athlete_name: 'vizcaino',
  img: 'https://www.soy502.com/sites/default/files/styles/escalar_image_inline/public/bib_4277.jpg',
  biography: `Fabi??n Esteban Vizca??no Chinchilla naci?? en el a??o 1995 es un beisbolista guatemalteco,
que se desempe??a como parador en corto.
Ha sido dos veces campe??n de Centroam??rica, subcampe??n en una eliminatoria premundialista
y campe??n de la Senior League Baseball World Series -competencia a nivel
americano para ni??os entre 13 y 16 a??os.

Actualmente, el jugador guatemalteco cursa una beca deportiva con la
Academia Tom??s moreno en Florida, Estados Unidos, en busca de cumplir
sus metas de llegar a las Grandes Ligas de B??isbol de Estados Unidos.`,
  isOutstanding: true,
  wins: 35,
  loses: 21,
  games: 56,
  contact: '',
  asociation: 'softbol_id',
  team: teams[2],
  shirt_number: 5,
  instagram: 'vizcaino.gt',
  facebook: 'vizcaino.gt',
  email: 'vizca.gt58@gmail.com',
  country: {
    name: 'Guatemala',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Civil_Ensign_of_Guatemala.svg/1024px-Civil_Ensign_of_Guatemala.svg.png',
  },
  journey: matches,
}

const PlayerProfile = ({ navigation }) => (
  <ScrollView>
    <View style={styles.container}>
      <ImageProfile image={player.img} />
      <View style={styles.icons}>
        <View style={styles.red}>
          <IconIonic name="logo-facebook" style={styles.faceicon} />
          <Text style={styles.text}>{`/${player.facebook}`}</Text>
        </View>
        <View style={styles.red}>
          <IconIonic name="logo-instagram" style={styles.faceicon} />
          <Text style={styles.text}>{`@${player.instagram}`}</Text>
        </View>
        <View style={styles.red}>
          <IconIonic name="mail-outline" style={styles.faceicon} />
          <Text style={styles.text}>{player.email}</Text>
        </View>
      </View>
      <ProfileData
        country={player.country}
        team={player.team}
        wins={player.wins}
        loses={player.loses}
        games={player.games}
      />
      <RouteProfile matches={player.journey} navigation={navigation} />
      <BiographyProfile biography={player.biography} />
    </View>
  </ScrollView>
)

PlayerProfile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
}

export default PlayerProfile
