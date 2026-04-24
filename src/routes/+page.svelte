<script lang="ts">

  const { data } = $props();

</script>
<div class="container mx-auto p-4 bg-black">
<h1 class="text-4xl font-bold mb-4 text-white py-4">Blog Posts</h1>


{#each data.posts.slice(0, 5) as post (post.id)}
  <div class="bg-white/10 text-white border border-white/20 rounded-lg p-4 my-4 backdrop-blur-lg shadow-lg">
  <p class="text-sm font-light font-serif">Post ID: {post.id}</p>
      <h1 class="text-lg font-bold font-mono my-3">{post.title.substring(0,50)}</h1>
    
	  <div>

		<p>{post.body.substring(0, 100)}...</p>

	  </div>
  </div>
{/each}

</div>

<style>
  .container {
	max-width: 800px;
  }
 
</style>

