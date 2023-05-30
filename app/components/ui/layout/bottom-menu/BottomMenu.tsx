import { FC } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import MenuItem from './MenuItem'
import { menuData } from './menu.data'
import { TypeNav } from './menu.interface'

interface IBottomMenu {
  nav: TypeNav
  currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = props => {
  const { bottom } = useSafeAreaInsets()

  return (
    <View
      className='pt-5 px-3 flex-row justify-between items-center w-full bg-[#1e1c2e]'
      style={{
        paddingBottom: bottom + 10
      }}
    >
      {menuData.map(item => (
        <MenuItem item={item} key={item.path} {...props} />
      ))}
    </View>
  )
}

export default BottomMenu
