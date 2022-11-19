<template>
  <div
    class="pt-2 md:mb-2 lg:px-0 px-2 my-0 mx-auto max-w-screen-lg shadow-2xl shadow-zinc-900"
  >
    <div class="divide-y-2 divide-dashed">
      <Main-Title @show="showFeedback()" />
      <Franchise-Features />
      <Possible-Formats />
      <Kitchen-Format />
      <Wow-Product />
      <Drinks-Desserts />
      <Meat-Vegetables />
      <Franchise-Support />
      <Menu-Margin />
      <Contacts-Links @show="showFeedback()" />
    </div>
    <feedback-modal v-show="showModal" @close="showModal = false" />
  </div>
</template>

<script>
import MainTitle from '@/components/MainTitle.vue'
import FranchiseFeatures from '@/components/FranchiseFeatures.vue'
import PossibleFormats from '@/components/PossibleFormats.vue'
import KitchenFormat from '@/components/KitchenFormat.vue'
import WowProduct from '@/components/WowProduct.vue'
import DrinksDesserts from '@/components/DrinksDesserts.vue'
import MeatVegetables from '@/components/MeatVegetables.vue'
import FranchiseSupport from '@/components/FranchiseSupport.vue'
import MenuMargin from '@/components/MenuMargin.vue'
import ContactsLinks from '@/components/ContactsLinks.vue'

import FeedbackModal from '@/components/FeedbackModal.vue'

export default {
  name: 'IndexPage',
  components: {
    MainTitle,
    FranchiseFeatures,
    PossibleFormats,
    KitchenFormat,
    WowProduct,
    DrinksDesserts,
    MeatVegetables,
    FranchiseSupport,
    MenuMargin,
    ContactsLinks,
    FeedbackModal,
  },
  data() {
    return { showModal: false }
  },
  methods: {
    showFeedback() {
      if (this.$device.isDesktopOrTablet) {
        this.showModal = true
      } else {
        window.location.href =
          'https://forms.yandex.ru/u/6378da432530c2739d2841b8/'
      }
    },
  },
}
</script>
