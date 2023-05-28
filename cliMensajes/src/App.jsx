import { useState } from 'react'

function App() {

  const [input, setInput]= useState(null)

  const handleInput = (event) => {
      const nameTarget = event.target.name;
      console.log(event.target.value)
      setInput({
        ...input,
        [nameTarget]: event.target.value
      })
  }

  const handleCLick =()=>{
      const url ='http://192.168.1.59:80'
console.log(input.mensaje)
      try {
         fetch(

          url,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain',
            },
            body: JSON.stringify( input.mensaje ),
          });

      } catch (error) {
        console.log('Error al enviar mensaje', error);
      }
  }

  return (
    <>
      <body>

        <header class="header-container">
          <h1>Mensajeria</h1>
        </header>

        <main class="main-contaier">
          <form action="" class="form-container">
            <label for="">Ingresa tu mensaje</label>
            <input type="text" class="inputForm" onChange={handleInput}  name="mensaje" placeholder="Ejemplo de mensaje"/>

              <input type="submit" class="Botton" onClick={handleCLick} value="ENVIAR"/>
              </form>
            </main>
            <script src="./index.js"></script>
          </body>
        </>
        )
}

        export default App
