import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.5 20H6.45416C5.09333 20 4.41291 20 3.91897 19.6827C3.67759 19.5276 3.4724 19.3224 3.31733 19.081C3 18.5871 3 17.9067 3 16.5458C3 16.1093 3 15.891 2.95448 15.6813C2.93177 15.5767 2.9007 15.4741 2.86157 15.3744C2.78313 15.1747 2.66204 14.9931 2.41987 14.6298L2 14H7.5C8.43188 14 8.89782 14 9.26537 14.1522C9.75542 14.3552 10.1448 14.7446 10.3478 15.2346C10.5 15.6022 10.5 16.0681 10.5 17C10.5 17.9319 10.5 18.3978 10.3478 18.7654C10.1448 19.2554 9.75542 19.6448 9.26537 19.8478C8.89782 20 8.43188 20 7.5 20Z',
  d2: 'M16.5 20H17.5458C18.9067 20 19.5871 20 20.081 19.6827C20.3224 19.5276 20.5276 19.3224 20.6827 19.081C21 18.5871 21 17.9067 21 16.5458C21 16.1093 21 15.891 21.0455 15.6813C21.0682 15.5767 21.0993 15.4741 21.1384 15.3744C21.2169 15.1747 21.338 14.9931 21.5801 14.6298L22 14H16.5C15.5681 14 15.1022 14 14.7346 14.1522C14.2446 14.3552 13.8552 14.7446 13.6522 15.2346C13.5 15.6022 13.5 16.0681 13.5 17C13.5 17.9319 13.5 18.3978 13.6522 18.7654C13.8552 19.2554 14.2446 19.6448 14.7346 19.8478C15.1022 20 15.5681 20 16.5 20Z',
  d3: 'M22 14L18.5259 5.46423C18.2366 4.75344 18.092 4.39804 17.8922 4.22854C17.597 3.97809 17.2005 3.92952 16.8629 4.10248C16.6345 4.21953 16.423 4.53131 16 5.15486',
  d4: 'M2 14L5.47409 5.46423C5.76338 4.75344 5.90803 4.39804 6.1078 4.22854C6.40296 3.97809 6.79947 3.92952 7.13705 4.10248C7.36553 4.21953 7.57702 4.53131 8 5.15486',
  d5: 'M10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16',
  d6: 'M5.71107 3.59116C6.30602 3.08634 7.13643 2.97546 7.84329 3.33761C8.15646 3.49805 8.37589 3.74762 8.53144 3.94511C8.68807 4.14397 8.86374 4.40297 9.05918 4.69112L9.07783 4.71862C9.38787 5.17567 9.26869 5.79752 8.81163 6.10755C8.35458 6.41759 7.73274 6.29841 7.4227 5.84136C7.21314 5.53242 7.08037 5.33768 6.97575 5.20246L6.97305 5.20796C6.89441 5.36873 6.80074 5.59738 6.65058 5.96633L3.17649 14.5021C2.96829 15.0136 2.38483 15.2595 1.87329 15.0513C1.36175 14.8431 1.11584 14.2597 1.32404 13.7481L4.81034 5.18237C4.94449 4.85272 5.06397 4.55914 5.1765 4.32909C5.28841 4.10034 5.44812 3.81428 5.71107 3.59116ZM17.0246 5.20246L17.0273 5.20796C17.106 5.36873 17.1996 5.59738 17.3498 5.96633L20.8239 14.5021C21.0321 15.0136 21.6155 15.2595 22.1271 15.0513C22.6386 14.8431 22.8845 14.2597 22.6763 13.7481L19.19 5.18237L19.19 5.18226C19.0558 4.85265 18.9364 4.55911 18.8239 4.32909C18.712 4.10034 18.5522 3.81428 18.2893 3.59116C17.6943 3.08634 16.8639 2.97546 16.1571 3.33761C15.8439 3.49805 15.6245 3.74762 15.4689 3.94511C15.3123 4.14396 15.1366 4.40294 14.9412 4.69108L14.9412 4.69109L14.9412 4.6911L14.9225 4.71862C14.6125 5.17567 14.7317 5.79752 15.1887 6.10755C15.6458 6.41759 16.2676 6.29841 16.5777 5.84136C16.7872 5.53242 16.92 5.33768 17.0246 5.20246ZM11.25 16.1251C11.25 15.7109 11.5858 15.3751 12 15.3751C12.4142 15.3751 12.75 15.7109 12.75 16.1251H14.25C14.25 14.8825 13.2426 13.8751 12 13.8751C10.7574 13.8751 9.75 14.8825 9.75 16.1251H11.25Z',
  d7: 'M8.64537 13.3958C8.96247 13.4174 9.26199 13.464 9.55238 13.5843C10.2262 13.8634 10.7616 14.3988 11.0407 15.0726C11.161 15.363 11.2076 15.6625 11.2292 15.9796C11.25 16.2842 11.25 16.6553 11.25 17.0997V17.1503C11.25 17.5947 11.25 17.9658 11.2292 18.2704C11.2076 18.5875 11.161 18.887 11.0407 19.1774C10.7616 19.8512 10.2262 20.3866 9.55238 20.6657C9.26199 20.786 8.96247 20.8326 8.64537 20.8542C8.34075 20.875 7.96972 20.875 7.52526 20.875L6.41703 20.875H6.41702C5.76822 20.875 5.22681 20.875 4.78783 20.8317C4.3286 20.7864 3.90161 20.688 3.51359 20.4387C3.18169 20.2254 2.89956 19.9433 2.68633 19.6114C2.43705 19.2234 2.33861 18.7964 2.29329 18.3372C2.24997 17.8982 2.24999 17.3568 2.25 16.708V16.708L2.25 16.6708C2.25 16.2028 2.24608 16.0784 2.22155 15.9654C2.20736 15.9 2.18794 15.8359 2.16348 15.7736C2.12122 15.666 2.05544 15.5602 1.79584 15.1708L1.37596 14.541C1.22254 14.3109 1.20823 14.015 1.33875 13.7711C1.46926 13.5272 1.7234 13.375 2 13.375H7.52525H7.52526C7.96972 13.375 8.34076 13.375 8.64537 13.3958Z',
  d8: 'M22 13.375C22.2766 13.375 22.5307 13.5272 22.6613 13.7711C22.7918 14.015 22.7775 14.3109 22.624 14.541L22.2042 15.1708C21.9446 15.5602 21.8788 15.666 21.8365 15.7736C21.8121 15.8359 21.7926 15.9 21.7785 15.9654C21.7539 16.0784 21.75 16.2028 21.75 16.6708V16.708C21.75 17.3568 21.75 17.8982 21.7067 18.3372C21.6614 18.7964 21.563 19.2234 21.3137 19.6114C21.1004 19.9433 20.8183 20.2254 20.4864 20.4387C20.0984 20.688 19.6714 20.7864 19.2122 20.8317C18.7732 20.875 18.2318 20.875 17.583 20.875H17.583L16.4747 20.875C16.0303 20.875 15.6592 20.875 15.3546 20.8542C15.0375 20.8326 14.738 20.786 14.4476 20.6657C13.7738 20.3866 13.2384 19.8512 12.9593 19.1774C12.839 18.887 12.7924 18.5875 12.7708 18.2704C12.75 17.9658 12.75 17.5947 12.75 17.1503V17.1503V17.0997V17.0997C12.75 16.6553 12.75 16.2842 12.7708 15.9796C12.7924 15.6625 12.839 15.363 12.9593 15.0726C13.2384 14.3988 13.7738 13.8634 14.4476 13.5843C14.738 13.464 15.0375 13.4174 15.3546 13.3958C15.6592 13.375 16.0303 13.375 16.4747 13.375H16.4747H22Z',
  d9: 'M22 13.9918L17.5 4L16 5.49879',
  d10: 'M2 13.9918L6.5 4L8 5.49879',
  d11: 'M10.5 15.4907H13.5',
  d12: 'M10.5054 13.9741H2.03345C2.02601 13.9741 2.02117 13.982 2.02452 13.9886L3.03349 15.9939L2.9576 19.9867C2.9575 19.9923 2.96201 19.9969 2.9676 19.9969H10.5054C10.5109 19.9969 10.5154 19.9924 10.5154 19.9869V13.9841C10.5154 13.9786 10.5109 13.9741 10.5054 13.9741Z',
  d13: 'M13.5178 13.9741H21.9898C21.9972 13.9741 22.002 13.982 21.9987 13.9886L20.9897 15.9939L21.0656 19.9867C21.0657 19.9923 21.0612 19.9969 21.0556 19.9969H13.5178C13.5123 19.9969 13.5078 19.9924 13.5078 19.9869V13.9841C13.5078 13.9786 13.5123 13.9741 13.5178 13.9741Z',
  d14: 'M18.2518 3.83965C18.117 3.53995 17.8435 3.32565 17.5202 3.2664C17.1969 3.20715 16.8652 3.31052 16.6328 3.54291L15.1328 5.04291L16.547 6.45712L17.0225 5.9816L20.2934 13.25H13.5C13.0858 13.25 12.75 13.5858 12.75 14V20C12.75 20.4142 13.0858 20.75 13.5 20.75H21C21.4142 20.75 21.75 20.4142 21.75 20V16.1771L22.6708 14.3354C22.7474 14.1823 22.7681 14.0103 22.7343 13.8475L22.7518 13.8396L18.2518 3.83965Z',
  d15: 'M7.36903 3.54291C7.13664 3.31052 6.8049 3.20715 6.48164 3.2664C6.15838 3.32565 5.88487 3.53995 5.75 3.83965L1.32405 13.675C1.31853 13.6865 1.31332 13.6981 1.30842 13.7098L1.25 13.8396L1.26582 13.8467C1.23181 14.0097 1.2525 14.1821 1.32918 14.3354L2.25 16.1771V20C2.25 20.4142 2.58579 20.75 3 20.75H10.5C10.9142 20.75 11.25 20.4142 11.25 20V14C11.25 13.5858 10.9142 13.25 10.5 13.25H3.70849L6.97929 5.9816L7.45481 6.45712L8.86903 5.04291L7.36903 3.54291Z',
  d16: 'M13.5 16.75H10.5V14.75H13.5V16.75Z',
} as const;

export const IconGlassesStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="glasses-stroke-rounded IconGlassesStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconGlassesDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="glasses-duotone-rounded IconGlassesDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
      />
    </TheIconWrapper>
  );
};

export const IconGlassesTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="glasses-twotone-rounded IconGlassesTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconGlassesSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="glasses-solid-rounded IconGlassesSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGlassesBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="glasses-bulk-rounded IconGlassesBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGlassesStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="glasses-stroke-sharp IconGlassesStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGlassesSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="glasses-solid-sharp IconGlassesSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfGlasses: TheIconSelfPack = {
  name: 'Glasses',
  StrokeRounded: IconGlassesStrokeRounded,
  DuotoneRounded: IconGlassesDuotoneRounded,
  TwotoneRounded: IconGlassesTwotoneRounded,
  SolidRounded: IconGlassesSolidRounded,
  BulkRounded: IconGlassesBulkRounded,
  StrokeSharp: IconGlassesStrokeSharp,
  SolidSharp: IconGlassesSolidSharp,
};