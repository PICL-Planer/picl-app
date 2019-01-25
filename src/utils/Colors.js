// export default { ... } 로 만들면 import Colors from '../Colors 이렇게 쓰고 
// export 만 만들어서 사용하면 import { Red, yellow } from '../Colors 이렇게 사용해야 한다 
// as 라고 된 부분은 이름을 변경하는 것이고 * 로 가져오는 것은 전체를 가져오는 것이다 

export const colors = {
    dodgerBlue: 'rgb(58,139,255)',
    dusk: 'rgb(65,77,107)',
    blueyGray: 'rgb(134,154,183)',
    cloudyBlue: 'rgb(175,194,219)',
    paleGray: 'rgb(233,237,244)',
    darkBlue: 'rgb(30, 80, 180)',

    tintColor: '#2f95dc',
    tabIconDefault: '#ccc',
    tabIconSelected: '#2f95dc',
    tabBar: '#fefefe',
    errorBackground: 'red',
    errorText: '#fff',
    warningBackground: '#EAEB5E',
    warningText: '#666804',
    noticeBackground: '#2f95dc',
    noticeText: '#fff',

    accent: '#ff2824',
  };
  