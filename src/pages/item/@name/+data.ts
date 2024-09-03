import type { DataAsync } from 'vike/types'

const getData = async () => {
  return [
    'Item1',
    'Item2'
  ]
}

export type Data = {
  name: string,
  items: Awaited<ReturnType<typeof getData>>
}

export const data: DataAsync<Data> = async (pageContext) => {
  const { name } = pageContext.routeParams
  const items = await getData()
  return {
    name,
    items
  }
}