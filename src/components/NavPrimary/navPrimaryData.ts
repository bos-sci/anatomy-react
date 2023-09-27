import { NavItemPrimary } from './NavPrimary';

const basePath = '';

export const utilityData = [
  {
    text: 'Page 1',
    href: 'docs-demo-link'
  },
  {
    text: 'Page 2',
    href: 'docs-demo-link'
  },
  {
    text: 'Page 3',
    href: 'docs-demo-link'
  },
  {
    text: 'Dropdown',
    children: [
      {
        text: 'Action 1',
        href: 'docs-demo-link'
      },
      {
        text: 'Action 2',
        href: 'docs-demo-link'
      },
      {
        text: 'Action 3',
        href: 'docs-demo-link'
      },
      {
        text: 'Action 4',
        href: 'docs-demo-link'
      },
      {
        text: 'Action 5',
        href: 'docs-demo-link'
      },
      {
        text: 'Action 6',
        href: 'docs-demo-link'
      },
      {
        text: 'Action 7',
        href: 'docs-demo-link'
      }
    ]
  }
];

export const contextualUtility = [
  {
    text: 'News',
    href: 'docs-demo-link'
  },
  {
    text: 'Careers',
    href: 'docs-demo-link'
  },
  {
    text: 'Investors',
    href: 'docs-demo-link'
  },
  {
    text: 'Region Selector',
    children: [
      {
        text: 'Argentina',
        href: 'docs-demo-link'
      },
      {
        text: 'Brazil',
        href: 'docs-demo-link'
      },
      {
        text: 'Chile',
        href: 'docs-demo-link'
      },
      {
        text: 'China',
        href: 'docs-demo-link'
      },
      {
        text: 'Columbia',
        href: 'docs-demo-link'
      },
      {
        text: 'Deutschland',
        href: 'docs-demo-link'
      },
      {
        text: 'Europe',
        href: 'docs-demo-link'
      },
      {
        text: 'India',
        href: 'docs-demo-link'
      },
      {
        text: 'Japan',
        href: 'docs-demo-link'
      },
      {
        text: 'Korea',
        href: 'docs-demo-link'
      },
      {
        text: 'Malaysia',
        href: 'docs-demo-link'
      },
      {
        text: 'Mexico',
        href: 'docs-demo-link'
      },
      {
        text: 'Peru',
        href: 'docs-demo-link'
      },
      {
        text: 'Spain',
        href: 'docs-demo-link'
      },
      {
        text: 'United States',
        href: 'docs-demo-link'
      }
    ]
  }
];

export const simpleData: NavItemPrimary[] = [
  {
    text: 'Page 1',
    href: 'docs-demo-link'
  },
  {
    text: 'Page 2',
    href: 'docs-demo-link'
  },
  {
    text: 'Current page',
    href: '/',
    isActive: () => true
  },
  {
    text: 'Page 4',
    href: 'docs-demo-link'
  }
];

export const intermediateData: NavItemPrimary[] = [
  {
    text: 'Page 1',
    href: 'docs-demo-link'
  },
  {
    text: 'Navigation section',
    description:
      'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    altLinkText: 'See all pages',
    altHref: 'docs-demo-link',
    children: [
      {
        text: 'Child page 1',
        href: 'docs-demo-link'
      },
      {
        text: 'Current page',
        href: '.',
        isActive: () => true
      },
      {
        text: 'Child page 3',
        href: 'docs-demo-link'
      },
      {
        text: 'Child page 4',
        href: 'docs-demo-link'
      },
      {
        text: 'Child page 5',
        href: 'docs-demo-link'
      },
      {
        text: 'Child page 6',
        href: 'docs-demo-link'
      },
      {
        text: 'Child page 7',
        href: 'docs-demo-link'
      },
      {
        text: 'Child page 8',
        href: 'docs-demo-link'
      },
      {
        text: 'Child page 9',
        href: 'docs-demo-link'
      },
      {
        text: 'Child page 10',
        href: 'docs-demo-link'
      },
      {
        text: 'Child page 11',
        href: 'docs-demo-link'
      },
      {
        text: 'Child page 12',
        href: 'docs-demo-link'
      },
      {
        text: 'Child page 13',
        href: 'docs-demo-link'
      },
      {
        text: 'Child page 14',
        href: 'docs-demo-link'
      },
      {
        text: 'Child page 15',
        href: 'docs-demo-link'
      },
      {
        text: 'Child page 16',
        href: 'docs-demo-link'
      }
    ]
  },
  {
    text: 'Page 2',
    href: 'docs-demo-link'
  },
  {
    text: 'Page 3',
    href: 'docs-demo-link'
  }
];

