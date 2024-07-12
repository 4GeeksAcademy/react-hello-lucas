import React from 'react'

function Navbar() {
  return (
    <div className='container mt-3'>
        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Start Boostrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse m" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary" href="#">Service</a>
        </li>
        <li class="nav-item text-secondary">
          <a class="nav-link text-secondary" href="#">Contact</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar