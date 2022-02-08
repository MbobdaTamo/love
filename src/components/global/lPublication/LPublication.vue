<template>
    <div class ="lPublication" :style="{display: Display}">
        <div class="lPType">{{ publication_type }} and id: {{ id }}</div>
        <div class="lPImg"><img v-bind:src= "require(publication_img + '')" /></div>
        <div class="lPDate">
            <div class="lPProfile">
                <img src="./images/pp.jpeg">
            </div>
            <div class="lPAuthor">
                <div><span>{{ publication_author }} |</span> {{ publication_date }}</div>
                <div class="lPStars"> <div v-for="color in star_colors"> <LPStar :Color="color.color"/> </div> </div>
            </div>
        </div>
        <div class="lPTitle">{{ publication_title }} </div>
        <div class="lPText" :style="{maxHeight:vtext_height}">{{ publication_text }} </div>
        <div class="lPMore"><div @click="slideText" :style="{ display: vdisplay_more }">more...</div></div>
        <div class="lPOption">
            <div class="lPPoint" >
                <div><img @click="toPublication" src="./images/com.svg" />{{ publi_numb_com }}</div>
            </div>
            <div class="lPPoint" >
                <div>
                    <img @click="reactEmit" v-bind:src="require('./emoticones/'+  react + '.svg')" />
                    <span class="lPPointt" @click="lsReactEmit" >{{ publication_point }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="./lPublication.css">
</style>
<script src="./lPublication.js">
</script>
