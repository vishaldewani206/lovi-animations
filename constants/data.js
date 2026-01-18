export const getImages = ()=>{
  const length = 4;
  const images = []

  for(let i = 1; i <= length; i++){
    images.push("/images/product-" + i + ".avif")
  }

  return images;

}