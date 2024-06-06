import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 15V9C19 6.17157 19 4.75736 18.1213 3.87868C17.2426 3 15.8284 3 13 3H11C8.17157 3 6.75736 3 5.87868 3.87868C5 4.75736 5 6.17157 5 9V15C5 17.8284 5 19.2426 5.87868 20.1213C6.75736 21 8.17157 21 11 21H13C15.8284 21 17.2426 21 18.1213 20.1213C19 19.2426 19 17.8284 19 15Z',
  d2: 'M22 7V17',
  d3: 'M2 7V17',
  d4: 'M13.9995 8.50873C13.9995 9.61326 13.1041 10.5087 11.9995 10.5087C10.895 10.5087 9.99958 9.61326 9.99958 8.50873C9.99958 7.40419 10.895 6.50879 11.9995 6.50879C13.1041 6.50879 13.9995 7.40419 13.9995 8.50873Z',
  d5: 'M8.04443 15.7322C9.10278 14.1029 10.7835 13.4923 11.9995 13.4935C13.2156 13.4948 14.847 14.1029 15.9054 15.7322C15.9738 15.8376 15.9926 15.9673 15.9309 16.0768C15.6834 16.5157 14.9149 17.3866 14.3598 17.4457C13.7221 17.5135 12.0537 17.523 12.0008 17.5233C11.9478 17.523 10.228 17.5135 9.58996 17.4457C9.0349 17.3866 8.26641 16.5157 8.0189 16.0768C7.95714 15.9673 7.976 15.8376 8.04443 15.7322Z',
  d6: 'M19 9V15C19 17.8284 19 19.2426 18.1213 20.1213C17.2426 21 15.8284 21 13 21H11C8.17157 21 6.75736 21 5.87868 20.1213C5 19.2426 5 17.8284 5 15V9C5 6.17157 5 4.75736 5.87868 3.87868C6.75736 3 8.17157 3 11 3H13C15.8284 3 17.2426 3 18.1213 3.87868C19 4.75736 19 6.17157 19 9ZM12 10.5C13.1046 10.5 14 9.60457 14 8.5C14 7.39543 13.1046 6.5 12 6.5C10.8954 6.5 10 7.39543 10 8.5C10 9.60457 10.8954 10.5 12 10.5ZM9.37585 14.3792C9.45484 14.3289 9.52757 14.2826 9.59003 14.2408C11.0645 13.2531 12.9355 13.2531 14.41 14.2408C14.4725 14.2827 14.5451 14.3289 14.6242 14.3793C15.3405 14.8352 16.5875 15.6291 15.6833 16.5983C15.1928 17.124 14.6464 17.5 13.9596 17.5H10.0404C9.35355 17.5 8.80725 17.124 8.31674 16.5983C7.41248 15.6291 8.65963 14.8352 9.37585 14.3792Z',
  d7: 'M13.9999 8.50873C13.9999 9.61326 13.1045 10.5087 11.9999 10.5087C10.8954 10.5087 10 9.61326 10 8.50873C10 7.40419 10.8954 6.50879 11.9999 6.50879C13.1045 6.50879 13.9999 7.40419 13.9999 8.50873Z',
  d8: 'M8.04443 15.7319C9.10278 14.1026 10.7835 13.492 11.9995 13.4932C13.2156 13.4945 14.847 14.1026 15.9054 15.7319C15.9738 15.8373 15.9926 15.967 15.9309 16.0765C15.6834 16.5154 14.9149 17.3863 14.3598 17.4454C13.7221 17.5132 12.0537 17.5227 12.0008 17.523C11.9478 17.5227 10.228 17.5132 9.58996 17.4454C9.0349 17.3863 8.26641 16.5154 8.0189 16.0765C7.95714 15.967 7.976 15.8373 8.04443 15.7319Z',
  d9: 'M14.0248 8.49261C14.0248 9.59715 13.1294 10.4926 12.0249 10.4926C10.9204 10.4926 10.025 9.59715 10.025 8.49261C10.025 7.38808 10.9204 6.49268 12.0249 6.49268C13.1294 6.49268 14.0248 7.38808 14.0248 8.49261Z',
  d10: 'M8.06982 15.7161C9.12817 14.0868 10.8089 13.4762 12.0249 13.4774C13.241 13.4787 14.8724 14.0868 15.9307 15.7161C15.9992 15.8215 16.018 15.9512 15.9563 16.0607C15.7088 16.4996 14.9403 17.3705 14.3852 17.4296C13.7475 17.4974 12.0791 17.5069 12.0262 17.5072C11.9732 17.5069 10.2534 17.4974 9.61535 17.4296C9.06029 17.3705 8.2918 16.4996 8.04429 16.0607C7.98254 15.9512 8.00139 15.8215 8.06982 15.7161Z',
  d11: 'M13.0549 2.25H13.0549H13.0549H10.9451H10.9451H10.9451C9.57752 2.24998 8.47521 2.24996 7.60825 2.36652C6.70814 2.48754 5.95027 2.74643 5.34835 3.34835C4.74643 3.95027 4.48754 4.70814 4.36652 5.60825C4.24996 6.47521 4.24998 7.57752 4.25 8.9451V8.94511V8.94513V15.0549V15.0549V15.0549C4.24998 16.4225 4.24996 17.5248 4.36652 18.3918C4.48754 19.2919 4.74643 20.0497 5.34835 20.6517C5.95027 21.2536 6.70814 21.5125 7.60825 21.6335C8.47522 21.75 9.57754 21.75 10.9451 21.75H13.0549C14.4225 21.75 15.5248 21.75 16.3918 21.6335C17.2919 21.5125 18.0497 21.2536 18.6517 20.6517C19.2536 20.0497 19.5125 19.2919 19.6335 18.3918C19.75 17.5248 19.75 16.4225 19.75 15.0549V15.0549V15.0549V8.94513V8.94512V8.94512C19.75 7.57753 19.75 6.47522 19.6335 5.60825C19.5125 4.70814 19.2536 3.95027 18.6517 3.34835C18.0497 2.74643 17.2919 2.48754 16.3918 2.36652C15.5248 2.24996 14.4225 2.24998 13.0549 2.25ZM12.0001 5.75C10.4813 5.75 9.2501 6.98122 9.2501 8.5C9.2501 10.0188 10.4813 11.25 12.0001 11.25C13.5189 11.25 14.7501 10.0188 14.7501 8.5C14.7501 6.98122 13.5189 5.75 12.0001 5.75ZM16.2143 14.6697C15.8435 14.2614 15.1375 13.8137 14.8275 13.6177C13.1004 12.4608 10.8998 12.4608 9.17273 13.6177C8.86267 13.8137 8.15667 14.2614 7.78592 14.6697C7.55059 14.9288 7.30253 15.2967 7.25726 15.7626C7.20867 16.2627 7.40665 16.7221 7.76846 17.1099C8.31558 17.6963 9.04719 18.25 10.0405 18.25H13.9597C14.953 18.25 15.6846 17.6963 16.2317 17.1099C16.5935 16.7221 16.7915 16.2627 16.7429 15.7626C16.6977 15.2967 16.4496 14.9288 16.2143 14.6697Z',
  d12: 'M22 6.25C22.4142 6.25 22.75 6.58579 22.75 7V17C22.75 17.4142 22.4142 17.75 22 17.75C21.5858 17.75 21.25 17.4142 21.25 17V7C21.25 6.58579 21.5858 6.25 22 6.25Z',
  d13: 'M2 6.25C2.41421 6.25 2.75 6.58579 2.75 7V17C2.75 17.4142 2.41421 17.75 2 17.75C1.58579 17.75 1.25 17.4142 1.25 17V7C1.25 6.58579 1.58579 6.25 2 6.25Z',
  d14: 'M13.0549 2.25C14.4225 2.24998 15.5248 2.24996 16.3918 2.36652C17.2919 2.48754 18.0497 2.74643 18.6517 3.34835C19.2536 3.95027 19.5125 4.70814 19.6335 5.60825C19.75 6.47522 19.75 7.57754 19.75 8.94512V8.94513V15.0549V15.0549C19.75 16.4225 19.75 17.5248 19.6335 18.3918C19.5125 19.2919 19.2536 20.0497 18.6517 20.6517C18.0497 21.2536 17.2919 21.5125 16.3918 21.6335C15.5248 21.75 14.4225 21.75 13.0549 21.75H10.9451C9.57754 21.75 8.47522 21.75 7.60825 21.6335C6.70814 21.5125 5.95027 21.2536 5.34835 20.6517C4.74643 20.0497 4.48754 19.2919 4.36652 18.3918C4.24996 17.5248 4.24998 16.4225 4.25 15.0549V15.0549V8.94513V8.94511C4.24998 7.57753 4.24996 6.47521 4.36652 5.60825C4.48754 4.70814 4.74643 3.95027 5.34835 3.34835C5.95027 2.74643 6.70814 2.48754 7.60825 2.36652C8.47521 2.24996 9.57753 2.24998 10.9451 2.25H10.9451H13.0549H13.0549Z',
  d15: 'M9.2501 8.5C9.2501 6.98122 10.4813 5.75 12.0001 5.75C13.5189 5.75 14.7501 6.98122 14.7501 8.5C14.7501 10.0188 13.5189 11.25 12.0001 11.25C10.4813 11.25 9.2501 10.0188 9.2501 8.5Z',
  d16: 'M9.17272 13.6177C10.8998 12.4608 13.1004 12.4608 14.8275 13.6177C15.1375 13.8137 15.8435 14.2614 16.2143 14.6697C16.4496 14.9288 16.6977 15.2967 16.7429 15.7626C16.7915 16.2627 16.5935 16.7221 16.2317 17.1099C15.6846 17.6963 14.953 18.25 13.9597 18.25H10.0405C9.04719 18.25 8.31558 17.6963 7.76846 17.1099C7.40665 16.7221 7.20867 16.2627 7.25726 15.7626C7.30253 15.2967 7.55059 14.9288 7.78592 14.6697C8.15667 14.2614 8.86266 13.8137 9.17272 13.6177Z',
  d17: 'M19 3H5V21H19V3Z',
  d18: 'M14 8.5C14 9.60457 13.1046 10.5 12 10.5C10.8954 10.5 10 9.60457 10 8.5C10 7.39543 10.8954 6.5 12 6.5C13.1046 6.5 14 7.39543 14 8.5Z',
  d19: 'M16 17.5H8C8 15.0454 9.79086 13.5 12 13.5C14.2091 13.5 16 15.0454 16 17.5Z',
  d20: 'M22 6.5V17.5',
  d21: 'M2 6.5V17.5',
  d22: 'M4.25 3C4.25 2.58579 4.58579 2.25 5 2.25H19C19.4142 2.25 19.75 2.58579 19.75 3V21C19.75 21.4142 19.4142 21.75 19 21.75H5C4.58579 21.75 4.25 21.4142 4.25 21V3ZM9.25 8.5C9.25 6.98122 10.4812 5.75 12 5.75C13.5188 5.75 14.75 6.98122 14.75 8.5C14.75 10.0188 13.5188 11.25 12 11.25C10.4812 11.25 9.25 10.0188 9.25 8.5ZM12 12.75C9.40759 12.75 7.25 14.6009 7.25 17.5C7.25 17.9142 7.58579 18.25 8 18.25H16C16.4142 18.25 16.75 17.9142 16.75 17.5C16.75 14.6009 14.5924 12.75 12 12.75Z',
  d23: 'M20.75 17.5V6.5H22.75V17.5H20.75Z',
  d24: 'M1.25 17.5V6.5H3.25V17.5H1.25Z',
};

export const IconConferenceStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="conference-stroke-rounded IconConferenceStrokeRounded"
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
      />
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
    </TheIconWrapper>
  );
};

export const IconConferenceDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="conference-duotone-rounded IconConferenceDuotoneRounded"
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconConferenceTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="conference-twotone-rounded IconConferenceTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconConferenceSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="conference-solid-rounded IconConferenceSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconConferenceBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="conference-bulk-rounded IconConferenceBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconConferenceStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="conference-stroke-sharp IconConferenceStrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconConferenceSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="conference-solid-sharp IconConferenceSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfConference: TheIconSelfPack = {
  name: 'Conference',
  StrokeRounded: IconConferenceStrokeRounded,
  DuotoneRounded: IconConferenceDuotoneRounded,
  TwotoneRounded: IconConferenceTwotoneRounded,
  SolidRounded: IconConferenceSolidRounded,
  BulkRounded: IconConferenceBulkRounded,
  StrokeSharp: IconConferenceStrokeSharp,
  SolidSharp: IconConferenceSolidSharp,
};