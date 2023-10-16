import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const [feild,setFeild] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imageURL = form.imageURL.value;

        setFeild("");

        if(!name && !email && !password && !imageURL){
            return setFeild('All feild Must Be Requard');
        }else if(!name){
            return setFeild('plase name provied')
        }else if(!email){
            return setFeild('plase email provied')
        }else if(!password){
            return setFeild('plase password provied')
        }else if(!imageURL){
            return setFeild('plase image url Provied')
        }


        createUser(email,password)
        .then(result => {
            const user = result.user;
            updateProfile(user,{
                displayName : name,photoURL : imageURL
            })
            .then(() => {
                const displayName = user.displayName;
                const userEmail = user.email;
                const userImage = user.photoURL;
                const lastSignInTime = user.metadata.lastSignInTime;
                
                const userInfo = {
                    displayName,
                    userEmail,
                    userImage,
                    lastSignInTime
                }

                try {
                  const successResponse = async () => {
                    const response = await fetch("http://localhost:5000/users",{
                        method : 'POST',
                        headers : {
                            'content-type' : 'application/json'
                        },
                        body : JSON.stringify(userInfo)
                    });

                    const result = await response.json();
                    
                    if(result.insertedId){
                        form.reset();
                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "Your info has been saved",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                        
                    }
                    
                  };

                  successResponse();
                } catch (erorr) {
                  console.log(erorr);
                }

                

            })
            .catch(erorr => {
                console.log(erorr.message)
            })
        })

        .catch(erorr => {
            console.log(erorr.message)
        })



    }



    return (
      <div>
        <Navbar></Navbar>
        <div className="bg-grey-lighter py-6 min-h-screen flex flex-col">
          <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <form onSubmit={handleRegister}>
              <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="name"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                />
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="imageURL"
                  placeholder="Confirm Password"
                />

                <p>{feild}</p>

                <button
                  type="submit"
                  className="w-full bg-[#38C172] text-center mt-5 py-2 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                >
                  Create Account
                </button>

                <div className="text-center text-sm text-grey-dark mt-4">
                  By signing up, you agree to the
                  <a
                    className="no-underline border-b border-grey-dark text-grey-dark"
                    href="#"
                  >
                    Terms of Service
                  </a>{" "}
                  and
                  <a
                    className="no-underline border-b border-grey-dark text-grey-dark"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </form>
            <div className="text-grey-dark mt-6">
              Already have an account?
              <Link
                to="/login"
                className="no-underline text-[#38C172] font-bold border-b border-blue text-blue"
              >
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Register;