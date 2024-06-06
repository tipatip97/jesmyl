import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 13V14C15 16.8284 15 18.2426 15.8787 19.1213C16.7574 20 18.1716 20 21 20',
  d2: 'M20.6914 18L20.6914 22',
  d3: 'M9 10.8292L8.46281 10.8889C7.65914 10.9782 7.25729 11.0229 6.93718 10.9882C5.37478 10.8189 4.1433 9.43436 4.00816 7.69526C3.98047 7.33895 4.02507 6.89263 4.11426 6',
  d4: 'M13.6914 7H13.7004',
  d5: 'M17 7L21.5 7',
  d6: 'M2.246 4.22415C2.02398 3.32732 1.91297 2.8789 2.08182 2.5451C2.13924 2.43157 2.21764 2.33017 2.31277 2.24638C2.59249 2 3.05019 2 3.9656 2H16.5537C19.5616 2 22 4.46243 22 7.5C22 10.5376 19.5616 13 16.5537 13H11.8051C10.9893 13 10.5813 13 10.2309 12.8603C9.96064 12.7526 9.71719 12.5861 9.51778 12.3727C9.25919 12.096 9.10768 11.7135 8.80467 10.9485L8.26723 9.59167C7.95643 8.80701 7.80103 8.41468 7.51359 8.1244C7.22614 7.83413 6.83765 7.67719 6.06065 7.36333L4.3686 6.67983C3.64185 6.38626 3.27848 6.23948 3.00574 5.98088C2.91013 5.89022 2.82367 5.79019 2.74764 5.68227C2.53076 5.37443 2.43584 4.99101 2.246 4.22415Z',
  d7: 'M2.246 4.22415C2.02398 3.32732 1.91297 2.8789 2.08182 2.5451C2.13924 2.43157 2.21764 2.33017 2.31277 2.24638C2.59249 2 3.05019 2 3.9656 2H16.5537C19.5616 2 22 4.46243 22 7.5C22 10.5376 19.5616 13 16.5537 13H11.8051C10.9893 13 10.5813 13 10.2309 12.8603C9.96064 12.7526 9.71719 12.5861 9.51778 12.3727C9.25919 12.096 9.10768 11.7135 8.80467 10.9485L8.26723 9.59167C7.95643 8.80701 7.80103 8.41468 7.51359 8.1244C7.22614 7.83413 6.83765 7.67719 6.06065 7.36333L4.3686 6.67983C3.64185 6.38626 3.27848 6.23948 3.00574 5.98088C2.91013 5.89022 2.82367 5.79019 2.74764 5.68227C2.53076 5.37443 2.43584 4.991 2.246 4.22415Z',
  d8: 'M15.0234 11.75C15.5757 11.75 16.0234 12.1977 16.0234 12.75V13.75C16.0234 15.1925 16.0256 16.1737 16.1244 16.9086C16.2193 17.6146 16.3867 17.9416 16.6092 18.1642C16.8603 18.4153 17.1389 18.5641 17.7242 18.651C18.2084 18.7229 18.8291 18.7426 19.7148 18.748V17.75C19.7148 17.1977 20.1626 16.75 20.7148 16.75C21.2671 16.75 21.7148 17.1977 21.7148 17.75V21.75C21.7148 22.3023 21.2671 22.75 20.7148 22.75C20.1626 22.75 19.7148 22.3023 19.7148 21.75V20.7484C18.8013 20.7431 18.0488 20.7211 17.4305 20.6293C16.5361 20.4965 15.8226 20.206 15.195 19.5784C14.5389 18.9223 14.2669 18.1029 14.1422 17.1751C14.0234 16.2913 14.0234 15.1747 14.0234 13.8206C14.0234 13.7971 14.0234 13.7736 14.0234 13.75V12.75C14.0234 12.1977 14.4712 11.75 15.0234 11.75Z',
  d9: 'M16.5936 1.25L3.93227 1.25C3.50813 1.24997 3.12648 1.24993 2.81793 1.28586C2.48849 1.32422 2.12535 1.41403 1.81854 1.68357C1.65113 1.83064 1.51359 2.00824 1.413 2.20658C1.22941 2.56858 1.23098 2.94101 1.27361 3.2697C1.31368 3.57867 1.44394 4.10363 1.54702 4.51881C1.70881 5.17322 1.83625 5.68868 2.13684 6.11423C2.24165 6.26262 2.36093 6.40027 2.49294 6.52512C2.67037 6.69292 2.8725 6.8255 3.10102 6.94466L3.09403 7.01433C3.01547 7.79749 2.96243 8.32622 2.99719 8.77281C3.16395 10.915 4.7051 12.7534 6.82189 12.9825C7.25464 13.0293 7.76094 12.9729 8.44499 12.8966L8.56877 12.8828L8.94963 12.8406C8.96285 12.8555 8.97628 12.8703 8.98995 12.8849C9.26515 13.1786 9.60164 13.4082 9.97581 13.557C10.4645 13.7513 11.0132 13.7508 11.7074 13.7501L16.5936 13.75C19.6419 13.75 22.1685 11.5447 22.7021 8.64356C22.7546 8.35853 22.7808 8.21602 22.6908 8.10801C22.6009 8 22.4463 8 22.1373 8L19.0475 8C18.4938 8 18.0449 7.55229 18.0449 7C18.0449 6.44772 18.4938 6 19.0475 6L21.861 6C22.2194 6 22.3986 6 22.488 5.87036C22.5774 5.74072 22.5179 5.58386 22.3987 5.27015C21.507 2.92231 19.2481 1.25 16.5936 1.25ZM8.009 10.9322L7.5864 9.86787C7.25131 9.02407 7.15035 8.80801 6.9956 8.65213C6.84175 8.49717 6.62952 8.39636 5.79155 8.05874L5.03509 7.754C4.99229 8.21774 4.9808 8.4412 4.99456 8.61786C5.09855 9.95383 6.02451 10.8845 7.03781 10.9941C7.19421 11.0111 7.41003 10.9966 8.009 10.9322ZM14.0333 7C14.0333 6.44772 14.4802 6 15.0314 6H15.0404C15.5916 6 16.0385 6.44772 16.0385 7C16.0385 7.55228 15.5916 8 15.0404 8H15.0314C14.4802 8 14.0333 7.55228 14.0333 7Z',
  d10: 'M3.90492 1.25L16.5663 1.25C20.0042 1.25 22.7787 4.05518 22.7787 7.5C22.7787 10.9448 20.0042 13.75 16.5663 13.75L11.68 13.7501C10.9858 13.7508 10.4371 13.7513 9.94847 13.557C9.5743 13.4082 9.23781 13.1786 8.9626 12.8849C8.60375 12.5019 8.4016 11.9915 8.14404 11.3411L7.55906 9.86787C7.22397 9.02407 7.12301 8.80801 6.96825 8.65213C6.81441 8.49717 6.60218 8.39636 5.76421 8.05874L3.95864 7.33136C3.33715 7.08164 2.84491 6.88385 2.4656 6.52512C2.33358 6.40027 2.21431 6.26262 2.10949 6.11423C1.80891 5.68868 1.68147 5.17322 1.51967 4.51881C1.41659 4.10363 1.28633 3.57867 1.24627 3.2697C1.20364 2.94101 1.20207 2.56858 1.38566 2.20658C1.48624 2.00824 1.62379 1.83064 1.7912 1.68357C2.09801 1.41403 2.46114 1.32422 2.79059 1.28586C3.09914 1.24993 3.48079 1.24997 3.90492 1.25Z',
  d11: 'M13.9941 13.75L13.9941 13.8206C13.9941 15.1747 13.9941 16.2913 14.1129 17.175C14.2376 18.1029 14.5096 18.9223 15.1657 19.5784C15.7933 20.206 16.5068 20.4965 17.4012 20.6293C18.0195 20.7211 18.772 20.7431 19.6856 20.7484V21.75C19.6856 22.3023 20.1333 22.75 20.6856 22.75C21.2378 22.75 21.6856 22.3023 21.6856 21.75V17.75C21.6856 17.1977 21.2378 16.75 20.6856 16.75C20.1333 16.75 19.6856 17.1977 19.6856 17.75V18.748C18.7998 18.7426 18.1791 18.7229 17.6949 18.651C17.1096 18.5641 16.831 18.4153 16.5799 18.1642C16.3574 17.9416 16.19 17.6146 16.0951 16.9086C15.9963 16.1737 15.9941 15.1925 15.9941 13.75L13.9941 13.75Z',
  d12: 'M3.07177 6.94531L3.06474 7.01547C2.98617 7.79862 2.93313 8.32735 2.9679 8.77395C3.13465 10.9162 4.67581 12.7545 6.79259 12.9836C7.22534 13.0305 7.73164 12.974 8.4157 12.8977L8.92122 12.8416C8.58726 12.4639 8.3908 11.9678 8.14307 11.3423L7.98064 10.9332C7.38096 10.9977 7.165 11.0122 7.00851 10.9953C5.99521 10.8856 5.06925 9.95496 4.96526 8.619C4.9515 8.44229 4.963 8.21875 5.00583 7.75475L3.95767 7.3325C3.62649 7.19942 3.33201 7.0811 3.07177 6.94531Z',
  d13: 'M14.006 7C14.006 6.44772 14.4529 6 15.0041 6H15.0131C15.5643 6 16.0112 6.44772 16.0112 7C16.0112 7.55228 15.5643 8 15.0131 8H15.0041C14.4529 8 14.006 7.55228 14.006 7Z',
  d14: 'M19.0202 8C18.4665 8 18.0176 7.55229 18.0176 7C18.0176 6.44772 18.4665 6 19.0202 6H22.5993C22.7171 6.48073 22.7796 6.98317 22.7796 7.5C22.7796 7.66828 22.773 7.83503 22.76 8L19.0202 8Z',
  d15: 'M14.9873 13.0098V19.0153H20.9817',
  d16: 'M20.9824 16.0127V22.0183',
  d17: 'M8.99343 11.8386L8.45674 11.8983C7.65383 11.9877 7.25236 12.0324 6.93255 11.9977C5.37162 11.8283 4.1413 10.4425 4.00629 8.70172C3.97863 8.34508 4.02319 7.89834 4.11229 7.00488',
  d18: 'M13.6807 7.00488H13.6897',
  d19: 'M16.9863 7.00488H21.4821',
  d20: 'M17.0864 2.01758H2.12539C2.07016 2.01758 2.02539 2.06235 2.02539 2.11758V5.93339C2.02539 5.97534 2.05158 6.01284 2.09096 6.02728L7.50232 8.01151L9.97302 13.0089H16.4994C19.6645 13.0089 22.6414 9.998 21.9136 6.57494C21.1858 3.15188 18.3922 2.11042 17.0864 2.01758Z',
  d21: 'M16.75 18.25V13.25H14.75V19.25C14.75 19.8023 15.1977 20.25 15.75 20.25H20.75V22.25H22.75V16.25H20.75V18.25H16.75Z',
  d22: 'M2.00068 1.75C1.58609 1.75 1.25 2.08579 1.25 2.5V6.5C1.25 6.81538 1.44748 7.09707 1.74414 7.20484L3.08958 7.69365C3.02133 8.37962 2.97886 8.86097 3.01085 9.27256C3.17732 11.4148 4.71587 13.2531 6.82908 13.4822C7.2611 13.5291 7.76653 13.4726 8.44942 13.3964L9.08161 13.326L9.54402 14.25H16.5677C19.8322 14.25 22.4974 11.7122 22.75 8.5L17.0143 8.5V6.5L22.5897 6.5C21.9236 3.77659 19.4849 1.75 16.5677 1.75H2.00068ZM8.12753 11.4196L6.96804 9.10271L5.03223 8.39943C5.00034 8.76647 4.99263 8.96054 5.00484 9.11761C5.10865 10.4536 6.03304 11.3842 7.04463 11.4939C7.21026 11.5118 7.44264 11.4945 8.12753 11.4196ZM12.7018 6.5H14.7126V8.5H12.7018V6.5Z',
};

export const IconCctvCameraStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cctv-camera-stroke-rounded IconCctvCameraStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCctvCameraDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cctv-camera-duotone-rounded IconCctvCameraDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCctvCameraTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cctv-camera-twotone-rounded IconCctvCameraTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCctvCameraSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cctv-camera-solid-rounded IconCctvCameraSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCctvCameraBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cctv-camera-bulk-rounded IconCctvCameraBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCctvCameraStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cctv-camera-stroke-sharp IconCctvCameraStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCctvCameraSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cctv-camera-solid-sharp IconCctvCameraSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCctvCamera: TheIconSelfPack = {
  name: 'CctvCamera',
  StrokeRounded: IconCctvCameraStrokeRounded,
  DuotoneRounded: IconCctvCameraDuotoneRounded,
  TwotoneRounded: IconCctvCameraTwotoneRounded,
  SolidRounded: IconCctvCameraSolidRounded,
  BulkRounded: IconCctvCameraBulkRounded,
  StrokeSharp: IconCctvCameraStrokeSharp,
  SolidSharp: IconCctvCameraSolidSharp,
};