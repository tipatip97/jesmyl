import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 16C9.83563 16.6278 10.8744 16.9998 12 16.9998C13.1256 16.9998 14.1644 16.6278 15 16',
  d2: 'M11.5 9.5C9 8 6 7.99999 4 8C4 8 4 13 7 13C9.5 13 11.5 9.5 11.5 9.5Z',
  d3: 'M12.5 9.5C15 8 18 7.99999 20 8C20 8 20 13 17 13C14.5 13 12.5 9.5 12.5 9.5Z',
  d4: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.5 9.5C9 8 6 7.99999 4 8C4 8 4 13 7 13C9.5 13 11.5 9.5 11.5 9.5ZM20 8C18 7.99999 15 8 12.5 9.5C12.5 9.5 14.5 13 17 13C20 13 20 8 20 8Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.40042 15.5495C8.64922 15.2184 9.11938 15.1516 9.45054 15.4004C10.1607 15.934 11.0424 16.2499 12 16.2499C12.9577 16.2499 13.8393 15.934 14.5495 15.4004C14.8807 15.1516 15.3509 15.2184 15.5997 15.5495C15.8485 15.8807 15.7817 16.3509 15.4505 16.5997C14.4895 17.3217 13.2937 17.7499 12 17.7499C10.7064 17.7499 9.5106 17.3217 8.54954 16.5997C8.21838 16.3509 8.15161 15.8807 8.40042 15.5495ZM4 7.25C5.97667 7.24984 9.32118 7.33352 12 8.94081C14.6788 7.33352 18.0233 7.24984 20 7.25C20.4142 7.25 20.75 7.58579 20.75 8.00001L20.7495 8.01179L20.7495 8.01211C20.7426 8.17211 20.7238 8.61178 20.6994 8.85588C20.6497 9.35333 20.5492 10.0293 20.3434 10.7155C20.1399 11.3939 19.8175 12.1364 19.2918 12.7205C18.7469 13.326 17.9897 13.75 17 13.75C15.4169 13.75 14.1014 12.6633 13.2629 11.7603C12.8256 11.2894 12.4751 10.8216 12.2344 10.473C12.1395 10.3356 12.0609 10.2155 12 10.1197C11.9391 10.2155 11.8605 10.3356 11.7656 10.473C11.5249 10.8216 11.1744 11.2894 10.7371 11.7603C9.89865 12.6633 8.58305 13.75 7 13.75C6.01035 13.75 5.25311 13.326 4.70815 12.7205C4.18253 12.1364 3.86015 11.3939 3.65663 10.7155C3.45076 10.0293 3.35034 9.35333 3.3006 8.85588C3.27617 8.61165 3.25734 8.17164 3.25051 8.01185L3.25 8C3.25 7.58579 3.58578 7.25 4 7.25ZM4.79883 8.75342C4.84425 9.18694 4.93106 9.74052 5.09426 10.2845C5.26574 10.8561 5.50586 11.3636 5.82398 11.717C6.12278 12.049 6.49054 12.25 7.00089 12.25C7.91784 12.25 8.85224 11.5867 9.63879 10.7397C9.9543 10.3999 10.2207 10.0578 10.4238 9.77464C8.57625 8.90367 6.50545 8.77293 4.79883 8.75342ZM13.5779 9.77464C13.781 10.0578 14.0475 10.3999 14.363 10.7397C15.1495 11.5867 16.0839 12.25 17.0009 12.25C17.5112 12.25 17.879 12.049 18.1778 11.717C18.4959 11.3636 18.736 10.8561 18.9075 10.2845C19.0707 9.74052 19.1575 9.18694 19.2029 8.75342C17.4963 8.77293 15.4255 8.90367 13.5779 9.77464Z',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d7: 'M8.40042 15.5495C8.64922 15.2184 9.11938 15.1516 9.45054 15.4004C10.1607 15.934 11.0424 16.2499 12 16.2499C12.9577 16.2499 13.8393 15.934 14.5495 15.4004C14.8807 15.1516 15.3509 15.2184 15.5997 15.5495C15.8485 15.8807 15.7817 16.3509 15.4505 16.5997C14.4895 17.3217 13.2937 17.7499 12 17.7499C10.7064 17.7499 9.5106 17.3217 8.54954 16.5997C8.21838 16.3509 8.15161 15.8807 8.40042 15.5495Z',
  d8: 'M12 8.94081C9.32118 7.33352 5.97667 7.24984 4 7.25C3.58578 7.25 3.25 7.58579 3.25 8L3.25051 8.01185C3.25735 8.17164 3.27617 8.61165 3.3006 8.85588C3.35034 9.35333 3.45076 10.0293 3.65663 10.7155C3.86015 11.3939 4.18253 12.1364 4.70815 12.7205C5.25311 13.326 6.01035 13.75 7 13.75C8.58305 13.75 9.89865 12.6633 10.7371 11.7603C11.1744 11.2894 11.5249 10.8216 11.7656 10.473C11.8605 10.3356 11.9391 10.2155 12 10.1197C12.0609 10.2155 12.1395 10.3356 12.2344 10.473C12.4751 10.8216 12.8256 11.2894 13.2629 11.7603C14.1014 12.6633 15.4169 13.75 17 13.75C17.9897 13.75 18.7469 13.326 19.2918 12.7205C19.8175 12.1364 20.1399 11.3939 20.3434 10.7155C20.5492 10.0293 20.6497 9.35333 20.6994 8.85588C20.7238 8.61162 20.7427 8.17153 20.7495 8.01179L20.75 8.00001C20.75 7.58579 20.4142 7.25 20 7.25C18.0233 7.24984 14.6788 7.33352 12 8.94081ZM5.09426 10.2845C4.93106 9.74052 4.84425 9.18694 4.79883 8.75342C6.50545 8.77293 8.57625 8.90367 10.4238 9.77464C10.2207 10.0578 9.9543 10.3999 9.63879 10.7397C8.85224 11.5867 7.91784 12.25 7.00089 12.25C6.49054 12.25 6.12278 12.049 5.82398 11.717C5.50586 11.3636 5.26574 10.8561 5.09426 10.2845ZM14.363 10.7397C14.0475 10.3999 13.781 10.0578 13.5779 9.77464C15.4255 8.90367 17.4963 8.77293 19.2029 8.75342C19.1575 9.18694 19.0707 9.74052 18.9075 10.2845C18.736 10.8561 18.4959 11.3636 18.1778 11.717C17.879 12.049 17.5112 12.25 17.0009 12.25C16.0839 12.25 15.1495 11.5867 14.363 10.7397Z',
  d9: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM9.44983 15.4004C10.16 15.934 11.0417 16.2499 11.9993 16.2499C12.9569 16.2499 13.8386 15.934 14.5488 15.4004L15.4498 16.5996C14.4888 17.3217 13.293 17.7499 11.9993 17.7499C10.7057 17.7499 9.50988 17.3217 8.54883 16.5996L9.44983 15.4004ZM5.09337 10.2845C4.93017 9.74051 4.84337 9.18693 4.79794 8.75341C6.50457 8.77293 8.57536 8.90366 10.423 9.77463C10.2198 10.0578 9.95341 10.3999 9.63791 10.7397C8.85135 11.5867 7.91695 12.25 7 12.25C6.48965 12.25 6.12189 12.049 5.8231 11.717C5.50497 11.3636 5.26485 10.8561 5.09337 10.2845ZM11.8859 8.85689C11.9272 8.88168 11.9653 8.90985 12 8.94082C12.0347 8.90985 12.0728 8.88168 12.1141 8.85689C14.7929 7.2496 17.9679 7.24985 19.9446 7.25L20 7.25001C20.4142 7.25001 20.75 7.58579 20.75 8.00001H20C20.75 8.00001 20.75 8.00112 20.75 8.00112L20.75 8.0072L20.7499 8.02161L20.7491 8.07116C20.7483 8.11309 20.7466 8.17252 20.7435 8.24696C20.7371 8.39567 20.7245 8.60533 20.6994 8.85588C20.6497 9.35333 20.5492 10.0293 20.3434 10.7155C20.1399 11.3939 19.8175 12.1364 19.2918 12.7205C18.7469 13.326 17.9897 13.75 17 13.75C15.4169 13.75 14.1014 12.6633 13.2629 11.7603C12.8256 11.2894 12.4751 10.8216 12.2344 10.473C12.1395 10.3356 12.0609 10.2155 12 10.1197C11.9391 10.2155 11.8605 10.3356 11.7656 10.473C11.5249 10.8216 11.1744 11.2894 10.7371 11.7603C9.89865 12.6633 8.58305 13.75 7 13.75C6.01035 13.75 5.25311 13.326 4.70815 12.7205C4.18253 12.1364 3.86015 11.3939 3.65663 10.7155C3.45076 10.0293 3.35034 9.35333 3.3006 8.85588C3.27554 8.60533 3.26292 8.39567 3.25655 8.24696C3.25336 8.17252 3.25172 8.11309 3.25088 8.07116L3.25013 8.02161L3.25002 8.0072L3.25 8.00269L3.25 8.00001C3.25 7.58579 3.58578 7.25001 4 7.25001L4.05544 7.25C6.03212 7.24985 9.20705 7.2496 11.8859 8.85689ZM14.3621 10.7397C14.0466 10.3999 13.7802 10.0578 13.5771 9.77463C15.4246 8.90366 17.4954 8.77293 19.2021 8.75341C19.1566 9.18693 19.0698 9.74051 18.9066 10.2845C18.7351 10.8561 18.495 11.3636 18.1769 11.717C17.8781 12.049 17.5103 12.25 17 12.25C16.0831 12.25 15.1486 11.5867 14.3621 10.7397Z',
} as const;

export const IconSunglassesStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sunglasses-stroke-rounded IconSunglassesStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSunglassesDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sunglasses-duotone-rounded IconSunglassesDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSunglassesTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sunglasses-twotone-rounded IconSunglassesTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconSunglassesSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sunglasses-solid-rounded IconSunglassesSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunglassesBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sunglasses-bulk-rounded IconSunglassesBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSunglassesStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sunglasses-stroke-sharp IconSunglassesStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunglassesSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sunglasses-solid-sharp IconSunglassesSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunglasses: TheIconSelfPack = {
  name: 'Sunglasses',
  StrokeRounded: IconSunglassesStrokeRounded,
  DuotoneRounded: IconSunglassesDuotoneRounded,
  TwotoneRounded: IconSunglassesTwotoneRounded,
  SolidRounded: IconSunglassesSolidRounded,
  BulkRounded: IconSunglassesBulkRounded,
  StrokeSharp: IconSunglassesStrokeSharp,
  SolidSharp: IconSunglassesSolidSharp,
};