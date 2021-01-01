import {useState} from 'react'
import {getTenRandomJokes} from '../api/getRandomJoke'

const useJoke = ({numberOfJokes=1})=>{

    const [jokes, setjokes] = useState(null);
    const [error,setError] = useState(null)

    const grab = async ()=>{
        console.log('number of jokes: ',numberOfJokes)
        try{
            const response = await getTenRandomJokes()
            if(response.status == 200){
                if(numberOfJokes >= 10){
                    setjokes(response.data)
                }else{
                    console.log('here',response.data)
                    setjokes(response.data.slice(0,numberOfJokes))
                    
                }
            }
        }catch(e){
            setError(e)
        }
    }
  
    return [grab,jokes,error]
}

export default useJoke