import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z',
  d2: 'M13.1525 8.7864L12.975 9.34293C12.8295 9.79895 12.7567 10.027 12.8127 10.207C12.8579 10.3527 12.9573 10.4783 13.0927 10.5609C13.26 10.6631 13.5131 10.6631 14.0194 10.6631H14.2887C16.0021 10.6631 16.8588 10.6631 17.2634 11.1553C17.3097 11.2116 17.3508 11.2714 17.3864 11.3341C17.6977 11.8832 17.3438 12.6227 16.636 14.1019C15.9865 15.4593 15.6617 16.138 15.0587 16.5375C15.0003 16.5761 14.9403 16.6126 14.8789 16.6468C14.244 17 13.4574 17 11.8843 17H11.5431C9.63715 17 8.68419 17 8.09209 16.4432C7.5 15.8864 7.5 14.9902 7.5 13.1978V12.5679C7.5 11.6259 7.5 11.155 7.67223 10.7239C7.84445 10.2929 8.17424 9.93842 8.8338 9.22954L11.5614 6.29801C11.6298 6.22449 11.664 6.18772 11.6942 6.16225C11.9757 5.92447 12.4102 5.95124 12.6563 6.22152C12.6826 6.25047 12.7115 6.29112 12.7691 6.37241C12.8592 6.49956 12.9043 6.56314 12.9436 6.62613C13.2952 7.19002 13.4016 7.85988 13.2405 8.4958C13.2225 8.56683 13.1992 8.64006 13.1525 8.7864Z',
  d3: 'M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.975 9.34293L13.1525 8.7864C13.1992 8.64014 13.2225 8.56681 13.2405 8.4958C13.4016 7.85988 13.2952 7.19002 12.9436 6.62613C12.9043 6.56314 12.8592 6.49957 12.7691 6.37243C12.7115 6.29114 12.6826 6.25047 12.6563 6.22152C12.4102 5.95124 11.9757 5.92447 11.6942 6.16225C11.664 6.18772 11.6298 6.22449 11.5614 6.29801L8.8338 9.22954C8.17423 9.93842 7.84445 10.2929 7.67223 10.7239C7.5 11.155 7.5 11.6259 7.5 12.5679V13.1978C7.5 14.9902 7.5 15.8864 8.09209 16.4432C8.68419 17 9.63714 17 11.5431 17H11.8843C13.4574 17 14.244 17 14.8789 16.6468C14.9403 16.6126 15.0003 16.5761 15.0587 16.5375C15.6617 16.138 15.9865 15.4593 16.636 14.1019C17.3438 12.6227 17.6977 11.8832 17.3864 11.3341C17.3508 11.2714 17.3097 11.2116 17.2634 11.1553C16.8588 10.6631 16.0021 10.6631 14.2887 10.6631H14.0194C13.5132 10.6631 13.26 10.6631 13.0927 10.5609C12.9573 10.4783 12.8579 10.3527 12.8127 10.207C12.7567 10.027 12.8295 9.79895 12.975 9.34293Z',
  d4: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM12.975 9.34293L13.1525 8.7864L13.1525 8.78628C13.1992 8.64002 13.2225 8.56681 13.2405 8.4958C13.4016 7.85988 13.2952 7.19002 12.9436 6.62613C12.9043 6.56314 12.8592 6.49957 12.7691 6.37243L12.7691 6.37241C12.7115 6.29112 12.6826 6.25047 12.6563 6.22152C12.4102 5.95124 11.9757 5.92447 11.6942 6.16225C11.664 6.18772 11.6298 6.22449 11.5614 6.29801L8.8338 9.22954C8.17423 9.93842 7.84445 10.2929 7.67223 10.7239C7.5 11.155 7.5 11.6259 7.5 12.5679V13.1978C7.5 14.9902 7.5 15.8864 8.09209 16.4432C8.68419 17 9.63714 17 11.5431 17H11.5431H11.8843C13.4574 17 14.244 17 14.8789 16.6468C14.9403 16.6126 15.0003 16.5761 15.0587 16.5375C15.6617 16.138 15.9865 15.4593 16.636 14.1019C17.3438 12.6227 17.6977 11.8832 17.3864 11.3341C17.3508 11.2714 17.3097 11.2116 17.2634 11.1553C16.8588 10.6631 16.0021 10.6631 14.2887 10.6631H14.0194H14.0194C13.5131 10.6631 13.26 10.6631 13.0927 10.5609C12.9573 10.4783 12.8579 10.3527 12.8127 10.207C12.7567 10.027 12.8295 9.79895 12.975 9.34293Z',
  d5: 'M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12Z',
  d6: 'M7.5 10L12 5.5L13.5 7.5L12.5 10H17.5L15.5 16.5H7.5V10Z',
  d7: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM12 5.5L7.5 10V16.5H15.5L17.5 10H12.5L13.5 7.5L12 5.5Z',
} as const;

export const IconThumbsUpEllipseStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-ellipse-stroke-rounded IconThumbsUpEllipseStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconThumbsUpEllipseDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-ellipse-duotone-rounded IconThumbsUpEllipseDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconThumbsUpEllipseTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-ellipse-twotone-rounded IconThumbsUpEllipseTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconThumbsUpEllipseSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-ellipse-solid-rounded IconThumbsUpEllipseSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThumbsUpEllipseBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-ellipse-bulk-rounded IconThumbsUpEllipseBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThumbsUpEllipseStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-ellipse-stroke-sharp IconThumbsUpEllipseStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconThumbsUpEllipseSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-ellipse-solid-sharp IconThumbsUpEllipseSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfThumbsUpEllipse: TheIconSelfPack = {
  name: 'ThumbsUpEllipse',
  StrokeRounded: IconThumbsUpEllipseStrokeRounded,
  DuotoneRounded: IconThumbsUpEllipseDuotoneRounded,
  TwotoneRounded: IconThumbsUpEllipseTwotoneRounded,
  SolidRounded: IconThumbsUpEllipseSolidRounded,
  BulkRounded: IconThumbsUpEllipseBulkRounded,
  StrokeSharp: IconThumbsUpEllipseStrokeSharp,
  SolidSharp: IconThumbsUpEllipseSolidSharp,
};