import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 7C18.357 7 19.5355 7 20.2678 7.73223C21 8.46447 21 9.64298 21 12C21 14.357 21 15.5355 20.2678 16.2678C19.5355 17 18.357 17 16 17H8C5.64298 17 4.46447 17 3.73223 16.2678C3 15.5355 3 14.357 3 12C3 9.64298 3 8.46447 3.73223 7.73223C4.46447 7 5.64298 7 8 7L16 7Z',
  d2: 'M17 2C16.8955 2.54697 16.7107 2.94952 16.3838 3.26777C15.6316 4 14.4211 4 12 4C9.5789 4 8.36835 4 7.61621 3.26777C7.28931 2.94952 7.10449 2.54697 7 2',
  d3: 'M17 22C16.8955 21.453 16.7107 21.0505 16.3838 20.7322C15.6316 20 14.4211 20 12 20C9.5789 20 8.36835 20 7.61621 20.7322C7.28931 21.0505 7.10449 21.453 7 22',
  d4: 'M21.75 12.0514C21.75 13.1349 21.75 14.0204 21.6518 14.7195C21.5491 15.4502 21.3268 16.0838 20.7981 16.5895C20.2694 17.0952 19.6071 17.3078 18.8431 17.4061C18.1123 17.5 17.1865 17.5 16.0537 17.5L7.94631 17.5C6.81348 17.5 5.88775 17.5 5.15688 17.4061C4.39293 17.3078 3.73059 17.0952 3.2019 16.5895C2.67321 16.0838 2.45093 15.4502 2.34821 14.7195C2.24995 14.0204 2.24997 13.1349 2.25 12.0514L2.25 12.0514L2.25 11.9486L2.25 11.9486C2.24997 10.8651 2.24995 9.97958 2.34821 9.2805C2.45093 8.54976 2.67321 7.91622 3.2019 7.41052C3.73059 6.90481 4.39293 6.69219 5.15688 6.59395C5.88774 6.49996 6.81346 6.49998 7.94628 6.5L7.94631 6.5L16.0537 6.5L16.0537 6.5C17.1865 6.49998 18.1123 6.49996 18.8431 6.59395C19.6071 6.69219 20.2694 6.90481 20.7981 7.41052C21.3268 7.91622 21.5491 8.54976 21.6518 9.2805C21.75 9.97958 21.75 10.8651 21.75 11.9486L21.75 11.9486L21.75 12.0514L21.75 12.0514Z',
  d5: 'M17.1875 1.2677C17.7299 1.37134 18.0857 1.89511 17.9821 2.43758C17.8522 3.11713 17.5981 3.73095 17.0812 4.23423C16.4874 4.8123 15.7527 5.04454 14.9474 5.14995C14.1829 5.25001 13.2203 5.24998 12.0672 5.24994L11.9324 5.24994C10.7793 5.24998 9.81673 5.25001 9.05228 5.14995C8.2469 5.04454 7.51225 4.8123 6.91847 4.23423C6.40151 3.73095 6.1474 3.11713 6.01758 2.43758C5.91395 1.89511 6.2697 1.37134 6.81217 1.2677C7.35464 1.16407 7.87842 1.51982 7.98205 2.06229C8.06122 2.47668 8.17675 2.66796 8.31359 2.80118C8.47195 2.95535 8.71864 3.08922 9.31184 3.16687C9.93113 3.24792 10.7617 3.24994 11.9998 3.24994C13.2379 3.24994 14.0685 3.24792 14.6878 3.16687C15.281 3.08922 15.5277 2.95535 15.686 2.80118C15.8229 2.66797 15.9384 2.47668 16.0176 2.06229C16.1212 1.51982 16.645 1.16407 17.1875 1.2677Z',
  d6: 'M17.1875 22.7318C17.7299 22.6282 18.0857 22.1044 17.9821 21.5619C17.8522 20.8824 17.5981 20.2686 17.0812 19.7653C16.4874 19.1872 15.7527 18.955 14.9474 18.8496C14.1829 18.7495 13.2203 18.7495 12.0672 18.7496L11.9324 18.7496C10.7793 18.7495 9.81673 18.7495 9.05228 18.8496C8.2469 18.955 7.51225 19.1872 6.91847 19.7653C6.40151 20.2686 6.1474 20.8824 6.01758 21.5619C5.91395 22.1044 6.2697 22.6282 6.81217 22.7318C7.35464 22.8354 7.87842 22.4797 7.98205 21.9372C8.06122 21.5228 8.17675 21.3315 8.31359 21.1983C8.47195 21.0442 8.71864 20.9103 9.31184 20.8326C9.93113 20.7516 10.7617 20.7496 11.9998 20.7496C13.2379 20.7496 14.0685 20.7516 14.6878 20.8326C15.281 20.9103 15.5277 21.0442 15.686 21.1983C15.8229 21.3315 15.9384 21.5228 16.0176 21.9372C16.1212 22.4797 16.645 22.8354 17.1875 22.7318Z',
  d7: 'M3 7L21 7L20.9883 17L3 17L3 7Z',
  d8: 'M17 22L16 20L8 20L7 22',
  d9: 'M17 2L16 4L8 4L7 2',
  d10: 'M21.5306 6.46998C21.6713 6.61082 21.7502 6.80182 21.75 7.00088L21.7383 17.0009C21.7378 17.4148 21.4022 17.75 20.9883 17.75L3 17.75C2.58579 17.75 2.25 17.4142 2.25 17L2.25 7C2.25 6.80109 2.32902 6.61032 2.46967 6.46967C2.61032 6.32902 2.80109 6.25 3 6.25L21 6.25C21.1991 6.25 21.39 6.32914 21.5306 6.46998Z',
  d11: 'M15.3819 21.0455L16.1055 22.5L17.8943 21.6011L16.6179 19.0354H7.38186L6.10547 21.6011L7.89432 22.5L8.61793 21.0455H15.3819Z',
  d12: 'M15.3819 2.95453L16.1055 1.5L17.8943 2.39895L16.6179 4.96463L7.38186 4.96463L6.10547 2.39895L7.89432 1.5L8.61793 2.95453L15.3819 2.95453Z',
} as const;

export const IconCarouselVerticalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-vertical-stroke-rounded IconCarouselVerticalStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCarouselVerticalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-vertical-duotone-rounded IconCarouselVerticalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconCarouselVerticalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-vertical-twotone-rounded IconCarouselVerticalTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCarouselVerticalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-vertical-solid-rounded IconCarouselVerticalSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCarouselVerticalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-vertical-bulk-rounded IconCarouselVerticalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCarouselVerticalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-vertical-stroke-sharp IconCarouselVerticalStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCarouselVerticalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="carousel-vertical-solid-sharp IconCarouselVerticalSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCarouselVertical: TheIconSelfPack = {
  name: 'CarouselVertical',
  StrokeRounded: IconCarouselVerticalStrokeRounded,
  DuotoneRounded: IconCarouselVerticalDuotoneRounded,
  TwotoneRounded: IconCarouselVerticalTwotoneRounded,
  SolidRounded: IconCarouselVerticalSolidRounded,
  BulkRounded: IconCarouselVerticalBulkRounded,
  StrokeSharp: IconCarouselVerticalStrokeSharp,
  SolidSharp: IconCarouselVerticalSolidSharp,
};