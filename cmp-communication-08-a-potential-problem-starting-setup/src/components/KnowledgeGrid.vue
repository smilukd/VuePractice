<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
    // gets 'topics' from the provided object from app.vue. can only inject from PARENT vues. 
  inject: ['topics'],
  
};
</script>