"use client"
import { hasSubdomain } from '@/app/utils/hasSubdomain';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Page = ({ params, ...rest }) => {
    const path = usePathname();
    const backPath = path.replace(/\/[^\/]*$/, "/")
    const haveSubdomain = hasSubdomain()
    const { slug, domain } = params

    const prefixPath = !haveSubdomain ? "/profile/sixt" : ""

    return (
        <div>
            <div>Profile: {domain}</div>
            <div>Collection: {slug[0]}</div>
            {slug[1] && <div>Gleans: {slug[1]}</div>}
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            {!slug[1] && <>
                <Link href={`${prefixPath}/${slug[0]}/gleans-1`} className='block'>Gleans-1</Link>
                <Link href={`${prefixPath}/${slug[0]}/gleans-2`} className='block'>Gleans-2</Link>
                <Link href={`${prefixPath}/${slug[0]}/gleans-3`} className='block'>Gleans-3</Link>
                <Link href={`${prefixPath}/${slug[0]}/gleans-4`} className='block'>Gleans-4</Link>
            </>}
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <Link href={backPath} className='block'>Back</Link>
        </div>
    )
}

export default Page