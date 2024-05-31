import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z',
  d2: 'M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z',
  d3: 'M19.5 7.14286V8M19.5 7.14286C18.777 7.14286 18.14 6.76405 17.7664 6.18888M19.5 7.14286C20.223 7.14286 20.86 6.76405 21.2336 6.18888M19.5 2.85714C20.223 2.85714 20.8601 3.236 21.2336 3.81125M19.5 2.85714C18.777 2.85714 18.1399 3.236 17.7664 3.81125M19.5 2.85714V2M22 3.28571L21.2336 3.81125M17.0003 6.71429L17.7664 6.18888M17 3.28571L17.7664 3.81125M21.9997 6.71429L21.2336 6.18888M21.2336 3.81125C21.4545 4.15141 21.5833 4.56023 21.5833 5C21.5833 5.43982 21.4545 5.84869 21.2336 6.18888M17.7664 3.81125C17.5455 4.15141 17.4167 4.56023 17.4167 5C17.4167 5.43982 17.5455 5.84869 17.7664 6.18888',
  d4: 'M21.234 3.81153C20.8604 3.23628 20.2234 2.85742 19.5003 2.85742C18.7773 2.85742 18.1403 3.23628 17.7667 3.81153C17.5458 4.15169 17.417 4.56051 17.417 5.00028C17.417 5.4401 17.5458 5.84897 17.7668 6.18915C18.1404 6.76433 18.7773 7.14314 19.5003 7.14314C20.2233 7.14314 20.8603 6.76433 21.2339 6.18915C21.4548 5.84897 21.5837 5.4401 21.5837 5.00028C21.5837 4.56051 21.4549 4.15169 21.234 3.81153Z',
  d5: 'M4.676 15.2743C7.85919 13.4086 11.8912 13.4086 15.0744 15.2743C15.1752 15.3334 15.3007 15.4031 15.4436 15.4824C16.0762 15.8336 17.0481 16.3731 17.7135 17.0142C18.129 17.4146 18.5385 17.9553 18.6133 18.6287C18.6934 19.3502 18.3711 20.0161 17.7548 20.5941C16.7047 21.5789 15.4368 22.375 13.7944 22.375H5.95596C4.31362 22.375 3.0457 21.5788 1.99562 20.5941C1.3793 20.0161 1.05695 19.3502 1.13707 18.6287C1.21184 17.9553 1.6214 17.4146 2.03689 17.0142C2.70228 16.3731 3.67419 15.8336 4.30683 15.4824C4.44965 15.4031 4.5752 15.3334 4.676 15.2743Z',
  d6: 'M5.12519 7.625C5.12519 5.00165 7.25184 2.875 9.87519 2.875C12.4985 2.875 14.6252 5.00165 14.6252 7.625C14.6252 10.2484 12.4985 12.375 9.87519 12.375C7.25184 12.375 5.12519 10.2484 5.12519 7.625Z',
  d7: 'M19.3751 1.625C19.9274 1.625 20.3751 2.07272 20.3751 2.625V2.65116C20.6934 2.7624 20.9874 2.92501 21.2479 3.12829L21.3095 3.086C21.765 2.77366 22.3875 2.88969 22.6998 3.34517C23.0122 3.80064 22.8961 4.42309 22.4406 4.73543L22.3502 4.79746C22.4208 5.06177 22.4584 5.33937 22.4584 5.625C22.4584 5.91068 22.4208 6.18834 22.3501 6.45269L22.4404 6.51457C22.8959 6.82691 23.0119 7.44936 22.6995 7.90483C22.3872 8.36031 21.7648 8.47634 21.3093 8.164L21.2477 8.12181C20.9873 8.32504 20.6934 8.48761 20.3751 8.59884V8.625C20.3751 9.17728 19.9274 9.625 19.3751 9.625C18.8228 9.625 18.3751 9.17728 18.3751 8.625V8.59884C18.0568 8.48761 17.7629 8.32504 17.5024 8.12181L17.4409 8.164C16.9854 8.47634 16.363 8.36031 16.0506 7.90483C15.7383 7.44936 15.8543 6.82691 16.3098 6.51457L16.4 6.45269C16.3294 6.18834 16.2918 5.91068 16.2918 5.625C16.2918 5.33937 16.3294 5.06177 16.4 4.79746L16.3095 4.73543C15.8541 4.42309 15.738 3.80064 16.0504 3.34517C16.3627 2.88969 16.9852 2.77366 17.4406 3.086L17.5023 3.12829C17.7628 2.92501 18.0568 2.7624 18.3751 2.65116V2.625C18.3751 2.07272 18.8228 1.625 19.3751 1.625ZM19.3751 4.48214C19.0128 4.48214 18.6817 4.67054 18.4801 4.9809C18.3622 5.16246 18.2918 5.38274 18.2918 5.625C18.2918 5.86728 18.3622 6.08759 18.4802 6.26917C18.6817 6.57949 19.0129 6.76786 19.3751 6.76786C19.7373 6.76786 20.0685 6.57949 20.27 6.26917C20.388 6.08759 20.4584 5.86729 20.4584 5.625C20.4584 5.38274 20.388 5.16246 20.2701 4.9809C20.0685 4.67054 19.7374 4.48214 19.3751 4.48214Z',
  d8: 'M2 21H17C17 16.9066 13.6421 13.5882 9.5 13.5882C5.35786 13.5882 2 16.9066 2 21Z',
  d9: 'M13.25 6.70588C13.25 8.75258 11.5711 10.4118 9.5 10.4118C7.42893 10.4118 5.75 8.75258 5.75 6.70588C5.75 4.65918 7.42893 3 9.5 3C11.5711 3 13.25 4.65918 13.25 6.70588Z',
  d10: 'M18.5 12.5714V14M18.5 12.5714C17.6003 12.5714 16.8076 12.1169 16.3427 11.4267M18.5 12.5714C19.3997 12.5714 20.1924 12.1169 20.6573 11.4267M18.5 7.42857C19.3998 7.42857 20.1925 7.8832 20.6574 8.5735M18.5 7.42857C17.6002 7.42857 16.8075 7.8832 16.3426 8.5735M18.5 7.42857V6M22 7.6L20.6574 8.5735M15 12.4L16.3427 11.4267M15 7.6L16.3426 8.5735M22 12.4L20.6573 11.4267M20.6574 8.5735C20.9323 8.98169 21.0926 9.47228 21.0926 10C21.0926 10.5278 20.9323 11.0184 20.6573 11.4267M16.3426 8.5735C16.0677 8.98169 15.9074 9.47228 15.9074 10C15.9074 10.5278 16.0677 11.0184 16.3427 11.4267',
  d11: 'M4.99902 6.70588C4.99902 4.23662 7.02213 2.25 9.49902 2.25C11.9759 2.25 13.999 4.23662 13.999 6.70588C13.999 9.17514 11.9759 11.1618 9.49902 11.1618C7.02213 11.1618 4.99902 9.17514 4.99902 6.70588Z',
  d12: 'M1.24902 21C1.24902 16.484 4.95107 12.8382 9.49902 12.8382C14.047 12.8382 17.749 16.484 17.749 21V21.75H1.24902V21Z',
  d13: 'M18.0604 6.76259C17.4813 6.89458 16.9594 7.17607 16.5383 7.56394L15.7506 6.99282L14.8701 8.20718L15.6917 8.8029C15.5471 9.17454 15.4678 9.57843 15.4678 10C15.4678 10.4216 15.5471 10.8255 15.6917 11.1972L14.8702 11.7928L15.7506 13.0072L16.5384 12.4361C16.9594 12.824 17.4814 13.1054 18.0604 13.2374V14H19.5604V13.2374C20.1394 13.1054 20.6613 12.824 21.0824 12.4361L21.8702 13.0072L22.7506 11.7928L21.929 11.1972C22.0736 10.8255 22.153 10.4216 22.153 10C22.153 9.57843 22.0736 9.17454 21.9291 8.8029L22.7506 8.20718L21.8701 6.99282L21.0825 7.56394C20.6614 7.17607 20.1394 6.89458 19.5604 6.76259V6H18.0604V6.76259ZM18.8104 8.17857C18.1689 8.17857 17.6055 8.50174 17.275 8.99245C17.0807 9.28103 16.9678 9.62653 16.9678 10C16.9678 10.3735 17.0807 10.7191 17.2751 11.0077C17.6056 11.4983 18.1689 11.8214 18.8104 11.8214C19.4518 11.8214 20.0152 11.4983 20.3456 11.0077C20.54 10.7191 20.653 10.3735 20.653 10C20.653 9.62653 20.5401 9.28103 20.3457 8.99245C20.0152 8.50174 19.4519 8.17857 18.8104 8.17857Z',
} as const;

export const IconUserSettings02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-02-stroke-rounded IconUserSettings02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUserSettings02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-02-duotone-rounded IconUserSettings02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      />
    </TheIconWrapper>
  );
};

export const IconUserSettings02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-02-twotone-rounded IconUserSettings02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUserSettings02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-02-solid-rounded IconUserSettings02SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconUserSettings02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-02-bulk-rounded IconUserSettings02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSettings02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-02-stroke-sharp IconUserSettings02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSettings02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-02-solid-sharp IconUserSettings02SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfUserSettings02: TheIconSelfPack = {
  name: 'UserSettings02',
  StrokeRounded: IconUserSettings02StrokeRounded,
  DuotoneRounded: IconUserSettings02DuotoneRounded,
  TwotoneRounded: IconUserSettings02TwotoneRounded,
  SolidRounded: IconUserSettings02SolidRounded,
  BulkRounded: IconUserSettings02BulkRounded,
  StrokeSharp: IconUserSettings02StrokeSharp,
  SolidSharp: IconUserSettings02SolidSharp,
};