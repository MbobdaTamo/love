<template>
    <div class ="lProfileCard">
        <div class ="lpcHeader">
            <div class ="lpcType">FOOTBALL</div>
            <div class ="lpcFlag"><span>&#127481;&#127468;</span></div>
            <div></div>
            <div class ="lpcInfo">
                <div class ="lpcProfile"><img src="./profile.svg"/></div>
                <div class ="lpcProfileShadow"></div>
            </div>
            <div class="lpcTitle">
                <div class="lpcName">TAMO</div>
                <div><span class="lpcTotal">TOTAL</span><span> 1000</span></div>
            </div>
        </div>
        <div v-for="(data, index) in datas" class="lpcElements">
            <div class="lpcElement" :style="{backgroundColor:bgColor(index)}">
                <div class="lpcRanking">{{ index+1 }}</div>
                <div><img src='./profile.svg'/></div>
                <div>Eric Arnaud</div>
                <div>30</div>
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
