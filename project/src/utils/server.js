import axios from 'axios'
import store from '@/store'

const Server = axios.create({
  // baseURL: '',
  // timeout: 3000
})

Server.interceptors.request.use(config => {
  let token = localStorage.getItem('admin_token')

  if('params' in config){
    config.params.token = token
  }else{
    config.params = {
      token: token
    }
  }
  store.dispatch('changeLoading',true)

  return config
},error => {
  return Promise.reject(error)
})

Server.interceptors.response.use(response => {
  if(response.status == 200){

    store.dispatch('changeLoading', false)
    
    return response.data
  }
},error => {
  return Promise.reject(error)
})

export default Server