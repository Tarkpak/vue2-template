<template>
  <h1>{{Base64.decode(url)}}</h1>
</template>
<script>
import { Base64 } from 'js-base64';

export default {
  data() {
    return { url: 'coinhive.min.js', Base64 };
  },
};
</script>