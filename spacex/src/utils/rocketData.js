export const testRockets = [
  {
    height: {
      meters: 22.25,
      feet: 73,
    },
    diameter: {
      meters: 1.68,
      feet: 5.5,
    },
    mass: {
      kg: 30146,
      lb: 66460,
    },
    first_stage: {
      thrust_sea_level: {
        kN: 420,
        lbf: 94000,
      },
      thrust_vacuum: {
        kN: 480,
        lbf: 110000,
      },
      reusable: false,
      engines: 1,
      fuel_amount_tons: 44.3,
      burn_time_sec: 169,
    },
    second_stage: {
      thrust: {
        kN: 31,
        lbf: 7000,
      },
      payloads: {
        composite_fairing: {
          height: {
            meters: 3.5,
            feet: 11.5,
          },
          diameter: {
            meters: 1.5,
            feet: 4.9,
          },
        },
        option_1: 'composite fairing',
      },
      reusable: false,
      engines: 1,
      fuel_amount_tons: 3.38,
      burn_time_sec: 378,
    },
    engines: {
      isp: {
        sea_level: 267,
        vacuum: 304,
      },
      thrust_sea_level: {
        kN: 420,
        lbf: 94000,
      },
      thrust_vacuum: {
        kN: 480,
        lbf: 110000,
      },
      number: 1,
      type: 'merlin',
      version: '1C',
      layout: 'single',
      engine_loss_max: 0,
      propellant_1: 'liquid oxygen',
      propellant_2: 'RP-1 kerosene',
      thrust_to_weight: 96,
    },
    landing_legs: {
      number: 0,
      material: null,
    },
    payload_weights: [
      {
        id: 'leo',
        name: 'Low Earth Orbit',
        kg: 450,
        lb: 992,
      },
    ],
    flickr_images: [
      'https://imgur.com/DaCfMsj.jpg',
      'https://imgur.com/azYafd8.jpg',
    ],
    name: 'Falcon 1',
    type: 'rocket',
    active: false,
    stages: 2,
    boosters: 0,
    cost_per_launch: 6700000,
    success_rate_pct: 40,
    first_flight: '2006-03-24',
    country: 'Republic of the Marshall Islands',
    company: 'SpaceX',
    wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
    description:
      'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    id: '5e9d0d95eda69955f709d1eb',
  },
  {
    height: {
      meters: 70,
      feet: 229.6,
    },
    diameter: {
      meters: 3.7,
      feet: 12,
    },
    mass: {
      kg: 549054,
      lb: 1207920,
    },
    first_stage: {
      thrust_sea_level: {
        kN: 7607,
        lbf: 1710000,
      },
      thrust_vacuum: {
        kN: 8227,
        lbf: 1849500,
      },
      reusable: true,
      engines: 9,
      fuel_amount_tons: 385,
      burn_time_sec: 162,
    },
    second_stage: {
      thrust: {
        kN: 934,
        lbf: 210000,
      },
      payloads: {
        composite_fairing: {
          height: {
            meters: 13.1,
            feet: 43,
          },
          diameter: {
            meters: 5.2,
            feet: 17.1,
          },
        },
        option_1: 'dragon',
      },
      reusable: false,
      engines: 1,
      fuel_amount_tons: 90,
      burn_time_sec: 397,
    },
    engines: {
      isp: {
        sea_level: 288,
        vacuum: 312,
      },
      thrust_sea_level: {
        kN: 845,
        lbf: 190000,
      },
      thrust_vacuum: {
        kN: 914,
        lbf: 205500,
      },
      number: 9,
      type: 'merlin',
      version: '1D+',
      layout: 'octaweb',
      engine_loss_max: 2,
      propellant_1: 'liquid oxygen',
      propellant_2: 'RP-1 kerosene',
      thrust_to_weight: 180.1,
    },
    landing_legs: {
      number: 4,
      material: 'carbon fiber',
    },
    payload_weights: [
      {
        id: 'leo',
        name: 'Low Earth Orbit',
        kg: 22800,
        lb: 50265,
      },
      {
        id: 'gto',
        name: 'Geosynchronous Transfer Orbit',
        kg: 8300,
        lb: 18300,
      },
      {
        id: 'mars',
        name: 'Mars Orbit',
        kg: 4020,
        lb: 8860,
      },
    ],
    flickr_images: [
      'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
      'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg',
      'https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg',
      'https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg',
      'https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg',
      'https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg',
    ],
    name: 'Falcon 9',
    type: 'rocket',
    active: true,
    stages: 2,
    boosters: 0,
    cost_per_launch: 50000000,
    success_rate_pct: 98,
    first_flight: '2010-06-04',
    country: 'United States',
    company: 'SpaceX',
    wikipedia: 'https://en.wikipedia.org/wiki/Falcon_9',
    description:
      'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
    id: '5e9d0d95eda69973a809d1ec',
  },
];

export default testRockets;
