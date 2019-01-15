<template>
  <table id="secondTable">
    <thead>
    <tr>
      <th v-for="col in myJson" :key="col.id">
        {{col.alias}}
      </th>
    </tr>
    </thead>
    <tbody>
      <td v-for="col in myJson" :key="col.id" >
        <template v-if="col.status === 'SUCCESS'">
          <router-link :to="{path: '/main/' + col.alias + '/' + col.globalId}">
            <i class="fas fa-check">
          </i>
          </router-link>
        </template>
        <template v-if="col.status === 'CRASH'">
          <router-link :to="{path: '/main/' + col.alias + '/' + col.globalId}">
            <i class="fas fa-times">
            </i>
          </router-link>
        </template>
        <template v-if="col.status === 'NO_DATA'">
          <router-link :to="{path: '/main/no'}">
            <i class="fas fa-minus">
            </i>
          </router-link>
        </template>
      </td>
    </tbody>
  </table>

</template>

<script>

export default{
  props: {
    msg: String
  },
  data () {
    return {
      myJson: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.post('http://localhost:8082/main')
        .then(result => {
          this.myJson = result.data
        })
    }
  }
}

</script>

<style scoped>

  table {
    font-family: 'Open Sans', sans-serif;
    width: 60%;
    border-collapse: collapse;
    border: 3px solid #44475C;
    margin: 0 auto;
    padding-top: 0;
  }
  #secondTable{
    margin-top: 60px;
  }

  table th {
    text-transform: uppercase;
    text-align: center;
    color: #000;
    padding: 8px;
    min-width: 30px;
    border: 2px solid;

  }

  table td {
    text-align: center;
    padding: 15px;
    border-right: 2px solid #7D82A8;
  }
  table td:last-child {
    border-right: none;
  }
  table tbody tr:nth-child(2n) td {
    background: #D4D8F9;
  }
  .fa-check {
    color: #129b6e;
    font-size: 20px;
  }
  .fa-times {
    color: #9b1713;
    font-size: 20px;
  }
  .fa-minus {
    color: #000;
    font-size: 20px;
  }
</style>
