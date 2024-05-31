import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14',
  d2: 'M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z',
  d3: 'M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19',
  d4: 'M12.5521 6.5L11.0305 8.19458C10.8214 8.42743 10.9486 8.79939 11.2566 8.85537L12.7453 9.12605C13.0732 9.18567 13.1886 9.59658 12.9398 9.81826L11.0521 11.5',
  d5: 'M10.6134 21.8994C10.9184 22 11.2789 22 12 22C12.7211 22 13.0816 22 13.3866 21.8994C13.8582 21.7439 14.2552 21.4185 14.5001 20.9866C14.6586 20.7072 14.7293 20.3537 14.8707 19.6466C14.8795 19.6025 14.8839 19.5805 14.8862 19.5627C14.9221 19.2782 14.7119 19.0218 14.4259 19.0013C14.408 19 14.3856 19 14.3406 19H9.65941C9.61444 19 9.59195 19 9.57405 19.0013C9.28807 19.0218 9.07792 19.2782 9.11384 19.5626C9.11609 19.5805 9.1205 19.6025 9.12932 19.6466C9.27073 20.3537 9.34144 20.7072 9.49987 20.9866C9.74484 21.4185 10.1418 21.7439 10.6134 21.8994Z',
  d6: 'M4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14L17.4857 16H6.51429L5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886Z',
  d7: 'M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19M10.0119 19H13.9881C14.525 19 14.7935 19 15.0306 18.9408C15.5272 18.8167 15.9572 18.5056 16.2315 18.072C16.3624 17.8651 16.4473 17.6094 16.6171 17.0982C16.709 16.8216 16.7549 16.6833 16.7496 16.5713C16.7383 16.3343 16.5889 16.1262 16.3684 16.0405C16.2642 16 16.119 16 15.8284 16H8.17157C7.88105 16 7.73579 16 7.63157 16.0405C7.41114 16.1262 7.26174 16.3343 7.25042 16.5713C7.24507 16.6833 7.291 16.8216 7.38287 17.0982C7.55266 17.6094 7.63755 17.8651 7.7685 18.072C8.04281 18.5056 8.47283 18.8167 8.96944 18.9408C9.2065 19 9.47495 19 10.0119 19Z',
  d8: 'M12 3.5C8.12437 3.5 5 6.60727 5 10.4189C5 11.7227 5.36394 12.94 5.99704 13.98C6.28421 14.4518 6.13458 15.067 5.66283 15.3542C5.19107 15.6414 4.57584 15.4917 4.28867 15.02C3.47075 13.6763 3 12.1008 3 10.4189C3 5.48352 7.03907 1.5 12 1.5C16.9609 1.5 21 5.48352 21 10.4189C21 12.1008 20.5292 13.6763 19.7113 15.02C19.4242 15.4917 18.8089 15.6414 18.3372 15.3542C17.8654 15.067 17.7158 14.4518 18.003 13.98C18.6361 12.94 19 11.7227 19 10.4189C19 6.60727 15.8756 3.5 12 3.5Z',
  d9: 'M15.8432 15.75C15.9736 15.75 16.1022 15.75 16.2105 15.755C16.325 15.7602 16.4787 15.7728 16.6389 15.8212C17.1374 15.9717 17.4733 16.3363 17.4987 16.7498C17.5069 16.8826 17.4739 16.9996 17.4441 17.0857C17.1127 18.7676 16.4285 19.2499 15.8431 19.2499H8.1569C7.57151 19.2499 6.8873 18.7676 6.55585 17.0857C6.52614 16.9996 6.49309 16.8826 6.50126 16.7498C6.5267 16.3363 6.8626 15.9717 7.3611 15.8212C7.52127 15.7728 7.67503 15.7602 7.78946 15.755C7.89781 15.75 8.02637 15.75 8.15678 15.75H8.15684H15.8432H15.8432Z',
  d10: 'M10.3321 22.4013C10.6774 22.5018 11.0856 22.5018 11.9019 22.5018C12.7182 22.5018 13.1264 22.5018 13.4717 22.4013C14.0057 22.2458 14.4551 21.9204 14.7324 21.4884C14.8356 21.3276 14.906 21.1423 14.9776 20.8791C15.0674 20.5491 15.1123 20.3841 15.0223 20.2663C14.9322 20.1484 14.7551 20.1484 14.4009 20.1484H9.40295C9.04873 20.1484 8.87162 20.1484 8.78156 20.2663C8.69151 20.3841 8.73641 20.5491 8.82623 20.8791C8.89786 21.1423 8.96819 21.3276 9.07142 21.4884C9.34876 21.9204 9.79812 22.2458 10.3321 22.4013Z',
  d11: 'M13.2993 6.24616C13.7157 6.60904 13.759 7.24072 13.3961 7.65706L12.3303 8.87997C12.2794 8.93827 12.3112 9.02973 12.3872 9.04397L13.0514 9.16837C14.2793 9.39838 14.6394 10.9207 13.77 11.7187L11.5713 13.7367C11.1645 14.1102 10.5319 14.0831 10.1584 13.6762C9.78496 13.2693 9.81206 12.6368 10.2189 12.2633L11.511 11.0774C11.5717 11.0217 11.5428 10.9206 11.4618 10.9054L10.9491 10.8094C9.79412 10.593 9.38873 9.21097 10.1161 8.37646L11.8884 6.34297C12.2513 5.92663 12.883 5.88329 13.2993 6.24616Z',
  d12: 'M12.498 5.5L10.498 9H13.4984L11.498 12.5',
  d13: 'M17 16H7L8 19L16 19L17 16Z',
  d14: 'M15 19L14 22H10L9 19',
  d15: 'M12 3.19379C8.23203 3.19379 5.19444 6.21373 5.19444 9.9182C5.19444 11.1854 5.54828 12.3685 6.16379 13.3793L4.50288 14.39C3.70768 13.0841 3.25 11.5529 3.25 9.9182C3.25 5.12157 7.17688 1.25 12 1.25C16.8231 1.25 20.75 5.12157 20.75 9.9182C20.75 11.5529 20.2923 13.0841 19.4971 14.39L17.8362 13.3793C18.4517 12.3685 18.8056 11.1854 18.8056 9.9182C18.8056 6.21373 15.768 3.19379 12 3.19379Z',
  d16: 'M7.00001 15.25C6.75892 15.25 6.53254 15.3659 6.39157 15.5615C6.25061 15.757 6.21226 16.0085 6.28849 16.2372L6.95944 18.25H17.0406L17.7115 16.2372C17.7878 16.0085 17.7494 15.757 17.6084 15.5615C17.4675 15.3659 17.2411 15.25 17 15.25H7.00001Z',
  d17: 'M9.28906 22.2373L8.45997 19.75H15.5412L14.7121 22.2373C14.61 22.5435 14.3234 22.7501 14.0006 22.7501H10.0006C9.67775 22.7501 9.39115 22.5435 9.28906 22.2373Z',
  d18: 'M11.6323 5.00391L13.3688 5.99618L12.2237 8.00005H15.2242L12.3687 12.9962L10.6323 12.0038L11.7775 10H8.77734L11.6323 5.00391Z',
} as const;

export const IconBulbChargingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulb-charging-stroke-rounded IconBulbChargingStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBulbChargingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulb-charging-duotone-rounded IconBulbChargingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBulbChargingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulb-charging-twotone-rounded IconBulbChargingTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBulbChargingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulb-charging-solid-rounded IconBulbChargingSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconBulbChargingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulb-charging-bulk-rounded IconBulbChargingBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBulbChargingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulb-charging-stroke-sharp IconBulbChargingStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
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
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBulbChargingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bulb-charging-solid-sharp IconBulbChargingSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBulbCharging: TheIconSelfPack = {
  name: 'BulbCharging',
  StrokeRounded: IconBulbChargingStrokeRounded,
  DuotoneRounded: IconBulbChargingDuotoneRounded,
  TwotoneRounded: IconBulbChargingTwotoneRounded,
  SolidRounded: IconBulbChargingSolidRounded,
  BulkRounded: IconBulbChargingBulkRounded,
  StrokeSharp: IconBulbChargingStrokeSharp,
  SolidSharp: IconBulbChargingSolidSharp,
};