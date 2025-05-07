import axios from "axios";


export const all=async()=>{
      const response=await axios.get("http://localhost:8080/app/v1/all");
      console.log(response.data.data);
      return response.data.data;
}

export const create=async(data)=>{
    const response=await axios.post("http://localhost:8080/app/v1/create",data);
    console.log(response.data)
    return response.data;
}

export const update=async(id,updated)=>{
    const response=await axios.put(`http://localhost:8080/app/v1/update/${id}`,updated);
    return response.data;
}

export const remove=async(id)=>{
    const response=await axios.delete(`http://localhost:8080/app/v1/delete/${id}`);
    return response.data;
}




export const singleton =async(id)=>{
    const response=await axios.get(`http://localhost:8080/app/v1/singleton/${id}`);
    return response.data.data;
}




