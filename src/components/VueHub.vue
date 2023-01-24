<template>
  <v-container>
    <GithubRepo @selectedRepo="onSelect"/>
    <GithubIssues :repo="repo"/>
  </v-container>
</template>
  
<script>
  import GithubRepo from '@/components/GithubRepo.vue'
  import GithubIssues from '@/components/GithubIssues.vue'

  export default {
    components: {
      GithubRepo,
      GithubIssues
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