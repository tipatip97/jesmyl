import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 11H21',
  d2: 'M3 14V8C3 5.17157 3 3.75736 3.93037 2.87868C4.86073 2 6.35814 2 9.35294 2H14.6471C17.6419 2 19.1393 2 20.0696 2.87868C21 3.75736 21 5.17157 21 8V14C21 16.8284 21 18.2426 20.0696 19.1213C19.1393 20 17.6419 20 14.6471 20H9.35294C6.35814 20 4.86073 20 3.93037 19.1213C3 18.2426 3 16.8284 3 14Z',
  d3: 'M11.5 11L9.5 6',
  d4: 'M18 11L17 6',
  d5: 'M7 11V6',
  d6: 'M14 11V6',
  d7: 'M11 16L13 16',
  d8: 'M5 20V22M19 20V22',
  d9: 'M14.6471 20H9.35294C6.35814 20 4.86073 20 3.93037 19.1213C3 18.2426 3 16.8284 3 14V11H21V14V14C21 16.8284 21 18.2426 20.0696 19.1213C19.1393 20 17.6419 20 14.6471 20Z',
  d10: 'M9.12888 5.07179C9.64166 4.86668 10.2236 5.11609 10.4287 5.62888L12.4287 10.6289C12.6339 11.1417 12.3844 11.7236 11.8717 11.9287C11.3589 12.1339 10.7769 11.8844 10.5718 11.3717L8.57179 6.37166C8.36668 5.85887 8.61609 5.2769 9.12888 5.07179Z',
  d11: 'M16.8041 5.01937C17.3456 4.91106 17.8725 5.26227 17.9808 5.80383L18.9808 10.8038C19.0891 11.3454 18.7379 11.8722 18.1963 11.9805C17.6547 12.0888 17.1279 11.7376 17.0196 11.1961L16.0196 6.19606C15.9113 5.65451 16.2625 5.12768 16.8041 5.01937Z',
  d12: 'M7 5C7.55228 5 8 5.44772 8 6V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V6C6 5.44772 6.44772 5 7 5Z',
  d13: 'M14 5C14.5523 5 15 5.44772 15 6V11C15 11.5523 14.5523 12 14 12C13.4477 12 13 11.5523 13 11V6C13 5.44772 13.4477 5 14 5Z',
  d14: 'M14.647 1.25H9.353C7.94929 1.24997 6.80292 1.24995 5.89799 1.36486C4.95627 1.48443 4.12925 1.74331 3.46265 2.37288C2.78818 3.00987 2.5034 3.81289 2.37312 4.72807C2.24993 5.59348 2.24996 6.68548 2.25 8.0029L2.25 10.9979L2.25 11L2.25 11.0021L2.25 13.9971C2.24996 15.3145 2.24993 16.4065 2.37312 17.2719C2.5034 18.1871 2.78818 18.9901 3.46265 19.6271C4.12925 20.2567 4.95627 20.5156 5.89799 20.6351C6.80292 20.7501 7.94925 20.75 9.35296 20.75H14.647C16.0507 20.75 17.1971 20.7501 18.102 20.6351C19.0437 20.5156 19.8708 20.2567 20.5374 19.6271C21.2118 18.9901 21.4966 18.1871 21.6269 17.2719C21.7501 16.4065 21.75 15.3146 21.75 13.9972V8.00287C21.75 6.68551 21.7501 5.59346 21.6269 4.72807C21.4966 3.81289 21.2118 3.00987 20.5374 2.37288C19.8708 1.74331 19.0437 1.48443 18.102 1.36486C17.1971 1.24995 16.0507 1.24997 14.647 1.25ZM19.8002 9.64995V8.07495C19.8002 6.66696 19.7979 5.71473 19.6965 5.00284C19.6 4.32499 19.4313 4.01022 19.1986 3.7905C18.9581 3.56335 18.6016 3.39388 17.8566 3.29927C17.0889 3.2018 16.0671 3.19995 14.5811 3.19995H9.41931C7.93327 3.19995 6.91145 3.2018 6.14381 3.29927C5.39878 3.39388 5.04227 3.56335 4.80176 3.7905C4.56912 4.01022 4.40035 4.32499 4.30385 5.00284C4.20251 5.71473 4.20019 6.66696 4.20019 8.07495V9.64995C4.20019 9.93279 4.20019 10.0742 4.28806 10.1621C4.37593 10.25 4.51735 10.25 4.80019 10.25L19.2002 10.25C19.483 10.25 19.6245 10.25 19.7123 10.1621C19.8002 10.0742 19.8002 9.93279 19.8002 9.64995ZM13 17C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15L11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17L13 17Z',
  d15: 'M5 18.75C5.55228 18.75 6 19.1977 6 19.75V21.75C6 22.3023 5.55228 22.75 5 22.75C4.44772 22.75 4 22.3023 4 21.75V19.75C4 19.1977 4.44772 18.75 5 18.75ZM19 18.75C19.5523 18.75 20 19.1977 20 19.75V21.75C20 22.3023 19.5523 22.75 19 22.75C18.4477 22.75 18 22.3023 18 21.75V19.75C18 19.1977 18.4477 18.75 19 18.75Z',
  d16: 'M9.35301 1.25H14.647C16.0507 1.24997 17.1971 1.24995 18.102 1.36486C19.0437 1.48443 19.8708 1.74331 20.5374 2.37288C21.2118 3.00988 21.4966 3.81289 21.6269 4.72807C21.7501 5.59346 21.75 6.68551 21.75 8.00287V13.9972C21.75 15.3146 21.7501 16.4065 21.6269 17.2719C21.4966 18.1871 21.2118 18.9901 20.5374 19.6271C19.8708 20.2567 19.0437 20.5156 18.102 20.6351C17.1971 20.7501 16.0507 20.75 14.647 20.75H9.35296C7.94925 20.75 6.80292 20.7501 5.89799 20.6351C4.95628 20.5156 4.12925 20.2567 3.46265 19.6271C2.78819 18.9901 2.50341 18.1871 2.37312 17.2719C2.24993 16.4065 2.24996 15.3145 2.25 13.9971V11.0021L2.25 11L2.25 10.9979V8.0029C2.24996 6.68548 2.24993 5.59348 2.37312 4.72807C2.50341 3.81289 2.78819 3.00988 3.46265 2.37288C4.12925 1.74331 4.95628 1.48443 5.89799 1.36486C6.80292 1.24995 7.94929 1.24997 9.35301 1.25ZM19.8002 8.07495V9.64995C19.8002 9.93279 19.8002 10.0742 19.7123 10.1621C19.6245 10.25 19.483 10.25 19.2002 10.25H4.8002C4.51735 10.25 4.37593 10.25 4.28806 10.1621C4.2002 10.0742 4.2002 9.93279 4.2002 9.64995V8.07495C4.2002 6.66696 4.20251 5.71473 4.30385 5.00284C4.40035 4.32499 4.56912 4.01022 4.80176 3.7905C5.04227 3.56336 5.39878 3.39388 6.14381 3.29928C6.91145 3.2018 7.93328 3.19995 9.41931 3.19995H14.5811C16.0671 3.19995 17.0889 3.2018 17.8566 3.29928C18.6016 3.39388 18.9581 3.56336 19.1986 3.7905C19.4313 4.01022 19.6 4.32499 19.6965 5.00284C19.7979 5.71473 19.8002 6.66696 19.8002 8.07495Z',
  d17: 'M14 16C14 16.5523 13.5523 17 13 17L11 17C10.4477 17 10 16.5523 10 16C10 15.4477 10.4477 15 11 15L13 15C13.5523 15 14 15.4477 14 16Z',
  d18: 'M6 10.2502V6.00027C6 5.44798 6.44772 5.00027 7 5.00027C7.55228 5.00027 8 5.44798 8 6.00027V10.2502H6Z',
  d19: 'M10.1229 10.2502L8.57152 6.37166C8.36641 5.85887 8.61583 5.2769 9.12861 5.07179C9.64139 4.86668 10.2234 5.11609 10.4285 5.62888L12.277 10.2502H10.1229Z',
  d20: 'M13 10.2502V6.00027C13 5.44798 13.4477 5.00027 14 5.00027C14.5523 5.00027 15 5.44798 15 6.00027V10.2502H13Z',
  d21: 'M16.8302 10.2502L16.0194 6.19638C15.9111 5.65482 16.2623 5.128 16.8039 5.01968C17.3454 4.91137 17.8723 5.26259 17.9806 5.80415L18.8698 10.2502H16.8302Z',
  d22: 'M4 20.0391C4.55609 20.3797 5.19509 20.5466 5.89799 20.6359C5.93166 20.6401 5.96566 20.6443 6 20.6482V21.7507C6 22.303 5.55228 22.7507 5 22.7507C4.44772 22.7507 4 22.303 4 21.7507V20.0391Z',
  d23: 'M20 20.0391V21.7507C20 22.303 19.5523 22.7507 19 22.7507C18.4477 22.7507 18 22.303 18 21.7507V20.6482C18.0343 20.6443 18.0683 20.6401 18.102 20.6359C18.8049 20.5466 19.4439 20.3797 20 20.0391Z',
  d24: 'M5 19V22M19 19V22',
  d25: 'M3 11L21 11',
  d26: 'M3 19V2H21V19H3Z',
  d27: 'M11.5 11L9.5 6M18 11L17 6M7 11V6M14 11V6',
  d28: 'M10 16L14 16',
  d29: 'M4 22.25V19.25H6V22.25H4ZM18 22.25V19.25H20V22.25H18Z',
  d30: 'M10.4285 5.12842L12.4285 10.1284L10.5715 10.8712L8.57152 5.8712L10.4285 5.12842ZM17.9806 5.30369L18.9806 10.3037L17.0194 10.6959L16.0194 5.69592L17.9806 5.30369ZM8 5.49981V10.4998H6V5.49981H8ZM15 5.49981V10.4998H13V5.49981H15Z',
  d31: 'M20.775 1.74976H3.225C2.68652 1.74976 2.25 2.18569 2.25 2.72344V19.2761C2.25 19.8138 2.68652 20.2498 3.225 20.2498H20.775C21.3135 20.2498 21.75 19.8138 21.75 19.2761V2.72344C21.75 2.4652 21.6473 2.21754 21.4644 2.03494C21.2816 1.85234 21.0336 1.74976 20.775 1.74976ZM4.19922 9.74965V3.69702H19.7992V9.74965H4.19922ZM10 17.4998H14V15.4998H10V17.4998Z',
};

export const IconBookshelf02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-02-stroke-rounded IconBookshelf02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-02-duotone-rounded IconBookshelf02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-02-twotone-rounded IconBookshelf02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-02-solid-rounded IconBookshelf02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBookshelf02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-02-bulk-rounded IconBookshelf02BulkRounded"
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
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-02-stroke-sharp IconBookshelf02StrokeSharp"
    >
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-02-solid-sharp IconBookshelf02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBookshelf02: TheIconSelfPack = {
  name: 'Bookshelf02',
  StrokeRounded: IconBookshelf02StrokeRounded,
  DuotoneRounded: IconBookshelf02DuotoneRounded,
  TwotoneRounded: IconBookshelf02TwotoneRounded,
  SolidRounded: IconBookshelf02SolidRounded,
  BulkRounded: IconBookshelf02BulkRounded,
  StrokeSharp: IconBookshelf02StrokeSharp,
  SolidSharp: IconBookshelf02SolidSharp,
};