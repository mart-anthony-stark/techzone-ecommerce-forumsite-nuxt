export const state = () => ({
  phones: [
    {
      model: 'APPLE iPhone 11',
      photo: '/images/phones/1.svg',
      rating: 4,
      priceStr: '₱ 34,990.00',
      price: 34990.0,
      specs: ['4GB RAM', '64/128/256GB ROM', 'A13 Bionic', '4G Hexa Core'],
      description:
        'The iPhone 11 has an edge-to-edge display with slim bezels and no Home button, adopting a notch at the top for the TrueDepth camera system.',
      link: '/phone/0',
    },
    {
      model: 'SAMSUNG Galaxy A72',
      photo: '/images/phones/2.svg',
      rating: 5,
      priceStr: '₱ 23,990.00',
      price: 23990.0,
      specs: ['6.7-inch Screen', '8GB RAM', '256GB Storage'],
      description: `The Samsung Galaxy A72 is a good-looking phone, but so are others at around this price, which makes any of them a better pick. There's the Mi 10T Pro and OnePlus 8T, both of which deliver better gaming performance and cameras.`,
      link: '/phone/1',
    },
  ],
  laptops: [
    {
      model: 'ACER Aspire 3 A314-22-R4U5',
      photo: '/images/laptops/1.svg',
      rating: 4,
      priceStr: '₱ 26,999.00',
      price: 26999.0,
      specs: [
        'Charcoal Black',
        'AMD Ryzen™ 5 3500U quad-core processor',
        '4GB RAM',
        '1TB + 128 SSD',
        '14″',
        'AMD Radeon™ Vega 8 Mobile Graphics',
        'WIN10-2-2-0',
      ],
      description:
        'Acer Aspire 3 A314-22-R4U5-Black AMD Ryzen 5 3500U / 4GB / 128GB SSD + 1TB HDD / 14 Display / AMD Radeon Vega 8 Mobile Graphics / Windows 10',
      link: '/laptop/0',
    },
    {
      model: 'ACER Aspire 3 A315-57G-59HR',
      photo: '/images/laptops/2.svg',
      rating: 3,
      priceStr: '₱ 37,999',
      price: 37999.0,
      specs: [
        'Windows 10/Home',
        'Intel Core i5-1035G1 Processor 1.00 GHz 6M Cache, up to 3.60 GHz',
        '4GB DDR4/256GB SSD + 1 TB HDD/MX330 2GB',
      ],
      description:
        'Home Computers Notebooks & Laptops Acer Aspire 3 A315-57G-59HR ( Charcoal Black) Core-i5 10th Gen.',
      link: '/laptop/1',
    },
  ],
  tablets: [
    {
      model: 'AMAZON Fire HD 10"',
      photo: '/images/tablets/1.svg',
      rating: 4,
      priceStr: '₱ 9,587.68',
      price: 9587.68,
      specs: [
        'Android 9.0 (Pie), Fire OS 7',
        'Octa-core (4x2.0 GHz Cortex-A73 & 4x2.0 GHz Cortex-A53)',
        '32GB 2GB RAM, 64GB 2GB RAM',
        '2 MP camera',
        'Wi-Fi 802.11 a/b/g/n/ac, dual-band',
      ],
      description:
        'Fast and responsive - powerful octa-core processor and 3 GB RAM. 50- more RAM than previous generation.',
      link: '/tablet/0',
    },
    {
      model: 'APPLE iPad 8 10.2" (2020) Wi-Fi',
      photo: '/images/tablets/2.svg',
      rating: 5,
      priceStr: '₱ 19,990.00',
      price: 19990.0,
      specs: [
        'iPadOS 14, upgradable to iPadOS 15.1',
        'Apple A12 Bionic (7 nm)',
        'Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)',
        'Apple GPU (4-core graphics)',
        '32GB 3GB RAM, 128GB 3GB RAM',
      ],
      description: `Also known as Apple iPad 8th Gen, Apple iPad (8th generation.
      Wi-Fi + Cellular & GPS: A2428, A2429 (Global), A2430 (China). Wi-Fi only, w/o GPS: A2270 (Global)`,
      link: '/tablet/1',
    },
  ],
  accessories: [
    {
      model: 'ANKER SoundCore Space NC B2B',
      photo: '/images/accessories/1.svg',
      rating: 5,
      priceStr: '₱ 7,995.00',
      price: 7995.0,
      specs: ['40 mm drivers'],
      description: `Hybrid active noise cancellation technology blocks out up to 93% of low-frequency engine noise and up to 96% of high-frequency sounds such as voices and vehicle horns.
      Simply tap the button on the right ear-cup to effortlessly answer calls. A built-in microphone is equipped with cVc noise cancelling technology suppress ambient noise and elevate quality.`,
      link: '/accessorie/0',
    },
    {
      model: 'DELUX M556BU Entry Level Gaming Mouse Cool Light',
      photo: '/images/accessories/2.svg',
      rating: 4,
      priceStr: '₱ 899.00',
      price: 899.0,
      specs: ['HXSJ T90', '3 Modes BT', '3.0 + 5.0 + 2.4G'],
      description:
        'Wireless Chargable RGB Lighting Color Mouse Mice for Game Office with Adjustable 800-3200 5 Level DPI',
      link: '/accessorie/1',
    },
  ],
})
