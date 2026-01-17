
export const Top = () => {
  return (
    <section className='top'>
      <div className='max-w-96 flex flex-col items-center mt-4'>
        <button className='award'>
          <img src="/images/award.avif" alt="award" />
          <p>Lovi won Beauty Innovation Award!</p>
        </button>

        <h1 className='text-5xl text-primary mt-4 text-center font-rebound '>
          Science-backed <br/>
          AI Cosmetologist <br/>
          you can trust
        </h1>
        <p className='mt-4 text-primary'>Focused around you and your beauty</p>

      </div>
    </section>
  )
}
