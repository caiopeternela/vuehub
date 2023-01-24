<template>
  <div>
    <v-row>
      <v-col cols="3">
        <RepoIssues :repo="repo"/>
      </v-col>
      <v-col cols="3" class="ml-2">
        <RepoContent :repo="repo"/>
      </v-col>
    </v-row>
  </div>
</template>
  
<script>
  import RepoIssues from '@/components/RepoIssues.vue'
  import RepoContent from '@/components/RepoContent.vue'

  export default {
    props: ['repo'],
    components: {
      RepoIssues,
      RepoContent
    }
  }
</script>

<style scoped>
  div {
    display: flex;
    width: 200%;
  }
</style>