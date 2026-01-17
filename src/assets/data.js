export const getImages = ()=>{
  const length = 9;
  const images = []

  for(let i = 1; i <= length; i++){
    images.push("/images/" + i + ".png")
  }

  return images;

}