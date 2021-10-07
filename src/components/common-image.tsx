import * as React from 'react';
import Image, { GatsbyImageProps } from 'gatsby-image';

/* SEO를 위해 alt필드를 강제했음 */
type CommonImageProps = GatsbyImageProps & {
  alt: string;
};

const CommonImage = (props: CommonImageProps) => {
  return <Image {...props} />;
};

export default CommonImage;
