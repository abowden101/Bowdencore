// BowdenCore — bowdencore.com · shared site JS
(function () {
    "use strict";

    /* ---------- Lead capture ---------- */
    var FORMSPREE_ID = "xqpeqgew";
    var FALLBACK_EMAIL = "info@bowdencore.com";

    /* ---------- Paid audit checkout ----------
       Paste a Stripe Payment Link for the $97 Health Check below.
       Until then, audit buttons route to the contact form. */
    var STRIPE_AUDIT_URL = "YOUR_STRIPE_PAYMENT_LINK";

    /* ---------- Header state ---------- */
    var header = document.querySelector(".site-header");
    function onScroll() { header.classList.toggle("scrolled", window.scrollY > 10); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile nav ---------- */
    var toggle = document.querySelector(".nav-toggle");
    if (toggle) {
        toggle.addEventListener("click", function () {
            var open = header.classList.toggle("nav-open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
        header.querySelectorAll(".nav-links a").forEach(function (a) {
            a.addEventListener("click", function () {
                header.classList.remove("nav-open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    /* ---------- Active nav link ---------- */
    var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".nav-links a").forEach(function (a) {
        var href = (a.getAttribute("href") || "").toLowerCase();
        if (href === page || (page === "" && href === "index.html")) {
            a.setAttribute("aria-current", "page");
        }
    });

    /* ---------- Reveal on scroll ---------- */
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

    /* ---------- Footer year ---------- */
    document.querySelectorAll("[data-year]").forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });

    /* ---------- Audit CTA buttons (any page) ---------- */
    document.querySelectorAll("[data-audit-cta]").forEach(function (btn) {
        if (STRIPE_AUDIT_URL !== "YOUR_STRIPE_PAYMENT_LINK") {
            btn.setAttribute("href", STRIPE_AUDIT_URL);
            btn.setAttribute("target", "_blank");
            btn.setAttribute("rel", "noopener");
        }
        // else: default href points at contact.html (set in markup)
    });

    /* ---------- Lead form (contact page) ---------- */
    var form = document.getElementById("lead-form");
    if (!form) return;
    var status = document.getElementById("form-status");
    var submitBtn = document.getElementById("form-submit");

    // Preselect the audit interest when arriving from an audit CTA (?interest=audit)
    try {
        var params = new URLSearchParams(location.search);
        if (params.get("interest") === "audit") {
            var msg = document.getElementById("f-msg");
            if (msg && !msg.value) msg.value = "I\u2019m interested in the $97 Network Health Check.";
        }
    } catch (e) { /* ignore */ }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("f-name").value.trim();
        var email = document.getElementById("f-email").value.trim();
        var company = document.getElementById("f-company").value.trim();
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
        var data = {};
        new FormData(form).forEach(function (v, k) { data[k] = v; });
        data.site = "bowdencore.com";
        data._subject = "New BowdenCore lead \u2014 " + data.company;

        if (FORMSPREE_ID === "xqpeqgew") {
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending\u2026";
            fetch("https://formspree.io/f/" + FORMSPREE_ID, {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify(data)
            }).then(function (res) {
                if (!res.ok) throw new Error("send failed");
                status.textContent = "Thanks \u2014 your request is in. We\u2019ll be in touch within one business day.";
                status.className = "form-status ok";
                form.reset();
            }).catch(function () {
                status.textContent = "Something went wrong sending that. Please email us directly at " + FALLBACK_EMAIL + ".";
                status.className = "form-status error";
            }).then(function () {
                submitBtn.disabled = false;
                submitBtn.textContent = "Request free assessment";
            });
            return;
        }

        // Fallback: open email client with details prefilled
        var subject = encodeURIComponent("Website inquiry \u2014 " + company);
        var body = encodeURIComponent(
            "Name: " + data.name + "\nEmail: " + data.email + "\nCompany: " + data.company +
            "\nPhone: " + (data.phone || "\u2014") +
            "\nCompany size: " + (data.company_size || "\u2014") +
            "\n\n" + (data.message || "")
        );
        window.location.href = "mailto:" + FALLBACK_EMAIL + "?subject=" + subject + "&body=" + body;
        status.textContent = "Opening your email client to send the request\u2026";
        status.className = "form-status ok";
    });
})();
