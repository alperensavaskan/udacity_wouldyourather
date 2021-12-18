export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const OUT_AUTHED_USER = 'OUT_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function outAuthedUser () {
  return {
    type: OUT_AUTHED_USER,
  }
}