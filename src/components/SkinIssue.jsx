
export const SkinIssue = ({x,y, stickRotation, stickY, stickX,stickLength, circleY, circleX, heading, para}) => {
  return (
    <div className='relative'>
      <div className={`absolute  ${y} ${x}  px-4 py-3 rounded-xl bg-white drop-shadow-xl`}>
        <h2 className='font-rebound md:text-2xl text-sm  mb-1 text-left'>{heading}</h2>
        <p className='md:px-3 px-2 py-1 md:py-2 bg-gray-300 rounded-2xl text-xs md:text-lg'>{para}</p>
      </div>
      <div className={`${stickLength} h-0.5 bg-white ${stickRotation} absolute ${stickY} ${stickX}`}></div>
      <div className={`md:w-8 md:h-8 w-4 h-4 border border-white rounded-full absolute ${circleY} ${circleX}`}></div>
    </div>
  )
}
