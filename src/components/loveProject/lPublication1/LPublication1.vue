<template>
    <div class ="lPublication1">
    <div class="lP1First">
        <div class="lP1Img"><img v-bind:src= "require(publication_img + '')" /></div>
    </div>
    <div class="lP1Second">
        <div>
            <div class="lP1Date"><div> {{ publication_author }} </div> {{ publication_date }} | {{ publication_type }}</div>
            <div class="lP1Stars"> <div v-for="color in star_colors"> <lPStar :Color="color.color"/> </div> </div>
            <div class="lP1Title"> {{ publication_title }} </div>
            <div class="lP1Text" :style="{maxHeight:vtext_height}"> {{ publication_text }} </div>
            <div class="lP1More"><div @click="slideText" :style="{ transform:vplus_transform }"></div></div>
            </div>
        </div>
    </div>
</template>
<style src="./lPublication1.css">
</style>
<script src="./lPublication1.js">
</script>
