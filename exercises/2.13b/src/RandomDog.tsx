import { useState, useEffect } from 'react'
interface Dog {
  message: string,
  status: string
}
const RandomDog = () => {
    const [dogImage, setDogImage] = useState<Dog | undefined>()
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => setDogImage(data))
    }, [])
    console.log(dogImage);
    return (
        <div>
            <h1>Random Dog Image</h1>
            {dogImage && <img src={dogImage.message} alt="A Random Dog" />}
        </div>
    )
}
export default RandomDog