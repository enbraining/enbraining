import Image from 'next/image'
import reactLogo from '../../public/logo.png'

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 align-middle">
        
        <div className="p-20 shadow-2xl rounded-2xl">
            <div className="mb-4 text-center opacity-90">
            </div>
            <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                    Donghak Kim
                </p>
                <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                    Backend Developer
                </p>
                <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
                    신기술이 맛있는 신기술입니다.
                </p>
            </div>
        </div>
        <div className="p-20 shadow-2xl rounded-2xl">
          <a href="https://github.com/6283hz/limpa">
            <Image src={reactLogo} alt="react logo" height={100} width={100} style={
              {
                borderRadius: '20%'
              }
            }/>
          </a>
        </div>
      </main>
    )
  }
  