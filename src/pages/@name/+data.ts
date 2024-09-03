import type { DataAsync } from 'vike/types'

import type { Data } from '@/types/myTypes'

const getNextPage = async (name: string) => name === 'product' ? 'item' : 'product'

export const data: DataAsync<Data> = async (pageContext) => {
  const { name } = pageContext.routeParams
  return {
    nextPage: await getNextPage(name)
  }
}