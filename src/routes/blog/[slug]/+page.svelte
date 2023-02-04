<script lang="ts">
    import type { PageData } from "./$types";
    import { onMount } from "svelte";
    import style from "$styles/style.css";
    import PostDetails from "$lib/components/PostDetails.svelte";
    import Pill from "$lib/components/Pill.svelte";

    export let data: PageData;

    let content: string = "";
    let frontmatterText: any;
    let frontmatterObject: any;
    let frontmatterLimit: number;

    let waitingRef: any;
    onMount(async () => {
        
        

        const mdit = await window.markdownit();
        const jsyaml = await window.jsyaml;

        const post = data.post;
        const text = await post.text();
        frontmatterLimit = text.lastIndexOf("---");
        frontmatterText = text.substring(0, frontmatterLimit);

        frontmatterLimit = frontmatterLimit;

        frontmatterText = text.slice(0, frontmatterLimit);

        content = text.slice(frontmatterLimit + 3);

        const estReadTime = content.length / 200


        const readTimeMinute = String(estReadTime).split('.')[0]
        const readTimeSeconds = String(estReadTime).split('.')[1]

        content = mdit.render(content);

        frontmatterObject = jsyaml.load(frontmatterText);
        
        frontmatterObject.readTimeMinute = readTimeMinute
        frontmatterObject.readTimeSeconds = readTimeSeconds

    });
</script>

<svelte:head>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/markdown-it/13.0.1/markdown-it.min.js"
        integrity="sha512-SYfDUYPg5xspsG6OOpXU366G8SZsdHOhqk/icdrYJ2E/WKZxPxze7d2HD3AyXpT7U22PZ5y74xRpqZ6A2bJ+kQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    ></script>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"
        integrity="sha512-CSBhVREyzHAjAFfBlIBakjoRUKp5h7VSweP0InR/pAJyptH7peuhCsqAI/snV+TwZmXZqoUklpXp6R6wMnYf5Q=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    ></script>

    {#if frontmatterObject != undefined}
        <meta name="title" content={frontmatterObject.title} />
        <meta name="keywords" content={frontmatterObject.tags} />
        <title>{frontmatterObject.title} - Blog</title>
    {/if}
</svelte:head>
<main>
    {#if frontmatterObject != undefined}
        <PostDetails frontmatterAttr={frontmatterObject} />
    {/if}

    <article class="content">
        {@html content}
    </article>

    {#if frontmatterObject != undefined}
        <div class="pills">
            {#each frontmatterObject.tags.split(", ") as tag}
                <Pill {tag} />
            {/each}
        </div>
    {/if}
</main>

<style>
    main {
        display: flex;
        align-content: center;
        flex-direction: column;
        flex-wrap: wrap;
    }
    article.content {
        margin-bottom: 1rem;
    }
</style>

