<template>
  <!-- Start block -->
  <section class="container mx-auto">
    <div class="mx-auto max-w-screen-xl px-4 pb-8 lg:px-6 lg:pb-24">
      <h2 class="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900 lg:mb-8 lg:text-3xl">
        Frequently asked questions
      </h2>
      <div class="mx-auto max-w-screen-md">
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white   text-gray-900  "
          data-inactive-classes="text-gray-500  "
        >
          <h3 id="accordion-flush-heading-1">
            <button
              type="button"
              class="flex w-full items-center justify-between border-b border-gray-200 bg-white py-5 text-left font-medium text-gray-900"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>Can I use Landwind in open-source projects?</span>
              <svg
                data-accordion-icon=""
                class="h-6 w-6 shrink-0 rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h3>
          <div id="accordion-flush-body-1" class="" aria-labelledby="accordion-flush-heading-1">
            <div class="border-b border-gray-200 py-5">
              <p class="mb-2 text-gray-500">
                Landwind is an open-source library of interactive components built on top of Tailwind CSS including
                buttons, dropdowns, modals, navbars, and more.
              </p>
              <p class="text-gray-500">
                Check out this guide to learn how to
                <a href="#" class="text-purple-600 hover:underline">get started</a> and start developing websites even
                faster with components on top of Tailwind CSS.
              </p>
            </div>
          </div>
          <h3 id="accordion-flush-heading-2">
            <button
              type="button"
              class="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
            >
              <span>Is there a Figma file available?</span>
              <svg
                data-accordion-icon=""
                class="h-6 w-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h3>
          <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
            <div class="border-b border-gray-200 py-5">
              <p class="mb-2 text-gray-500">
                Landwind is first conceptualized and designed using the Figma software so everything you see in the
                library has a design equivalent in our Figma file.
              </p>
              <p class="text-gray-500">
                Check out the <a href="#" class="text-purple-600 hover:underline">Figma design system</a> based on the
                utility classes from Tailwind CSS and components from Landwind.
              </p>
            </div>
          </div>
          <h3 id="accordion-flush-heading-3">
            <button
              type="button"
              class="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500"
              data-accordion-target="#accordion-flush-body-3"
              aria-expanded="false"
              aria-controls="accordion-flush-body-3"
            >
              <span>What are the differences between Landwind and Tailwind UI?</span>
              <svg
                data-accordion-icon=""
                class="h-6 w-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h3>
          <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
            <div class="border-b border-gray-200 py-5">
              <p class="mb-2 text-gray-500">
                The main difference is that the core components from Landwind are open source under the MIT license,
                whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and
                standalone components, whereas Tailwind UI offers sections of pages.
              </p>
              <p class="mb-2 text-gray-500">
                However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no
                technical reason stopping you from using the best of two worlds.
              </p>
              <p class="mb-2 text-gray-500">Learn more about these technologies:</p>
              <ul class="list-disc pl-5 text-gray-500">
                <li><a href="#" class="text-purple-600 hover:underline">Landwind Pro</a></li>
                <li><a href="#" class="text-purple-600 hover:underline">Tailwind UI</a></li>
              </ul>
            </div>
          </div>
          <h3 id="accordion-flush-heading-4">
            <button
              type="button"
              class="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500"
              data-accordion-target="#accordion-flush-body-4"
              aria-expanded="false"
              aria-controls="accordion-flush-body-4"
            >
              <span>What about browser support?</span>
              <svg
                data-accordion-icon=""
                class="h-6 w-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h3>
          <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
            <div class="border-b border-gray-200 py-5">
              <p class="mb-2 text-gray-500">
                The main difference is that the core components from Landwind are open source under the MIT license,
                whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and
                standalone components, whereas Tailwind UI offers sections of pages.
              </p>
              <p class="mb-2 text-gray-500">
                However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no
                technical reason stopping you from using the best of two worlds.
              </p>
              <p class="mb-2 text-gray-500">Learn more about these technologies:</p>
              <ul class="list-disc pl-5 text-gray-500">
                <li><a href="#" class="text-purple-600 hover:underline">Landwind Pro</a></li>
                <li><a href="#" class="text-purple-600 hover:underline">Tailwind UI</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End block -->
</template>

<script lang="ts" setup></script>

<style scoped></style>
