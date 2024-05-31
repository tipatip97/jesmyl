import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.854 12.16C17.471 12.6105 16.7631 12.6138 16.3165 12.1671L11.8329 7.68351C11.3862 7.23686 11.3895 6.529 11.84 6.14596L13.071 5.09939C13.9559 4.34704 15.0349 3.84824 16.2044 3.6509L16.9294 3.52858C17.614 3.41306 18.3339 3.65221 18.8475 4.16577L19.8342 5.15255C20.3478 5.66611 20.5869 6.38601 20.4714 7.07063L20.3491 7.79559C20.1518 8.9651 19.653 10.0441 18.9006 10.929L17.854 12.16Z',
  d2: 'M19.5 4.5L21.5 2.5',
  d3: 'M2.5 21.5L4.5 19.5',
  d4: 'M6.14596 11.84C6.52901 11.3895 7.23686 11.3862 7.68351 11.8329L12.1671 16.3165C12.6138 16.7631 12.6105 17.471 12.16 17.854L10.929 18.9006C10.0441 19.653 8.9651 20.1518 7.79559 20.3491L7.07063 20.4714C6.38601 20.5869 5.66611 20.3478 5.15255 19.8342L4.16577 18.8475C3.65221 18.3339 3.41306 17.614 3.52858 16.9294L3.6509 16.2044C3.84824 15.0349 4.34704 13.9559 5.09939 13.071L6.14596 11.84Z',
  d5: 'M8.5 12.5L10.5 10.5M11.5 15.5L13.5 13.5',
  d6: 'M18.354 12.66C17.971 13.1105 17.2631 13.1138 16.8165 12.6671L12.3329 8.18351C11.8862 7.73686 11.8895 7.029 12.34 6.64596L13.571 5.59939C14.4559 4.84704 15.5349 4.34824 16.7044 4.1509L17.4294 4.02858C18.114 3.91306 18.8339 4.15221 19.3475 4.66577L20.3342 5.65255C20.8478 6.16611 21.0869 6.88601 20.9714 7.57063L20.8491 8.29559C20.6518 9.4651 20.153 10.5441 19.4006 11.429L18.354 12.66Z',
  d7: 'M6.64596 12.34C7.02901 11.8895 7.73686 11.8862 8.18351 12.3329L12.6671 16.8165C13.1138 17.2631 13.1105 17.971 12.66 18.354L11.429 19.4006C10.5441 20.153 9.4651 20.6518 8.29559 20.8491L7.57063 20.9714C6.88601 21.0869 6.16611 20.8478 5.65255 20.3342L4.66577 19.3475C4.15221 18.8339 3.91306 18.114 4.02858 17.4294L4.1509 16.7044C4.34824 15.5349 4.84704 14.4559 5.59939 13.571L6.64596 12.34Z',
  d8: 'M19.5 4.5L21.5 2.5M13.071 5.09939L11.84 6.14596C11.3895 6.529 11.3862 7.23686 11.8329 7.68351L16.3165 12.1671C16.7631 12.6138 17.471 12.6105 17.854 12.16L18.9006 10.929C19.653 10.0441 20.1518 8.9651 20.3491 7.79559L20.4714 7.07063C20.5869 6.38601 20.3478 5.66611 19.8342 5.15255L18.8475 4.16577C18.3339 3.65221 17.614 3.41306 16.9294 3.52858L16.2044 3.6509C15.0349 3.84824 13.9559 4.34704 13.071 5.09939Z',
  d9: 'M16.8046 2.789C17.7413 2.63094 18.7019 2.95954 19.3778 3.6354L20.3645 4.62219C21.0404 5.29805 21.369 6.25866 21.2109 7.19539L21.0886 7.92035C20.8693 9.22019 20.3138 10.4246 19.472 11.4148L18.4254 12.6457C17.725 13.4695 16.5047 13.416 15.7861 12.6974L11.3025 8.21381C10.584 7.49525 10.5305 6.2749 11.3542 5.57454L12.5852 4.52796C13.5753 3.68613 14.7798 3.13066 16.0796 2.91133L16.8046 2.789Z',
  d10: 'M22.2071 1.79289C22.5976 2.18342 22.5976 2.81658 22.2071 3.20711L20.2071 5.20711C19.8166 5.59763 19.1834 5.59763 18.7929 5.20711C18.4024 4.81658 18.4024 4.18342 18.7929 3.79289L20.7929 1.79289C21.1834 1.40237 21.8166 1.40237 22.2071 1.79289Z',
  d11: 'M5.20711 18.7929C5.59763 19.1834 5.59763 19.8166 5.20711 20.2071L3.20711 22.2071C2.81658 22.5976 2.18342 22.5976 1.79289 22.2071C1.40237 21.8166 1.40237 21.1834 1.79289 20.7929L3.79289 18.7929C4.18342 18.4024 4.81658 18.4024 5.20711 18.7929Z',
  d12: 'M5.57466 11.3542C6.27502 10.5305 7.49538 10.584 8.21393 11.3025L12.6976 15.7861C13.4161 16.5047 13.4696 17.725 12.6459 18.4254L11.4149 19.472C10.4248 20.3138 9.22031 20.8693 7.92047 21.0886L7.19551 21.2109C6.25878 21.369 5.29817 21.0404 4.62231 20.3645L3.63553 19.3778C2.95966 18.7019 2.63106 17.7413 2.78912 16.8046L2.91145 16.0796C3.13078 14.7798 3.68625 13.5753 4.52808 12.5852L5.57466 11.3542Z',
  d13: 'M11.2071 9.79289C11.5976 10.1834 11.5976 10.8166 11.2071 11.2071L9.20711 13.2071C8.81658 13.5976 8.18342 13.5976 7.79289 13.2071C7.40237 12.8166 7.40237 12.1834 7.79289 11.7929L9.79289 9.79289C10.1834 9.40237 10.8166 9.40237 11.2071 9.79289ZM12.7929 12.7929C13.1834 12.4024 13.8166 12.4024 14.2071 12.7929C14.5976 13.1834 14.5976 13.8166 14.2071 14.2071L12.2071 16.2071C11.8166 16.5976 11.1834 16.5976 10.7929 16.2071C10.4024 15.8166 10.4024 15.1834 10.7929 14.7929L12.7929 12.7929Z',
  d14: 'M22.207 3.20711C22.5975 2.81658 22.5975 2.18342 22.207 1.79289C21.8165 1.40237 21.1833 1.40237 20.7928 1.79289L19.1533 3.43234C19.2311 3.49605 19.3059 3.56384 19.3776 3.63553L20.3644 4.62231C20.4361 4.69398 20.5038 4.76884 20.5675 4.84655L22.207 3.20711Z',
  d15: 'M11.2075 11.2071C11.5981 10.8166 11.5981 10.1834 11.2075 9.79289C10.817 9.40237 10.1838 9.40237 9.79332 9.79289L8.24902 11.3372L9.66324 12.7514L11.2075 11.2071Z',
  d16: 'M12.6632 15.7514L11.249 14.3372L12.7933 12.7929C13.1838 12.4024 13.817 12.4024 14.2075 12.7929C14.5981 13.1834 14.5981 13.8166 14.2075 14.2071L12.6632 15.7514Z',
  d17: 'M3.43234 19.1534L1.79289 20.7929C1.40237 21.1834 1.40237 21.8166 1.79289 22.2071C2.18342 22.5976 2.81658 22.5976 3.20711 22.2071L4.84655 20.5677C4.76884 20.504 4.69398 20.4362 4.62231 20.3645L3.63553 19.3778C3.56384 19.3061 3.49605 19.2312 3.43234 19.1534Z',
  d18: 'M12.7607 17.0003L7.00048 11.2402L4.12061 14.1203L3.76074 18.0803L5.92074 20.2402L9.88074 19.8802L12.7607 17.0003Z',
  d19: 'M11.2402 7.00016L17.0005 12.7603L19.8804 9.88021L20.2402 5.92019L18.0802 3.76025L14.1202 4.12024L11.2402 7.00016Z',
  d20: 'M22.7499 2.64294L19.3871 6.00578L17.9941 4.61284L21.357 1.25L22.7499 2.64294Z',
  d21: 'M6.00578 19.3872L2.64294 22.75L1.25 21.3571L4.61284 17.9943L6.00578 19.3872Z',
  d22: 'M7.07613 10.207L13.7945 16.9252L10.2463 20.4732L5.73497 20.8833L3.11816 18.2666L3.52814 13.7552L7.07613 10.207Z',
  d23: 'M18.2665 3.11719L20.8833 5.73392L20.4734 10.2453L16.9254 13.7935L10.207 7.07535L13.7552 3.5273L18.2665 3.11719Z',
  d24: 'M11.508 10.9305L8.55309 13.8853L7.16016 12.4924L10.115 9.5376L11.508 10.9305ZM14.4628 13.8854L11.508 16.8402L10.115 15.4473L13.0699 12.4925L14.4628 13.8854Z',
} as const;

export const IconPlugSocketStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-socket-stroke-rounded IconPlugSocketStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPlugSocketDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-socket-duotone-rounded IconPlugSocketDuotoneRounded"
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
        d={d.d6} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPlugSocketTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-socket-twotone-rounded IconPlugSocketTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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

export const IconPlugSocketSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-socket-solid-rounded IconPlugSocketSolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconPlugSocketBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-socket-bulk-rounded IconPlugSocketBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
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
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlugSocketStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-socket-stroke-sharp IconPlugSocketStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlugSocketSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="plug-socket-solid-sharp IconPlugSocketSolidSharp"
    >
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
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfPlugSocket: TheIconSelfPack = {
  name: 'PlugSocket',
  StrokeRounded: IconPlugSocketStrokeRounded,
  DuotoneRounded: IconPlugSocketDuotoneRounded,
  TwotoneRounded: IconPlugSocketTwotoneRounded,
  SolidRounded: IconPlugSocketSolidRounded,
  BulkRounded: IconPlugSocketBulkRounded,
  StrokeSharp: IconPlugSocketStrokeSharp,
  SolidSharp: IconPlugSocketSolidSharp,
};