import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 17L14.0228 17.5944C14.5374 15.7277 16.5114 14.6199 18.4318 15.1201C19.4149 15.3761 20.1934 16.0039 20.6501 16.806M22 20L20.9774 19.4056C20.4628 21.2723 18.4888 22.3801 16.5684 21.8799C15.6081 21.6298 14.8431 21.0251 14.3824 20.2496',
  d2: 'M21 13V11.5C21 7.02166 21 4.78249 19.6088 3.39124C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.39124C2 4.78249 2 7.02166 2 11.5C2 15.9783 2 18.2175 3.39124 19.6088C4.61763 20.8351 6.50289 20.9805 10 20.9977H11',
  d3: 'M2 11.5H21',
  d4: 'M12.5 6.5L16.5 6.5',
  d5: 'M3.39124 3.39124C2 4.78249 2 7.02166 2 11.5C2 15.9783 2 18.2175 3.39124 19.6088C4.78248 21 7.02165 21 11.5 21C12.8534 21 14.0024 21 14.9852 20.9616C14.772 20.7478 14.5879 20.5082 14.4371 20.2496C13.8416 19.2283 13.9996 18.0626 14.0841 17.5944C14.5892 15.7277 16.5272 14.6199 18.4125 15.1201C19.3776 15.3761 20.1419 16.0039 20.5903 16.806C20.6404 16.8902 20.6989 17.0108 20.7556 17.1618C21 15.8139 21 14.0082 21 11.5C21 7.02168 21 4.78248 19.6088 3.39124C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.39124ZM9 6.5C9 7.19036 8.44036 7.75 7.75 7.75C7.05964 7.75 6.5 7.19036 6.5 6.5C6.5 5.80964 7.05964 5.25 7.75 5.25C8.44036 5.25 9 5.80964 9 6.5ZM7.75 17.75C8.44036 17.75 9 17.1904 9 16.5C9 15.8096 8.44036 15.25 7.75 15.25C7.05964 15.25 6.5 15.8096 6.5 16.5C6.5 17.1904 7.05964 17.75 7.75 17.75Z',
  d6: 'M11.5591 0.749913H11.4448C9.25347 0.7499 7.5323 0.74989 6.18852 0.930507C4.81148 1.11559 3.71893 1.50263 2.86049 2.36083C2.00206 3.21903 1.61492 4.31128 1.42978 5.68794C1.29853 6.66393 1.26264 7.83905 1.25283 9.24886C1.24955 9.71932 1.24792 9.95456 1.39461 10.1022C1.54131 10.2499 1.77775 10.2499 2.25064 10.2499H20.7533C21.2262 10.2499 21.4626 10.2499 21.6093 10.1022C21.756 9.95456 21.7543 9.71932 21.7511 9.24886C21.7413 7.83905 21.7054 6.66393 21.5741 5.68794C21.389 4.31128 21.0018 3.21903 20.1434 2.36083C19.285 1.50263 18.1924 1.11559 16.8154 0.930507C15.4716 0.74989 13.7504 0.7499 11.5591 0.749913ZM6 5.5C6 4.67157 6.67157 4 7.5 4C8.32843 4 9 4.67157 9 5.5C9 6.32843 8.32843 7 7.5 7C6.67157 7 6 6.32843 6 5.5ZM11.5 5.5C11.5 5.08579 11.8358 4.75 12.25 4.75L16.25 4.75C16.6642 4.75 17 5.08579 17 5.5C17 5.91421 16.6642 6.25 16.25 6.25H12.25C11.8358 6.25 11.5 5.91421 11.5 5.5Z',
  d7: 'M20.7533 11.75H2.25064C1.77775 11.75 1.54131 11.75 1.39461 11.8977C1.24792 12.0454 1.24956 12.2806 1.25283 12.7511C1.26264 14.1609 1.29853 15.336 1.42979 16.312C1.61492 17.6886 2.00206 18.7809 2.8605 19.6391C3.71893 20.4973 4.81149 20.8843 6.18852 21.0694C7.63638 21.264 9.11005 21.258 10.5732 21.2519C10.8879 21.2507 11.2022 21.2494 11.5156 21.2501C11.7118 21.2505 11.8099 21.2507 11.868 21.1958C11.926 21.1409 11.9319 21.0291 11.9437 20.8056C11.9564 20.5648 12.0037 20.3261 12.0848 20.0977C12.1403 19.9413 12.1681 19.8631 12.1548 19.8061C12.1416 19.7491 12.0843 19.6932 11.9697 19.5815C11.6689 19.288 11.41 18.9382 11.1563 18.5953C11.0366 18.4335 10.918 18.2733 10.7968 18.1213C9.9356 17.0419 10.1128 15.4689 11.1925 14.608C11.7399 14.1716 12.4142 14.0019 13.0582 14.0813C13.2203 14.1013 13.3013 14.1113 13.3569 14.0968C13.4126 14.0822 13.4714 14.0389 13.5892 13.9522C15.0411 12.8828 16.9538 12.4665 18.8152 12.9511C19.685 13.1776 20.4673 13.5808 21.1274 14.1146C21.379 14.3179 21.728 14.194 21.7354 13.8706C21.7436 13.515 21.7484 13.142 21.7511 12.7511C21.7544 12.2806 21.756 12.0454 21.6093 11.8977C21.4626 11.75 21.2262 11.75 20.7533 11.75ZM7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15Z',
  d8: 'M13.5938 16.0161C14.6959 14.6064 16.5947 13.9231 18.4337 14.4021C19.4118 14.6568 20.2375 15.204 20.832 15.9265C21.1829 16.353 21.1216 16.9832 20.6952 17.3341C20.2687 17.685 19.6385 17.6237 19.2876 17.1972C18.9565 16.7949 18.4926 16.4841 17.9296 16.3375C16.5162 15.9694 15.0999 16.792 14.7366 18.1098C14.6367 18.4724 14.3418 18.7482 13.9734 18.8237C13.6049 18.8992 13.2253 18.7616 12.9908 18.4676L11.9682 17.1854C11.6238 16.7536 11.6947 16.1244 12.1264 15.7801C12.5582 15.4357 13.1874 15.5066 13.5318 15.9383L13.5938 16.0161ZM20.5262 18.6758C20.1579 18.7514 19.8631 19.0271 19.7632 19.3896C19.3999 20.7074 17.9837 21.53 16.5702 21.1619C16.0067 21.0151 15.5424 20.7038 15.2113 20.3009C14.8606 19.8742 14.2305 19.8125 13.8038 20.1632C13.3771 20.5138 13.3154 21.144 13.6661 21.5707C14.2606 22.2942 15.087 22.8423 16.0662 23.0973C17.9055 23.5764 19.8047 22.8927 20.9068 21.4824L20.9686 21.5599C21.3133 21.9914 21.9425 22.0618 22.374 21.7171C22.8056 21.3725 22.876 20.7432 22.5313 20.3117L21.5086 19.0313C21.274 18.7375 20.8944 18.6002 20.5262 18.6758Z',
  d9: 'M11.4448 0.75H11.5591C13.7504 0.749988 15.4716 0.749978 16.8154 0.930595C18.1924 1.11568 19.285 1.50272 20.1434 2.36091C21.0018 3.21911 21.389 4.31137 21.5741 5.68802C21.7054 6.66402 21.7413 7.83914 21.7511 9.24895C21.7544 9.71941 21.756 9.95464 21.6093 10.1023C21.4626 10.25 21.2262 10.25 20.7533 10.25H2.25064C1.77775 10.25 1.54131 10.25 1.39461 10.1023C1.24792 9.95464 1.24956 9.71941 1.25283 9.24895C1.26264 7.83914 1.29853 6.66402 1.42979 5.68802C1.61492 4.31137 2.00207 3.21911 2.8605 2.36091C3.71893 1.50272 4.81149 1.11568 6.18852 0.930595C7.5323 0.749978 9.25347 0.749988 11.4448 0.75Z',
  d10: 'M7.5 4C6.67157 4 6 4.67157 6 5.5C6 6.32843 6.67157 7 7.5 7C8.32843 7 9 6.32843 9 5.5C9 4.67157 8.32843 4 7.5 4ZM12.25 4.75C11.8358 4.75 11.5 5.08579 11.5 5.5C11.5 5.91421 11.8358 6.25 12.25 6.25L16.25 6.25C16.6642 6.25 17 5.91421 17 5.5C17 5.08579 16.6642 4.75 16.25 4.75L12.25 4.75Z',
  d11: 'M2.25064 11.75H20.7533C21.2262 11.75 21.4626 11.75 21.6093 11.8977C21.756 12.0454 21.7544 12.2806 21.7511 12.7511C21.7484 13.142 21.7436 13.515 21.7354 13.8706C21.728 14.194 21.379 14.3179 21.1274 14.1146C20.4673 13.5808 19.685 13.1776 18.8152 12.9511C16.9538 12.4665 15.0411 12.8828 13.5892 13.9522C13.4714 14.0389 13.4126 14.0822 13.3569 14.0968C13.3013 14.1113 13.2203 14.1013 13.0582 14.0813C12.4142 14.0019 11.7399 14.1716 11.1925 14.608C10.1128 15.4689 9.9356 17.0419 10.7968 18.1213C11.1751 18.5955 11.5269 19.1496 11.9697 19.5815C12.0843 19.6932 12.1416 19.7491 12.1548 19.8061C12.1681 19.8631 12.1403 19.9413 12.0848 20.0977C12.0037 20.3261 11.9564 20.5648 11.9437 20.8056C11.9319 21.0291 11.926 21.1409 11.868 21.1958C11.8099 21.2507 11.7118 21.2505 11.5156 21.2501C9.74529 21.2461 7.94784 21.3059 6.18852 21.0694C4.81149 20.8843 3.71893 20.4973 2.8605 19.6391C2.00206 18.7809 1.61492 17.6886 1.42979 16.312C1.29853 15.336 1.26264 14.1609 1.25283 12.7511C1.24956 12.2806 1.24792 12.0454 1.39461 11.8977C1.54131 11.75 1.77775 11.75 2.25064 11.75Z',
  d12: 'M6 16.5C6 15.6716 6.67157 15 7.5 15C8.32843 15 9 15.6716 9 16.5C9 17.3284 8.32843 18 7.5 18C6.67157 18 6 17.3284 6 16.5Z',
  d13: 'M12 16L13.5228 17.5944C14.0374 15.7277 16.0114 14.6199 17.9318 15.1201C18.9149 15.3761 19.6934 16.0039 20.1501 16.806M22 21L20.4774 19.4056C19.9628 21.2723 17.9888 22.3801 16.0684 21.8799C15.1081 21.6298 14.3431 21.0251 13.8824 20.2496',
  d14: 'M20 13V2H2V20H11',
  d15: 'M2 11H20',
  d16: 'M10 6.5L17 6.5M8 6.5H5',
  d17: 'M8 15.5H5',
  d18: 'M13.6582 16.0197C14.704 14.6198 16.5761 13.9299 18.3877 14.3936C19.5879 14.7009 20.5476 15.4578 21.1124 16.4327L19.4421 17.3674C19.1291 16.827 18.5925 16.3981 17.9033 16.2217C16.5449 15.874 15.1839 16.6509 14.8348 17.8956C14.7428 18.2235 14.4786 18.4775 14.143 18.5605C13.8075 18.6436 13.4524 18.5429 13.2134 18.297L11.75 16.7911L13.1399 15.4864L13.6582 16.0197ZM20.3571 18.4395C20.0216 18.5225 19.7573 18.7765 19.6654 19.1044C19.3162 20.3491 17.9552 21.126 16.5969 20.7783C15.9236 20.606 15.3961 20.1928 15.0802 19.6701L13.4277 20.6348C13.9972 21.5772 14.9402 22.3063 16.1125 22.6064C17.9241 23.0701 19.7961 22.3803 20.8419 20.9804L21.36 21.5136L22.75 20.209L21.2868 18.7031C21.0478 18.4571 20.6927 18.3564 20.3571 18.4395Z',
  d19: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H20C20.4142 1.25 20.75 1.58579 20.75 2V10.25H1.25V2ZM1.25 11.75H20.75V14.1728C20.1567 13.7209 19.463 13.379 18.6961 13.1827C16.8946 12.7215 15.036 13.1555 13.6659 14.2356L13.1786 13.7342L9.96568 16.7502L12.3154 19.1681C12.4628 19.3198 12.6287 19.4471 12.8073 19.5487L11.6999 20.1952L12.0352 20.75H2C1.58579 20.75 1.25 20.4142 1.25 20V11.75ZM17 6.75L10 6.75V4.75L17 4.75V6.75ZM5 4.75H8V6.75H5L5 4.75ZM8 15.25H5L5 17.25H8V15.25Z',
};

