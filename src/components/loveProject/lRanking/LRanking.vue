<template>
    <div class ="lRanking">
        <div class ="lraHeader">
            <div class="lraHeaderH">STANDING</div>
            <div class="lraOption">
                <div class="lraTotal">TOTAL</div>
                <div><img src='./loupe.svg'/></div>
                <div>MORE</div>
            </div>
            <div id="lraInfo" class="lraElement">
                <div class="lraRanking">P.</div>
                <div><img/></div>
                <div id="lraInfoName">NAME</div>
                <div id="lraInfoPoint">PTS</div>
                <div>PLS</div>
            </div>
        </div>
        <div v-for="(data, index) in datas" class="lraElements">
            <div class="lraElement" :style="{backgroundColor:bgColor(index), borderColor:bdColor(index)}">
                <div class="lraRanking">{{ index+1 }}</div>
                <div><img src='./profile.svg'/></div>
                <div>Name Field</div>
                <div>30</div>
                <div>60</div>
            </div>
        </div>
        <div class="lraMore">
            SEE THE COMPLETE STANDING
        </div>
    </div>
</template>
<style src="./lRanking.css">
</style>
<script src="./lRanking.js">
</script>
