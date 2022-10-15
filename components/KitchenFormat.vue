<template>
  <section class="text-gray-600">
    <div class="container pt-10 mx-auto">
      <div class="flex flex-wrap">
        <div class="grow bg-ribbon"></div>
        <div class="grow">
          <div
            class="sm:my-0 my-3 lg:text-5xl text-4xl text-center text-og font-medium uppercase drop-shadow-md"
          >
            Открытая кухня<br />
            и формат TO GO
          </div>
        </div>
        <div class="grow bg-ribbon"></div>
      </div>
      <div
        class="mt-5 mb-24 lg:text-2xl text-xl text-center text-black font-normal uppercase drop-shadow-md"
      >
        Не требуется помещение с залом обслуживания
      </div>
      <div class="mx-10 flex flex-wrap md:space-y-0 space-y-16">
        <div class="flex px-4 md:w-1/3 w-full">
          <div class="grow">
            <h4 class="relative text-xl text-black font-bold uppercase">
              <div class="z-10 drop-shadow-lg">
                <div class="text-2xl text-og drop-shadow-none">1</div>
                Оборудование надёжного российского производителя
              </div>
              <Fire class="-z-10 absolute -left-7 -top-6 w-16" />
            </h4>
            <div class="mt-3 text-sm text-black font-normal">
              За счёт своей можности позволяет существенно экономить на
              электроэнергии.
            </div>
          </div>
        </div>
        <div class="flex px-4 md:w-1/3 w-full">
          <div class="grow">
            <h4 class="relative text-xl text-black font-bold uppercase">
              <div class="z-10 drop-shadow-lg">
                <div class="text-2xl text-og drop-shadow-none">2</div>
                Открытая кухня
              </div>
              <Fire class="-z-10 absolute -left-7 -top-6 w-16" />
            </h4>

            <div class="mt-3 text-sm text-black font-normal">
              Способствует повышенной лояльности посетителей за счёт визуального
              наблюдения всех этапов приготовления заказов.
            </div>
          </div>
        </div>
        <div class="flex px-4 md:w-1/3 w-full">
          <div class="grow">
            <h4 class="relative text-xl text-black font-bold uppercase">
              <div class="z-10 drop-shadow-lg">
                <div class="text-2xl text-og drop-shadow-none">3</div>
                Формат TO GO
              </div>
              <Fire class="absolute -z-10 -left-7 -top-6 w-16" />
            </h4>
            <div class="mt-3 text-sm text-black font-normal">
              В период локдауна мы не потеряли клиентов, наоборот за счёт
              доставки увеличили зону охвата. Позволяет существенно снизить
              затраты на старте проекта и в последующей эксплуатации.
            </div>
          </div>
        </div>
      </div>
      <svg viewBox="0 0 1920 121" class="mt-14 fill-ribbon">
        <path
          d="M5.28908e-06 0L5.28908e-06 121L1920 121L1920 22.9998L1687.5 8.00004L1435.5 22.9999L955 0L481.5 22.9998L5.28908e-06 0Z"
          fill="#FF2D32"
        />
      </svg>
    </div>
  </section>
</template>

<script>
import Fire from '@/assets/svg/fire.svg?inline'

export default {
  name: 'KitchenFormat',
  components: {
    Fire,
  },
}
</script>

<style></style>
