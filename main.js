// BowdenCore v3 — bowdencore.com · shared site JS
(function () {
    "use strict";

    /* ---------- Lead capture ---------- */
    var FORMSPREE_ID = "xqpeqgew";
    var FALLBACK_EMAIL = "info@bowdencore.com";

    /* ---------- Paid Health Check checkout ----------
       Live Stripe Payment Link ($97 one-time). After payment Stripe
       redirects buyers to the Calendly booking call. */
    var STRIPE_AUDIT_URL = "https://buy.stripe.com/8x200ldwmcWb8qLgaR4ZG00";

    /* ---------- Health Check booking ----------
       Calendly 30-min booking call for the $97 Health Check. */
    var CALENDLY_AUDIT_URL = "https://calendly.com/abowden697/network-health-check-bowdencore";

    /* ---------- Header state ---------- */
    var header = document.querySelector(".site-header");
    function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 10); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile nav ---------- */
    var toggle = document.querySelector(".nav-toggle");
    if (toggle && header) {
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

    /* ---------- Count-up metrics ----------
       Final values live in the HTML, so the numbers are correct even
       with JS disabled or before the section scrolls into view.
       JS only animates from 0 once the element is actually visible. */
    var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            var el = e.target;
            cio.unobserve(el);
            var target = parseFloat(el.getAttribute("data-count") || "0");
            var suffix = el.getAttribute("data-suffix") || "";
            var prefix = el.getAttribute("data-prefix") || "";
            var dur = 1200, start = null;
            el.textContent = prefix + "0" + suffix;
            function tick(ts) {
                if (!start) start = ts;
                var p = Math.min((ts - start) / dur, 1);
                var eased = 1 - Math.pow(1 - p, 3);
                el.textContent = prefix + Math.round(target * eased) + suffix;
                if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        });
    }, { threshold: 0.5 });
    document.querySelectorAll("[data-count]").forEach(function (el) { cio.observe(el); });

    /* ---------- FAQ accordion ---------- */
    document.querySelectorAll(".faq-item").forEach(function (item) {
        var q = item.querySelector(".faq-q");
        var a = item.querySelector(".faq-a");
        if (!q || !a) return;
        q.addEventListener("click", function () {
            var open = item.classList.toggle("open");
            q.setAttribute("aria-expanded", open ? "true" : "false");
            a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
        });
    });

    /* ---------- Footer year ---------- */
    document.querySelectorAll("[data-year]").forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });

    /* ---------- Audit CTA buttons (any page) ----------
       Pay first via Stripe; fall back to Calendly, then the contact form. */
    document.querySelectorAll("[data-audit-cta]").forEach(function (btn) {
        if (STRIPE_AUDIT_URL) {
            btn.setAttribute("href", STRIPE_AUDIT_URL);
            btn.setAttribute("target", "_blank");
            btn.setAttribute("rel", "noopener");
        } else if (CALENDLY_AUDIT_URL) {
            btn.setAttribute("href", CALENDLY_AUDIT_URL);
            btn.setAttribute("target", "_blank");
            btn.setAttribute("rel", "noopener");
        }
        // else: default href points at contact.html (set in markup)
    });

    /* ---------- Calendly booking links (contact page) ---------- */
    document.querySelectorAll("[data-calendly-booking]").forEach(function (a) {
        if (CALENDLY_AUDIT_URL.indexOf("https://") === 0) {
            a.setAttribute("href", CALENDLY_AUDIT_URL);
            a.setAttribute("target", "_blank");
            a.setAttribute("rel", "noopener");
        }
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
            submitBtn.textContent = "Request the $97 Health Check";
        });
    });
})();
