<template>
  <section class="text-gray-600">
    <div class="container pt-10 mx-auto">
      <div class="flex flex-wrap">
        <div class="grow bg-ribbon"></div>
        <div class="grow">
          <div
            class="sm:my-0 my-3 lg:text-5xl text-4xl text-center text-og font-medium uppercase drop-shadow-md"
          >
            WOW Продукт
          </div>
        </div>
        <div class="grow bg-ribbon"></div>
      </div>
      <div
        class="mt-5 mb-16 lg:text-2xl text-xl text-center text-black font-normal uppercase drop-shadow-md"
      >
        Золотистая острая курочка в хрустящей фирменной панировке
      </div>
      <div class="mx-7 flex flex-wrap justify-center md:space-y-0 space-y-10">
        <div class="flex px-4 md:w-1/3 w-full">
          <div class="grow">
            <div
              class="flex justify-center items-center mx-auto w-48 h-48 border-2 border-og rounded-full"
            >
              <Burger />
            </div>
            <div class="w-0.5 h-6 mx-auto bg-og" />
            <div class="bg-og py-2 text-center rounded-md">
              <span class="text-lg font-bold uppercase drop-shadow"
                >20 видов бургеров</span
              >
            </div>
            <p class="mt-1 text-md text-justify drop-shadow-sm">
              Легкая рецептура, маленькие, средние, большие.
            </p>
          </div>
        </div>
        <div class="flex px-4 md:w-1/3 w-full center">
          <div class="grow">
            <div
              class="flex justify-center items-center mx-auto w-48 h-48 border-2 border-og rounded-full"
            >
              <Shawarma />
            </div>
            <div class="w-0.5 h-6 mx-auto bg-og" />
            <div class="bg-og py-2 text-center rounded-md">
              <span class="text-lg font-bold uppercase drop-shadow"
                >20 видов шавермы и твистеров</span
              >
            </div>
            <p class="mt-1 text-md text-justify drop-shadow-sm">
              Самый популярный продукт в ассортименте.
            </p>
          </div>
        </div>
        <div class="flex px-4 md:w-1/3 w-full">
          <div class="grow">
            <div
              class="flex justify-center items-center mx-auto w-48 h-48 border-2 border-og rounded-full"
            >
              <Panini />
            </div>
            <div class="w-0.5 h-6 mx-auto bg-og" />
            <div class="bg-og py-2 text-center rounded-md">
              <span class="text-lg font-bold uppercase drop-shadow"
                >10 видов панини</span
              >
            </div>
            <p class="mt-1 text-md text-justify drop-shadow-sm">
              Традиционный итальянский сандвич с сочным куринным филе.
            </p>
          </div>
        </div>
      </div>
      <div class="relative mt-12">
        <div
          class="md:absolute lg:top-7 md:top-5 md:mb-0 mb-4 w-full text-center md:text-white text-xs font-light uppercase drop-shadow-md"
        >
          Со всем ассортиментом справится любой, даже не имеющий опыта
        </div>
        <svg viewBox="0 0 1920 122" class="fill-ribbon">
          <path
            d="M5.76991e-06 11L5.7699e-06 132L1920 132L1920 33.9999L1687.5 19.0001L1435.5 22.9999L955 1.92908e-05L481.5 22.9999L5.76991e-06 11Z"
            fill="#FF2D32"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import Burger from '@/assets/svg/burger2.svg?inline'
import Shawarma from '@/assets/svg/shawarma.svg?inline'
import Panini from '@/assets/svg/panini.svg?inline'

export default {
  name: 'WowProduct',
  components: {
    Burger,
    Shawarma,
    Panini,
  },
}
</script>

<style></style>
