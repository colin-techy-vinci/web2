import { useState, useEffect } from 'react'
interface Dog {
    message: string,
    status: string
}
const RandomDog = () => {
    const [dogImage, setDogImage] = useState<Dog | undefined>()
    useEffect(() => {
        fetchDogImage();
        setInterval(fetchDogImage, 5000);
    }, [])
    const fetchDogImage = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setDogImage(data);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    }
    console.log(dogImage);
    return (
        <div>
            <h1>Random Dog Image</h1>
            {dogImage && <img src={dogImage.message} alt="A Random Dog" />}
        </div>
    )
}
export default RandomDog