import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12.4C2 9.38301 2 7.87452 2.94627 6.93726C3.89254 6 5.41554 6 8.46154 6H9.53846C12.5845 6 14.1075 6 15.0537 6.93726C16 7.87452 16 9.38301 16 12.4V15.6C16 18.617 16 20.1255 15.0537 21.0627C14.1075 22 12.5845 22 9.53846 22H8.46154C5.41554 22 3.89254 22 2.94627 21.0627C2 20.1255 2 18.617 2 15.6V12.4Z',
  d2: 'M15.5376 16H16.4608C19.072 16 20.3776 16 21.1888 15.1799C22 14.3598 22 13.0399 22 10.4V7.6C22 4.96013 22 3.6402 21.1888 2.8201C20.3776 2 19.072 2 16.4608 2H15.5376C12.9264 2 11.6208 2 10.8096 2.8201C10.1002 3.53726 10.0112 4.63664 10 6.66667',
  d3: 'M6 12H9M6 17H11',
  d4: 'M10.5 3L14.5 6.5',
  d5: 'M15.9897 16H16.4607C19.0719 16 20.3775 16 21.1887 15.1799C21.9999 14.3598 21.9999 13.0399 21.9999 10.4V7.6C21.9999 4.96013 21.9999 3.6402 21.1887 2.8201C20.3775 2 19.0719 2 16.4607 2H15.5375C12.9263 2 11.6207 2 10.8095 2.8201C10.1001 3.53726 10.066 3.9205 10.0548 5.95053M10.6074 3.05718L14.7678 6.71422',
  d6: 'M16.2812 1.25C17.5268 1.24996 18.5627 1.24993 19.3845 1.36163C20.2516 1.47949 21.0278 1.73812 21.6498 2.36687C22.2702 2.9941 22.524 3.77443 22.6399 4.64582C22.7501 5.47443 22.75 6.51982 22.75 7.78076V10.7193C22.75 11.9802 22.7501 13.0256 22.6399 13.8542C22.524 14.7256 22.2702 15.5059 21.6498 16.1331C21.0278 16.7619 20.2516 17.0205 19.3845 17.1384C18.5627 17.2501 17.5268 17.25 16.2812 17.25L15.2876 17.25C14.7353 17.25 14.2876 16.8023 14.2876 16.25C14.2876 15.6977 14.7353 15.25 15.2876 15.25H16.2108C17.545 15.25 18.4439 15.2478 19.1151 15.1566C19.7564 15.0694 20.0386 14.918 20.2278 14.7267C20.4186 14.5338 20.5704 14.2441 20.6573 13.5905C20.7479 12.9093 20.75 11.9979 20.75 10.65V7.85C20.75 6.5021 20.7479 5.59069 20.6573 4.90947C20.5704 4.2559 20.4186 3.96621 20.2278 3.77334C20.0386 3.58198 19.7564 3.43057 19.1151 3.34341C18.4439 3.25217 17.545 3.25 16.2108 3.25H15.2876C13.9534 3.25 13.0545 3.25217 12.3833 3.34341C12.2051 3.36763 12.1496 3.58343 12.285 3.70185L14.9085 5.99743C15.263 6.30758 15.3458 6.81271 15.1369 7.21248C15.0964 7.2899 15.0762 7.32861 15.0131 7.3711C14.9501 7.41358 14.8886 7.41953 14.7656 7.43142L9.74449 7.91666C9.19222 7.91361 8.74697 7.46344 8.75002 6.91116C8.75496 6.01395 8.77445 5.23439 8.86797 4.57713C8.96274 3.91111 9.14328 3.29001 9.52575 2.75108C9.62278 2.61437 9.73032 2.48648 9.84864 2.36687C10.4706 1.73812 11.2468 1.47949 12.1139 1.36163C12.9357 1.24993 13.9716 1.24996 15.2172 1.25H16.2812Z',
  d7: 'M9.59334 5.25H9.59333H9.59332H8.40669H8.40667H8.40666C6.93025 5.24998 5.74683 5.24997 4.81751 5.37372C3.85586 5.50178 3.05447 5.77447 2.41849 6.4044C1.78151 7.03531 1.50485 7.83196 1.3751 8.78785C1.24997 9.70973 1.24998 10.8831 1.25 12.3443V12.3443V12.3443V15.6557V15.6557V15.6557C1.24998 17.1169 1.24997 18.2903 1.3751 19.2122C1.50485 20.168 1.78151 20.9647 2.41849 21.5956C3.05447 22.2255 3.85586 22.4982 4.81751 22.6263C5.74682 22.75 6.93025 22.75 8.40666 22.75H9.59335C11.0698 22.75 12.2532 22.75 13.1825 22.6263C14.1441 22.4982 14.9455 22.2255 15.5815 21.5956C16.2185 20.9647 16.4952 20.168 16.6249 19.2122C16.75 18.2903 16.75 17.1169 16.75 15.6557V12.3443C16.75 10.8831 16.75 9.70973 16.6249 8.78785C16.4952 7.83196 16.2185 7.03531 15.5815 6.4044C14.9455 5.77447 14.1441 5.50178 13.1825 5.37372C12.2532 5.24997 11.0698 5.24998 9.59334 5.25ZM6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H9C9.55229 13 10 12.5523 10 12C10 11.4477 9.55229 11 9 11H6ZM6 16C5.44772 16 5 16.4477 5 17C5 17.5523 5.44772 18 6 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H6Z',
  d8: 'M9.59333 5.25C11.0697 5.24998 12.2532 5.24997 13.1825 5.37372C14.1441 5.50178 14.9455 5.77447 15.5815 6.4044C16.2185 7.03531 16.4952 7.83196 16.6249 8.78785C16.75 9.70973 16.75 10.8831 16.75 12.3443V15.6557C16.75 17.1169 16.75 18.2903 16.6249 19.2122C16.4952 20.168 16.2185 20.9647 15.5815 21.5956C14.9455 22.2255 14.1441 22.4982 13.1825 22.6263C12.2532 22.75 11.0698 22.75 9.59334 22.75H8.40666C6.93025 22.75 5.74682 22.75 4.81751 22.6263C3.85586 22.4982 3.05447 22.2255 2.41848 21.5956C1.78151 20.9647 1.50485 20.168 1.3751 19.2122C1.24996 18.2903 1.24998 17.1169 1.25 15.6557V15.6557V12.3443V12.3443C1.24998 10.8831 1.24996 9.70973 1.3751 8.78785C1.50485 7.83196 1.78151 7.03531 2.41848 6.4044C3.05447 5.77447 3.85586 5.50178 4.81751 5.37372C5.74683 5.24997 6.93026 5.24998 8.40667 5.25H8.40669H9.59332H9.59333Z',
  d9: 'M5 12C5 11.4477 5.44772 11 6 11H9C9.55228 11 10 11.4477 10 12C10 12.5523 9.55228 13 9 13H6C5.44772 13 5 12.5523 5 12ZM5 17C5 16.4477 5.44772 16 6 16H11C11.5523 16 12 16.4477 12 17C12 17.5523 11.5523 18 11 18H6C5.44772 18 5 17.5523 5 17Z',
  d10: 'M19.3827 1.36163C18.5609 1.24993 17.525 1.24996 16.2794 1.25H15.2154C13.9698 1.24996 12.9339 1.24993 12.1121 1.36163C11.245 1.47949 10.4688 1.73812 9.84684 2.36687C9.72853 2.48648 9.62098 2.61437 9.52396 2.75108C9.14148 3.29001 8.96095 3.91111 8.86618 4.57713C8.83606 4.78879 8.81362 5.01313 8.79688 5.25H9.59152C11.0679 5.24998 12.2514 5.24997 13.1807 5.37372C13.7136 5.44468 14.1972 5.56004 14.6308 5.75599L12.2832 3.70185C12.1479 3.58343 12.2033 3.36763 12.3815 3.34341C13.0527 3.25217 13.9516 3.25 15.2858 3.25H16.209C17.5432 3.25 18.4421 3.25217 19.1133 3.34341C19.7546 3.43057 20.0368 3.58198 20.2261 3.77334C20.4168 3.96621 20.5686 4.2559 20.6555 4.90947C20.7461 5.59069 20.7482 6.5021 20.7482 7.85V10.65C20.7482 11.9979 20.7461 12.9093 20.6555 13.5905C20.5686 14.2441 20.4168 14.5338 20.2261 14.7267C20.0368 14.918 19.7546 15.0694 19.1133 15.1566C18.5368 15.235 17.7923 15.2476 16.7482 15.2496V15.6557C16.7482 16.2309 16.7482 16.7616 16.7406 17.2498C17.7829 17.2483 18.6645 17.236 19.3827 17.1384C20.2498 17.0205 21.026 16.7619 21.648 16.1331C22.2684 15.5059 22.5222 14.7256 22.6381 13.8542C22.7483 13.0256 22.7482 11.9802 22.7482 10.7193V7.78076C22.7482 6.51982 22.7483 5.47443 22.6381 4.64582C22.5222 3.77443 22.2684 2.9941 21.648 2.36687C21.026 1.73812 20.2498 1.47949 19.3827 1.36163Z',
  d11: 'M16 22V6H2.00014L2 22H16Z',
  d12: 'M10.0001 6L10.0001 2H22V16H16',
  d13: 'M6 12H10M6 17H12',
  d14: 'M10 2L16 6',
  d15: 'M10.2143 1.25C9.68179 1.25 9.25006 1.68372 9.25006 2.21874L9.25001 5.25H2.00014C1.58592 5.25 1.25014 5.58578 1.25014 5.99999L1.25 22C1.25 22.1989 1.32902 22.3897 1.46967 22.5303C1.61032 22.671 1.80109 22.75 2 22.75H16C16.4142 22.75 16.75 22.4142 16.75 22V16.75H21.7857C22.3183 16.75 22.75 16.3163 22.75 15.7812V2.21875C22.75 1.68372 22.3183 1.25 21.7857 1.25H10.2143ZM20.8209 14.8125H16.7495V6C16.7495 5.73538 16.6125 5.50277 16.4055 5.36927L13.1328 3.1875H20.8209V14.8125ZM6 12.75H10V11.25H6V12.75ZM6 17.75H12V16.25H6V17.75Z',
} as const;

export const IconCatalogueStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="catalogue-stroke-rounded IconCatalogueStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCatalogueDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="catalogue-duotone-rounded IconCatalogueDuotoneRounded"
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
        strokeLinejoin="round" 
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCatalogueTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="catalogue-twotone-rounded IconCatalogueTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCatalogueSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="catalogue-solid-rounded IconCatalogueSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCatalogueBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="catalogue-bulk-rounded IconCatalogueBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCatalogueStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="catalogue-stroke-sharp IconCatalogueStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCatalogueSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="catalogue-solid-sharp IconCatalogueSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCatalogue: TheIconSelfPack = {
  name: 'Catalogue',
  StrokeRounded: IconCatalogueStrokeRounded,
  DuotoneRounded: IconCatalogueDuotoneRounded,
  TwotoneRounded: IconCatalogueTwotoneRounded,
  SolidRounded: IconCatalogueSolidRounded,
  BulkRounded: IconCatalogueBulkRounded,
  StrokeSharp: IconCatalogueStrokeSharp,
  SolidSharp: IconCatalogueSolidSharp,
};