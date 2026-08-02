<script>
    let { pageTitle } = $props();
</script>


<div class="page-title-wrapper">
    <div class="title-container">
        <h1 class='shadow'>{pageTitle}</h1>
        <h2 class="el-title">{pageTitle}</h2>
    </div>
</div>


<style>

    .page-title-wrapper {
        background-color: hsl(0 0 0 / 0.1);
        padding: 3rem 0;
    }

    .title-container {
        display: flex;
        position: relative;
        justify-content: center;
    }

    .shadow {
        position: absolute;
        margin: 0;
        opacity: 0.15;
        top: 50%;
        transform: translate(0, -50%);
        z-index: -2;
    }

    .el-title {
        font-family: var(--font-sans);
        font-weight: 700;
        text-shadow: 0 0 10px var(--clr-light);
        margin: 0;
        position: relative;
    }

    .el-title::after {
        content: '';
        position: absolute;
        height: 120%;
        aspect-ratio: 1;
        left: 0;
        top: 50%;
        background-color: var(--clr-light);
        border-radius: var(--border-radius);
        border: 0.05em solid var(--clr-dark);
        z-index: -1;
        transform: translate(-20%, -50%);
    }

</style>