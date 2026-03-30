<template>
  <footer class="mt-20 px-4 sm:px-6 lg:mt-24 lg:px-16">
    <hr class="border-text-secondary-gray-2" />
    <div
      class="relative overflow-hidden bg-black px-4 py-8 sm:px-6 md:px-8 lg:px-16"
    >
      <NuxtImg
        :src="MainFooter"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute -left-[4rem] top-8 hidden h-72 w-72 object-contain lg:block"
        width="288"
        height="288"
        loading="lazy"
        decoding="async"
        format="webp"
      />
      <NuxtImg
        :src="LightFooter"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute -right-6 -top-14 hidden h-72 w-72 object-contain lg:block"
        width="288"
        height="288"
        loading="lazy"
        decoding="async"
        format="webp"
      />

      <div class="relative z-10 pt-2 lg:pt-5 lg:pr-8">
        <div
          class="flex flex-col items-start gap-6 pb-6 text-left lg:flex-row lg:items-center lg:justify-between"
        >
          <NuxtImg
            src="/images/MadarLogo.png"
            alt="Madar company logo"
            class="h-14 w-auto object-contain sm:h-16"
            width="160"
            height="64"
            loading="lazy"
            decoding="async"
            format="webp"
          />
          <nav
            class="flex flex-wrap items-center justify-start gap-4 font-medium text-text-secondary-gray-4 sm:gap-5"
          >
            <NuxtLink to="/#home" class="footer-nav-link">Home</NuxtLink>
            <NuxtLink to="/services" class="footer-nav-link">Services</NuxtLink>
            <NuxtLink to="/about-us" class="footer-nav-link">About Us</NuxtLink>
            <NuxtLink to="/portfolio" class="footer-nav-link"
              >Portfolio</NuxtLink
            >
          </nav>

          <div
            class="flex items-center gap-2 rounded-xl border border-black-gradient-2 bg-white/5 px-4 py-2 sm:gap-3 sm:px-6 sm:py-3"
          >
            <NuxtLink
              to="https://www.facebook.com/profile.php?id=61555600907406"
              target="_blank"
              class="footer-social"
              aria-label="Facebook"
            >
              <NuxtImg
                :src="FacebookSecondary"
                alt=""
                class="h-6 w-6 object-contain"
                width="24"
                height="24"
                loading="lazy"
                decoding="async"
              />
            </NuxtLink>
            <NuxtLink
              to="https://x.com/lahw_279"
              target="_blank"
              class="footer-social"
              aria-label="Twitter"
            >
              <NuxtImg
                :src="TwitterSecondary"
                alt=""
                class="h-6 w-6 object-contain"
                width="24"
                height="24"
                loading="lazy"
                decoding="async"
              />
            </NuxtLink>
            <NuxtLink
              to="https://www.linkedin.com/company/madar26/"
              target="_blank"
              class="footer-social"
              aria-label="LinkedIn"
            >
              <NuxtImg
                :src="LinkedinSecondary"
                alt=""
                class="h-6 w-6 object-contain"
                width="24"
                height="24"
                loading="lazy"
                decoding="async"
              />
            </NuxtLink>
          </div>
        </div>

        <div
          class="mt-5 flex flex-col gap-5 text-text-secondary-gray-4 font-normal lg:flex-row lg:items-center lg:justify-between lg:pl-10"
        >
          <div
            class="flex flex-col items-start gap-3 text-base font-normal sm:flex-row sm:items-center sm:gap-8 lg:text-lg"
          >
            <a
              href="mailto:madartech26@gmail.com"
              class="inline-flex items-center gap-2 font-barlow hover:text-primary transition-colors"
            >
              <NuxtImg
                :src="email"
                alt=""
                class="h-6 w-6 object-contain"
                width="24"
                height="24"
                loading="lazy"
                decoding="async"
              />
              contact@Madar.io
            </a>
            <a
              href="tel:+201014767027"
              class="inline-flex items-center gap-2 font-barlow hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <NuxtImg
                :src="phone"
                alt=""
                class="h-6 w-6 object-contain"
                width="24"
                height="24"
                loading="lazy"
                decoding="async"
              />
              +201014767027
            </a>
          </div>

          <div
            class="flex items-center justify-start gap-6 text-base font-normal sm:gap-10 lg:pr-8 lg:text-lg"
          >
            <NuxtLink
              to="/privacy-policy"
              class="text-text-secondary-gray-3 font-barlow"
              >Privacy Policy</NuxtLink
            >
            <NuxtLink
              to="/terms-of-service"
              class="text-text-secondary-gray-3 font-barlow"
              >Terms of Service</NuxtLink
            >
          </div>
        </div>

        <p
          class="mt-6 text-left font-normal text-base text-text-secondary-gray-3 font-barlow lg:text-center lg:text-lg"
        >
          © 2026 Madar. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import MainFooter from "~/assets/icons/main-footer.svg";
import LightFooter from "~/assets/icons/light-footer.svg";
import FacebookSecondary from "~/assets/icons/facebook-secondary.svg";
import TwitterSecondary from "~/assets/icons/twitter-secondary.svg";
import LinkedinSecondary from "~/assets/icons/linkedin-secondary.svg";
import phone from "~/assets/icons/phone.svg";
import email from "~/assets/icons/mail.svg";
</script>
<style scoped>
.footer-social {
  height: 48px;
  width: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: linear-gradient(
    180deg,
    var(--color-black-gradient-4) 0%,
    var(--color-black-gradient-3) 100%
  );
  color: #fff;
  transition: all 0.25s ease;
}

.footer-social:hover {
  border-color: rgba(0, 131, 201, 0.7);
  color: #0083c9;
  box-shadow: 0 0 16px rgba(0, 131, 201, 0.35);
}

.footer-nav-link {
  color: #bbb;
  transition: color 0.2s ease;
}

.footer-nav-link:hover {
  color: #0083c9;
}

.footer-nav-link:active {
  color: #1d72d5;
}

@media (min-width: 640px) {
  .footer-social {
    height: 56px;
    width: 56px;
  }
}

@media (min-width: 1024px) {
  .footer-social {
    height: 64px;
    width: 64px;
  }
}
</style>
