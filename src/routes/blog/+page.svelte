<script lang="ts">
    import style from '$styles/style.css'
    import type { PageServerData } from './$types';

    export let data: PageServerData;
    console.log(data.posts)
</script>

<h1>Hellooo</h1>
<ul>
    {#each data.posts.reverse() as post}
        <li><a href="{post}">{post}</a></li>
    {/each}
</ul>