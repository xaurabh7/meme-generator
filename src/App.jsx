import { useEffect, useRef,useState } from "react"
import "./App.css"

export default function App() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        imageUrl:""
    })

    const [memes, setMemes] = useState([])

    const memeRef = useRef(null)

    const [isLoading, setIsLoading] = useState(true)

    function handleChange(event) {
        const { name, value } = event.currentTarget

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getRandomMeme() {
      if (isLoading) return
      const randomIndex = Math.floor(Math.random() * memes.length)

      setMeme(prevMeme => ({...prevMeme,
        imageUrl: memes[randomIndex].url
      }))
    }

    useEffect(() => {
        const controller = new AbortController()

        async function getMemes() {
            try {
              const response = await fetch(
                "https://api.imgflip.com/get_memes" ,
                 { signal: controller.signal }
                )
              const data = await response.json()

              setMemes(data.data.memes)
              setIsLoading(false)
            } catch(error) {
              if(error.name !== "AbortError"){
              console.error("Failed to fetch memes:",error)
              setIsLoading(false)
              }
            }
        }

        getMemes()

        return () => {
          controller.abort()
        }
    }, [])

    useEffect(() => {
      if(meme.imageUrl){
        setTimeout(() => {
          memeRef.current?.scrollIntoView({
          behaviour: "smooth"
        })
        },0)
      }
    },[meme.imageUrl])

    return (
        <main>
            <h1>MEME GENERATOR</h1>

            <div className="form">
                <input
                    type="text"
                    name="topText"
                    placeholder="Top text"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom text"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button onClick={getRandomMeme}
                        disabled={isLoading}
                > {isLoading ? "Loading memes..." : "Get a new meme image"}</button>
            </div>

            <div className="meme" ref={memeRef}>
                <img
                    src={meme.imageUrl}
                    className="meme--image"
                    alt="Meme"
                />

                <span className="meme--text top">
                  {meme.topText}
                </span>

                <span className = "meme--text bottom">
                  {meme.bottomText}
                </span>
            </div>
        </main>
    )
}