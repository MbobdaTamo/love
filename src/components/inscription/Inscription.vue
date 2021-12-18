<template>
<section class="inscription">
    <header>
        <img src="@/assets/bix_logo.jpg"/>
    </header>
    <div class="main">
        <form class = "main_section">
            <div class = "title">
                <span>Sign up for your account</span>
            </div>
            <div class ="input">
                <InputI0 placeholder="Enter email" type = "email"/>
            </div>
            <div>
                <span class ="policy">By signing up, you confirm that you've read and accepted our <span>Terms of Service</span> and <span>Privacy Policy</span>. </span>
            </div>
            <div><ButtonI0 message = "continue" /></div>
            <div class = "OR">
                <span class ="policy">OR</span>
            </div>
            <div class = "with">
                <div class = "with_child1" ><ButtonI1 img_src = "./image/google_logo.svg" message = "continue with Google" /></div>
                <div class = "with_child2" ><ButtonI1 img_src = "./image/microsoft_logo.svg" message = "continue with Microsoft" /></div>
                <div class = "with_child3" ><ButtonI1 img_src = "./image/apple_black_logo.svg" message = "continue with Apple" /></div>
                <div class = "with_child4" ><ButtonI1 img_src = "./image/slack_new_logo.svg" message = "continue with Slack" /></div>
            </div>
            <div class="last">
                <a>Already have an account? Log In</a>
            </div>
        </form>
        <section class = "site_lang">
            <DropDownList/>
        </section>
    </div>
    <FooterI/>
</section>
</template>
<style src="./inscription.css">
</style>
<script src = "./inscription.js">
</script>
