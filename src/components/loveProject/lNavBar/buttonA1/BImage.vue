<template>
<svg :style="{fill:Color}" class="bImage" width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M20 5V3.799A.798.798 0 0 0 19.201 3H.801A.8.8 0 0 0 0 3.799V5h2v2H0v2h2v2H0v2h2v2H0v1.199A.8.8 0 0 0 .801 17h18.4a.8.8 0 0 0 .799-.801V15h-2v-2h2v-2h-2V9h2V7h-2V5h2zM8 13V7l5 3-5 3z"/></svg>
</template>

<style>
.bImage {
  width:18px;
  height: 18px;
  stroke:#25282A;
  transition: fill 0.5s;
}
.bImage:hover {
  fill:yellow
}
</style>
<script>
export default {
  name: 'BImage',
  props: {
    message: String
  },
  data () {
    return {
      Color: 'white'
    }
  },
  methods: {
    changeam () {
      this.Color = '#EB951E'
    },
    changeamR () {
      this.Color = 'white'
    }
  }
}
</script>
