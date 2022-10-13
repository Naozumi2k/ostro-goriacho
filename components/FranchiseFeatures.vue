<template>
  <section class="bg-red-500 text-gray-600">
    <div class="container pt-10 mx-auto">
      <div
        class="mx-7 grid grid-flow-col grid-cols-4 justify-items-start items-center md:space-y-0 space-y-3"
      >
        <div
          class="md:col-span-3 col-span-full md:justify-self-start justify-self-center text-white lg:md:text-6xl md:text-4xl text-2xl uppercase font-bold drop-shadow-lg"
        >
          <div class="inline text-yellow-300">Откройте</div>
          за 1 месяц
        </div>

        <div
          class="md:col-span-1 col-span-full md:justify-self-end justify-self-center"
        >
          <Pepper class="md:h-12 h-8 drop-shadow-lg" />
        </div>
      </div>
      <div
        class="mt-5 mx-7 grid grid-cols-4 justify-items-start items-center md:space-y-0 space-y-3"
      >
        <div
          class="md:col-span-3 col-span-full md:justify-self-start justify-self-center text-white lg:md:text-6xl md:text-4xl text-2xl uppercase font-bold drop-shadow-lg"
        >
          <div class="inline text-yellow-300">Получите</div>
          2,0 млн &#8381;
          <div
            class="text-right text-white md:text-sm text-xs uppercase font-light"
          >
            прибыли в первый год работы
          </div>
        </div>
        <div
          class="md:col-span-1 col-span-full md:justify-self-end justify-self-center md:text-left text-center text-white text-xs uppercase font-light drop-shadow-lg"
        >
          Доказал свою экономическую эффективность в период локдауна и пандемии
        </div>
      </div>
      <div
        class="mt-5 flex flex-wrap items-center justify-center md:space-y-0 space-y-7"
      >
        <div class="grow pl-7 md:w-1/2">
          <div
            class="text-white lg:md:text-2xl md:text-xl text-lg uppercase font-bold drop-shadow-lg"
          >
            Преимущества франшизы
          </div>
          <ul
            class="list-disc mt-3 ml-5 text-white text-sm font-light drop-shadow-lg"
          >
            <li>Доступная сумма инвестиций</li>
            <li>Не требуется опыт работы в общепите</li>
            <li>Быстрая окупаемость</li>
            <li>
              Малая площадь от 15м<sup>2</sup> помещения не требующая зала
              обслуживания
            </li>
            <li>Актуальный формат To Go</li>
            <li>Легкая масштабируемость формата</li>
            <li>Полная поддержка при открытии точки</li>
          </ul>
        </div>

        <div class="md:w-1/2">
          <Hotdog class="w-full drop-shadow-lg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Pepper from '@/assets/svg/pepper.svg?inline'
import Hotdog from '@/assets/svg/hotdog.svg?inline'

export default {
  name: 'FranchiseFeatures',
  components: {
    Pepper,
    Hotdog,
  },
}
</script>

<style></style>
