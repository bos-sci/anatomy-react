import { ImgHTMLAttributes, useEffect, useId, useState } from 'react';
import { ImageRatio } from './Image.types';
import useConcatenation from '../../hooks/useConcatenation';

interface BaseProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: ImageRatio;
  hasCaption?: boolean;
  isCaptionCentered?: boolean;
  isGhost?: boolean;
  texts?: {
    caption?: string;
  };
  className?: string;
}

type AltTextProps =
  | {
      isDecorative: boolean;
      alt?: never;
    }
  | {
      isDecorative?: never;
      alt: string;
    };

export type ImageProps = BaseProps & AltTextProps;

const Image = (props: ImageProps): JSX.Element => {
  const {
    alt,
    ratio = '16:9',
    isDecorative,
    hasCaption,
    texts,
    className,
    isGhost,
    isCaptionCentered,
    ...imgAttrs
  } = props;
  const captionId = useId();
  const imageId = useId();

  const [altText, setAltText] = useState(alt);
  const [ariaText, setAriaText] = useState(texts?.caption);

  let ratioClasses = '';

  switch (ratio) {
    case '1:1':
      ratioClasses = '-1to1';
      break;
    case '4:3':
      ratioClasses = '-4to3';
      break;
    case '16:9':
      ratioClasses = '-16to9';
      break;
    case '21:9':
      ratioClasses = '-21to9';
      break;
    case '50:50':
      ratioClasses = '-50-split';
  }

  let captionAlignment = '';

  if (isCaptionCentered && !isGhost) {
    captionAlignment = '-center';
  } else if (isCaptionCentered && isGhost) {
    captionAlignment = '-center-ghost';
  } else if (isGhost) {
    captionAlignment = '-ghost';
  }

  useEffect(() => {
    setAltText(isDecorative ? '' : alt);
  }, [alt, isDecorative]);

  useEffect(() => {
    setAriaText(hasCaption && texts?.caption ? `imageCaption${captionId}` : undefined);
  }, [captionId, hasCaption, texts?.caption]);

  return (
    <>
      <img
        className={useConcatenation([`bsds-image${ratioClasses}`, `${className || ''}`])}
        alt={altText}
        id={'image' + imageId}
        aria-describedby={ariaText}
        {...imgAttrs}
      />
      {!!hasCaption && !!texts?.caption && (
        <p className={`${'bsds-image-caption'}${captionAlignment}`} id={'imageCaption' + captionId}>
          {texts?.caption}
        </p>
      )}
    </>
  );
};

export default Image;
