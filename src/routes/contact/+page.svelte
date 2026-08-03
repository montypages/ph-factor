<script>
    import PageTitle from "$lib/components/layout/PageTitle.svelte";
    import ContactForm from "$lib/components/ui/ContactForm.svelte";
</script>

<PageTitle pageTitle="Contact" />

<p>We want to hear from you!</p>

<div class="margin-top-bottom">
    <ContactForm btnColor="var(--clr-secondary)" />
</div>

<style>
    p {
        text-align: center;
    }
</style>