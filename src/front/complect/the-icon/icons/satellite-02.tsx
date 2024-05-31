import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.201 7.79899C17.8024 9.40034 20.3987 9.40034 22 7.79899L16.201 2C14.5997 3.60135 14.5997 6.19764 16.201 7.79899Z',
  d2: 'M16 8L14.5 9.5',
  d3: 'M14.8322 13.001C15.4344 12.3988 15.7354 12.0977 15.7354 11.7236C15.7354 11.3494 15.4344 11.0484 14.8322 10.4462L13.5548 9.16879C12.9526 8.56662 12.6515 8.26553 12.2774 8.26553C11.9033 8.26553 11.6022 8.56662 11 9.16879L6.79367 13.3751C5.73544 14.4334 5.73544 16.1491 6.79367 17.2073C7.8519 18.2656 9.56763 18.2656 10.6259 17.2073L14.8322 13.001Z',
  d4: 'M15.4688 16.8563L16.8563 15.4688C17.5104 14.8147 17.8374 14.4877 18.2438 14.4877C18.6502 14.4877 18.9773 14.8147 19.6314 15.4688L21.0189 16.8563C21.673 17.5104 22 17.8374 22 18.2438C22 18.6502 21.673 18.9773 21.0189 19.6314L19.6314 21.0189C18.9773 21.673 18.6502 22 18.2438 22C17.8374 22 17.5104 21.673 16.8563 21.0189L15.4688 19.6314C14.8147 18.9773 14.4877 18.6502 14.4877 18.2438C14.4877 17.8374 14.8147 17.5104 15.4688 16.8563Z',
  d5: 'M2.98112 4.36864L4.36864 2.98112C5.02273 2.32704 5.34977 2 5.75616 2C6.16256 2 6.4896 2.32704 7.14368 2.98112L8.5312 4.36864C9.18528 5.02273 9.51233 5.34977 9.51233 5.75616C9.51233 6.16256 9.18528 6.4896 8.5312 7.14368L7.14368 8.5312C6.4896 9.18528 6.16256 9.51233 5.75616 9.51233C5.34977 9.51233 5.02273 9.18528 4.36864 8.5312L2.98112 7.14368C2.32704 6.4896 2 6.16256 2 5.75616C2 5.34977 2.32704 5.02273 2.98112 4.36864Z',
  d6: 'M16 16L14 14M9.99999 10L8 8',
  d7: 'M16 8L14.5 9.5M22 7.79899C20.3987 9.40034 17.8024 9.40034 16.201 7.79899C14.5997 6.19764 14.5997 3.60135 16.201 2L22 7.79899Z',
  d8: 'M14.8322 13.0011C15.4344 12.3989 15.7354 12.0978 15.7354 11.7237C15.7354 11.3495 15.4344 11.0485 14.8322 10.4463L13.5548 9.16889C12.9526 8.56672 12.6515 8.26562 12.2774 8.26562C11.9033 8.26562 11.6022 8.56672 11 9.16889L6.79367 13.3752C5.73544 14.4335 5.73544 16.1492 6.79367 17.2074C7.8519 18.2657 9.56763 18.2657 10.6259 17.2074L14.8322 13.0011Z',
  d9: 'M16 16L14 14M9.99999 10L8 8M15.4688 16.8563L16.8563 15.4688C17.5104 14.8147 17.8374 14.4877 18.2438 14.4877C18.6502 14.4877 18.9773 14.8147 19.6314 15.4688L21.0189 16.8563C21.673 17.5104 22 17.8374 22 18.2438C22 18.6502 21.673 18.9773 21.0189 19.6314L19.6314 21.0189C18.9773 21.673 18.6502 22 18.2438 22C17.8374 22 17.5104 21.673 16.8563 21.0189L15.4688 19.6314C14.8147 18.9773 14.4877 18.6502 14.4877 18.2438C14.4877 17.8374 14.8147 17.5104 15.4688 16.8563ZM2.98112 4.36864L4.36864 2.98112C5.02273 2.32704 5.34977 2 5.75616 2C6.16256 2 6.4896 2.32704 7.14368 2.98112L8.5312 4.36864C9.18528 5.02273 9.51233 5.34977 9.51233 5.75616C9.51233 6.16256 9.18528 6.4896 8.5312 7.14368L7.14368 8.5312C6.4896 9.18528 6.16256 9.51233 5.75616 9.51233C5.34977 9.51233 5.02273 9.18528 4.36864 8.5312L2.98112 7.14368C2.32704 6.4896 2 6.16256 2 5.75616C2 5.34977 2.32704 5.02273 2.98112 4.36864Z',
  d10: 'M15.6707 1.46967C15.9636 1.17678 16.4384 1.17678 16.7313 1.46967L22.5303 7.26866C22.671 7.40931 22.75 7.60008 22.75 7.79899C22.75 7.9979 22.671 8.18867 22.5303 8.32932C20.6361 10.2236 17.5649 10.2236 15.6707 8.32932C13.7764 6.43508 13.7764 3.36391 15.6707 1.46967Z',
  d11: 'M16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L15.2071 10.2071C14.8166 10.5976 14.1834 10.5976 13.7929 10.2071C13.4024 9.81658 13.4024 9.18342 13.7929 8.79289L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289Z',
  d12: 'M11.2693 7.89322C11.5333 7.69178 11.8604 7.51367 12.2774 7.51367C12.6944 7.51367 13.0215 7.69178 13.2855 7.89322C13.5234 8.07471 13.7799 8.33132 14.0544 8.6059L15.3932 9.94469C15.6678 10.2192 15.9244 10.4757 16.1059 10.7136C16.3073 10.9776 16.4854 11.3047 16.4854 11.7217C16.4854 12.1387 16.3073 12.4658 16.1059 12.7298C15.9244 12.9677 15.6678 13.2242 15.3932 13.4987L15.3932 13.4987L11.1562 17.7358C9.80507 19.0869 7.61446 19.0869 6.26334 17.7358C4.91222 16.3847 4.91222 14.1941 6.26334 12.843L10.5004 8.6059L10.5004 8.60589C10.7749 8.33132 11.0314 8.07471 11.2693 7.89322Z',
  d13: 'M4.70035 1.64901C4.98138 1.43459 5.32305 1.25 5.75616 1.25C6.18928 1.25 6.53094 1.43459 6.81198 1.64901C7.06681 1.84345 7.34269 2.11939 7.64254 2.41932L9.093 3.86978L9.09301 3.86979C9.39294 4.16964 9.66888 4.44551 9.86331 4.70035C10.0777 4.98138 10.2623 5.32305 10.2623 5.75616C10.2623 6.18928 10.0777 6.53094 9.86331 6.81198C9.66888 7.06681 9.39293 7.34269 9.09301 7.64254L7.64255 9.093C7.34269 9.39293 7.06681 9.66888 6.81198 9.86331C6.53094 10.0777 6.18928 10.2623 5.75616 10.2623C5.32305 10.2623 4.98138 10.0777 4.70035 9.86331C4.44552 9.66888 4.16964 9.39294 3.8698 9.09302L3.86978 9.093L2.41932 7.64254C2.11939 7.34269 1.84345 7.06681 1.64901 6.81198C1.43459 6.53094 1.25 6.18928 1.25 5.75616C1.25 5.32305 1.43459 4.98138 1.64901 4.70035C1.84345 4.44552 2.11939 4.16964 2.41931 3.86979L2.41932 3.86978L3.86978 2.41932L3.86978 2.41932C4.16964 2.11939 4.44551 1.84345 4.70035 1.64901Z',
  d14: 'M17.188 14.1367C17.4691 13.9223 17.8107 13.7377 18.2438 13.7377C18.677 13.7377 19.0186 13.9223 19.2996 14.1367C19.5545 14.3311 19.8304 14.6071 20.1302 14.907L21.5807 16.3575C21.8806 16.6573 22.1566 16.9332 22.351 17.188C22.5654 17.4691 22.75 17.8107 22.75 18.2438C22.75 18.677 22.5654 19.0186 22.351 19.2996C22.1566 19.5545 21.8806 19.8303 21.5807 20.1302L21.5807 20.1302L20.1302 21.5807L20.1302 21.5807C19.8303 21.8806 19.5545 22.1566 19.2996 22.351C19.0186 22.5654 18.677 22.75 18.2438 22.75C17.8107 22.75 17.4691 22.5654 17.188 22.351C16.9332 22.1566 16.6573 21.8806 16.3575 21.5807L14.907 20.1302C14.6071 19.8304 14.3311 19.5545 14.1367 19.2996C13.9223 19.0186 13.7377 18.677 13.7377 18.2438C13.7377 17.8107 13.9223 17.4691 14.1367 17.188C14.3311 16.9332 14.6071 16.6573 14.907 16.3575L14.907 16.3575L16.3575 14.907C16.6573 14.6071 16.9332 14.3311 17.188 14.1367Z',
  d15: 'M7.2929 7.29288C7.68343 6.90236 8.3166 6.90237 8.70712 7.2929L10.7071 9.29295C11.0976 9.68348 11.0976 10.3166 10.7071 10.7072C10.3166 11.0977 9.68339 11.0977 9.29287 10.7071L7.29288 8.7071C6.90236 8.31657 6.90237 7.6834 7.2929 7.29288ZM13.2929 13.2928C13.6834 12.9023 14.3166 12.9023 14.7071 13.2929L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L13.2929 14.7071C12.9024 14.3165 12.9024 13.6834 13.2929 13.2928Z',
  d16: 'M7.66016 9.07447L9.07437 7.66026L10.2602 8.84612L8.84599 10.2603L7.66016 9.07447Z',
  d17: 'M13.7389 15.1531L14.9246 16.3389L16.3388 14.9247L15.1531 13.7389L13.7389 15.1531Z',
  d18: 'M15.4304 9.98291L16.4503 8.96304C16.1742 8.78268 15.9126 8.5713 15.6702 8.3289C15.4278 8.08651 15.2164 7.82484 15.036 7.54883L14.0162 8.5687C14.0287 8.58124 14.0413 8.59383 14.0539 8.60646L15.3927 9.94526C15.4053 9.95785 15.4179 9.9704 15.4304 9.98291Z',
  d19: 'M16 11.8323L12.168 8L6.79367 13.3743C5.73544 14.4325 5.73544 16.1482 6.79367 17.2065C7.8519 18.2647 9.56763 18.2647 10.6259 17.2065L16 11.8323Z',
  d20: 'M2 6L6 2L10 6L6 10L2 6Z',
  d21: 'M14 18L18 14L22 18L18 22L14 18Z',
  d22: 'M16.201 1.25C16.3999 1.25 16.5907 1.32902 16.7313 1.46967L22.5303 7.26866C22.8232 7.56155 22.8232 8.03643 22.5303 8.32932C20.6361 10.2236 17.5649 10.2236 15.6707 8.32932C13.7764 6.43508 13.7764 3.36391 15.6707 1.46967C15.8113 1.32902 16.0021 1.25 16.201 1.25Z',
  d23: 'M12.168 7.25C12.3669 7.25 12.5577 7.32903 12.6983 7.46969L16.5304 11.302C16.8232 11.5949 16.8232 12.0698 16.5303 12.3626L11.1562 17.7368C9.80507 19.0879 7.61446 19.0879 6.26334 17.7368C4.91222 16.3857 4.91222 14.1951 6.26334 12.8439L11.6377 7.46967C11.7783 7.32901 11.9691 7.25 12.168 7.25Z',
  d24: 'M5.46967 1.46967C5.76256 1.17678 6.23744 1.17678 6.53033 1.46967L10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303L1.46967 6.53033C1.17678 6.23744 1.17678 5.76256 1.46967 5.46967L5.46967 1.46967Z',
  d25: 'M17.4697 13.4697C17.7626 13.1768 18.2374 13.1768 18.5303 13.4697L22.5303 17.4697C22.8232 17.7626 22.8232 18.2374 22.5303 18.5303L18.5303 22.5303C18.2374 22.8232 17.7626 22.8232 17.4697 22.5303L13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L17.4697 13.4697Z',
  d26: 'M7.2929 7.29288C7.68343 6.90236 8.3166 6.90237 8.70712 7.2929L10.7071 9.29295C11.0976 9.68348 11.0976 10.3166 10.7071 10.7072C10.3166 11.0977 9.68339 11.0977 9.29287 10.7071L7.29288 8.7071C6.90236 8.31657 6.90237 7.6834 7.2929 7.29288ZM16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L15.2071 10.2071C14.8166 10.5976 14.1834 10.5976 13.7929 10.2071C13.4024 9.81658 13.4024 9.18342 13.7929 8.79289L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289ZM13.2929 13.2928C13.6834 12.9023 14.3166 12.9023 14.7071 13.2929L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L13.2929 14.7071C12.9024 14.3165 12.9024 13.6834 13.2929 13.2928Z',
} as const;

export const IconSatellite02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-02-stroke-rounded IconSatellite02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSatellite02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-02-duotone-rounded IconSatellite02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
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
    </TheIconWrapper>
  );
};

export const IconSatellite02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-02-twotone-rounded IconSatellite02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSatellite02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-02-solid-rounded IconSatellite02SolidRounded"
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSatellite02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-02-bulk-rounded IconSatellite02BulkRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSatellite02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-02-stroke-sharp IconSatellite02StrokeSharp"
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
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
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
    </TheIconWrapper>
  );
};

export const IconSatellite02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-02-solid-sharp IconSatellite02SolidSharp"
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
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSatellite02: TheIconSelfPack = {
  name: 'Satellite02',
  StrokeRounded: IconSatellite02StrokeRounded,
  DuotoneRounded: IconSatellite02DuotoneRounded,
  TwotoneRounded: IconSatellite02TwotoneRounded,
  SolidRounded: IconSatellite02SolidRounded,
  BulkRounded: IconSatellite02BulkRounded,
  StrokeSharp: IconSatellite02StrokeSharp,
  SolidSharp: IconSatellite02SolidSharp,
};