import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com'

export const api = {
  async searchUsers (user) {
    const response = await axios.get(`/search/users?q=${user}`)
    return response.data
  },
  async listRepos (user) {
    const response = await axios.get(`/users/${user}/repos`)
    return response.data
  },
  async listIssues (owner, name, page) {
    const response = await axios.get(`/repos/${owner}/${name}/issues?page=${page}`)
    return response.data
  },
  async listContent (owner, repo, path = '') {
    const response = await axios.get(`/repos/${owner}/${repo}/contents/${path}`)
    return response.data
  }
}