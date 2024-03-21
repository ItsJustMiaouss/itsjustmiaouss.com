<script setup lang="ts">
import { ref } from "vue"
import SocialIcon from "./components/SocialIcon.vue"
import JSConfetti from "js-confetti"

const clickCount = ref(0)

const animate = ref(false)
const animationStarted = ref(false)

const jsConfetti = new JSConfetti()

console.log("Hint: Cats have 9 lives.")

function incrementClickCount() {
  clickCount.value += 1

  if (clickCount.value >= 9) {
    startAnimation()
    clickCount.value = 0
  }
}

function startAnimation() {
  if (animationStarted.value) return

  animationStarted.value = true

  const audio = new Audio("/audio.wav")
  audio.play()

  jsConfetti.addConfetti()

  setTimeout(() => {
    animate.value = true

    jsConfetti.addConfetti({
      emojis: ["🐱", "😹", "😻", "🙀"],
      emojiSize: 40,
      confettiNumber: 30,
    })

    const loop = setInterval(() => {
      jsConfetti.addConfetti()
    }, 1800)

    // When the music ends
    setTimeout(() => {
      clearInterval(loop)
      animate.value = false
      animationStarted.value = false
    }, 62700)
  }, 4000)
}
</script>

<template>
  <div
    class="bg-background font-poppins h-screen text-white flex flex-col gap-3 px-4 py-3">
    <!-- Header -->
    <header>
      <span class="text-2xl">ItsJustMiaouss</span>
    </header>

    <!-- Body -->
    <body class="flex-grow">
      <div
        class="flex flex-col justify-center items-center align-middle m-auto h-full text-center font-sora">
        <!-- Profile picture -->
        <div>
          <img
            class="rounded-lg m-auto hover:opacity-60 duration-150"
            :class="{ 'animate-danse': animate }"
            @click="incrementClickCount"
            width="200"
            height="200"
            src="./assets/profile.png"
            alt="Profile" />

          <!-- Paw icon -->
          <i
            class="paw-icon mr-[60vw] rotate-[30deg] -mt-10 hidden sm:block"
            :class="{ 'animate-roll': animate }" />
        </div>
        <!-- Title -->
        <h1
          class="text-4xl md:text-5xl mt-4"
          :class="{ 'animate-move-right': animate }">
          ItsJustMiaouss
        </h1>
        <!-- Description -->
        <p
          class="text-gray-300 text-sm md:text-md md:text-xl font-extralight"
          :class="{ 'animate-move-left': animate }">
          I'm a passionate developer from France
          <i class="twa twa-flag-france"></i>
          !
        </p>
        <!-- Social links -->
        <div
          class="flex space-x-6 mt-2"
          :class="{ 'animate-move-left': animate }">
          <SocialIcon
            title="Discord"
            icon="fa-brands fa-discord"
            link="https://discordapp.com/users/254342535172849674" />
          <SocialIcon
            title="GitHub"
            icon="fa-brands fa-github"
            link="https://github.com/ItsJustMiaouss" />
          <SocialIcon
            title="Twitter"
            icon="fa-brands fa-twitter"
            link="https://twitter.com/ItsJustMiaouss" />
          <SocialIcon
            title="Steam"
            icon="fa-brands fa-steam"
            link="https://steamcommunity.com/id/ItsJustMiaouss" />
        </div>

        <!-- Paw icon -->
        <i
          class="paw-icon ml-[60vw] rotate-[-25deg] hidden sm:block"
          :class="{ 'animate-roll': animate }" />
      </div>
    </body>

    <!-- Footer -->
    <footer class="flex align-middle justify-center md:justify-start">
      <span class="opacity-60 font-light">
        Made with
        <i class="twa twa-heart-suit"></i>
        by ItsJustMiaouss
      </span>
    </footer>
  </div>
</template>
