import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 22V7C3 4.64298 3 3.46447 3.73223 2.73223C4.46447 2 5.64298 2 8 2H11C13.357 2 14.5355 2 15.2678 2.73223C16 3.46447 16 4.64298 16 7V22',
  d2: 'M2 22H17',
  d3: 'M3 11H16',
  d4: 'M21 8.52662L21.4472 8.30539C21.7162 8.17234 21.8507 8.10582 21.9253 7.98628C22 7.86674 22 7.71799 22 7.42048V6.72636C22 6.0826 22 5.76071 21.8255 5.61265C21.7702 5.5658 21.7053 5.53144 21.6353 5.51197C21.414 5.45041 21.1433 5.62896 20.6018 5.98606C19.9072 6.44425 19.5598 6.67335 19.3385 7.0001C19.265 7.10863 19.2025 7.2241 19.152 7.34482C19 7.70824 19 8.12125 19 8.94727V10.5797C19 10.8118 19.1902 11 19.4248 11C19.7722 11 20.0846 10.7907 20.2136 10.4716L21 8.52662Z',
  d5: 'M19.4778 11C19.6789 12.3863 20.1452 13.9698 19.9555 15.3799C19.7838 16.657 18.7725 17.6876 17.4425 17.9412C17.1343 18 16.7562 18 16 18',
  d6: 'M10.25 14L8.30434 15.917C8.06684 16.1736 7.94808 16.3019 8.02165 16.401C8.09522 16.5 8.30931 16.5 8.73747 16.5H10.2625C10.6907 16.5 10.9048 16.5 10.9783 16.599C11.0519 16.6981 10.9332 16.8264 10.6957 17.083L8.73747 19',
  d7: 'M3 11V22H16V11H3Z',
  d8: 'M2.25 20.75H16.7499C17.3022 20.75 17.7499 21.1977 17.7499 21.75C17.7499 22.3023 17.3022 22.75 16.7499 22.75H2.25C1.69772 22.75 1.25 22.3023 1.25 21.75C1.25 21.1977 1.69772 20.75 2.25 20.75Z',
  d9: 'M20.903 4.92134C21.1109 4.81729 21.4487 4.68163 21.8363 4.78942C22.0104 4.83784 22.1723 4.92344 22.3106 5.04073C22.6202 5.30335 22.6946 5.66236 22.7227 5.89312C22.7501 6.11859 22.7501 6.39959 22.75 6.68775L22.75 7.44378V7.44379C22.7501 7.57177 22.7501 7.71879 22.7366 7.8481C22.7204 8.00299 22.6803 8.19329 22.5614 8.38366C22.4428 8.57354 22.2898 8.69298 22.1587 8.7755C22.0486 8.84477 21.7043 9.01504 21.5883 9.07235L20.9089 10.7528C20.7862 11.0563 20.5769 11.306 20.317 11.4796C20.381 11.8179 20.5473 12.7059 20.604 13.0638C20.7256 13.8318 20.8083 14.6659 20.6989 15.4799C20.4812 17.0983 19.2082 18.3681 17.583 18.678C17.2039 18.7503 16.7596 18.7502 16.089 18.75H16.089L16 18.75V17.25C16.7916 17.25 17.0812 17.2466 17.3021 17.2045C18.3369 17.0072 19.0864 16.2156 19.2122 15.2799C19.2924 14.6839 19.2369 14.0212 19.1224 13.2983C19.0694 12.9636 18.8758 11.9202 18.811 11.5775C18.4762 11.3729 18.25 11.0055 18.25 10.5797L18.2499 8.82263C18.2492 8.11967 18.2486 7.56093 18.4602 7.05538C18.5299 6.88863 18.6161 6.72925 18.7175 6.57954C19.0244 6.12651 19.4924 5.81846 20.0844 5.42886C20.3272 5.26866 20.6992 5.02333 20.903 4.92134Z',
  d10: 'M11.0164 1.25H7.98369C6.90111 1.24997 5.99219 1.24994 5.26946 1.34806C4.50418 1.45197 3.80442 1.68172 3.24096 2.25073C2.67751 2.81974 2.45 3.52639 2.34711 4.29921C2.24994 5.02907 2.24997 5.94679 2.25 7.04005V7.04009L2.25 10.9986L2.25 11L2.25 11.0014L2.25001 21.45C2.25001 21.6157 2.38432 21.75 2.55001 21.75H16.45C16.6157 21.75 16.75 21.6157 16.75 21.45L16.75 11.0015L16.75 11L16.75 10.9985L16.75 7.04018C16.75 5.94686 16.7501 5.0291 16.6529 4.29921C16.55 3.52639 16.3225 2.81974 15.759 2.25073C15.1956 1.68172 14.4958 1.45197 13.7305 1.34806C13.0078 1.24994 12.0989 1.24997 11.0164 1.25ZM14.8166 9.95001V7.10716C14.8166 5.92911 14.8146 5.14378 14.7368 4.55937C14.6627 4.00304 14.5363 3.77707 14.3919 3.63128C14.2476 3.48548 14.0238 3.35784 13.4729 3.28304C12.8942 3.20447 12.1165 3.2024 10.95 3.2024H8.04998C6.88343 3.2024 6.10575 3.20447 5.52705 3.28304C4.97615 3.35784 4.75238 3.48548 4.60801 3.63128C4.46364 3.77707 4.33724 4.00304 4.26317 4.55937C4.18537 5.14378 4.18331 5.92911 4.18331 7.10716V9.95001C4.18331 10.1157 4.31763 10.25 4.48331 10.25H14.5166C14.6823 10.25 14.8166 10.1157 14.8166 9.95001ZM10.7764 14.5343C11.0714 14.2435 11.0749 13.7687 10.7842 13.4736C10.4935 13.1786 10.0187 13.175 9.72361 13.4657L7.7307 15.4326L7.7307 15.4326C7.63439 15.5364 7.50516 15.6756 7.41911 15.8069C7.36996 15.8818 7.28765 16.022 7.25968 16.2083C7.22603 16.4325 7.2803 16.6607 7.4196 16.8482C7.66599 17.1799 8.04719 17.2206 8.16715 17.2334C8.32402 17.2501 8.51983 17.2501 8.70626 17.25H8.70637L9.45295 17.25L8.2128 18.4641C7.91681 18.7538 7.91176 19.2287 8.20152 19.5247C8.49128 19.8207 8.96613 19.8257 9.26212 19.5359L11.2693 17.5674C11.3656 17.4637 11.4948 17.3244 11.5809 17.1931C11.63 17.1182 11.7123 16.978 11.7403 16.7917C11.7739 16.5675 11.7197 16.3393 11.5804 16.1518C11.334 15.8201 10.9528 15.7794 10.8328 15.7666C10.6759 15.7499 10.4801 15.7499 10.2936 15.75L9.54243 15.75L10.7764 14.5343Z',
  d11: 'M7.98369 1.25H11.0164H11.0164C12.099 1.24997 13.0078 1.24994 13.7305 1.34806C14.4958 1.45197 15.1956 1.68172 15.759 2.25073C16.3225 2.81973 16.55 3.52639 16.6529 4.29921C16.7501 5.0291 16.75 5.94686 16.75 7.04017L16.75 10.9985L16.75 11L16.75 11.0015L16.75 21.45C16.75 21.6157 16.6157 21.75 16.45 21.75H2.55001C2.38432 21.75 2.25001 21.6157 2.25001 21.45L2.25 11.0014L2.25 11L2.25 10.9986L2.25 7.04009V7.04005C2.24997 5.94679 2.24994 5.02907 2.34711 4.29921C2.45 3.52639 2.67751 2.81973 3.24096 2.25073C3.80442 1.68172 4.50418 1.45197 5.26946 1.34806C5.99218 1.24994 6.90109 1.24997 7.98365 1.25H7.98369Z',
  d12: 'M14.8169 7.10789V9.95074C14.8169 10.1164 14.6826 10.2507 14.5169 10.2507H4.48359C4.31791 10.2507 4.18359 10.1164 4.18359 9.95074V7.10789C4.18359 5.92984 4.18565 5.14451 4.26345 4.5601C4.33752 4.00377 4.46392 3.7778 4.60829 3.632C4.75266 3.48621 4.97643 3.35857 5.52733 3.28377C6.10603 3.2052 6.8837 3.20312 8.05026 3.20312H10.9503C12.1168 3.20312 12.8945 3.2052 13.4732 3.28377C14.0241 3.35857 14.2479 3.48621 14.3922 3.632C14.5366 3.7778 14.663 4.00377 14.7371 4.5601C14.8149 5.14451 14.8169 5.92984 14.8169 7.10789Z',
  d13: 'M2.24902 20.75H16.749C17.3012 20.75 17.749 21.1977 17.749 21.75C17.749 22.3023 17.3012 22.75 16.749 22.75H2.24902C1.69674 22.75 1.24902 22.3023 1.24902 21.75C1.24902 21.1977 1.69674 20.75 2.24902 20.75Z',
  d14: 'M10.7833 12.4736C11.074 12.7687 11.0704 13.2435 10.7754 13.5343L9.54146 14.75L10.2926 14.75C10.4791 14.7499 10.6749 14.7499 10.8318 14.7666C10.9518 14.7794 11.333 14.8201 11.5794 15.1518C11.7187 15.3393 11.773 15.5675 11.7393 15.7917C11.7113 15.978 11.629 16.1182 11.5799 16.1931C11.4938 16.3244 11.3646 16.4637 11.2683 16.5674L9.26114 18.5359C8.96515 18.8257 8.49031 18.8207 8.20054 18.5247C7.91078 18.2287 7.91583 17.7538 8.21182 17.4641L9.45197 16.25L8.70539 16.25H8.70539C8.51892 16.2501 8.32307 16.2501 8.16618 16.2334C8.04622 16.2206 7.66501 16.1799 7.41862 15.8482C7.27932 15.6607 7.22505 15.4325 7.2587 15.2083C7.28667 15.022 7.36898 14.8818 7.41813 14.8069C7.50418 14.6756 7.63342 14.5363 7.72973 14.4326L9.72263 12.4657C10.0177 12.175 10.4925 12.1786 10.7833 12.4736Z',
  d15: 'M16.748 18.7466C17.0781 18.7404 17.3423 18.7236 17.5808 18.6781C19.2059 18.3682 20.4789 17.0984 20.6966 15.48C20.8061 14.666 20.7233 13.8319 20.6017 13.0639C20.5451 12.706 20.3787 11.818 20.3147 11.4798C20.5747 11.3062 20.784 11.0565 20.9067 10.7529L21.5861 9.07247C21.702 9.01517 22.0464 8.8449 22.1564 8.77562C22.2875 8.6931 22.4405 8.57366 22.5592 8.38378C22.6781 8.19341 22.7182 8.00312 22.7343 7.84822C22.7479 7.71891 22.7478 7.57189 22.7477 7.44392L22.7477 6.68787C22.7478 6.39971 22.7479 6.11871 22.7204 5.89324C22.6924 5.66248 22.618 5.30348 22.3084 5.04085C22.1701 4.92356 22.0081 4.83797 21.834 4.78954C21.4464 4.68175 21.1086 4.81741 20.9007 4.92146C20.6969 5.02345 20.3249 5.26878 20.0821 5.42898C19.4902 5.81858 19.0221 6.12663 18.7153 6.57966C18.6139 6.72937 18.5277 6.88875 18.4579 7.0555C18.2464 7.56105 18.247 8.11979 18.2477 8.82275L18.2477 10.5799C18.2477 11.0056 18.4739 11.373 18.8087 11.5776C18.8735 11.9203 19.0672 12.9637 19.1202 13.2984C19.2346 14.0213 19.2902 14.684 19.21 15.28C19.0841 16.2158 18.3347 17.0073 17.2998 17.2046C17.1695 17.2295 17.0152 17.2409 16.748 17.246V18.7466Z',
  d16: 'M3 22V2H16V22',
  d17: 'M20.001 11L21.001 8.52663L22.001 8.00001V5L19 7L19.001 11H20.001Z',
  d18: 'M10.002 13.5L8.00195 16.5H11.0023L9.00195 19.5',
  d19: 'M22.7511 8.70271V3.84888L18.25 6.84862L18.2512 12H18.8416C18.8693 12.1541 18.8982 12.308 18.927 12.4601L18.9413 12.5358C19.0061 12.8785 19.0695 13.2136 19.1224 13.5483C19.2369 14.2711 19.2924 14.9338 19.2122 15.5299C19.0864 16.4656 18.3369 17.2571 17.3021 17.4545C17.0812 17.4966 16.7916 17.5 16 17.5V19L16.089 19C16.7596 19.0001 17.2039 19.0002 17.583 18.9279C19.2082 18.618 20.4812 17.3483 20.6989 15.7298C20.8083 14.9159 20.7256 14.0817 20.604 13.3137C20.5473 12.9558 20.48 12.5996 20.416 12.2613L20.4009 12.1816C20.3894 12.1205 20.378 12.06 20.3667 12H20.5068L21.5935 9.31231L22.7511 8.70271Z',
  d20: 'M1.25 20.7504H18.25V22.7504H1.25V20.7504Z',
  d21: 'M2.5 2.22764C2.5 1.68791 2.93279 1.25037 3.46667 1.25037H16.0333C16.5672 1.25037 17 1.68791 17 2.22764V21.7731C17 22.3128 16.5672 22.7504 16.0333 22.7504H3.46667C2.93279 22.7504 2.5 22.3128 2.5 21.7731V2.22764ZM15.0667 3.20491V10.2504H4.43333V3.20491H15.0667ZM10.877 12.9164L9.62891 12.0844L6.85156 16.2504H9.85177L8.62895 18.0843L9.87695 18.9165L12.6548 14.7504H9.65434L10.877 12.9164Z',
} as const;

export const IconEvChargingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ev-charging-stroke-rounded IconEvChargingStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconEvChargingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ev-charging-duotone-rounded IconEvChargingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconEvChargingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ev-charging-twotone-rounded IconEvChargingTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconEvChargingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ev-charging-solid-rounded IconEvChargingSolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconEvChargingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ev-charging-bulk-rounded IconEvChargingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEvChargingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ev-charging-stroke-sharp IconEvChargingStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconEvChargingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ev-charging-solid-sharp IconEvChargingSolidSharp"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEvCharging: TheIconSelfPack = {
  name: 'EvCharging',
  StrokeRounded: IconEvChargingStrokeRounded,
  DuotoneRounded: IconEvChargingDuotoneRounded,
  TwotoneRounded: IconEvChargingTwotoneRounded,
  SolidRounded: IconEvChargingSolidRounded,
  BulkRounded: IconEvChargingBulkRounded,
  StrokeSharp: IconEvChargingStrokeSharp,
  SolidSharp: IconEvChargingSolidSharp,
};