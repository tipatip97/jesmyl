import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z',
  d2: 'M18.2222 17C19.6167 18.9885 20.2838 20.0475 19.8865 20.8999C19.8466 20.9854 19.7999 21.0679 19.7469 21.1467C19.1724 22 17.6875 22 14.7178 22H9.28223C6.31251 22 4.82765 22 4.25311 21.1467C4.20005 21.0679 4.15339 20.9854 4.11355 20.8999C3.71619 20.0475 4.38326 18.9885 5.77778 17',
  d3: 'M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z',
  d4: 'M12.0002 18C12.4693 18 12.9201 17.8184 13.2574 17.4936C13.4929 17.2667 13.7344 17.0377 13.9787 16.806C16.9462 13.9914 20.3292 10.7827 18.4666 6.30373C17.3752 3.67933 14.7554 2 12.0002 2C9.24494 2 6.6251 3.67932 5.53371 6.30373C3.67864 10.7645 7.02435 13.9494 9.97577 16.759C10.2358 17.0066 10.4928 17.2512 10.7429 17.4936C11.0802 17.8184 11.531 18 12.0002 18ZM12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z',
  d5: 'M5.99794 16.4272C6.45239 16.7411 6.56638 17.3639 6.25254 17.8183C5.67012 18.6617 5.30838 19.2384 5.12382 19.6748C4.9515 20.0822 5.00571 20.1969 5.01938 20.2258L5.02019 20.2276C5.03784 20.2654 5.05874 20.3025 5.08287 20.3383C5.11863 20.3914 5.25287 20.5541 5.99963 20.6519C6.73331 20.748 7.76785 20.7501 9.2825 20.7501H14.718C16.2327 20.7501 17.2672 20.748 18.0009 20.6519C18.7477 20.5541 18.8819 20.3914 18.9177 20.3383L18.9804 20.2276L18.9812 20.2258C18.9948 20.1969 19.049 20.0822 18.8767 19.6748C18.6922 19.2384 18.3304 18.6617 17.748 17.8183C17.4342 17.3639 17.5482 16.7411 18.0026 16.4272C18.4571 16.1134 19.0799 16.2274 19.3937 16.6818C19.9658 17.5103 20.4433 18.2445 20.7187 18.8957C21.0028 19.5672 21.1437 20.3204 20.7931 21.0725C20.7311 21.2056 20.6586 21.3336 20.5766 21.4554C20.0379 22.2555 19.1424 22.5195 18.2607 22.635C17.3813 22.7502 16.2141 22.7501 14.793 22.7501H9.20757H9.20757C7.78644 22.7501 6.61928 22.7502 5.73987 22.635C4.85814 22.5195 3.96267 22.2555 3.4239 21.4554C3.34191 21.3336 3.26949 21.2056 3.20744 21.0725C2.85686 20.3204 2.99778 19.5672 3.2818 18.8957C3.55721 18.2445 4.03474 17.5103 4.60683 16.6818C4.92067 16.2274 5.54349 16.1134 5.99794 16.4272Z',
  d6: 'M12.0005 1.25C8.94965 1.25 6.05208 3.10493 4.84158 6.01574C3.71464 8.72562 4.32729 11.035 5.59274 13.0023C6.62554 14.6079 8.13245 16.0411 9.47688 17.3198C9.73237 17.5628 9.98199 17.8002 10.2214 18.0322L10.223 18.0338C10.7003 18.4935 11.3377 18.75 12.0005 18.75C12.6633 18.75 13.3008 18.4935 13.7781 18.0337C14.0042 17.8159 14.2392 17.5932 14.4795 17.3655L14.4802 17.3648L14.4806 17.3645C15.8394 16.0769 17.367 14.6292 18.4106 13.0032C19.6745 11.034 20.285 8.72228 19.1595 6.01574C17.949 3.10493 15.0514 1.25 12.0005 1.25ZM12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6Z',
  d7: 'M4.84158 6.01574C6.05208 3.10493 8.94965 1.25 12.0005 1.25C15.0514 1.25 17.949 3.10493 19.1595 6.01574C20.285 8.72228 19.6745 11.034 18.4106 13.0032C17.367 14.6292 15.8394 16.0769 14.4806 17.3645L14.4802 17.3648C14.2397 17.5928 14.0044 17.8157 13.7781 18.0337C13.3008 18.4935 12.6633 18.75 12.0005 18.75C11.3377 18.75 10.7003 18.4935 10.223 18.0338L10.2214 18.0322C9.98199 17.8002 9.73237 17.5628 9.47688 17.3198C8.13245 16.0411 6.62554 14.6079 5.59274 13.0023C4.32729 11.035 3.71464 8.72562 4.84158 6.01574Z',
  d8: 'M9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9Z',
  d9: 'M18 17L20 22H4L6 17',
  d10: 'M19 9.2C19 14.8 12 18 12 18C12 18 5 14.8 5 9.2C5 5.22355 8.13401 2 12 2C15.866 2 19 5.22355 19 9.2Z',
  d11: 'M3.07153 21.3784L5.07153 16.3784L6.92848 17.1212L5.47704 20.7498H18.523L17.0715 17.1212L18.9285 16.3784L20.9285 21.3784C21.0517 21.6865 21.0141 22.0357 20.8281 22.3104C20.642 22.5852 20.3318 22.7498 20 22.7498H4C3.66818 22.7498 3.35797 22.5852 3.17194 22.3104C2.98591 22.0357 2.94829 21.6865 3.07153 21.3784Z',
  d12: 'M11.3562 18.5185C11.4576 18.5707 12 18.8247 12 18.8247C12 18.8247 12.5424 18.5707 12.6438 18.5185C12.8465 18.4143 13.1329 18.2604 13.4751 18.0583C14.1578 17.6552 15.0712 17.0554 15.9881 16.2694C17.7997 14.7167 19.75 12.3269 19.75 9.2C19.75 4.82939 16.3 1.25 12 1.25C7.70002 1.25 4.25 4.82939 4.25 9.2C4.25 12.3269 6.20032 14.7167 8.01191 16.2694C8.92884 17.0554 9.84219 17.6552 10.5249 18.0583C10.8671 18.2604 11.1535 18.4143 11.3562 18.5185ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z',
};

export const IconLocation03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-03-stroke-rounded IconLocation03StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-03-duotone-rounded IconLocation03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-03-twotone-rounded IconLocation03TwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-03-solid-rounded IconLocation03SolidRounded"
    >
      <path 
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

export const IconLocation03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-03-bulk-rounded IconLocation03BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-03-stroke-sharp IconLocation03StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocation03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-03-solid-sharp IconLocation03SolidSharp"
    >
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

export const iconPackOfLocation03: TheIconSelfPack = {
  name: 'Location03',
  StrokeRounded: IconLocation03StrokeRounded,
  DuotoneRounded: IconLocation03DuotoneRounded,
  TwotoneRounded: IconLocation03TwotoneRounded,
  SolidRounded: IconLocation03SolidRounded,
  BulkRounded: IconLocation03BulkRounded,
  StrokeSharp: IconLocation03StrokeSharp,
  SolidSharp: IconLocation03SolidSharp,
};