<template>
    <div class ="publication">
        <LNavBar style="z-index:1" />
        <ListReactor style="z-index:3" />
        <PublicationComment ref="pubCom" reference='pubCom' style="z-index:3" />
        <ListReactorCom style="z-index:3" />
        <LReaction style="z-index:3" />
        <div class ="pBody" style="z-index:0" >
            <div class="pInfo">
                <div class="pImage"><img src="./images/Ez Abde dribbling.jpg"></div>
                <div class="pTitle">{{ publication_title }}</div>
                <div class="pText">{{ publication_text }}</div>
                <div class="pAuthor">
                    <div class="pBy">Fait par</div>
                    <div>
                        <div class="pNameZone">
                            <div class="pAthName">{{ publication_author }}</div>
                            <div class="pDate">{{ publication_date }}</div>
                        </div>
                        <div class="pProfile"><img src="./images/Ez Abde.jpeg"/></div>
                    </div>
                </div>
            </div>
            <div class="pStats">
                <div class="pStatsFirst">
                    <div class="pReactLogo">
                        <div @click="reactEmit">
                            <img v-bind:src="require('./emoticones/'+  react + '.svg')"/>
                            <PReaction ref='pReaction' reference='pReaction'/>
                        </div>
                        <span @click="lsReactEmit">{{publication_point}}</span>
                    </div>
                    <div> {{publi_numb_com}} commentaires</div>
                </div>
                <div>
                    <div @click="reactEmit"><div><img src="./images/emoji.svg"/></div>Reagir</div>
                    <div @click="commenterPubEmit"><div><img src="./images/com.svg"/></div>commenter</div>
                </div>
                <div>
                    <div class="debateWinner">
                        <div class="debateWinnerImage"><img src="./images/Ez Abde.jpeg"/></div>
                        <div>100</div>
                        <div><img src="./images/gold_medal.svg"/></div>
                    </div>
                </div>
            </div>
            <div class ="pCom">
                <div class="pSort">Sort by <div>
                        <LDropDown
                            style="z-index:2" :datas='this.$store.state.sortCommentDatas'
                            maxHeight = '950%'
                            maxWidth  = '200px'
                        />
                        </div>
                </div>
                <div class="pCommentZone">
                    <LovComment ref="lp1" reference='lp1' :id='publicationIndexes[0]' />
                    <LovComment ref="lp2" reference='lp2' :id='publicationIndexes[1]' />
                    <LovComment ref="lp3" reference='lp3' :id='publicationIndexes[2]'/>
                    <LovComment ref="lp4" reference='lp4' :id='publicationIndexes[3]'/>
                    <PubPagination/>
                </div>
            </div>
            <div>
                <PComment/>
            </div>
        </div>
        <LFooter/>
    </div>
</template>
<style src="./publication.css">
</style>
<script src="./publication.js">
</script>
