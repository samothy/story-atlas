/* Use WebComponents */

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <nav class="side-nav col-sm-3 col-xl-2">
          <button class="home-button" onclick="linkToURL('/index.html')">
            Story <br> Atlas
          </button>

          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Suggested Reading</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">The Protagonist</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">The Antagonist</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Story Shapes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">The Weird Stuff</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Resources</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Random Essay</a>
            </li>
          </ul>

        </nav>
      `;
    }
  }
  
  customElements.define('header-component', Header);