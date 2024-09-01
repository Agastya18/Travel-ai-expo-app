
const API_KEY='XDliznuoa1ADSWeusmB4w7MeixqYD2atmNUjdA9v72Y'
// const API=`https://api.unsplash.com/search/photos?page=1&query=${searchPlace}&client_id=${API_KEY}`
export const getPhotoRef=async(placeName)=>{
    const result= await fetch(`https://api.unsplash.com/search/photos?page=1&query=${placeName}&client_id=${API_KEY}`)
    const data= await result.json()
    
    // console.log(data)
   return data

}