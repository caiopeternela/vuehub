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
                </tr>
              </thead>
              <tbody>
                <tr v-for="file in content" :key="file.sha">
                  <td v-if="file.type == 'file'"><v-icon>mdi-file</v-icon> {{ file.name }}</td>
                  <td v-else><v-icon>mdi-folder</v-icon> <v-chip @click="contentPath(file.path)">{{ file.name }}</v-chip></td>
                  <td>{{ file.path }}</td>
                </tr>
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
      loading: false,
    }),
    methods: {
      async listContent (){
        this.loading = true
        const data = await api.listContent(this.repo.owner.login, this.repo.name)
        this.content = data
        this.loading = false
      },
      async contentPath (path) {
        this.loading = true
        const data = await api.contentPath(this.repo.owner.login, this.repo.name, path)
      }
    },
    watch: {
      repo (){
        this.content = []
        if (this.repo) {
          this.listContent()
        } else {
          this.content = []
        }
      }
    }
  }
</script>