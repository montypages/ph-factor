<script>
    import heroImg from '$lib/assets/phFactorLogoLarge.webp'
    import Button from '../ui/Button.svelte';
    import { goto } from '$app/navigation'
</script>

<div class="hero-wrapper">
    <div class="hero">
        <div class="hero-img">
            <img src={heroImg} alt="pH Factor Big Band">
        </div>
        <div class="hero-text">
            <h1 class="title">The most interesting</h1>
            <h1 class="title">big band in Seattle</h1>
            <Button onclick={() => goto('/listen')} btnText="Listen Now" btnColor="var(--clr-secondary-400)" />
        </div>
    </div>
</div>


<style>

    .hero-wrapper {
        display: flex;
        justify-content: center;
        height: 80svh;
    }

    .hero {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
    }

    .hero-img {
        width: 18rem;
    }

    .title {
        font-size: 3rem;
        line-height: 1;
        margin: 0;
        position: relative;
        left: -3.2rem;
    }
    
    .title:last-of-type {
        left: -1rem;
        margin-bottom: 1rem;
    }

</style>