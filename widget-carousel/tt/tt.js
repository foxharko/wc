(() => {
    let tiktokLoaded = false;

    const button = document.getElementById("foxHarkoTikTokLoadBtn");
    const loader = document.getElementById("foxHarkoTikTokLoader");
    const widget = document.getElementById("foxHarkoTikTokWidget");

    if (!button || !loader || !widget) return;

    button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (tiktokLoaded) return;
        tiktokLoaded = true;

        button.style.display = "none";
        loader.style.display = "flex";

        widget.innerHTML = `
            <blockquote
                class="tiktok-embed"
                cite="https://www.tiktok.com/@fox_harko"
                data-unique-id="fox_harko"
                data-embed-type="creator"
                style="max-width:330px; min-width:288px;">
                <section>
                    <a target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.tiktok.com/@fox_harko?refer=creator_embed">
                        @fox_harko
                    </a>
                </section>
            </blockquote>
        `;

        function showWidget() {
            loader.style.display = "none";
            widget.classList.add("show");
        }

        if (window.TikTokEmbed) {
            window.TikTokEmbed.lib.render();
            setTimeout(showWidget, 800);
            return;
        }

        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;

        script.onload = function () {
            if (window.TikTokEmbed) {
                window.TikTokEmbed.lib.render();
            }
            setTimeout(showWidget, 800);
        };

        document.body.appendChild(script);
    });
})();
