---
date: '2025-03-21T13:40:40+05:30'
draft: false
title: 'Pinnotes Home'
layout: hextra-home
disableSidebar: false
type: default
width: normal
---

<!-- markdownlint-disable MD033 MD034 -->
{{< hextra/hero-badge link="/notes">}}
  <div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
  Notes
  {{< icon name="arrow-circle-right" attributes="height=14" >}}
{{< /hextra/hero-badge >}}

<div class="hx-mt-6 hx-mb-6">
{{< hextra/hero-headline >}}
  Your Academic Companion: PinNotes
{{< /hextra/hero-headline >}}
</div>

<div class="hx-mb-6">
{{< hextra/hero-subtitle style="margin:.3rem 0 2rem 0">}}
  PinNotes is your go-to platform for accessing high-quality academic notes and practice questions across a wide range of subjects.
{{< /hextra/hero-subtitle >}}
</div>

<div class="hx-mb-12">
{{< hextra/hero-button text="Get Started" link="notes" >}}
</div>

<!-- <div class="hx-mt-6"></div>

{{< cards cols="2">}}
  {{< card link="/" title="Local Image" image="/images/code-2.jpg" subtitle="Raw image under static directory." >}}
  {{< card link="/" title="Local Image" image="/images/orange.jpg" subtitle="Image under assets directory, processed by Hugo." method="Resize" options="600x q80 webp" >}}
{{< /cards >}} -->

<div class="hx-mb-6"></div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="Practice Questions"
    subtitle="Environment variables are a simple way of configuring your applications, their deployment and their behaviour."
    icon="sparkles"
    link="/exercises/"
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="/images/green.jpg"
    imageClass="hx-top-[40%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(58, 56, 113, 0.1),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Blogs"
    subtitle="The Clever Cloud API reference."
    link="blog"
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-lg:hx-min-h-[340px]"
    image="/images/abstract-1.jpg"
    imageClass="hx-top-[40%] hx-left-[36px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(203, 28, 66, 0.1),hsla(0,0%,100%,0));"
  >}}
  
  <!-- {{< hextra/feature-card
    title="Extra Weekly Activites"
    subtitle="See supported languages and how to configure your app to deploy successfully"
    link="doc/applications"
  >}} -->
  <!-- {{< hextra/feature-card
    title="IITM BS Degree Graded Assignments"
    subtitle="See available add-ons such as MySQL, PostgreSQL, Redis, Mongo, Elastic..."
    link="assignments"
  >}} -->
  {{< hextra/feature-card
    title="About "
    icon="github"
    subtitle="See available add-ons such as MySQL, PostgreSQL, Redis, Mongo, Elastic..."
    link="about"
  >}}
  
{{< /hextra/feature-grid >}}

{{< home/home >}}