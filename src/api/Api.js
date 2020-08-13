import * as Axios from "axios";

const instance = Axios.create({
    baseURL: `http://gallery.dev.webant.ru/`,
    // headers: { accept: "application/json" , "content-type": "application/json"}
})

const headers = {accept: "application/json" , "content-type": "application/json", "Access-Control-Allow-Origin": "*"}
export const authApi = {
    registerClient (data) {
      return instance.post(`api/clients`, data, headers)
    },
    registerUser ({email, phone, fullName, password, username, birthday}) {
        return instance.post(`api/users`, {email, phone, fullName, password, username, birthday, roles: [
            "ROLE_USER"
          ]}, headers
        )
    },
    login (client_id ,client_secret) {
        return instance
        .get(`oauth/v2/token?client_id=${client_id}&grant_type=password&username=dung6eetle&password=12345&client_secret=${client_secret}`, headers)
    }
}
  
export const itemsApi =  {
  getItems (currentPage, pageSize) {
    return instance.get(
      `api/photos?page=${currentPage}&limit=${pageSize}`, headers
    )
  },
  getItemModal () {
    return instance.get(
      `api/photos/1`, headers)
  }
}