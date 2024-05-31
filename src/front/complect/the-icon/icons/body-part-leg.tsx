import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.00186 2C7.69319 2.31359 13.8994 3.89572 16.6429 7.74552C16.9785 8.21643 17.332 8.54976 17.9114 8.69637C18.6361 8.87638 19.236 9.36245 19.4537 10.0961C19.6856 10.8944 20.1138 11.7364 19.9778 12.5901C19.9257 12.9169 19.7657 13.218 19.4458 13.82L15.0988 22',
  d2: 'M4.00186 12C5.00186 13.7264 8.16625 14.5959 12.0019 13.7264C11.4156 14.0677 10.4146 14.6835 9.31715 15.9511C8.75817 16.5968 8.51962 17.4954 8.4807 18.4026C8.42868 19.615 8.24882 20.9338 7.62686 22',
  d3: 'M5.00186 7C5.00186 7 6.96083 7.28919 8.50186 8.5C9.50186 9.28571 11.4185 9.80952 12.0019 10',
  d4: 'M16.641 7.74552C13.8975 3.89572 7.69133 2.31359 5 2L4 12C5 13.7264 8.16439 14.5959 12 13.7264C11.4138 14.0677 10.4128 14.6835 9.31529 15.9511C8.75631 16.5968 8.51776 17.4954 8.47884 18.4026C8.42682 19.615 8.24695 20.9338 7.625 22H15.0969L19.4439 13.82C19.7639 13.218 19.9238 12.9169 19.9759 12.5901C20.112 11.7364 19.6838 10.8944 19.4519 10.0961C19.2341 9.36245 18.6342 8.87638 17.9095 8.69637C17.3301 8.54976 16.9767 8.21643 16.641 7.74552Z',
  d5: 'M5 2C7.69133 2.31359 13.8975 3.89572 16.641 7.74552C16.9767 8.21643 17.3301 8.54976 17.9095 8.69637C18.6342 8.87638 19.2341 9.36245 19.4519 10.0961C19.6838 10.8944 20.112 11.7364 19.9759 12.5901C19.9238 12.9169 19.7639 13.218 19.4439 13.82L15.0969 22',
  d6: 'M4 12C5 13.7264 8.16439 14.5959 12 13.7264C11.4138 14.0677 10.4128 14.6835 9.31529 15.9511C8.75631 16.5968 8.51776 17.4954 8.47884 18.4026C8.42682 19.615 8.24695 20.9338 7.625 22',
  d7: 'M5 7C5 7 6.95897 7.28919 8.5 8.5C9.5 9.28571 11.4167 9.80952 12 10',
  d8: 'M12.4617 3.34334C10.6364 2.42552 8.70975 1.82376 7.13703 1.46586C6.73578 1.37447 6.30486 1.27632 5.977 1.25519C5.5977 1.23075 5.20459 1.28652 4.837 1.55276C4.46005 1.82578 4.28639 2.20019 4.19136 2.57475C4.10726 2.9062 4.0663 3.3187 4.02237 3.76103L3.89032 5.08859C3.86587 5.33436 3.85365 5.45725 3.91782 5.5485C3.98199 5.63976 4.10177 5.66982 4.34132 5.72994L5.18328 5.94124C5.20084 5.94419 5.22219 5.9479 5.24712 5.95243C5.31531 5.96481 5.41046 5.98334 5.52779 6.00934C5.76195 6.06123 6.08733 6.1435 6.46485 6.26724C7.21125 6.51187 8.20472 6.9325 9.09911 7.63523C9.47126 7.92764 10.078 8.2116 10.7375 8.45801C11.2129 8.63563 11.6399 8.76773 11.9682 8.86929C12.0906 8.90716 12.1993 8.94079 12.2917 8.97095C12.8167 9.14238 13.1033 9.70695 12.9319 10.232C12.7605 10.757 12.1959 11.0436 11.6709 10.8722C11.6139 10.8536 11.5326 10.8284 11.4324 10.7974C11.1045 10.6961 10.5749 10.5323 10.0375 10.3315C9.3429 10.072 8.49131 9.70118 7.86346 9.20787C7.21683 8.6998 6.4603 8.37043 5.84195 8.16776C5.5371 8.06785 5.27642 8.00215 5.09511 7.96198C5.00472 7.94194 4.93479 7.92842 4.88982 7.92026C4.86736 7.91618 4.85119 7.91345 4.84189 7.91192L4.83318 7.91053L4.83438 7.9107C4.80178 7.90587 4.76984 7.8995 4.73787 7.89147L4.31323 7.78491C3.99965 7.70621 3.84286 7.66686 3.7305 7.74588C3.61814 7.82489 3.60213 7.98575 3.57013 8.30747L3.27703 11.254C3.2478 11.5411 3.21521 11.8611 3.3381 12.2259C3.45993 12.5876 3.63074 12.7708 3.79314 12.945L3.80426 12.9569C4.59688 13.8077 5.8168 14.3605 7.23274 14.6078C7.61712 14.6749 8.02025 14.7203 8.43935 14.7429C8.59919 14.7515 8.67911 14.7558 8.7097 14.7641C8.91159 14.8187 8.99489 15.0141 8.89455 15.1976C8.87934 15.2254 8.82733 15.2858 8.7233 15.4066C8.00982 16.2352 7.74551 17.3332 7.70262 18.3383C7.65175 19.2201 7.59664 20.2075 7.60804 20.7338C7.61385 21.002 7.63347 21.2597 7.68426 21.4889C7.73412 21.714 7.8283 21.9792 8.03279 22.197C8.38754 22.575 8.90394 22.6665 9.31903 22.707C9.76101 22.75 10.3436 22.75 11.0456 22.75L13.9102 22.75C14.1773 22.75 14.4305 22.7501 14.6454 22.7281C14.8854 22.7037 15.1379 22.6475 15.3851 22.4981C15.6324 22.3487 15.8002 22.1509 15.9343 21.9493C16.0544 21.7688 16.1732 21.544 16.2985 21.3069L20.1506 14.0189C20.425 13.5008 20.6421 13.0908 20.7145 12.6343C20.8078 12.0457 20.7023 11.4946 20.5707 11.031L20.1677 9.78817C19.861 8.7492 19.0211 8.09471 18.085 7.86034C17.7435 7.77311 17.5231 7.59176 17.2431 7.19683C16.0486 5.51154 14.2812 4.25823 12.4617 3.34334Z',
  d9: 'M7.13703 1.46586C8.70975 1.82376 10.6364 2.42552 12.4617 3.34334C14.2812 4.25823 16.0486 5.51154 17.2431 7.19683C17.5231 7.59176 17.7435 7.77311 18.085 7.86034C19.0211 8.09471 19.861 8.7492 20.1677 9.78817L20.5707 11.031C20.7023 11.4946 20.8078 12.0457 20.7145 12.6343C20.6421 13.0908 20.425 13.5008 20.1506 14.0189L16.2985 21.3069C16.1732 21.544 16.0544 21.7688 15.9343 21.9493C15.8002 22.1509 15.6324 22.3487 15.3851 22.4981C15.1379 22.6475 14.8854 22.7037 14.6454 22.7281C14.4305 22.7501 14.1774 22.75 13.9103 22.75H13.9102L11.0456 22.75C10.3436 22.75 9.76101 22.75 9.31903 22.707C8.90394 22.6665 8.38754 22.575 8.03279 22.197C7.82829 21.9792 7.73412 21.714 7.68426 21.4889C7.63347 21.2597 7.61385 21.002 7.60804 20.7338C7.59664 20.2075 7.65175 19.2201 7.70262 18.3383C7.74551 17.3332 8.00982 16.2352 8.7233 15.4066C8.92733 15.1697 9.12851 14.9537 9.32496 14.7566C8.58308 14.7726 7.88123 14.721 7.23274 14.6078C5.8168 14.3605 4.59688 13.8077 3.80425 12.9569L3.79314 12.945C3.63074 12.7708 3.45993 12.5876 3.3381 12.2259C3.21521 11.8611 3.2478 11.5411 3.27703 11.254L4.02237 3.7611C4.06629 3.31874 4.10726 2.90622 4.19136 2.57475C4.28639 2.20019 4.46005 1.82578 4.837 1.55276C5.20459 1.28652 5.5977 1.23075 5.977 1.25519C6.30486 1.27632 6.73578 1.37447 7.13703 1.46586Z',
  d10: 'M3.83879 5.60156L5.18301 5.93891C5.20056 5.94187 5.22192 5.94558 5.24685 5.95011C5.31503 5.96249 5.41018 5.98101 5.52752 6.00701C5.76168 6.0589 6.08705 6.14118 6.46458 6.26491C7.21097 6.50954 8.20444 6.93017 9.09883 7.63291C9.47099 7.92531 10.0777 8.20927 10.7373 8.45569C11.2126 8.6333 11.6397 8.76541 11.9679 8.86696C12.0904 8.90484 12.1991 8.93847 12.2914 8.96862C12.8164 9.14005 13.103 9.70462 12.9316 10.2296C12.7602 10.7546 12.1956 11.0413 11.6706 10.8698C11.6136 10.8512 11.5323 10.8261 11.4321 10.7951C11.1043 10.6937 10.5746 10.5299 10.0373 10.3292C9.34263 10.0697 8.49104 9.69885 7.86319 9.20554C7.21656 8.69747 6.46003 8.3681 5.84168 8.16544C5.53683 8.06552 5.27614 7.99983 5.09484 7.95965C5.00444 7.93962 4.93451 7.9261 4.88955 7.91793C4.86708 7.91385 4.85092 7.91112 4.84162 7.9096L4.83291 7.9082L4.83411 7.90838C4.80151 7.90355 4.76957 7.89717 4.7376 7.88915L3.63867 7.61336L3.83879 5.60156Z',
  d11: 'M5.00186 2C7.69319 2.31359 16.9999 4 19.9999 12L15.0988 22',
  d12: 'M4.00186 12C5.00186 13.7264 8.16625 14.5959 12.0019 13.7264C10.5435 14.3176 7.62686 16.8 7.62686 22',
  d13: 'M5.00186 7L11.9999 9.5',
  d14: 'M5.00088 2C7.69221 2.31359 16.9989 4 19.9989 12L15.0978 22H7.62589C7.62589 16.8 10.5426 14.3176 12.0009 13.7264C8.16528 14.5959 5.00089 13.7264 4.00089 12L4.44016 7.60727L11.7481 10.2065L12.2507 8.79324L4.59389 6.06989L5.00088 2Z',
} as const;

export const IconBodyPartLegStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-leg-stroke-rounded IconBodyPartLegStrokeRounded"
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

export const IconBodyPartLegDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-leg-duotone-rounded IconBodyPartLegDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconBodyPartLegTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-leg-twotone-rounded IconBodyPartLegTwotoneRounded"
    >
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBodyPartLegSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-leg-solid-rounded IconBodyPartLegSolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBodyPartLegBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-leg-bulk-rounded IconBodyPartLegBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBodyPartLegStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-leg-stroke-sharp IconBodyPartLegStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBodyPartLegSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-part-leg-solid-sharp IconBodyPartLegSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBodyPartLeg: TheIconSelfPack = {
  name: 'BodyPartLeg',
  StrokeRounded: IconBodyPartLegStrokeRounded,
  DuotoneRounded: IconBodyPartLegDuotoneRounded,
  TwotoneRounded: IconBodyPartLegTwotoneRounded,
  SolidRounded: IconBodyPartLegSolidRounded,
  BulkRounded: IconBodyPartLegBulkRounded,
  StrokeSharp: IconBodyPartLegStrokeSharp,
  SolidSharp: IconBodyPartLegSolidSharp,
};