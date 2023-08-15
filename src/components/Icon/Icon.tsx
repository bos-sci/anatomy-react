import { lazy, ReactElement, Suspense, useEffect, useState } from 'react';

export interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | '2x' | '3x' | '4x' | 'base';
  className?: string;
}

const Fallback = () => {
  return <>{}</>;
};

const Icon = (props: IconProps): JSX.Element => {
  const { name, size, className = '' } = props;
  const [sizeClass, setSizeClass] = useState('');
  const [icon, setIcon] = useState<ReactElement>(<>{}</>);

  useEffect(() => {
    setSizeClass(`bsds-icon-${size ? size : '2x'}`);
  }, [size]);

  useEffect(() => {
    const ImportedIcons = {
      IconClose: lazy(() => import('./icons/IconClose')),
      IconEllipsis: lazy(() => import('./icons/IconEllipsis')),
      IconPlus: lazy(() => import('./icons/IconPlus')),
      IconMenu: lazy(() => import('./icons/IconMenu')),
      IconChevronRight: lazy(() => import('./icons/IconChevronRight')),
      IconChevronLeft: lazy(() => import('./icons/IconChevronLeft')),
      IconChevronDown: lazy(() => import('./icons/IconChevronDown')),
      IconChevronUp: lazy(() => import('./icons/IconChevronUp')),
      IconCardDemo: lazy(() => import('./icons/IconCardDemo')),
      IconDocument: lazy(() => import('./icons/IconDocument')),
      IconGlobe: lazy(() => import('./icons/IconGlobe')),
      IconPeople: lazy(() => import('./icons/IconPeople'))
    };

    switch (name) {
      case 'close':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconClose className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'ellipsis':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconEllipsis className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'plus':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconPlus className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'menu':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconMenu className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'chevronRight':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconChevronRight className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'chevronLeft':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconChevronLeft className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'chevronDown':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconChevronDown className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;
      case 'chevronUp':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconChevronUp className={sizeClass + ' ' + className} />
          </Suspense>
        );
        break;

      case 'demoCardIcon':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconCardDemo className={className} />
          </Suspense>
        );
        break;

      case 'document':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconDocument className={className} />
          </Suspense>
        );
        break;

      case 'globe':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconGlobe className={className} />
          </Suspense>
        );
        break;

      case 'people':
        setIcon(
          <Suspense fallback={<Fallback />}>
            <ImportedIcons.IconPeople className={className} />
          </Suspense>
        );
        break;

      default:
        setIcon(<p>Failed to load icon</p>);
    }
  }, [className, name, sizeClass]);

  return <>{icon}</>;
};

export default Icon;
