import { useState } from "react"

const CreatePost = () =>{
    // logic
    const [text,setText] = useState('')
    const [posts,setPost] = useState([])

    const HandelText = (e) =>{
        setText(e.target.value)
    }
    const AddNewPost = (e) =>{
        e.preventDefault() // no refresh
        setPost([...posts,text]) // give me value and add new value 
        setText('')
        console.log(posts)
    }

    //return logic + front end
    return(
        <div>
            <h3> {text} </h3>
            <form onSubmit={AddNewPost}>
                <textarea  onChange={HandelText} cols='30' rows='10'></textarea>
                <button type='submit'> add posts </button>
            </form>
        </div>

    )
}

export default CreatePost