
export const Navbar = () => {
  return (
    <nav className="md:fixed z-10">
      <img src="/images/logo.png" alt="logo" className="invert md:w-26 w-20" />
      <button className='download-btn hidden md:flex'>
        <img src="/images/apple-logo.png" alt="apple logo" />
        <div>
          <p className='md:text-xs text-[10px] -mb-1'>Download on the</p>
          <h2 className='md:text-xl text-md font-bold'>App Store</h2>
        </div>
      </button>
    </nav>
  )
}
