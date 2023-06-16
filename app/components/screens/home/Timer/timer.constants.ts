import { AppConstants } from '@/app.constants'

export const flowDuration = 1 * 2
export const sessionCount = 9
export const breakDuration = 1 * 2
export const isSmallIndicator = sessionCount > 9

export const shadow = {
  shadowColor: AppConstants.primary,
  shadowOffset: {
    width: 0,
    height: 0
  },
  shadowOpacity: 0.76,
  shadowRadius: 8,
  elevation: 20
}
