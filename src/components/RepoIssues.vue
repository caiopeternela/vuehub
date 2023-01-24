<template>
  <div>
    <v-row>
      <v-col>
        <h2>Issues</h2>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Number</th>
                  <th class="text-left">Title</th>
                  <th class="text-left">Link</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="issue in issues" :key="issue.number">
                  <td>{{ issue.number }}</td>
                  <td>{{ issue.title }}</td>
                  <td><v-btn icon :href="issue.html_url" target="_blank"><v-icon>mdi-open-in-new</v-icon></v-btn></td>
                </tr>
              </tbody>
            </template>
        </v-simple-table>
        <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
        <v-btn color="primary" v-if="hasMore && !loading" @click="listIssues">+</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { api } from '~api'

  export default {
    props: ['repo'],
    data: () => ({
      issues: [],
      loading: false,
      hasMore: false,
      currentPage: 1
    }),
    methods: {
      async listIssues (){
        if (this.hasMore) {
          this.loading = true
        }
        const moreIssues = await api.listIssues(this.repo.owner.login, this.repo.name, this.currentPage)
        this.issues = this.issues.concat(moreIssues)
        this.hasMore = moreIssues.length > 0 && this.currentPage != 1
        this.currentPage++
        this.loading = false
      }
    },
    watch: {
      repo (){
        this.issues = []
        if (this.repo) {
          this.hasMore = false
          this.currentPage = 1
          this.listIssues()
        } else {
          this.issues = []
          this.hasMore = false
          this.currentPage = 1
        }
      }
    }
  }
</script>