<script lang="ts">
    import { onMount } from "svelte";
    interface Frontmatter {
        title: string;
        date: Date;
        tags: string;
        monthName: string;
        readTimeMinute: string;
        readTimeSeconds: string;
        
        split(arg: string): string;

    }
    export let frontmatterAttr: Frontmatter;

    onMount(async() => {
        
        switch (await frontmatterAttr.date.getMonth()) {
            case 0:
                frontmatterAttr.monthName = "January";
            case 1:
                frontmatterAttr.monthName = "February";
                break;
            case 2:
                frontmatterAttr.monthName = "March";
                break;
            case 3:
                frontmatterAttr.monthName = "April";
                break;
            case 4:
                frontmatterAttr.monthName = "May";
                break;
            case 5:
                frontmatterAttr.monthName = "June";
                break;
            case 6:
                frontmatterAttr.monthName = "July";
                break;
            case 7:
                frontmatterAttr.monthName = "August";
                break;
            case 8:
                frontmatterAttr.monthName = "September";
                break;
            case 9:
                frontmatterAttr.monthName = "October";
                break;
            case 10:
                frontmatterAttr.monthName = "November";
                break;
            case 11:
                frontmatterAttr.monthName = "December";
                break;
            default:
                frontmatterAttr.monthName = "January";
                break;
            }
        

    })
</script>

<div>
    {#if frontmatterAttr != undefined}
        <h1>{frontmatterAttr.title}</h1>
        <div class="postinfo">

            
            <h3>{frontmatterAttr.date.getDay()}th of {frontmatterAttr.monthName}, {frontmatterAttr.date.getFullYear()}  &#183;  {frontmatterAttr.readTimeMinute} min read</h3>
            
            
        </div>
    {/if}
</div>

<style>
    .postinfo {
        display: flex;
        align-items: center;
    }
</style>
