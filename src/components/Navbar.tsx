import logoSmall from '@public/assets/images/logo-small.svg'
import iconPersonalBest from '@public/assets/images/icon-personal-best.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex gap-2'>
        <img src={logoSmall} alt='Logo' className='w-6' />
        <div className='leading-[1.1]'>
          <span className='block text-(--neutral1) text-nowrap font-(--fw2) text-lg'>
            Typing Speed Test
          </span>
          <span className='block text-[8px] text-(--neutral2) tracking-wider'>
            Type as fast as you can in 60 seconds
          </span>
        </div>
      </div>
      <div className='flex items-center gap-1 text-sm'>
        <img src={iconPersonalBest} alt='Trophy' className='w-4' />
        <span className='text-(--neutral3)'>Personal best:</span>
        <span className='text-(--neutral1)'>92 WPM</span>
      </div>
    </div>
  )
}

export default Navbar
