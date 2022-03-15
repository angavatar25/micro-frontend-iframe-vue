<template>
    <div>
        <div class=" w-96 p-3 m-auto bg-white border-t-2 border-yellow-400 relative">
            <div :class=" openCart ? 'flex' : ' hidden'" class="justify-center modal-window items-center absolute w-full h-screen">
                <div style="max-height: calc(100vh - 20vh)"
                        class=" mx-5
                        my-auto
                        inline-block
                        bg-white
                        text-white
                        rounded-2xl
                        text-left
                        shadow-xl
                        transform
                        transition-all
                        sm:align-middle sm:max-w-lg
                        w-full
                        "
                >
                    <div class=" text-right">
                        <button class=" bg-yellow-500 text-white rounded-sm p-4" @click="openCart = false">Close</button>
                    </div>
                    <iframe
                        class=" w-full"
                        src="https://sad-williams-a3a722.netlify.app"
                        style="border:none;"
                        id="iframe" >
                    </iframe>
                </div>
            </div>
            <div class=" flex justify-between mb-4">    
                <p class=" text-3xl font-bold">Product List</p>
                <button @click="openCart = true">Open Cart</button>
            </div>
            <div v-for="product in myData" :key="product.id">
                <div class="flex mb-6">
                    <div class=" flex">
                        <div class=" w-16 h-16 bg-gray-500"></div>
                        <div class=" my-auto ml-4">
                            <div>
                                <p>{{product.product_name}}</p>
                                <p>{{ numberWithCommas(product.price) }}</p>
                            </div>
                        </div>
                    </div>
                    <div class=" text-right flex-grow my-auto">
                        <button @click="sendData(product.product_name, product.price)" class=" bg-yellow-500 text-white w-14 rounded-md">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DummyJson from '../../dummy.json'

export default {
    data() {
        return {
            myData: DummyJson,
            openCart: false
        }
    },
    methods: {
        numberWithCommas(x) {
            return 'Rp. ' + x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        },
        sendData(item, price) {
          var iframe = document.getElementById('iframe').contentWindow
          var target = 'https://sad-williams-a3a722.netlify.app'
          const data = {
              item: item,
              price: price
          }
          iframe.postMessage(data, target)
        },
    }
}
</script>

<style>
.modal-window {
    background: rgba(0, 0, 0, 0.5);
}
</style>