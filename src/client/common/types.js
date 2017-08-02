// @flow

export type Cookies = {
  get: string => string,
  set: (string, string, { path: string }) => void
}

export type Styleable = {
  css: { [string]: string }
}

export type Comment = {
  email: string,
  desc: string
}

export type Goal = {
  id: number,
  desc: string,
  comments: (?Comment)[]
}
