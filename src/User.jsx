export default function User({user}){
    const {name, email}= user
    // console.log(name, email)
    return(
        <>
        <div style={{border: '2px solid tomato',
    margin: '10px',
    padding:'10px',
    borderRadius: '20px'}}>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
        </div>
        </>
    )
}