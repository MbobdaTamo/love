<template>
    <div class ="lPublication">
        <div class="lPImg" v-if="react!=null"><img /></div>
        <div class="lPDate"><span> {{ publication_author }} |</span> {{ publication_date }}</div>
        <div id="lPText" class="lPText" :style="{maxHeight:vtext_height}"> {{ publication_text }} </div>
        <div class="lPMore"><div @click="slideText" :style="{ transform:vplus_transform,display:vdisplay_more}"></div></div>
        <div class="lPOption">
            <div class="lPPoint" >
                <div>
                    <img @click="reactionMenu" v-bind:src="require('./lReaction/images/'+  react + '.svg')" />
                    <span class="lPPointt" @click="lrMenu">{{ publication_point }}</span>
                </div>
            </div>
            <div class="lPPoint" >
                <div><img src="./images/com.svg" />{{ publication_point }}</div>
            </div>
            <div class="lPProfile">
                <img src="./images/pp.jpeg">
            </div>
        </div>
        <LReaction  :Display='vreaction'
                    @heartClick='(react=$event)'
                    @laughingClick='(react=$event)'
                    @impressedClick='(react=$event)'
                    @likeClick='(react=$event)'
                    @handshakeClick='(react=$event)'
                    @sadClick='(react=$event)'
                    @sickClick='(react=$event)'
                    @angryClick='(react=$event)'
         />
         <ListReactor :Display='vreactor'/>
    </div>
</template>
<style src="./lPublication.css">
</style>
<script src="./lPublication.js">
</script>
