"use client"
import { hasSubdomain } from '@/app/utils/hasSubdomain';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const Page = ({ params }) => {
    const path = usePathname();
    const router = useRouter()
    const haveSubdomain = hasSubdomain()

    const backPath = path.replace(/\/[^\/]*$/, "/");
    console.log({ haveSubdomain, backPath })

    const prefixPath = !haveSubdomain ? "/profile/sixt" : ""

    const { domain } = params

    return (
        <div>
            <div>Profile: {domain}</div>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <Link href={`${prefixPath}/collection-1`} className='block'>Collection-1</Link>
            <Link href={`${prefixPath}/collection-2`} className='block'>Collection-2</Link>
            <Link href={`${prefixPath}/collection-3`} className='block'>Collection-3</Link>
            <Link href={`${prefixPath}/collection-4`} className='block'>Collection-4</Link>
        </div>
    )
}

export default Page