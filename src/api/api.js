export const api = {
  async searchUsers (string) {
    const response = await fetch(`https://api.github.com/search/users?q=${string}`)
    return response.json()
  }
}