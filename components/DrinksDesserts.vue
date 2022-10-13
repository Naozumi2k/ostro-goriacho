<template>
  <section class="text-gray-600">
    <div class="container pt-10 mx-auto">
      <div class="flex flex-wrap">
        <div class="grow bg-ribbon"></div>
        <div class="grow">
          <div
            class="sm:my-0 my-3 lg:text-5xl text-4xl text-center text-og font-medium uppercase drop-shadow-md"
          >
            WOW напитки и десерты<br />
            из мороженого
          </div>
        </div>
        <div class="grow bg-ribbon"></div>
      </div>
      <div
        class="mt-7 mb-14 lg:text-2xl text-xl text-center text-black font-normal uppercase drop-shadow-md"
      >
        Самый маржинальный продукт летнего ассортимента
      </div>
      <div class="mx-7 flex flex-wrap justify-center md:space-y-0 space-y-10">
        <div class="flex px-4 md:w-1/3 w-full">
          <div class="grow">
            <div
              class="flex justify-center items-center mx-auto w-48 h-48 border-2 border-og rounded-full"
            >
              <Drink />
            </div>
            <div class="w-0.5 h-6 mx-auto bg-og" />
            <div class="bg-og shadow py-2 text-center">
              <span class="text-lg font-bold uppercase drop-shadow"
                >20 видов лимонада</span
              >
            </div>
            <p class="mt-1 text-sm text-justify">Яркие, вкусные, ледяные.</p>
            <div class="mt-1 bg-og shadow py-2 text-center">
              <span class="text-lg font-bold uppercase drop-shadow"
                >10 видов напитков</span
              >
            </div>
            <p class="mt-1 text-sm text-justify">
              На основе кофе холодных или горячих.
            </p>
          </div>
        </div>
        <div class="flex px-4 md:w-1/3 w-full">
          <div class="grow">
            <div
              class="flex justify-center items-center mx-auto w-48 h-48 border-2 border-og rounded-full"
            >
              <IceCream />
            </div>
            <div class="w-0.5 h-6 mx-auto bg-og" />
            <div class="bg-og shadow py-2 text-center">
              <span class="text-lg font-bold uppercase drop-shadow"
                >3 вида мороженого</span
              >
            </div>
            <p class="mt-1 text-sm text-justify">
              Сливочное шоколадное клубничное и двойные сочетания.
            </p>
          </div>
        </div>
        <div class="flex px-4 md:w-1/3 w-full">
          <div class="grow">
            <div
              class="flex justify-center items-center mx-auto w-48 h-48 border-2 border-og rounded-full"
            >
              <Cocktail />
            </div>
            <div class="w-0.5 h-6 mx-auto bg-og" />
            <div class="bg-og shadow py-2 text-center">
              <span class="text-lg font-bold uppercase drop-shadow"
                >Молочные коктейли</span
              >
            </div>
            <p class="mt-1 text-sm text-justify">
              На основе мягкого мороженого и сухой смеси на молоке с добавлением
              натуральных замороженных фруктов и пюре.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative mt-12">
      <div
        class="md:absolute md:top-7 md:left-1/4 md:mb-0 mb-4 md:text-white text-center text-xs font-light uppercase drop-shadow-md"
      >
        Со всем ассортиментом справится любой даже не имеющий опыта
      </div>
      <svg viewBox="0 0 1920 122" class="fill-ribbon">
        <path
          d="M5.76991e-06 11L5.7699e-06 132L1920 132L1920 33.9999L1687.5 19.0001L1435.5 22.9999L955 1.92908e-05L481.5 22.9999L5.76991e-06 11Z"
          fill="#FF2D32"
        />
      </svg>
    </div>
  </section>
</template>

<script>
import Drink from '@/assets/svg/drink.svg?inline'
import IceCream from '@/assets/svg/icecream.svg?inline'
import Cocktail from '@/assets/svg/cocktail.svg?inline'

export default {
  name: 'DrinksDesserts',
  components: {
    Drink,
    IceCream,
    Cocktail,
  },
}
</script>

<style></style>
