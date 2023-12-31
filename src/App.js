import './App.css'
import Card from './Components/Cards'
import info from './InfoArray'

function App() {
  return (
    <>
      <h1>Contact List </h1>
      <Card
        name={info[0].name}
        img={info[0].img}
        tel={info[0].tel}
        email={info[0].email}
      />
      <Card
        name={info[1].name}
        img={info[1].img}
        tel={info[1].tel}
        email={info[1].email}
      />
    </>
  )
}

export default App
