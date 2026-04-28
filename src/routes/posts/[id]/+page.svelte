<script lang="ts">
  const { data } = $props();

  import { resolve } from '$app/paths';
   


</script>

<div class="container mx-auto p-4 mt-10">
<div>

    
    <h1 class="pb-5 font-bold text-xl text-center">{data.post.title} {data.post.id}</h1>
    <p class="pb-5">{data.post.body}</p>
    
    <a class="text-xl text-center font-bold" href={resolve('/')}>← Back</a>
</div>
</div>


<style>
  .container {
	max-width: 800px;
  }

 
</style>
