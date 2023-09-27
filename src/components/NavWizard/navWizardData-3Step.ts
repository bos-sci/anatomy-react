import { NavItemWizard } from './NavWizard';

const exampleData: NavItemWizard[] = [
  {
    title: 'Second step title',
    description: 'Optional description for this step',
    text: 'Page group 1',
    children: [
      {
        title: 'Third step title',
        text: 'Nested page group 1',
        overflowLinkText: 'See all pages',
        overflowHref: 'docs-demo-link',
        children: [
          {
            text: 'Current page',
            href: '.',
            isActive: () => true
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
          }
        ]
      },
      {
        text: 'Nested page group 2',
        title: 'Third step title',
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
    title: 'Second step title',
    description: `Optional description for this step`,
    text: 'Page group 2',
    children: [
      {
        title: 'Third step title',
        description: 'Optional description for this step',
        text: 'Nested page group 1',
        overflowHref: 'docs-demo-link',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        title: 'Third step title',
        description: 'Optional description for this step',
        text: 'Nested page group 2',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        title: 'Third step title',
        description: 'Optional description for this step',
        text: 'Nested page group 3',
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
    title: 'Second step title',
    description: 'Optional description for this step',
    text: 'Page group 3',
    children: [
      {
        title: 'Third step title',
        description: 'Optional description for this step',
        text: 'Nested page group 1',
        overflowHref: 'docs-demo-link',
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
        title: 'Third step title',
        description: 'Optional description for this step',
        text: 'Nested page group 2',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          }
        ]
      },
      {
        title: 'Third step title',
        description: 'Optional description for this step',
        text: 'Nested page group 3',
        children: [
          {
            text: 'Page 1',
            href: 'docs-demo-link'
          }
        ]
      }
    ]
  }
];

export default exampleData;
