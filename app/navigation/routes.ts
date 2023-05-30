import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import Profile from '../components/screens/profile/Profile'
import Settings from '../components/screens/settings/Settings'
import Statistics from '../components/screens/statistics/Statstics'
import { IRoute } from './navigation.types'

export const routes: IRoute[] = [
  {
    name: 'Home',
    component: Home
  },
  {
    name: 'Profile',
    component: Profile
  },
  {
    name: 'Settings',
    component: Settings
  },
  {
    name: 'Statistics',
    component: Statistics
  }
]
