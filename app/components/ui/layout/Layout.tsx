import { FC, PropsWithChildren } from 'react'
import { Platform, SafeAreaView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Layout: FC<PropsWithChildren<{title?: string}>> = ({ children, title }) => {
  const { top } = useSafeAreaInsets()

  return (
    <SafeAreaView>
      <View
        className='px-6'
        style={{
          paddingTop: Platform.OS === 'ios' ? top / 5 : top * 1.6
        }}
      >
        {title && <Text className='text-2xl text-white font-semibold text-center'>{title}</Text>}
        {children}
      </View>
    </SafeAreaView>
  )
}

export default Layout
