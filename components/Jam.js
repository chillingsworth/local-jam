import Link from 'next/link'

export default function Jam({ jam }){
  return (
    <li>
      <h2>${jam.name}</h2>
      <h2>${jam.id}</h2>
      <h2>${jam.state}</h2>
      {/* <Link href="/areas/[area_id]/jams/[jam_id]" as={`/areas/${jam.id}/jams/${jam.id}`}>
        <a>{jam.name}</a>
      </Link> */}
    </li>
  )
}