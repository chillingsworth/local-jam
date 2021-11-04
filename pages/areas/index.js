import useSWR from 'swr'
import Area from '../../components/Area'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Areas() {
  const { data, error } = useSWR('/api/areas', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((p, i) => (
        <Area key={i} area={p} />
      ))}
    </ul>
  )
}
