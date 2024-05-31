import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 13.5L6 22M16 13.5L18 22',
  d2: 'M18.5 13C16.7677 13.6224 14.4922 14 12 14C9.50781 14 7.2323 13.6224 5.5 13',
  d3: 'M19 2C17.1344 2.62236 14.6839 3 12 3C9.3161 3 6.86556 2.62236 5 2',
  d4: 'M12 14V3M8 13.5L7 3M16 13.5L17 3',
  d5: 'M7 18L17 18',
  d6: 'M6.99908 2.99929L7.99908 13.4993L8.01894 13.6576C9.23564 13.8773 10.5824 13.9993 11.9991 13.9993H12.0264C13.4342 13.9977 14.7724 13.8757 15.982 13.6571L15.9991 13.4993L16.9991 2.99929L17.0572 2.51367C15.5652 2.82112 13.8557 2.99678 12.0382 2.99926L11.9991 2.99929C10.1724 2.99929 8.45375 2.82435 6.9541 2.51638L6.99908 2.99929Z',
  d7: 'M8.00098 13.5L6.00098 22M16.001 13.5L18.001 22',
  d8: 'M18.501 13C16.7687 13.6224 14.4932 14 12.001 14C9.50879 14 7.23328 13.6224 5.50098 13',
  d9: 'M19.001 2C17.1354 2.62236 14.6849 3 12.001 3C9.31708 3 6.86654 2.62236 5.00098 2',
  d10: 'M12.001 14V3M8.00098 13.5L7.00098 3M16.001 13.5L17.001 3',
  d11: 'M7.00098 18H17.001',
  d12: 'M8 13.5L7 3M16 13.5L17 3',
  d13: 'M12 14V3',
  d14: 'M4.05167 1.68381C4.22644 1.15991 4.79283 0.876889 5.31673 1.05167C5.87042 1.23638 6.48699 1.40032 7.15646 1.53781C8.58419 1.83101 10.2348 2.00023 11.9996 2.00027C11.9994 2.00027 11.9998 2.00027 11.9996 2.00027L12.038 2.00025C13.7941 1.99785 15.436 1.82795 16.8566 1.53523C17.5212 1.39828 18.1336 1.23522 18.6838 1.05167C19.2077 0.876889 19.7741 1.15991 19.9489 1.68381C20.1237 2.20771 19.8406 2.7741 19.3167 2.94888C18.8925 3.0904 18.4434 3.21902 17.973 3.33389L17.111 12.3849C17.4837 12.2858 17.8349 12.1767 18.1622 12.0592C18.6819 11.8724 19.2546 12.1424 19.4414 12.6622C19.6281 13.1819 19.3581 13.7546 18.8384 13.9414C18.0323 14.231 17.1301 14.4671 16.1609 14.6422C14.8898 14.8718 13.4924 14.9986 12.0287 15.0003L12.0008 15.0003C10.5279 15.0003 9.12101 14.8735 7.84247 14.6427C6.87227 14.4675 5.96903 14.2313 5.16216 13.9414C4.6424 13.7546 4.37243 13.1819 4.55917 12.6622C4.7459 12.1424 5.31862 11.8724 5.83838 12.0592C6.16564 12.1767 6.51684 12.2858 6.88952 12.3849L6.02752 3.33389C5.55719 3.21902 5.10802 3.0904 4.68381 2.94888C4.15991 2.7741 3.87689 2.20771 4.05167 1.68381ZM8.07399 3.72681L8.93742 12.7928C9.59283 12.8847 10.2836 12.9482 11.0003 12.9789L11.0003 3.98325C9.98142 3.94841 8.99969 3.86077 8.07399 3.72681ZM13.0003 3.98325V12.9789C13.717 12.9482 14.4077 12.8847 15.0631 12.7928L15.9266 3.72681C15.0008 3.86078 14.0191 3.94841 13.0003 3.98325Z',
  d15: 'M4.55917 12.6622C4.7459 12.1424 5.31862 11.8724 5.83838 12.0592C6.51275 12.3014 7.28891 12.5077 8.14519 12.6649C8.14496 12.6649 8.14542 12.665 8.14519 12.6649L8.1978 12.6745C9.3525 12.883 10.6394 13.0002 11.9997 13.0003C11.9995 13.0003 11.9999 13.0003 11.9997 13.0003L12.0265 13.0003C12.0263 13.0003 12.0267 13.0003 12.0265 13.0003C13.3779 12.9987 14.6569 12.8815 15.8047 12.6741C15.8045 12.6742 15.8049 12.6741 15.8047 12.6741L15.8547 12.665C16.7112 12.5078 17.4876 12.3015 18.1622 12.0592C18.6819 11.8724 19.2546 12.1424 19.4414 12.6622C19.6281 13.1819 19.3581 13.7546 18.8384 13.9414C18.3408 14.1201 17.8066 14.2785 17.2427 14.4147L18.9737 21.7712C19.1002 22.3088 18.7669 22.8472 18.2293 22.9737C17.6917 23.1002 17.1534 22.7669 17.0269 22.2293L16.2671 19.0003H7.73346L6.97369 22.2293C6.84719 22.7669 6.30884 23.1002 5.77123 22.9737C5.23363 22.8472 4.90036 22.3088 5.02686 21.7712L6.7578 14.4147C6.19391 14.2785 5.65973 14.1201 5.16216 13.9414C4.6424 13.7546 4.37243 13.1819 4.55917 12.6622ZM8.72585 14.7826L8.20405 17.0003H15.7965L15.2747 14.7826C14.2507 14.923 13.1595 14.999 12.0287 15.0003L12.0008 15.0003C10.8599 15.0003 9.7584 14.9242 8.72585 14.7826Z',
  d16: 'M4.05167 1.68381C4.22644 1.15991 4.79283 0.876889 5.31673 1.05167C5.87042 1.23638 6.48699 1.40032 7.15646 1.53781C8.58419 1.83101 10.2348 2.00023 11.9996 2.00027L12.038 2.00025C13.7941 1.99785 15.436 1.82795 16.8566 1.53523C17.5212 1.39828 18.1336 1.23522 18.6838 1.05167C19.2077 0.876889 19.7741 1.15991 19.9489 1.68381C20.1237 2.20771 19.8406 2.7741 19.3167 2.94888C18.8925 3.0904 18.4434 3.21902 17.973 3.33389L17.111 12.3849C17.4837 12.2858 17.8349 12.1767 18.1622 12.0592C18.6819 11.8724 19.2546 12.1424 19.4414 12.6622C19.6281 13.1819 19.3581 13.7546 18.8384 13.9414C18.0323 14.231 17.1301 14.4671 16.1609 14.6422C14.8898 14.8718 13.4924 14.9986 12.0287 15.0003L12.0008 15.0003C10.5279 15.0003 9.12101 14.8735 7.84247 14.6427C6.87227 14.4675 5.96903 14.2313 5.16216 13.9414C4.6424 13.7546 4.37243 13.1819 4.55917 12.6622C4.7459 12.1424 5.31862 11.8724 5.83838 12.0592C6.16564 12.1767 6.51684 12.2858 6.88952 12.3849L6.02752 3.33389C5.55719 3.21902 5.10802 3.0904 4.68381 2.94888C4.15991 2.7741 3.87689 2.20771 4.05167 1.68381ZM8.07399 3.72681L8.93742 12.7928C9.59283 12.8847 10.2836 12.9482 11.0003 12.9789L11.0003 3.98325C9.98142 3.94841 8.99969 3.86077 8.07399 3.72681ZM13.0003 3.98325V12.9789C13.717 12.9482 14.4077 12.8847 15.0631 12.7928L15.9266 3.72681C15.0008 3.86078 14.0191 3.94841 13.0003 3.98325Z',
  d17: 'M5.02734 22.2914L6.83 14.6302C6.23781 14.4897 5.6794 14.3254 5.16211 14.1395L5.83833 12.2573C6.16616 12.3751 6.51715 12.4841 6.88864 12.5829L6.03008 3.56796C5.49079 3.44389 4.97914 3.30314 4.5 3.14721L5.1488 1.25C6.93629 1.83173 9.33542 2.1986 12 2.1986C14.6646 2.1986 17.0637 1.83173 18.8512 1.25L19.5 3.14721C19.0205 3.30326 18.5084 3.4441 17.9687 3.56824L17.1101 12.5833C17.4822 12.4844 17.8338 12.3753 18.1621 12.2573L18.8383 14.1395C18.3213 14.3253 17.7633 14.4895 17.1715 14.6299L18.9742 22.2914L17.0273 22.7495L16.1918 19.1982H7.80977L6.97418 22.7495L5.02734 22.2914ZM8.28036 17.1982L8.79976 14.9908C9.81324 15.1263 10.8891 15.1984 12.0002 15.1984C13.1117 15.1984 14.1879 15.1262 15.2017 14.9907L15.7212 17.1982H8.28036ZM8.07446 3.93895L8.93655 12.9909C9.59073 13.0826 10.2814 13.1462 10.9994 13.1771V4.18239C9.98406 4.14933 9.00301 4.06635 8.07446 3.93895ZM12.9994 4.18243L12.9994 13.1771C13.7174 13.1463 14.408 13.0828 15.0622 12.9911L15.9243 3.93912C14.9958 4.06647 14.0147 4.14941 12.9994 4.18243Z',
} as const;

export const IconChair04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-04-stroke-rounded IconChair04StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconChair04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-04-duotone-rounded IconChair04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
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
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChair04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-04-twotone-rounded IconChair04TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconChair04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-04-solid-rounded IconChair04SolidRounded"
    >
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

export const IconChair04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-04-bulk-rounded IconChair04BulkRounded"
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
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChair04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-04-stroke-sharp IconChair04StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconChair04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-04-solid-sharp IconChair04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChair04: TheIconSelfPack = {
  name: 'Chair04',
  StrokeRounded: IconChair04StrokeRounded,
  DuotoneRounded: IconChair04DuotoneRounded,
  TwotoneRounded: IconChair04TwotoneRounded,
  SolidRounded: IconChair04SolidRounded,
  BulkRounded: IconChair04BulkRounded,
  StrokeSharp: IconChair04StrokeSharp,
  SolidSharp: IconChair04SolidSharp,
};