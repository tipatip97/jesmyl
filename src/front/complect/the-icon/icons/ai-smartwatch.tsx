import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.1213 17.1213C13.2426 18 11.8284 18 9 18C6.17157 18 4.75736 18 3.87868 17.1213C3 16.2426 3 14.8284 3 12C3 9.17157 3 7.75736 3.87868 6.87868C4.75736 6 6.17157 6 9 6C11.8284 6 13.2426 6 14.1213 6.87868',
  d2: 'M20.25 6.75L18 9L16 9M19.5 6.75C19.5 7.16421 19.8358 7.5 20.25 7.5C20.6642 7.5 21 7.16421 21 6.75C21 6.33579 20.6642 6 20.25 6C19.8358 6 19.5 6.33579 19.5 6.75Z',
  d3: 'M20.25 17.25L18 15L16 15M19.5 17.25C19.5 16.8358 19.8358 16.5 20.25 16.5C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18C19.8358 18 19.5 17.6642 19.5 17.25Z',
  d4: 'M20.25 12L12 12M19.5 12C19.5 12.4142 19.8358 12.75 20.25 12.75C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25C19.8358 11.25 19.5 11.5858 19.5 12Z',
  d5: 'M13 6L12.7276 4.91043C12.3931 3.5724 12.2258 2.90339 11.7499 2.49004C11.6973 2.44433 11.6423 2.40141 11.5852 2.36145C11.0688 2 10.3792 2 9 2C7.6208 2 6.93119 2 6.41476 2.36145C6.35765 2.40141 6.30268 2.44433 6.25006 2.49004C5.77415 2.90339 5.6069 3.5724 5.27239 4.91043L5 6',
  d6: 'M5 18L5.27239 19.0896C5.6069 20.4276 5.77415 21.0966 6.25006 21.51C6.30268 21.5557 6.35765 21.5986 6.41476 21.6386C6.93119 22 7.6208 22 9 22C10.3792 22 11.0688 22 11.5852 21.6386C11.6423 21.5986 11.6973 21.5557 11.7499 21.51C12.2258 21.0966 12.3931 20.4276 12.7276 19.0896L13 18',
  d7: 'M3.8699 17.1213C4.7398 18 6.13989 18 8.94006 18C11.7402 18 13.2602 18 14.1301 17.1213C15 16.2426 15 14.8284 15 12C15 9.17157 15 7.75736 14.1301 6.87868C13.2602 6 11.7402 6 8.94006 6C6.13989 6 4.7398 6 3.8699 6.87868C3 7.75736 3 9.17157 3 12C3 14.8284 3 16.2426 3.8699 17.1213Z',
  d8: 'M18.75 6.75C18.75 5.92157 19.4216 5.25 20.25 5.25C21.0784 5.25 21.75 5.92157 21.75 6.75C21.75 7.57843 21.0784 8.25 20.25 8.25C20.1156 8.25 19.9854 8.23233 19.8615 8.19919L18.5303 9.53033C18.3897 9.67098 18.1989 9.75 18 9.75L16 9.75C15.5858 9.75 15.25 9.41421 15.25 9C15.25 8.58579 15.5858 8.25 16 8.25L17.6893 8.25L18.8008 7.13853C18.7677 7.01461 18.75 6.88437 18.75 6.75Z',
  d9: 'M15.25 15C15.25 14.5858 15.5858 14.25 16 14.25L18 14.25C18.1989 14.25 18.3897 14.329 18.5303 14.4697L19.8615 15.8008C19.9854 15.7677 20.1156 15.75 20.25 15.75C21.0784 15.75 21.75 16.4216 21.75 17.25C21.75 18.0784 21.0784 18.75 20.25 18.75C19.4216 18.75 18.75 18.0784 18.75 17.25C18.75 17.1156 18.7677 16.9854 18.8008 16.8615L17.6893 15.75L16 15.75C15.5858 15.75 15.25 15.4142 15.25 15Z',
  d10: 'M18.9507 11.25C19.21 10.8016 19.6948 10.5 20.25 10.5C21.0784 10.5 21.75 11.1716 21.75 12C21.75 12.8284 21.0784 13.5 20.25 13.5C19.6948 13.5 19.21 13.1984 18.9507 12.75L12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25L18.9507 11.25Z',
  d11: 'M10.7261 1.30124C10.2615 1.24995 9.69726 1.24998 9.05135 1.25001H9.05128C9.01881 1.25002 8.9865 1.25001 8.95436 1.25001C8.31362 1.24992 7.74007 1.24984 7.27437 1.30124C6.77421 1.35644 6.28862 1.47932 5.84159 1.79219C5.32721 2.15219 4.98749 2.67118 4.77076 3.256C4.60831 3.69434 4.4715 4.24173 4.31487 4.86839C4.31075 4.88484 4.30663 4.90135 4.30249 4.91791L4.03009 6.00748C3.89615 6.54328 4.22191 7.08621 4.7577 7.22016C5.2935 7.35411 5.83643 7.02835 5.97038 6.49255L6.24277 5.40298C6.41544 4.71232 6.5266 4.2735 6.64612 3.951C6.78946 3.5642 6.87455 3.50723 6.96273 3.44819C6.97123 3.44249 6.97977 3.43678 6.98839 3.43074C7.0578 3.38216 7.17523 3.32432 7.49378 3.28916C7.83564 3.25143 8.28832 3.25002 9.00024 3.25002C9.71215 3.25002 10.1648 3.25143 10.5067 3.28916C10.8252 3.32432 10.9427 3.38216 11.0121 3.43074C11.0207 3.43678 11.0292 3.44249 11.0377 3.44819C11.1259 3.50722 11.211 3.5642 11.3544 3.951C11.4739 4.2735 11.585 4.71232 11.7577 5.40298L12.0301 6.49255C12.164 7.02835 12.707 7.35411 13.2428 7.22016C13.7786 7.08621 14.1043 6.54328 13.9704 6.00748L13.698 4.91791L13.6854 4.86739C13.5288 4.24115 13.3921 3.69411 13.2297 3.256C13.013 2.67118 12.6733 2.15219 12.1589 1.79219C11.7119 1.47932 11.2263 1.35644 10.7261 1.30124ZM5.97038 17.5077C5.83643 16.9719 5.2935 16.6462 4.7577 16.7801C4.22191 16.9141 3.89615 17.457 4.03009 17.9928L4.30249 19.0824L4.3149 19.132C4.47151 19.7586 4.60832 20.306 4.77076 20.7443C4.98749 21.3291 5.32721 21.8481 5.8416 22.2081C6.28862 22.5209 6.77421 22.6438 7.27437 22.699C7.73902 22.7503 8.30324 22.7503 8.94918 22.7503H8.9492L9.00024 22.7503L9.05129 22.7503H9.05131C9.69724 22.7503 10.2615 22.7503 10.7261 22.699C11.2263 22.6438 11.7119 22.5209 12.1589 22.2081C12.6733 21.8481 13.013 21.3291 13.2297 20.7443C13.3922 20.3059 13.529 19.7586 13.6856 19.1319L13.6856 19.1319L13.6856 19.1319L13.9704 17.9928C14.1043 17.457 13.7786 16.9141 13.2428 16.7801C12.707 16.6462 12.164 16.9719 12.0301 17.5077L11.7577 18.5973C11.585 19.2879 11.4739 19.7268 11.3544 20.0493C11.211 20.4361 11.1259 20.493 11.0377 20.5521C11.0292 20.5578 11.0207 20.5635 11.0121 20.5695C10.9427 20.6181 10.8252 20.6759 10.5067 20.7111C10.1648 20.7488 9.71215 20.7503 9.00024 20.7503C8.28832 20.7503 7.83564 20.7488 7.49378 20.7111C7.17523 20.6759 7.0578 20.6181 6.98839 20.5695C6.97977 20.5635 6.97123 20.5578 6.96273 20.5521C6.87456 20.493 6.78946 20.4361 6.64612 20.0493C6.5266 19.7268 6.41544 19.2879 6.24277 18.5973L5.97038 17.5077Z',
  d12: 'M15.1076 6.93393C14.9829 6.72486 14.8328 6.52954 14.6517 6.34835C14.0497 5.74644 13.2919 5.48754 12.3918 5.36653C11.5248 5.24997 10.4225 5.24998 9.05491 5.25H8.94513C7.57755 5.24998 6.47521 5.24997 5.60825 5.36653C4.70814 5.48754 3.95027 5.74644 3.34835 6.34835C2.74644 6.95027 2.48754 7.70814 2.36653 8.60825C2.24997 9.47521 2.24998 10.5775 2.25 11.9451V12.0549C2.24998 13.4225 2.24997 14.5248 2.36653 15.3918C2.48754 16.2919 2.74644 17.0497 3.34835 17.6517C3.95027 18.2536 4.70814 18.5125 5.60825 18.6335C6.47522 18.75 7.57753 18.75 8.94512 18.75H9.05487C10.4225 18.75 11.5248 18.75 12.3918 18.6335C13.2919 18.5125 14.0497 18.2536 14.6517 17.6517C14.8328 17.4705 14.9829 17.2751 15.1076 17.0661C14.3089 16.7206 13.75 15.9256 13.75 15C13.75 14.737 13.7951 14.4846 13.878 14.25H12C10.7574 14.25 9.75 13.2426 9.75 12C9.75 10.7574 10.7574 9.75 12 9.75H13.878C13.7951 9.51542 13.75 9.26298 13.75 9C13.75 8.07443 14.3089 7.2794 15.1076 6.93393Z',
  d13: 'M9.0523 1.25001C9.69821 1.24998 10.2624 1.24995 10.7271 1.30124C11.2272 1.35644 11.7128 1.47932 12.1598 1.79219C12.6742 2.15219 13.0139 2.67118 13.2307 3.256C13.393 3.69411 13.5298 4.24115 13.6863 4.86739L13.9223 5.81133C13.4713 5.57396 12.9603 5.44283 12.3927 5.36653C12.1864 5.33878 11.9667 5.31765 11.7333 5.30154C11.5749 4.66886 11.4689 4.25742 11.3553 3.951C11.212 3.5642 11.1269 3.50722 11.0387 3.44819C11.0302 3.44249 11.0217 3.43677 11.013 3.43074C10.9436 3.38216 10.8262 3.32432 10.5076 3.28916C10.1658 3.25143 9.7131 3.25002 9.00119 3.25002C8.28927 3.25002 7.83659 3.25143 7.49473 3.28916C7.17618 3.32432 7.05875 3.38216 6.98934 3.43074C6.98072 3.43678 6.97218 3.44249 6.96368 3.44819C6.8755 3.50723 6.79041 3.5642 6.64707 3.951C6.53351 4.25741 6.4275 4.66884 6.26911 5.30151C6.03552 5.31762 5.81568 5.33876 5.6092 5.36653C5.04187 5.4428 4.53104 5.57385 4.08015 5.81104L4.31582 4.86839C4.47245 4.24173 4.60926 3.69434 4.77171 3.256C4.98844 2.67118 5.32817 2.15219 5.84254 1.79219C6.28957 1.47932 6.77516 1.35644 7.27532 1.30124C7.74102 1.24984 8.31457 1.24992 8.95531 1.25001L9.0523 1.25001Z',
  d14: 'M4.08008 18.1889L4.31585 19.132C4.47246 19.7586 4.60927 20.306 4.77171 20.7443C4.98844 21.3291 5.32817 21.8481 5.84255 22.2081C6.28957 22.5209 6.77516 22.6438 7.27532 22.699C7.73997 22.7503 8.30418 22.7503 8.95011 22.7503H9.05224C9.69816 22.7503 10.2624 22.7503 10.7271 22.699C11.2272 22.6438 11.7128 22.5209 12.1598 22.2081C12.6742 21.8481 13.0139 21.3291 13.2307 20.7443C13.3931 20.3059 13.5299 19.7586 13.6865 19.132L13.9224 18.1886C13.4713 18.426 12.9603 18.5572 12.3927 18.6335C12.1864 18.6612 11.9667 18.6824 11.7333 18.6985C11.5749 19.3313 11.4689 19.7428 11.3553 20.0493C11.212 20.4361 11.1269 20.493 11.0387 20.5521C11.0345 20.5549 11.0303 20.5577 11.0261 20.5606C11.0217 20.5635 11.0174 20.5665 11.013 20.5695C10.9436 20.6181 10.8262 20.6759 10.5076 20.7111C10.1658 20.7488 9.7131 20.7503 9.00119 20.7503C8.28927 20.7503 7.83659 20.7488 7.49473 20.7111C7.17618 20.6759 7.05875 20.6181 6.98934 20.5695C6.98078 20.5635 6.97231 20.5579 6.96387 20.5522C6.8757 20.4932 6.79041 20.4361 6.64707 20.0493C6.5335 19.7428 6.42747 19.3313 6.26904 18.6985C6.03548 18.6824 5.81567 18.6612 5.6092 18.6335C5.04184 18.5572 4.53098 18.4261 4.08008 18.1889Z',
  d15: 'M20.25 6.75L18 9L15 9M19.5 6.75C19.5 7.16421 19.8358 7.5 20.25 7.5C20.6642 7.5 21 7.16421 21 6.75C21 6.33579 20.6642 6 20.25 6C19.8358 6 19.5 6.33579 19.5 6.75Z',
  d16: 'M20.25 17.25L18 15L15 15M19.5 17.25C19.5 16.8358 19.8358 16.5 20.25 16.5C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18C19.8358 18 19.5 17.6642 19.5 17.25Z',
  d17: 'M15 18H3V6H15',
  d18: 'M13 6.00003L12 2L6 2.00004L5 6.00003',
  d19: 'M13 18L12 22L6 22L5 18',
  d20: 'M18.75 6.75C18.75 5.92157 19.4216 5.25 20.25 5.25C21.0784 5.25 21.75 5.92157 21.75 6.75C21.75 7.57843 21.0784 8.25 20.25 8.25C20.1156 8.25 19.9854 8.23233 19.8615 8.19919L18.5303 9.53033C18.3897 9.67098 18.1989 9.75 18 9.75L15 9.75L15 8.25L17.6893 8.25L18.8008 7.13853C18.7677 7.01461 18.75 6.88437 18.75 6.75Z',
  d21: 'M15 14.25L18 14.25C18.1989 14.25 18.3897 14.329 18.5303 14.4697L19.8615 15.8008C19.9854 15.7677 20.1156 15.75 20.25 15.75C21.0784 15.75 21.75 16.4216 21.75 17.25C21.75 18.0784 21.0784 18.75 20.25 18.75C19.4216 18.75 18.75 18.0784 18.75 17.25C18.75 17.1156 18.7677 16.9854 18.8008 16.8615L17.6893 15.75L15 15.75L15 14.25Z',
  d22: 'M18.9507 11.25C19.21 10.8016 19.6948 10.5 20.25 10.5C21.0784 10.5 21.75 11.1716 21.75 12C21.75 12.8284 21.0784 13.5 20.25 13.5C19.6948 13.5 19.21 13.1984 18.9507 12.75L12 12.75L12 11.25L18.9507 11.25Z',
  d23: 'M12.5847 1.25L13.7267 5.81813L12.2715 6.18193L11.4135 2.75001L6.58467 2.75004L5.7267 6.18194L4.27148 5.81813L5.41351 1.25005L12.5847 1.25Z',
  d24: 'M12.5847 22.75L13.7267 18.1819L12.2715 17.8181L11.4135 21.25L6.58467 21.25L5.7267 17.8181L4.27148 18.1819L5.41351 22.75L12.5847 22.75Z',
  d25: 'M15.75 6.75V6C15.75 5.58579 15.4142 5.25 15 5.25H3C2.58579 5.25 2.25 5.58579 2.25 6V18C2.25 18.4142 2.58579 18.75 3 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18V17.25H13.5V14.25H10.5V9.75H13.5V6.75H15.75Z',
};

