export const splitName = (fullName: string) => {
  const firstAndLast = fullName.split(' ') || ['']
  const firstName = firstAndLast[0] || ''
  const lastName = firstAndLast.slice(1).join(' ') || ''

  return {
    firstName,
    lastName
  }
}
