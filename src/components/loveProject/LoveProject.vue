<template>
<section class="main">
        <LNavBar style="z-index:3"/>
        <LPublication1 publication_type="Datascience"/>
        <div class="pubClass" style="z-index:1">
                <div class="publications">
                        <div><LPublication publication_type="Football"/></div>
                        <div><LPublication publication_type="Tenis"/></div>
                        <div><LPublication publication_type="Basket"/></div>
                        <div><LPublication publication_type="i love sex"/></div>
                </div>
                <div class="sliderClass">
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
        <footer>
                <div>Legal notice</div>
                <div>Legal notice</div>
                <div>Legal notice</div>
                <div>Legal notice</div>
                <div>Legal notice</div>
                <div>Legal notice</div>
        </footer>
</section>
</template>
<style src="./loveProject.css">
</style>
<script src = "./loveProject.js">
</script>
