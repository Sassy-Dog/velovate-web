import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Pricing } from '../components/Pricing';
import { CTA } from '../components/CTA';

export default function Index() {
  return (
    <div>
      <Hero />
      <Features />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <Pricing />
      <CTA />
    </div>
  );
}
