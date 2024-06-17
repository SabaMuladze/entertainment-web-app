<template>
  <div class="w-full flex flex-col items-center h-[100vh] p-6">
    <header class="flex justify-center items-center">
      <svg
        class="mt-16"
        width="33"
        height="27"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
          fill="#FC4747"
        />
      </svg>
    </header>
    <div
      class="flex flex-col p-7 bg-cusdarkblue rounded-md gap-3 justify-center mt-12 w-full max-w-[400px] md:p-10 md:mt-20 md:gap-5"
    >
      <h2 v-if="mode == 'login'" class="text-3xl md:text-4xl">Login</h2>
      <h2 v-else class="text-3xl md:text-4xl">Sign Up</h2>

      <form
        @submit.prevent="submitForm"
        class="flex flex-col gap-3 mt-3 md:gap-5"
      >
        <div class="border-b-cusgrey border-b-[1px]">
          <input
            v-model="email"
            class="outline-none bg-transparent h-10 w-full"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <p>{{ emailError }}</p>
        <div class="border-b-cusgrey border-b-[1px]">
          <input
            v-model="password"
            class="outline-none bg-transparent h-10 w-full"
            type="password"
            placeholder="Password"
          />
        </div>
        <p>{{ passError }}</p>
        <div class="border-b-cusgrey border-b-[1px]" v-if="mode == 'signup'">
          <input
            v-model="checkpass"
            class="outline-none bg-transparent h-10 w-full"
            type="password"
            placeholder="Repeat Password"
          />
        </div>
        <button
          type="submit"
          class="bg-cusred mt-3 py-3 rounded-lg hover:bg-white hover:text-black"
        >
          <p class="hover:text-black" v-if="mode == 'login'">
            Login to your account
          </p>
          <p class="hover:text-black" v-else>Create an account</p>
        </button>
      </form>
      <p v-if="mode == 'login'" class="text-center">
        Don't have an account?
        <span @click="switchMode" class="text-cusred cursor-pointer"
          >Sign Up</span
        >
      </p>
      <p v-else class="text-center">
        Already have an account?
        <span @click="switchMode" class="text-cusred cursor-pointer"
          >Login</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "signup",
      email: "",
      password: "",
      checkpass: "",
      emailError: "",
      passError: "",
    };
  },
  methods: {
    switchMode() {
      if (this.mode == "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
    submitForm() {
      this.validateEmail();
      this.validatePass();
      if (
        this.mode == "signup" &&
        this.password == this.checkpass &&
        this.password.length >= 8
      ) {
        localStorage.setItem("email", this.email);
        localStorage.setItem("password", this.password);

        this.mode = "login";
      } else {
        if (
          this.email == localStorage.getItem("email") &&
          this.password == localStorage.getItem("password")
        ) {
          this.$router.push("/");
        }
      }
    },
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailRegex.test(this.email)) {
        this.emailError = "Invalid email address";
      } else {
        this.emailError = "";
      }
    },
    validatePass() {
      if (this.password.length < 8) {
        this.passError = "Password must be at least eight characters long";
      }
    },
  },
  mounted() {},
};
</script>
