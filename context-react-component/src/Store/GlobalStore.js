import { useState, createContext } from "react";

export const ConstextGlobalApp = createContext({
    listPost: [],
    couter: null,
    editPost: () => {},
    editcounter: () => {}
})


const ContextComponent = (props) => {
    const [list, setList] = useState([
        {
          title: "Most Krymski",
          body: "Opis wydarzenia",
          id: "1"
        },
        {
          title: "Węgiel na ziemę",
          body: "Opis problemu",
          id: "2"
        }
      ])
      const [counterValue, setcounterValue] = useState(10)

      const editPostFc = (id, text) => {
        console.log(id, text)
        const thisPost = list.find(item => item.id === id) // znajdujemy po id post który chemy edytować
        console.log(thisPost)
        thisPost.body = text
        setList([...list, thisPost])

      }
      const changeCounter = () => {
        console.log("Zminiam w global Store ja tym zarządzam")
        setcounterValue(counterValue + 2)
      }
      const providerValue = {
        listPost: list,
        couter: counterValue,
        editPost: editPostFc,
        editcounter: changeCounter
      }
    return (
        <ConstextGlobalApp.Provider value={providerValue}>
            {props.children}
        </ConstextGlobalApp.Provider>
    )

}

export default ContextComponent