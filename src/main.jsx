import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(//o main seleciona a Div root e redenriza dentro dela os componentes nesse exemplo o compolente App
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
/* O main.jsx ele é o componente pai que através dele toda aplicação vem pelo componente filho App.jsx e renderiza
tudo na Div ReactDOM.createRoot(document.getElementById('root')

Tudo que vem dentro da ReactDOM vai renderizar na tela o que vier*/