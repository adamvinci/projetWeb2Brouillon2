import { getAnonymUser, getAuthenticatedUser, isAuthenticated } from "../../utils/auths"
import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';




const contactPage = () => {
  clearPage();
  const page=pageHtml();
  const main = document.querySelector('main');
    main.innerHTML=page;
console.log(document.querySelector('#messageSubmit').value)
document.addEventListener('submit',async (e)=>{
  e.preventDefault();
 console.log("deda")
});
 document.querySelector('#changePage').addEventListener('click', ()=>{
    Navigate('/contactView');
});
};

function pageHtml(){
  const user= isAuthenticated() ? getAuthenticatedUser() : getAnonymUser();
  const contactpage= `<section class="contactpage">

  <div id="header">
   <p> Add Message</p> 
     <button type="button" id="changePage"  >View Message</button >
  </div>
  <div class="form">
  <div class="container">  
          
  <div>
  <label>From </label>
  </div>
  <div>
        <input type="text" placeholder="${user}" id="username" readonly/>  
  </div>  
        
  <div>
     
  <label for="">Choose a type of message:</label>
  </div>
  <div>
  <select id="type" required >
  <option value=""   disabled select   >Please Choose</option>
    <option value="question">Question</option>
    <option value="suggestion">Suggestion</option>
  
  </select>
    </div>  
         
    <div>
     <div>
  <label for="message">Write your message:</label>
  </div>
    <div >
        <textarea name="message" id="message" required ></textarea>
           </div>  
           
           <div>
           <input type="submit" id="messageSubmit"  value="Submit"/>
     </div>  
       </div>
  
  </div>
  </section>
  
  
  
  `
return contactpage;
}

export default contactPage;
