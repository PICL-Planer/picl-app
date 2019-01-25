import { Dimensions, StatusBar } from 'react-native';
// 아래 부분은 npm install이 필요하니 Expo에서 지원해 주는 방법도 사용해 본다
//import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Constants } from 'expo'


// 전체화면 크기
const { width , height } = Dimensions.get('window');
export const screenWidth = width;
export const screenHeight = height;


// 화면을 보정할 수 있는 옵션으로 보이는데.. 일단 테스트 스크린이 5X 하나이니 그냥 설정으로만 알아두자
let calRatio = width <= height ? 16 * (width / height) : 16 * (height / width);
//console.log(`calRatio: ${calRatio}`);
if (width <= height) {
  if (calRatio < 9) {
    calRatio = width / 9;
  } else {
    calRatio = height / 18;
  }
} else {
  if (calRatio < 9) {
    calRatio = height / 9;
  } else {
    calRatio = width / 18;
  }
}
//console.log(`calRatio: ${calRatio}`);
export const ratio = calRatio / (360 / 9);
//console.log(`ratio: ${ratio}`);


// Expo 이용
export const statusBarHeight = Constants.statusBarHeight;
//console.log(statusBarHeight);


// StatusBar 높이를 가져오는 방법 2가지 
//export const statusBarHeight = getStatusBarHeight(false); // false to get android height.
//console.log('statusBarHeight1: ', statusBarHeight);
//console.log('statusBarHeight2: ', StatusBar.currentHeight);