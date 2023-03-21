import React from 'react'
import '../CSS/main.css'
import Logo from '../../../assets/images/icons/logo.svg'

export default function SignUp() {
  return (
    <div class="App">
        <div id="wrapper">
           <div class="page-wrapper auth_wrapper">
              <div class="content-area-wrapper">
                 <div class="content-wrapper">
                    <div class="container">
                       <div class="card products_blc">
                          <div class="card-body">
                             <div class="card_content_wrap text-center"></div>
                             <div class="card_content_wrap text-center">
                                <div class="logo_wrap">
                                   <img src={Logo} alt="logo"/>
                                   <h6>Create an account</h6>
                                </div>
                                <form>
                                   <div class="form_wrapper">
                                      <div class="mb-4"><label for="exampleFormControlInput1" class="form-label label_modify"><span class="mendatary">*</span> Email</label><input type="email" name="email" placeholder="demo@gmail.com" class="form-control input_modify" id="exampleFormControlInput1" value=""/></div>
                                      <div class="mb-4"><label for="exampleFormControlInput1" class="form-label label_modify"> <span class="mendatary">*</span> Password</label><input type="password" placeholder="*****" name="password" class="form-control input_modify" id="exampleFormControlInput2" value=""/></div>
                                      <div class="mb-4"><label for="exampleFormControlInput1" class="form-label label_modify"> <span class="mendatary">*</span>Confirm Password</label><input type="password" name="confirmpassword" class="form-control input_modify" id="exampleFormControlInput3" placeholder="*****" value=""/></div>
                                      <div class="mb-0 auth_btn"><button type="button" class="theme-btn-primary theme-btn">Sign Up</button></div>
                                      <div class="already"> <a href="login.html">Already have Account</a></div>
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
  )
}
