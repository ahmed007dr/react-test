const CreatePost = () =>{
    // logic

    const HandelUserInput = (e) =>{
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
    }

    //return logic + front end
    return(
       <form>
         <textarea onChange={HandelUserInput} cols='30' rows='10'></textarea>
         <button type='submit'> add posts </button>
       </form>
    )
}

export default CreatePost