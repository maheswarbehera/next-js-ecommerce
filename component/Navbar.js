import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Navbar = () => {
  return (
    <>

      <nav class="navbar navbar-expand-lg bg-light navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" href={`/`}>Ecommerce Store</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href={`/`}>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href={`/about`}>About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href={`/contact`}>Contact</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href={`/product`}>Browse Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
