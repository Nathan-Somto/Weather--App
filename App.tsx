import { View, Text } from 'react-native'
import Root from './screens/Root'
import { SettingsProvider } from './context/settingsContext'
const App = () => {
  return (
    <SettingsProvider>
      <Root/>
    </SettingsProvider>
  )
}

export default App