<template>
  <section class="text-gray-600">
    <div class="container pt-10 mx-auto">
      <div class="flex flex-wrap">
        <div class="grow bg-ribbon" />
        <div class="grow">
          <div
            class="sm:my-0 my-3 lg:text-5xl text-4xl text-center text-og font-medium uppercase drop-shadow-md"
          >
            Контакты
          </div>
        </div>
        <div class="grow bg-ribbon" />
      </div>

      <div
        class="mt-12 mx-7 flex flex-wrap justify-center md:space-y-0 space-y-10"
      >
        <div class="md:w-2/5 w-full">
          <div
            class="py-2 bg-og text-center text-md font-bold uppercase rounded-lg drop-shadow-md"
          >
            Звонить и писать
          </div>
          <div
            class="mt-3 text-center text-lg font-normal uppercase drop-shadow"
          >
            <a href="tel:89289888000">8-928-9-888-000</a>
          </div>
        </div>
        <div class="grow" />
        <div class="md:w-2/5 w-full">
          <div
            class="w-full py-2 bg-og text-center text-md font-bold uppercase rounded-lg drop-shadow-md"
          >
            Электронная почта
          </div>
          <div
            class="mt-3 text-center text-lg font-normal uppercase drop-shadow"
          >
            <a href="mailto:ostrogoriacho@gmail.com">ostrogoriacho@gmail.com</a>
          </div>
        </div>

        <div class="grow w-full">
          <div
            class="mb-7 h-36 w-auto bg-contain bg-no-repeat bg-center bg-[url('@/assets/img/logo.webp')]"
          />
        </div>

        <div class="md:w-2/5 w-full">
          <div
            class="py-2 bg-og text-center text-md font-bold uppercase rounded-lg drop-shadow-md"
          >
            Онлайн меню
          </div>
          <div class="mt-3 text-md font-normal drop-shadow">
            <ul class="list-none">
              <li
                class="mt-1 flex flex-row border-b-2 border-dashed border-gray-600"
              >
                <div class="grow">Яндекс</div>
                <div class="inline">
                  <a href="https://ostrogoriacho.clients.site" target="_blank"
                    >ostrogoriacho.clients.site</a
                  >
                </div>
              </li>
              <li
                class="mt-1 flex flex-row border-b-2 border-dashed border-gray-600"
              >
                <div class="grow">VK</div>
                <div class="inline">
                  <a href="https://vk.com/market-211771168" target="_blank"
                    >vk.com/market-211771168</a
                  >
                </div>
              </li>
              <li
                class="mt-1 flex flex-row border-b-2 border-dashed border-gray-600"
              >
                <div class="grow">WhatsApp</div>
                <div class="inline">
                  <a href="https://wa.me/c/79282131914" target="_blank"
                    >wa.me/c/79282131914</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="grow" />
        <div class="md:w-2/5 w-full">
          <div
            class="w-full py-2 bg-og text-center text-md font-bold uppercase rounded-lg drop-shadow-md"
          >
            Социальные сети
          </div>
          <div class="mt-3 text-md font-normal drop-shadow">
            <ul class="list-none">
              <li
                class="mt-1 flex flex-row border-b-2 border-dashed border-gray-600"
              >
                <div class="grow">Telegram</div>
                <div class="inline">
                  <a href="https://t.me/ostro_goriacho" target="_blank">
                    t.me/ostro_goriacho
                  </a>
                </div>
              </li>
              <li
                class="mt-1 flex flex-row border-b-2 border-dashed border-gray-600"
              >
                <div class="grow">VK</div>
                <div class="inline">
                  <a href="https://vk.com/ostro_goriacho" target="_blank">
                    vk.com/ostro_goriacho
                  </a>
                </div>
              </li>
              <li
                class="mt-1 flex flex-row border-b-2 border-dashed border-gray-600"
              >
                <div class="grow">ЯRus</div>
                <div class="inline">
                  <a href="https://yarus.ru/user/2705734" target="_blank">
                    @ostrogoriacho
                  </a>
                </div>
              </li>
              <li
                class="mt-1 flex flex-row border-b-2 border-dashed border-gray-600"
              >
                <div class="grow">Запрещенная в РФ</div>
                <div class="inline">
                  <a
                    href="https://www.instagram.com/ostro_goriacho"
                    target="_blank"
                  >
                    @ostro_goriacho
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full text-center">
          <button
            class="md:mt-10 mt-5 px-7 py-2 bg-ribbon text-white text-2xl font-normal rounded-md drop-shadow-lg shadow-lg"
            @click="$emit('show')"
          >
            Связаться с нами
          </button>
        </div>
      </div>

      <div class="relative mt-12">
        <div
          class="md:absolute lg:top-6 md:top-5 md:mb-0 mb-4 w-full md:text-white text-center text-lg font-normal uppercase drop-shadow-md"
        >
          Звоните! Пишите! Ответим на все вопросы!
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
export default {
  name: 'ContactsLinks',
}
</script>

<style></style>
