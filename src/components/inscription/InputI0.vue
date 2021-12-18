<template>
<div>
    <input v-bind:placeholder = "placeholder" v-bind:type ="type" v-model="message" class ="inputI0"/>
</div>
</template>
<style>
    .inputI0 {
        box-sizing: border-box;
        background-color: transparent;
        padding: 10px;
        width: 320px;
        font-size: 15px;
        border: solid 2px #DFE1E6;
        color: rgb(100,100,100);
        border-radius: 0.1em;
    }
    .inputI0:focus {
        border-color:#4C9AFF;
        border-width: 2px;
    }
</style>
<script>
export default {
  name: 'InputI0',
  props: {
    message: String,
    placeholder: String,
    type: String
  }
}
</script>
