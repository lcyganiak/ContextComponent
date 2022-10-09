import React, { useContext, useRef } from 'react'
import { ConstextGlobalApp } from '../Store/GlobalStore'

const OnePost = () => {
    const GlobalContext = useContext(ConstextGlobalApp)
    const idPost = useRef(null)
    const bodyPost = useRef(null)
    const addTwoToCounter = () => {
        console.log('Jestem funkcją z komponetu onePost i odwołuj się do funkcji z GlobalStore')
        GlobalContext.editcounter()
    }
    const zminaPostu =  () => {
        GlobalContext.editPost(idPost.current.value, bodyPost.current.value)
    }
    return (
        <div>
            <button onClick={addTwoToCounter}>Add +2 </button>

            <input type="number" ref={idPost} />
            <input type="text" ref={bodyPost}/>
            <button onClick={zminaPostu}>Zminiń Post</button>
        </div>
    )
}
export default OnePost

// App > ListPost > onePost