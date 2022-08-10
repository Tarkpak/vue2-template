<template>
  <div>
    <h1>{{ Base64.encode(url) }}</h1>
  </div>
</template>
<script>
import { Base64 } from 'js-base64'

export default {
  data() {
    return { url: 'coinhive.min.js', Base64 }
  },
}
</script>
