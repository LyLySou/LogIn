import React from 'react'
import { Provider } from 'react-redux'
import { ActivityIndicator, StatusBar, YellowBox } from 'react-native'
import App from '../app/routes'
import SplashScreen from 'react-native-splash-screen'

export interface Props {}

export interface State {
  ready: boolean
}
YellowBox.ignoreWarnings(['Warning: componentWill'])
export default function (stores: any) {
  return class Setup extends React.Component<Props, State> {
    constructor(props: any) {
      super(props)
      this.state = {
        ready: false,
      }
    }

    componentDidMount() {
      SplashScreen.hide()
      this.setState({ ready: true })
      StatusBar.setBarStyle('dark-content')
      StatusBar.setBackgroundColor('#fff')
    }

    render() {
      if (!this.state.ready) {
        return <ActivityIndicator />
      }
      return (
        <Provider store={stores}>
          <App />
        </Provider>
      )
    }
  }
}
