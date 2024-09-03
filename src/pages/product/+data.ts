import type { DataAsync } from 'vike/types'

import type { Data } from '@/types/myTypes'

const getNextPage = async () => 'item'

export const data: DataAsync<Data> = async (_pageContext) => {
  return {
    nextPage: await getNextPage()
  }
}