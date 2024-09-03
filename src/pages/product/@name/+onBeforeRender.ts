import { render } from 'vike/abort'

export function onBeforeRender() {
  throw render('/')
}