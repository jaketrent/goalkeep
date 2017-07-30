// @flow

export type Cookies = {
  get: string => string,
  set: (string, string, { path: string }) => void
}

export type Styleable = {
  css: { [string]: string }
}
