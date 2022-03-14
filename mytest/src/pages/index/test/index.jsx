import { usePullDownRefresh } from '@tarojs/taro'
import { View } from "@tarojs/components";
import { observer } from "mobx-react";

const Recommend = () => {

  usePullDownRefresh(() => {
    console.log(1111)
  })



  return (
    <View className='recommendWarp'>

    </View >
  )
}

export default observer(Recommend)

