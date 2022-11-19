<template>
  <section>
    <script src="https://yastatic.net/s3/frontend/forms/_/embed.js" />
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-50 overflow-y-auto h-full w-full"
    >
      <div
        class="relative top-[20%] p-3 mx-auto w-[680px] border shadow-2xl rounded-md bg-white"
      >
        <div class="flex flex-row">
          <div class="grow" />
          <button class="close" @click="$emit('close')" />
        </div>

        <iframe
          src="https://forms.yandex.ru/u/6378da432530c2739d2841b8/?iframe=1"
          frameborder="0"
          name="ya-form-6378da432530c2739d2841b8"
          width="650"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeedbackModal',
}
</script>

<style scoped>
.close {
  height: 18px;
  width: 18px;
  background: url('data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUhJREFUaEPtmOEOgjAMhMuTqk+mvqmpcckyB+x6Nwyx/BW67+vNsrDYya/l5PyWAr9OMBPIBMgO5BYiG0g//pcJXM3sQbeuXwCujSbg4JePwE0sEaqNCHh37hW0L6iSKPClvNcdShkR8OLtQgqJtubTzLxZQxcqoJag4B0mIqCSoOEZAVZCAs8KRCVk8AoBVEIKrxIYlZDDKwX2JKbAqwXWJHzS+du7XNCc33sZRMfoVt222/W9UvgZCRTYnoQc/mgBxbHjK/mjt5BcQi3QmzbetfpPLJVQCmyNyhmn2Pd2UgmMzPkpEgqBEfi16URvJ1YAgZ8iwQhE4OUSUQEGXioREVDAyyRQASW8RAIRaD+rKM82h39WUcK3SUC1kQTKQvDnv70zffU7XDsiAPDMvzUF5vd4e4VMIBMgO5BbiGwg/XgmQLeQLPACAzxiMbcB4aEAAAAASUVORK5CYII=')
    center no-repeat;
  opacity: 0.7;
}
</style>
