'use client';

import Image from 'next/image';
import './HeroShopifyBadge.css';

export default function HeroShopifyBadge() {
  return (
    <div className="hero-shopify-badge" aria-hidden>
      <Image
        src="/shopify-partners.png"
        alt="Shopify Partners"
        width={256}
        height={86}
        className="hero-shopify-badge__image"
      />
    </div>
  );
}
