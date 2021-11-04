import { useRouter } from 'next/router'
import useSWR from 'swr'
import Jam from '../../../components/Jam'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }

  return data
}

export default function Area() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.area_id && `/api/areas/${query.area_id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <ul>
      {data['jams'].map((p, i) => (
        <Jam key={i} jam={p} />
      ))}
      </ul>
    </div>
  )
}