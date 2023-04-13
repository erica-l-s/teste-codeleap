const PageCrud = () =>{
   return(
    <div className="container-crud">
           <div className="header">
               <p>CodeLeap Network</p>
           </div>
           <div className="box">
            <h2>What's on your mind?</h2>
             
             <div>
             <p>Title</p>
             <input className="input-title"></input>
             </div>
             <div>
              <p>Content</p>
              <input className="input-content"></input>
             </div>
              <button>Create</button>
           </div>

       </div>
   )
}
export default PageCrud