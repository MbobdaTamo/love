<template>
<div class="publiList">
    <LNavBar style="z-index:3"/>
    <ListReactor style="z-index:3" />
    <LReaction style="z-index:3" />
    <div class="pBLTitle"> Publications</div>
    <div class="pBLSelection1" style="z-index:0">
        <div>
            <LDropDown :datas='this.$store.state.sortCommentDatas'
            maxHeight = '950%'
            maxWidth  = '200px'
            />
        </div>
    </div>
    <div class="pBLSelection2">
        <div>Latest</div>
        <div>Most Commented</div>
        <div>Funniest</div>
        <div>Last 3 month</div>
    </div>
    <div class="pBLPublication" style="z-index:0">
        <div><LPublication ref='lp1' reference='lp1' :id='publicationIndexes[0]' /></div>
        <div><LPublication ref='lp2' reference='lp2' :id='publicationIndexes[1]' /></div>
        <div><LPublication ref='lp3' reference='lp3' :id='publicationIndexes[2]' /></div>
        <div><LPublication ref='lp4' reference='lp4' :id='publicationIndexes[3]' /></div>
        <div><LPagination/></div>
    </div>
    <LFooter/>
</div>
</template>
<style src="./publiList.css">
</style>
<script src = "./publiList.js">
</script>
