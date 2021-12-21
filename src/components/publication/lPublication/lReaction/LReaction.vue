<template>
    <div class ="lReaction" :style="{display:Display}">
        <div class ="lREmoji" @click="$emit('heartClick','heart')"><img src="./images/heart.svg"/><div class="lREPoint">20</div></div>
        <div class ="lREmoji" @click="$emit('laughingClick','laughing')" ><img src="./images/laughing.svg"/><div class="lREPoint">15</div></div>
        <div class ="lREmoji" @click="$emit('impressedClick','impressed')"><img src="./images/impressed.svg"/><div class="lREPoint">10</div></div>
        <div class ="lREmoji" @click="$emit('likeClick','like')"><img src="./images/like.svg"/><div class="lREPoint">5</div></div>
        <div class ="lREmoji" @click="$emit('handshakeClick','handshake')"><img src="./images/handshake.svg"/><div class="lREPoint">0</div></div>
        <div class ="lREmoji" @click="$emit('sadClick','sad')"><img src="./images/sad.svg"/><div class="lREPoint">-5</div></div>
        <div class ="lREmoji" @click="$emit('sickClick','sick')"><img src="./images/sick.svg"/><div class="lREPoint">10</div></div>
        <div class ="lREmoji" @click="$emit('angryClick','angry')"><img src="./images/angry.svg"/><div class="lREPoint">20</div></div>
    </div>
</template>s
<style src="./lReaction.css">
</style>
<script src="./lReaction.js">
</script>
