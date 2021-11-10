<template>
    <div class="modal">
        <div class="modal__inner">
            <header class="modal__header">
                <input type="text" :value="title" class="modal__input input input--primary">
            </header>

            <input type="url" class="input" placeholder="Link">

            <div class="input-group input-group--price">
                <input type="url" class="input" placeholder="Price">

                <div class="select-wrapper">
                    <select name="currency" id="currency" class="select">
                        <option value="EUR">EUR (€)</option>
                        <option value="USD">USD ($)</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button';

export default {
    name: 'Modal',
    props: ['title'],
    components: {
        Button
    }
}
</script>

<style>

</style>