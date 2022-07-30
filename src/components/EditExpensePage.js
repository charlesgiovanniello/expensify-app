import React from 'react'
import { useParams, useSearchParams, useLocation} from 'react-router-dom';

const EditExpensePage = () =>{
    let location = useLocation()
    let {id} = useParams()
    let [searchParams] = useSearchParams()
    console.log(location)
    console.log({id})
    console.log(searchParams.get('key'))
    return (
        <div>
            This is from my EditExpensePage with id of {id}
        </div>
    )
}

export default EditExpensePage