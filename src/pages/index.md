---
title: 'RPublishing LCA'
description: ''
layout: '@/layouts/MainLayout.astro'
setup: |
  import {Markdown} from 'astro/components';
  import FooterLayout from '@/layouts/FooterLayout.astro';

  import BannerSection from '@/sections/banner/BannerSection.astro';
  import Banner from '@/sections/banner/Banner.astro';

  import BulletpointsSection from '@/sections/bulletpoints/BulletpointsSection.astro';
  import MissionSection from '@/sections/mission/MissionSection.astro';
  import FeaturesSection from '@/sections/features/FeaturesSection.astro';
  import ProjectsSection from '@/sections/projects/ProjectsSection.astro';

  import BulletpointLayout from '@/sections/bulletpoints/BulletpointLayout.astro';
  import FeatureLayout from '@/sections/features/FeatureLayout.astro';

  import VideoPlayer from '@/components/VideoPlayer.svelte';
  import { Button } from "ui";
---

<BannerSection>
  <Banner>
    <span style="color: #A93226;">RChain Publishing Cooperative</span>
    ===============
    <p class="lead hero-small-text">Sample text sample text sample text sample text sample text sample text. Sample text sample text sample text sample text sample text sample text. Sample text sample text sample text sample text sample text sample text.</p>
    <p class="lead">
      <a href="#features" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
    </p>
    <Button client:only="react"></Button>
  </Banner>
  <VideoPlayer />
</BannerSection>

<BulletpointsSection>
  <BulletpointLayout delay={0} icon="assets/book.svg">
    **Sample text**
    ---------------
    Sample text sample text sample text sample text sample text sample text.
  </BulletpointLayout>

  <BulletpointLayout delay={100} icon="assets/code.svg">
    **Sample text**
    ---------------
    Sample text sample text sample text sample text sample text sample text.
  </BulletpointLayout>

  <BulletpointLayout delay={200} icon="assets/money.svg">
    **Sample text**
    ---------------
    Sample text sample text sample text sample text sample text sample text.
  </BulletpointLayout>

  <BulletpointLayout delay={300} icon="assets/wallet.svg">
    **Sample text**
    ---------------
    Sample text sample text sample text sample text sample text sample text.
  </BulletpointLayout>
</BulletPointsSection>
    
<MissionSection>
  <span style="color: #A93226;">**Sample**</span> text sample text.
  ===============
  
  <div class="lead">
    <Markdown >
      Sample text sample text sample text sample text sample text sample text.
    </Markdown>
  </div>
</MissionSection>

<FeaturesSection>
  <FeatureLayout image="assets/play.svg">
    Sample <span class="text-muted"><span style="color: #A93226;">**Text**</span> sample text.</span>
    ===============
    <Markdown >
      Sample text sample text sample text sample text sample text sample text. Sample text sample text sample text sample text sample text sample text.
    </Markdown>
  </FeatureLayout>

  ---

  <FeatureLayout image="assets/hand.svg" flip={true}>
    Sample text <span class="text-muted">sample text</span>
    ===============
    <Markdown >
      Sample text sample text sample text sample text sample text sample text. Sample text sample text sample text sample text sample text sample text.
    </Markdown>
    <a class="btn btn-primary btn-donate" href="#about">About</a>
  </FeatureLayout>

  ---

  <FeatureLayout image="assets/collab.svg">
    Sample <span class="text-muted">Text</span>
    ===============
    <Markdown >
      Sample text sample text sample text sample text sample text sample text.Sample text sample text sample text sample text sample text sample text.Sample text sample text sample text sample text sample text sample text.
    </Markdown>
  </FeatureLayout>

  ---

  <FeatureLayout image="assets/teamwork.svg" flip={true}>
      Sample text <span class="text-muted">Sample text</span>
      ===============
      <Markdown >
        - Sample text sample text sample text sample text sample text sample text.Sample text sample text sample text sample text sample text sample text.Sample text sample text sample text sample text sample text sample text.
        - Sample text sample text [sample link](https://google.com) Sample text sample text sample text sample text sample text sample text.
        - Sample text sample text sample text sample text sample text sample text. Sample text sample text sample text sample text sample text sample text.
        - Sample text sample text sample text sample text sample text sample text. Sample text sample text sample text sample text sample text sample text. Sample text sample text sample text sample text sample text sample text.
        - Sample text sample text sample text sample text sample text sample text. Sample text sample text sample text sample text sample text sample text. Sample text sample text sample text sample text sample text sample text.
      </Markdown>
  </FeatureLayout>
</FeaturesSection>


<br/><br/><br/><br/><br/>


<FooterLayout>
    copyright © 2021 RChain Cooperative All rights reserved \
    RChain is a registered trademark of RChain Cooperative
</FooterLayout>