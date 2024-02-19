export const parseSignInMethod = (method: string) => {
  const scheme = {
    twitter: 'Twitter',
    google: 'Google'
  } as { [key: string]: string }
  return scheme[method]
}
