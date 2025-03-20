//styles
import RecipeList from "../../components/RecipeList"
import "./Home.css"

import React, { useEffect, useState } from 'react'
import { projectFirestore } from "../../firebase/config"

export default function Home() {

  const [error, setError] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const [data, setData] = useState(null)

  //const {data, isPending, error}  = useFetch("http://localhost:3000/recipes")
  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
        if(snapshot.empty){
          setError('no recipes to load')
          setIsPending(false)
        } else {
          let results = []
          snapshot.docs.forEach( doc => {
              results.push({id: doc.id, ...doc.data()})
          })

          setData(results)
          setIsPending(false)
        }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })

    return () => {unsub()}


  }, [])

  return (
    <div className="home">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Still loading..... </p>}
        {data &&  <RecipeList recipes={data}/>}

    </div>
  )
}
