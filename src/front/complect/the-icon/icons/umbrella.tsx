import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 3.5V2',
  d2: 'M12 3.5C11.0608 3.5 7.52791 7.29323 6.97182 12.2037M12 3.5C12.9392 3.5 16.4721 7.29322 17.0282 12.2037M12 3.5C16.9367 3.5 21.0545 6.93552 22 11.5C20.6123 12.7 18.1073 12.4691 17.0282 12.2037M12 3.5C7.06333 3.5 2.94545 6.93552 2 11.5C3.38792 12.7 5.89285 12.4691 6.97182 12.2037M6.97182 12.2037C8.4559 13.0288 10.1718 13.5 12 13.5C13.8282 13.5 15.5441 13.0288 17.0282 12.2037',
  d3: 'M12 13.5V20.5C12 21.3284 11.3284 22 10.5 22C9.67157 22 9 21.3284 9 20.5V20',
  d4: 'M12 3.5C11.0608 3.5 7.52791 7.29323 6.97182 12.2037C5.89285 12.4691 3.38792 12.7 2 11.5C2.94545 6.93552 7.06333 3.5 12 3.5C16.9367 3.5 21.0545 6.93552 22 11.5C20.6123 12.7 18.1073 12.4691 17.0282 12.2037C16.4721 7.29322 12.9392 3.5 12 3.5Z',
  d5: 'M6.97266 12.2037C8.45673 13.0288 10.1726 13.5 12.0008 13.5C13.829 13.5 15.5449 13.0288 17.029 12.2037C16.4729 7.29322 12.9401 3.5 12.0008 3.5C11.0616 3.5 7.52874 7.29323 6.97266 12.2037Z',
  d6: 'M12 1C12.5523 1 13 1.44772 13 2V3.5C13 4.05228 12.5523 4.5 12 4.5C11.4477 4.5 11 4.05228 11 3.5V2C11 1.44772 11.4477 1 12 1Z',
  d7: 'M3.13971 11.0539C3.55779 11.2522 4.0817 11.3665 4.6649 11.4034C5.17304 11.4355 5.67067 11.4052 6.08361 11.351C6.48597 9.00464 7.48528 6.95169 8.51727 5.44526C8.60709 5.31414 8.69754 5.18661 8.78829 5.06286C6.05158 6.0593 3.93586 8.29158 3.13971 11.0539ZM12 2.5C6.5935 2.5 2.06328 6.26429 1.02081 11.2972C0.947265 11.6522 1.07169 12.0193 1.34599 12.2565C2.2789 13.0631 3.50881 13.3343 4.53869 13.3994C5.39111 13.4533 6.21058 13.3727 6.82353 13.2579C8.37338 14.0519 10.135 14.5 12 14.5C13.865 14.5 15.6267 14.0519 17.1765 13.2579C17.7895 13.3727 18.609 13.4533 19.4615 13.3994C20.4914 13.3343 21.7213 13.0631 22.6541 12.2564C22.9284 12.0192 23.0528 11.6522 22.9792 11.2972C21.9368 6.26429 17.4066 2.5 12 2.5ZM12 4.56283C11.8906 4.63511 11.7459 4.74729 11.5718 4.90681C11.1653 5.27916 10.6669 5.84618 10.1672 6.57557C9.26755 7.88888 8.41307 9.65583 8.06372 11.638C9.2558 12.1904 10.5896 12.5 12 12.5C13.4105 12.5 14.7443 12.1904 15.9363 11.638C15.587 9.65583 14.7325 7.88888 13.8328 6.57557C13.3331 5.84618 12.8347 5.27916 12.4283 4.90681C12.2541 4.74729 12.1094 4.63511 12 4.56283ZM17.9164 11.3509C17.5141 9.00464 16.5148 6.95169 15.4828 5.44526C15.393 5.31414 15.3025 5.18661 15.2118 5.06286C17.9485 6.05931 20.0642 8.2916 20.8604 11.054C20.4424 11.2522 19.9185 11.3665 19.3353 11.4034C18.8271 11.4355 18.3294 11.4052 17.9164 11.3509Z',
  d8: 'M12 12.5C12.5523 12.5 13 12.9477 13 13.5V20.5C13 21.8807 11.8807 23 10.5 23C9.11929 23 8 21.8807 8 20.5V20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20V20.5C10 20.7761 10.2239 21 10.5 21C10.7761 21 11 20.7761 11 20.5V13.5C11 12.9477 11.4477 12.5 12 12.5Z',
  d9: 'M12 3.5V1',
  d10: 'M12 3.5C16.9706 3.5 21 6.97715 21 12.5H3C3 6.97715 7.02944 3.5 12 3.5Z',
  d11: 'M12 3.5C14.2091 3.5 16 6.97715 16 12.5H8C8 6.97715 9.79086 3.5 12 3.5Z',
  d12: 'M12 12.5V20.5C12 21.3284 11.3284 22 10.5 22C9.67157 22 9 21.3284 9 20.5V20',
  d13: 'M13 1V3.5H11V1H13Z',
  d14: 'M22 12.5V13.5H2V12.5C2 6.38449 6.51841 2.5 12 2.5C17.4816 2.5 22 6.38449 22 12.5ZM8.74975 5.103C6.20096 6.11938 4.3715 8.37306 4.05036 11.5H7.26958C7.36462 9.11005 7.80155 7.0993 8.49127 5.61319C8.57266 5.43783 8.65885 5.26746 8.74975 5.103ZM15.2502 5.103C15.3411 5.26746 15.4273 5.43783 15.5087 5.61319C16.1985 7.0993 16.6354 9.11005 16.7304 11.5H19.9496C19.6285 8.37306 17.799 6.11938 15.2502 5.103Z',
  d15: 'M13 12.5V20.5C13 21.8807 11.8807 23 10.5 23C9.11929 23 8 21.8807 8 20.5V20H10V20.5C10 20.7761 10.2239 21 10.5 21C10.7761 21 11 20.7761 11 20.5V12.5H13Z',
} as const;

export const IconUmbrellaStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-stroke-rounded IconUmbrellaStrokeRounded"
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

export const IconUmbrellaDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-duotone-rounded IconUmbrellaDuotoneRounded"
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

export const IconUmbrellaTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-twotone-rounded IconUmbrellaTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconUmbrellaSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-solid-rounded IconUmbrellaSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUmbrellaBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-bulk-rounded IconUmbrellaBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUmbrellaStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-stroke-sharp IconUmbrellaStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUmbrellaSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="umbrella-solid-sharp IconUmbrellaSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfUmbrella: TheIconSelfPack = {
  name: 'Umbrella',
  StrokeRounded: IconUmbrellaStrokeRounded,
  DuotoneRounded: IconUmbrellaDuotoneRounded,
  TwotoneRounded: IconUmbrellaTwotoneRounded,
  SolidRounded: IconUmbrellaSolidRounded,
  BulkRounded: IconUmbrellaBulkRounded,
  StrokeSharp: IconUmbrellaStrokeSharp,
  SolidSharp: IconUmbrellaSolidSharp,
};