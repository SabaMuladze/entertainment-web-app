<template>
  <div class="flex flex-col  items-center h-[100vh] p-6">
    <header class="flex justify-center items-center">
      <svg class="mt-16" width="33" height="27" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
          fill="#FC4747"
        />
      </svg>
    </header>
    <div class="flex flex-col p-7 bg-cusdarkblue rounded-md gap-3 justify-center mt-12 w-full  md:max-w-[400px] md:p-10 md:mt-20 md:gap-5">
        <h2 v-if="mode == 'login'" class="text-3xl md:text-4xl">Login</h2>
        <h2 v-else class="text-3xl md:text-4xl">Sign Up</h2>

        <form @submit.prevent="" class="flex flex-col gap-3 mt-3 md:gap-5">
            <div class=" border-b-cusgrey border-b-[1px]">
                <input class=" outline-none bg-transparent h-10 w-full" type="email" placeholder="Email Address">
            </div>
            <div class=" border-b-cusgrey border-b-[1px]">
                <input class=" outline-none bg-transparent h-10 w-full" type="password" placeholder="Password">
            </div>
            <div class=" border-b-cusgrey border-b-[1px]" v-if=" mode == 'signup'">
                <input class=" outline-none bg-transparent h-10 w-full" type="password" placeholder="Repeat Password">
            </div>
            <button class="bg-cusred mt-3 py-3 rounded-lg hover:bg-white hover:text-black">Login to your account</button>
        </form>
        <p v-if="mode == 'login'" class="text-center">Don't have an account? <span @click="switchMode" class="text-cusred cursor-pointer">Sign Up</span></p>
        <p v-else class="text-center">Already have an account? <span @click="switchMode" class="text-cusred cursor-pointer">Login</span></p>

    </div>
  </div>
</template>

<script>
export default{
    data() {
        return {
            mode:'login',
            email:'',
            password:'',
        }
    },
    methods:{
        switchMode(){
            if(this.mode == 'login'){
                this.mode = 'signup'
            }
            else{
                this.mode = 'login'
            }
        }
    }
}
</script>
