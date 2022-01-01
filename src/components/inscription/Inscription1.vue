<template>
<section class="inscription">
    <header>
        <img src="@/assets/bix_logo.jpg"/>
    </header>
    <div class="insMain">
        <form class = "insMainSection" @submit="submiting" action="#">
            <div class = "insTitle">
                <span>Sign up for your account</span>
            </div>
            <div class ="insInput">
                <InputI0 placeholder="Age" type = "number"/>
            </div>
            <div class ="insInput">
                <InputI0 placeholder="Choose your country" type = "country"/>
            </div>
            <div class ="insInput">
                <InputI0 placeholder="Enter your pseudo (facultative)" type = "password"/>
            </div>
            <div class="insLaw">
                <span class ="insPolicy">By signing up, you confirm that you've read and accepted our <span>Terms of Service</span> and <span>Privacy Policy</span>. </span>
            </div>
            <div><ButtonI0 message = "next" /></div>
            <div><ButtonI0 message = "previous" style="margin-top:10px"/></div>
            <div class = "insOR">
                <span class ="insPolicy">OR</span>
            </div>
            <div class="insLast">
                <a>Already have an account? Log In</a>
            </div>
        </form>
        <section class = "insSiteLang">
            <DropDownList/>
        </section>
    </div>
    <FooterI/>
</section>
</template>
<style src="./inscription.css">
</style>
<script src = "./inscription1.js">
</script>
