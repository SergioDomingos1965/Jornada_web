function Conteudo()
{
    let nome = "Sem nada" 
    function ClicouNoBotao(){
            nome = "seu_nome"
    }

    return (
     <main>
        <h2>Meu nome Domingos</h2>
        <h3>Sou programador</h3>
        <button onClick=
        {ClicouNoBotao}>
            clique aqui para monstrar seu nome
        </button>
        <p>{nome}</p>
     </main>
  )  
}
export default Conteudo