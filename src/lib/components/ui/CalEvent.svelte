<script>
    let { event } = $props();
</script>

<div class="cal-event box">
    <div class="cal-icon box">
        <h3 id="day">{event.day}</h3>
        <div class="date flex-space-between">
            <p id="month">{event.month}</p>
            <p id="date">{event.date}</p>
        </div>
    </div>
    <div class="cal-details">
        <h3>{event.name}</h3>
        <p id="address">{event.location}</p>
        <p id="dateTime">{event.eventDateTime}</p>
        <div id="details">
            {event.details}
        </div>
    </div>
</div>


<style>

    .cal-event {
        display: flex;
        align-items: center;
        gap: 1rem;
        border: 1px solid var(--clr-dark);
    }

    .cal-details h3 {
        font-size: var(--size-1);
        margin: 0;
    }

    .cal-details p {
        font-size: var(--size-0);
        margin: 0;
    }
    
    .cal-icon {
        padding: 5px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        height: 100px;
    }

    #day {
        font-family: var(--font-sans);
        font-weight: 700;
        text-align: center;
        margin: auto 0;
        width: 100px;
    }

    .date p {
        font-size: var(--size--1);
        margin: 0;
    }

</style>