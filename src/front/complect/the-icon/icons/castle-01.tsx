import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.1455 22L17.3926 9.9799C17.2509 9.00834 17.1801 8.52256 17.3325 8.07465C17.6506 7.13993 18.6483 6.78378 19.112 5.98145C19.1804 5.86316 19.2145 5.72963 19.2826 5.46257L19.8491 3.24254C19.9951 2.67057 20.0681 2.38459 19.9148 2.19229C19.7616 2 19.4607 2 18.8588 2H17.795C17.1256 2 17.0958 2.01971 16.8472 2.62861L16.3398 3.87139C16.0912 4.48029 16.0615 4.5 15.392 4.5H14.8784C14.1904 4.5 14.0155 4.37251 13.8774 3.69612L13.6953 2.80388C13.5572 2.12749 13.3823 2 12.6943 2H11.3057C10.6177 2 10.4428 2.12749 10.3047 2.80388L10.1226 3.69612C9.98447 4.37251 9.80956 4.5 9.1216 4.5H8.60799C7.93855 4.5 7.90884 4.48029 7.66022 3.87139L7.15277 2.62861C6.90415 2.01971 6.87444 2 6.205 2H5.14116C4.53934 2 4.23843 2 4.08517 2.19229C3.93191 2.38459 4.00489 2.67057 4.15086 3.24254L4.7174 5.46257C4.78555 5.72963 4.81963 5.86316 4.88799 5.98145C5.3517 6.78378 6.34945 7.13992 6.6675 8.07465C6.8199 8.52256 6.74906 9.00834 6.60738 9.9799L4.85455 22',
  d2: 'M9 22L9.60777 18.9611C9.75132 18.2434 9.8231 17.8845 10.0155 17.6192C10.4935 16.9602 11.2612 17 12 17C12.7388 17 13.5065 16.9602 13.9845 17.6192C14.1769 17.8845 14.2487 18.2434 14.3922 18.9611L15 22',
  d3: 'M3 22H21',
  d4: 'M7 8H17',
  d5: 'M15 11L17 11',
  d6: 'M7 13H9',
  d7: 'M14.3922 18.9616C14.2487 18.2439 14.1769 17.885 13.9845 17.6197C13.5322 16.9962 12.8206 16.9982 12.1194 17.0002C12.0795 17.0003 12.0397 17.0005 12 17.0005C11.9603 17.0005 11.9205 17.0003 11.8806 17.0002C11.1794 16.9982 10.4678 16.9962 10.0155 17.6197C9.8231 17.885 9.75132 18.2439 9.60777 18.9616L9.00096 21.9957H4.85547L6.60831 9.97556C6.74999 9.004 6.82082 8.51822 6.66842 8.07031H17.3334C17.181 8.51822 17.2519 9.004 17.3935 9.97556L19.1464 21.9957H14.999L14.3922 18.9616Z',
  d8: 'M9 22.0005L9.60777 18.9616C9.75132 18.2439 9.8231 17.885 10.0155 17.6197C10.4935 16.9607 11.2612 17.0005 12 17.0005C12.7388 17.0005 13.5065 16.9607 13.9845 17.6197C14.1769 17.885 14.2487 18.2439 14.3922 18.9616L15 22.0005',
  d9: 'M7.84701 2.34518L8.35445 3.58796C8.39456 3.68619 8.48941 3.75003 8.59551 3.75008L9.13842 3.75005C9.26048 3.74958 9.36319 3.66577 9.3876 3.54617L9.56976 2.65394C9.63845 2.31745 9.7532 1.86144 10.1332 1.56046C10.5062 1.26502 10.9731 1.25008 11.3056 1.25008H12.6942C13.0267 1.25008 13.4936 1.26502 13.8666 1.56045C14.2466 1.86144 14.3613 2.31745 14.43 2.65394L14.6122 3.54617C14.6366 3.66577 14.7393 3.74958 14.8613 3.75005L15.4043 3.75008C15.5104 3.75003 15.6052 3.68618 15.6453 3.58796L16.1528 2.34518C16.2893 2.01068 16.4356 1.66864 16.7486 1.46103C17.061 1.25387 17.434 1.25008 17.7949 1.25008L18.8993 1.25007C19.4662 1.24989 20.1113 1.23571 20.5012 1.72493C20.7539 2.04191 20.7667 2.39634 20.7401 2.65253C20.7169 2.87565 20.65 3.1375 20.5859 3.38815L19.996 5.70022C19.8499 6.27734 19.5532 6.71522 19.1366 7.11922C19.048 7.20518 18.928 7.25006 18.8046 7.25006H5.1952C5.07172 7.25006 4.9518 7.20518 4.86316 7.11922C4.44655 6.71522 4.14982 6.27734 4.0038 5.70022L3.41384 3.38817C3.34977 3.13751 3.28285 2.87566 3.2597 2.65253C3.23311 2.39634 3.24591 2.04191 3.49855 1.72493C3.88845 1.23571 4.53354 1.24989 5.10045 1.25007L6.20489 1.25008C6.56574 1.25008 6.93879 1.25387 7.25112 1.46102C7.56414 1.66864 7.71043 2.01068 7.84701 2.34518Z',
  d10: 'M12.0001 15.5008C11.9632 15.5008 11.9245 15.5006 11.8843 15.5004C11.564 15.499 11.1463 15.4971 10.7556 15.5794C10.2763 15.6803 9.78193 15.9149 9.40854 16.4296C9.24023 16.6617 9.14397 16.9111 9.0716 17.1678C9.0037 17.4086 8.945 17.7021 8.87769 18.0388L8.33544 20.75H4.2793L5.22521 14.2634C5.26091 14.0186 5.27876 13.8962 5.36327 13.8231C5.44778 13.75 5.57149 13.75 5.81893 13.75H9.0004C9.41461 13.75 9.7504 13.4142 9.7504 13C9.7504 12.5858 9.41461 12.25 9.0004 12.25H6.21266C5.88992 12.25 5.72855 12.25 5.63881 12.1462C5.54908 12.0425 5.57236 11.8828 5.61894 11.5634L5.86564 9.87167C5.897 9.6566 5.92277 9.47425 5.94322 9.31821C5.97985 9.03874 5.99816 8.89901 6.08307 8.8245C6.16798 8.75 6.30295 8.75 6.5729 8.75L17.4279 8.75C17.6978 8.75 17.8328 8.75 17.9177 8.8245C18.0026 8.89901 18.021 9.03874 18.0576 9.31821C18.078 9.47425 18.1038 9.6566 18.1352 9.87167C18.1398 9.90368 18.1422 9.91972 18.1429 9.93283C18.1522 10.0947 18.0312 10.2347 17.8696 10.2489C17.8566 10.25 17.8404 10.25 17.808 10.25H15.0004C14.5862 10.25 14.2504 10.5858 14.2504 11C14.2504 11.4142 14.5862 11.75 15.0004 11.75H17.8902C18.1377 11.75 18.2614 11.75 18.3459 11.8231C18.4304 11.8962 18.4482 12.0186 18.4839 12.2634L19.7215 20.75L15.6648 20.75L15.1226 18.0388C15.0553 17.7022 14.9966 17.4086 14.9287 17.1678C14.8563 16.9111 14.7601 16.6617 14.5917 16.4296C14.2184 15.9149 13.724 15.6803 13.2447 15.5794C12.854 15.4971 12.4363 15.499 12.116 15.5004C12.0758 15.5006 12.0371 15.5008 12.0001 15.5008ZM14.1351 20.75L13.6569 18.359C13.5829 17.9888 13.5352 17.7529 13.485 17.5748C13.4375 17.4063 13.4016 17.3436 13.3775 17.3104C13.2729 17.1661 13.1444 17.0911 12.9357 17.0472C12.7108 16.9998 12.4605 17.0002 12.112 17.0007L12.0001 17.0008L11.8883 17.0007C11.5398 17.0002 11.2895 16.9998 11.0646 17.0472C10.8559 17.0911 10.7274 17.1661 10.6227 17.3104C10.5987 17.3436 10.5628 17.4063 10.5153 17.5748C10.4651 17.7529 10.4174 17.9888 10.3433 18.359L9.86515 20.75H14.1351Z',
  d11: 'M3.5 20.75C2.94772 20.75 2.5 21.1977 2.5 21.75C2.5 22.3023 2.94772 22.75 3.5 22.75H20.5C21.0523 22.75 21.5 22.3023 21.5 21.75C21.5 21.1977 21.0523 20.75 20.5 20.75H3.5Z',
  d12: 'M15.0004 11.75L17.8902 11.75C18.1377 11.75 18.2614 11.75 18.3459 11.8231C18.4304 11.8962 18.4482 12.0186 18.4839 12.2634L19.7215 20.75H4.2793L5.22521 14.2634C5.26091 14.0186 5.27876 13.8962 5.36327 13.8231C5.44778 13.75 5.57149 13.75 5.81893 13.75H9.0004C9.41461 13.75 9.7504 13.4142 9.7504 13C9.7504 12.5858 9.41461 12.25 9.0004 12.25H6.21266C5.88992 12.25 5.72855 12.25 5.63881 12.1462C5.54908 12.0425 5.57236 11.8828 5.61894 11.5634L5.86564 9.87167C5.897 9.6566 5.92277 9.47425 5.94322 9.31821C5.97985 9.03874 5.99816 8.89901 6.08307 8.82451C6.16798 8.75 6.30295 8.75 6.5729 8.75H17.4279C17.6978 8.75 17.8328 8.75 17.9177 8.82451C18.0026 8.89901 18.021 9.03874 18.0576 9.31821C18.078 9.47425 18.1038 9.6566 18.1352 9.87167C18.1398 9.90368 18.1422 9.91972 18.1429 9.93283C18.1522 10.0947 18.0312 10.2347 17.8696 10.2489C17.8566 10.25 17.8404 10.25 17.808 10.25L15.0004 10.25C14.5862 10.25 14.2504 10.5858 14.2504 11C14.2504 11.4142 14.5862 11.75 15.0004 11.75Z',
  d13: 'M11.8843 15.5004C11.9245 15.5006 11.9632 15.5008 12.0001 15.5008C12.0371 15.5008 12.0758 15.5006 12.116 15.5004C12.4363 15.499 12.854 15.4971 13.2447 15.5794C13.724 15.6803 14.2184 15.9149 14.5917 16.4296C14.7601 16.6617 14.8563 16.9111 14.9287 17.1678C14.9966 17.4086 15.0553 17.7022 15.1226 18.0388L15.7356 21.1037C15.8168 21.5098 15.5534 21.905 15.1472 21.9862C14.7411 22.0674 14.3459 21.804 14.2647 21.3978L13.6569 18.359C13.5829 17.9888 13.5352 17.7529 13.485 17.5748C13.4375 17.4063 13.4016 17.3436 13.3775 17.3104C13.2729 17.1661 13.1444 17.0911 12.9357 17.0472C12.7108 16.9998 12.4605 17.0002 12.112 17.0007C12.0758 17.0007 12.0386 17.0008 12.0001 17.0008C11.9617 17.0008 11.9245 17.0007 11.8883 17.0007C11.5398 17.0002 11.2895 16.9998 11.0646 17.0472C10.8559 17.0911 10.7274 17.1661 10.6227 17.3104C10.5987 17.3436 10.5628 17.4063 10.5153 17.5748C10.4651 17.7529 10.4174 17.9888 10.3433 18.359L9.73558 21.3978C9.65435 21.804 9.25923 22.0674 8.85306 21.9862C8.44689 21.905 8.18348 21.5098 8.26471 21.1037L8.87769 18.0388C8.945 17.7021 9.0037 17.4086 9.0716 17.1678C9.14397 16.9111 9.24023 16.6617 9.40854 16.4296C9.78193 15.9149 10.2763 15.6803 10.7556 15.5794C11.1463 15.4971 11.564 15.499 11.8843 15.5004Z',
  d14: 'M9 22.0002L9.5 17.0054H14.5L15 22.0002',
  d15: 'M3 22.0005H21',
  d16: 'M15 11.0117H18',
  d17: 'M6 13.021H9',
  d18: 'M4.91699 21.3877L6.50321 8.03614L17.5042 8.03613L19.0758 21.4029',
  d19: 'M6.35188 7.92611L3.99756 6.01572L3.9977 2.0095C3.9977 2.00398 4.00218 1.99951 4.0077 1.99951H7.47696C7.48248 1.99951 7.48696 2.00398 7.48696 2.0095V4.53188H10.0173L10.5155 2.00757C10.5164 2.00289 10.5205 1.99951 10.5253 1.99951H13.4861C13.4908 1.99951 13.4949 2.00288 13.4959 2.00755L13.9957 4.5119H16.4932V2.04533C16.4932 2.03981 16.4977 2.03534 16.5032 2.03534H19.9675C19.973 2.03534 19.9775 2.03976 19.9775 2.04524L20.0137 6.02257L17.6956 7.85336',
  d20: 'M7.5 1.25L4 1.25003V5.25L6.50081 7.25001H17.5008L20 5.25V1.25003H16.5V3.75003L14 3.75L13.5 1.25H10.5L10 3.75H7.5V1.25Z',
  d21: 'M21 22.75H3V20.75H21V22.75Z',
  d22: 'M9.50018 16.25C9.11487 16.25 8.79225 16.542 8.75391 16.9254L8.25391 21.9253L9.00048 22H4.85547L5.86102 13.75H9V12.25H6.04385L6.50092 8.5L17.5009 8.5L17.7142 10.25H15V11.75H17.897L19.1464 22H14.9999L15.7465 21.9253L15.2465 16.9254C15.2081 16.542 14.8855 16.25 14.5002 16.25H9.50018ZM14.2464 22H9.75392L10.1789 17.75H13.8214L14.2464 22Z',
} as const;

export const IconCastle01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-01-stroke-rounded IconCastle01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCastle01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-01-duotone-rounded IconCastle01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCastle01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-01-twotone-rounded IconCastle01TwotoneRounded"
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
        d={d.d8} 
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
    </TheIconWrapper>
  );
};

export const IconCastle01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-01-solid-rounded IconCastle01SolidRounded"
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCastle01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-01-bulk-rounded IconCastle01BulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCastle01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-01-stroke-sharp IconCastle01StrokeSharp"
    >
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
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCastle01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="castle-01-solid-sharp IconCastle01SolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCastle01: TheIconSelfPack = {
  name: 'Castle01',
  StrokeRounded: IconCastle01StrokeRounded,
  DuotoneRounded: IconCastle01DuotoneRounded,
  TwotoneRounded: IconCastle01TwotoneRounded,
  SolidRounded: IconCastle01SolidRounded,
  BulkRounded: IconCastle01BulkRounded,
  StrokeSharp: IconCastle01StrokeSharp,
  SolidSharp: IconCastle01SolidSharp,
};