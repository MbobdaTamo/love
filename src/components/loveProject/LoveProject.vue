<template>
<section class="main">
        <LNavBar style="z-index:3"/>
        <LPublication1 publication_type="Datascience"/>
        <div class="publish">
                <div class="lraMore">
                        PUBLIER UN ARTICLE
                </div>
        </div>
        <h2>News</h2>
        <div class="pubClass" style="z-index:1">
                <div class="publications">
                        <div><LPublication publication_type="Football"/></div>
                        <div><LPublication publication_type="Tenis"/></div>
                </div>
                <div class="sliderClass">
                        <div class="seeAll">SEE ALL NEWS</div>
                        <Slider tsRotate="rotate(180deg)" vopacity="0.5" style="margin-right:1px" /><Slider/>
                </div>
                <div class="secondZone">
                        <div class="secondFirst">
                                <div class="secondVoid"></div>
                                <div><BestStat/></div>
                        </div>
                        <div><LRanking/><img src="./card.png"/></div>
                </div>
        </div>
        <div class="prefooter1">
        </div>
        <div class="prefooter2">
        </div>
        <LFooter/>
</section>
</template>
<style src="./loveProject.css">
</style>
<script src = "./loveProject.js">
</script>
