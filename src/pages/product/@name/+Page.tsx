import type { PageContext } from 'vike/types'
import { useData } from 'vike-solid/useData'
import { For } from 'solid-js'

import type { Data } from './+data'

export const Page = (_pageContext: PageContext) => {
  const { name, porductDetails } = useData<Data>()
  return (
    <>
      <div>Product name: {name}</div>
      <br />
      <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        <For each={porductDetails}>
          {(item) => <li>{item}</li>}
        </For>
      </ul>
    </>
  )
}