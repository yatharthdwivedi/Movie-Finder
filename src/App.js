import { useEffect, useState } from "react";
import MovieDetails from "./components/MovieDetails";
import "./App.css";
import { Button, Container, Form, FormControl, Navbar, NavbarBrand } from "react-bootstrap";

function App() {
  const [movies, setMovies] = useState([]);
  const [text,setText] = useState('')

  useEffect(() => {
    fetch(" http://www.omdbapi.com/?s=kick&apikey=ad195b11")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.Search);
        console.log(movies);
      });
  }, []);

  const searchMovie = async(e) => {
    e.preventDefault()
    console.log('searching');
    try {
      const url = `http://www.omdbapi.com/?s=${text}&apikey=ad195b11`
      const res  = await fetch(url)
      const data = await res.json()
      console.log(data);
      setMovies(data.Search)
    } catch (error) {
      console.log(error);
    }
  }

  const changeText = (e)=> {
    setText(e.target.value)
  }

  return (
    <>

     <Navbar bg ='dark' expand='lg' variant='dark'>
      <Container fluid>
        <NavbarBrand href ='/'>Movie Finder</NavbarBrand>
        <Form className="d-flex" onSubmit={searchMovie}>
          <FormControl type="Search" placeholder="Search Movies" className="me-2" value={text} onChange={changeText}/>
          <Button variant="secondary" type="submit">Search</Button>
        </Form>
      </Container>
     </Navbar>
     {movies.length> 0 ?(
      <div className="container row">
      <div className="grid ">
        {movies.map((movie) => (
          <MovieDetails key={movie.id} {...movie} />
          
        ))}
        </div>
    </div>
     ):(
      <h1>No Movies</h1>
     )}
      
      
    </>
    
  );
}

export default App;
