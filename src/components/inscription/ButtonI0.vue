<template>
    <button type="submit" class ="buttonI0">
        {{ message }}
    </button>
</template>
<style>
    .buttonI0 {
        box-sizing:border-box;
        padding: 7px;
        width: 320px;
        background-color:#E2E4E6;
        border-radius: 0.2em;
        border: none;
        color: #888989;
        font-weight: bold;
        font-size: 15px;
    }
</style>
<script>
export default {
  name: 'ButtonI0',
  props: {
    message: String
  }
}
</script>
