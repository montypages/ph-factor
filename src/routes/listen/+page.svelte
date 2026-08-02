<script>
	import PageTitle from '$lib/components/layout/PageTitle.svelte';
</script>

<PageTitle pageTitle="Listen" />

<section class="album">
	<div class="container album-grid backdrop-blur box">
		<h2 class="album-title">In Case of Emergency: Break Glass</h2>
		<div class="player">
            <iframe
                title="In Case of Emergency: Break Glass by pH Factor Big Band"
                style="border: 0; width: 350px; height: 621px;"
                src="https://bandcamp.com/EmbeddedPlayer/album=130969494/size=large/bgcol=333333/linkcol=4ec5ec/transparent=true/"
                seamless
                ><a href="https://phfactorbigband.bandcamp.com/album/in-case-of-emergency-break-glass"
                    >In Case of Emergency: Break Glass by pH Factor</a
                ></iframe
            >
        </div>
		<div class="copy">
			<p>Directeor: Paul Harshman</p>

			<p>Saxophones: Jory Tindall, Brian Bermudez, Brian Lawrence, Alan Lund</p>

			<p>Trumpets: Dennis Haldane, Paul Harshman, Hannah Mowry, Mat Montgomery</p>

			<p>Trombones: Terry Freeman, Todd Nordling, Dan Bolender, Grant Ausley</p>

			<p>Rhythm: Emily Cheever (pn), Jacob Yackshaw (bs), Ed Littlefield (dr)</p>

			<p>Guest Artist: Allen Vizzutti (tr), 3</p>

			<p>Produced by Mat Montgomery</p>
		</div>
	</div>
</section>

<section class="album">
	<div class="container album-grid backdrop-blur box">
		<h2 class="album-title">The Music of Mat Montgomery</h2>
		<div class="player">
            <iframe
                title="The Music of Mat Montgomery by pH Factor Big Band"
                style="border: 0; width: 350px; height: 654px;"
                src="https://bandcamp.com/EmbeddedPlayer/album=3068925089/size=large/bgcol=333333/linkcol=4ec5ec/transparent=true/"
                seamless
                ><a href="https://phfactorbigband.bandcamp.com/album/the-music-of-mat-montgomery"
                    >The Music of Mat Montgomery by pH Factor</a
                ></iframe
            >
        </div>
		<div class="copy">
			<p>Director: Paul Harshman</p>

			<p>Reeds: Jory Tindall, Kathy Kronmal, Brian Bermudez, Adam Rupert, Alan Lund</p>

			<p>Bones: Terry Freeman, Todd Nordling/Randy Ruback, Jamie Paulson, Grant Ausley</p>

			<p>Trumpets: Dennis Haldane, Eric Jellison, Thomas Morgan, Mat Montgomery</p>

			<p>Rhythm: Jacob Yackshaw, Bass, Ed Littlefield, Drums, Emily Cheever, Piano</p>

			<p>Recorded at Avast Studios in Seattle, WA</p>
			<p>Engineered by Adam Burd</p>
			<p>Mixed by Adam Burd and Mat Montgomery</p>
			<p>Mastered at Black Belt Mastering by Levi Seitz</p>
			<p>Cover Art by Michelle Poole</p>
		</div>
	</div>
</section>

<style>
	.album {
		margin: 7rem 0;
	}

	.album h2 {
		font-size: var(--size-2);
        margin: 0;
        position: relative;
        z-index: 1;
	}

	.copy p {
		font-size: var(--size--1);
	}

	.album-grid {
        width: min(800px, 90%);
		display: grid;
		grid-template-areas:
			'title title'
			'player copy';
        grid-template-columns: auto 1fr;

	}

    @media (max-width: 768px) {
        .album-grid {
            grid-template-areas: 
            "title"
            "player"
            "copy";
        }

        .player {
            justify-self: center;
        }
    }

	.album-title {
		grid-area: title;
	}

	.player {
		grid-area: player;
        border-radius: 0.5rem;
        overflow: clip;
	}

	.copy {
		grid-area: copy;
	}
</style>
