<template>
  <div>
    <v-row>
      <v-col>
        <h2>Content</h2>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">File</th>
                  <th class="text-left">Path</th>
                  <th class="text-left">Link</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="file in content" :key="file.sha">
                  <td v-if="file.type == 'file'"><v-icon>mdi-file</v-icon> {{ file.name }}</td>
                  <td v-else><v-icon>mdi-folder</v-icon> <v-chip @click="listContent(file.path)">{{ file.name }}</v-chip></td>
                  <td>{{ file.path }}</td>
                  <td><v-btn icon :href="file.html_url" target="_blank"><v-icon>mdi-open-in-new</v-icon></v-btn></td>
                </tr>
                <v-icon v-if="newPath.length > 0" class="ml-4" @click="back">mdi-arrow-left</v-icon>
              </tbody>
            </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { api } from '~api'

  export default {
    props: ['repo'],
    data: () => ({
      content: [],
      newPath: [],
      currentPath: null
    }),
    methods: {
      async listContent (path){
        const data = await api.listContent(this.repo.owner.login, this.repo.name, path)
        if (path) {
          this.newPath.push(path)
          this.currentPath = path
        }
        this.content = data
        this.loading = false
      },
      async back () {
        this.newPath.pop()
        let oldPath = this.newPath.length == 1 ? this.newPath[0] : ''
        this.content = await api.listContent(this.repo.owner.login, this.repo.name, oldPath)
        this.currentPath = oldPath
      }
    },
    watch: {
      repo (){
        this.content = []
        this.newPath = []
        this.currentPath = null
        if (this.repo) {
          this.listContent()
        } else {
          this.content = []
          this.newPath = []
          this.currentPath = null
        }
      }
    }
  }
</script>