import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 17L12 3M12 3C11.6272 3 11.3272 3.34263 10.7272 4.02777L9 6.00006M12 3C12.3728 3 12.6728 3.34263 13.2728 4.02777L15 6.00006',
  d2: 'M5 15C3.7492 15.6327 3 16.4385 3 17.3158C3 19.3505 7.02944 21 12 21C16.9706 21 21 19.3505 21 17.3158C21 16.4385 20.2508 15.6327 19 15',
  d3: 'M5.89232 14.5488C6.14162 15.0417 5.94422 15.6433 5.4514 15.8926C4.2666 16.4919 4 17.0448 4 17.3161C4 17.4699 4.07194 17.7114 4.40271 18.0315C4.73646 18.3546 5.27174 18.6915 6.01488 18.9957C7.49628 19.6021 9.61182 20.0002 12 20.0002C14.3882 20.0002 16.5037 19.6021 17.9851 18.9957C18.7283 18.6915 19.2635 18.3546 19.5973 18.0315C19.9281 17.7114 20 17.4699 20 17.3161C20 17.0448 19.7334 16.4919 18.5486 15.8926C18.0558 15.6433 17.8584 15.0417 18.1077 14.5488C18.357 14.056 18.9586 13.8586 19.4514 14.1079C20.7682 14.7741 22 15.8326 22 17.3161C22 18.1796 21.5683 18.9073 20.9882 19.4687C20.4111 20.0272 19.6283 20.4841 18.7428 20.8466C16.9668 21.5736 14.5824 22.0002 12 22.0002C9.41762 22.0002 7.03316 21.5736 5.2572 20.8466C4.37166 20.4841 3.58892 20.0272 3.01182 19.4687C2.43174 18.9073 2 18.1796 2 17.3161C2 15.8326 3.2318 14.7741 4.5486 14.1079C5.04141 13.8586 5.64302 14.056 5.89232 14.5488Z',
  d4: 'M13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5L11 7.39998C11 7.21142 11 7.11714 10.9414 7.05856C10.8828 6.99998 10.7886 6.99998 10.6 6.99998L8.99995 6.99998C8.62275 6.99998 8.27764 6.78772 8.10748 6.45107C7.93733 6.11443 7.9712 5.71051 8.19489 5.40679L8.19718 5.40369L8.20276 5.39614L8.22315 5.36871C8.24072 5.34513 8.26613 5.31119 8.29848 5.26836C8.36315 5.18274 8.45577 5.06134 8.5692 4.916C8.79522 4.62637 9.10766 4.23684 9.44842 3.84437C9.78486 3.45688 10.1686 3.04361 10.5356 2.71936C10.7179 2.55825 10.9197 2.39794 11.1278 2.27249C11.3085 2.16359 11.6227 2 12 2C12.3773 2 12.6915 2.16359 12.8721 2.27249C13.0802 2.39794 13.282 2.55825 13.4644 2.71937C13.8314 3.04362 14.2151 3.45689 14.5515 3.84439C14.8923 4.23686 15.2047 4.6264 15.4307 4.91603C15.5442 5.06137 15.6368 5.18278 15.7014 5.26839C15.7338 5.31123 15.7592 5.34517 15.7768 5.36875L15.7972 5.39618L15.8052 5.40699C16.0288 5.71072 16.0626 6.11447 15.8924 6.45111C15.7223 6.78775 15.3772 7 15 7L13.4 6.99999C13.2114 6.99999 13.1172 6.99999 13.0586 7.05857C13 7.11715 13 7.21143 13 7.39999L13 16.5Z',
  d5: 'M12 17L12 3.59344M16 7.00002L12 3L8 7.00002',
  d6: 'M12.0001 2L16.7072 6.70713L15.293 8.12134L13.0001 5.82844L13.0001 17.4142H11.0001L11.0001 5.82844L8.70719 8.12134L7.29297 6.70713L12.0001 2Z',
  d7: 'M5.4514 15.8921C4.2666 16.4914 4 17.0443 4 17.3156C4 17.4694 4.07194 17.7109 4.40271 18.031C4.73646 18.354 5.27174 18.691 6.01488 18.9952C7.49628 19.6016 9.61182 19.9997 12 19.9997C14.3882 19.9997 16.5037 19.6016 17.9851 18.9952C18.7283 18.691 19.2635 18.354 19.5973 18.031C19.9281 17.7109 20 17.4694 20 17.3156C20 17.0443 19.7334 16.4914 18.5486 15.8921L19.4514 14.1074C20.7682 14.7736 22 15.8321 22 17.3156C22 18.1791 21.5683 18.9068 20.9882 19.4682C20.4111 20.0267 19.6283 20.4836 18.7428 20.8461C16.9668 21.5731 14.5824 21.9997 12 21.9997C9.41762 21.9997 7.03316 21.5731 5.2572 20.8461C4.37166 20.4836 3.58892 20.0267 3.01182 19.4682C2.43174 18.9068 2 18.1791 2 17.3156C2 15.8321 3.2318 14.7736 4.5486 14.1074L5.4514 15.8921Z',
};

export const IconLeavingGeoFenceStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="leaving-geo-fence-stroke-rounded IconLeavingGeoFenceStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLeavingGeoFenceDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="leaving-geo-fence-duotone-rounded IconLeavingGeoFenceDuotoneRounded"
    >
      <ellipse 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="17.5" 
        rx="9" 
        ry="3.5" 
        fill="var(--icon-fill)"></ellipse>
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
      />
    </TheIconWrapper>
  );
};

export const IconLeavingGeoFenceTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="leaving-geo-fence-twotone-rounded IconLeavingGeoFenceTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLeavingGeoFenceSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="leaving-geo-fence-solid-rounded IconLeavingGeoFenceSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLeavingGeoFenceBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="leaving-geo-fence-bulk-rounded IconLeavingGeoFenceBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLeavingGeoFenceStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="leaving-geo-fence-stroke-sharp IconLeavingGeoFenceStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLeavingGeoFenceSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="leaving-geo-fence-solid-sharp IconLeavingGeoFenceSolidSharp"
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

export const iconPackOfLeavingGeoFence: TheIconSelfPack = {
  name: 'LeavingGeoFence',
  StrokeRounded: IconLeavingGeoFenceStrokeRounded,
  DuotoneRounded: IconLeavingGeoFenceDuotoneRounded,
  TwotoneRounded: IconLeavingGeoFenceTwotoneRounded,
  SolidRounded: IconLeavingGeoFenceSolidRounded,
  BulkRounded: IconLeavingGeoFenceBulkRounded,
  StrokeSharp: IconLeavingGeoFenceStrokeSharp,
  SolidSharp: IconLeavingGeoFenceSolidSharp,
};