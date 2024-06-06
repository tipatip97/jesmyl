import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.43876 16.2353C5.43876 15.9728 5.43048 15.7223 5.41491 15.4832M5.41491 15.4832C5.27345 13.3108 4.53006 12.0839 3.9244 11.4706C2.87884 12.5294 0.464067 16.7647 3.41663 19.9412L8.18741 17.8235C8.28323 18.2095 8.39847 18.5927 8.53467 18.9717C8.84621 19.8385 9.00197 20.272 9.51962 20.636C10.0373 21 10.6089 21 11.7522 21H12.2478C13.3911 21 13.9627 21 14.4804 20.636C14.998 20.272 15.1538 19.8385 15.4653 18.9717C15.6015 18.5927 15.7168 18.2095 15.8126 17.8235L20.5834 19.9412C23.5359 16.7647 21.1212 12.5294 20.0756 11.4706C19.4699 12.0839 18.7265 13.3108 18.5851 15.4832M5.41491 15.4832L6.51316 15.0678C7.12169 14.8376 7.42596 14.7225 7.59991 14.4928C7.77386 14.2631 7.80478 13.9083 7.86661 13.1989C8.25599 8.73199 10.4257 4.62034 12 3C13.5743 4.62034 15.744 8.73199 16.1334 13.1989C16.1952 13.9083 16.2261 14.2631 16.4001 14.4928C16.574 14.7225 16.8783 14.8376 17.4868 15.0678L18.5851 15.4832M18.5612 16.2353C18.5612 15.9728 18.5695 15.7223 18.5851 15.4832',
  d2: 'M12 10L12 11',
  d3: 'M20 8V7M20 4V3',
  d4: 'M4 8V7M4 4V3',
  d5: 'M7.86661 13.1989C8.25599 8.73199 10.4257 4.62034 12 3C13.5743 4.62034 15.744 8.73199 16.1334 13.1989C16.1952 13.9083 16.2261 14.2631 16.4001 14.4928C16.574 14.7225 16.8783 14.8376 17.4868 15.0678L18.5851 15.4832C18.7265 13.3108 19.4699 12.0839 20.0756 11.4706C21.1212 12.5294 23.5359 16.7647 20.5834 19.9412L15.8126 17.8235C15.7168 18.2095 15.6015 18.5927 15.4653 18.9717C15.1538 19.8385 14.998 20.272 14.4804 20.636C13.9627 21 13.3911 21 12.2478 21H11.7522C10.6089 21 10.0373 21 9.51962 20.636C9.00197 20.272 8.84621 19.8385 8.53467 18.9717C8.39847 18.5927 8.28323 18.2095 8.18741 17.8235L3.41663 19.9412C0.464067 16.7647 2.87884 12.5294 3.9244 11.4706C4.53006 12.0839 5.27345 13.3108 5.41491 15.4832L6.51316 15.0678C7.12169 14.8376 7.42596 14.7225 7.59991 14.4928C7.77386 14.2631 7.80478 13.9083 7.86661 13.1989Z',
  d6: 'M9.08767 21.2495C9.80311 21.7526 11.011 21.7513 11.9995 21.75C12.9879 21.7513 14.1949 21.7526 14.9104 21.2495C15.6244 20.7474 15.8552 20.103 16.1351 19.3219C16.1789 19.2001 16.2552 18.9813 16.2949 18.8588L20.2777 20.6267C20.5704 20.7566 20.9132 20.6863 21.1313 20.4518C22.8229 18.6319 22.9623 16.5 22.5583 14.7436C22.1618 13.0199 21.2285 11.5721 20.6078 10.9436C20.4669 10.8009 20.2747 10.7206 20.0742 10.7206C19.8736 10.7206 19.6814 10.8009 19.5405 10.9436C18.9069 11.5853 18.2295 12.6935 17.9464 14.4403C17.9464 14.4403 17.2452 14.1741 17.1124 14.1083C17.0704 14.0927 16.9814 14.0277 16.9613 13.8925C16.9317 13.7283 16.9113 13.5027 16.8791 13.1338C16.6761 10.8042 16.0107 8.57934 15.196 6.72968C14.3855 4.88961 13.4055 3.37172 12.5365 2.47736C12.3953 2.33201 12.2021 2.25 11.9995 2.25C11.7968 2.25 11.6028 2.33201 11.4616 2.47736C10.5926 3.37172 9.6125 4.88961 8.80205 6.72968C7.98737 8.57934 7.322 10.8042 7.11893 13.1338C7.08677 13.5027 7.06636 13.7283 7.03671 13.8925C7.01666 14.0277 6.92767 14.0927 6.88567 14.1083C6.75285 14.1741 6.0516 14.4403 6.0516 14.4403C5.76851 12.6935 5.09114 11.5853 4.45754 10.9436C4.31663 10.8009 4.12443 10.7206 3.92388 10.7206C3.72333 10.7206 3.53113 10.8009 3.39022 10.9436C2.76958 11.5721 1.83627 13.0199 1.43979 14.7436C1.0358 16.5 1.17519 18.6319 2.86677 20.4518C3.0848 20.6863 3.4277 20.7566 3.72039 20.6267L7.7031 18.8588C7.74283 18.9813 7.8192 19.2001 7.86298 19.3219C8.14283 20.103 8.37366 20.7474 9.08767 21.2495ZM13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11V10Z',
  d7: 'M5 3.25C5 2.69772 4.55228 2.25 4 2.25C3.44772 2.25 3 2.69772 3 3.25V4.25C3 4.80228 3.44772 5.25 4 5.25C4.55228 5.25 5 4.80228 5 4.25V3.25ZM5 7.25C5 6.69772 4.55228 6.25 4 6.25C3.44772 6.25 3 6.69772 3 7.25V8.25C3 8.80228 3.44772 9.25 4 9.25C4.55228 9.25 5 8.80228 5 8.25V7.25ZM21 3.25C21 2.69772 20.5523 2.25 20 2.25C19.4477 2.25 19 2.69772 19 3.25V4.25C19 4.80228 19.4477 5.25 20 5.25C20.5523 5.25 21 4.80228 21 4.25V3.25ZM21 7.25C21 6.69772 20.5523 6.25 20 6.25C19.4477 6.25 19 6.69772 19 7.25V8.25C19 8.80228 19.4477 9.25 20 9.25C20.5523 9.25 21 8.80228 21 8.25V7.25Z',
  d8: 'M11.9995 21.75C11.011 21.7513 9.80311 21.7526 9.08767 21.2495C8.37366 20.7474 8.14283 20.103 7.86298 19.3219C7.8192 19.2001 7.74283 18.9813 7.7031 18.8588L3.72039 20.6267C3.4277 20.7566 3.0848 20.6863 2.86677 20.4518C1.17519 18.6319 1.0358 16.5 1.43979 14.7436C1.83627 13.0199 2.76958 11.5721 3.39022 10.9436C3.53113 10.8009 3.72333 10.7206 3.92388 10.7206C4.12443 10.7206 4.31663 10.8009 4.45754 10.9436C5.09114 11.5853 5.76851 12.6935 6.0516 14.4403C6.0516 14.4403 6.75285 14.1741 6.88567 14.1083C6.92767 14.0927 7.01666 14.0277 7.03671 13.8925C7.06636 13.7283 7.08677 13.5027 7.11893 13.1338C7.322 10.8042 7.98737 8.57934 8.80205 6.72968C9.6125 4.88961 10.5926 3.37172 11.4616 2.47736C11.6028 2.33201 11.7968 2.25 11.9995 2.25C12.2021 2.25 12.3953 2.33201 12.5365 2.47736C13.4055 3.37172 14.3855 4.88961 15.196 6.72968C16.0107 8.57934 16.6761 10.8042 16.8791 13.1338C16.9113 13.5027 16.9317 13.7283 16.9613 13.8925C16.9814 14.0277 17.0704 14.0927 17.1124 14.1083C17.2452 14.1741 17.9464 14.4403 17.9464 14.4403C18.2295 12.6935 18.9069 11.5853 19.5405 10.9436C19.6814 10.8009 19.8736 10.7206 20.0742 10.7206C20.2747 10.7206 20.4669 10.8009 20.6078 10.9436C21.2285 11.5721 22.1618 13.0199 22.5583 14.7436C22.9623 16.5 22.8229 18.6319 21.1313 20.4518C20.9132 20.6863 20.5704 20.7566 20.2777 20.6267L16.2949 18.8588C16.2552 18.9813 16.1789 19.2001 16.1351 19.3219C15.8552 20.103 15.6244 20.7474 14.9104 21.2495C14.1949 21.7526 12.9879 21.7513 11.9995 21.75Z',
  d9: 'M12 9C12.5523 9 13 9.44772 13 10L13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11L11 10C11 9.44772 11.4477 9 12 9Z',
  d10: 'M5.43876 17C5.43876 16.7375 5.43048 15.7223 5.41491 15.4832M5.41491 15.4832C5.27345 13.3108 4.53006 12.0839 3.9244 11.4706C2.87884 12.5294 0.464067 16.7647 3.41663 19.9412L8 18L9 21H15L16 18L20.5834 19.9412C23.5359 16.7647 21.1212 12.5294 20.0756 11.4706C19.4699 12.0839 18.7265 13.3108 18.5851 15.4832M5.41491 15.4832L7.59991 14.4928C7.59991 8 10.4257 4.62034 12 3C13.5743 4.62034 16.4001 8 16.4001 14.4928L18.5851 15.4832M18.5612 17C18.5612 16.7375 18.5695 15.7223 18.5851 15.4832',
  d11: 'M12 9.5L12 11.5',
  d12: 'M20 9V7M20 5V3',
  d13: 'M4 9V7M4 5V3',
  d14: 'M12.5379 2.55362L12 2L11.4621 2.55362C9.84617 4.21671 6.99251 7.81739 6.85503 14.257L6.0414 14.6258C5.75224 12.9163 5.08379 11.8274 4.45803 11.1937L3.92437 10.6533L3.3907 11.1937C2.77007 11.8222 1.83675 13.27 1.44027 14.9937C1.03628 16.7501 1.17568 18.882 2.86726 20.7019L3.22511 21.0869L7.54511 19.2572L8.4594 22.0001H15.5405L16.4548 19.2572L20.7748 21.0869L21.1327 20.7019C22.8243 18.882 22.9637 16.7501 22.5597 14.9937C22.1632 13.27 21.2299 11.8222 20.6092 11.1937L20.0756 10.6533L19.5419 11.1937C18.9161 11.8274 18.2477 12.9163 17.9585 14.6258L17.1449 14.257C17.0074 7.81739 14.1538 4.21672 12.5379 2.55362ZM11.2505 9.75V11.75H12.7505V9.75H11.2505Z',
  d15: 'M21.0005 3.25V5.25H19.0005V3.25H21.0005ZM21.0005 7.25V9.25H19.0005V7.25H21.0005Z',
  d16: 'M5.00049 3.25V5.25H3.00049V3.25H5.00049ZM5.00049 7.25V9.25H3.00049V7.25H5.00049Z',
};

export const IconAircraftGameStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="aircraft-game-stroke-rounded IconAircraftGameStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAircraftGameDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="aircraft-game-duotone-rounded IconAircraftGameDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconAircraftGameTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="aircraft-game-twotone-rounded IconAircraftGameTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconAircraftGameSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="aircraft-game-solid-rounded IconAircraftGameSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconAircraftGameBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="aircraft-game-bulk-rounded IconAircraftGameBulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAircraftGameStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="aircraft-game-stroke-sharp IconAircraftGameStrokeSharp"
    >
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
    </TheIconWrapper>
  );
};

export const IconAircraftGameSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="aircraft-game-solid-sharp IconAircraftGameSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAircraftGame: TheIconSelfPack = {
  name: 'AircraftGame',
  StrokeRounded: IconAircraftGameStrokeRounded,
  DuotoneRounded: IconAircraftGameDuotoneRounded,
  TwotoneRounded: IconAircraftGameTwotoneRounded,
  SolidRounded: IconAircraftGameSolidRounded,
  BulkRounded: IconAircraftGameBulkRounded,
  StrokeSharp: IconAircraftGameStrokeSharp,
  SolidSharp: IconAircraftGameSolidSharp,
};