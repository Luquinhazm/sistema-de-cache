export default async function Home() {
    const resposta = await fetch("http://localhost:3000/api/items")
    const respostaJSON = await resposta.json()
  
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1>{respostaJSON.messagem}</h1>
      </div>
    )
  }