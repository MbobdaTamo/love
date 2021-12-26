<template>
<section class="publiList">
    <LNavBar style="z-index:1"/>
    <div class="pBLTitle"> Publications</div>
    <div class="pBLSelection1" style="z-index:0">
        <div> <LDropDown/> </div>
        <div> <LDropDown/> </div>
        <div> <LDropDown/> </div>
    </div>
    <div class="pBLSelection2">
        <div>Latest</div>
        <div>Most Commented</div>
        <div>Funniest</div>
        <div>Last 3 month</div>
    </div>
    <div class="pBLPublication" style="z-index:0">
        <div><LPublication publication_type="Computer science"/></div>
        <div><LPublication publication_type="Computer science"/></div>
        <div><LPublication publication_type="Computer science"/></div>
        <div><LPublication publication_type="Computer science"/></div>
    </div>
    <LFooter/>
</section>
</template>
<style src="./publiList.css">
</style>
<script src = "./publiList.js">
</script>
