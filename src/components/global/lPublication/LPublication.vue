<template>
    <div class ="lPublication">
        <div class="lPType"> {{ publication_type }}</div>
        <div class="lPImg"><img v-bind:src= "require(publication_img + '')" /></div>
        <div class="lPDate"><span> {{ publication_author }} |</span> {{ publication_date }}</div>
        <div class="lPStars"> <div v-for="color in star_colors"> <LPStar :Color="color.color"/> </div> </div>
        <div class="lPTitle"> {{ publication_title }} </div>
        <div class="lPText" :style="{maxHeight:vtext_height}"> {{ publication_text }} </div>
        <div class="lPMore"><div @click="slideText" :style="{ transform:vplus_transform }"></div></div>
        <div class="lPOption">
            <div class="lPPoint" >
                <div>
                    <img @click="reactEmit" v-bind:src="require('./emoticones/'+  react + '.svg')" />
                    <span class="lPPointt" @click="lsReactEmit" >{{ publication_point }}</span>
                </div>
            </div>
            <div class="lPPoint" >
                <div><img src="./images/com.svg" />{{ publication_point }}</div>
            </div>
            <div class="lPProfile">
                <img src="./images/pp.jpeg">
            </div>
        </div>
    </div>
</template>
<style src="./lPublication.css">
</style>
<script src="./lPublication.js">
</script>
