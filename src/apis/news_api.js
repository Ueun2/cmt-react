import axios from "axios";

export async function getNewsData(path,keyword){
  try{
    const res=await axios.get(`http://localhost:8080/${path}/${keyword}`);
    return res.data;
    
  }
  catch(err){
    
  }
  
}