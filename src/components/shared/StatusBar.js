import React from 'react';
import {
  StatusBar,
  Platform,
  StatusBarStyle, 
} from 'react-native';

import { colors } from '@util/Colors';

// 이 방식은 함수형 컴포넌트이다 
// const Shared = ({isDarkContent}) => (
//   <StatusBar 
//     barStyle={Platform.select({
//       ios: isDarkContent ? 'dark-content' : 'light-content', 
//       android: 'light-content',
//     })}
//     backgroundColor={colors.darkBlue}/>
// );

class Shared extends React.Component {
  static defaultProps = {
    isDarkContent: false,
  }

  render() {
    const statusColor = Platform.OS === 'android' 
      ? 'default' : this.props.isDarkContent 
        ? 'dark-content' : 'light-content';

    return (
      <StatusBar
        barStyle={statusColor}
        backgroundColor={colors.darkBlue}
      ></StatusBar>
    )
  }

}



export default Shared;
