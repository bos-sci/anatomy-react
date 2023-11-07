/* eslint-disable */

import React, { PropsWithChildren } from 'react';
import DownloadLink from './DownloadLink';
import Tag from '../Tag';

/**
 * ------------------------------------------
 * INCOMPLETE COMPONENT FOR DEMO PURPOSES
 * ------------------------------------------
 */

/**
 * Generic box component would be exported from a higher level */
interface BoxProps extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {}

/**
 * Would accept only specific child components only */
interface CardProps extends BoxProps {}

/**
 * Interface used by components that utilize the Card component  */
interface CardConsumerProps extends BoxProps {
  bodyText: string;
  headerProps: {
    isSemantic: boolean;
    text: string;
  };
  heroProps?: {
    as: 'image' | 'icon';
    src: string;
    alt: string;
  };
}

const Card = ({ children, ...rest }: CardProps) => {
  return <div {...rest}>{children}</div>;
};

/**
 * A div for providing padding or spacing between card sections  */
const CardSection = ({ children, ...rest }: BoxProps) => {
  return <div {...rest}>{children}</div>;
};

const CardText = ({ children, ...rest }: BoxProps) => {
  return <p {...rest}>{children}</p>;
};

/**
 * Handles "semantic" vs "non-semantic" output */
const CardTitle = ({ isSemantic, text }: { isSemantic: boolean; text: string }) => {
  return isSemantic ? (
    <h2>{text}</h2>
  ) : (
    <p>
      <strong>{text}</strong>
    </p>
  );
};

const CardHeroImage = ({ as, src, alt }: { as: 'image' | 'icon'; src: string; alt: string }) => {
  return as === 'image' ? <img src={src} alt={alt} /> : <i className={src} />;
};
const TagList = ({ children }: PropsWithChildren<{}>) => {
  return <div>{children}</div>;
};

/**
 * Could be exported from a higher level to be used by other components that handle files. */
interface FileProps {
  filename?: string;
  href: string;
  size?: string;
  type?: string;
}

const header: CardConsumerProps['headerProps'] = {
  isSemantic: true,
  text: 'Download Card'
};

export interface DownloadCardProps extends CardConsumerProps {
  cta: string;
  file: FileProps;
  withButton?: boolean;
  withProperties?: boolean;
}

const Download = ({ bodyText, cta, file, headerProps, heroProps, withButton, withProperties }: DownloadCardProps) => {
  const shouldDisplayProperties = withProperties && (file.filename || file.size || file.type);
  return (
    <Card>
      {heroProps && (
        <CardSection>
          <CardHeroImage as={heroProps.as} src={heroProps.src} alt={heroProps.alt} />
        </CardSection>
      )}
      <CardSection>
        <CardTitle isSemantic={headerProps.isSemantic} text={headerProps.text} />
      </CardSection>
      <CardSection>
        <CardText>{bodyText}</CardText>
        {shouldDisplayProperties && (
          <TagList>
            {file.filename && <Tag>{file.filename}</Tag>}
            {file.size && <Tag>{file.size}</Tag>}
            {file.type && <Tag>{file.type}</Tag>}
          </TagList>
        )}
        <DownloadLink asButton={withButton} cta={cta} source={file.href} filename={file.filename} />
      </CardSection>
    </Card>
  );
};

export default Download;
