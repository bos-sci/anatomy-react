import FooterNav, { NavItemsFooter } from './FooterNav';

const navItems: NavItemsFooter[] = [
  {
    title: 'Group 1',
    navItems: [
      {
        text: 'Item 1',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 2',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 3',
        href: 'docs-demo-link'
      }
    ]
  },
  {
    title: 'Group 2',
    navItems: [
      {
        text: 'Item 1',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 2',
        href: 'docs-demo-link'
      }
    ]
  },
  {
    title: 'Group 3',
    navItems: [
      {
        text: 'Item 1',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 2',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 3',
        href: 'docs-demo-link'
      }
    ]
  },
  {
    title: 'Group 4',
    navItems: [
      {
        text: 'Item 1',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 2',
        href: 'docs-demo-link'
      }
    ]
  },
  {
    title: 'Group 5',
    navItems: [
      {
        text: 'Item 1',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 2',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 2',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 2',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 2',
        href: 'docs-demo-link'
      }
    ]
  },
  {
    title: 'Group 6',
    navItems: [
      {
        text: 'Item 1',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 2',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 3',
        href: 'docs-demo-link'
      }
    ]
  },
  {
    title: 'Group 7',
    navItems: [
      {
        text: 'Item 1',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 2',
        href: 'docs-demo-link'
      }
    ]
  }
];

/* const navItems2: NavItemsFooter[] = [
  {
    navItems: [
      {
        text: 'Item 1',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 2',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 3',
        href: 'docs-demo-link'
      }
    ]
  },
  {
    navItems: [
      {
        text: 'Item 1',
        href: 'docs-demo-link'
      },
      {
        text: 'Item 2',
        href: 'docs-demo-link'
      }
    ]
  }
]; */

const Footer = () => {
  return (
    <footer className="bsds-footer">
      <FooterNav navItems={navItems} />
      {/* <hr />
      <FooterNav navItems={navItems2} /> */}
    </footer>
  );
};

export default Footer;
