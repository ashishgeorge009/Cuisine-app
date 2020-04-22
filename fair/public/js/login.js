
const d = document;

const loginbtn = d.querySelector(".loginForm");
const emailbox = d.querySelector(".email")
const passwordbox = d.querySelector(".password")

async function LoginHandler(email,password){
    const response = await axios.post("/api/users/login",
    {email,password});
    if(response.data.status==="userLogged In")
    {
        alert("user is logged in");
    }else{
        alert("Wrong email or password");
    }
    console.log(response.data)
}

loginbtn.addEventListener("submit",function(event){
    event.preventDefault();
    const email = emailbox.value;
    const password = passwordbox.value;
    LoginHandler(email,password);

})