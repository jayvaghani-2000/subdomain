"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Home() {
  const path = usePathname();

 

  // console.log({ path })
  return (
    <div>
      <div> home</div>
      <Link href={"http://sixt.localhost:3000"}>Sixt</Link>
    </div>
  )
}
