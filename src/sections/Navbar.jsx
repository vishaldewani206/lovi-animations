
export const Navbar = () => {
  return (
    <nav className="fixed z-10">
      <p className='md:text-2xl lg:text-3xl text-xl font-rebound font-bold'>Lovi</p>
      <button className='flex-center gap-2'>
        <img src="/images/apple-logo.png" alt="apple logo" />
        <div>
          <p className='md:text-xs text-[10px] -mb-1'>Download on the</p>
          <h2 className='md:text-xl text-md font-bold'>App Store</h2>
        </div>
      </button>
    </nav>
  )
}
