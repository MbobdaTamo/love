<template>
<section class="lPblicationForm" :style="{ display:Display }" >
    <div class="lPBFCTitle">Créer une publication
        <div class="lPBFCCross" @click="displaying()"><img src="./more.svg"/></div>
    </div>
    <div class="lPBFCBody">
            <div class="lPBFCType"><span>Type publication</span><div><LDropDown ref='types' :datas="this.$store.state.publiTypeDatas" maxHeight="730%" maxWidth="180px" /></div></div>
            <div><textarea v-model="publiTitle" placeholder="Titre (facultatif)"></textarea> </div>
            <div><textarea v-model="publiContent" placeholder="Contenu publication"></textarea></div>
            <div>
            <label class="custom-file-upload">Add image<input ref='image' @change="preview" type="file"/><img src="./photo.svg"></label>
            <img id="lPbblah" src="#" alt="your image" />
            </div>
            <div @click='sendImage' >Publier</div>
    </div>
</section>
</template>
<style src="./lPblicationForm.css">
</style>
<script src = "./lPblicationForm.js">
</script>
