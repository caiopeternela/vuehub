<template>
  <v-container>
    <GithubRepo @selectedRepo="onSelect"/>
    <RepoManager :repo="repo"/>
  </v-container>
</template>
  
<script>
  import GithubRepo from '@/components/GithubRepo.vue'
  import RepoManager from '@/components/RepoManager.vue'

  export default {
    components: {
      GithubRepo,
      RepoManager
    },
    data: () => ({
      repo: null
    }),
    methods: {
      onSelect (repo) {
        this.repo = repo
      }
    }
  }
</script>