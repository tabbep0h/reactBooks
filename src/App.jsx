import React from "react";
import { AddBook, Main, About } from "./pages"
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {

  const booksList = [
    {name:"book1",desc:"descBook1"},
    {name:"book2",desc:"descBook2"},
    {name:"book3",desc:"descBook3"},
  ]

  const [ books, setBooks ] = React.useState(booksList)

  return(
  <Router>
    <Routes>
      <Route exact path="/" element={<Main booksList={books}/>}/>
      <Route exact path="/addbook" element={<AddBook booksList={books} setBooks = {setBooks}/>}/>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
  </Router>
  
  )
}

export default App;
