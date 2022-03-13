<template>
    <div>
        <iframe 
           src="http://localhost:3000" 
           id="iframe" 
           frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
    mounted() {
        this.getFrame()
        this.getData()
    },
    methods: {
        getFrame() {
            var iframe = document.getElementById('iframe')
            iframe.onload = function() {
                let iframewindow = iframe.contentWindow
                console.log(iframewindow)
            }
        },
        getData() {
            window.addEventListener('message', ({ data }) => {
                console.log('i got some data!', data);
            });
        }
    }
}
</script>