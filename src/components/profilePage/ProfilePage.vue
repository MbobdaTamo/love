<template>
    <div class ="profilePage">
        <LNavBar style="z-index:1"/>
        <div class ="pPageHeader">
            <div class ="pPagePhoto">
                <img src ="./images/dembouz.jpg">
            </div>
            <div>
                <div class="pPageName">EL TAMO MBOBDA</div>
                <div><div>Surname</div><span>Eric Arnaud</span></div>
                <div><div>Age</div><span>60 ans</span></div>
                <div><div>pays</div><span>Cameroun</span></div>
                <div><div>Surname</div><span>Eric Arnaud</span></div>
            </div>
        </div>
        <div>
            <div class="pPageProfile">
                <img src="./images/dembouz.jpg"/>
            </div>
            <div>
                C'est juste un petit texte qui est censé décrire le possesseur du compte. donc, il peut etre grand ou court mais néamoins je compte imposer une limite
            </div>
        </div>
        <div class="pPageStats">
            <div class="pPageDropDown"><LDropDown style="background-color:white" /></div>
            <div>
                <span class="pPageFieldName">FIELD NAME</span>
                <span>TOTAL POINT</span>
                <span>PUBLISHED</span>
                <span>POINT PER PUBLICATION </span>
            </div>
            <div v-for="(field, index) in datas" class="pPageElementField" :style="{backgroundColor:fieldBgColor(index)}">
                <div class="pPageElementChild1">
                    <div> {{ index +1 }} </div>
                    <div class="lrProfile"><img v-bind:src= "require(field.logo + '')" /></div>
                    <div> {{ field.name }}</div>
                </div>
                <span>{{ field.totalPoint }}</span>
                <span>{{ field.published }}</span>
                <span>{{ field.pointPerPublication }}</span>
            </div>
        </div>
        <div class="pPagePublication">
            <div class="pPagePbTitle">
                Publications de EL TAMO MBOBDA
            </div>
            <div>
                <LDropDown/>
            </div>
            <div>
                <LPublication publication_type="GAME" />
                <LPublication publication_type="GAME" />
                <LPublication publication_type="GAME" />
                <LPublication publication_type="GAME" />
            </div>
        </div>
        <LFooter/>
    </div>
</template>
<script src="./profilePage.js">
</script>
<style src="./profilePage.css">
</style>
