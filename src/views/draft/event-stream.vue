<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ExampleComponent',

  data() {
    return {
      messages: []
    }
  },

  created() {
    // 使用 Axios 获取推送的事件流
    const source = new EventSource('/api/events');
    source.addEventListener('message', (event) => {
      // 将事件流中的数据添加到消息列表中
      console.log('event.data', event.data);
      this.messages.push({
        id: this.messages.length + 1,
        text: event.data
      });
    });
  }
};
</script>
