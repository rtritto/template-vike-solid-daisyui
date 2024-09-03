import type { DataAsync } from 'vike/types'

const getData = async () => {
  return [
    'Data1',
    'Data2'
  ]
}

export type Data = {
  name: string,
  porductDetails: Awaited<ReturnType<typeof getData>>
}

export const data: DataAsync<Data> = async (pageContext) => {
  const { name } = pageContext.routeParams
  const porductDetails = await getData()
  return {
    name,
    porductDetails
  }
}