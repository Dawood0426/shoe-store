
import Link from "next/link";
import "./style.css"
export function Header() {

    return <div className="mb-5">
    <nav style={{backgroundColor:"gray"}} className="navbar custom-navbar">
      <Link className="navbar-brand" href="/" style={{ fontWeight: "bold", fontSize: "1.5rem", color: "white" }}>
        Footflips
      </Link>
      <button
        className="menu-toggler"
        onClick={() => document.querySelector(".menu-items").classList.toggle("show")}
      >
        ☰
      </button>
      <ul className="menu-items">
        <li className="nav-item">
          <Link  style={{color:"white"}} className="nav-link" href="/men">
            Men
          </Link>
        </li>
        <li className="nav-item">
          <Link style={{color:"white"}} className="nav-link" href="/women">
            Women
          </Link>
        </li>
        <li className="nav-item">
          <Link style={{color:"white"}} className="nav-link" href="/kid">
            Kid
          </Link>
        </li>
        <li className="nav-item">
          <Link style={{color:"white"}} className="nav-link" href="/cart">
            Cart
          </Link>
        </li>
        
        
      </ul>
    </nav>
  </div>
  
  
  
  
}