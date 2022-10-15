<template>
  <section class="text-gray-600">
    <div class="container pt-10 mx-auto">
      <div class="flex flex-wrap">
        <div class="grow bg-ribbon"></div>
        <div class="grow">
          <div
            class="sm:my-0 my-3 lg:text-5xl text-4xl text-center text-og font-medium uppercase drop-shadow-md"
          >
            Продукция из говядины<br />
            и растительная
          </div>
        </div>
        <div class="grow bg-ribbon"></div>
      </div>
      <div
        class="mt-5 mb-14 lg:text-2xl text-xl text-center text-black font-normal uppercase drop-shadow-md"
      >
        В дополнение к куринной концепции
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
                >С говяжьим рубленным бифштексом
              </span>
            </div>
            <div class="mt-1 text-md drop-shadow-sm">
              <div class="flex flex-row">
                <span class="grow">
                  <div class="inline font-bold">22</div>
                  вида бургеров</span
                >

                <span class="grow"
                  ><div class="inline text-md font-bold">3</div>
                  вида панини</span
                >
              </div>
              <div class="mt-1 flex flex-row">
                <span class="grow">
                  <div class="inline font-bold">4</div>
                  вида лонгеров</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="flex px-4 md:w-1/3 w-full">
          <div class="grow">
            <div
              class="flex justify-center items-center mx-auto w-48 h-48 border-2 border-og rounded-full"
            >
              <VeganBurger class="pl-5" />
            </div>
            <div class="w-0.5 h-6 mx-auto bg-og" />
            <div class="bg-og py-2 text-center rounded-md">
              <span class="text-lg font-bold uppercase drop-shadow"
                >C растительной котлетой Hi Burger</span
              >
            </div>
            <p class="mt-1 text-md drop-shadow-sm">
              Производитель - компания ЭФКО.
            </p>
            <div class="relative mt-3">
              <div
                class="absolute lg:top-[9%] lg:left-[33%] md:top-[11%] md:left-[25%] top-[12%] left-[32%] -rotate-3 text-center text-white text-md font-normal uppercase drop-shadow-md"
              >
                Трендовый<br />
                продукт
              </div>
              <svg
                viewBox="0 0 216 79"
                class="fill-ribbon mx-auto lg:w-1/2 md:w-3/4 w-3/5 max-w-sm"
              >
                <path
                  d="M4.70327e-06 8.5196L3.12 78.2569L55.1687 78.1233L108.938 73.5226L162.521 73.3205L215.793 66.1811L212.901 1.55541L187.483 0.13168L159.206 3.95775L105.818 3.78545L53.4774 8.68789L4.70327e-06 8.5196Z"
                  fill="#FF2D32"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="flex px-4 md:w-1/3 w-full">
          <div class="grow">
            <div
              class="flex justify-center items-center mx-auto w-48 h-48 border-2 border-og rounded-full"
            >
              <SeasonBurger class="pb-3" />
            </div>
            <div class="w-0.5 h-6 mx-auto bg-og" />
            <div class="bg-og py-2 text-center rounded-md">
              <span class="text-lg font-bold uppercase drop-shadow"
                >Сезонные рецепты</span
              >
            </div>
            <ul class="mt-1 ml-6 list-disc text-md drop-shadow-sm">
              <li>Мексиканское меню</li>
              <li>Итальянское Меню</li>
              <li>Русское меню</li>
            </ul>
          </div>
        </div>
      </div>
      <svg viewBox="0 0 1920 101" class="mt-10 fill-ribbon">
        <path
          d="M5.28908e-06 0L5.28908e-06 121L1920 121L1920 22.9998L1687.5 8.00004L1435.5 22.9999L955 0L481.5 22.9998L5.28908e-06 0Z"
          fill="#FF2D32"
        />
      </svg>
    </div>
  </section>
</template>

<script>
import Burger from '@/assets/svg/burger2.svg?inline'
import VeganBurger from '@/assets/svg/burger3.svg?inline'
import SeasonBurger from '@/assets/svg/burger4.svg?inline'

export default {
  name: 'MeatVegetables',
  components: {
    Burger,
    VeganBurger,
    SeasonBurger,
  },
}
</script>

<style></style>
