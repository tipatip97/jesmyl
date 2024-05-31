import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 17L12 3M12 17C12.3728 17 12.6728 16.6574 13.2728 15.9723L15 14M12 17C11.6272 17 11.3272 16.6574 10.7272 15.9723L9 14',
  d2: 'M5 15C3.7492 15.6327 3 16.4385 3 17.3158C3 19.3505 7.02944 21 12 21C16.9706 21 21 19.3505 21 17.3158C21 16.4385 20.2508 15.6327 19 15',
  d3: 'M5.89232 14.5488C6.14162 15.0417 5.94422 15.6433 5.4514 15.8926C4.2666 16.4919 4 17.0448 4 17.3161C4 17.4699 4.07194 17.7114 4.40271 18.0315C4.73646 18.3546 5.27174 18.6915 6.01488 18.9957C7.49628 19.6021 9.61182 20.0002 12 20.0002C14.3882 20.0002 16.5037 19.6021 17.9851 18.9957C18.7283 18.6915 19.2635 18.3546 19.5973 18.0315C19.9281 17.7114 20 17.4699 20 17.3161C20 17.0448 19.7334 16.4919 18.5486 15.8926C18.0558 15.6433 17.8584 15.0417 18.1077 14.5488C18.357 14.056 18.9586 13.8586 19.4514 14.1079C20.7682 14.7741 22 15.8326 22 17.3161C22 18.1796 21.5683 18.9073 20.9882 19.4687C20.4111 20.0272 19.6283 20.4841 18.7428 20.8466C16.9668 21.5736 14.5824 22.0002 12 22.0002C9.41762 22.0002 7.03316 21.5736 5.2572 20.8466C4.37166 20.4841 3.58892 20.0272 3.01182 19.4687C2.43174 18.9073 2 18.1796 2 17.3161C2 15.8326 3.2318 14.7741 4.5486 14.1079C5.04141 13.8586 5.64302 14.056 5.89232 14.5488Z',
  d4: 'M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3L11 12.1C11 12.2886 11 12.3829 10.9414 12.4414C10.8828 12.5 10.7886 12.5 10.6 12.5L8.99995 12.5C8.62275 12.5 8.27764 12.7123 8.10748 13.0489C7.93733 13.3856 7.9712 13.7895 8.19489 14.0932L8.19718 14.0963L8.20276 14.1039L8.22315 14.1313C8.24072 14.1549 8.26613 14.1888 8.29848 14.2316C8.36315 14.3173 8.45577 14.4387 8.5692 14.584C8.79522 14.8736 9.10766 15.2632 9.44842 15.6556C9.78486 16.0431 10.1686 16.4564 10.5356 16.7806C10.7179 16.9418 10.9197 17.1021 11.1278 17.2275C11.3085 17.3364 11.6227 17.5 12 17.5C12.3773 17.5 12.6915 17.3364 12.8721 17.2275C13.0802 17.1021 13.282 16.9417 13.4644 16.7806C13.8314 16.4564 14.2151 16.0431 14.5515 15.6556C14.8923 15.2631 15.2047 14.8736 15.4307 14.584C15.5442 14.4386 15.6368 14.3172 15.7014 14.2316C15.7338 14.1888 15.7592 14.1548 15.7768 14.1313L15.7972 14.1038L15.8052 14.093C16.0288 13.7893 16.0626 13.3855 15.8924 13.0489C15.7223 12.7122 15.3772 12.5 15 12.5L13.4 12.5C13.2114 12.5 13.1172 12.5 13.0586 12.4414C13 12.3828 13 12.2886 13 12.1L13 3Z',
  d5: 'M12 3L12 16.1138M16 13L12 17L8 13',
  d6: 'M12.0001 17.4142L16.7072 12.7071L15.293 11.2929L13.0001 13.5858L13.0001 2H11.0001L11.0001 13.5858L8.70719 11.2929L7.29297 12.7071L12.0001 17.4142Z',
  d7: 'M5.4514 15.893C4.2666 16.4924 4 17.0453 4 17.3166C4 17.4703 4.07194 17.7119 4.40271 18.032C4.73646 18.355 5.27174 18.692 6.01488 18.9962C7.49628 19.6026 9.61182 20.0007 12 20.0007C14.3882 20.0007 16.5037 19.6026 17.9851 18.9962C18.7283 18.692 19.2635 18.355 19.5973 18.032C19.9281 17.7119 20 17.4703 20 17.3166C20 17.0453 19.7334 16.4924 18.5486 15.893L19.4514 14.1084C20.7682 14.7745 22 15.8331 22 17.3166C22 18.1801 21.5683 18.9078 20.9882 19.4692C20.4111 20.0277 19.6283 20.4846 18.7428 20.8471C16.9668 21.5741 14.5824 22.0007 12 22.0007C9.41762 22.0007 7.03316 21.5741 5.2572 20.8471C4.37166 20.4846 3.58892 20.0277 3.01182 19.4692C2.43174 18.9078 2 18.1801 2 17.3166C2 15.8331 3.2318 14.7745 4.5486 14.1084L5.4514 15.893Z',
} as const;

export const IconEnteringGeoFenceStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="entering-geo-fence-stroke-rounded IconEnteringGeoFenceStrokeRounded"
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

export const IconEnteringGeoFenceDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="entering-geo-fence-duotone-rounded IconEnteringGeoFenceDuotoneRounded"
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

export const IconEnteringGeoFenceTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="entering-geo-fence-twotone-rounded IconEnteringGeoFenceTwotoneRounded"
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

export const IconEnteringGeoFenceSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="entering-geo-fence-solid-rounded IconEnteringGeoFenceSolidRounded"
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

export const IconEnteringGeoFenceBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="entering-geo-fence-bulk-rounded IconEnteringGeoFenceBulkRounded"
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

export const IconEnteringGeoFenceStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="entering-geo-fence-stroke-sharp IconEnteringGeoFenceStrokeSharp"
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

export const IconEnteringGeoFenceSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="entering-geo-fence-solid-sharp IconEnteringGeoFenceSolidSharp"
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

export const iconPackOfEnteringGeoFence: TheIconSelfPack = {
  name: 'EnteringGeoFence',
  StrokeRounded: IconEnteringGeoFenceStrokeRounded,
  DuotoneRounded: IconEnteringGeoFenceDuotoneRounded,
  TwotoneRounded: IconEnteringGeoFenceTwotoneRounded,
  SolidRounded: IconEnteringGeoFenceSolidRounded,
  BulkRounded: IconEnteringGeoFenceBulkRounded,
  StrokeSharp: IconEnteringGeoFenceStrokeSharp,
  SolidSharp: IconEnteringGeoFenceSolidSharp,
};