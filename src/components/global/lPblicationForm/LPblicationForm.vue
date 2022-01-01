<template>
<section class="lPblicationForm" :style="{ display:Display }" >
    <div class="lPBFCTitle">Créer une publication
        <div class="lPBFCCross" @click="displaying()"><img src="./more.svg"/></div>
    </div>
    <div class="lPBFCBody">
            <div class="lPBFCType"><span>Type publication</span><div><LDropDown :datas="this.$store.state.publiTypeDatas" maxHeight="730%" maxWidth="180px" /></div></div>
            <div><textarea placeholder="Titre"></textarea> </div>
            <div><textarea placeholder="Contenu publication"></textarea></div>
            <div>
            <label class="custom-file-upload">Add image<input type="file"/><img src="./photo.svg"></label>
            </div>
            <div>Publier</div>
    </div>
</section>
</template>
<style src="./lPblicationForm.css">
</style>
<script src = "./lPblicationForm.js">
</script>
