import SectionFour from "@/components/ui/Home/SectionFour"
import SectionOne from "@/components/ui/Home/SectionOne"
import SectionThree from "@/components/ui/Home/SectionThree"
import SectionTwo from "@/components/ui/Home/SectionTwo"

const Duplicates = () => {
  return (
    <>
      <section className='flex justify-evenly mb-10'>
        <div className='my-auto relative -top-16 -z-20'>
          <h1 className='tracking-wider text-4xl font-bold -z-30'>Welcome to MISY,</h1>
          <h3 className='tracking-wide mt-[4px] ml-1 -z-30'>Lifestyle & Fabric</h3>
        </div>
        <div className=''>
          <div className='-z-30 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-30 rounded-xl'></div>
          <div className='-z-30 lg:relative lg:-top-32 lg:left-32 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-80 rounded-xl'></div>
        </div>
      </section>
      <section className='flex justify-evenly mb-10'>
        <div className='my-auto relative -top-16 -z-20'>
          <h1 className='tracking-wider text-4xl font-bold -z-10'>Welcome to MISY,</h1>
          <h3 className='tracking-wide mt-[4px] ml-1 -z-30'>Lifestyle & Fabric</h3>
        </div>
        <div className=''>
          <div className='-z-30 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-30 rounded-xl'></div>
          <div className='-z-30 lg:relative lg:-top-32 lg:left-32 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-80 rounded-xl'></div>
        </div>
      </section>
      <section className='flex justify-evenly mb-10'>
        <div className='my-auto relative -top-16 -z-20'>
          <h1 className='tracking-wider text-4xl font-bold -z-10'>Welcome to MISY,</h1>
          <h3 className='tracking-wide mt-[4px] ml-1 -z-30'>Lifestyle & Fabric</h3>
        </div>
        <div className=''>
          <div className='-z-30 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-30 rounded-xl'></div>
          <div className='-z-30 lg:relative lg:-top-32 lg:left-32 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-80 rounded-xl'></div>
        </div>
      </section>
      <section className='flex justify-evenly mb-10'>
        <div className='my-auto relative -top-16 -z-20'>
          <h1 className='tracking-wider text-4xl font-bold -z-10'>Welcome to MISY,</h1>
          <h3 className='tracking-wide mt-[4px] ml-1 -z-30'>Lifestyle & Fabric</h3>
        </div>
        <div className=''>
          <div className='-z-30 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-30 rounded-xl'></div>
          <div className='-z-30 lg:relative lg:-top-32 lg:left-32 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-80 rounded-xl'></div>
        </div>
      </section>
      <section className='flex justify-evenly mb-10'>
        <div className='my-auto relative -top-16 -z-20'>
          <h1 className='tracking-wider text-4xl font-bold -z-10'>Welcome to MISY,</h1>
          <h3 className='tracking-wide mt-[4px] ml-1 -z-30'>Lifestyle & Fabric</h3>
        </div>
        <div className=''>
          <div className='-z-30 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-30 rounded-xl'></div>
          <div className='-z-30 lg:relative lg:-top-32 lg:left-32 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-80 rounded-xl'></div>
        </div>
      </section>
      <section className='flex justify-evenly mb-10'>
        <div className='my-auto relative -top-16 -z-20'>
          <h1 className='tracking-wider text-4xl font-bold -z-10'>Welcome to MISY,</h1>
          <h3 className='tracking-wide mt-[4px] ml-1 -z-30'>Lifestyle & Fabric</h3>
        </div>
        <div className=''>
          <div className='-z-30 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-30 rounded-xl'></div>
          <div className='-z-30 lg:relative lg:-top-32 lg:left-32 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-80 rounded-xl'></div>
        </div>
      </section>
      <section className='flex justify-evenly mb-10'>
        <div className='my-auto relative -top-16 -z-20'>
          <h1 className='tracking-wider text-4xl font-bold -z-10'>Welcome to MISY,</h1>
          <h3 className='tracking-wide mt-[4px] ml-1 -z-30'>Lifestyle & Fabric</h3>
        </div>
        <div className=''>
          <div className='-z-30 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-30 rounded-xl'></div>
          <div className='-z-30 lg:relative lg:-top-32 lg:left-32 lg:w-[240px] lg:h-[240px] lg:bg-gray-900 lg:bg-opacity-80 rounded-xl'></div>
        </div>
      </section>
    </>
  )
}

export default function Home() {
  return (
    <main className=''>
      <SectionOne />
      <div className="">
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
      </div>
    </main>
  )
}