export const complexData: NavItemPrimary[] = [
  {
    text: 'Navigation section 1',
    description:
      'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    altHref: 'docs-demo-link',
    altLinkText: 'All pages',
    children: [
      {
        text: 'Page group 1',
        description:
          'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          },
          {
            text: 'Current page',
            href: '.',
            isActive: () => true
          },
          {
            text: 'Page 3',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 4',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 5',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 6',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 7',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 8',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 9',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 10',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 11',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 12',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 13',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 14',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page group 2',
        altLinkText: 'See all pages',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page group 3',
        altLinkText: 'See all pages',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page group 4',
        altLinkText: 'See all pages',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          }
        ]
      }
    ]
  },
  {
    text: 'Navigation section 2',
    description: `Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.`,
    altHref: 'docs-demo-link',
    altLinkText: 'All pages',
    children: [
      {
        text: 'Page group 1',
        description:
          'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Nested page group 1',
            altLinkText: 'See all pages',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                href: 'docs-demo-link'
              },
              {
                text: 'Page 2',
                href: 'docs-demo-link'
              },
              {
                text: 'Page 3',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Nested page group 2',
            altLinkText: 'See all pages',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Nested page group 3',
            altLinkText: 'See all pages',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Nested page group 4',
            altLinkText: 'See all pages',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Nested page group 5',
            altLinkText: 'See all pages',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: `Nested page group 6`,
            altLinkText: 'See all pages',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: `Nested page group 7`,
            altLinkText: 'See all pages',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Nested page group 8',
            altLinkText: 'See all pages',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Nested page group 9',
            altLinkText: 'See all pages',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Page 1',
                href: 'docs-demo-link'
              }
            ]
          }
        ]
      },
      {
        text: 'Page group 2',
        description:
          'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page group 3',
        description:
          'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          }
        ]
      }
    ]
  },
  {
    text: 'Navigation section 3',
    description:
      'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    altHref: 'docs-demo-link',
    altLinkText: 'All pages',
    children: [
      {
        text: 'Page group 1',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 2',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 3',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 4',
            href: 'docs-demo-link'
          },
          {
            text: 'Page 5',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page group 2',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page group 3',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page group 4',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all pages',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Page 1',
        href: 'external-url-here'
      }
    ]
  }
];

export const contextualComplex: NavItemPrimary[] = [
  {
    text: 'For healthcare professionals',
    description:
      'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    altHref: 'docs-demo-link',
    altLinkText: 'All healthcare professionals information',
    children: [
      {
        text: 'Medical specialties',
        description:
          'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all treatments',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Electrophysiology',
            href: 'docs-demo-link'
          },
          {
            text: 'Female Pelvic Medicine',
            href: 'docs-demo-link'
          },
          {
            text: 'Gastroenterology',
            href: 'docs-demo-link'
          },
          {
            text: 'Gastrointestinal Surgery',
            href: 'docs-demo-link'
          },
          {
            text: 'Gynecology',
            href: 'docs-demo-link'
          },
          {
            text: 'Interventional Cardiology',
            href: 'docs-demo-link'
          },
          {
            text: 'Interventional Radiology',
            href: 'docs-demo-link'
          },
          {
            text: 'Neurological Surgery',
            href: 'docs-demo-link'
          },
          {
            text: 'Orthopedic Surgery',
            href: 'docs-demo-link'
          },
          {
            text: 'Pain Medicine',
            href: 'docs-demo-link'
          },
          {
            text: 'Pulmonology',
            href: 'docs-demo-link'
          },
          {
            text: 'Structural Heart Valve',
            href: 'docs-demo-link'
          },
          {
            text: 'Urology',
            href: 'docs-demo-link'
          },
          {
            text: 'Vascular Surgery',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Healthcare solutions',
        altLinkText: 'See all healthcare solutions',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Child item',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Professional education',
        altLinkText: 'See all professional education',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Child item',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Customer support',
        altLinkText: 'See all customer support',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Child item',
            href: 'docs-demo-link'
          }
        ]
      }
    ]
  },
  // PTC
  {
    text: 'For patients & caregivers',
    description: `Find the information you need, whether you've been diagnosed with a health condition, have an implanted device, or need support.`,
    altHref: 'docs-demo-link',
    altLinkText: 'All patients & caregivers information',
    children: [
      {
        text: 'Treatments',
        description: 'Devices, procedures, and therapies',
        altLinkText: 'See all treatments',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Airway & breathing',
            altLinkText: 'See all airway & breathing',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Asthma',
                href: basePath + 'docs-demo-link' // Used to demo the active style
              },
              {
                text: 'Last level',
                href: 'docs-demo-link'
              },
              {
                text: 'Last level',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Cancer',
            altLinkText: 'See all cancer',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Digestion & nutrition',
            altLinkText: 'See all digestion & nutrition',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Heart & vascular',
            altLinkText: 'See all heart & vascular',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Kidneys',
            altLinkText: 'See all kidneys',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: `Men's health`,
            altLinkText: "See all men's health",
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: `Women's health`,
            altLinkText: "See all women's health",
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Neurological conditions',
            altLinkText: 'See all neurological conditions',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                href: 'docs-demo-link'
              }
            ]
          },
          {
            text: 'Pain management',
            altLinkText: 'See all pain management',
            altHref: 'docs-demo-link',
            children: [
              {
                text: 'Last level',
                href: 'docs-demo-link'
              }
            ]
          }
        ]
      },
      {
        text: 'Device support',
        description: 'Device setup, user manuals, and troubleshooting',
        altLinkText: 'See all device support',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Child item 1',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Contact us',
        description: 'Call one of our dedicated customer service centers or send us and email',
        altLinkText: 'See all contact us',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Child item 2',
            href: 'docs-demo-link'
          }
        ]
      }
    ]
  },
  // About BSC
  {
    text: 'About Boston Scientific',
    description:
      'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus. Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
    altHref: 'docs-demo-link',
    altLinkText: 'All Boston Scientific information',
    children: [
      {
        text: 'About',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Businesses',
            href: 'docs-demo-link'
          },
          {
            text: 'Leadership',
            href: 'docs-demo-link'
          },
          {
            text: 'Locations',
            href: 'docs-demo-link'
          },
          {
            text: 'Awards & recognition',
            href: 'docs-demo-link'
          },
          {
            text: 'Ventures',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Citizenship',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all citizenship',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Child item',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Careers',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all careers',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Child item',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'News',
        description: 'Proin quis eros sollicitudin, hendrerit ante vel, auctor metus.',
        altLinkText: 'See all news',
        altHref: 'docs-demo-link',
        children: [
          {
            text: 'Child item',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        text: 'Investors',
        href: 'external-url-here'
      }
    ]
  }
];
