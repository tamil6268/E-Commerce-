const signIn = require("../model/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const register = async (req, res) => {
  const details = req.body;
  const username = details.Username;
//   console.log(details);
  try {
    const hashPassword = await bcrypt.hash(details.Password, saltRounds);
    // console.log(hashPassword);
    const USER = new signIn({
      Username: username,
      Password: hashPassword,
    });
    await USER.save();
    console.log("Successfully saved in DataBase");
    return res.status(200).send({message:"Succesfully Registerd"});
  } catch (error) {
    return res.status(500).send({ message: "error" });
  }
};
const login = async (req, res) => {
  const userData = req.body;
//   console.log(userData)
  const userName=userData.Username;
  const queryCheck = { Username: userData.Username };
  const storedData = await signIn.find(queryCheck);
console.log(queryCheck)
  storedData.map(async(items) => {
    console.log("Entering in map",items)
    if(userData.Username == items.Username) {
        console.log("username verifyied")
        await bcrypt.compare(userData.Password,items.Password,(error,valid)=>{
            if(error){
                console.log("password incorrect")
                res.send("Password Incorrect")
            }else{
                console.log("Password matching")
                if(valid==true){
                    console.log("logged succefully")
                    res.send(`<b>${userName}</b> Sucessfully logged In`)
                }
            }
        })
    } else {
        console.log("Invalid username not matching")
      res.send("Username Invalid...");
    }
  });
};
module.exports = { register, login };
