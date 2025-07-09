<template>
    <div>
        <v-container>
        <v-row>
            <v-col v-for="item in apiData" :key="item.id" cols="4">
            <v-card height="200" @click="showDialog(item)">
                <div>
                <h1>{{item.naziv}}</h1>
                </div>
            </v-card>
            </v-col>
        </v-row>
        <v-row justify="end" class="pagination-wrapper">
          <v-col cols="auto">
            <v-pagination v-model="currentPage" :length="totalPages" :total-visible="5" circle></v-pagination>
          </v-col>
        </v-row>
        </v-container>

        <v-dialog v-model="dialog" width="500">
        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
            <h3>{{ selectedCard.naziv }}</h3>
            </v-card-title>

            <v-card-text>
            {{ selectedCard.opis }}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="closeDialog"> Close </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
  </div>
</template>
<script>

    export default {
    name:'PrikazSladoleda',
  data: () => ({
    apiData: [],
    selectedCard: {},
    dialog: false,
    currentPage: 1,
    itemsPerPage: 20,
  }),
  methods: {
    showDialog(item) {
      this.selectedCard = item
      this.dialog = true
    },
    closeDialog() {
      this.selectedCard = {}
      this.dialog = false
    },
    getData() {
      const apiUrl = 'http://localhost:3000/sladoledi'
      this.axios.get(apiUrl).then(response => {
        this.apiData = response.data
      })
    },
    otvoriDialog() {
      this.dialogOtvoren = true;
    },
    zatvoriDialog() {
      this.dialogOtvoren = false;
    }
  },
  created() {
    this.getData()
    console.log(this.apiData)
  },
  computed:{
    paginatedData(){
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.apiData.slice(start, end);
    },
    totalPages(){
      let pages = parseInt(this.apiData.length / this.itemsPerPage);
      if(this.apiData.length % this.itemsPerPage !== 0){
        pages += 1;
      }
      return pages;
    },
  }
}
</script>
<style scoped>
.close {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1.5rem;
}
</style>