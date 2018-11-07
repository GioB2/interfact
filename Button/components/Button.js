import React from 'react'
import {View, TouchableNativeFeedback, TouchableOpacity, Text} from 'react-native'
import {withTheme} from '../../Theme'

class Button extends React.Component {
  render() {
    const style = {backgroundColor:this.props.theme.pallete.primary.main}
    return (
      <View style={style}>
        <Text>asd</Text>
      </View>
    )
  }
}

export default withTheme()(Button)
