import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19 14H20.2389C21.3498 14 22.1831 15.0805 21.9652 16.2386L21.7003 17.6466C21.4429 19.015 20.3127 20 19 20',
  d2: 'M5 14H3.76113C2.65015 14 1.81691 15.0805 2.03479 16.2386L2.29967 17.6466C2.55711 19.015 3.68731 20 5 20',
  d3: 'M18.2696 10.5001L18.7911 15.1968C19.071 18.3791 19.211 19.9702 18.2696 20.9851C17.3283 22.0001 15.7125 22.0001 12.481 22.0001H11.519C8.2875 22.0001 6.67174 22.0001 5.73038 20.9851C4.78901 19.9702 4.92899 18.3791 5.20893 15.1968L5.73038 10.5',
  d4: 'M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5',
  d5: 'M5.2617 8.86971C5.01152 7.45403 4.88643 6.74619 5.13559 6.20431C5.30195 5.84248 5.57803 5.53512 5.9291 5.32087C6.45489 5 7.21577 5 8.73753 5H15.2625C16.7842 5 17.5451 5 18.0709 5.32087C18.422 5.53512 18.698 5.84248 18.8644 6.20431C19.1136 6.74619 18.9885 7.45403 18.7383 8.86971L18.6872 9.15901C18.5902 9.70796 18.5417 9.98243 18.446 10.2349C18.2806 10.671 18.0104 11.0651 17.6565 11.3863C17.4517 11.5722 17.2062 11.7266 16.7153 12.0353C16.2537 12.3255 16.0229 12.4706 15.779 12.5845C15.3579 12.7812 14.905 12.9105 14.439 12.9672C14.169 13 13.8916 13 13.3369 13H10.6631C10.1084 13 9.831 13 9.56102 12.9672C9.09497 12.9105 8.64214 12.7812 8.22104 12.5845C7.9771 12.4706 7.74632 12.3255 7.28474 12.0353C6.79376 11.7266 6.54827 11.5722 6.34346 11.3863C5.98959 11.0651 5.7194 10.671 5.55404 10.2349C5.45833 9.98243 5.40983 9.70796 5.31282 9.15901L5.2617 8.86971Z',
  d6: 'M12 10.0024L12.0087 10.0001',
  d7: 'M10.6632 12.9995H13.3369C13.8916 12.9995 14.169 12.9995 14.439 12.9667C14.9051 12.91 15.3579 12.7807 15.779 12.584C16.0229 12.4701 16.2537 12.325 16.7153 12.0348C17.2063 11.7261 17.4518 11.5717 17.6566 11.3858C18.0104 11.0646 18.2806 10.6705 18.446 10.2344L18.7042 15.7173C18.8431 18.6665 18.9125 20.1412 18.0261 21.0703C17.1396 21.9995 15.6634 21.9995 12.7108 21.9995H11.2892C8.3367 21.9995 6.86043 21.9995 5.97399 21.0703C5.08754 20.1412 5.15698 18.6665 5.29587 15.7173L5.55407 10.2344C5.71943 10.6705 5.98962 11.0646 6.34348 11.3858C6.54829 11.5717 6.79378 11.7261 7.28476 12.0348C7.74634 12.325 7.97713 12.4701 8.22107 12.584C8.64217 12.7807 9.095 12.91 9.56105 12.9667C9.83103 12.9995 10.1084 12.9995 10.6632 12.9995Z',
  d8: 'M12 10.002L12.0087 9.99963',
  d9: 'M19.5364 15.1149L19.5381 15.132L19.5432 15.1902C19.6788 16.7319 19.7876 17.9683 19.7372 18.9433C19.685 19.9531 19.4584 20.8071 18.8194 21.496C18.1817 22.1835 17.3446 22.4788 16.3358 22.6171C15.3593 22.751 14.1053 22.751 12.5382 22.7509H11.4616C9.89451 22.751 8.64043 22.751 7.66393 22.6171C6.65516 22.4788 5.81807 22.1835 5.18038 21.496C4.54135 20.8071 4.31475 19.9531 4.26255 18.9433C4.21215 17.9683 4.32094 16.7318 4.45659 15.1902L4.46171 15.132L4.4634 15.1149L4.5505 14.3304C4.6209 13.6963 4.6561 13.3792 4.81211 13.2503C4.87984 13.1943 4.94116 13.1647 5.02714 13.1465C5.22518 13.1045 5.52049 13.29 6.11111 13.6609C6.34954 13.8611 7.05281 14.2355 7.37463 14.3976C7.98895 14.6845 8.64616 14.8716 9.31959 14.9535C9.71139 15.0011 10.1001 15.001 10.5627 15.0009H13.4371C13.8998 15.001 14.2885 15.0011 14.6803 14.9535C15.3537 14.8716 16.0109 14.6845 16.6252 14.3976C16.9835 14.2302 17.505 13.9023 17.8888 13.6609C18.4793 13.29 18.7746 13.1046 18.9726 13.1465C19.0586 13.1647 19.12 13.1943 19.1877 13.2503C19.3437 13.3793 19.3789 13.6963 19.4493 14.3304L19.5364 15.1149Z',
  d10: 'M20.5446 15.1704C20.6754 16.6563 20.7893 17.9504 20.7353 18.9955C20.7266 19.1632 20.7134 19.3308 20.6944 19.4977C20.6482 19.9036 20.6251 20.1065 20.7476 20.1698C20.8701 20.2331 21.0037 20.1135 21.2707 19.8744C21.86 19.3467 22.2804 18.6172 22.4366 17.7869L22.7015 16.3789C22.9462 15.0783 22.2117 13.7786 21.0172 13.3774C20.7472 13.2867 20.6122 13.2414 20.4843 13.3444C20.3563 13.4474 20.3745 13.6132 20.4107 13.9447L20.5446 15.1704Z',
  d11: 'M3.2634 18.9954C3.20937 17.9503 3.32326 16.6561 3.45403 15.1703L3.58796 13.9444C3.62418 13.6129 3.64229 13.4472 3.51436 13.3442C3.38643 13.2412 3.25146 13.2865 2.98152 13.3771C1.78679 13.7782 1.05222 15.078 1.29693 16.3787L1.56181 17.7867C1.71804 18.6171 2.13856 19.3468 2.72797 19.8745C2.99502 20.1135 3.12854 20.2331 3.25103 20.1698C3.37353 20.1065 3.35043 19.9036 3.30425 19.4977C3.28524 19.3308 3.27207 19.1631 3.2634 18.9954Z',
  d12: 'M12 2.75C11.0203 2.75 10.1869 3.37611 9.87803 4.25H14.122C13.8131 3.37611 12.9797 2.75 12 2.75ZM12 1.25C10.1857 1.25 8.67233 2.53844 8.32497 4.25024C7.76227 4.25135 7.2873 4.25765 6.89271 4.29312C6.39854 4.33755 5.94402 4.43316 5.53844 4.68067C5.06455 4.96988 4.68497 5.38911 4.4542 5.89099C4.25336 6.3278 4.2279 6.78699 4.2635 7.26503C4.29773 7.72463 4.39707 8.28673 4.51644 8.96214L4.51645 8.96214L4.51645 8.96215C4.60218 9.44798 4.73167 10.1813 4.85279 10.5008C5.06117 11.0504 5.40012 11.5429 5.83941 11.9417C6.09393 12.1727 6.39227 12.3602 6.82961 12.635L6.88556 12.6702L6.9267 12.6961L6.92671 12.6961C7.34915 12.9617 7.61698 13.1302 7.9037 13.2641C8.39726 13.4946 8.92673 13.6456 9.47055 13.7117C9.78613 13.7501 10.106 13.75 10.6149 13.75H13.3852C13.894 13.75 14.2139 13.7501 14.5295 13.7117C15.0733 13.6456 15.6028 13.4946 16.0964 13.2641C16.3831 13.1302 16.6509 12.9617 17.0734 12.6961L17.0734 12.6961L17.1145 12.6702L17.1705 12.635L17.1705 12.635L17.1705 12.635L17.1705 12.635C17.6078 12.3602 17.9062 12.1727 18.1607 11.9417C18.5999 11.5429 18.9389 11.0504 19.1473 10.5008C19.2684 10.1813 19.3979 9.44802 19.4836 8.96218C19.603 8.28675 19.7023 7.72464 19.7366 7.26503C19.7722 6.787 19.7467 6.3278 19.5459 5.89099C19.3151 5.38911 18.9355 4.96988 18.4616 4.68067C18.056 4.43316 17.6015 4.33755 17.1074 4.29312C16.7128 4.25765 16.2378 4.25135 15.675 4.25024C15.3277 2.53844 13.8143 1.25 12 1.25ZM11.738 9.03665C11.207 9.17959 10.8919 9.72793 11.0342 10.2614C11.1765 10.7949 11.7223 11.1114 12.2533 10.9685L12.262 10.9662C12.793 10.8232 13.1081 10.2749 12.9658 9.74143C12.8235 9.20796 12.2777 8.89138 11.7467 9.03432L11.738 9.03665Z',
  d13: 'M19 14H22V16C22 16.9319 22 17.3978 21.8478 17.7654C21.6448 18.2554 21.2554 18.6448 20.7654 18.8478C20.3978 19 19.9319 19 19 19',
  d14: 'M5 14H2V16C2 16.9319 2 17.3978 2.15224 17.7654C2.35523 18.2554 2.74458 18.6448 3.23463 18.8478C3.60218 19 4.06812 19 5 19',
  d15: 'M18.498 11L18.998 22H4.99805L5.49805 11',
  d16: 'M19.0017 9.00001V5.00001L5 5V9C5 11.2091 6.79086 13 9 13L15.0017 13C17.2108 13 19.0017 11.2091 19.0017 9.00001Z',
  d17: 'M12 10.0015L12.009 10.0015',
  d18: 'M12 2.75C10.7574 2.75 9.75 3.75736 9.75 5H8.25C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5H14.25C14.25 3.75736 13.2426 2.75 12 2.75Z',
  d19: 'M4.69559 12.1802L4.25077 21.9661C4.24147 22.1708 4.31626 22.3703 4.45776 22.5184C4.59927 22.6664 4.79518 22.7502 5 22.7502H19C19.2048 22.7502 19.4007 22.6664 19.5422 22.5184C19.6837 22.3703 19.7585 22.1708 19.7492 21.9661L19.3045 12.1819C18.2143 13.3034 16.6894 14.0002 15.0017 14.0002L8.99999 14.0002C7.31149 14.0002 5.78589 13.3027 4.69559 12.1802Z',
  d20: 'M15.0017 12.75C17.6251 12.75 19.7517 10.6234 19.7517 8.00001V4.25001L4.25 4.25V8C4.25 10.6234 6.37664 12.75 9 12.75L15.0017 12.75ZM13.009 8.00122H11V10.0012H13.009V8.00122Z',
  d21: 'M22.0011 13.25C22.4153 13.25 22.7511 13.5858 22.7511 14V16.0253C22.7511 16.4697 22.7511 16.8408 22.7304 17.1454C22.7087 17.4625 22.6621 17.762 22.5418 18.0524C22.2627 18.7262 21.7273 19.2616 21.0535 19.5407C21.0007 19.5626 20.9476 19.582 20.8941 19.5993L20.6055 13.25H22.0011Z',
  d22: 'M1.99805 13.25C1.58383 13.25 1.24805 13.5858 1.24805 14V16.0253C1.24804 16.4697 1.24803 16.8408 1.26882 17.1454C1.29045 17.4625 1.3371 17.762 1.45738 18.0524C1.73649 18.7262 2.27184 19.2616 2.94567 19.5407C2.99849 19.5626 3.05162 19.582 3.1051 19.5993L3.39371 13.25H1.99805Z',
} as const;

export const IconBackpack02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-02-stroke-rounded IconBackpack02StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBackpack02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-02-duotone-rounded IconBackpack02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBackpack02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-02-twotone-rounded IconBackpack02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBackpack02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-02-solid-rounded IconBackpack02SolidRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBackpack02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-02-bulk-rounded IconBackpack02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBackpack02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-02-stroke-sharp IconBackpack02StrokeSharp"
    >
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
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBackpack02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backpack-02-solid-sharp IconBackpack02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBackpack02: TheIconSelfPack = {
  name: 'Backpack02',
  StrokeRounded: IconBackpack02StrokeRounded,
  DuotoneRounded: IconBackpack02DuotoneRounded,
  TwotoneRounded: IconBackpack02TwotoneRounded,
  SolidRounded: IconBackpack02SolidRounded,
  BulkRounded: IconBackpack02BulkRounded,
  StrokeSharp: IconBackpack02StrokeSharp,
  SolidSharp: IconBackpack02SolidSharp,
};