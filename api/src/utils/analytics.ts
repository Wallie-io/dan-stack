import { ID } from '.'
import { splitName } from '../auth/services/splitName'

import { User, UserType } from '../users/user.model'

export const buildAnalyticsProfile = async (id: ID, partialUser: Partial<UserType>) => {
  const existingUserData = await User.findById(id)
  const user = { ...existingUserData, ...partialUser }

  const { firstName, lastName } = splitName(user.displayName as string)
  return {
    firstName,
    lastName,
    $email: user.email,
    $avatar: user.avatar
  }
}

export const identify = async (id: ID, properties: any) => {
  try {
    const formattedProfile = await buildAnalyticsProfile(id, properties)
    // mixpanel call
  } catch (err) {
    console.error(err)
  }
}

export const track = async (id: ID, event: string, properties: any) => {
  try {
    const formattedProfile = await buildAnalyticsProfile(id, properties)
    // mixpanel call
  } catch (err) {
    console.error(err)
  }
}
