import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 9L11.7707 4.73514C13.0647 3.57838 13.7117 3 14.5 3C15.2883 3 15.9353 3.57838 17.2293 4.73514L22 9',
  d2: 'M8.5 8V20M20.5 20V8',
  d3: 'M3.5 14V20',
  d4: 'M2 20H22',
  d5: 'M12 20V15.9997C12 15.0571 12 14.5858 12.2929 14.2929C12.5858 14 13.0572 14 14 14H15C15.9428 14 16.4142 14 16.7071 14.2929C17 14.5858 17 15.0572 17 16V20',
  d6: 'M13.5 11H15.5M13.5 8H15.5',
  d7: 'M11.7707 4.73514C13.0647 3.57838 13.7117 3 14.5 3C15.2883 3 15.9353 3.57838 17.2293 4.73514L20.5 7.65905V20H17V16C17 15.0572 17 14.5858 16.7071 14.2929C16.4142 14 15.9428 14 15 14H14C13.0572 14 12.5858 14 12.2929 14.2929C12 14.5858 12 15.0571 12 15.9997V20H8.5V7.65905L11.7707 4.73514Z',
  d8: 'M1.83934 10.6358C2.21734 10.1318 2.79679 9.75 3.5 9.75C4.20321 9.75 4.78266 10.1318 5.16066 10.6358C5.53849 11.1396 5.75 11.8011 5.75 12.5C5.75 13.1989 5.53849 13.8604 5.16066 14.3642C4.92761 14.6749 4.61799 14.9392 4.25 15.0962V20.5C4.25 20.9142 3.91421 21.25 3.5 21.25C3.08579 21.25 2.75 20.9142 2.75 20.5V15.0962C2.38201 14.9392 2.07239 14.6749 1.83934 14.3642C1.46151 13.8604 1.25 13.1989 1.25 12.5C1.25 11.8011 1.46151 11.1396 1.83934 10.6358Z',
  d9: 'M1.25 20.5C1.25 20.0858 1.58579 19.75 2 19.75H22C22.4142 19.75 22.75 20.0858 22.75 20.5C22.75 20.9142 22.4142 21.25 22 21.25H2C1.58579 21.25 1.25 20.9142 1.25 20.5Z',
  d10: 'M14 13.75H15L15.0448 13.75H15.0448C15.4776 13.75 15.8744 13.7499 16.1972 13.7933C16.5527 13.8411 16.9284 13.9535 17.2374 14.2626C17.5465 14.5716 17.6589 14.9473 17.7067 15.3028C17.7501 15.6256 17.7501 16.0224 17.75 16.4552V16.4552V16.4553V16.4553C17.7499 17.3574 17.7499 18.2596 17.75 19.1618L17.75 20.5C17.75 20.9131 17.416 21.2482 17.0033 21.25H20.5C20.9142 21.25 21.25 20.9142 21.25 20.5V9.83553L21.5002 10.0591C21.809 10.3352 22.2831 10.3087 22.5592 9.99986C22.8352 9.69105 22.8087 9.21692 22.4999 8.94085L17.6927 4.64341C17.0768 4.09279 16.5612 3.63184 16.099 3.3151C15.6091 2.97945 15.1024 2.75 14.5 2.75C13.8976 2.75 13.3909 2.97945 12.901 3.3151C12.4388 3.63184 11.9232 4.09278 11.3073 4.6434L6.50015 8.94086C6.19134 9.21692 6.1648 9.69105 6.44086 9.99986C6.71692 10.3087 7.19106 10.3352 7.49986 10.0591L7.75001 9.83553L7.75001 20.5C7.75001 20.9142 8.08579 21.25 8.50001 21.25H11.9967C11.584 21.2482 11.25 20.9131 11.25 20.5L11.25 19.1628L11.25 16.455C11.25 16.0223 11.2499 15.6255 11.2933 15.3027C11.3411 14.9473 11.4536 14.5716 11.7626 14.2626C12.0716 13.9535 12.4473 13.8411 12.8028 13.7933C13.1256 13.7499 13.5224 13.75 13.9552 13.75H13.9553L14 13.75ZM16.25 20.5C16.25 20.9131 16.584 21.2482 16.9967 21.25H12.0033C12.416 21.2482 12.75 20.9131 12.75 20.5V16.4997C12.75 16.0072 12.7516 15.7133 12.7799 15.5026C12.8015 15.3422 12.8344 15.3026 13.0027 15.2799C13.2134 15.2516 13.5074 15.25 14 15.25H15C15.4926 15.25 15.7866 15.2516 15.9973 15.2799C16.1657 15.3026 16.1985 15.3422 16.2201 15.5027C16.2484 15.7134 16.25 16.0074 16.25 16.5V20.5ZM13.5 6.75C13.0858 6.75 12.75 7.08579 12.75 7.5C12.75 7.91421 13.0858 8.25 13.5 8.25L15.5 8.25C15.9142 8.25 16.25 7.91421 16.25 7.5C16.25 7.08579 15.9142 6.75 15.5 6.75L13.5 6.75ZM13.5 9.75C13.0858 9.75 12.75 10.0858 12.75 10.5C12.75 10.9142 13.0858 11.25 13.5 11.25L15.5 11.25C15.9142 11.25 16.25 10.9142 16.25 10.5C16.25 10.0858 15.9142 9.75 15.5 9.75L13.5 9.75Z',
  d11: 'M21.5002 10.0591L21.25 9.83553V20.5C21.25 20.9142 20.9142 21.25 20.5 21.25H8.50001C8.08579 21.25 7.75001 20.9142 7.75001 20.5V9.83553L7.49986 10.0591C7.19106 10.3352 6.71692 10.3087 6.44086 9.99986C6.1648 9.69105 6.19134 9.21692 6.50015 8.94085L11.3073 4.6434C11.9232 4.09279 12.4388 3.63184 12.901 3.3151C13.3909 2.97945 13.8976 2.75 14.5 2.75C15.1024 2.75 15.6091 2.97945 16.099 3.3151C16.5612 3.63184 17.0768 4.09279 17.6927 4.64341L22.4999 8.94085C22.8087 9.21692 22.8352 9.69105 22.5592 9.99986C22.2831 10.3087 21.809 10.3352 21.5002 10.0591Z',
  d12: 'M14 13.75H15C15.4502 13.75 15.8633 13.7484 16.1972 13.7933C16.5527 13.8411 16.9284 13.9535 17.2374 14.2626C17.5465 14.5716 17.6589 14.9473 17.7067 15.3028C17.7501 15.6256 17.7501 16.0224 17.75 16.4553V16.4553C17.7498 17.8035 17.75 19.1518 17.75 20.5C17.75 20.9142 17.4142 21.25 17 21.25C16.5858 21.25 16.25 20.9142 16.25 20.5V16.5C16.25 16.0074 16.2484 15.7134 16.2201 15.5027C16.1985 15.3422 16.1657 15.3026 15.9973 15.2799C15.7866 15.2516 15.4926 15.25 15 15.25H14C13.5074 15.25 13.2134 15.2516 13.0027 15.2799C12.8344 15.3026 12.8015 15.3422 12.7799 15.5026C12.7516 15.7133 12.75 16.0072 12.75 16.4997V20.5C12.75 20.9142 12.4142 21.25 12 21.25C11.5858 21.25 11.25 20.9142 11.25 20.5C11.25 19.1517 11.2502 17.8033 11.25 16.455C11.25 16.0223 11.2499 15.6255 11.2933 15.3027C11.3411 14.9473 11.4536 14.5716 11.7626 14.2626C12.0716 13.9535 12.4473 13.8411 12.8028 13.7933C13.1367 13.7484 13.5498 13.75 14 13.75Z',
  d13: 'M12.75 7.5C12.75 7.08579 13.0858 6.75 13.5 6.75H15.5C15.9142 6.75 16.25 7.08579 16.25 7.5C16.25 7.91421 15.9142 8.25 15.5 8.25H13.5C13.0858 8.25 12.75 7.91421 12.75 7.5ZM12.75 10.5C12.75 10.0858 13.0858 9.75 13.5 9.75H15.5C15.9142 9.75 16.25 10.0858 16.25 10.5C16.25 10.9142 15.9142 11.25 15.5 11.25H13.5C13.0858 11.25 12.75 10.9142 12.75 10.5Z',
  d14: 'M7 9L14.5 3L22 9',
  d15: 'M12 20V14H17V20',
  d16: 'M3.24988 15.0962V20.5H4.74988V15.0962C5.11787 14.9392 5.42749 14.6749 5.66054 14.3642C6.03836 13.8604 6.24988 13.1989 6.24988 12.5C6.24988 11.8011 6.03836 11.1396 5.66054 10.6358C5.28254 10.1318 4.70309 9.75 3.99988 9.75C3.29667 9.75 2.71722 10.1318 2.33922 10.6358C1.96139 11.1396 1.74988 11.8011 1.74988 12.5C1.74988 13.1989 1.96139 13.8604 2.33922 14.3642C2.57227 14.6749 2.88189 14.9392 3.24988 15.0962Z',
  d17: 'M22.2502 21.25H2.25024V19.75H22.2502V21.25Z',
  d18: 'M7.53113 9.86029L7.53113 20.5H11.0311V14.5C11.0311 14.0858 11.3669 13.75 11.7811 13.75H16.7811C17.1953 13.75 17.5311 14.0858 17.5311 14.5V20.5L21.0311 20.5V9.86065L21.3124 10.0857L22.2494 8.91435L14.7494 2.91435C14.4755 2.69522 14.0863 2.69522 13.8124 2.91435L6.31238 8.91435L7.24942 10.0857L7.53113 9.86029ZM12.5311 15.25V20.5H16.0311V15.25H12.5311ZM13.2811 9.25L15.2811 9.25V7.75L13.2811 7.75V9.25ZM15.2811 10.75L13.2811 10.75V12.25L15.2811 12.25V10.75Z',
};

export const IconHouse04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="house-04-stroke-rounded IconHouse04StrokeRounded"
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
      <ellipse 
        cx="3.5" 
        cy="12" 
        rx="1.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconHouse04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="house-04-duotone-rounded IconHouse04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
      <ellipse 
        cx="3.5" 
        cy="12" 
        rx="1.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconHouse04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="house-04-twotone-rounded IconHouse04TwotoneRounded"
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
      <ellipse 
        cx="3.5" 
        cy="12" 
        rx="1.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="house-04-solid-rounded IconHouse04SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="house-04-bulk-rounded IconHouse04BulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="house-04-stroke-sharp IconHouse04StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <ellipse 
        cx="3.5" 
        cy="12" 
        rx="1.5" 
        ry="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="house-04-solid-sharp IconHouse04SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHouse04: TheIconSelfPack = {
  name: 'House04',
  StrokeRounded: IconHouse04StrokeRounded,
  DuotoneRounded: IconHouse04DuotoneRounded,
  TwotoneRounded: IconHouse04TwotoneRounded,
  SolidRounded: IconHouse04SolidRounded,
  BulkRounded: IconHouse04BulkRounded,
  StrokeSharp: IconHouse04StrokeSharp,
  SolidSharp: IconHouse04SolidSharp,
};