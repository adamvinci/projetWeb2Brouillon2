import { getAnonymUser, getAuthenticatedUser, isAuthenticated } from "../../utils/auths"
import Navigate from '../Router/Navigate';


const contactpage= `
<section class="contactpage">

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
      <input type="text" placeholder="${isAuthenticated ? getAuthenticatedUser : getAnonymUser}" id="username" readonly/>  
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
   
<label for="message">Write your message:</label>
</div>
  <div >
      <textarea name="message" id="message" required ></textarea>
         </div>  
         
         <div>
         <input type="submit" id="messageSubmit"  value="Submit"/>
   </div>  
     

</div>
</section>



`

const contactPage = () => {
  console.log(getAuthenticatedUser())
    const main = document.querySelector('main');
    main.innerHTML=contactpage;
    document.addEventListener('submit',async (e)=>{
        console.log("submit")
        e.preventDefault();
        const type=document.querySelector('#type');
        const message=document.querySelector('#message');
        console.log(type,message);
        
    });
 document.querySelector('#changePage').addEventListener('click', ()=>{
    Navigate('/contactView');
});
};



export default contactPage;
