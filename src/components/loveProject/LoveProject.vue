<template>
<section class="main">
        <LNavBar style="z-index:3"/>
        <ListReactor style="z-index:3" />
        <LReaction style="z-index:3" />
        <LPblicationForm style="z-index:3;" ref='publiForm'/>
        <LPublication1 publication_type="FOOTBALL"/>
        <div class="publish">
                <div @click="publiFormDisplaying">
                        <span>PUBLIER UN ARTICLE</span>
                </div>
        </div>
        <h2>News</h2>
        <div class="pubClass" style="z-index:1">
                <div class="publications">
                        <div><LPublication ref='lp1' reference='lp1' publication_type="Football"/></div>
                        <div><LPublication ref='lp2' reference='lp2' publication_type="Tenis" /></div>
                        <div><LPublication ref='lp3' reference='lp3' publication_type="Tenis"/></div>
                        <div><LPublication ref='lp4' reference='lp4' publication_type="Tenis"/></div>
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
                        <div><LRanking/></div>
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
