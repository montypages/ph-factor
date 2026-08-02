<script>
	import Button from "./Button.svelte";


</script>


<div class="container copy backdrop-blur">
    <form action="">
        <label for="name">
            Name
            <input type="text" name="name" id="name">
        </label>
        <label for="email">
            Email
            <input type="email" name="email" id="email">
        </label>
        <label for="message">
            Message
            <textarea name="message" id="message" rows="6"></textarea>
        </label>
        <Button onclick={() => {}} btnText="Send" btnColor="var(--clr-primary)" btnSize="var(--size-0)" />
    </form>
</div>



<style>


</style>