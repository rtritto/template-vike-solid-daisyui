import { useData } from 'vike-solid/useData'

import type { Data } from '@/types/myTypes'

const List = () => {
  const { nextPage } = useData<Data>()
  return <a href={`/${nextPage}`}>Link to {nextPage}</a>
}

export default List