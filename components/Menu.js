import Link from 'next/link'

const Menu = () => {

  return (
    <div>
      <nav className="navbar fixed-top navPadTop navbar-expand-lg navbar-dark d-none d-lg-block">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img src="/logos/logoMenu.png" width="158px" alt="Lyndus - O incentivo que faz bem!"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="nav mx-auto">
              <li className="nav-item">
                <Link href="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link href="/clients">PARA EMPRESAS</Link>
              </li>
              <li className="nav-item">
                <Link href="/beautyspots">PARA NEGÓCIOS DE BELEZA</Link>
              </li>
              <li className="nav-item">
                <Link href="/users">PARA VOCÊ</Link>
              </li>
              <li className="nav-item">
                <Link href="/duvidas">PERGUNTAS</Link>
              </li>
              <li className="nav-item">
                <Link href="/#contato">CONTATO</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid navbar d-lg-none">
        <Link className="navbar-brand" href="/">
          <img src="/logos/logoMenu.png" width="158px" alt="Lyndus - O incentivo que faz bem!"/>
        </Link>
        <button className="btn dropdown-toggle" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
          MENU
        </button>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/clients">PARA EMPRESAS</Link></li>
          <li><Link href="/beautyspots">PARA NEGÓCIOS DE BELEZA</Link></li>
          <li><Link href="/users">PARA VOCÊ</Link></li>
          <li><Link href="/duvidas">PERGUNTAS</Link></li>
          <li><Link href="#contato">CONTATO</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Menu