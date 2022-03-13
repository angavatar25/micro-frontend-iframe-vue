<template>
    <div>
        <div class=" w-96 p-3 m-auto min-h-screen bg-white border-t-2 border-yellow-400">
            <p class=" text-3xl font-bold mb-4">Product List</p>
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
            <iframe 
                src="http://localhost:3000" 
                id="iframe" 
                frameborder="0">
            </iframe>
        </div>
    </div>
</template>

<script>
import DummyJson from '../../dummy.json'

export default {
    data() {
        return {
            myData: DummyJson
        }
    },
    methods: {
        numberWithCommas(x) {
            return 'Rp. ' + x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        },
        sendData(item, price) {
          var iframe = document.getElementById('iframe').contentWindow
          var target = 'http://localhost:3000'
          const data = {
              item: item,
              price: price
          }
          iframe.postMessage(data, target)
        },
    }
}
</script>