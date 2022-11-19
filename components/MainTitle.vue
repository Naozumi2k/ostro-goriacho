<template>
  <section class="bg-red-500 text-gray-600">
    <div class="mx-auto">
      <div class="md:pt-10 pt-5 flex justify-center">
        <div
          class="text-og lg:text-8xl md:text-7xl text-4xl font-bold uppercase select-none drop-shadow-lg"
        >
          <div class="inline -mr-[2%] font-['Baron_Neue']">O</div>
          <div class="inline tracking-wider">строГоряч</div>
          <div class="inline -ml-[2%] font-['Baron_Neue']">O</div>
        </div>
      </div>
      <div
        class="mt-7 flex flex-wrap items-center justify-center md:space-y-0 space-y-3"
      >
        <div class="md:pl-7 md:w-1/3">
          <div class="text-white lg:text-2xl text-xl uppercase drop-shadow-lg">
            <div class="font-bold">Франшиза</div>
            <div class="font-light">Сети ресторанов</div>
            <div class="font-light">Быстрого питания</div>
            <div class="font-bold">
              Формата
              <div class="inline text-yellow-300">To Go</div>
            </div>

            <Pepper class="md:mt-5 mt-2 md:h-14 h-8 drop-shadow-lg" />
            <button
              class="md:mt-5 mt-2 bg-og px-3 py-2 text-gray-600 font-normal rounded-md drop-shadow-lg"
              @click="$emit('show')"
            >
              Связаться с нами
            </button>
          </div>
        </div>
        <div class="md:w-2/3 w-full">
          <Burger />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Burger from '@/assets/svg/burger.svg?inline'
import Pepper from '@/assets/svg/pepper.svg?inline'

export default {
  name: 'MainTitle',
  components: {
    Burger,
    Pepper,
  },
}
</script>

<style scoped></style>
