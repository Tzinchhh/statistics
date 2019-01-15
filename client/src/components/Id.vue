<template>
    <div class="container">
      <table>
        <thead>
        <tr>
          <th>
            Build ID
          </th>
          <th>
            Platform
          </th>
          <th>
            Quest Name
          </th>
        </tr>
        </thead>
        <tbody>
        <td >
          {{ item.team.globalId }}
        </td>
        <td>
          {{ item.team.platform }}
        </td>
        <td>
          {{ item.team.name }}
        </td>
        </tbody>
      </table>
      <!--<h5>Pathways</h5>-->
      <table>
        <thead>
        <tr>
          <th>
            Status
          </th>
          <th>
            Path name
          </th>
          <th>
            Leafs info
          </th>
        </tr>
        </thead>
        <tbody id="last">
        <td>
          {{ item.team.pathway.status }}
        </td>
        <td>
          {{ item.team.pathway.name }}
        </td>
        <td >
          <template v-for="success in item.success">
            <i class="fas fa-check"></i>
          </template>
          <template v-for="fail in item.fail">
            <i class="fas fa-times"></i>
          </template>
        </td>
        </tbody>
      </table>
    </div>
</template>

<script>
export default{

  props: {
    msg: String
  },
  data () {
    return {
      item: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      var aliasQ = this.$route.params.alias
      var globalId = this.$route.params.globalId
      this.$http.get('http://localhost:8082/main/' + aliasQ + '/' + globalId)
        .then(result => {
          this.item = result.data
        })
    }
  }
}
</script>
<style scoped>

  table {
    font-family: 'Open Sans', sans-serif;
    width: 80%;
    border-collapse: collapse;
    border-bottom: 1px solid;
    border-top: 1px solid;
    margin: 0 auto 100px auto;
  }

  table th {
    text-transform: uppercase;
    text-align: center;
    opacity: 0.5;
    color: #000;
    padding: 8px;
    min-width: 30px;
    border-bottom: 1px solid;
    width: 100px;

  }

  table td {
    text-align: center;
    padding: 8px;
  }
  table td:last-child {
    border-right: none;
  }

  table tbody tr:nth-child(2n) td {
    background: #D4D8F9;
  }
  #last {
    background-color: #dff6f0;;
  }
  h5 {
    margin: 1% 0 1% 0;
    /*padding-right: 120px;*/
  }
  .fa-check {
    color: #129b6e;
    font-size: 20px;
  }
  .fa-times {
    color: #9b1713;
    font-size: 20px;
  }



</style>
