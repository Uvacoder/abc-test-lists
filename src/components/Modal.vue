<template>
    <div class="modal">
        <div class="modal__inner">
            <header class="modal__header">
                <input type="text" :value="title" class="modal__input input input--primary">
            </header>

            <input type="url" class="input" placeholder="Link">

            <div class="input-group input-group--price">
                <input type="url" class="input" placeholder="Price" v-if="price" :value="price.amount">
                <input type="url" class="input" placeholder="Price" v-else>

                <div class="select-wrapper">
                    <select name="currency" id="currency" class="select" v-if="price" :selected="price.currency">
                        <option value="EUR">EUR (€)</option>
                        <option value="USD">USD ($)</option>
                    </select>
                    <select name="currency" id="currency" class="select" v-else>
                        <option value="EUR">EUR (€)</option>
                        <option value="USD">USD ($)</option>
                    </select>
                </div>
            </div>
        </div>

        <slot name="overlay"></slot>
    </div>
</template>

<script>
import Button from '@/components/Button';

export default {
    name: 'Modal',
    props: ['title', 'price'],
    components: {
        Button
    }
}
</script>

<style>

</style>