import exampleData from '../exampleData.json'

function Users() {
    return (
        <>
        <div>
            {exampleData.map(x => <p>{x.id} - {x.name} //   {x.username}</p>)}
        </div>
        </>
    )
}

export default Users