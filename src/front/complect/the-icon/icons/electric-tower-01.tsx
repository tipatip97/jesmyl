import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 6L9.39981 8.21413C9.46594 8.64819 9.42564 9.08872 9.2813 9.50982L5 22M15 6L14.6002 8.21413C14.5341 8.64819 14.5744 9.08872 14.7187 9.50982L19 22',
  d2: 'M3 11L3.32375 9.92082C3.41097 9.63011 3.45457 9.48476 3.55302 9.36314C3.65148 9.24153 3.79688 9.1534 4.08769 8.97715L8.47402 6.31877C8.73481 6.16072 8.8652 6.0817 9.01594 6.04085C9.16668 6 9.32791 6 9.65037 6H14.3496C14.6721 6 14.8333 6 14.9841 6.04085C15.1348 6.0817 15.2652 6.16073 15.526 6.31877L19.9123 8.97715C20.2031 9.1534 20.3485 9.24153 20.447 9.36314C20.5454 9.48475 20.589 9.63012 20.6762 9.92082L21 11',
  d3: 'M3 22H21',
  d4: 'M4 9H19.5',
  d5: 'M9.5 10L16 14.5L5 22',
  d6: 'M14.5 10L8 14.5L19 22',
  d7: 'M9 6L10.4 3.76C11.1333 2.58667 11.5 2 12 2C12.5 2 12.8667 2.58667 13.6 3.76L15 6',
  d8: 'M9.5 10L12 11.7308L14.5 10L16 14.5L12 11.7308L8 14.5L9.5 10Z',
  d9: 'M19 22L16 14.5L12 17.2273L19 22Z',
  d10: 'M12 17.2273L8 14.5L5 22L12 17.2273Z',
  d11: 'M4 9L8.43495 6.32122L8.43496 6.32121C8.69863 6.16195 8.83046 6.08232 8.98287 6.04116C9.13527 6 9.29829 6 9.62433 6H14.3757C14.7017 6 14.8647 6 15.0171 6.04116C15.1695 6.08232 15.3014 6.16196 15.565 6.3212L15.5651 6.32122L20 9H4Z',
  d12: 'M9.5 10L16 14.5L5 22M14.5 10L8 14.5L19 22',
  d13: 'M15.1804 5.31708C14.9301 5.24926 14.6717 5.24966 14.4101 5.25006H9.5902C9.32861 5.24966 9.07023 5.24926 8.81997 5.31708C8.56388 5.38648 8.3461 5.51898 8.13393 5.64807L3.63926 8.37202C3.41168 8.509 3.15454 8.66378 2.9703 8.89136C2.77511 9.13247 2.67348 9.47585 2.60558 9.70544L2.28183 10.7846C2.1628 11.1814 2.38794 11.5995 2.78469 11.7185C3.18143 11.8375 3.59954 11.6124 3.71857 11.2156L4.14036 9.75012H19.86L20.2818 11.2156C20.4008 11.6124 20.8189 11.8375 21.2156 11.7185C21.6124 11.5995 21.8375 11.1814 21.7185 10.7846L21.3948 9.70544C21.3269 9.47585 21.2252 9.13247 21.03 8.89136C20.8458 8.66378 20.5887 8.509 20.3611 8.37202L15.8664 5.64807C15.6542 5.51898 15.4365 5.38648 15.1804 5.31708ZM14.7879 6.76489L17.2655 8.25015H6.73462L9.21219 6.76489H14.7879Z',
  d14: 'M8.88343 9.57316C9.1192 9.2326 9.58642 9.14765 9.92698 9.38342L12.0001 10.8186L14.0732 9.38342C14.4137 9.14765 14.8809 9.2326 15.1167 9.57316C15.3525 9.91372 15.2675 10.3809 14.927 10.6167L13.3177 11.7308L16.427 13.8834C16.6301 14.024 16.7509 14.2557 16.7501 14.5027C16.7492 14.7498 16.6267 14.9806 16.4226 15.1197L13.3314 17.2273L19.4226 21.3804C19.7648 21.6137 19.8531 22.0803 19.6197 22.4226C19.3864 22.7648 18.9198 22.8531 18.5776 22.6197L12.0001 18.1351L5.42258 22.6197C5.08034 22.8531 4.61374 22.7648 4.3804 22.4226C4.14706 22.0803 4.23534 21.6137 4.57757 21.3804L10.6687 17.2273L7.57757 15.1197C7.37345 14.9806 7.25096 14.7498 7.25008 14.5027C7.2492 14.2557 7.37004 14.024 7.57317 13.8834L10.6825 11.7308L9.07316 10.6167C8.7326 10.3809 8.64765 9.91372 8.88343 9.57316ZM12.0001 12.643L9.3245 14.4953L12.0001 16.3196L14.6756 14.4953L12.0001 12.643Z',
  d15: 'M21 22.75C21.4142 22.75 21.75 22.4142 21.75 22C21.75 21.5858 21.4142 21.25 21 21.25H19.5358L15.4282 9.26663C15.3236 8.96136 15.2946 8.64623 15.3403 8.33645L15.7381 6.13327C15.7713 5.94981 15.7349 5.76059 15.6361 5.6025L14.2073 3.31645C13.8654 2.76928 13.5672 2.29208 13.2874 1.95826C13.0007 1.61613 12.5923 1.25 12.0001 1.25C11.4078 1.25 10.9995 1.61613 10.7127 1.95826C10.433 2.29208 10.1348 2.76923 9.79288 3.3164L8.36407 5.6025C8.26526 5.76059 8.22887 5.94981 8.262 6.13327L8.65983 8.33645C8.7055 8.64623 8.67653 8.96136 8.57189 9.26663L4.46431 21.25H3C2.58579 21.25 2.25 21.5858 2.25 22C2.25 22.4142 2.58579 22.75 3 22.75H21ZM11.0361 4.15742C11.4154 3.55054 11.7961 3.02011 12.0001 2.77661C12.2042 3.02011 12.5848 3.55054 12.9641 4.15742L14.2106 6.15174L13.8623 8.08078L13.8589 8.1011C13.7743 8.65643 13.8264 9.21908 14.0094 9.75293L17.9502 21.2499H6.05005L9.99091 9.75293C10.1739 9.21908 10.226 8.65643 10.1414 8.1011L10.138 8.08078L9.78968 6.15174L11.0361 4.15742Z',
  d16: 'M8.88245 9.57316C9.11823 9.2326 9.58544 9.14765 9.926 9.38342L11.9991 10.8186L14.0722 9.38342C14.4128 9.14765 14.88 9.2326 15.1157 9.57316C15.3515 9.91372 15.2666 10.3809 14.926 10.6167L13.3167 11.7308L16.426 13.8834C16.6291 14.024 16.75 14.2557 16.7491 14.5027C16.7482 14.7498 16.6257 14.9806 16.4216 15.1197L13.3305 17.2273L19.4216 21.3804C19.7638 21.6137 19.8521 22.0803 19.6188 22.4226C19.3854 22.7648 18.9188 22.8531 18.5766 22.6197L11.9991 18.1351L5.4216 22.6197C5.07936 22.8531 4.61277 22.7648 4.37943 22.4226C4.14608 22.0803 4.23436 21.6137 4.57659 21.3804L10.6677 17.2273L7.57659 15.1197C7.37247 14.9806 7.24998 14.7498 7.2491 14.5027C7.24822 14.2557 7.36906 14.024 7.57219 13.8834L10.6815 11.7308L9.07219 10.6167C8.73163 10.3809 8.64668 9.91372 8.88245 9.57316ZM11.9991 12.643L9.32353 14.4953L11.9991 16.3196L14.6747 14.4953L11.9991 12.643Z',
  d17: 'M15.1804 5.31708C14.9301 5.24926 14.6717 5.24966 14.4101 5.25006H9.5902C9.32861 5.24966 9.07023 5.24926 8.81997 5.31708C8.56387 5.38648 8.3461 5.51898 8.13393 5.64807L3.63926 8.37202C3.41168 8.509 3.15453 8.66378 2.9703 8.89136C2.77511 9.13247 2.67348 9.47585 2.60558 9.70544L2.28183 10.7846C2.1628 11.1814 2.38794 11.5995 2.78469 11.7185C3.18143 11.8375 3.59954 11.6124 3.71857 11.2156L4.14036 9.75012H19.86L20.2818 11.2156C20.4008 11.6124 20.8189 11.8375 21.2156 11.7185C21.6124 11.5995 21.8375 11.1814 21.7185 10.7846L21.3948 9.70544C21.3269 9.47585 21.2252 9.13247 21.03 8.89136C20.8458 8.66378 20.5887 8.509 20.3611 8.37202L15.8664 5.64807C15.6542 5.51898 15.4365 5.38648 15.1804 5.31708ZM14.7879 6.76489L17.2655 8.25015H6.73462L9.21219 6.76489H14.7879Z',
  d18: 'M3 11L4 9L9 6H15L20 9L21 11',
  d19: 'M4 9H20',
  d20: 'M9 6L12 2L15 6',
  d21: 'M15.4929 5.65408L12.0023 1L8.51556 5.64904L3.54547 8.60688C3.42216 8.68027 3.3225 8.78701 3.25819 8.91459L2.25 10.9146L3.60263 11.5854L4.40182 10H8.40858L4.46668 21.5H3.00391V23H21.0039V21.5H19.5382L15.5963 10H19.5982L20.3974 11.5854L21.75 10.9146L20.7418 8.91459C20.6775 8.78701 20.5778 8.68027 20.4545 8.60688L15.4929 5.65408ZM13.5023 5.5L12.0023 3.5L10.5023 5.5H13.5023ZM15.5502 7.43744L17.3356 8.5H15.3583L15.5502 7.43744ZM13.8612 8.35115C13.8536 8.40072 13.8472 8.45034 13.8418 8.5H10.1631C10.1577 8.45034 10.1513 8.40072 10.1437 8.35115L10.1403 8.33083L9.90001 7H14.1049L13.8646 8.33083L13.8612 8.35115ZM9.57836 11.2133L8.88872 13.2252L10.6866 11.9806L9.57836 11.2133ZM6.44248 20.3618L8.04526 15.6859L10.6729 17.4775L6.44248 20.3618ZM7.4359 21.5L12.0042 18.3852L16.5725 21.5H7.4359ZM13.3356 17.4775L17.5613 20.3587L15.9603 15.6879L13.3356 17.4775ZM9.32834 14.7453L12.0042 16.5698L14.6801 14.7453L12.0042 12.8928L9.32834 14.7453ZM15.1151 13.222L13.3218 11.9806L14.4272 11.2153L15.1151 13.222ZM12.0042 11.0684L10.461 10H13.5474L12.0042 11.0684ZM8.45426 7.43481L8.64661 8.5H6.66441L8.45426 7.43481Z',
} as const;

