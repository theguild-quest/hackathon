export const onboardingGifBlurDataUrl =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAAAXNSR0IArs4c6QAAA2VJREFUOE9d1EuP40QUhuG3XL47duwknXT3NBIjEJvZjBAskJBGiCVrtuzYIMGv77juVaicDC3GUuSsnvrOOXUs/vlVpJTAhRbjF7QfUaHDippQVcimoG6haxNtHWnLQCU8ZQoIH0k2EXX+QTQC8fcd9GHAhAXjd+jUY0VDrMo7KGibuIGN9BsoYwbD/0EL4q9fRA5IiAdcWrBphxM9Qbak8pawqqHOWE4nPSWeIjjwgWjCW8IM/vlJJJBEcSGIhVhMxLKHskXUNbIqKCsoy0gpAxJHkSwER7KOaDxBR0IuO4N//CwSYkDIM6I6IKo9Rb1D1h1FXVFWEllCUUQK4WDDLNEZgrUE7fE6EEy8gb//JFNRzMj6TNUcqbqZuhupmo6qbpCVpCgSQkRScsRgCF7jrcFrg9N2A30u3SbEbz+2ScqMnOmGB/phoRtG2nagamrKUiIKIAVCtHhncFZjjMIqjdUWpz0ugy4hPn3cpara0w+PTNMD43Rgt5vo+oGmbv4DYwx4b7FWo82KVgqtNFoZrHYbGHxEfP9hTE09s98/cpjPzPORadwz9ANt025gfkL0OGfQRqP0iloV67qilMFoh/0MfvvdlPp25jQ/8XA8c5xPzNOe3fAFGDzGGrRWrGrldV1Zr/l/PsBhrSf4hHh4v0v7buHp8Mzj6cJpObLs5zdQ5oSJcAeVUlzXldfrHV3voMstSYjmpU3n/sjL6Zmn04WHwy3hOOxom4byDnp/S/gGXnldM5576jA24ENClJcinXdnvjq9uyU8HFlyyVsPvwCNQelbwuv1yutWcu6rw7h8CxJiPIk0DwuPpxcupwvH5ch+A/vblHPClEt2GHPvYQZzD1e9gcY4rI+EAOJpEakfWg6nrzkdLszzgWmcGDawRhYSQSR4j7V5omqbsFJ50rl/BmsDzqdbwm9mkeoexuU98+HCtN3Dka7rqfPqFXkokej9dqmtzvdPYdSK1vkAi3VxG0iMAvFhL5LsoJ+fGfYXhmmh3zalo87fw6JAkIjeEfKWGIXTaoPtli4fFPFB3MCPGWygng600xPduND2O+qmpfoMpkgKjugNwSh8Rrd3XsOQPzyEWNzAH/YiiRqqcaAe39EMC3W/o9q2pNwSFilA9ESniU5t6AZbi8+gz+kkMRb8C3gES+LZSpOJAAAAAElFTkSuQmCC'

export const emailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const usernameRegExp = /^[A-Za-z0-9_]{3,20}$/

export const socialMediaRegexExps: { [key: string]: RegExp } = {
  twitter: /^(https?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9_]+\/?$/,
  linkedin:
    /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub)\/[a-zA-Z0-9_-]+\/?$/,
  discord:
    /^(https?:\/\/)?(www\.)?(discord\.gg\/|discord\.com\/invite\/)?[a-zA-Z0-9]+\/?$/,
  github: /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/,
  telegram: /^(https?:\/\/)?(www\.)?t\.me\/[a-zA-Z0-9_]+\/?$/
}

export const FeedQueriesForRefetch = ['getFeedPosts', 'getTrendingPosts'] // add getFollowingPosts
export const ProfileQueriesForRefetch = [
  'GetSelfProfile',
  'GetAccountInformation'
]
