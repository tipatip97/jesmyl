import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5903 6L4.40974 6C4.17689 6 4.06046 6 3.95117 6.01655C3.44896 6.0926 2.98753 6.4267 2.66218 6.94983C2.59137 7.06367 2.52679 7.19473 2.39763 7.45684C2.19831 7.86133 2.09864 8.06357 2.05784 8.21806C1.86185 8.96021 2.18187 9.76918 2.74703 9.96023C2.86468 10 3.04435 10 3.40368 10L20.5963 10C20.9557 10 21.1353 10 21.253 9.96023C21.8181 9.76918 22.1382 8.96021 21.9422 8.21806C21.9014 8.06358 21.8017 7.86128 21.6024 7.45684C21.4732 7.19476 21.4086 7.06366 21.3378 6.94983C21.0125 6.4267 20.551 6.0926 20.0488 6.01655C19.9395 6 19.8231 6 19.5903 6Z',
  d2: 'M6 14L18 14',
  d3: 'M4 10L5.25245 11.5882C5.95166 12.4749 6.17691 13.6387 5.85802 14.717L5.18289 17',
  d4: 'M20 10L18.7476 11.5882C18.0483 12.4749 17.8231 13.6387 18.142 14.717L18.8171 17',
  d5: 'M7 19C7 20.1046 6.10457 21 5 21C3.89543 21 3 20.1046 3 19C3 17.8954 3.89543 17 5 17C6.10457 17 7 17.8954 7 19Z',
  d6: 'M21 19C21 20.1046 20.1046 21 19 21C17.8954 21 17 20.1046 17 19C17 17.8954 17.8954 17 19 17C20.1046 17 21 17.8954 21 19Z',
  d7: 'M6 6V4.1036C6 3.38598 6.61139 2.85943 7.24254 3.03348L9.24254 3.58501C9.6877 3.70777 10 4.14897 10 4.65513V6',
  d8: 'M19.5903 6H4.40974C4.17689 6 4.06046 6 3.95117 6.01655C3.44896 6.0926 2.98753 6.4267 2.66218 6.94983C2.59137 7.06367 2.52679 7.19473 2.39763 7.45684C2.19831 7.86133 2.09864 8.06357 2.05784 8.21806C1.86185 8.96021 2.18187 9.76918 2.74703 9.96023C2.86468 10 3.04435 10 3.40368 10H20.5963C20.9557 10 21.1353 10 21.253 9.96023C21.8181 9.76918 22.1382 8.96021 21.9422 8.21806C21.9014 8.06358 21.8017 7.86128 21.6024 7.45684C21.4732 7.19476 21.4086 7.06366 21.3378 6.94983C21.0125 6.4267 20.551 6.0926 20.0488 6.01655C19.9395 6 19.8231 6 19.5903 6Z',
  d9: 'M6 14H18M4 10L5.25245 11.5882C5.95166 12.4749 6.17691 13.6387 5.85802 14.717L5.18289 17M20 10L18.7476 11.5882C18.0483 12.4749 17.8231 13.6387 18.142 14.717L18.8171 17',
  d10: 'M4.36935 5.25392L19.6307 5.25392C19.8236 5.2538 19.9944 5.2537 20.1611 5.27894C20.9262 5.39481 21.5605 5.89162 21.9747 6.55768C22.0654 6.70354 22.1992 6.97493 22.3125 7.20493C22.475 7.53409 22.6067 7.80089 22.6673 8.0305C22.8068 8.55857 22.7646 9.11006 22.5804 9.57564C22.3995 10.0329 22.0442 10.4884 21.4932 10.6747C21.3326 10.729 21.1733 10.7423 21.0509 10.7481C20.9283 10.754 20.7783 10.7539 20.6125 10.7539L3.38747 10.7539H3.38746C3.22173 10.7539 3.07169 10.754 2.9491 10.7481C2.82668 10.7423 2.66742 10.7289 2.50685 10.6747C1.95585 10.4884 1.60048 10.0329 1.41959 9.57564C1.23541 9.11006 1.19325 8.55857 1.33271 8.0305C1.39335 7.80087 1.52504 7.53411 1.68756 7.20491L1.68756 7.2049C1.80081 6.975 1.93461 6.70351 2.0253 6.55768C2.43954 5.89162 3.07377 5.39481 3.83888 5.27894C4.0056 5.2537 4.17643 5.2538 4.36935 5.25392Z',
  d11: 'M5 14.0039C5 13.4516 5.44772 13.0039 6 13.0039L18 13.0039C18.5523 13.0039 19 13.4516 19 14.0039C19 14.5562 18.5523 15.0039 18 15.0039L6 15.0039C5.44772 15.0039 5 14.5562 5 14.0039Z',
  d12: 'M3.38082 9.21873C3.81449 8.87674 4.44328 8.95107 4.78526 9.38473L6.03771 10.9729C6.93693 12.1132 7.22841 13.6133 6.81701 15.0045L6.14188 17.2875C5.98526 17.8171 5.42896 18.1195 4.89935 17.9629C4.36973 17.8063 4.06736 17.25 4.22398 16.7204L4.89911 14.4374C5.12549 13.6719 4.96647 12.8444 4.46727 12.2114L3.21482 10.6232C2.87284 10.1895 2.94716 9.56071 3.38082 9.21873Z',
  d13: 'M20.6192 9.21873C21.0529 9.56071 21.1272 10.1895 20.7852 10.6232L19.5328 12.2114C19.0336 12.8444 18.8746 13.6719 19.101 14.4374L19.7761 16.7204C19.9327 17.25 19.6303 17.8063 19.1007 17.9629C18.5711 18.1195 18.0148 17.8171 17.8582 17.2875L17.1831 15.0045C16.7717 13.6133 17.0631 12.1132 17.9624 10.9729L19.2148 9.38473C19.5568 8.95107 20.1856 8.87674 20.6192 9.21873Z',
  d14: 'M5 18.0039C4.44772 18.0039 4 18.4516 4 19.0039C4 19.5562 4.44772 20.0039 5 20.0039C5.55228 20.0039 6 19.5562 6 19.0039C6 18.4516 5.55228 18.0039 5 18.0039ZM2 19.0039C2 17.3471 3.34315 16.0039 5 16.0039C6.65685 16.0039 8 17.3471 8 19.0039C8 20.6608 6.65685 22.0039 5 22.0039C3.34315 22.0039 2 20.6608 2 19.0039Z',
  d15: 'M19 18.0039C18.4477 18.0039 18 18.4516 18 19.0039C18 19.5562 18.4477 20.0039 19 20.0039C19.5523 20.0039 20 19.5562 20 19.0039C20 18.4516 19.5523 18.0039 19 18.0039ZM16 19.0039C16 17.3471 17.3431 16.0039 19 16.0039C20.6569 16.0039 22 17.3471 22 19.0039C22 20.6608 20.6569 22.0039 19 22.0039C17.3431 22.0039 16 20.6608 16 19.0039Z',
  d16: 'M7.02258 4.01468C7.01188 4.0322 7 4.06224 7 4.10813V6.00453C7 6.55681 6.55228 7.00453 6 7.00453C5.44772 7.00453 5 6.55681 5 6.00453V4.10813C5 2.86523 6.1159 1.68999 7.50838 2.07399L9.50838 2.62552C10.4423 2.88307 11 3.76341 11 4.65966V6.00453C11 6.55681 10.5523 7.00453 10 7.00453C9.44772 7.00453 9 6.55681 9 6.00453V4.65966C9 4.61158 8.98501 4.57696 8.97199 4.55857C8.96938 4.55488 8.9672 4.55226 8.96557 4.55048L7.02258 4.01468Z',
  d17: 'M7 4.10813C7 4.06224 7.01188 4.0322 7.02258 4.01468L8.96557 4.55048C8.9672 4.55226 8.96938 4.55488 8.97199 4.55857C8.98501 4.57696 9 4.61158 9 4.65966V5.25441H11V4.65966C11 3.76341 10.4423 2.88307 9.50838 2.62552L7.50838 2.07399C6.1159 1.68999 5 2.86523 5 4.10813V5.25441H7V4.10813Z',
  d18: 'M19.5332 12.2114L20.6826 10.7539L18.1355 10.7539L17.9628 10.9729C17.0636 12.1132 16.7721 13.6133 17.1835 15.0045L17.584 16.3587C18.0057 16.1325 18.4879 16.0042 19 16.0042C19.1989 16.0042 19.3933 16.0235 19.5814 16.0604L19.1014 14.4373C18.875 13.6718 19.034 12.8444 19.5332 12.2114Z',
  d19: 'M6.03813 10.9729L5.86543 10.7539L3.31836 10.7539L4.46769 12.2114C4.9669 12.8444 5.12591 13.6718 4.89953 14.4373L4.41961 16.0602C4.60739 16.0234 4.80144 16.0042 5 16.0042C5.51244 16.0042 5.99487 16.1326 6.41684 16.3591L6.81743 15.0045C7.22883 13.6133 6.93736 12.1132 6.03813 10.9729Z',
  d20: 'M22 6H2V9.5H22V6Z',
  d21: 'M6.00098 13.5H18.001',
  d22: 'M4.00098 9.5L5.25342 11.0882C5.95264 11.9749 6.17789 13.1387 5.859 14.217L5.18386 16.5',
  d23: 'M20.001 9.5L18.7485 11.0882C18.0493 11.9749 17.8241 13.1387 18.143 14.217L18.8181 16.5',
  d24: 'M7.00098 18.5C7.00098 19.6046 6.10555 20.5 5.00098 20.5C3.89641 20.5 3.00098 19.6046 3.00098 18.5C3.00098 17.3954 3.89641 16.5 5.00098 16.5C6.10555 16.5 7.00098 17.3954 7.00098 18.5Z',
  d25: 'M21.001 18.5C21.001 19.6046 20.1055 20.5 19.001 20.5C17.8964 20.5 17.001 19.6046 17.001 18.5C17.001 17.3954 17.8964 16.5 19.001 16.5C20.1055 16.5 21.001 17.3954 21.001 18.5Z',
  d26: 'M4 6V3.5H8V6',
  d27: 'M5 17.5C4.44772 17.5 4 17.9477 4 18.5C4 19.0523 4.44772 19.5 5 19.5C5.55228 19.5 6 19.0523 6 18.5C6 17.9477 5.55228 17.5 5 17.5ZM2 18.5C2 16.8431 3.34315 15.5 5 15.5C6.65685 15.5 8 16.8431 8 18.5C8 20.1569 6.65685 21.5 5 21.5C3.34315 21.5 2 20.1569 2 18.5Z',
  d28: 'M19 17.5C18.4477 17.5 18 17.9477 18 18.5C18 19.0523 18.4477 19.5 19 19.5C19.5523 19.5 20 19.0523 20 18.5C20 17.9477 19.5523 17.5 19 17.5ZM16 18.5C16 16.8431 17.3431 15.5 19 15.5C20.6569 15.5 22 16.8431 22 18.5C22 20.1569 20.6569 21.5 19 21.5C17.3431 21.5 16 20.1569 16 18.5Z',
  d29: 'M1.25 6C1.25 5.58579 1.58579 5.25 2 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6V9.5C22.75 9.91421 22.4142 10.25 22 10.25H2C1.58579 10.25 1.25 9.91421 1.25 9.5V6Z',
  d30: 'M17.9624 10.4691L19.2148 8.88086L20.7853 10.1193L19.5328 11.7075C19.0336 12.3405 18.8746 13.168 19.101 13.9335L19.7761 16.2165L17.8582 16.7837L17.1831 14.5007C17.183 14.5005 17.183 14.5003 17.1829 14.5001H6.8172C6.81714 14.5003 6.81709 14.5005 6.81703 14.5007L6.1419 16.7837L4.224 16.2165L4.89913 13.9335C5.12551 13.168 4.9665 12.3405 4.46729 11.7075L5.25251 11.0883L4.46729 11.7075L3.21484 10.1193L4.78528 8.88086L6.03773 10.4691C6.51098 11.0692 6.8159 11.769 6.93861 12.5001H17.0615C17.1842 11.769 17.4891 11.0692 17.9624 10.4691L18.6973 11.0486L17.9624 10.4691Z',
  d31: 'M3 3.5C3 2.94772 3.44772 2.5 4 2.5H8C8.55228 2.5 9 2.94772 9 3.5V6H7V4.5H5V6H3V3.5Z',
} as const;

export const IconHospitalBed01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-01-stroke-rounded IconHospitalBed01StrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospitalBed01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-01-duotone-rounded IconHospitalBed01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospitalBed01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-01-twotone-rounded IconHospitalBed01TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospitalBed01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-01-solid-rounded IconHospitalBed01SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconHospitalBed01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-01-bulk-rounded IconHospitalBed01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHospitalBed01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-01-stroke-sharp IconHospitalBed01StrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospitalBed01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-bed-01-solid-sharp IconHospitalBed01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHospitalBed01: TheIconSelfPack = {
  name: 'HospitalBed01',
  StrokeRounded: IconHospitalBed01StrokeRounded,
  DuotoneRounded: IconHospitalBed01DuotoneRounded,
  TwotoneRounded: IconHospitalBed01TwotoneRounded,
  SolidRounded: IconHospitalBed01SolidRounded,
  BulkRounded: IconHospitalBed01BulkRounded,
  StrokeSharp: IconHospitalBed01StrokeSharp,
  SolidSharp: IconHospitalBed01SolidSharp,
};