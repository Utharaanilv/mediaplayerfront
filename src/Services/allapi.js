import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonRequest";

export const addVideos=async(body)=>{
  return await commonRequest("POST",`${BASE_URL}/videos`,body)
}

export const getVideos=async()=>{
return await commonRequest("GET",`${BASE_URL}/videos`,"")
}

export const deleteVideos=async(id)=>{
    return await commonRequest("delete",`${BASE_URL}/videos/${id}`,{})
}

export const aDDCategory=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/category`,body)
}

export const getallCategory=async()=>{
  return  await commonRequest("GET",`${BASE_URL}/category`,"")
}

export const deleteCategory=async(id)=>{
  return await commonRequest("DELETE",`${BASE_URL}/category/${id}`,{})
}

export const getHistory=async()=>{
  return await commonRequest("GET",`${BASE_URL}/watchhistory`,"")
  }

  export const addHistory=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/watchhistory`,body)
  }

  export const getvideo=async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/videos/${id}`,"")
  }

    export const updateCategory=async(id,body)=>{
      return await commonRequest("PUT",`${BASE_URL}/category/${id}`,body)
    }

    export const deleteWatchhistory=async(id)=>{
      return await commonRequest("DELETE",`${BASE_URL}/watchhistory/${id}`,{})
    }
    
