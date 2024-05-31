import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.8541 4H9.14593C6.6503 4 4.52873 5.68344 3.75294 8.02892C3.49753 8.80111 3.36982 9.18721 3.69065 9.59361C4.01149 10 4.53377 10 5.57833 10H18.4217C19.4662 10 19.9885 10 20.3093 9.59361C20.6302 9.18721 20.5025 8.80111 20.2471 8.02892C19.4713 5.68344 17.3497 4 14.8541 4Z',
  d2: 'M4 16H3.5C2.67157 16 2 15.3284 2 14.5C2 13.6716 2.67157 13 3.5 13H11.3944C11.7893 13 12.1753 13.1169 12.5038 13.3359L14.4453 14.6302C14.7812 14.8541 15.2188 14.8541 15.5547 14.6302L17.4962 13.3359C17.8247 13.1169 18.2107 13 18.6056 13H20.5C21.3284 13 22 13.6716 22 14.5C22 15.3284 21.3284 16 20.5 16H20M4 16L4.4319 17.7276C4.76578 19.0631 5.96573 20 7.34233 20H16.6577C18.0343 20 19.2342 19.0631 19.5681 17.7276L20 16M4 16H11M20 16H18.5',
  d3: 'M15.0078 7L14.9988 7',
  d4: 'M10.5 6.5L9.5 7.5',
  d5: 'M3.5 13H11.3944C11.7893 13 12.1753 13.1169 12.5038 13.3359L14.4453 14.6302C14.7812 14.8541 15.2188 14.8541 15.5547 14.6302L17.4962 13.3359C17.8247 13.1169 18.2107 13 18.6056 13H20.5C21.3284 13 22 13.6716 22 14.5C22 15.3284 21.3284 16 20.5 16H20L19.5681 17.7276C19.2342 19.0631 18.0343 20 16.6577 20H7.34233C5.96573 20 4.76578 19.0631 4.4319 17.7276L4 16H3.5C2.67157 16 2 15.3284 2 14.5C2 13.6716 2.67157 13 3.5 13Z',
  d6: 'M3.5 12.25C2.25736 12.25 1.25 13.2574 1.25 14.5C1.25 15.7138 2.21122 16.7032 3.41401 16.7484L3.7043 17.9095C4.12164 19.5789 5.62158 20.75 7.34233 20.75H16.6577C18.3784 20.75 19.8784 19.5789 20.2957 17.9095L20.586 16.7484C21.7888 16.7032 22.75 15.7138 22.75 14.5C22.75 13.2574 21.7426 12.25 20.5 12.25H18.6056C18.0626 12.25 17.5319 12.4107 17.0801 12.7119L15.1387 14.0062C15.0547 14.0621 14.9453 14.0621 14.8613 14.0062L12.9199 12.7119C12.4681 12.4107 11.9374 12.25 11.3944 12.25H3.5ZM12.0878 13.9599L14.0293 15.2542L3.5 15.25C3.08579 15.25 2.75 14.9142 2.75 14.5C2.75 14.0858 3.08579 13.75 3.5 13.75H11.3944C11.6412 13.75 11.8825 13.823 12.0878 13.9599ZM21.25 14.5C21.25 14.9142 20.9142 15.25 20.5 15.25H18.5L15.9707 15.2542L17.9122 13.9599C18.1175 13.823 18.3588 13.75 18.6056 13.75H20.5C20.9142 13.75 21.25 14.0858 21.25 14.5Z',
  d7: 'M3.04079 7.7934C3.90858 5.16975 6.29727 3.25 9.14583 3.25H14.854C17.7025 3.25 20.0912 5.16975 20.959 7.7934C21.0713 8.13209 21.2086 8.54653 21.2407 8.87574C21.2815 9.29513 21.1887 9.69001 20.8979 10.0583C20.5872 10.452 20.1813 10.618 19.7615 10.6888C19.3973 10.7502 18.9511 10.7501 18.4753 10.75H5.52449C5.04875 10.7501 4.60248 10.7502 4.23829 10.6888C3.81847 10.618 3.41264 10.452 3.1019 10.0583C2.81112 9.69001 2.7183 9.29513 2.75914 8.87574C2.7912 8.54654 2.92854 8.13209 3.04079 7.7934ZM16.0078 7C16.0078 7.55228 15.5601 8 15.0078 8H14.9988C14.4465 8 13.9988 7.55228 13.9988 7C13.9988 6.44772 14.4465 6 14.9988 6H15.0078C15.5601 6 16.0078 6.44772 16.0078 7ZM11.0303 7.03033C11.3232 6.73744 11.3232 6.26256 11.0303 5.96967C10.7374 5.67678 10.2626 5.67678 9.96967 5.96967L8.96967 6.96967C8.67678 7.26256 8.67678 7.73744 8.96967 8.03033C9.26256 8.32322 9.73744 8.32322 10.0303 8.03033L11.0303 7.03033Z',
  d8: 'M3.5 12.25C2.25736 12.25 1.25 13.2574 1.25 14.5C1.25 15.7138 2.21122 16.7032 3.41401 16.7484H20.586C21.7888 16.7032 22.75 15.7138 22.75 14.5C22.75 13.2574 21.7426 12.25 20.5 12.25H18.6056C18.0626 12.25 17.5319 12.4107 17.0801 12.7119L15.1387 14.0062C15.0547 14.0621 14.9453 14.0621 14.8613 14.0062L12.9199 12.7119C12.4681 12.4107 11.9374 12.25 11.3944 12.25H3.5ZM20.5 15.25C20.9142 15.25 21.25 14.9142 21.25 14.5C21.25 14.0858 20.9142 13.75 20.5 13.75H18.6056C18.3588 13.75 18.1175 13.823 17.9122 13.9599L15.9707 15.2542L18.5 15.25H20.5ZM12.0878 13.9599L14.0293 15.2542L3.5 15.25C3.08579 15.25 2.75 14.9142 2.75 14.5C2.75 14.0858 3.08579 13.75 3.5 13.75H11.3944C11.6412 13.75 11.8825 13.823 12.0878 13.9599Z',
  d9: 'M3.04079 7.7934C3.90858 5.16975 6.29727 3.25 9.14583 3.25H14.854C17.7025 3.25 20.0912 5.16975 20.959 7.7934C21.0713 8.13209 21.2086 8.54653 21.2407 8.87574C21.2815 9.29513 21.1887 9.69001 20.8979 10.0583C20.5872 10.452 20.1813 10.618 19.7615 10.6888C19.3973 10.7502 18.9511 10.7501 18.4753 10.75H5.52449C5.04875 10.7501 4.60248 10.7502 4.23829 10.6888C3.81847 10.618 3.41264 10.452 3.1019 10.0583C2.81112 9.69001 2.7183 9.29513 2.75914 8.87574C2.7912 8.54654 2.92854 8.13209 3.04079 7.7934Z',
  d10: 'M16.0078 7C16.0078 7.55228 15.5601 8 15.0078 8L14.9988 8C14.4465 8 13.9988 7.55228 13.9988 7C13.9988 6.44771 14.4465 6 14.9988 6L15.0078 6C15.5601 6 16.0078 6.44772 16.0078 7Z',
  d11: 'M11.0303 5.96967C11.3232 6.26256 11.3232 6.73744 11.0303 7.03033L10.0303 8.03033C9.73744 8.32322 9.26256 8.32322 8.96967 8.03033C8.67678 7.73744 8.67678 7.26256 8.96967 6.96967L9.96967 5.96967C10.2626 5.67678 10.7374 5.67678 11.0303 5.96967Z',
  d12: 'M20.5 10H3.5C3.5 6.68629 6.18629 4 9.5 4H14.5C17.8137 4 20.5 6.68629 20.5 10Z',
  d13: 'M4 15.9999H3.5C2.67157 15.9999 2 15.3284 2 14.4999C2 13.6715 2.67157 12.9999 3.5 12.9999H12L14 14.9999L16 12.9998L20.5 12.9999C21.3284 12.9999 22 13.6715 22 14.4999C22 15.3284 21.3284 15.9999 20.5 15.9999H20M4 15.9999L5 19.9999H19L20 15.9999M4 15.9999H11M20 15.9999H17.5',
  d14: 'M10.5 6.5L9 7.5',
  d15: 'M2.75 10C2.75 6.27208 5.77208 3.25 9.5 3.25H14.5C18.2279 3.25 21.25 6.27208 21.25 10V10.75H2.75V10ZM16.0078 7C16.0078 7.55228 15.5601 8 15.0078 8H14.9988C14.4465 8 13.9988 7.55228 13.9988 7C13.9988 6.44771 14.4465 6 14.9988 6H15.0078C15.5601 6 16.0078 6.44772 16.0078 7ZM10.084 5.87598L8.58398 6.87598L9.41603 8.12405L10.916 7.12405L10.084 5.87598Z',
  d16: 'M16 12.25C15.8011 12.25 15.6103 12.329 15.4696 12.4697L14 13.9395L12.5303 12.4698C12.3897 12.3292 12.1989 12.2502 12 12.2502H3.5C2.25736 12.2502 1.25 13.2575 1.25 14.5002C1.25 14.7631 1.29509 15.0155 1.37797 15.25H22.622C22.7049 15.0155 22.75 14.7631 22.75 14.5002C22.75 13.2575 21.7426 12.2502 20.5 12.2502L16 12.25Z',
  d17: 'M20.5856 16.75H3.41437L4.27239 20.1821C4.35586 20.516 4.65585 20.7502 5 20.7502H19C19.3442 20.7502 19.6441 20.516 19.7276 20.1821L20.5856 16.75Z',
} as const;

export const IconHamburger01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hamburger-01-stroke-rounded IconHamburger01StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHamburger01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hamburger-01-duotone-rounded IconHamburger01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHamburger01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hamburger-01-twotone-rounded IconHamburger01TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHamburger01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hamburger-01-solid-rounded IconHamburger01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHamburger01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hamburger-01-bulk-rounded IconHamburger01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHamburger01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hamburger-01-stroke-sharp IconHamburger01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHamburger01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hamburger-01-solid-sharp IconHamburger01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHamburger01: TheIconSelfPack = {
  name: 'Hamburger01',
  StrokeRounded: IconHamburger01StrokeRounded,
  DuotoneRounded: IconHamburger01DuotoneRounded,
  TwotoneRounded: IconHamburger01TwotoneRounded,
  SolidRounded: IconHamburger01SolidRounded,
  BulkRounded: IconHamburger01BulkRounded,
  StrokeSharp: IconHamburger01StrokeSharp,
  SolidSharp: IconHamburger01SolidSharp,
};