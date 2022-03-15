<template>
<section class="lPblicationForm" :style="{ display:Display }" >
    <div class="lPBFCTitle">Update profile
        <div class="lPBFCCross" @click="displaying()"><img src="./more.svg"/></div>
    </div>
    <div class="lPBFCBody">
            <div class="lPBFCType"></div>
            <div>Description</div>
            <div><textarea v-model="description" placeholder="Votre description (aucunes modifications) "></textarea></div>
            <div class ="upFImage"> Mettre à jour Photo de profile {{ noModif['profile'] }}
            <label class="custom-file-upload"><input ref='profile' @change="preview('profile')" type="file"/><img src="./photo.svg"></label>
            <img id="upFprofile" />
            </div>
            <div class ="upFImage"> Mettre à jour Photo de couverture {{ noModif['cover'] }}
            <label class="custom-file-upload"><input ref='cover' @change="preview('cover')" type="file"/><img src="./photo.svg"></label>
            <img id="upFcover" />
            </div>
            <div class="upFSend" @click="sendImage('profile')" >Publier</div>
            <div class="upFSend" @click='cancel' >Annuler</div>
    </div>
</section>
</template>
<style src="./updatePubForm.css">
</style>
<script src = "./updatePubForm.js">
</script>
