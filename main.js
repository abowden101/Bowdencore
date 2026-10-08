// BowdenCore — bowdencore.com
// Lead capture: set your Formspree form ID below (free at formspree.io).
// Until then, submissions open the visitor's email client addressed to us.
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";
const FALLBACK_EMAIL = "info@bowdencore.com";

(function () {
    "use strict";

    // Reveal-on-scroll
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add("in");
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // Header shadow on scroll
    const header = document.querySelector(".site-header");
    addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 10), { passive: true });

    // Lead form
    const form = document.getElementById("lead-form");
    if (!form) return;
    const status = document.getElementById("form-status");
    const submitBtn = document.getElementById("form-submit");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("f-name").value.trim();
        const email = document.getElementById("f-email").value.trim();
        const company = document.getElementById("f-company").value.trim();
        if (!name || !email || !company) {
            status.textContent = "Please fill in your name, work email, and company.";
            status.className = "form-status error";
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            status.textContent = "That email address doesn\u2019t look right \u2014 mind checking it?";
            status.className = "form-status error";
            return;
        }
        const data = Object.fromEntries(new FormData(form).entries());

        if (FORMSPREE_ID === "YOUR_FORMSPREE_ID") {
            // Fallback: open email client with the details prefilled
            const subject = encodeURIComponent("Free assessment request \u2014 " + company);
            const body = encodeURIComponent(
                "Name: " + data.name + "\nEmail: " + data.email + "\nCompany: " + data.company +
                "\nPhone: " + (data.phone || "\u2014") +
                "\nCompany size: " + (data.company_size || "\u2014") +
                "\n\n" + (data.message || "")
            );
            window.location.href = "mailto:" + FALLBACK_EMAIL + "?subject=" + subject + "&body=" + body;
            status.textContent = "Opening your email client to send the request\u2026";
            status.className = "form-status ok";
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending\u2026";
        try {
            const res = await fetch("https://formspree.io/f/" + FORMSPREE_ID, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error("send failed");
            status.textContent = "Thanks \u2014 your request is in. We\u2019ll be in touch within one business day.";
            status.className = "form-status ok";
            form.reset();
        } catch (err) {
            status.textContent = "Something went wrong sending that. Please email us directly at " + FALLBACK_EMAIL + ".";
            status.className = "form-status error";
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Request free assessment";
        }
    });
})();
