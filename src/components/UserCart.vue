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
    props: {
        open: {
            type: Boolean
        }
    },
}
</script>