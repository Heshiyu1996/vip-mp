import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, OpenData } from '@tarojs/components'
import { AtAvatar, AtIcon } from 'taro-ui';
import './index.less'

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: '',
      mobileNum: ''
    };
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render () {
    const { nickname, mobileNum } = this.state;

    return (
      <View className='m-index'>
        <View className='bg'></View>
        <View className='u-title'>
          <View className='cover'></View>
        </View>
        <View className='u-user'>
          {/* 真实环境 */}
          {/* <AtAvatar className='avatar' size='large' circle openData={{ type: 'userAvatarUrl' }}></AtAvatar>
          <OpenData className='nickname' type='userNickName' /> */}
          <View className='avatar mock'></View>
          <View className='nickname mock'>小柯</View>
          <View className='greeting'>
            下午好，尊贵的金臻卡会员
          </View>
        </View>

        <View className='u-book'>
          <View className='date-wrapper'>
            <View className='date-item'>
              <View className='label'>入住</View>
              <View className='value-date'>7月9日</View>
              <View className='value-day'>周六</View>
            </View>
            <View className='date-item'>
              <View className='label'>离店</View>
              <View className='value-date'>7月10日</View>
              <View className='value-day'>周日</View>
            </View>
            <View className='total-item'>
              <View className='total-item'>
                共 1 晚
                <AtIcon className='icon-right' value='chevron-right' size='8'></AtIcon>
              </View>
            </View>
          </View>
          <View className='btn-wrapper'>
            <View className='btn-book'>立即预约</View>
          </View>
        </View>

      </View>
    )
  }
}
