
export const Home = () => {
  const login = ()=>{
    fetch("http://localhost:3000/api/auth/credencials",{
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
        "Acces-Control-Allow-Credentials": true,
      },
    })
      .then(data => {
        console.log({data})
      })
      .catch(error => {
        console.log({error})
      })

    // window.open("http://localhost:3000/api/auth/google", "_self")
  }
  return (
    <div>
      Home
      <button onClick={() => login()}>token</button>
    </div>
  )
}
