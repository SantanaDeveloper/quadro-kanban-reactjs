'use client';

import { ArrowsUpDownIcon, UserPlusIcon } from "@heroicons/react/24/outline"
import Image from "next/image";
export default function Home() {
  function handleClick() {
    console.log('increment like count');
  }
  return (
    <main className="pl-32 pt-16">
      <div className="p-10">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h4 className="text-4xl font-bold text-gray-600">Quadro StellarJetz</h4>
            <button onClick={handleClick} className="w-9 h-9 ml-5">
              <ArrowsUpDownIcon className="text-gray-500 rounded-full p-2 bg-white shadow-xl" />
            </button>
          </div>

          <div>
            <ul className="flex space-x-2">
              {[1, 2, 3].map((i, key) => {
                return <li key={key}>
                  <Image src="https://avatars.githubusercontent.com/u/48597174?v=4"
                    width="36" height="36" style={{ objectFit: 'cover' }}
                    className=" rounded-full " alt={''} />
                </li>
              })}

              <li>
                <button className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center rounded-full">
                  <UserPlusIcon className="w-5 h-5 text-gray-500" />
                </button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  )
}
