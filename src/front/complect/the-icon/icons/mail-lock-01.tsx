import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 5L8.91302 8.91697C11.4616 10.361 12.5384 10.361 15.087 8.91697L22 5',
  d2: 'M11.9942 19.4954C11.0292 19.4954 10.0644 19.4832 9.0947 19.4588C5.94803 19.3797 4.3747 19.3403 3.24424 18.2052C2.11376 17.07 2.08109 15.5377 2.01576 12.4729C1.99475 11.4875 1.99474 10.5079 2.01575 9.52248C2.08109 6.45778 2.11375 4.92543 3.24423 3.7903C4.3747 2.65517 5.94803 2.61563 9.09469 2.53655C11.034 2.48781 12.9543 2.48781 14.8937 2.53656C18.0404 2.61565 19.6136 2.65519 20.7442 3.79031C21.8746 4.92544 21.9073 6.45779 21.9726 9.5225C21.9831 10.0152 21.9884 10.0066 21.9884 10.4978',
  d3: 'M16.7394 15.6771L16.7394 14.2868C16.7394 14.0814 16.7479 13.8735 16.8216 13.6817C17.0175 13.1712 17.5365 12.5024 18.4815 12.5024C19.4264 12.5024 19.9659 13.1712 20.1618 13.6817C20.2354 13.8735 20.244 14.0814 20.244 14.2868L20.244 15.6771M16.8089 21.5H20.1949C21.1917 21.5 21.9998 20.6934 21.9998 19.6984V17.6971C21.9998 16.7021 21.1917 15.8955 20.1949 15.8955H16.8089C15.812 15.8955 15.0039 16.7021 15.0039 17.6971V19.6984C15.0039 20.6934 15.812 21.5 16.8089 21.5Z',
  d4: 'M14.9011 19.4705C12.9606 19.5176 11.0392 19.5176 9.09871 19.4705C5.95021 19.394 4.37596 19.3558 3.24484 18.2591C2.11371 17.1623 2.08102 15.6818 2.01565 12.7205C1.99463 11.7684 1.99462 10.822 2.01564 9.86983C2.06068 7.82997 2.0902 6.49271 2.47399 5.49951L11.9999 10.3293L21.5258 5.49951C21.9096 6.49271 21.9391 7.82997 21.9841 9.86985C22.0052 10.822 22.0052 11.7684 21.9841 12.7205C21.9454 14.4757 21.9181 15.7108 21.6668 16.654C21.4785 16.3757 21.2208 16.1557 20.9196 16.0219C20.7412 15.9427 20.5362 15.9075 20.2499 15.8918V14.1909C20.2499 13.2585 19.4664 12.5027 18.4999 12.5027C17.5334 12.5027 16.7499 13.2585 16.7499 14.1909V15.8918C16.4636 15.9075 16.2586 15.9427 16.0802 16.0219C15.6514 16.2123 15.3107 16.5775 15.1331 17.0372C14.9999 17.3818 14.9999 17.8189 14.9999 18.6929C14.9999 19.0004 14.9999 19.2537 15.0057 19.468C14.971 19.4688 14.9361 19.4696 14.9011 19.4705Z',
  d5: 'M1.99988 4.99902L8.9129 8.91775C11.4615 10.3624 12.5383 10.3624 15.0869 8.91775L21.9999 4.99902',
  d6: 'M11.9999 19.5057C11.0344 19.5057 10.069 19.4935 9.09871 19.4691C5.95021 19.3899 4.37596 19.3504 3.24484 18.2145C2.11371 17.0785 2.08102 15.5451 2.01565 12.4781C1.99463 11.492 1.99462 10.5117 2.01564 9.52558C2.08102 6.45867 2.1137 4.92522 3.24483 3.78928C4.37596 2.65333 5.95021 2.61376 9.0987 2.53462C11.0392 2.48585 12.9606 2.48585 14.9011 2.53463C18.0496 2.61378 19.6238 2.65335 20.755 3.78929C21.8861 4.92523 21.9188 6.45868 21.9841 9.52559C21.9946 10.0186 21.9999 10.01 21.9999 10.5016',
  d7: 'M16.754 15.6811V14.2914C16.754 14.0861 16.7626 13.8783 16.836 13.6866C17.0314 13.1763 17.549 12.5078 18.4913 12.5078C19.4337 12.5078 19.9716 13.1763 20.167 13.6866C20.2404 13.8783 20.249 14.0861 20.249 14.2914V15.6811M16.8233 21.5016H20.2C21.1941 21.5016 22 20.6953 22 19.7008V17.7003C22 16.7057 21.1941 15.8995 20.2 15.8995H16.8233C15.8292 15.8995 15.0233 16.7057 15.0233 17.7003V19.7008C15.0233 20.6953 15.8292 21.5016 16.8233 21.5016Z',
  d8: 'M12 19.5C11.0345 19.5 10.0691 19.4878 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2094C2.11383 17.0739 2.08114 15.5412 2.01577 12.4756C1.99475 11.4899 1.99474 10.5101 2.01576 9.52438C2.08114 6.45885 2.11382 4.92608 3.24495 3.79065C4.37608 2.65521 5.95033 2.61566 9.09882 2.53656C11.0393 2.48781 12.9607 2.48781 14.9012 2.53657C18.0497 2.61568 19.6239 2.65523 20.7551 3.79066C21.8862 4.92609 21.9189 6.45886 21.9842 9.52439C21.9947 10.0172 22 10.0086 22 10.5',
  d9: 'M15.5796 9.787L19.8154 7.38697C20.1764 7.18242 20.3569 7.08014 20.5038 7.16109C20.6506 7.24203 20.6603 7.4448 20.6796 7.8503C20.7057 8.39687 20.7198 9.03051 20.7358 9.7797C20.7434 10.1321 20.7481 9.82737 20.7502 9.97991C20.7578 10.5398 21.1962 10.9999 21.7562 10.9999C22.2995 10.9999 22.7542 10.5658 22.7494 10.0225C22.748 9.85578 22.7428 10.1538 22.7339 9.73715L22.7323 9.66177C22.701 8.19628 22.6752 6.98537 22.5046 6.00416C22.3228 4.9586 21.964 4.08311 21.2145 3.33174C20.7911 2.90728 20.3248 2.6077 19.8089 2.39389C19.7304 2.35104 19.6463 2.31873 19.5586 2.29811C19.2288 2.18184 18.8795 2.09616 18.5092 2.03176C17.5083 1.85765 16.2664 1.82652 14.757 1.78868L14.6822 1.78681C12.7264 1.73773 11.2734 1.73774 9.31758 1.78681L9.24273 1.78869C7.73337 1.82652 6.49149 1.85765 5.49052 2.03175C4.42815 2.21654 3.53864 2.57641 2.78524 3.33174C2.03578 4.08311 1.67693 4.9586 1.49514 6.00416C1.32453 6.98538 1.29871 8.19623 1.26746 9.66175L1.26585 9.73714C1.24455 10.7351 1.24456 11.265 1.26586 12.2629L1.26747 12.3383C1.29872 13.8038 1.32454 15.0146 1.49515 15.9959C1.67695 17.0414 2.03579 17.9169 2.78525 18.6683C3.53865 19.4236 4.42817 19.7835 5.49054 19.9683C6.4915 20.1424 7.73338 20.1735 9.24273 20.2113L9.3176 20.2132C9.99916 20.2303 10.1055 20.2414 11.002 20.2466C11.5531 20.2498 11.9997 19.8032 11.9997 19.252C11.9997 18.7008 11.553 18.2538 11.0019 18.2506C10.1198 18.2454 10.0338 18.2345 9.36779 18.2178C7.76484 18.1776 6.67161 18.1476 5.83343 18.0018C5.04015 17.8638 4.57798 17.6374 4.20109 17.2595C3.82026 16.8777 3.59764 16.4218 3.46419 15.6543C3.32249 14.8393 3.29723 13.7803 3.26392 12.2203C3.24322 11.2508 3.24321 10.7492 3.26391 9.7797C3.27991 9.03061 3.29404 8.39704 3.32011 7.85053C3.33945 7.44501 3.34912 7.24225 3.49596 7.1613C3.6428 7.08035 3.82331 7.18263 4.18433 7.38719L8.41973 9.787C9.71934 10.5234 10.8185 11 11.9997 11C13.1809 11 14.28 10.5234 15.5796 9.787Z',
  d10: 'M20.9999 15.2492V14.1875C20.9999 12.8158 19.8546 11.75 18.4999 11.75C17.1451 11.75 15.9999 12.8158 15.9999 14.1875V15.2492C15.9247 15.272 15.8501 15.2993 15.7759 15.3322C15.1558 15.6074 14.6788 16.1277 14.4335 16.762C14.3276 17.036 14.2869 17.3173 14.268 17.6139C14.2499 17.8994 14.2499 18.2471 14.2499 18.6639V18.7111C14.2499 19.1278 14.2499 19.4756 14.268 19.7611C14.2869 20.0577 14.3276 20.339 14.4335 20.613C14.6788 21.2474 15.1558 21.7676 15.7759 22.0428C16.0483 22.1637 16.3271 22.2093 16.6127 22.2302C16.8843 22.25 17.2133 22.25 17.5987 22.25H19.401C19.7864 22.25 20.1155 22.25 20.3871 22.2302C20.6726 22.2093 20.9515 22.1637 21.2238 22.0428C21.844 21.7676 22.321 21.2474 22.5662 20.613C22.6721 20.339 22.7128 20.0577 22.7317 19.7611C22.7499 19.4756 22.7499 19.1279 22.7499 18.7111V18.6639C22.7499 18.2472 22.7499 17.8994 22.7317 17.6139C22.7128 17.3173 22.6721 17.036 22.5662 16.762C22.321 16.1277 21.844 15.6074 21.2238 15.3322C21.1497 15.2993 21.075 15.272 20.9999 15.2492ZM17.4999 14.1875C17.4999 13.6952 17.9217 13.25 18.4999 13.25C19.0781 13.25 19.4999 13.6952 19.4999 14.1875V15.125H17.4999V14.1875Z',
  d11: 'M22 11V2.5H2V19.5H12',
  d12: 'M2 6L12 11L22 6',
  d13: 'M20.5 16V14.5C20.5 13.3954 19.6046 12.5 18.5 12.5C17.3954 12.5 16.5 13.3954 16.5 14.5V16M15 16H22V21.5H15V16Z',
  d14: 'M1.25 2.72368C1.25 2.18593 1.68754 1.75 2.22727 1.75H21.7727C22.3125 1.75 22.75 2.18593 22.75 2.72368V10.5H20.796V7.60217L12.0003 12L3.20508 7.6024V18.3026H12V20.25H2.22727C1.68754 20.25 1.25 19.8141 1.25 19.2763V2.72368Z',
  d15: 'M18.5 11.75C16.9812 11.75 15.75 12.9812 15.75 14.5V15.25H14.25V22.25H22.75V15.25H21.25V14.5C21.25 12.9812 20.0188 11.75 18.5 11.75ZM19.75 14.5V15.25H17.25V14.5C17.25 13.8096 17.8096 13.25 18.5 13.25C19.1904 13.25 19.75 13.8096 19.75 14.5Z',
};

export const IconMailLock01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-lock-01-stroke-rounded IconMailLock01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMailLock01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-lock-01-duotone-rounded IconMailLock01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconMailLock01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-lock-01-twotone-rounded IconMailLock01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailLock01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-lock-01-solid-rounded IconMailLock01SolidRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailLock01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-lock-01-bulk-rounded IconMailLock01BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconMailLock01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-lock-01-stroke-sharp IconMailLock01StrokeSharp"
    >
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

export const IconMailLock01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-lock-01-solid-sharp IconMailLock01SolidSharp"
    >
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

export const iconPackOfMailLock01: TheIconSelfPack = {
  name: 'MailLock01',
  StrokeRounded: IconMailLock01StrokeRounded,
  DuotoneRounded: IconMailLock01DuotoneRounded,
  TwotoneRounded: IconMailLock01TwotoneRounded,
  SolidRounded: IconMailLock01SolidRounded,
  BulkRounded: IconMailLock01BulkRounded,
  StrokeSharp: IconMailLock01StrokeSharp,
  SolidSharp: IconMailLock01SolidSharp,
};