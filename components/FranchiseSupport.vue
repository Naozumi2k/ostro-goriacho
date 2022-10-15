<template>
  <section class="text-gray-600">
    <div class="container pt-10 mx-auto">
      <div class="flex flex-wrap">
        <div class="grow bg-ribbon"></div>
        <div class="grow">
          <div
            class="sm:my-0 my-3 lg:text-5xl text-4xl text-center text-og font-medium uppercase drop-shadow-md"
          >
            Поддержка
          </div>
        </div>
        <div class="grow bg-ribbon"></div>
      </div>
      <div
        class="mt-7 mx-5 grid grid-flow-col grid-cols-5 items-center md:space-y-0 space-y-3"
      >
        <div class="text-center md:col-span-2 col-span-full">
          <div class="text-2xl font-bold uppercase drop-shadow-lg">
            Удобные инструкции
          </div>
          <div class="mt-1 text-md drop-shadow">
            Послойные схемы бургеров для сборки с таймингами приготовления
          </div>
          <BurgerSchema class="mt-3 mx-auto w-64" />
        </div>
        <div class="md:col-span-3 md:pt-0 pt-3 col-span-full space-y-5">
          <div
            class="flex md:flex-nowrap flex-wrap items-center justify-center h-min"
          >
            <div class="p-5">
              <Excel class="w-36" />
            </div>
            <div class="grow">
              <div class="text-md font-bold uppercase drop-shadow">
                Таблица с точными калькуляциями и подробные технологические
                карты
              </div>
              <div class="mt-1 text-sm drop-shadow">
                Достаточно вбить из приходной накладной цены и автоматически
                пересчитаются все блюда
              </div>
              <div class="mt-1 text-sm font-bold uppercase drop-shadow">
                + все необходимые журналы
              </div>
            </div>
          </div>
          <div
            class="flex md:flex-nowrap flex-wrap items-center justify-center h-min"
          >
            <div class="p-5">
              <MenuReplace class="w-36" />
            </div>
            <div class="grow">
              <div class="text-md font-bold uppercase drop-shadow">
                Каждый квартал смена дизайна меню
              </div>
              <div class="mt-1 text-sm drop-shadow">
                Способствует повышенной лояльности посетителей за счёт
                визуального наблюдения всех этапов приготовления заказов
              </div>
            </div>
          </div>
          <div
            class="flex md:flex-nowrap flex-wrap items-center justify-center h-min"
          >
            <div class="m-5">
              <Labels class="w-36" />
            </div>
            <div class="grow">
              <div class="text-md font-bold uppercase drop-shadow">
                Макеты этикеток
              </div>
              <div class="mt-1 text-sm drop-shadow">
                Для самостоятельной печати на термопринтере<br />
                Помощь в настройке и подборе оборудования
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative mt-12">
        <div
          class="md:absolute lg:top-5 md:top-5 md:mb-0 mb-4 w-full md:text-white text-center text-lg font-normal uppercase drop-shadow-md"
        >
          Обучение
        </div>
        <svg viewBox="0 0 1920 118" class="fill-ribbon">
          <path
            d="M1.03498e-06 6.67775L4.41485e-06 118L1920 118L1920 19.1982L1716.5 1.37889e-05L1435.5 19.1983L955 1.92908e-05L481.5 19.1982L1.03498e-06 6.67775Z"
            fill="#FF2D32"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import BurgerSchema from '@/assets/svg/burger-schema.svg?inline'
import Excel from '@/assets/svg/excel.svg?inline'
import MenuReplace from '@/assets/svg/menu-replace.svg?inline'
import Labels from '@/assets/svg/labels.svg?inline'

export default {
  name: 'FranchiseSupport',
  components: {
    BurgerSchema,
    Excel,
    MenuReplace,
    Labels,
  },
}
</script>

<style></style>
