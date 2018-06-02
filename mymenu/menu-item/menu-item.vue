<template>
  <div>
    <div class="menu-item" v-for="item in items">
      <div class="menu-item-img">
        <img width="100" height="100" v-bind:src="item.photos">
        <span class="item-id">item no. {{item.id}}</span>
      </div>
      <div class="menu-item-content">
        <div class="menu-item-top">
          <h5>{{item.Name}}</h5>
          <div class="dot"></div>
          <span class="price">&#36;{{item.Price}}</span>
        </div>
        <div class="menu-item-bottom">
          <p>{{item.Description}}</p>
        </div>
        <button v-show="item.ModifierGroups !== undefined" @click="item.active = !item.active">Click for Options</button>
        <div class="mod" v-for="modtopic in item.ModifierGroups" v-show="!item.active">
          <fieldset>
            <legend>{{modtopic.Name}}</legend>
            <div class="options" v-for="opt in modtopic.Modifiers">
              <input type="checkbox" v-bind:name="opt.Name" />{{opt.Name}}
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['items'],
    data: function () {
      return {
      }
    },
    methods: {

    }
  }
</script>

