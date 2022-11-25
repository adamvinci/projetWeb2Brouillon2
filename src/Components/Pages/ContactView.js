import Navigate from '../Router/Navigate';
import { isAuthenticated } from "../../utils/auths";




const contactpage= `
<section class="contactpage">
    
<div id="header">
<button type="button" id="changePage"  >Add Message</button >
 <p> View Message</p>
</div>

 ${isAuthenticated() ? 'aa' : 'Vous n etes pas connecter'}


</section>



`

const contactPage = () => {
    console.log(isAuthenticated())
    const main = document.querySelector('main');
    main.innerHTML=contactpage;
    document.querySelector('#changePage').addEventListener('click', ()=>{
        Navigate('/contact');
    });
};



export default contactPage;
