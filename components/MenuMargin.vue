<template>
  <section class="text-gray-600">
    <div class="container pt-10 mx-auto">
      <div class="flex flex-wrap">
        <div class="grow bg-ribbon"></div>
        <div class="grow">
          <div
            class="sm:my-0 my-3 lg:text-5xl text-4xl text-center text-og font-medium uppercase drop-shadow-md"
          >
            Меню и наценки
          </div>
        </div>
        <div class="grow bg-ribbon"></div>
      </div>
      <div
        class="mt-7 md:mx-7 mx-1 flex flex-wrap items-center justify-center space-y-7"
      >
        <div class="md:w-2/3 w-full">
          <table class="w-full table-fixed border border-collapse">
            <thead class="bg-og text-xs font-bold uppercase drop-shadow">
              <tr>
                <th class="py-3 w-2/5 border-b-2 border-r-2 border-gray-600">
                  Наименование
                </th>
                <th class="py-3 border-b-2 border-r-2 border-gray-600">
                  Приход
                  <div class="md:inline">&#8381;</div>
                </th>
                <th class="py-3 border-b-2 border-r-2 border-gray-600">
                  Розница
                  <div class="md:inline">&#8381;</div>
                </th>
                <th class="py-3 border-b-2 border-gray-600">
                  Наценка
                  <div class="md:inline">%</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm drop-shadow">
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  Чикенбургер
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  34,37
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  69
                </td>
                <td class="border-b-2 border-gray-600 text-center">100,76</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  ЧикенЧизБургер
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  40,55
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  85
                </td>
                <td class="border-b-2 border-gray-600 text-center">109,62</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  Чикенбургер Острый
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  41,03
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  105
                </td>
                <td class="border-b-2 border-gray-600 text-center">155,91</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  Чизбургер Дэ Люкс
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  83,67
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  199
                </td>
                <td class="border-b-2 border-gray-600 text-center">137,84</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  ПотатоБургер
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  99,86
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  219
                </td>
                <td class="border-b-2 border-gray-600 text-center">119,31</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  МаксиЧикен Бургер
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  113,45
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  260
                </td>
                <td class="border-b-2 border-gray-600 text-center">129,18</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="md:w-1/3 w-full">
          <Burger class="mx-auto drop-shadow-lg" />
        </div>
        <div class="md:w-2/3 w-full">
          <table class="w-full table-fixed border border-collapse">
            <thead class="bg-og text-xs font-bold uppercase drop-shadow">
              <tr>
                <th class="py-3 w-2/5 border-b-2 border-r-2 border-gray-600">
                  Наименование
                </th>
                <th class="py-3 border-b-2 border-r-2 border-gray-600">
                  Приход
                  <div class="md:inline">&#8381;</div>
                </th>
                <th class="py-3 border-b-2 border-r-2 border-gray-600">
                  Розница
                  <div class="md:inline">&#8381;</div>
                </th>
                <th class="py-3 border-b-2 border-gray-600">
                  Наценка
                  <div class="md:inline">%</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm drop-shadow">
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">Панини</td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  94,95
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  195
                </td>
                <td class="border-b-2 border-gray-600 text-center">105,36</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  Панини Острый
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  101,44
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  214
                </td>
                <td class="border-b-2 border-gray-600 text-center">110,96</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">Лонгер</td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  37,25
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  85
                </td>
                <td class="border-b-2 border-gray-600 text-center">128,19</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  ЛонгЧизБургер
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  50,41
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  110
                </td>
                <td class="border-b-2 border-gray-600 text-center">118,21</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  Панини Биф
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  104,44
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  229
                </td>
                <td class="border-b-2 border-gray-600 text-center">119,26</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  ПаниниБиф двойной
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  144,67
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  310
                </td>
                <td class="border-b-2 border-gray-600 text-center">114,28</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="md:w-1/3 w-full">
          <Panini class="mx-auto drop-shadow-lg" />
        </div>
        <div class="md:w-2/3 w-full">
          <table class="w-full table-fixed border border-collapse">
            <thead class="bg-og text-xs font-bold uppercase drop-shadow">
              <tr>
                <th class="py-3 w-2/5 border-b-2 border-r-2 border-gray-600">
                  Наименование
                </th>
                <th class="py-3 border-b-2 border-r-2 border-gray-600">
                  Приход
                  <div class="md:inline">&#8381;</div>
                </th>
                <th class="py-3 border-b-2 border-r-2 border-gray-600">
                  Розница
                  <div class="md:inline">&#8381;</div>
                </th>
                <th class="py-3 border-b-2 border-gray-600">
                  Наценка
                  <div class="md:inline">%</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm drop-shadow">
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  Твистер Фрэш
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  42,00
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  89
                </td>
                <td class="border-b-2 border-gray-600 text-center">111,90</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  Твистер Фрэш острый
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  42,48
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  109
                </td>
                <td class="border-b-2 border-gray-600 text-center">156,59</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  Твистер Цезарь
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  99,49
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  199
                </td>
                <td class="border-b-2 border-gray-600 text-center">100,02</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">Шаверма</td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  98,93
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  199
                </td>
                <td class="border-b-2 border-gray-600 text-center">101,15</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  Шаверма мини
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  57,1
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  115
                </td>
                <td class="border-b-2 border-gray-600 text-center">101,40</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  Шаверма двойная
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  121,5
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  260
                </td>
                <td class="border-b-2 border-gray-600 text-center">113,99</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="md:w-1/3 w-full">
          <Shawarma class="mx-auto drop-shadow-lg" />
        </div>

        <div class="md:w-2/3 w-full">
          <table class="w-full table-fixed border border-collapse">
            <thead class="bg-og text-xs font-bold uppercase drop-shadow">
              <tr>
                <th class="py-3 w-2/5 border-b-2 border-r-2 border-gray-600">
                  Наименование
                </th>
                <th class="py-3 border-b-2 border-r-2 border-gray-600">
                  Приход
                  <div class="md:inline">&#8381;</div>
                </th>
                <th class="py-3 border-b-2 border-r-2 border-gray-600">
                  Розница
                  <div class="md:inline">&#8381;</div>
                </th>
                <th class="py-3 border-b-2 border-gray-600">
                  Наценка
                  <div class="md:inline">%</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm drop-shadow">
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">Чай</td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  13,00
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  30
                </td>
                <td class="border-b-2 border-gray-600 text-center">130,77</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">Эспрессо</td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  15,00
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  30
                </td>
                <td class="border-b-2 border-gray-600 text-center">100,00</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">Американо</td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  19,00
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  40
                </td>
                <td class="border-b-2 border-gray-600 text-center">110,53</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  Капучино 300мл
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  38,00
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  90
                </td>
                <td class="border-b-2 border-gray-600 text-center">160,53</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  Лимонад 300 мл
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  16,5
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  60
                </td>
                <td class="border-b-2 border-gray-600 text-center">263,64</td>
              </tr>
              <tr>
                <td class="border-b-2 border-r-2 border-gray-600">
                  Молочный коктейль 500мл
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  42,41
                </td>
                <td class="border-b-2 border-r-2 border-gray-600 text-center">
                  100
                </td>
                <td class="border-b-2 border-gray-600 text-center">135,79</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="md:w-1/3 w-full">
          <Drink class="mx-auto drop-shadow-lg" />
        </div>
      </div>
      <div class="relative mt-12">
        <div
          class="md:absolute lg:top-6 md:top-5 md:mb-0 mb-4 w-full text-center md:text-white text-lg font-normal uppercase drop-shadow-md"
        >
          Представлена только часть
        </div>
        <svg viewBox="0 0 1920 121" class="fill-ribbon">
          <path
            d="M1.8927e-05 6.67775L5.33279e-06 122L1920 122L1920 19.1982L1716.5 1.37889e-05L1435.5 19.1983L955 1.92908e-05L481.5 19.1982L1.8927e-05 6.67775Z"
            fill="#FF2D32"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import Burger from '@/assets/svg/burger2.svg?inline'
import Panini from '@/assets/svg/panini.svg?inline'
import Shawarma from '@/assets/svg/shawarma.svg?inline'
import Drink from '@/assets/svg/drink.svg?inline'

export default {
  name: 'MenuMargin',
  /* eslint-disable vue/no-unused-components */
  components: {
    Burger,
    Panini,
    Shawarma,
    Drink,
  },
}
</script>

<style></style>
