const Posts = (props) =>{
    // logic
    console.log(props)


    //return logic + front end
    return(
        <div>
            <h1>{props.title}</h1>
            <h3> author : {props.name} </h3>
            <p>learn python code </p>
        </div>
    )
}

export default Posts