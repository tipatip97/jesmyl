import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.67201 10.5471L7.47975 5.84679C9.55727 3.28226 10.596 2 12.0001 2C13.4042 2 14.443 3.28226 16.5205 5.84679L20.3282 10.5471C20.8408 11.1798 21.097 11.4961 20.9664 11.7481C20.8357 12 20.4154 12 19.5748 12H4.4254C3.5848 12 3.1645 12 3.03386 11.7481C2.90322 11.4961 3.15949 11.1798 3.67201 10.5471Z',
  d2: 'M6.00012 8.50768C9.32819 9.40703 10.8212 5.2314 13.5795 7.91042C15.0001 9.29007 16.4165 9.205 18.0001 8.50769',
  d3: 'M10.0002 22V18C10.0002 16.8954 10.8957 16 12.0002 16C13.1048 16 14.0002 16.8954 14.0002 18V22',
  d4: 'M19.5002 12L19.5002 20C19.5002 20.9428 19.5002 21.4142 19.2074 21.7071C18.9145 22 18.4431 22 17.5002 22L6.50024 22C5.55743 22 5.08603 22 4.79314 21.7071C4.50024 21.4142 4.50024 20.9428 4.50024 20L4.50024 12',
  d5: 'M5.00012 8.50771C8.88287 9.40708 10.6247 5.23136 13.8428 7.91044C15.5001 9.29011 17.1526 9.20504 19.0001 8.50771L12.0001 2L5.00012 8.50771Z',
  d6: 'M10.0001 22L6.50012 22C5.55731 22 5.08591 22 4.79302 21.7071C4.50012 21.4142 4.50012 20.9428 4.50012 20V12H19.5001L19.5001 20C19.5001 20.9428 19.5001 21.4142 19.2072 21.7071C18.9143 22 18.4429 22 17.5001 22H14.0001V18C14.0001 16.8954 13.1047 16 12.0001 16C10.8956 16 10.0001 16.8954 10.0001 18V22Z',
  d7: 'M21.6332 12.0933C21.8865 11.6048 21.6778 11.1507 21.5356 10.9095C21.3949 10.6709 21.1723 10.3962 20.9435 10.1139L19.9428 8.87867C19.7944 8.69547 19.7202 8.60387 19.615 8.58228C19.5099 8.56068 19.4056 8.61561 19.197 8.72549L18.3274 9.18352L18.3034 9.19411C17.4552 9.5676 16.5712 9.81466 15.6642 9.73507C14.7356 9.65359 13.871 9.23804 13.058 8.44844C12.469 7.87631 12.0368 7.7496 11.7015 7.74999C11.3208 7.75044 10.9144 7.91045 10.3537 8.20542C10.2421 8.26413 10.1251 8.32839 10.0026 8.39567C8.98824 8.95285 7.59843 9.71625 5.8055 9.23173L5.77787 9.22427L4.62437 8.81598C4.43129 8.74764 4.33475 8.71347 4.24304 8.73933C4.15134 8.76519 4.08688 8.84476 3.95795 9.00391L3.05879 10.1139C2.82996 10.3962 2.60733 10.6709 2.46665 10.9095C2.32448 11.1507 2.11571 11.6048 2.36905 12.0933C2.61322 12.5642 3.08736 12.6733 3.3611 12.7114C3.63998 12.7501 3.99986 12.7501 4.37841 12.75H19.6238C20.0024 12.7501 20.3623 12.7501 20.6411 12.7114C20.9149 12.6733 21.389 12.5642 21.6332 12.0933Z',
  d8: 'M5.76114 6.77802C5.51775 7.07847 5.39604 7.2287 5.43822 7.37824C5.48039 7.52778 5.66264 7.59229 6.02716 7.72131L6.22308 7.79066C7.38927 8.09569 8.23503 7.64059 9.27591 7.08052C9.39934 7.0141 9.52552 6.94621 9.6553 6.87793C10.2287 6.57627 10.9207 6.2509 11.6997 6.24999C12.5241 6.24903 13.313 6.60501 14.1031 7.37242C14.7107 7.96248 15.2646 8.19424 15.7953 8.24081C16.3416 8.28876 16.9503 8.1482 17.6754 7.83163L18.0235 7.64826C18.3227 7.49064 18.4723 7.41183 18.5009 7.27287C18.5294 7.13391 18.423 7.00251 18.2101 6.73972L17.0656 5.32693C16.0597 4.08526 15.2524 3.08867 14.5173 2.41047C13.7561 1.70813 12.971 1.25 12.0011 1.25C11.0312 1.25 10.2461 1.70813 9.48489 2.41047C8.74982 3.08868 7.94255 4.08522 6.93669 5.32691L5.76114 6.77802Z',
  d9: 'M20.2087 21.196C20.2521 20.8733 20.252 20.4765 20.252 20.0438V14.5922C20.252 14.3093 20.252 14.1679 20.1641 14.0801C20.0762 13.9922 19.9348 13.9922 19.652 13.9922L4.35196 13.9922C4.06912 13.9922 3.9277 13.9922 3.83983 14.0801C3.75196 14.1679 3.75196 14.3094 3.75196 14.5922L3.75196 20.0436C3.75191 20.4764 3.75186 20.8732 3.79526 21.196C3.84305 21.5515 3.9555 21.9273 4.26452 22.2363C4.57355 22.5453 4.94927 22.6577 5.30475 22.7055C5.62756 22.7489 6.02439 22.7489 6.4572 22.7488H8.85098C9.03954 22.7488 9.13382 22.7488 9.1924 22.6903C9.25098 22.6317 9.25098 22.5374 9.25098 22.3488V17.999C9.25098 16.4802 10.4822 15.249 12.001 15.249C13.5198 15.249 14.751 16.4802 14.751 17.999V22.3488C14.751 22.5374 14.751 22.6317 14.8096 22.6903C14.8681 22.7488 14.9624 22.7488 15.151 22.7488H17.5467C17.9795 22.7489 18.3764 22.7489 18.6992 22.7055C19.0546 22.6577 19.4304 22.5453 19.7394 22.2363C20.0484 21.9273 20.1609 21.5515 20.2087 21.196Z',
  d10: 'M12.851 22.7488C13.0395 22.7488 13.1338 22.7488 13.1924 22.6903C13.251 22.6317 13.251 22.5374 13.251 22.3488V17.999C13.251 17.3087 12.6913 16.749 12.001 16.749C11.3106 16.749 10.751 17.3087 10.751 17.999V22.3488C10.751 22.5374 10.751 22.6317 10.8096 22.6903C10.8681 22.7488 10.9624 22.7488 11.151 22.7488H12.851Z',
  d11: 'M21.6332 12.0933C21.8865 11.6048 21.6778 11.1507 21.5356 10.9095C21.3949 10.6709 21.1723 10.3962 20.9435 10.1139L19.9428 8.87868C19.7944 8.69548 19.7202 8.60388 19.615 8.58228C19.5099 8.56068 19.4056 8.61562 19.197 8.7255L18.3274 9.18353L18.3034 9.19412C17.4552 9.56761 16.5712 9.81467 15.6642 9.73508C14.7356 9.6536 13.871 9.23805 13.058 8.44845C12.469 7.87632 12.0368 7.74961 11.7015 7.75C11.3208 7.75044 10.9144 7.91046 10.3537 8.20543C10.2421 8.26413 10.1251 8.3284 10.0026 8.39568C8.98824 8.95286 7.59843 9.71626 5.8055 9.23174L5.77787 9.22428L4.62437 8.81599C4.43129 8.74765 4.33475 8.71348 4.24304 8.73934C4.15134 8.7652 4.08688 8.84477 3.95795 9.00392L3.05879 10.1139C2.82996 10.3962 2.60733 10.6709 2.46665 10.9095C2.32448 11.1507 2.11571 11.6048 2.36905 12.0933C2.61322 12.5642 3.08736 12.6733 3.3611 12.7114C3.63998 12.7501 3.99986 12.7501 4.37841 12.75H19.6238C20.0024 12.7501 20.3623 12.7501 20.6411 12.7114C20.9149 12.6733 21.389 12.5642 21.6332 12.0933Z',
  d12: 'M5.76103 6.77802C5.51763 7.07847 5.39593 7.2287 5.4381 7.37824C5.5122 7.641 5.98944 7.708 6.22296 7.79066C7.52745 8.13186 8.431 7.52197 9.65518 6.87793C10.2286 6.57627 10.9206 6.2509 11.6996 6.24999C12.524 6.24903 13.3129 6.60501 14.103 7.37242C14.7106 7.96248 15.2645 8.19424 15.7952 8.24081C16.3415 8.28876 16.9502 8.1482 17.6753 7.83163C17.9079 7.7091 18.444 7.54905 18.5007 7.27287C18.5293 7.13391 18.4228 7.00251 18.21 6.73972L17.0655 5.32693C16.0596 4.08526 15.2523 3.08867 14.5172 2.41047C13.756 1.70813 12.9709 1.25 12.001 1.25C11.0311 1.25 10.246 1.70813 9.48478 2.41047C8.7497 3.08868 7.94244 4.08522 6.93657 5.32691L5.76103 6.77802Z',
  d13: 'M20.252 20.0438C20.252 20.4765 20.2521 20.8733 20.2087 21.196C20.1609 21.5515 20.0484 21.9273 19.7394 22.2363C19.4304 22.5453 19.0546 22.6577 18.6992 22.7055C18.3764 22.7489 17.9796 22.7489 17.5468 22.7488H17.5467H6.4572C6.02439 22.7489 5.62756 22.7489 5.30475 22.7055C4.94927 22.6577 4.57355 22.5453 4.26452 22.2363C3.9555 21.9273 3.84305 21.5515 3.79526 21.196C3.75186 20.8732 3.75191 20.4764 3.75196 20.0436L3.75196 14.5922C3.75196 14.3094 3.75196 14.1679 3.83983 14.0801C3.9277 13.9922 4.06912 13.9922 4.35196 13.9922L19.652 13.9922C19.9348 13.9922 20.0762 13.9922 20.1641 14.0801C20.252 14.1679 20.252 14.3093 20.252 14.5922V20.0437V20.0438Z',
  d14: 'M9.25195 22.7498V18C9.25195 16.4812 10.4832 15.25 12.002 15.25C13.5207 15.25 14.752 16.4812 14.752 18V22.7498H13.252V18C13.252 17.3096 12.6923 16.75 12.002 16.75C11.3116 16.75 10.752 17.3096 10.752 18V22.7498H9.25195Z',
  d15: 'M3.00012 12L12.0001 2L21.0001 12H3.00012Z',
  d16: 'M10.0002 22V16H14.0002V22',
  d17: 'M19.5002 12L19.5002 22L4.50024 22.0001L4.50024 12',
  d18: 'M12.5575 1.49828C12.4152 1.34024 12.2126 1.25 12 1.25C11.7874 1.25 11.5848 1.34024 11.4425 1.49828L5.69155 7.88826C6.80671 7.88876 7.73936 7.48571 8.74117 7.05276C8.89664 6.98558 9.05377 6.91767 9.21351 6.85044C9.93334 6.54749 10.7385 6.25087 11.6239 6.25004C12.5406 6.24919 13.4621 6.56256 14.4347 7.31822C15.2122 7.92228 15.9585 8.18679 16.7135 8.23979C17.2578 8.278 17.831 8.20793 18.4513 8.04699L12.5575 1.49828Z',
  d19: 'M19.561 9.27995C18.5821 9.60828 17.5983 9.8056 16.6085 9.73611C15.5395 9.66107 14.5126 9.2783 13.5144 8.50271C12.763 7.91886 12.1582 7.74954 11.6253 7.75004C11.061 7.75057 10.4931 7.93933 9.79539 8.23298C9.6505 8.29396 9.50091 8.35942 9.34637 8.42705C8.08935 8.97714 6.5043 9.67076 4.45345 9.26393L2.44254 11.4983C2.24441 11.7184 2.19439 12.0346 2.31489 12.3051C2.43539 12.5757 2.70383 12.75 3.00001 12.75H21C21.2962 12.75 21.5646 12.5757 21.6851 12.3051C21.8056 12.0346 21.7556 11.7184 21.5575 11.4983L19.561 9.27995Z',
  d20: 'M14.7502 22.75L20.2502 22.7499V14H3.75024V22.7501L9.25024 22.75V17C9.25024 16.5858 9.58603 16.25 10.0002 16.25H14.0002C14.4145 16.25 14.7502 16.5858 14.7502 17V22.75Z',
  d21: 'M13.2502 22.75V17.75H10.7502V22.75L13.2502 22.75Z',
} as const;

export const IconTrulliStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trulli-stroke-rounded IconTrulliStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTrulliDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trulli-duotone-rounded IconTrulliDuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconTrulliTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trulli-twotone-rounded IconTrulliTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTrulliSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trulli-solid-rounded IconTrulliSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconTrulliBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trulli-bulk-rounded IconTrulliBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTrulliStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trulli-stroke-sharp IconTrulliStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconTrulliSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trulli-solid-sharp IconTrulliSolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTrulli: TheIconSelfPack = {
  name: 'Trulli',
  StrokeRounded: IconTrulliStrokeRounded,
  DuotoneRounded: IconTrulliDuotoneRounded,
  TwotoneRounded: IconTrulliTwotoneRounded,
  SolidRounded: IconTrulliSolidRounded,
  BulkRounded: IconTrulliBulkRounded,
  StrokeSharp: IconTrulliStrokeSharp,
  SolidSharp: IconTrulliSolidSharp,
};