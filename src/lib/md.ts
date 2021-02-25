import marked from "marked"

export async function fetchParsed(
  fetcher: (string) => Promise<any>,
  path: string
) {
  const res = await fetcher(`${path}.json`)
  const md = await res.json()
  return { md: marked(md) }
}
