<template>
  <div class="container">
    <i class="fab fa-gitkraken"></i>
    <h2>Quest info not found</h2>
    <p>For more information, please contact the Old Ones</p>
  </div>

</template>
<script>

  export default{
    data () {
      return {
        message: 'No data'
      }
    }
  }

</script>
<style>
  .fa-gitkraken::before {
    font-size: 200px;
    color: #a7aa9f;
    opacity: 0.5;
    margin-bottom: 2%;
  }
  h2{
    margin-top: 1%;
  }
  .container {
    margin-top: 100px;
  }
</style>
