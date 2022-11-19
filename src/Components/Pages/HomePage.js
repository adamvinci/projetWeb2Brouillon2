import UserIcon1 from '../../img/userI1.jpg';
import UserIcon2 from '../../img/userI2.png';

const homePage=`
  
<form class="connexion">  
       <img src="${UserIcon1}">     
      <div class="container">  
        
    <div>
          <input type="text" placeholder="Enter Username" name="username" required>  
 </div>  
           <div>
       
          <input type="password" placeholder="Enter Password" name="password" required>  
      </div>  
           <div>
            <button type="submit">Login</button>  
             </div>  
             <div>
             <button type="submit">Register</button> 
       </div>  
         
             <div>
         
               Remember me    <input type="checkbox" checked="checked">  </div> 
    
      </div>   
  </form> 
   
             <form class="connexion2">  
       <img src="${UserIcon2}">     
      <div class="container">  
        
    <div>
          <input type="text" placeholder="Enter Username" name="username" required>  
 </div>  
           <div>
       <button type="submit">Play Without An Account (No classement Provided)</button>  
             </div>  
             <div>

      </div>   
  </form> 



`

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = homePage
};

export default HomePage;
