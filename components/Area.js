import Link from 'next/link'

export default function Area({ area }) {
  return (
    <li>
      <Link href="/areas/[area_id]" as={`/areas/${area.id}`}>
        <a>{area.name}</a>
      </Link>
    </li>
  )
}