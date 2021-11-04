import React from 'react';
import Link from 'next/link'

export default function Home(){
  return (
    <div>
      <Link href="/areas">
        <a>See Local Jam</a>
      </Link>
    </div>
  );
}
