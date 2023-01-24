<template>
  <div>
    <v-row class="text-center">
      <v-col cols="6">
        <v-autocomplete
        v-model="user"
        :items="userList"
        :loading="userLoading"
        :search-input.sync="search"
        item-text="login"
        label="Select the user"
        >
          <template v-slot:item="data">
            <v-list-item-avatar>
              <v-img :src="data.item.avatar_url"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="data.item.login"></v-list-item-title>
            </v-list-item-content>
          </template>
        </v-autocomplete>
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="repo"
          :items="repoList"
          :loading="repoLoading"
          item-text="name"
          label="Select the repo"
          return-object
          single-line
          ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { debounce } from '@/helpers/debounce.js'
  import { api } from '~api'

  export default {
    data: () => ({
      user: null,
      search: null,
      repo: null,
      repoList: [],
      userList: [],
      userLoading: false,
      repoLoading: false
    }),
    methods: {
      debouncedSearch: debounce(async function () { 
        this.userLoading = true
        const data = await api.searchUsers(this.search)
        this.userList = data.items
        this.userLoading = false
      }, 500),
      async listRepos () {
        this.repoLoading = true
        const data = await api.listRepos(this.user)
        this.repoList = data
        this.repoLoading = false
      }
    },
    watch: {
      search () {
        this.debouncedSearch()
      },
      user () {
       this.listRepos()
      },
      repo () {
        this.$emit('selectedRepo', this.repo)
      }
    }
  }
</script>