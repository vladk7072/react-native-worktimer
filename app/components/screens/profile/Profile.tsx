import Button from '@/components/ui/layout/Button'
import Layout from '@/components/ui/layout/Layout'
import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import { Text, View } from 'react-native'

const Profile: FC = () => {
  const { setUser } = useAuth()

  return (
    <Layout title='Profile'>
      <Button onPress={() => setUser(null)}>Log out</Button>
    </Layout>
  )
}

export default Profile
