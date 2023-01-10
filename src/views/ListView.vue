<template>
    <div class="container m-auto">

        <header class="flex justify-between items-center mt-16">
            <div class="float-left text-left">
                <h1 class="text-xl text-gray-900 font-semibold">Links de Redirecionamento 🌐 </h1>
                <span class="text-sm text-gray-500">Crie seus links de redirect em poucos passos</span>
            </div>
            <div>
                <label for="my-modal-3" class="btn btn-primary py-2 px-9 text-sm">Criar um Link</label>
            </div>
        </header>

       

        <div class="flex items-center mt-12">
            <div class=" border-gray-100 border-t-2 border-r-2 h-screen w-2/5">

                <div class="flex items-center justify-between mt-2 border-b-2 border-gray-100 py-5 pr-8 ">
                    <h1 class="text-primary font-semibold ">00 Links</h1>
                    <p class="font-normal text-gray-500 text-sm">Cliques</p>
                </div>

                <LinksRedirect />
            </div>

            <div class=" border-gray-100 border-t-2 h-screen w-3/5">
            
            </div>
        </div>

    </div>
</template>

<script>
import LinksRedirect from '@/components/LinksRedirect.vue'

    export default {
        components: { LinksRedirect },
       
    }
</script>