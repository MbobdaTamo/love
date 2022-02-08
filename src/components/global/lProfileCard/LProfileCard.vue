<template>
    <div class ="lProfileCard">
        <div class ="lpcHeader">
            <div class ="lpcType">{{ type.toUpperCase() }}</div>
            <div class ="lpcFlag"><span>&#127481;&#127468;</span></div>
            <div></div>
            <div class ="lpcInfo">
                <div class ="lpcProfile"><img src="./profile.svg"/></div>
                <div class ="lpcProfileShadow"></div>
            </div>
            <div class="lpcTitle">
                <div class="lpcName">{{ name }}</div>
                <div><span class="lpcTotal">TOTAL</span><span>{{ totalPoint }}</span></div>
            </div>
        </div>
        <div v-for="(data, index) in datas" class="lpcElements">
            <div class="lpcElement" :style="{backgroundColor:bgColor(index), color:textColor(index)}">
                <div class="lpcRanking">{{ index+1 }}</div>
                <div><img v-bind:src="require('@/assets/publiType/'+ data.type +'.svg')"/></div>
                <div>{{data.type}}</div>
                <div>{{ data.total }}</div>
            </div>
        </div>
        <div class="lpcMore">
            SEE MORE ABOUT HIM
        </div>
    </div>
</template>
<style src="./lProfileCard.css">
</style>
<script src="./lProfileCard.js">
</script>
