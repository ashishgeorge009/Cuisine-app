const d = document;

const loginbtn = d.querySelector(".loginForm");
const emailbox = d.querySelector(".email")
const passwordbox = d.querySelector(".password")
const logoutbtn = d.querySelector(".logout")

async function LoginHandler(email,password){
    const response = await axios.post("/api/users/login",
    {email,password});
    if(response.data.status==="userLogged In")
    {
        alert("user is logged in");
        //redirecting using front end
        location.assign("/profile");
    }else{
        alert("Wrong email or password");
    }
    console.log(response.data)
}
async function LogoutHandler(){
    let response = await axios.get("/logout")
    if(response.data.status==="user LoggedOut"){
        alert("user loggedOut");
        location.relode();
    }
    else{
        alert("logout failed");
    }

}
if(loginbtn){
loginbtn.addEventListener("submit",function(event){
    event.preventDefault();
    const email = emailbox.value;
    const password = passwordbox.value;
    LoginHandler(email,password);

})}

if (logoutbtn) {
    logoutbtn.addEventListener("click", function () {
      LogoutHandler();
    })
  }
  