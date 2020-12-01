
export const title = (state, index) => {
    {state.loader ? <div>"Loading..."</div>:
     <>{ <div key={state.data.id}>{state.data[index].title}</div>})</>}
}


export const text = (state,index) => {
    {state.loader ? <div>"Loading..."</div>:
    <>{state.data.map((item) => {
       return <div key={item.id}>{item.data[index].body}</div>})}</>}
}


export const isLogged = () => {
    if (sessionStorage.userSession !== undefined){
        return true
    } else {
        return false
    }
}