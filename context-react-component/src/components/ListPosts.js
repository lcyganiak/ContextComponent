import{ useContext, useState } from 'react'
import { ConstextGlobalApp } from '../Store/GlobalStore'

 const ListPosts = () => {
    console.log('nowe renderowania komponentu listPost')
    const GlobalContext = useContext(ConstextGlobalApp)
    console.log("komponent Lsit Post",GlobalContext )
    const [ListaPostow, setListaPostow] = useState(GlobalContext.listPost)
    console.log(ListaPostow)
    const listaView = ListaPostow.map(item => {
        return (
            <li>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </li>
        )
    })
  return (
    <>
        <ul>
            {listaView}
        </ul>
        <p>To jest liczba z countera {GlobalContext.couter}</p>
    </>
  )
}

export default ListPosts