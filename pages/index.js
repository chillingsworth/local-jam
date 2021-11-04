import React from 'react';
import Link from 'next/link'
import ButtonAppBar from '../components/AppBar'

export default function Home(){
  return (
    <ButtonAppBar>
      <div>
        <Link href="/areas">
          <a>See Local Jam</a>
        </Link>
      </div>
    </ButtonAppBar>
  );
}
