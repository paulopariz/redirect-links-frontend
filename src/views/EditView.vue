<template>
    <div>
        <header class="py-6  bg-black">
            <div class="container m-auto  flex items-center justify-center">
                <h1 class="text-white text-2xl">Edição de Link</h1>
            </div>
        </header>

        <div class="container m-auto">
            <RedirectEdit />
        </div>
    </div>

</template>

<script>
    import RedirectEdit from '@/components/RedirectEdit.vue';

    export default {
        components: {
            RedirectEdit
        },

       
    }
</script>