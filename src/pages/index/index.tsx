import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text, OpenData } from '@tarojs/components';
import User from './components/user';
import Book from './components/book';
import Service from './components/service';
import Facility from './components/facility';
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
        
        <User />
        <Book />
        <Service />
        <Facility />

      </View>
    );
  }
}