export const IconAiSmartwatchStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-smartwatch-stroke-rounded IconAiSmartwatchStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiSmartwatchDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-smartwatch-duotone-rounded IconAiSmartwatchDuotoneRounded"
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiSmartwatchTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-smartwatch-twotone-rounded IconAiSmartwatchTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiSmartwatchSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-smartwatch-solid-rounded IconAiSmartwatchSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiSmartwatchBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-smartwatch-bulk-rounded IconAiSmartwatchBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiSmartwatchStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-smartwatch-stroke-sharp IconAiSmartwatchStrokeSharp"
    >
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
        d={d.d4} 
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

export const IconAiSmartwatchSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-smartwatch-solid-sharp IconAiSmartwatchSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiSmartwatch: TheIconSelfPack = {
  name: 'AiSmartwatch',
  StrokeRounded: IconAiSmartwatchStrokeRounded,
  DuotoneRounded: IconAiSmartwatchDuotoneRounded,
  TwotoneRounded: IconAiSmartwatchTwotoneRounded,
  SolidRounded: IconAiSmartwatchSolidRounded,
  BulkRounded: IconAiSmartwatchBulkRounded,
  StrokeSharp: IconAiSmartwatchStrokeSharp,
  SolidSharp: IconAiSmartwatchSolidSharp,
};