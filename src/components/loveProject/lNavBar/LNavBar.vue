<template>
    <div class="lNavBar">
      <div class="lnavWhite">
        <div class="lnavSign"><div>Sign Up</div></div>
        <div><LDropDown/></div>
        <div><img src="./profile_black.svg"/>Log in</div>
      </div>
      <div class="navCollapse">
        <div class="navLeftElment">
          <div><ButtonA1 message="Videos"/></div>
          <div><ButtonA11 message="News"/></div>
          <div><ButtonA12 message="Statistics"/></div>
          <div><ButtonA13 message="Photos"/></div>
        </div>
        <div class="navLogo"><img src=""/></div>
       <div class="navR">
          <div><ButtonA1 message="Videos"/></div>
          <div><ButtonA11 message="News"/></div>
          <div><ButtonA12 message="Statistics"/></div>
          <div><ButtonA13 message="Photos"/></div>
        </div>
      </div>
      <div class="navRemains">
        <div class="navMenuButton">
          <MenuButton @click="cross" />
        </div>
        <div class="navLogo2">
            <div><img src="./logo.png"/></div>
        </div>
        <div class="navBar2right">
          <div class="navLang">
            <LDropDown/>
          </div>
          <div class="navProfile">
          </div>
        </div>
      </div>
      <div class="navDropDown" :style="{height:vheight, paddingTop:ptop}">
        <div><div class=navDt>Video</div><div><img src="./next.svg"/></div></div>
        <div><div class=navDt>News</div><div><img src="./next.svg"/></div></div>
        <div><div class=navDt>Statistics</div><div><img src="./next.svg"/></div></div>
        <div><div class=navDt>Photo Galleries</div><div><img src="./next.svg"/></div></div>
      </div>
    </div>
</template>
<style src="./lNavBar.css">
</style>
<script src = "./lNavBar.js">
</script>
