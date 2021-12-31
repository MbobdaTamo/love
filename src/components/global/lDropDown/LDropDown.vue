<template>
    <div class ="lDropDown" id="drop" :style="{border:bdColor, width:maxWidth}">
        <div class="lDCurrent" @click="heightCollapse">
            <div class="lDFirstImg"><img v-bind:src="require(currentImage + '')"/></div>
            <div class="lDArrow"><img src="./images/down_arrow.svg"/></div>
        </div>
        <div class="lDCollapse" :style="{
        height:vheight,
        paddingTop:vpaddingTop ,
        paddingBottom:vpaddingBottom,
        border:bdColor,
        borderTop:'white',
        width: maxWidth
        }">
            <div v-for="(data,index) in datas" class="lDElement" :class='index' @click="selecting(index)">
               <div><img v-bind:src="require(data.image + '')"/></div>
               <div> {{ data.name }}</div>
            </div>
        </div>
    </div>
</template>
<style src="./lDropDown.css">
</style>
<script src="./lDropDown.js">
</script>
