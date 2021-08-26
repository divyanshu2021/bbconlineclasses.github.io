import React , { useState } from "react";
const Contact = () => {

    const [data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        message:'',
    });
    const InputEvent = (event)=>{
        const {name,value}=event.target
        setData((preVal) =>{
            return{
                ...preVal,
                [name]:value,
            };
        } );
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My name is${data.fullname}.My mobile number is${data.phone}.and email is${data.email}.`);
    };
    return ( <>
<div className="my-5">  
  <h1 className="text-center">Contact Us </h1> 
</div>
<div className="container Contact_div">
</div>
<div className="row">
<div className="col-md-6 col-10 mx-auto">
  </div> 
  <form onSubmit={formSubmit}>
  <div class="mb-3">
  <label for="exampleFormControlInput1"
   class="form-label">
       FullName
       </label>
  <input type="email" 
  class="form-control" 
  id="exampleFormControlInput1" 
  name="FullName"
  value={data.fullname}
  onChange={InputEvent}
  placeholder="Enter Your name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1"
   class="form-label">
       Phone
       </label>
  <input type="number"  
  class="form-control" 
  id="exampleFormControlInput1" 
  name="Phone"
  value={data.phone}
  onChange={InputEvent}
  placeholder="Mobile Number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1"
   class="form-label">
       Email address
       </label>
  <input type="email" 
  class="form-control" 
  id="exampleFormControlInput1" 
  name="email"
  value={data.email}
  onChange={InputEvent}
  placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1"
   class="form-label">
       Message
       </label>
  <textarea class="form-control"
   id="exampleFormControlTextarea1"
    rows="3">
 name="Message"
  value={data.message}
  onChange={InputEvent }

    </textarea>
</div>
<div class="col-12">
    <button class="btn btn-primary"
     type="submit">
         Submit form
         </button>
  </div>
</form>
    </div>       </>);
};
export default Contact; 