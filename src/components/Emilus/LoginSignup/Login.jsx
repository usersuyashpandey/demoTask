import React from 'react'
import Logo from '../../../assets/images/icons/logo.svg'
import '../CSS/main.css'

export default function Login() {
  return (
    <div className="App">
        <div id="wrapper">
           <div className="page-wrapper auth_wrapper">
              <div className="content-area-wrapper">
                 <div className="content-wrapper">
                    <div className="container">
                       <div className="card products_blc">
                          <div className="card-body">
                             <div className="card_content_wrap text-center">
                                <div className="card_content_wrap text-center">
                                   <div className="logo_wrap">
                                      <img src={Logo} alt='logo'/>
                                      <h6>Don’t have an account yet?<a className="signUpSpan" href="signup.html"> Sign Up</a></h6>
                                   </div>
                                   <form>
                                      <div className="form_wrapper">
                                         <div className="mb-4"><label for="exampleFormControlInput1" className="form-label label_modify"><span className="mendatary">*</span> Email</label><input type="email" className="form-control input_modify" id="exampleFormControlInput1" name="email" placeholder="demo@demo.com" value=""/></div>
                                         <div className="mb-4"><label for="exampleFormControlInput2" className="form-label label_modify"> <span className="mendatary">*</span> Password</label><input type="password" className="form-control input_modify" name="password" id="exampleFormControlInput1" placeholder="********" value=""/></div>
                                         <div className="mb-0 auth_btn"><button type="button" className="theme-btn-primary theme-btn">Sign In</button></div>
                                      </div>
                                   </form>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  )
}
