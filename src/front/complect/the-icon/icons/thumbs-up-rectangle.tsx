import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M12.6525 9.2864L12.475 9.84293C12.3295 10.299 12.2567 10.527 12.3127 10.707C12.3579 10.8527 12.4573 10.9783 12.5927 11.0609C12.76 11.1631 13.0131 11.1631 13.5194 11.1631H13.7887C15.5021 11.1631 16.3588 11.1631 16.7634 11.6553C16.8097 11.7116 16.8508 11.7714 16.8864 11.8341C17.1977 12.3832 16.8438 13.1227 16.136 14.6019C15.4865 15.9593 15.1617 16.638 14.5587 17.0375C14.5003 17.0761 14.4403 17.1126 14.3789 17.1468C13.744 17.5 12.9574 17.5 11.3843 17.5H11.0431C9.13715 17.5 8.18419 17.5 7.59209 16.9432C7 16.3864 7 15.4902 7 13.6978V13.0679C7 12.1259 7 11.655 7.17223 11.2239C7.34445 10.7929 7.67424 10.4384 8.3338 9.72954L11.0614 6.79801C11.1298 6.72449 11.164 6.68772 11.1942 6.66225C11.4757 6.42448 11.9102 6.45124 12.1563 6.72152C12.1826 6.75047 12.2115 6.79112 12.2691 6.87241C12.3592 6.99956 12.4043 7.06314 12.4436 7.12613C12.7952 7.69003 12.9016 8.35988 12.7405 8.9958C12.7225 9.06683 12.6992 9.14006 12.6525 9.2864Z',
  d3: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM12.475 9.84293L12.6525 9.2864C12.6992 9.14016 12.7225 9.06681 12.7405 8.9958C12.9016 8.35988 12.7952 7.69003 12.4436 7.12613C12.4043 7.06314 12.3592 6.99957 12.2691 6.87243C12.2115 6.79114 12.1826 6.75047 12.1563 6.72152C11.9102 6.45124 11.4757 6.42448 11.1942 6.66225C11.164 6.68772 11.1298 6.72449 11.0614 6.798L8.3338 9.72954C7.67423 10.4384 7.34445 10.7929 7.17223 11.2239C7 11.655 7 12.1259 7 13.0679V13.6978C7 15.4902 7 16.3864 7.59209 16.9432C8.18419 17.5 9.13715 17.5 11.0431 17.5H11.3843C12.9574 17.5 13.744 17.5 14.3789 17.1468C14.4403 17.1126 14.5003 17.0761 14.5587 17.0375C15.1617 16.638 15.4865 15.9593 16.136 14.6019C16.8438 13.1227 17.1977 12.3832 16.8864 11.8341C16.8508 11.7714 16.8097 11.7116 16.7634 11.6553C16.3588 11.1631 15.5021 11.1631 13.7887 11.1631H13.5194C13.0131 11.1631 12.76 11.1631 12.5927 11.0609C12.4573 10.9783 12.3579 10.8527 12.3127 10.707C12.2567 10.527 12.3295 10.299 12.475 9.84293Z',
  d4: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM12.475 9.84293L12.6525 9.2864L12.6525 9.28626C12.6992 9.14001 12.7225 9.06681 12.7405 8.9958C12.9016 8.35988 12.7952 7.69003 12.4436 7.12613C12.4043 7.06314 12.3592 6.99957 12.2691 6.87243L12.2691 6.87241C12.2115 6.79112 12.1826 6.75047 12.1563 6.72152C11.9102 6.45124 11.4757 6.42448 11.1942 6.66225C11.164 6.68772 11.1298 6.72449 11.0614 6.798L11.0614 6.79801L8.3338 9.72954C7.67423 10.4384 7.34445 10.7929 7.17223 11.2239C7 11.655 7 12.1259 7 13.0679V13.6978C7 15.4902 7 16.3864 7.59209 16.9432C8.18419 17.5 9.13715 17.5 11.0431 17.5H11.3843C12.9574 17.5 13.744 17.5 14.3789 17.1468C14.4403 17.1126 14.5003 17.0761 14.5587 17.0375C15.1617 16.638 15.4865 15.9593 16.136 14.6019C16.8438 13.1227 17.1977 12.3832 16.8864 11.8341C16.8508 11.7714 16.8097 11.7116 16.7634 11.6553C16.3588 11.1631 15.5021 11.1631 13.7887 11.1631H13.5194C13.0131 11.1631 12.76 11.1631 12.5927 11.0609C12.4573 10.9783 12.3579 10.8527 12.3127 10.707C12.2567 10.527 12.3295 10.299 12.475 9.84293Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M3.00011 21L3 3.00038L21 3V21H3.00011Z',
  d7: 'M7 11L11.5 6.5L13 8.5L12 11H17L15 17.5H7V11Z',
  d8: 'M21 2.25L2.99998 2.25038C2.58578 2.25038 2.25 2.58617 2.25 3.00038L2.25011 21C2.25011 21.4142 2.5859 21.75 3.00011 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.80108 21.671 2.61032 21.5303 2.46966C21.3897 2.32901 21.1989 2.25 21 2.25ZM11.5 6.5L7 11V17.5H15L17 11H12L13 8.5L11.5 6.5Z',
} as const;

export const IconThumbsUpRectangleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-rectangle-stroke-rounded IconThumbsUpRectangleStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconThumbsUpRectangleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-rectangle-duotone-rounded IconThumbsUpRectangleDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconThumbsUpRectangleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-rectangle-twotone-rounded IconThumbsUpRectangleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconThumbsUpRectangleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-rectangle-solid-rounded IconThumbsUpRectangleSolidRounded"
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

export const IconThumbsUpRectangleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-rectangle-bulk-rounded IconThumbsUpRectangleBulkRounded"
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

export const IconThumbsUpRectangleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-rectangle-stroke-sharp IconThumbsUpRectangleStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconThumbsUpRectangleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-rectangle-solid-sharp IconThumbsUpRectangleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfThumbsUpRectangle: TheIconSelfPack = {
  name: 'ThumbsUpRectangle',
  StrokeRounded: IconThumbsUpRectangleStrokeRounded,
  DuotoneRounded: IconThumbsUpRectangleDuotoneRounded,
  TwotoneRounded: IconThumbsUpRectangleTwotoneRounded,
  SolidRounded: IconThumbsUpRectangleSolidRounded,
  BulkRounded: IconThumbsUpRectangleBulkRounded,
  StrokeSharp: IconThumbsUpRectangleStrokeSharp,
  SolidSharp: IconThumbsUpRectangleSolidSharp,
};