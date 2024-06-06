import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.75 5H9.17963C9.84834 5 10.4728 4.6658 10.8437 4.1094L11.6563 2.8906C12.0272 2.3342 12.6517 2 13.3204 2H17.8085C18.6693 2 19.4336 2.55086 19.7058 3.36754L20.25 5M21.75 5H8.75',
  d2: 'M20.25 5L19.6303 14.906C19.6088 15.2333 19.5887 15.5385 19.5685 15.8235M5.25 5L5.85461 14.8966C6.00945 17.3107 6.08688 18.5177 6.72868 19.3857C7.046 19.8149 7.4548 20.1771 7.92905 20.4493C8.8883 21 10.1731 21 12.7427 21H15.25',
  d3: 'M20.75 19C20.75 17.3431 19.4069 16 17.75 16C16.0931 16 14.75 17.3431 14.75 19C14.75 20.6569 16.0931 22 17.75 22C19.4069 22 20.75 20.6569 20.75 19Z',
  d4: 'M19.6303 14.906L20.25 5H5.25L5.85461 14.8966C6.00945 17.3107 6.08688 18.5177 6.72868 19.3857C7.046 19.8149 7.4548 20.1771 7.92905 20.4493C8.8883 21 10.1731 21 12.7427 21H15.25C15.3618 21 15.4456 21 15.5134 20.9994C15.0386 20.4687 14.75 19.7681 14.75 19C14.75 17.3431 16.0931 16 17.75 16C18.4129 16 19.0255 16.215 19.5221 16.579L19.5685 15.8235C19.5887 15.5387 19.6088 15.233 19.6303 14.906Z',
  d5: 'M3.75 5H9.17963C9.84834 5 10.4728 4.6658 10.8437 4.1094L11.6563 2.8906C12.0272 2.3342 12.6517 2 13.3204 2H17.8085C18.6693 2 19.4336 2.55086 19.7058 3.36754L20.25 5',
  d6: 'M21.75 5H8.75',
  d7: 'M4.5 4.25H21L20.4473 13.1351C20.4031 13.8466 20.381 14.2024 20.1906 14.3408C20.0003 14.4792 19.5887 14.3737 18.7656 14.1625C18.3518 14.0564 17.9183 14 17.4717 14C14.5889 14 12.252 16.3505 12.252 19.25C12.252 19.5653 12.2796 19.8741 12.3326 20.1741C12.4774 20.9945 12.5498 21.4047 12.3975 21.5839C12.2451 21.7631 11.8984 21.7585 11.205 21.7493C10.6962 21.7426 10.1878 21.7241 9.68175 21.6781C8.87227 21.6046 8.19375 21.4513 7.58501 21.0998C7.0264 20.7773 6.54147 20.3462 6.16321 19.8316C5.74692 19.2654 5.53954 18.6171 5.41122 17.8445C5.2867 17.0948 5.22696 16.1578 5.15219 14.9852L5.1496 14.9446L5.14946 14.9423L4.5 4.25Z',
  d8: 'M13.3204 3.25C12.986 3.25 12.6738 3.4171 12.4883 3.6953L12.1185 4.25H18.8626L18.7572 3.93377C18.6211 3.52543 18.2389 3.25 17.8085 3.25H13.3204ZM20.9708 4.25L20.6545 3.30132C20.2462 2.07629 19.0998 1.25 17.8085 1.25H13.3204C12.3173 1.25 11.3806 1.7513 10.8242 2.5859L10.0117 3.8047C9.82622 4.0829 9.51399 4.25 9.17963 4.25H3.75C3.19772 4.25 2.75 4.69772 2.75 5.25C2.75 5.80228 3.19772 6.25 3.75 6.25H20.2267C20.2421 6.25036 20.2576 6.25036 20.2731 6.25H21.75C22.3023 6.25 22.75 5.80228 22.75 5.25C22.75 4.69772 22.3023 4.25 21.75 4.25H20.9708Z',
  d9: 'M17.5 21.125C16.4645 21.125 15.625 20.2855 15.625 19.25C15.625 18.2145 16.4645 17.375 17.5 17.375C18.5355 17.375 19.375 18.2145 19.375 19.25C19.375 20.2855 18.5355 21.125 17.5 21.125ZM13.75 19.25C13.75 21.3211 15.4289 23 17.5 23C19.5711 23 21.25 21.3211 21.25 19.25C21.25 17.1789 19.5711 15.5 17.5 15.5C15.4289 15.5 13.75 17.1789 13.75 19.25Z',
  d10: 'M20.4883 19.0042C20.4883 17.3497 19.1989 16.0085 17.6083 16.0085C16.0176 16.0085 14.7283 17.3497 14.7283 19.0042C14.7283 20.6588 16.0176 22 17.6083 22C19.1989 22 20.4883 20.6588 20.4883 19.0042Z',
  d11: 'M19.9482 4.98698L19.3332 16.5844M5.54224 4.98698L6.55883 20.9637C6.56199 21.0164 6.60541 21.0575 6.65791 21.0575H15.4001',
  d12: 'M3.24878 4.98083H9.88006M9.88006 4.98083L12.3199 2.00005L18.8614 2C18.9054 2 18.9443 2.02881 18.9571 2.07095L19.8407 4.98083M9.88006 4.98083H19.8407M19.8326 4.95361L19.8407 4.98083M19.8407 4.98083H22.2512',
  d13: 'M12.7816 1.25H19.25C19.6804 1.25 20.0626 1.52544 20.1987 1.93379L20.9707 4.25H22.75V6.25H2.75V4.25H10.2816L12.7816 1.25ZM12.885 4.25H18.8625L18.5292 3.25H13.7184L12.885 4.25Z',
  d14: 'M17.75 20.875C16.7145 20.875 15.875 20.0355 15.875 19C15.875 17.9645 16.7145 17.125 17.75 17.125C18.7855 17.125 19.625 17.9645 19.625 19C19.625 20.0355 18.7855 20.875 17.75 20.875ZM14 19C14 21.0711 15.6789 22.75 17.75 22.75C19.8211 22.75 21.5 21.0711 21.5 19C21.5 16.9289 19.8211 15.25 17.75 15.25C15.6789 15.25 14 16.9289 14 19Z',
  d15: 'M5.25 4.25C5.04297 4.25 4.84514 4.33558 4.70338 4.48648C4.56162 4.63737 4.48855 4.84015 4.50146 5.04678L5.50146 21.0468C5.52617 21.4421 5.85395 21.75 6.25 21.75H13.277C12.7843 20.9502 12.5 20.0083 12.5 19C12.5 16.1005 14.8505 13.75 17.75 13.75C18.7234 13.75 19.6349 14.0149 20.4164 14.4766L20.9986 5.04621C21.0113 4.83967 20.9382 4.63703 20.7964 4.48627C20.6547 4.3355 20.4569 4.25 20.25 4.25H5.25Z',
};

export const IconWasteStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-stroke-rounded IconWasteStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconWasteDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-duotone-rounded IconWasteDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
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
      />
    </TheIconWrapper>
  );
};

export const IconWasteTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-twotone-rounded IconWasteTwotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWasteSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-solid-rounded IconWasteSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconWasteBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-bulk-rounded IconWasteBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconWasteStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-stroke-sharp IconWasteStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWasteSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-solid-sharp IconWasteSolidSharp"
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
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWaste: TheIconSelfPack = {
  name: 'Waste',
  StrokeRounded: IconWasteStrokeRounded,
  DuotoneRounded: IconWasteDuotoneRounded,
  TwotoneRounded: IconWasteTwotoneRounded,
  SolidRounded: IconWasteSolidRounded,
  BulkRounded: IconWasteBulkRounded,
  StrokeSharp: IconWasteStrokeSharp,
  SolidSharp: IconWasteSolidSharp,
};