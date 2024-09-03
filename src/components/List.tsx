import { useData } from 'vike-solid/useData'
import { For } from 'solid-js'

import type { Data } from '@/pages/item/@name/+data'

const List = () => {
  const { name, datas } = useData<Data>()
  return (
    <>
      <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        <For each={datas}>
          {(item) => <li>{item}</li>}
        </For>
      </ul>
      <a href={name === 'A' ? '/item/B' : '/product/A'}>Lint to item {name === 'A' ? 'B' : 'A'}</a>
    </>
  )
}

export default List