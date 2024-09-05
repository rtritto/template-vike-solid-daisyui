import { useData } from 'vike-solid/useData'

import type { Data } from '@/types/myTypes'

const List = () => {
  const data = useData<Data>()
  return <a href={`/${data.nextPage}`}>Link to {data.nextPage}</a>
}

export default List