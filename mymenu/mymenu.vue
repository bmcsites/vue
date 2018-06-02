<template>
<div class="mymenu">
    <div class="menu-box">
      <div class="menu-type" v-for="menucat in ppl">
        <h3>...{{menucat.Name}}...</h3>
        <p>{{menucat.Description}}</p>
        <menu-item v-bind:items="menucat.Items"></menu-item>
        <div class="sub-menu" v-for="subitem in menucat.Classes">
          <h4>{{subitem.Name}}</h4>
          <span>{{subitem.Description}}</span>
          <menu-item v-bind:items="subitem.Items"></menu-item>
        </div>
      </div>
    </div>
</div>
</template>

<script>

  export default {
    data: function(){
      return{
        CoName: 'VueApp',
        ppl: []
      }
    },
    created: function(){
      this.dbCall()
    },
    methods: {
      dbCall() {
        this.$http.get('https://mycheck-menus-dev.s3.amazonaws.com/9272/menu_general.json')
          .then( (response) => {
          return response;
        }, err => {
          console.log('error :', err);
        }).then((mydata) => {
          console.log(mydata.data);
          this.ppl =  mydata.data;
        });
      }
    }
  }
</script>

<style lang="scss">
  @import './mymenu.scss';
</style>
