import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com'

export const api = {
  async searchUsers (user) {
    const response = await axios.get(`/search/users?q=${user}`)
    return response.data
  },
  async listRepos (user, page) {
    if (!page) {
      page = 1
    }
    const response = await axios.get(`/users/${user}/repos?page=${page}`)
    return response.data
  }
}