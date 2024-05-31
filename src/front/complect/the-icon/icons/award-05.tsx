import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.5 9.5C4.5 13.6421 7.85786 17 12 17C16.1421 17 19.5 13.6421 19.5 9.5C19.5 5.35786 16.1421 2 12 2C7.85786 2 4.5 5.35786 4.5 9.5Z',
  d2: 'M9 10.1667C9 10.1667 9.75 10.1667 10.5 11.5C10.5 11.5 12.8824 8.16667 15 7.5',
  d3: 'M16.8825 15L17.5527 18.2099C17.9833 20.2723 18.1986 21.3035 17.7563 21.7923C17.3141 22.281 16.546 21.8606 15.0099 21.0198L12.7364 19.7753C12.3734 19.5766 12.1919 19.4773 12 19.4773C11.8081 19.4773 11.6266 19.5766 11.2636 19.7753L8.99008 21.0198C7.45397 21.8606 6.68592 22.281 6.24365 21.7923C5.80139 21.3035 6.01669 20.2723 6.44731 18.2099L7.11752 15',
  d4: 'M4.5 9.49902C4.5 13.6412 7.85786 16.999 12 16.999C16.1421 16.999 19.5 13.6412 19.5 9.49902C19.5 5.35689 16.1421 1.99902 12 1.99902C7.85786 1.99902 4.5 5.35689 4.5 9.49902Z',
  d5: 'M12 1.24902C7.44365 1.24902 3.75 4.94267 3.75 9.49902C3.75 14.0554 7.44365 17.749 12 17.749C16.5563 17.749 20.25 14.0554 20.25 9.49902C20.25 4.94267 16.5563 1.24902 12 1.24902ZM15.3003 8.45412C15.8271 8.28827 16.1197 7.72678 15.9538 7.19998C15.788 6.67319 15.2265 6.38058 14.6997 6.54642C13.3701 6.96499 12.0909 8.14513 11.2267 9.06594C10.9596 9.35054 10.7173 9.62684 10.5084 9.87499C10.3297 9.70763 10.1516 9.57588 9.97855 9.47331C9.95822 9.46126 9.93783 9.4489 9.91717 9.43638C9.70847 9.30985 9.47274 9.16693 9 9.16693C8.44772 9.16693 8 9.61465 8 10.1669C8 10.6838 8.39207 11.109 8.89501 11.1615C9.00137 11.2245 9.32472 11.4506 9.62842 11.9905C9.79609 12.2886 10.1045 12.4803 10.446 12.4988C10.7874 12.5173 11.1149 12.3595 11.3138 12.0814C11.5581 11.7738 12.2785 10.8678 12.6851 10.4346C13.5415 9.52207 14.5122 8.70221 15.3003 8.45412Z',
  d6: 'M17.8617 14.5454L18.5451 17.8186C18.7492 18.7959 18.9204 19.6159 18.978 20.2506C19.0334 20.8597 19.025 21.6309 18.4981 22.2131C18.2223 22.5178 17.8638 22.6992 17.4587 22.7406C17.0955 22.7777 16.7527 22.6965 16.4722 22.6013C15.9491 22.4238 15.3086 22.073 14.608 21.6894C14.5821 21.6753 14.5561 21.661 14.5301 21.6467L12.2566 20.4023C12.1635 20.3514 12.0926 20.3126 12.0311 20.2804C12.0201 20.2746 12.0099 20.2693 12.0003 20.2644C11.9907 20.2693 11.9805 20.2746 11.9694 20.2804C11.9079 20.3126 11.837 20.3514 11.744 20.4023L9.47052 21.6467C9.44444 21.661 9.41845 21.6753 9.39254 21.6894C8.692 22.073 8.05151 22.4238 7.52839 22.6013C7.24788 22.6965 6.90507 22.7777 6.54193 22.7406C6.13674 22.6992 5.77824 22.5178 5.50248 22.2131C4.97562 21.6309 4.96723 20.8597 5.02254 20.2506C5.08018 19.6159 5.25142 18.7959 5.45551 17.8186C5.4599 17.7976 5.4643 17.7765 5.46871 17.7554L6.13892 14.5454L8.0967 14.9542L7.42649 18.1641C7.20576 19.2213 7.06021 19.9264 7.01434 20.4315C7.00587 20.5248 7.00193 20.6019 7.00081 20.6649C7.33078 20.5345 7.79276 20.2851 8.51023 19.8924L10.7837 18.6479C10.7924 18.6432 10.8011 18.6384 10.8099 18.6336C10.9683 18.5468 11.1408 18.4524 11.299 18.3839C11.4832 18.3041 11.7177 18.2271 12.0003 18.2271C12.2829 18.2271 12.5173 18.3041 12.7016 18.3839C12.8598 18.4524 13.0323 18.5468 13.1907 18.6336C13.1994 18.6384 13.2082 18.6432 13.2169 18.6479L15.4903 19.8924C16.2078 20.2851 16.6698 20.5345 16.9998 20.6649C16.9987 20.6019 16.9947 20.5248 16.9862 20.4315C16.9404 19.9264 16.7948 19.2213 16.5741 18.1641L15.9039 14.9542L17.8617 14.5454Z',
  d7: 'M3.75 9.49902C3.75 4.94267 7.44365 1.24902 12 1.24902C16.5563 1.24902 20.25 4.94267 20.25 9.49902C20.25 14.0554 16.5563 17.749 12 17.749C7.44365 17.749 3.75 14.0554 3.75 9.49902Z',
  d8: 'M15.9538 7.19998C16.1197 7.72678 15.8271 8.28827 15.3003 8.45412C14.5122 8.70221 13.5415 9.52207 12.6851 10.4346C12.2785 10.8678 11.5581 11.7738 11.3138 12.0814C11.1149 12.3595 10.7874 12.5173 10.446 12.4988C10.1045 12.4803 9.79609 12.2886 9.62842 11.9905C9.32472 11.4506 9.00137 11.2245 8.89501 11.1615C8.39207 11.109 8 10.6838 8 10.1669C8 9.61465 8.44772 9.16693 9 9.16693C9.51953 9.16693 9.75281 9.33954 9.97855 9.47331C10.1516 9.57588 10.3297 9.70763 10.5084 9.87499C10.7173 9.62684 10.9596 9.35054 11.2267 9.06594C12.0909 8.14513 13.3701 6.96499 14.6997 6.54642C15.2265 6.38058 15.788 6.67319 15.9538 7.19998Z',
  d9: 'M6.00852 15.1704L5.45551 17.819C5.25142 18.7963 5.08018 19.6164 5.02254 20.2511C4.96723 20.8602 4.97562 21.6313 5.50248 22.2135C5.77824 22.5182 6.13674 22.6996 6.54193 22.7411C6.90507 22.7782 7.24788 22.697 7.52839 22.6018C8.05151 22.4242 8.692 22.0735 9.39254 21.6899L11.744 20.4028C11.837 20.3519 11.9079 20.3131 11.9694 20.2809L12.0003 20.2648L12.0311 20.2809C12.0926 20.3131 12.1635 20.3519 12.2566 20.4028L14.608 21.6899C15.3086 22.0735 15.9491 22.4242 16.4722 22.6018C16.7527 22.697 17.0955 22.7782 17.4587 22.7411C17.8638 22.6996 18.2223 22.5182 18.4981 22.2135C19.025 21.6313 19.0334 20.8602 18.978 20.2511C18.9204 19.6164 18.7492 18.7963 18.5451 17.819L17.992 15.1699C17.4768 15.714 16.8884 16.188 16.2424 16.5761L16.5741 18.1646C16.7948 19.2218 16.9404 19.9269 16.9862 20.4319C16.9947 20.5253 16.9987 20.6023 16.9998 20.6654C16.6698 20.535 16.2078 20.2856 15.4903 19.8928L13.1907 18.6341C13.0323 18.5473 12.8598 18.4528 12.7016 18.3844C12.5173 18.3046 12.2829 18.2275 12.0003 18.2275C11.7177 18.2275 11.4832 18.3046 11.299 18.3844C11.1408 18.4528 10.9683 18.5473 10.8099 18.6341L8.51023 19.8928C7.79276 20.2856 7.33078 20.535 7.00081 20.6654C7.00193 20.6023 7.00587 20.5253 7.01434 20.4319C7.06021 19.9269 7.20576 19.2218 7.42649 18.1646L7.7581 16.5764C7.11214 16.1884 6.52368 15.7145 6.00852 15.1704Z',
  d10: 'M8.5 9.5L10.5 11.5L15.5 7',
  d11: 'M17 14.9996V21.9996L12 19.4995L7 21.9995V14.9995',
  d12: 'M12 1.24902C7.44365 1.24902 3.75 4.94267 3.75 9.49902C3.75 14.0554 7.44365 17.749 12 17.749C16.5563 17.749 20.25 14.0554 20.25 9.49902C20.25 4.94267 16.5563 1.24902 12 1.24902ZM10.4638 12.8781L16.169 7.74342L14.8311 6.25684L10.5363 10.1222L9.20718 8.79302L7.79297 10.2072L10.4638 12.8781Z',
  d13: 'M8 20.1315V14.7495H6V21.7495C6 22.0961 6.17945 22.418 6.47427 22.6002C6.76909 22.7824 7.13723 22.7989 7.44721 22.6439L12 20.3675L16.5528 22.644C16.8628 22.799 17.2309 22.7824 17.5257 22.6002C17.8205 22.418 18 22.0961 18 21.7496V14.7496H16V20.1315L12.4472 18.3551C12.1657 18.2143 11.8343 18.2143 11.5528 18.3551L8 20.1315Z',
} as const;

export const IconAward05StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-05-stroke-rounded IconAward05StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAward05DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-05-duotone-rounded IconAward05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAward05TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-05-twotone-rounded IconAward05TwotoneRounded"
    >
      <path 
        d={d.d4} 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAward05SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-05-solid-rounded IconAward05SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAward05BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-05-bulk-rounded IconAward05BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconAward05StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-05-stroke-sharp IconAward05StrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAward05SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="award-05-solid-sharp IconAward05SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfAward05: TheIconSelfPack = {
  name: 'Award05',
  StrokeRounded: IconAward05StrokeRounded,
  DuotoneRounded: IconAward05DuotoneRounded,
  TwotoneRounded: IconAward05TwotoneRounded,
  SolidRounded: IconAward05SolidRounded,
  BulkRounded: IconAward05BulkRounded,
  StrokeSharp: IconAward05StrokeSharp,
  SolidSharp: IconAward05SolidSharp,
};