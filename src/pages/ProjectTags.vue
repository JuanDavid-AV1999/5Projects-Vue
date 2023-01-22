<script>
import { defineComponent } from 'vue'
import InputTag from '@/components/InputTag.vue'

export default defineComponent({
    components: {
        InputTag,
    },
    methods: {
        handleOnTagsChange(tags) {
            console.log(tags)
        },
    },
})
</script>

<template>
    <section class="content-project-one">
        <InputTag @onTagsChange="handleOnTagsChange" />
    </section>
</template>

<style scoped>
.content-project-one {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #005774;
}
</style>
