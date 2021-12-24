<template>
<section draggable="false" class="bellNotification">
    <div class = "notification">
    <div class = "notBtn" href = "#">
        <!--Number supports double digets and automaticly hides itself when there is nothing between divs -->
        <div class="BNbell">
            <div class = "number"><span>2</span></div>
            <img class="fas fa-bell" style="width:25px" src="./bell.svg"/>
        </div>
        <div class = "box">
            <div class = "display">
            <div class = "nothing">
                <i class="fas fa-child stick"></i>
                <div class = "cent">Looks Like your all caught up!</div>
            </div>
            <div class = "cont"><!-- Fold this div and try deleting evrything inbetween -->
                <div class = "sec new">
                    <a href = "#">
                    <div class = "profCont">
                    <img class = "profile" src = "https://c1.staticflickr.com/5/4007/4626436851_5629a97f30_b.jpg">
                    </div>
                    <div class = "txt">James liked your post: "Pure css notification box"</div>
                    <div class = "txt sub">11/7 - 2:30 pm</div>
                    </a>
                </div>
                <div class = "sec new">
                    <a href = "#">
                    <div class = "profCont">
                    <img class = "profile" src = "https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_medium_photo/public/person-photo/amanda_lucidon22.jpg?itok=JFPi8OFJ">
                        </div>
                    <div class = "txt">Annita liked your post: "Pure css notification box"</div>
                    <div class = "txt sub">11/7 - 2:13 pm</div>
                    </a>
                </div>
                <div class = "sec">
                <a href = "#">
                <div class = "profCont">
                <img class = "profile" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3O45RK9qyCrZJivYsY6PmeVEJH07l7bkoolJmscBsNjzump27">
                    </div>
                <div class = "txt">Brie liked your post: "Pure css notification box"</div>
                <div class = "txt sub">11/6 - 9:35 pm</div>
                </a>
                </div>
            </div>
            </div>
        </div>
    </div>
        </a>
    </div>

</section>
</template>
<style src="./bellNotification.css">
</style>
<script src = "./bellNotification.js">
</script>
