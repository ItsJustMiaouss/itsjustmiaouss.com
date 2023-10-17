<script setup>
import SocialIcon from "./components/SocialIcon.vue"
</script>

<template>
  <div
    class="bg-[#191B1D] font-poppins h-screen text-white flex flex-col gap-3 px-4 py-3">
    <!-- Header -->
    <header>
      <span class="text-2xl">ItsJustMiaouss</span>
    </header>

    <!-- Body -->
    <body class="flex-grow">
      <div
        class="flex flex-col justify-center items-center align-middle m-auto h-full text-center font-sora">
        <!-- Profile picture -->
        <img
          class="rounded-lg"
          width="200"
          height="200"
          src="./assets/profile.png"
          alt="Profile" />
        <!-- Title -->
        <h1 class="text-4xl md:text-5xl mt-4">ItsJustMiaouss</h1>
        <!-- Description -->
        <p class="text-gray-300 text-sm md:text-md md:text-xl font-extralight">
          I'm a passionate developer from France
          <i class="twa twa-flag-france"></i>
          !
        </p>
        <!-- Social links -->
        <div class="flex space-x-6 mt-2">
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
