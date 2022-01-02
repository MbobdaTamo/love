<template>
    <div class="lNavBar">
      <div class="lnavWhite">
        <div class="lnavSign">
          <div><span>taime</span> 7parsKeJe</div>
          <div><span>fait</span> keglejuste</div>
          <div><span>fait</span> toutceciest </div>
        </div>
        <div>
          <div class="navBellN"><BellNotification/></div>
          <div class="navlDropDown"><LDropDown :datas="this.$store.state.langDatas" bdColor="solid 1px rgb(36, 39, 41)" maxHeight="330%" style="font-size:12px" /></div>
          <div><img src="./profile_black.svg"/>Log in</div>
        </div>
      </div>
      <div class="navCollapse">
        <div class="navLeftElment">
          <div><ButtonA1 message="Videos"/></div>
          <div><ButtonA11 message="News"/></div>
          <div><ButtonA12 message="Statistics"/></div>
          <div><ButtonA13 message="Photos"/></div>
        </div>
        <div class="navLogo"><img/></div>
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
            <div><img src="./serenalog.png"/></div>
        </div>
        <div class="navBar2right">
          <div class="navLang">
            <div class="navLangDrop2"></div>
            <BellNotification/>
          </div>
          <div class="navProfile">
          </div>
        </div>
      </div>
      <div class="navDropDown" :style="{height:vheight, paddingTop:ptop}">
        <div><div class=navDt><LDropDown :datas="this.$store.state.langDatas" style="color:rgb(40,40,40); font-size:12px" maxHeight="330%"/></div><div><img src="./next.svg"/></div></div>
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
