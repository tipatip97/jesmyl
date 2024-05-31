import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.5 17.5L18 15.75H16.1407C15.0928 15.75 14.5688 15.75 14.1267 15.5281C13.6845 15.3063 13.3938 14.8976 12.8125 14.0801L9.85413 9.91987C9.27285 9.10244 8.9822 8.69372 8.54002 8.47186C8.09783 8.25 7.57386 8.25 6.52593 8.25H6M16.5 6.5L18 8.25H16.1407C15.0928 8.25 14.5688 8.25 14.1267 8.47186C13.6845 8.69372 13.3938 9.10244 12.8125 9.91987M6 15.75H6.52593C7.57386 15.75 8.09783 15.75 8.54001 15.5281C8.9822 15.3063 9.27285 14.8976 9.85413 14.0801',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM16.0119 5.93057C16.3264 5.661 16.7999 5.69743 17.0694 6.01192L18.5694 7.76192C18.7601 7.9843 18.8038 8.29731 18.6814 8.56341C18.559 8.82951 18.2929 9.00001 18 9.00001H16.1407C15.6039 9.00001 15.249 9.00067 14.9718 9.0249C14.7085 9.04792 14.5694 9.08884 14.463 9.14223C14.2261 9.26109 14.0495 9.47457 13.4238 10.3545C13.1837 10.6921 12.7155 10.7712 12.3779 10.5311C12.0403 10.2911 11.9613 9.82281 12.2013 9.48524L12.2868 9.36477C12.7824 8.66617 13.1777 8.10891 13.7903 7.80152C14.1261 7.63305 14.4701 7.56304 14.8412 7.5306C15.1036 7.50766 15.4057 7.50192 15.75 7.50049V6.5C15.7501 6.28876 15.8389 6.07883 16.0119 5.93057ZM7.69482 9.0249C7.4177 9.00067 7.06276 9.00001 6.52593 9.00001H6C5.58579 9.00001 5.25 8.66423 5.25 8.25001C5.25 7.8358 5.58579 7.50001 6 7.50001H6.52593L6.55698 7.50001H6.55698H6.55699H6.55699H6.557H6.557C7.05452 7.5 7.47531 7.49999 7.82544 7.5306C8.19659 7.56304 8.54058 7.63305 8.87636 7.80152C9.489 8.10891 9.88429 8.66617 10.3798 9.36477L10.4653 9.48524L13.4238 13.6455C14.0495 14.5255 14.2261 14.7389 14.463 14.8578C14.5694 14.9112 14.7085 14.9521 14.9719 14.9751C15.249 14.9994 15.6039 15 16.1407 15H18C18.2929 15 18.559 15.1705 18.6814 15.4366C18.8038 15.7027 18.7601 16.0157 18.5694 16.2381L17.0694 17.9881C16.7999 18.3026 16.3264 18.339 16.0119 18.0695C15.839 17.9213 15.7502 17.7114 15.75 17.5003V16.4995C15.4057 16.4981 15.1036 16.4924 14.8412 16.4694C14.4701 16.437 14.1261 16.367 13.7903 16.1985C13.1777 15.8911 12.7824 15.3339 12.2868 14.6353L12.2013 14.5148L9.24292 10.3545C8.61717 9.47457 8.44058 9.26109 8.20367 9.14223C8.09727 9.08884 7.95818 9.04792 7.69482 9.0249ZM10.4653 14.5148C10.7054 14.1772 10.6263 13.709 10.2888 13.4689C9.95121 13.2289 9.48296 13.3079 9.24292 13.6455C8.61717 14.5255 8.44058 14.7389 8.20368 14.8578C8.09727 14.9112 7.95818 14.9521 7.69482 14.9751C7.4177 14.9994 7.06276 15 6.52593 15H6C5.58579 15 5.25 15.3358 5.25 15.75C5.25 16.1642 5.58579 16.5 6 16.5H6.55697H6.55697H6.55698H6.55699H6.55699C7.05452 16.5 7.47531 16.5 7.82544 16.4694C8.19659 16.437 8.54058 16.367 8.87636 16.1985C9.489 15.8911 9.88429 15.3339 10.3798 14.6353L10.4653 14.5148Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M16.0119 5.93057C16.3264 5.661 16.7999 5.69743 17.0694 6.01192L18.5694 7.76192C18.7601 7.9843 18.8038 8.29731 18.6814 8.56341C18.559 8.82951 18.2929 9.00001 18 9.00001H16.1407C15.6039 9.00001 15.249 9.00067 14.9718 9.0249C14.7085 9.04792 14.5694 9.08884 14.463 9.14223C14.2261 9.26109 14.0495 9.47457 13.4238 10.3545C13.1837 10.6921 12.7155 10.7712 12.3779 10.5311C12.0403 10.2911 11.9613 9.82281 12.2013 9.48524L12.2868 9.36477C12.7824 8.66617 13.1777 8.10891 13.7903 7.80152C14.1261 7.63305 14.4701 7.56304 14.8412 7.5306C15.1036 7.50766 15.4057 7.50192 15.75 7.50049V6.5C15.7501 6.28876 15.8389 6.07883 16.0119 5.93057Z',
  d6: 'M7.69482 9.0249C7.4177 9.00067 7.06276 9.00001 6.52593 9.00001H6C5.58579 9.00001 5.25 8.66423 5.25 8.25001C5.25 7.8358 5.58579 7.50001 6 7.50001H6.52593L6.55698 7.50001H6.55698C7.05452 7.5 7.47531 7.49999 7.82544 7.5306C8.19659 7.56304 8.54058 7.63305 8.87636 7.80152C9.489 8.10891 9.88429 8.66617 10.3798 9.36477L10.4653 9.48524L13.4238 13.6455C14.0495 14.5255 14.2261 14.7389 14.463 14.8578C14.5694 14.9112 14.7085 14.9521 14.9719 14.9751C15.249 14.9994 15.6039 15 16.1407 15H18C18.2929 15 18.559 15.1705 18.6814 15.4366C18.8038 15.7027 18.7601 16.0157 18.5694 16.2381L17.0694 17.9881C16.7999 18.3026 16.3264 18.339 16.0119 18.0695C15.839 17.9213 15.7502 17.7114 15.75 17.5003V16.4995C15.4057 16.4981 15.1036 16.4924 14.8412 16.4694C14.4701 16.437 14.1261 16.367 13.7903 16.1985C13.1777 15.8911 12.7824 15.3339 12.2868 14.6353L12.2013 14.5148L9.24292 10.3545C8.61717 9.47457 8.44058 9.26109 8.20367 9.14223C8.09727 9.08884 7.95818 9.04792 7.69482 9.0249Z',
  d7: 'M10.2888 13.4689C10.6263 13.709 10.7054 14.1772 10.4653 14.5148L10.3798 14.6353C9.88429 15.3339 9.489 15.8911 8.87635 16.1985C8.54058 16.367 8.19659 16.437 7.82544 16.4694C7.47531 16.5 7.05451 16.5 6.55697 16.5H6.55697H6C5.58579 16.5 5.25 16.1642 5.25 15.75C5.25 15.3358 5.58579 15 6 15H6.52593C7.06276 15 7.4177 14.9994 7.69482 14.9751C7.95818 14.9521 8.09727 14.9112 8.20368 14.8578C8.44058 14.7389 8.61717 14.5255 9.24292 13.6455C9.48296 13.3079 9.95121 13.2289 10.2888 13.4689Z',
  d8: 'M16.5 18L18 15.75H15L9 8.25H6M16.5 6L18 8.25H15L13.5 10.125M6 15.75H9L10.5 13.875',
  d9: 'M3 21H21V3H3V21Z',
  d10: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM18.624 7.83398L17.124 5.58398L15.876 6.41603L16.5986 7.50001H15C14.7722 7.50001 14.5567 7.60358 14.4143 7.78149L12.9143 9.65649L14.0857 10.5935L15.3605 9.00001H18C18.2766 9.00001 18.5307 8.84777 18.6613 8.6039C18.7918 8.36003 18.7775 8.06413 18.624 7.83398ZM9 7.50001H6V9.00001H8.63953L14.4143 16.2185C14.5567 16.3964 14.7722 16.5 15 16.5H16.5986L15.876 17.584L17.124 18.416L18.624 16.166C18.7775 15.9359 18.7918 15.64 18.6613 15.3961C18.5307 15.1522 18.2766 15 18 15H15.3605L9.58565 7.78149C9.44332 7.60358 9.22784 7.50001 9 7.50001ZM9.58565 16.2185L11.0857 14.3435L9.91435 13.4065L8.63953 15H6V16.5H9C9.22784 16.5 9.44332 16.3964 9.58565 16.2185Z',
} as const;

export const IconShuffleSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-square-stroke-rounded IconShuffleSquareStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShuffleSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-square-duotone-rounded IconShuffleSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShuffleSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-square-twotone-rounded IconShuffleSquareTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShuffleSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-square-solid-rounded IconShuffleSquareSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShuffleSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-square-bulk-rounded IconShuffleSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShuffleSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-square-stroke-sharp IconShuffleSquareStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShuffleSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-square-solid-sharp IconShuffleSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShuffleSquare: TheIconSelfPack = {
  name: 'ShuffleSquare',
  StrokeRounded: IconShuffleSquareStrokeRounded,
  DuotoneRounded: IconShuffleSquareDuotoneRounded,
  TwotoneRounded: IconShuffleSquareTwotoneRounded,
  SolidRounded: IconShuffleSquareSolidRounded,
  BulkRounded: IconShuffleSquareBulkRounded,
  StrokeSharp: IconShuffleSquareStrokeSharp,
  SolidSharp: IconShuffleSquareSolidSharp,
};