export const IconDatabaseSyncStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-stroke-rounded IconDatabaseSyncStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="7.75" 
        cy="6.5" 
        r="1.25" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="7.75" 
        cy="16.5" 
        r="1.25" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconDatabaseSyncDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-duotone-rounded IconDatabaseSyncDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <circle 
        cx="7.75" 
        cy="6.5" 
        r="1.25" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="7.75" 
        cy="16.5" 
        r="1.25" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconDatabaseSyncTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-twotone-rounded IconDatabaseSyncTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <circle 
        cx="7.75" 
        cy="6.5" 
        r="1.25" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="7.75" 
        cy="16.5" 
        r="1.25" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconDatabaseSyncSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-solid-rounded IconDatabaseSyncSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseSyncBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-bulk-rounded IconDatabaseSyncBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseSyncStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-stroke-sharp IconDatabaseSyncStrokeSharp"
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
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabaseSyncSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="database-sync-solid-sharp IconDatabaseSyncSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDatabaseSync: TheIconSelfPack = {
  name: 'DatabaseSync',
  StrokeRounded: IconDatabaseSyncStrokeRounded,
  DuotoneRounded: IconDatabaseSyncDuotoneRounded,
  TwotoneRounded: IconDatabaseSyncTwotoneRounded,
  SolidRounded: IconDatabaseSyncSolidRounded,
  BulkRounded: IconDatabaseSyncBulkRounded,
  StrokeSharp: IconDatabaseSyncStrokeSharp,
  SolidSharp: IconDatabaseSyncSolidSharp,
};