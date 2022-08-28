import Taro, { Component,  } from '@tarojs/taro';
import { View  } from '@tarojs/components';
import './index.less';

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

  render () {
    return (
      <View className='m-code'>
        <View className='bg'></View>
        
        <View className='code-wrapper'>
          <View className='logo'></View>
          <View className='qrcode'></View>
          <View className='tip'>会员码每 30 秒自动更新</View>

          <View className='divide' />

          <View className='integral-wrapper'>
            <View className='poster'></View>
            <View className='tip'>门店扫码付款后可累积积分</View>
          </View>
        </View>
        
        <View className='by'>金水台VIP</View>
        <View className='bg-icon' />
      </View>
    );
  }
}
