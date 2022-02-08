<template>
    <div class ="lovComment" :style="{display: Display}">
        <div style="display:none" class="lovCommentImg"><img v-bind:src= "require(publication_img + '')" /></div>
        <div class="lovCommentDate"><span>{{ publication_author }} |</span> {{ publication_date }}</div>
        <div class="lovCommentText" :style="{maxHeight:vtext_height}">{{ publication_text }} </div>
        <div class="lovCommentMore"><div @click="slideText" :style="{ display: vdisplay_more }">read more...</div></div>
        <div class="lovCommentOption">
            <div class="lovCommentPoint" >
                <div>
                    <img @click="reactEmit" v-bind:src="require('./emoticones/'+  react + '.svg')" />
                    <span class="lovCommentPointt" @click="lsReactEmit" >{{ publication_point }}</span>
                </div>
            </div>
            <div class="lovCommentPoint" >
                <div @click="comOfComEmit" >Reply</div>
            </div>
            <div class="lovCommentProfile">
                <img src="./images/pp.jpeg">
            </div>
        </div>
    </div>
</template>
<style src="./lovComment.css">
</style>
<script src="./lovComOfCOm.js">
</script>
