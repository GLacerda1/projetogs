import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <header>
        <nav>
            <h1>Localidades</h1>
            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/login'>Login</Link>
            <Link to='/solucao'>Solução</Link>
        </nav>
    </header>
  )
}

export default Nav
