import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 2V14C11 17.3093 10.3093 18 7 18H3',
  d2: 'M5 12L11 12',
  d3: 'M17.5 16L18.5 16M17.5 19L18.5 19',
  d4: 'M14 5V22H4.279C3.03789 22 2.41734 22 2.13134 21.5746C1.84534 21.1492 2.05611 20.5397 2.47764 19.3207L7.78212 3.98107C8.11324 3.0235 8.27881 2.54472 8.65029 2.27236C9.02177 2 9.50923 2 10.4842 2H11.1272C12.4814 2 13.1586 2 13.5793 2.43934C14 2.87868 14 3.58579 14 5Z',
  d5: 'M14 10L17.7897 11.1843C19.8193 11.8185 20.8341 12.1357 21.4171 12.9286C22 13.7215 22 14.7847 22 16.9111V20C22 20.9428 22 21.4142 21.7071 21.7071C21.4142 22 20.9428 22 20 22H14',
  d6: 'M17.7897 11.1843L14 10V22H20C20.9428 22 21.4142 22 21.7071 21.7071C22 21.4142 22 20.9428 22 20V16.9111C22 14.7847 22 13.7215 21.4171 12.9286C20.8341 12.1357 19.8193 11.8185 17.7897 11.1843L17.7897 11.1843Z',
  d7: 'M11 14V2H8.5L3 18H7C10.3093 18 11 17.3093 11 14Z',
  d8: 'M14.1208 1.92234C13.7494 1.53447 13.2879 1.38138 12.8075 1.31393C12.6104 1.28625 12.3918 1.27088 12.1542 1.26235C11.9662 1.2556 11.8723 1.25223 11.8111 1.31121C11.75 1.37019 11.75 1.46608 11.75 1.65785V14.0017C11.75 14.8453 11.707 15.5735 11.5729 16.1838C11.437 16.8025 11.1974 17.347 10.7713 17.773C10.3452 18.1991 9.80082 18.4387 9.18205 18.5746C8.57176 18.7087 7.84356 18.7517 7 18.7517H2.16621C2.0286 18.7517 1.9598 18.7517 1.90772 18.7888C1.85563 18.8259 1.83314 18.8909 1.78817 19.021L1.75155 19.1269C1.55546 19.6938 1.3827 20.1933 1.30284 20.6038C1.21796 21.04 1.20284 21.5397 1.5088 21.9948C1.82063 22.4586 2.29424 22.6224 2.73296 22.6898C3.13642 22.7518 3.65063 22.7518 4.22347 22.7517L13.9999 22.7517C14.4141 22.7517 14.7499 22.4159 14.7499 22.0017L14.7499 4.95397C14.7499 4.28769 14.7499 3.71669 14.6911 3.26005C14.6286 2.77416 14.4879 2.30565 14.1208 1.92234Z',
  d9: 'M2.96155 17.2517C2.70564 17.2517 2.57768 17.2517 2.51787 17.1678C2.45806 17.0838 2.49988 16.9629 2.58352 16.721L3.86298 13.021C3.90796 12.8909 3.93044 12.8259 3.98253 12.7888C4.03461 12.7517 4.10342 12.7517 4.24102 12.7517L9.85 12.7517C10.0386 12.7517 10.1328 12.7517 10.1914 12.8103C10.25 12.8689 10.25 12.9632 10.25 13.1517V14.0017C10.25 14.8128 10.2067 15.412 10.1078 15.8619C10.0109 16.3034 9.87091 16.5522 9.71067 16.7124C9.55043 16.8726 9.30167 17.0126 8.8602 17.1096C8.41023 17.2084 7.8111 17.2517 7 17.2517H2.96155Z',
  d10: 'M5.03636 11.2517C4.78045 11.2517 4.65249 11.2517 4.59268 11.1678C4.53287 11.0838 4.57469 10.9629 4.65833 10.721L7.08551 3.70201C7.24049 3.25374 7.37603 2.86173 7.52285 2.55104C7.6808 2.21679 7.88233 1.90705 8.2067 1.66923C8.53367 1.42951 8.88869 1.33367 9.25341 1.29088C9.43305 1.2698 9.63264 1.26006 9.84928 1.25556C10.0364 1.25168 10.1299 1.24974 10.1899 1.30856C10.25 1.36738 10.25 1.46244 10.25 1.65256V10.8517C10.25 11.0403 10.25 11.1346 10.1914 11.1931C10.1328 11.2517 10.0386 11.2517 9.85 11.2517L5.03636 11.2517Z',
  d11: 'M20.4503 11.3116C19.8303 11.0363 19.0346 10.7877 18.0561 10.4819L17.029 10.1609C16.6727 10.0496 16.4946 9.99392 16.3723 10.0838C16.25 10.1737 16.25 10.3604 16.25 10.7336V22.0001C16.25 22.3653 16.25 22.5479 16.3076 22.6269C16.3299 22.6575 16.3426 22.6702 16.3733 22.6925C16.4522 22.7501 16.597 22.7501 16.8865 22.7501L20.0447 22.7501C20.4775 22.7502 20.8744 22.7502 21.1972 22.7068C21.5527 22.659 21.9284 22.5466 22.2374 22.2376C22.5464 21.9285 22.6589 21.5528 22.7067 21.1973C22.7501 20.8745 22.75 20.4777 22.75 20.0449L22.75 16.8665C22.75 15.8413 22.75 15.0077 22.6722 14.3338C22.5909 13.6308 22.4182 13.0243 22.0213 12.4844C21.6244 11.9445 21.0971 11.5988 20.4503 11.3116ZM18.9355 15.25C18.5212 15.25 18.1855 15.5858 18.1855 16C18.1855 16.4142 18.5212 16.75 18.9355 16.75H19.9355C20.3497 16.75 20.6855 16.4142 20.6855 16C20.6855 15.5858 20.3497 15.25 19.9355 15.25H18.9355ZM18.9355 18.25C18.5212 18.25 18.1855 18.5858 18.1855 19C18.1855 19.4142 18.5212 19.75 18.9355 19.75H19.9355C20.3497 19.75 20.6855 19.4142 20.6855 19C20.6855 18.5858 20.3497 18.25 19.9355 18.25H18.9355Z',
  d12: 'M14.1208 1.92139C13.7494 1.53352 13.2879 1.38042 12.8075 1.31297C12.6104 1.2853 12.3918 1.26993 12.1542 1.26139C11.9662 1.25465 11.8723 1.25127 11.8111 1.31026C11.75 1.36924 11.75 1.46512 11.75 1.6569V14.0008C11.75 14.8443 11.707 15.5725 11.5729 16.1828C11.437 16.8016 11.1974 17.346 10.7713 17.7721C10.3452 18.1982 9.80082 18.4377 9.18205 18.5737C8.57176 18.7077 7.84356 18.7508 7 18.7508H2.16621C2.0286 18.7508 1.9598 18.7508 1.90772 18.7879C1.85563 18.825 1.83314 18.89 1.78817 19.02L1.75155 19.126C1.55546 19.6929 1.3827 20.1923 1.30284 20.6028C1.21796 21.0391 1.20284 21.5388 1.5088 21.9938C1.82063 22.4576 2.29424 22.6215 2.73296 22.6889C3.13642 22.7509 3.65063 22.7508 4.22347 22.7508L13.9999 22.7508C14.4141 22.7508 14.7499 22.415 14.7499 22.0008L14.7499 4.95301C14.7499 4.28673 14.7499 3.71574 14.6911 3.25909C14.6286 2.77321 14.4879 2.30469 14.1208 1.92139Z',
  d13: 'M2.96208 17.2478C2.70616 17.2478 2.57821 17.2478 2.5184 17.1638C2.45859 17.0799 2.50041 16.9589 2.58404 16.7171L3.86351 13.0171C3.90848 12.887 3.93097 12.822 3.98305 12.7849C4.03514 12.7478 4.10394 12.7478 4.24155 12.7478L9.85053 12.7478C10.0391 12.7478 10.1334 12.7478 10.1919 12.8064C10.2505 12.865 10.2505 12.9593 10.2505 13.1478V13.9978C10.2505 14.8089 10.2072 15.408 10.1084 15.858C10.0114 16.2995 9.87143 16.5482 9.71119 16.7085C9.55096 16.8687 9.3022 17.0087 8.86073 17.1057C8.41076 17.2045 7.81163 17.2478 7.00053 17.2478H2.96208Z',
  d14: 'M5.03689 11.2478C4.78098 11.2478 4.65302 11.2478 4.59321 11.1638C4.5334 11.0799 4.57522 10.9589 4.65885 10.7171L7.08603 3.69811C7.24102 3.24983 7.37655 2.85782 7.52337 2.54713C7.68133 2.21288 7.88286 1.90315 8.20723 1.66533C8.53419 1.4256 8.88921 1.32976 9.25393 1.28697C9.43358 1.26589 9.63317 1.25615 9.84981 1.25166C10.0369 1.24777 10.1304 1.24583 10.1905 1.30465C10.2505 1.36347 10.2505 1.45853 10.2505 1.64865V10.8478C10.2505 11.0364 10.2505 11.1307 10.1919 11.1892C10.1334 11.2478 10.0391 11.2478 9.85052 11.2478L5.03689 11.2478Z',
  d15: 'M18.0561 10.4819C19.0346 10.7877 19.8303 11.0363 20.4503 11.3116C21.0971 11.5988 21.6244 11.9445 22.0213 12.4844C22.4182 13.0243 22.5909 13.6308 22.6722 14.3338C22.75 15.0077 22.75 15.8413 22.75 16.8665V16.8665L22.75 20.0449C22.75 20.4777 22.7501 20.8745 22.7067 21.1973C22.6589 21.5528 22.5464 21.9285 22.2374 22.2376C21.9284 22.5466 21.5527 22.659 21.1972 22.7068C20.8744 22.7502 20.4775 22.7502 20.0447 22.7501L16.8865 22.7501C16.597 22.7501 16.4522 22.7501 16.3733 22.6925C16.3426 22.6702 16.3299 22.6575 16.3076 22.6269C16.25 22.5479 16.25 22.3653 16.25 22.0001V10.7336C16.25 10.3604 16.25 10.1737 16.3723 10.0838C16.4946 9.99392 16.6727 10.0496 17.029 10.1609L18.0561 10.4819Z',
  d16: 'M18.9355 15.25C18.5213 15.25 18.1855 15.5858 18.1855 16C18.1855 16.4142 18.5213 16.75 18.9355 16.75H19.9355C20.3498 16.75 20.6855 16.4142 20.6855 16C20.6855 15.5858 20.3498 15.25 19.9355 15.25H18.9355ZM18.9355 18.25C18.5213 18.25 18.1855 18.5858 18.1855 19C18.1855 19.4142 18.5213 19.75 18.9355 19.75H19.9355C20.3498 19.75 20.6855 19.4142 20.6855 19C20.6855 18.5858 20.3498 18.25 19.9355 18.25H18.9355Z',
  d17: 'M11.0012 2.00244V17.9848H3.00122',
  d18: 'M5.00122 11.9912H11.0012',
  d19: 'M16.5012 15.4873H19.5012M16.5012 18.484H19.5012',
  d20: 'M14.0012 9.99365L22.0012 12.9903V21.9804H14.0012',
  d21: 'M13.9976 1.99854H8.50095L1.99878 22.0015H14.0076V2.00852C14.0076 2.00301 14.0031 1.99854 13.9976 1.99854Z',
  d22: 'M14.9991 2C14.9991 1.58579 14.6633 1.25 14.2491 1.25H11.7832V18C11.7832 18.4142 11.4474 18.75 11.0332 18.75H2.29998L1 22.75H14.9991V2Z',
  d23: 'M2.78747 17.25L4.24995 12.75L10.2832 12.75V17.25H2.78747Z',
  d24: 'M4.73744 11.25L7.98739 1.25H10.2832V11.25L4.73744 11.25Z',
  d25: 'M16.249 9.94865V22.75L23 22.75V12.4802L16.249 9.94865ZM18.124 16.25H21.124V14.75H18.124V16.25ZM18.124 19.25H21.124V17.75H18.124V19.25Z',
};

export const IconBuilding04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-04-stroke-rounded IconBuilding04StrokeRounded"
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

export const IconBuilding04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-04-duotone-rounded IconBuilding04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconBuilding04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-04-twotone-rounded IconBuilding04TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="0.34" 
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-04-solid-rounded IconBuilding04SolidRounded"
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

export const IconBuilding04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-04-bulk-rounded IconBuilding04BulkRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-04-stroke-sharp IconBuilding04StrokeSharp"
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
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-04-solid-sharp IconBuilding04SolidSharp"
    >
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBuilding04: TheIconSelfPack = {
  name: 'Building04',
  StrokeRounded: IconBuilding04StrokeRounded,
  DuotoneRounded: IconBuilding04DuotoneRounded,
  TwotoneRounded: IconBuilding04TwotoneRounded,
  SolidRounded: IconBuilding04SolidRounded,
  BulkRounded: IconBuilding04BulkRounded,
  StrokeSharp: IconBuilding04StrokeSharp,
  SolidSharp: IconBuilding04SolidSharp,
};