import type { Meta, StoryObj } from '@storybook/react';

import ProductCard from './ProductCard';
import Tag from '../Tag/Tag';
import Image from '../Image/Image';
import { CARD_VARIANTS } from '../ContentCard';

const meta = {
  title: 'Components/Product card',
  component: ProductCard,
  argTypes: {
    variant: {
      options: [undefined, ...CARD_VARIANTS],
      control: { type: 'radio' }
    },
    dropShadow: {
      if: { arg: 'gradientBrand', truthy: false }
    },
    gradientBrand: {
      if: { arg: 'dropShadow', truthy: false }
    },
    tag: {
      control: false
    },
    image: {
      control: false
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Playground: Story = {
  args: {
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    headingLevel: 'h2'
  }
};

// TODO: Check whether we need to keep this modifier since it's identical to the Playground story
export const SemanticCardTitle: Story = {
  name: 'Semantic card title',
  args: {
    ...Playground.args
  }
};

export const NonSemanticCardTitle: Story = {
  name: 'Non-semantic card title',
  args: {
    // NOTE: don't revert this one back to playground / h2
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    assertiveTitle: true
  }
};

export const WithTag: Story = {
  name: 'With tag',
  args: {
    ...Playground.args,
    tag: <Tag>Product family name</Tag>
  }
};

export const NonSemanticWithTag: Story = {
  name: 'Non-semantic with tag',
  args: {
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    tag: <Tag>Product family name</Tag>
  }
};

export const WithShadow: Story = {
  name: 'With shadow',
  args: {
    ...Playground.args,
    dropShadow: true
  }
};

export const NonSemanticWithShadow: Story = {
  name: 'Non-semantic with shadow',
  args: {
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    dropShadow: true
  }
};

export const WithGradient: Story = {
  name: 'With gradient',
  args: {
    ...Playground.args,
    gradientBrand: true
  }
};

export const NonSemanticWithGradient: Story = {
  name: 'Non-semantic with gradient',
  args: {
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    gradientBrand: true
  }
};

export const WithImage: Story = {
  name: 'With image',
  args: {
    ...Playground.args,
    image: <Image ratio="50:50" src="/images/50-50-split.jpg" alt={''} />
  }
};

export const NonSemanticWithImage: Story = {
  name: 'Non-semantic with image',
  args: {
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    image: <Image ratio="50:50" src="/images/50-50-split.jpg" alt={''} />
  }
};

export const WithImageAndTag: Story = {
  name: 'With image and tag',
  args: {
    ...Playground.args,
    image: <Image ratio="50:50" src="/images/50-50-split.jpg" alt={''} />,
    tag: <Tag>Tag</Tag>
  }
};

export const NonSemanticWithImageAndTag: Story = {
  name: 'Non-semantic with image and tag',
  args: {
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    image: <Image ratio="50:50" src="/images/50-50-split.jpg" alt={''} />,
    tag: <Tag>Tag</Tag>
  }
};

export const WithImageAndBorderAndTag: Story = {
  name: 'With image and border and tag',
  args: {
    ...Playground.args,
    variant: 'border-light',
    image: <Image ratio="50:50" src="/images/50-50-split.jpg" alt={''} />,
    tag: <Tag>Tag</Tag>
  }
};

export const NonSemanticWithImageAndBorderAndTag: Story = {
  name: 'Non-semantic with image and border and tag',
  args: {
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    variant: 'border-light',
    image: <Image ratio="50:50" src="/images/50-50-split.jpg" alt={''} />,
    tag: <Tag>Tag</Tag>
  }
};

export const WithImageAndShadowAndTag: Story = {
  name: 'With image and shadow and tag',
  args: {
    ...Playground.args,
    linkTo: 'docs-demo-link',
    dropShadow: true,
    image: <Image ratio="50:50" src="/images/50-50-split.jpg" alt={''} />,
    tag: <Tag>Tag</Tag>
  }
};

export const NonSemanticWithImageAndShadowAndTag: Story = {
  name: 'Non-semantic with image and shadow and tag',
  args: {
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    dropShadow: true,
    image: <Image ratio="50:50" src="/images/50-50-split.jpg" alt={''} />,
    tag: <Tag>Tag</Tag>
  }
};

export const WithSquareImageAndTag: Story = {
  name: 'With square image and tag',
  args: {
    ...Playground.args,
    linkTo: 'docs-demo-link',
    image: (
      <Image
        ratio="1:1"
        src="https://www.anatomydesignsystem.com/static/media/1to1.301edc3c059fe34bd4e1.jpg"
        alt={''}
      />
    ),
    tag: <Tag>Tag</Tag>
  }
};

export const NonSemanticWithSquareImageAndTag: Story = {
  name: 'Non-semantic with square image and tag',
  args: {
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    image: (
      <Image
        ratio="1:1"
        src="https://www.anatomydesignsystem.com/static/media/1to1.301edc3c059fe34bd4e1.jpg"
        alt={''}
      />
    ),
    tag: <Tag>Tag</Tag>
  }
};

export const WithSquareImageAndShadowAndTag: Story = {
  name: 'With square image and shadow and tag',
  args: {
    ...Playground.args,
    linkTo: 'docs-demo-link',
    dropShadow: true,
    image: (
      <Image
        ratio="1:1"
        src="https://www.anatomydesignsystem.com/static/media/1to1.301edc3c059fe34bd4e1.jpg"
        alt={''}
      />
    ),
    tag: <Tag>Tag</Tag>
  }
};

export const NonSemanticWithSquareImageAndShadowAndTag: Story = {
  name: 'Non-semantic with square image and shadow and tag',
  args: {
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    dropShadow: true,
    image: (
      <Image
        ratio="1:1"
        src="https://www.anatomydesignsystem.com/static/media/1to1.301edc3c059fe34bd4e1.jpg"
        alt={''}
      />
    ),
    tag: <Tag>Tag</Tag>
  }
};
