

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `
  <h1>
  DISCOVER OR RE  <span style="color:#FFFF8F">DISCOVER THE </span> <span style="color:#C41E3A">CAPITAL OF EUROPE	</span>
 </h1>
 <hr class="hr1">  
 <hr class="hr2">  
<hr class="hr3"> 
  `;
  navbarWrapper.innerHTML = navbar;
};

export default Navbar;
