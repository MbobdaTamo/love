<template>
    <div class ="publicationComment" :style="{display: Display}">
        <div class="pubComTitle">Comment of Comment haha
            <div class="pubComCross" @click="displaying()"><img src="./images/more.svg"/></div>
        </div>
        <div>
            <div style="display:none" class="pubComImg"><img v-bind:src= "require(publication_img + '')" /></div>
            <div class="pubComDate"><span>{{ publication_author }} |</span> {{ publication_date }}</div>
            <div class="pubComText" :style="{maxHeight:vtext_height}">{{ publication_text }} </div>
            <div class="pubComMore"><div @click="slideText" :style="{ display: vdisplay_more }">read more...</div></div>
            <div class="pubComOption">
                <div class="pubComPoint" >
                    <div>
                        <img @click="reactEmit" v-bind:src="require('./emoticones/'+  react + '.svg')" />
                        <span class="pubComPointt" @click="lsReactEmit" >{{ publication_point }}</span>
                    </div>
                </div>
                <div class="pubComPoint" >
                    <div @click="commentEmit" ><img src="./images/com.svg" />{{ publication_point }}</div>
                </div>
                <div class="pubComProfile">
                    <img src="./images/pp.jpeg">
                </div>
            </div>
        </div>
        <div class="pubComComZone">
            <div><LovComOfCom/></div>
            <div><LovComOfCom/></div>
            <div><LovComOfCom/></div>
            <div><LovComOfCom/></div>
        </div>
    </div>
</template>
<style src="./publicationComment.css">
</style>
<script src="./publicationComment.js">
</script>
