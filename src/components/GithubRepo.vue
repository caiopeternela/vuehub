<template>
  <div>
    <v-autocomplete
        v-model="user"
        :items="usersList"
        :loading="loading"
        :search-input.sync="search"
        item-text="login"
    />
  </div>
</template>

<script>
  import { debounce } from '@/helpers/debounce.js'
  import { api } from '@/api/api.js'

  export default {
    data: () => ({
      user: null,
      search: null,
      usersList: [],
      loading: false,
    }),
    methods: {
      debouncedSearch: debounce(async function () { 
        this.loading = true
        const data = await api.searchUsers(this.search)
        this.usersList = data.items
        this.loading = false
      }, 500)
    },
    watch: {
      search () {
        this.debouncedSearch()
      }
    }
  }
</script>