<template>
  <main ref="sectionsRoot" class="px-4 pb-0 pt-32 sm:px-8 sm:pt-36 lg:px-16 lg:pt-40">
    <section class="mx-auto w-full max-w-[1280px]">
      <SectionHeader class="[&_span]:bg-primary" align="left" label="Contact Us" title="Let's Build Your Next Project" />

      <div class="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <aside class="space-y-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div>
            <h2 class="text-xl font-semibold text-white">General Inquiries</h2>
            <p class="mt-3 text-text-secondary">For general questions about Madar:</p>
            <a href="mailto:contact@Madar.io" class="mt-1 inline-block text-primary underline underline-offset-4">contact@Madar.io</a>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white">New Business</h2>
            <p class="mt-3 text-text-secondary">Discuss your project idea or partnership opportunity:</p>
            <a href="mailto:contact@Madar.io" class="mt-1 inline-block text-primary underline underline-offset-4">contact@Madar.io</a>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white">Global Presence</h2>
            <p class="mt-3 text-text-secondary">Strategic hubs serving global clients.</p>
            <ul class="mt-4 grid grid-cols-1 gap-2 text-white sm:grid-cols-2">
              <li>- Riyadh, KSA</li>
              <li>- Dubai, UAE</li>
              <li>- Cairo, Egypt</li>
              <li>- London, UK</li>
              <li>- New York, USA</li>
              <li>- Barcelona, Spain</li>
            </ul>
          </div>
        </aside>

        <section class="rounded-3xl border border-white/10 bg-gradient-to-b from-[#020814] to-[#030a18] p-6 sm:p-8 lg:p-10">
          <h2 class="text-2xl font-semibold text-white">Contact Information</h2>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-text-secondary">
            Ready to find your perfect solution? Fill out this quick form and we will contact you soon.
          </p>

          <form class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2" @submit.prevent="submitInquiry">
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm text-white">Contact Email *</label>
              <input id="email" v-model="form.email" type="email" required class="mt-2 field-input" />
            </div>
            <div>
              <label for="firstName" class="block text-sm text-white">First Name *</label>
              <input id="firstName" v-model="form.firstName" type="text" required class="mt-2 field-input" />
            </div>
            <div>
              <label for="lastName" class="block text-sm text-white">Last Name *</label>
              <input id="lastName" v-model="form.lastName" type="text" required class="mt-2 field-input" />
            </div>
            <div class="sm:col-span-2">
              <label for="companyName" class="block text-sm text-white">Company Name *</label>
              <input id="companyName" v-model="form.companyName" type="text" required class="mt-2 field-input" />
            </div>
            <div>
              <label for="jobTitle" class="block text-sm text-white">Job Title</label>
              <input id="jobTitle" v-model="form.jobTitle" type="text" class="mt-2 field-input" />
            </div>
            <div>
              <label for="mobile" class="block text-sm text-white">Mobile</label>
              <input id="mobile" v-model="form.mobile" type="tel" class="mt-2 field-input" />
            </div>
            <div class="sm:col-span-2">
              <label for="country" class="block text-sm text-white">Country</label>
              <input id="country" v-model="form.country" type="text" class="mt-2 field-input" />
            </div>
            <div class="sm:col-span-2">
              <label for="help" class="block text-sm text-white">How can we help you? *</label>
              <textarea id="help" v-model="form.message" required rows="5" class="mt-2 field-input resize-none"></textarea>
            </div>

            <div class="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-xs text-red-400">* Required Fields</p>
              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:translate-y-[-2px] hover:bg-[#155ba8]"
              >
                Submit Inquiry
              </button>
            </div>
          </form>

          <p class="mt-8 text-xs text-text-secondary">
            Your information stays private and is only used to respond to your request.
          </p>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import SectionHeader from '~/components/ui/SectionHeader.vue'
import { useSectionScrollAnimations } from '~/composables/useSectionScrollAnimations'

const sectionsRoot = ref<HTMLElement | null>(null)

useSectionScrollAnimations(sectionsRoot)  

const form = reactive({
  email: '',
  firstName: '',
  lastName: '',
  companyName: '',
  jobTitle: '',
  mobile: '',
  country: '',
  message: '',
})

const submitInquiry = () => {
  const subject = `New inquiry from ${form.firstName} ${form.lastName}`.trim()
  const body = [
    `Email: ${form.email}`,
    `First Name: ${form.firstName}`,
    `Last Name: ${form.lastName}`,
    `Company Name: ${form.companyName}`,
    `Job Title: ${form.jobTitle || '-'}`,
    `Mobile: ${form.mobile || '-'}`,
    `Country: ${form.country || '-'}`,
    '',
    'Message:',
    form.message,
  ].join('\n')

  window.location.href = `mailto:contact@Madar.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

useSeoMeta({
  title: 'Contact Us',
  description: 'Contact Madar to discuss your project, request a proposal, or send business inquiries.',
})
</script>

<style scoped>
.field-input {
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.02);
  padding: 0.75rem 0.9rem;
  color: #fff;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field-input:focus {
  border-color: #0083c9;
  box-shadow: 0 0 0 3px rgba(0, 131, 201, 0.18);
}
</style>
