import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 12.3333C10 12.0233 10 11.8683 10.0341 11.7412C10.1265 11.3961 10.3961 11.1265 10.7412 11.0341C10.8683 11 11.0233 11 11.3333 11H12.6667C12.9767 11 13.1317 11 13.2588 11.0341C13.6039 11.1265 13.8735 11.3961 13.9659 11.7412C14 11.8683 14 12.0233 14 12.3333V13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13V12.3333Z',
  d2: 'M13.8016 13C14.1132 12.9095 14.4666 12.8005 14.88 12.673L19.0512 11.3866C20.5358 10.9288 21.2624 10.131 21.4204 8.74977C21.4911 8.13198 21.5265 7.82308 21.4768 7.57022C21.3349 6.84864 20.7289 6.26354 19.9213 6.06839C19.6383 6 19.283 6 18.5724 6H5.42757C4.717 6 4.36172 6 4.07871 6.06839C3.27111 6.26354 2.6651 6.84864 2.52323 7.57022C2.47351 7.82308 2.50886 8.13198 2.57956 8.74977C2.73764 10.131 3.46424 10.9288 4.94882 11.3866L9.11996 12.673C9.53336 12.8005 9.88684 12.9095 10.1984 13',
  d3: 'M3.46283 11L3.26658 13.1723C2.91481 17.0662 2.73892 19.0131 3.86734 20.2566C4.99576 21.5 6.93851 21.5 10.824 21.5H13.176C17.0615 21.5 19.0042 21.5 20.1327 20.2566C21.2611 19.0131 21.0852 17.0662 20.7334 13.1723L20.5372 11',
  d4: 'M15.5 5.5L15.4227 5.23509C15.0377 3.91505 14.8452 3.25503 14.3869 2.87752C13.9286 2.5 13.3199 2.5 12.1023 2.5H11.8977C10.6801 2.5 10.0714 2.5 9.61309 2.87752C9.15478 3.25503 8.96228 3.91505 8.57727 5.23509L8.5 5.5',
  d5: 'M4.94882 11.3866C4.59651 11.278 4.2869 11.1502 4.01743 11H3.46283L3.26658 13.1723C2.91481 17.0662 2.73892 19.0131 3.86734 20.2566C4.99576 21.5 6.93851 21.5 10.824 21.5H13.176C17.0615 21.5 19.0042 21.5 20.1327 20.2566C21.2611 19.0131 21.0852 17.0662 20.7334 13.1723L20.5372 11H19.9826C19.7131 11.1502 19.4035 11.278 19.0512 11.3866L14.88 12.673C14.552 12.7742 14.2616 12.8637 14 12.9416V13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13V12.9416C9.73838 12.8637 9.44804 12.7742 9.11996 12.673L4.94882 11.3866Z',
  d6: 'M12.1574 1.5C12.7143 1.49994 13.2236 1.49989 13.6477 1.55532C14.1203 1.61709 14.584 1.75732 15.0024 2.10256C15.4095 2.43847 15.6498 2.86686 15.8325 3.31648C16.0044 3.73964 16.16 4.27393 16.3395 4.89061L16.5 5.41962L14.6 6L14.4461 5.49451C14.2491 4.8177 14.1214 4.38334 13.9927 4.06664C13.8704 3.76573 13.7875 3.67801 13.7395 3.63835C13.7027 3.60801 13.6365 3.56045 13.3907 3.52833C12.9321 3.46838 12.4617 3.48974 12.0003 3.48974C11.5389 3.48974 11.0679 3.46838 10.6093 3.52833C10.3635 3.56045 10.2973 3.60801 10.2605 3.63835C10.2125 3.67801 10.1296 3.76573 10.0073 4.06664C9.8786 4.38334 9.75092 4.8177 9.55385 5.49451L9.39997 6L7.5 5.41962L7.6605 4.89061C7.84003 4.27393 7.99557 3.73964 8.16753 3.31648C8.35024 2.86686 8.59053 2.43847 8.99763 2.10256C9.41603 1.75732 9.8797 1.61709 10.3523 1.55532C10.7764 1.49989 11.2857 1.49994 11.8426 1.5L12.1574 1.5Z',
  d7: 'M9.36859 15.1021C9.42446 15.1187 9.45239 15.127 9.47547 15.1415C9.49855 15.156 9.51979 15.1792 9.56227 15.2257C10.1657 15.8864 11.0342 16.3008 11.9995 16.3008C12.9647 16.3008 13.8331 15.8864 14.4366 15.2258C14.479 15.1793 14.5003 15.1561 14.5233 15.1416C14.5464 15.1271 14.5744 15.1188 14.6302 15.1022C14.9064 15.0201 15.207 14.9274 15.5298 14.8278L19.7138 13.5375C20.1826 13.3929 20.6468 13.2069 21.0852 12.9619C21.1638 12.9179 21.2031 12.8959 21.2289 12.8895C21.332 12.8637 21.4282 12.9144 21.4651 13.0141C21.4743 13.039 21.478 13.0806 21.4856 13.1638C21.657 15.0612 21.7927 16.5636 21.7372 17.7441C21.6801 18.9579 21.4178 19.9569 20.688 20.7611C19.9574 21.5661 18.9903 21.9205 17.7919 22.0879C16.6276 22.2506 15.1276 22.2506 13.2352 22.2506H10.7646C8.87218 22.2506 7.37219 22.2506 6.20789 22.0879C5.00951 21.9205 4.04238 21.5661 3.31185 20.7611C2.58204 19.9569 2.31972 18.9579 2.26262 17.7441C2.20708 16.5636 2.34282 15.0612 2.51425 13.1638C2.52173 13.0809 2.52548 13.0395 2.53463 13.0147C2.57146 12.9148 2.66787 12.8639 2.77111 12.8899C2.79677 12.8963 2.83593 12.9182 2.91423 12.962C3.35254 13.207 3.81663 13.393 4.28533 13.5375L8.46942 14.8278C8.79194 14.9273 9.09251 15.02 9.36859 15.1021Z',
  d8: 'M3.90212 5.33943C4.27393 5.24958 4.71386 5.24977 5.32535 5.25003H18.6738C19.2853 5.24977 19.7252 5.24958 20.097 5.33943C21.1429 5.59215 22.0052 6.37257 22.2123 7.42558C22.2851 7.79615 22.2365 8.21724 22.1775 8.72736L22.1657 8.8304L22.1652 8.83511C22.0726 9.64386 21.8039 10.3464 21.2899 10.9167C20.783 11.479 20.094 11.8498 19.2718 12.1034L15.5711 13.2446C15.443 13.2841 15.3789 13.3039 15.3382 13.2735C15.2975 13.2432 15.2982 13.173 15.2995 13.0326C15.2996 13.0218 15.2997 13.011 15.2997 13.0002V12.3335L15.2997 12.3238C15.3007 12.016 15.3016 11.7045 15.2213 11.4049C15.0086 10.6112 14.3887 9.9912 13.595 9.77852C13.2953 9.69823 12.9838 9.69918 12.676 9.70012L12.6664 9.70015H11.333L11.3234 9.70012C11.0155 9.69918 10.7041 9.69823 10.4044 9.77852C9.6107 9.9912 8.99074 10.6112 8.77807 11.4049C8.69777 11.7045 8.69873 12.016 8.69967 12.3238L8.6997 12.3335V13.0002C8.6997 13.011 8.69975 13.0219 8.69985 13.0327C8.70121 13.1731 8.70189 13.2433 8.66117 13.2736C8.62046 13.304 8.55641 13.2842 8.4283 13.2447L4.72736 12.1034C3.90513 11.8498 3.21609 11.479 2.70922 10.9167C2.19526 10.3464 1.92655 9.64385 1.834 8.8351L1.8216 8.72744C1.76266 8.21726 1.71402 7.79616 1.78688 7.42558C1.99393 6.37257 2.85626 5.59215 3.90212 5.33943Z',
  d9: 'M3.46273 9.5C3.07467 9.5 2.75069 9.79603 2.71577 10.1825L2.51425 13.1632C2.34282 15.0606 2.20708 16.563 2.26262 17.7436C2.31972 18.9573 2.58204 19.9564 3.31185 20.7606C4.04238 21.5656 5.00951 21.9199 6.20789 22.0874C7.37219 22.25 8.87218 22.25 10.7646 22.25H13.2352C15.1276 22.25 16.6276 22.25 17.7919 22.0874C18.9903 21.9199 19.9574 21.5656 20.688 20.7606C21.4178 19.9564 21.6801 18.9573 21.7372 17.7436C21.7927 16.563 21.657 15.0606 21.4856 13.1633L21.284 10.1825C21.2491 9.79603 20.9251 9.5 20.5371 9.5H3.46273Z',
  d10: 'M2.5 11H1.75V11.5497L2.27416 11.7152L2.5 11ZM21.5 11L21.7259 11.7152L22.25 11.5497L22.25 11.0001L21.5 11ZM21.5004 6L22.2504 6.00006C22.2504 5.80114 22.1714 5.61036 22.0308 5.46969C21.8901 5.32903 21.6993 5.25 21.5004 5.25V6ZM2.5 6V5.25C2.08579 5.25 1.75 5.58579 1.75 6H2.5ZM2.5 6.75H21.5004V5.25H2.5V6.75ZM1.75 6V11H3.25V6H1.75ZM22.25 11.0001L22.2504 6.00006L20.7504 5.99994L20.75 10.9999L22.25 11.0001ZM21.2741 10.2848L13.7741 12.6533L14.2259 14.0837L21.7259 11.7152L21.2741 10.2848ZM10.2265 12.6533L2.72584 10.2848L2.27416 11.7152L9.7748 14.0837L10.2265 12.6533Z',
  d11: 'M3.49959 11.5L3.49927 21.5H20.4993V11.5',
  d12: 'M15.5 6V2.5H8.5V6',
  d13: 'M14.0005 11.5H10.0005V13.5C10.0005 14.6046 10.8959 15.5 12.0005 15.5C13.1051 15.5 14.0005 14.6046 14.0005 13.5V11.5Z',
  d14: 'M7.49976 2.75C7.49976 2.19772 7.94747 1.75 8.49976 1.75H15.4998C16.052 1.75 16.4998 2.19772 16.4998 2.75V6.25H14.4998V3.75H9.49976V6.25H7.49976V2.75Z',
  d15: 'M8.58737 15.2818L2.75001 13.4385L2.74976 21.5001C2.74975 21.699 2.82876 21.8898 2.96942 22.0305C3.11007 22.1711 3.30084 22.2501 3.49976 22.2501H20.4998C20.914 22.2501 21.2498 21.9144 21.2498 21.5001V13.4388L15.412 15.2824C15.0567 16.8388 13.6638 18.0001 11.9998 18.0001C10.3355 18.0001 8.94247 16.8385 8.58737 15.2818Z',
  d16: 'M2.49976 5.25C2.08554 5.25 1.74976 5.58579 1.74976 6V11.5497L8.49976 13.6812V11H15.4998V13.6813L22.2497 11.5497L22.2502 6.00006C22.2502 5.80114 22.1712 5.61036 22.0305 5.46969C21.8899 5.32903 21.6991 5.25 21.5002 5.25H2.49976Z',
  d17: 'M13.9998 12.5H9.99976V14.5C9.99976 15.6046 10.8952 16.5 11.9998 16.5C13.1043 16.5 13.9998 15.6046 13.9998 14.5V12.5Z',
} as const;

export const IconBriefcase03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-03-stroke-rounded IconBriefcase03StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-03-duotone-rounded IconBriefcase03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-03-twotone-rounded IconBriefcase03TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-03-solid-rounded IconBriefcase03SolidRounded"
    >
      <path 
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
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-03-bulk-rounded IconBriefcase03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-03-stroke-sharp IconBriefcase03StrokeSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcase03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-03-solid-sharp IconBriefcase03SolidSharp"
    >
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
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBriefcase03: TheIconSelfPack = {
  name: 'Briefcase03',
  StrokeRounded: IconBriefcase03StrokeRounded,
  DuotoneRounded: IconBriefcase03DuotoneRounded,
  TwotoneRounded: IconBriefcase03TwotoneRounded,
  SolidRounded: IconBriefcase03SolidRounded,
  BulkRounded: IconBriefcase03BulkRounded,
  StrokeSharp: IconBriefcase03StrokeSharp,
  SolidSharp: IconBriefcase03SolidSharp,
};