import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import { BoltIcon, CheckBadgeIcon, FolderIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline"

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 items-center justify-between'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>

            <HeaderItem 
              Icon={HomeIcon}
              Title="HOME"
            />

            <HeaderItem 
              Icon={BoltIcon}
              Title="TRENDING"
            />

            <HeaderItem 
              Icon={CheckBadgeIcon}
              Title="VERIFIED"
            />

            <HeaderItem 
              Icon={FolderIcon}
              Title="COLLECTIONS"
            />

            <HeaderItem 
              Icon={MagnifyingGlassIcon}
              Title="SEARCH"
            />

            <HeaderItem 
              Icon={UserIcon}
              Title="ACCOUNT"
            />

        </div>
        <Image 
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
            className='object-contain'
        />
    </header>
  )
}

export default Header