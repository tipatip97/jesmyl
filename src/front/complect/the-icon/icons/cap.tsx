import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 17L2.05801 14.5262C1.4248 8.63648 6.05622 3.5 12 3.5C17.9438 3.5 22.5752 8.63648 21.942 14.5262L21.5 17',
  d2: 'M8.0157 10.5C7.81291 7.29507 9.59813 3.5 12 3.5',
  d3: 'M15.9999 10.5C16.2027 7.29507 14.4175 3.5 12.0156 3.5',
  d4: 'M12 3V2',
  d5: 'M2.5 17.0094C10.5 14.1428 13.5 14.5244 21.5 17.0094C21.2236 18.1308 21.0732 21.2996 19.851 21.8967C19.265 22.183 18.4247 21.7989 17.821 21.6547C14.9252 20.963 13.4773 20.6171 12 20.6171C10.5227 20.6171 9.07482 20.963 6.17904 21.6547C5.57535 21.7989 4.73502 22.183 4.14904 21.8967C2.92684 21.2996 2.77642 18.1308 2.5 17.0094Z',
  d6: 'M2.05801 14.5262L2.5 17C8.5 14.5262 17.5 15 21.5 17L21.942 14.5262C22.5752 8.63648 17.9438 3.5 12 3.5C6.05622 3.5 1.4248 8.63648 2.05801 14.5262Z',
  d7: 'M11.9975 14.3776C14.5451 14.4218 17.0719 15.0172 20.4062 16.0199L20.7477 14.1269C21.1415 10.3689 19.0484 6.96454 15.8371 5.42602C15.8417 5.43461 15.8463 5.4432 15.8509 5.45179C16.6587 6.96327 17.0956 8.89814 16.9824 10.6881C16.9475 11.2393 16.4724 11.6579 15.9212 11.623C15.37 11.5881 14.9515 11.113 14.9864 10.5619C15.0759 9.14693 14.7216 7.58179 14.087 6.39451C13.4256 5.15694 12.6405 4.625 12.0001 4.625L11.9922 4.62497L11.9844 4.625C11.3439 4.625 10.5588 5.15694 9.89741 6.39451C9.26286 7.58179 8.90854 9.14693 8.99807 10.5619C9.03295 11.113 8.6144 11.5881 8.06321 11.623C7.51203 11.6579 7.03694 11.2393 7.00206 10.6881C6.8888 8.89814 7.32571 6.96327 8.13353 5.45179C8.13632 5.44657 8.13912 5.44134 8.14193 5.43612C4.94247 6.9794 2.85932 10.3771 3.25226 14.1269L3.58285 15.9592C6.92324 14.8411 9.44737 14.3334 11.9975 14.3776ZM10.9844 2.67149C5.09535 3.21414 0.66768 8.428 1.31242 14.3665C1.31485 14.3889 1.31806 14.4111 1.32206 14.4333L1.754 16.8273C1.75865 16.8531 1.7643 16.8784 1.7709 16.9034C1.72909 17.0322 1.72175 17.1737 1.75629 17.3138C1.81202 17.5399 1.86442 17.8777 1.93314 18.3207L1.93314 18.3207L1.94579 18.4022C2.01775 18.8656 2.10393 19.4078 2.22239 19.9381C2.33986 20.464 2.49657 21.0141 2.72232 21.4869C2.94138 21.9458 3.27479 22.4368 3.80432 22.6955C4.33573 22.9551 4.90695 22.8809 5.30173 22.7948C5.51202 22.749 5.71644 22.6888 5.88944 22.637L5.94824 22.6193L5.94829 22.6193C6.10385 22.5726 6.22673 22.5356 6.33779 22.5091C9.26666 21.8095 10.6157 21.492 11.9845 21.492C13.3533 21.492 14.7023 21.8095 17.6312 22.5091C17.7423 22.5356 17.8652 22.5726 18.0207 22.6193L18.0796 22.637C18.2526 22.6888 18.457 22.749 18.6673 22.7948C19.062 22.8809 19.6333 22.9551 20.1647 22.6955C20.6942 22.4368 21.0276 21.9458 21.2467 21.4869C21.4724 21.0141 21.6291 20.464 21.7466 19.9381C21.8651 19.4078 21.9513 18.8656 22.0232 18.4022L22.0359 18.3207C22.1046 17.8778 22.157 17.5399 22.2127 17.3138C22.2426 17.1926 22.2411 17.0707 22.2133 16.9568C22.227 16.915 22.238 16.8718 22.246 16.8273L22.6779 14.4333C22.6819 14.4111 22.6852 14.3889 22.6876 14.3665C23.3335 8.4175 18.889 3.19571 12.9844 2.66865V2.125C12.9844 1.57272 12.5367 1.125 11.9844 1.125C11.4321 1.125 10.9844 1.57272 10.9844 2.125V2.67149Z',
  d8: 'M9.89741 6.39451C9.26286 7.58179 8.90854 9.14693 8.99807 10.5619C9.03295 11.113 8.6144 11.5881 8.06321 11.623C7.51203 11.6579 7.03694 11.2393 7.00206 10.6881C6.8888 8.89814 7.32571 6.96327 8.13353 5.45179C8.91448 3.99059 10.2229 2.625 11.9844 2.625C11.987 2.625 11.9896 2.62501 11.9922 2.62503C11.9948 2.62501 11.9974 2.625 12.0001 2.625C13.7615 2.625 15.0699 3.99059 15.8509 5.45179C16.6587 6.96327 17.0956 8.89814 16.9824 10.6881C16.9475 11.2393 16.4724 11.6579 15.9212 11.623C15.37 11.5881 14.9515 11.113 14.9864 10.5619C15.0759 9.14693 14.7216 7.58179 14.087 6.39451C13.4256 5.15694 12.6405 4.625 12.0001 4.625C11.9974 4.625 11.9948 4.62499 11.9922 4.62497C11.9896 4.62499 11.987 4.625 11.9844 4.625C11.3439 4.625 10.5588 5.15694 9.89741 6.39451Z',
  d9: 'M11.9844 1.125C12.5367 1.125 12.9844 1.57272 12.9844 2.125V3.125C12.9844 3.67728 12.5367 4.125 11.9844 4.125C11.4321 4.125 10.9844 3.67728 10.9844 3.125V2.125C10.9844 1.57272 11.4321 1.125 11.9844 1.125Z',
  d10: 'M20.4062 16.0199C17.0719 15.0173 14.5451 14.4218 11.9975 14.3777C9.44737 14.3334 6.92324 14.8412 3.58285 15.9593L3.25226 14.127C2.71676 9.01673 6.77989 4.56046 12 4.56046C17.2201 4.56046 21.2832 9.01674 20.7477 14.127L20.4062 16.0199ZM22.2133 16.9569C22.2411 17.0707 22.2426 17.1927 22.2127 17.3139C22.157 17.54 22.1046 17.8778 22.0359 18.3208L22.0232 18.4023C21.9513 18.8657 21.8651 19.4078 21.7466 19.9382C21.6291 20.4641 21.4724 21.0142 21.2467 21.487C21.0276 21.9458 20.6942 22.4369 20.1647 22.6956C19.6333 22.9552 19.062 22.881 18.6673 22.7949C18.457 22.749 18.2526 22.6889 18.0796 22.637L18.0207 22.6193C17.8652 22.5726 17.7423 22.5357 17.6312 22.5092C14.7023 21.8095 13.3533 21.4921 11.9845 21.4921C10.6157 21.4921 9.26666 21.8095 6.33779 22.5092C6.22673 22.5357 6.10385 22.5726 5.94829 22.6193L5.94824 22.6193L5.88944 22.637C5.71644 22.6889 5.51202 22.749 5.30173 22.7949C4.90695 22.881 4.33573 22.9552 3.80432 22.6956C3.27479 22.4369 2.94138 21.9458 2.72232 21.487C2.49657 21.0142 2.33986 20.4641 2.22239 19.9382C2.10393 19.4078 2.01775 18.8656 1.94579 18.4023L1.93314 18.3208L1.93314 18.3208C1.86442 17.8778 1.81202 17.54 1.75629 17.3139C1.72175 17.1737 1.72909 17.0323 1.7709 16.9034C1.7643 16.8785 1.75865 16.8531 1.754 16.8273L1.32206 14.4333C1.31806 14.4112 1.31485 14.3889 1.31242 14.3666C0.631106 8.09118 5.614 2.625 12 2.625C18.386 2.625 23.3689 8.09118 22.6876 14.3666C22.6852 14.3889 22.6819 14.4112 22.6779 14.4333L22.246 16.8273C22.238 16.8718 22.227 16.915 22.2133 16.9569Z',
  d11: 'M2.5 16.9999L2.05801 15.0262C1.4248 9.13648 6.05622 4 12 4C17.9438 4 22.5752 9.13648 21.942 15.0262L21.5 16.9999',
  d12: 'M8.0157 11C7.81291 7.79507 9.59813 4 12 4M16 11C16.2028 7.79507 14.4176 4 12.0157 4',
  d13: 'M12 4.00006V2',
  d14: 'M21.5 17.0094C13.5 14.5244 10.5 14.1428 2.5 17.0094L4 22.0001C4 22.0001 8 20.0001 12 20.0001C16 20.0001 20 22.0001 20 22.0001L21.5 17.0094Z',
  d15: 'M22.6877 14.8297C23.3679 8.50724 18.3592 3 11.9832 3C5.60717 3 0.632077 8.50724 1.31233 14.8297C1.31626 14.8663 1.32227 14.9027 1.33032 14.9386L1.74949 16.809C1.75633 16.8526 1.76622 16.8963 1.77929 16.9398L3.24289 21.8056C3.32577 22.0812 3.52621 22.3061 3.79055 22.4201C4.05479 22.5341 4.35592 22.5257 4.61339 22.3972C4.61339 22.3972 5.02932 22.2035 5.2325 22.1165C5.63935 21.9422 6.22361 21.7087 6.92521 21.475C8.3401 21.0037 10.1793 20.55 11.9832 20.55C13.7871 20.55 15.6599 21.0037 17.0748 21.475C17.7764 21.7087 18.3607 21.9422 18.7675 22.1165C18.9707 22.2035 19.3866 22.3972 19.3866 22.3972C19.6441 22.5257 19.9452 22.5341 20.2095 22.4201C20.4738 22.3061 20.6742 22.0812 20.7571 21.8056L22.2207 16.9398C22.2338 16.8963 22.2437 16.8526 22.2505 16.809L22.6697 14.9386C22.6777 14.9027 22.6837 14.8663 22.6877 14.8297ZM11.9846 4.94995C17.1896 4.94995 21.2761 9.42773 20.7544 14.5677L20.5641 15.417C17.1784 14.3912 14.5535 13.7723 11.9677 13.7275C9.38178 13.7723 6.82435 14.3912 3.43872 15.417L3.24841 14.5677C2.72668 9.42773 6.77958 4.94995 11.9846 4.94995Z',
  d16: 'M9.91694 6.76951C9.28239 7.95679 8.92808 9.52193 9.0176 10.9369L7.02159 11.0631C6.90833 9.27314 7.34524 7.33827 8.15306 5.82679C8.93401 4.36559 10.2425 3 12.0039 3C13.7653 3 15.0895 4.36559 15.8704 5.82679C16.6783 7.33827 17.1152 9.27314 17.0019 11.0631L15.0059 10.9369C15.0954 9.52193 14.7411 7.95679 14.1065 6.76951C13.4451 5.53194 12.6443 5 12.0039 5C11.3635 5 10.5784 5.53194 9.91694 6.76951Z',
  d17: 'M13.0039 1.5V3.50006H11.0039V1.5H13.0039Z',
};

export const IconCapStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-stroke-rounded IconCapStrokeRounded"
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

export const IconCapDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-duotone-rounded IconCapDuotoneRounded"
    >
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

export const IconCapTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-twotone-rounded IconCapTwotoneRounded"
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

export const IconCapSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-solid-rounded IconCapSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCapBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-bulk-rounded IconCapBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCapStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-stroke-sharp IconCapStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cap-solid-sharp IconCapSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCap: TheIconSelfPack = {
  name: 'Cap',
  StrokeRounded: IconCapStrokeRounded,
  DuotoneRounded: IconCapDuotoneRounded,
  TwotoneRounded: IconCapTwotoneRounded,
  SolidRounded: IconCapSolidRounded,
  BulkRounded: IconCapBulkRounded,
  StrokeSharp: IconCapStrokeSharp,
  SolidSharp: IconCapSolidSharp,
};