export const IconElectricTower01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-tower-01-stroke-rounded IconElectricTower01StrokeRounded"
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
      <path 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconElectricTower01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-tower-01-duotone-rounded IconElectricTower01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d11} 
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
      <path 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconElectricTower01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-tower-01-twotone-rounded IconElectricTower01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d12} 
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
    </TheIconWrapper>
  );
};

export const IconElectricTower01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-tower-01-solid-rounded IconElectricTower01SolidRounded"
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

export const IconElectricTower01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-tower-01-bulk-rounded IconElectricTower01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
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

export const IconElectricTower01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-tower-01-stroke-sharp IconElectricTower01StrokeSharp"
    >
      <path 
        d={d.d1} 
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
        d={d.d3} 
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
        d={d.d5} 
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
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconElectricTower01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="electric-tower-01-solid-sharp IconElectricTower01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfElectricTower01: TheIconSelfPack = {
  name: 'ElectricTower01',
  StrokeRounded: IconElectricTower01StrokeRounded,
  DuotoneRounded: IconElectricTower01DuotoneRounded,
  TwotoneRounded: IconElectricTower01TwotoneRounded,
  SolidRounded: IconElectricTower01SolidRounded,
  BulkRounded: IconElectricTower01BulkRounded,
  StrokeSharp: IconElectricTower01StrokeSharp,
  SolidSharp: IconElectricTower01SolidSharp,
};