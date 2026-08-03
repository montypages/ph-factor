<script>
    import logo from '$lib/assets/phFactorLogoLarge.webp'
    import Button from '../ui/Button.svelte';


</script>



<footer class="backdrop-blur">
    <div class="footer-grid container">
        <div class="logo">
            <a href="/"><img src={logo} alt="pH Factor Big Band"></a>
        </div>
        <div class="links">
            <h2>Links</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/listen">Listen</a></li>
                <li><a href="/calendar">Calendar</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <h3><a href="/">Facebook</a></h3>
        </div>
        <div class="contact">
            <h2>Contact</h2>
            <form action="">
                <label for="email">
                    Email
                    <input type="email" id="email" />
                </label>
                <label for="message">
                    Message
                    <textarea rows="5" id="message"></textarea>
                </label>
                <Button onclick={() => {}} btnText="Submit" btnSize="--var(--size-0)" />
            </form>
        </div>
    </div>
</footer>


<style>

    footer {
        padding: 5rem 0;
        background-color: hsl(0 0 0 / 0.7);
        color: var(--clr-light);
        margin-top: 4rem;
    }

    h2 {
        font-size: var(--size-2);
    }

    h3 {
        font-size: var(--size-1);
    }

    .footer-grid {
        display: grid;
        grid-template-areas: 
        "logo links contact";
        grid-template-columns: 200px 1fr 1fr;
        gap: 1rem;
        justify-items: center;
    }

    @media (max-width: 768px) {
        .footer-grid {
            grid-template-areas:
            "logo logo"
            "links contact";
            grid-template-columns: 1fr 1fr;
            justify-items: left;
        }
    }
    @media (max-width: 425px) {
        .footer-grid {
            grid-template-areas:
            "logo"
            "links"
            "contact";
            grid-template-columns: 1fr;
        }
    }

    .logo {
        grid-area: logo;
        justify-self: center;
    }

    .links {
        grid-area: links;
    }

    .contact {
        grid-area: contact;
        width: 100%;
    }


    
</style>