
// 여기 추가하는게 일이다.... 
const resources = {
    "splash": require('../../assets/images/intro/splash.png'),
    "intro1": require('../../assets/images/intro/intro1.png'),
    "intro2": require('../../assets/images/intro/intro2.png'),
    "intro3": require('../../assets/images/intro/intro3.png'),
    "login": require('../../assets/images/login/login.png'),
    "social-button": require('../../assets/images/login/social-button.png'),

   
    "stoveLogo": require("../../assets/images/Smilegate_Stove.png"),
    "rpgLogo": require("../../assets/images/Smilegate_RPG.png"),
    "banner1": require("../../assets/images/banner/shop_banner1.png"),
    "banner2": require("../../assets/images/banner/shop_banner2.png"),
    "banner3": require("../../assets/images/banner/shop_banner3.png"),
    "pushIcon": require("../../assets/images/push.png"),
    'search': require("../../assets/images/picSearch.png"),
    'goods1': require('../../assets/images/shop_goods.png'),
    'goods2': require('../../assets/images/shop_goods2.png'),
    'goods3': require('../../assets/images/shop_goods3.png'),
    'goods4': require('../../assets/images/shop_goods4.png'),
    'goods5': require('../../assets/images/shop_goods5.png'),
    'settings1': require('../../assets/images/setting1.png'),
    'settings2': require('../../assets/images/setting2.png'),
    'settings3': require('../../assets/images/setting3.png'),
    'settings4': require('../../assets/images/setting4.png'),
    'settings5': require('../../assets/images/setting5.png'),
    'stoveAuth': require('../../assets/images/stoveAuth.png'),
    'alarm': require('../../assets/images/alarm.png'),
    'vod1': require('../../assets/images/vod1.png'),
    'vod2': require('../../assets/images/vod2.png'),
}

export function getAssetByFilename(filename) {
    if (resources.hasOwnProperty(filename)) {
        return resources[filename];
    }
    return null;
}

export function getAllImagesOfAsset() {
    try {
        //const json = JSON.parse(resources);
        const arr = [];
        for(let x in resources) {
            arr.push(resources[x]);
        }
        return arr;
    } catch(error) {
        console.log(`image file load error: ${error}`);
    }
}