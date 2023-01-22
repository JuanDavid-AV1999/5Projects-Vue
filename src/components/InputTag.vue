<script>
import { defineComponent } from 'vue'

export default defineComponent({
    // props: {
    //     onTagsChange: Function
    // },
    emits: {
        onTagsChange: Function,
    },
    methods: {
        handleKeyDown({ key }) {
            if (key === 'Backspace' && this.currentValue === '') {
                this.tags.pop()
                // this.onTagsChange(this.tags);
                this.$emit('onTagsChange', this.tags)
            }
        },
        handleSubmit() {
            if (
                this.currentValue !== '' &&
                !this.tags.includes(this.currentValue.trim())
            ) {
                this.tags.push(this.currentValue)
                this.currentValue = ''
                // this.onTagsChange(this.tags)
                this.$emit('onTagsChange', this.tags)
            }
        },
        deleteTag(key) {
            this.tags.splice(key, 1)
            // this.onTagsChange(this.tags)
            this.$emit('onTagsChange', this.tags)
        },
    },
    data() {
        return {
            currentValue: '',
            tags: [],
        }
    },
})
</script>

<template>
    <div class="input-tag">
        <div class="tags">
            <div class="tag" v-for="(tag, key) in tags" :key="key">
                {{ tag }} <button @click="deleteTag(key)">X</button>
            </div>
        </div>
        <form action="" @submit.prevent="handleSubmit">
            <input
                class="input"
                type="text"
                v-model="currentValue"
                @keydown="handleKeyDown"
            />
        </form>
    </div>
</template>

<style scoped>
.input-tag {
    display: inline-flex;
    border: 1px solid #000000;
    border-radius: 5px;
    height: 43px;
    overflow: hidden;
}

.input-tag .tags {
    display: flex;
    gap: 3px;
    padding: 5px;
    background: #ffffff;
}

.input-tag .tags .tag {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px;
    border: 1px solid #cccccc;
    border-radius: 3px;
}

.input-tag .tags .tag button {
    background: transparent;
    border: none;
    border-radius: 3px;
    padding: 3px 6px;
    cursor: pointer;
}

.input-tag .tags .tag button:hover {
    background: #cccccc;
}

.input-tag form {
    display: inline-flex;
}

.input-tag form .input {
    border: none;
    outline: none;
    padding: 0 5px;
}
</style>
