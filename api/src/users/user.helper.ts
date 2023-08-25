import bcrypt from 'bcrypt'

export const comparePasswords = async (passwordToCheck: string, hashedPassword: string) => {
  const match = await bcrypt.compare(passwordToCheck, hashedPassword)

  if (!match) {
    throw new Error("Credentials don't match.")
  }
}
