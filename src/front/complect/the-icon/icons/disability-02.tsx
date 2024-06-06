import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5 10L9.5 9L7 12',
  d2: 'M14 6C12.8954 6 12 5.10457 12 4C12 2.89543 12.8954 2 14 2C15.1046 2 16 2.89543 16 4C16 5.10457 15.1046 6 14 6Z',
  d3: 'M15.5 19.4826C14.3982 21.0072 12.6003 22 10.5696 22C7.21743 22 4.5 19.295 4.5 15.9582C4.5 15.0829 4.66357 14.251 5 13.5',
  d4: 'M12.6493 8L11.8965 9.84615C11.1304 11.7248 10.7474 12.6641 11.1832 13.3321C11.619 14 12.6149 14 14.6067 14C15.3014 14 15.9714 13.8192 16.3579 14.4961L19.5 20',
  d5: 'M14 5.875C12.8954 5.875 12 4.97957 12 3.875C12 2.77043 12.8954 1.875 14 1.875C15.1046 1.875 16 2.77043 16 3.875C16 4.97957 15.1046 5.875 14 5.875Z',
  d6: 'M11.25 3.875C11.25 2.35622 12.4812 1.125 14 1.125C15.5188 1.125 16.75 2.35622 16.75 3.875C16.75 5.39378 15.5188 6.625 14 6.625C12.4812 6.625 11.25 5.39378 11.25 3.875Z',
  d7: 'M5.40884 12.4626C5.91286 12.6884 6.1384 13.2801 5.9126 13.7841C5.64006 14.3924 5.5 15.0828 5.5 15.8335C5.5 18.6137 7.76538 20.8752 10.5696 20.8752C12.2669 20.8752 13.7683 20.0468 14.6895 18.7721C15.013 18.3245 15.6381 18.2239 16.0857 18.5473C16.5334 18.8708 16.634 19.496 16.3105 19.9436C15.0281 21.7181 12.9338 22.8752 10.5696 22.8752C6.66948 22.8752 3.5 19.7269 3.5 15.8335C3.5 14.8334 3.68707 13.86 4.0874 12.9664C4.31319 12.4624 4.90483 12.2368 5.40884 12.4626Z',
  d8: 'M12.8683 7.33601C13.3797 7.54455 13.6252 8.12817 13.4167 8.63957L12.8225 10.0968C12.4273 11.066 12.1752 11.6908 12.0598 12.1566C12.0049 12.3784 11.9965 12.5077 12.0011 12.5795C12.0045 12.634 12.0143 12.6489 12.0202 12.6579C12.0204 12.6581 12.0205 12.6584 12.0207 12.6587C12.021 12.6591 12.0213 12.6595 12.0215 12.6599C12.0268 12.6681 12.0338 12.679 12.0731 12.6988C12.1294 12.7273 12.2429 12.7678 12.4609 12.8008C12.9209 12.8703 13.5771 12.8731 14.6067 12.8731C14.706 12.8731 14.7934 12.869 14.9011 12.8639C14.9547 12.8614 15.0132 12.8587 15.0808 12.8561C15.2572 12.8493 15.4881 12.8445 15.727 12.8756C16.2753 12.947 16.8481 13.2108 17.2264 13.8734L20.3685 19.3773C20.6423 19.8569 20.4754 20.4677 19.9958 20.7415C19.5162 21.0153 18.9054 20.8485 18.6316 20.3688L15.4895 14.865C15.4888 14.8638 15.4882 14.8627 15.4876 14.8617C15.4822 14.8608 15.476 14.8598 15.4688 14.8589C15.405 14.8506 15.314 14.8486 15.1573 14.8546C15.1245 14.8559 15.0858 14.8577 15.043 14.8597C14.9167 14.8655 14.7551 14.8731 14.6067 14.8731C14.581 14.8731 14.5554 14.8731 14.5299 14.8731C13.5999 14.8731 12.7896 14.8732 12.162 14.7783C11.4937 14.6773 10.7922 14.4359 10.3457 13.7515C9.90336 13.0735 9.95548 12.3337 10.1185 11.6757C10.2055 11.3244 10.3418 10.9299 10.5084 10.4953L9.76121 10.1217L7.76825 12.5132C7.41468 12.9375 6.78412 12.9948 6.35984 12.6413C5.93556 12.2877 5.87824 11.6571 6.2318 11.2329L8.7318 8.23287C9.02888 7.87637 9.53218 7.77109 9.94724 7.97862L11.2589 8.63446L11.5648 7.88439C11.7733 7.37299 12.3569 7.12747 12.8683 7.33601Z',
  d9: 'M11.5 10L9 9L7.5 12.5',
  d10: 'M12.649 8L10.5 14H15.9996L19.4996 20',
  d11: 'M11.75 4C11.75 2.61929 12.8693 1.5 14.25 1.5C15.6307 1.5 16.75 2.61929 16.75 4C16.75 5.38071 15.6307 6.5 14.25 6.5C12.8693 6.5 11.75 5.38071 11.75 4Z',
  d12: 'M3.75 15.4579C3.75 14.4578 3.93707 13.4844 4.3374 12.5908L6.1626 13.4085C5.89006 14.0169 5.75 14.7072 5.75 15.4579C5.75 18.2381 8.01538 20.4997 10.8196 20.4997C12.5169 20.4997 14.0183 19.6712 14.9395 18.3965L16.5605 19.568C15.2781 21.3426 13.1838 22.4997 10.8196 22.4997C6.91948 22.4997 3.75 19.3513 3.75 15.4579Z',
  d13: 'M10.8618 10.2223L9.80857 13.1631C9.69886 13.4694 9.74503 13.8099 9.93233 14.076C10.1196 14.342 10.4246 14.5003 10.75 14.5003H15.6753L18.5224 20.0041L20.25 18.9964L17.1134 12.9964C16.9342 12.6892 16.6053 12.5003 16.2496 12.5003H12.1704L13.8404 7.83745L11.9575 7.16309L11.5367 8.33818L9.62061 7.57176C9.11665 7.37018 8.54389 7.60742 8.33008 8.10632L6.83008 11.6063L8.66837 12.3942L9.78394 9.79116L10.8618 10.2223Z',
};

export const IconDisability02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-02-stroke-rounded IconDisability02StrokeRounded"
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

export const IconDisability02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-02-duotone-rounded IconDisability02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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

export const IconDisability02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-02-twotone-rounded IconDisability02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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

export const IconDisability02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-02-solid-rounded IconDisability02SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDisability02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-02-bulk-rounded IconDisability02BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDisability02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-02-stroke-sharp IconDisability02StrokeSharp"
    >
      <path 
        d={d.d9} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDisability02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="disability-02-solid-sharp IconDisability02SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDisability02: TheIconSelfPack = {
  name: 'Disability02',
  StrokeRounded: IconDisability02StrokeRounded,
  DuotoneRounded: IconDisability02DuotoneRounded,
  TwotoneRounded: IconDisability02TwotoneRounded,
  SolidRounded: IconDisability02SolidRounded,
  BulkRounded: IconDisability02BulkRounded,
  StrokeSharp: IconDisability02StrokeSharp,
  SolidSharp: IconDisability02SolidSharp,
};