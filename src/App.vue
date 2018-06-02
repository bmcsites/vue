<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <my-menu></my-menu>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from '../header/header.vue';
  import Footer from '../footer/footer.vue';
  import myMenu from '../mymenu/mymenu.vue';
  import ServerDetails from '../servers/server-details.vue';
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'my-menu': myMenu,
    'app-server-details': ServerDetails
  }
}
</script>
