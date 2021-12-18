<template>
    <div class ="listReactor" :style="{display:Display}">
        <div class="lrHeader">
            <div><span>Total 1K</span></div>
            <div><img src="./images/heart.svg"/><span>20</span></div>
            <div><img src="./images/laughing.svg"/><span>150</span></div>
            <div><img src="./images/impressed.svg"/><span>10</span></div>
            <div><img src="./images/like.svg"/><span>100</span></div>
            <div><img src="./images/handshake.svg"/><span>10</span></div>
            <div><img src="./images/sad.svg"/><span>10</span></div>
            <div><img src="./images/sick.svg"/><span>5</span></div>
            <div><img src="./images/angry.svg"/><span>-15</span></div>
        </div>
        <div  v-for="data in datas" class="lrElement">
            <div class="lrProfile"><img v-bind:src= "require(data.profile + '')" /></div>
            <div class="lrName"> {{ data.name }}</div>
            <div class="lrReaction"><img v-bind:src= "require('./images/'+data.emoji + '.svg')" /></div>
            <div class="lrPoint">12</div>
        </div>
    </div>
</template>
<style src="./listReactor.css">
</style>
<script src="./listReactor.js">
</script>
