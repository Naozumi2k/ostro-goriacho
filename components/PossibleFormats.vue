<template>
  <section class="text-gray-600">
    <div class="container pt-10 mx-auto">
      <div class="flex flex-wrap mb-10">
        <div class="grow bg-ribbon"></div>
        <h1
          class="grow sm:my-0 my-3 lg:text-5xl text-4xl text-og font-medium uppercase text-center drop-shadow-md"
        >
          Возможные форматы
        </h1>
        <div class="grow bg-ribbon"></div>
      </div>
      <div class="mx-7 flex flex-wrap justify-center md:space-y-0 space-y-10">
        <div class="flex px-4 md:w-1/3 w-full">
          <div class="grow">
            <div
              class="flex justify-center items-center mx-auto w-48 h-48 border-2 border-og rounded-full"
            >
              <Restaurant />
            </div>
            <div class="w-0.5 h-6 mx-auto bg-og" />
            <div class="bg-og shadow w-full py-2 text-center">
              <span class="text-lg font-bold uppercase drop-shadow"
                >Стационарный</span
              >
            </div>
            <p class="mt-1 text-md text-justify drop-shadow-sm">
              Собственность или низкая аренда за счёт отсутствия торгового зала.
            </p>
          </div>
        </div>
        <div class="flex px-4 md:w-1/3 w-full">
          <div class="grow">
            <div
              class="flex justify-center items-center mx-auto w-48 h-48 border-2 border-og rounded-full"
            >
              <Foodtrack />
            </div>
            <div class="w-0.5 h-6 mx-auto bg-og" />
            <div class="bg-og shadow py-2 text-center">
              <span class="text-lg font-bold uppercase drop-shadow"
                >Фудтрак</span
              >
            </div>
            <p class="mt-1 text-md text-justify drop-shadow-sm">
              Мобильность и низкая цена аренды земли.
            </p>
          </div>
        </div>
        <div class="flex px-4 md:w-1/3 w-full">
          <div class="grow">
            <div
              class="flex justify-center items-center mx-auto w-48 h-48 border-2 border-og rounded-full"
            >
              <NTO />
            </div>
            <div class="w-0.5 h-6 mx-auto bg-og" />
            <div class="bg-og shadow w-full py-2 text-center">
              <span class="text-lg font-bold uppercase drop-shadow">НТО</span>
            </div>
            <p class="mt-1 text-md text-justify drop-shadow-sm">
              Привлекательность и низкая цена аренды земли.
            </p>
          </div>
        </div>
      </div>
      <svg viewBox="0 0 1920 73" class="mt-14 fill-ribbon">
        <path
          d="M1920 0.000202396L1920 73.0002L-3.19093e-06 73.0001L-1.00536e-06 23L232.5 8.00024L484.5 23.0001L965 0.000202396L1438.5 23L1920 0.000202396Z"
        />
      </svg>
    </div>
  </section>
</template>

<script>
import Restaurant from '@/assets/svg/restaurant.svg?inline'
import Foodtrack from '@/assets/svg/foodtrack.svg?inline'
import NTO from '@/assets/svg/nto.svg?inline'

export default {
  name: 'PossibleFormats',
  components: {
    Restaurant,
    Foodtrack,
    NTO,
  },
}
</script>
