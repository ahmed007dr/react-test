import { useState } from "react"

const CreatePost = () =>{
    // logic
    const [text,setText] = useState('')
    const HandelUserInput = (e) =>{
        setText(e.target.value)
    }

    //return logic + front end
    return(
        <div>
            <h3> {text} </h3>
            <form>
                <textarea onChange={HandelUserInput} cols='30' rows='10'></textarea>
                <button type='submit'> add posts </button>
            </form>
        </div>

    )
}

export default CreatePost