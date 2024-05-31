import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 3.32038C6.75053 2.8233 3.67361 2.85605 2.76477 3.76477C0.59286 5.93695 3.42489 20.494 6.53497 20.1912C8.24124 20.0189 9.43225 17.2787 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L17.5 14.4678',
  d2: 'M14.318 9.68198C16.0754 11.4393 18.9246 11.4393 20.682 9.68198C22.4393 7.92462 22.4393 5.07538 20.682 3.31802M14.318 9.68198C12.5607 7.92462 12.5607 5.07538 14.318 3.31802C16.0754 1.56066 18.9246 1.56066 20.682 3.31802M14.318 9.68198L20.682 3.31802',
  d3: 'M16.3139 10.8417C15.5828 10.6427 14.8921 10.2561 14.318 9.68198C12.8035 8.16744 12.5942 5.84191 13.6902 4.10325C9.41937 2.92624 4.02099 2.50872 2.76477 3.76477C0.59286 5.93695 3.42489 20.494 6.53497 20.1912C7.55678 20.088 8.3938 19.0639 9.202 18.0751C9.74337 17.4127 10.2718 16.7661 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L15.8784 13.222C15.4281 12.876 15.0857 12.3865 15.4229 11.8342C15.6303 11.4944 15.9484 11.167 16.3139 10.8417Z',
  d4: 'M10 3.3282C6.75053 2.83111 3.67361 2.86386 2.76477 3.77258C0.592861 5.94476 3.42489 20.5019 6.53498 20.199C8.24124 20.0267 9.43226 17.2865 10.8342 16.4306C11.3865 16.0935 11.8761 16.4359 12.222 16.8862L15.569 21.2427C16.1521 22.0017 16.5628 22.2276 17.4421 21.7774C18.7939 21.0853 20.0785 19.7989 20.7696 18.4497C21.2198 17.5706 20.9939 17.1598 20.235 16.5768L17.5 14.4756',
  d5: 'M11.001 3.71877C11.1716 3.34395 11.257 3.15653 11.1878 3.02609C11.1187 2.89565 10.9314 2.86372 10.5568 2.79986C9.02478 2.53866 7.49724 2.38607 6.1693 2.37915C5.30669 2.37466 4.50491 2.4314 3.83077 2.56988C3.18126 2.7033 2.53865 2.93419 2.10941 3.36338C1.68022 3.79262 1.44939 4.43515 1.31597 5.08466C1.1775 5.7588 1.12075 6.56058 1.12525 7.42319C1.13424 9.1512 1.38993 11.2172 1.81059 13.1913C2.23035 15.1612 2.82424 17.0862 3.53077 18.5185C3.88223 19.231 4.282 19.864 4.73388 20.3189C5.18047 20.7684 5.7744 21.1355 6.48268 21.0665L6.4853 21.0663C7.10475 21.0037 7.63159 20.7126 8.06877 20.3679C8.50432 20.0245 8.8968 19.591 9.24698 19.1758C9.4003 18.9941 9.53976 18.8233 9.6739 18.659C9.86774 18.4215 10.0507 18.1974 10.2482 17.9738C10.5516 17.63 10.8144 17.3779 11.0536 17.2213C11.0707 17.21 11.0792 17.2044 11.1267 17.192C11.1742 17.1796 11.1367 17.1771 11.1517 17.1781C11.2172 17.1826 11.334 17.2452 11.5023 17.4642L14.8492 21.8207C15.1456 22.2064 15.5129 22.6231 16.0325 22.7962C16.5987 22.9848 17.1468 22.8283 17.6588 22.5661C19.151 21.8022 20.5495 20.4017 21.3121 18.9126C21.5743 18.4007 21.7309 17.8526 21.5423 17.2863C21.3693 16.7668 20.9526 16.3994 20.5669 16.1031L17.4964 13.7441C17.4182 13.6841 17.3792 13.6541 17.3349 13.6382C17.2907 13.6224 17.2385 13.6206 17.134 13.617C15.423 13.5589 13.7293 12.8769 12.4233 11.5708C10.3 9.44757 9.82592 6.29963 11.001 3.71877Z',
  d6: 'M19.0403 3.5416C17.7137 2.82355 16.0213 3.02509 14.9001 4.14622C13.779 5.26735 13.5775 6.95983 14.2955 8.28637L19.0403 3.5416ZM20.4545 4.95581L15.7097 9.70059C17.0363 10.4186 18.7287 10.2171 19.8499 9.09597C20.971 7.97484 21.1725 6.28236 20.4545 4.95581ZM13.4859 2.73201C15.6338 0.584123 19.1162 0.584123 21.2641 2.73201C23.412 4.87989 23.412 8.3623 21.2641 10.5102C19.1162 12.6581 15.6338 12.6581 13.4859 10.5102C11.338 8.3623 11.338 4.87989 13.4859 2.73201Z',
  d7: 'M14.5999 12.9994L20 18.3996L16.4005 22L11.0001 16.5996L5.59999 21.9993L2 4L10 5.59999',
  d8: 'M19.0896 3.56048C17.8233 2.87508 16.2078 3.06746 15.1376 4.13762C14.0675 5.20778 13.8751 6.82334 14.5605 8.08958L19.0896 3.56048ZM20.4395 4.91041L15.9104 9.43952C17.1767 10.1249 18.7922 9.93254 19.8624 8.86238C20.9325 7.79221 21.1249 6.17666 20.4395 4.91041ZM13.7877 2.78769C15.8379 0.737437 19.1621 0.737437 21.2123 2.78769C23.2626 4.83794 23.2626 8.16206 21.2123 10.2123C19.1621 12.2626 15.8379 12.2626 13.7877 10.2123C11.7374 8.16206 11.7374 4.83794 13.7877 2.78769Z',
  d9: 'M10.9138 5.01791L2.1471 3.26458C1.9012 3.2154 1.647 3.29237 1.46968 3.46968C1.29236 3.647 1.2154 3.90121 1.26458 4.1471L4.86457 22.1464C4.91881 22.4176 5.11793 22.637 5.38265 22.7171C5.64738 22.7973 5.93473 22.7252 6.13031 22.5297L11.0001 17.6602L15.8702 22.5303C16.0109 22.671 16.2017 22.75 16.4006 22.75C16.5995 22.75 16.7903 22.671 16.931 22.5303L20.5304 18.9298C20.8232 18.6369 20.8232 18.1621 20.5303 17.8692L15.6606 12.9995L15.6634 12.9966C14.5881 12.6937 13.5732 12.1191 12.727 11.273C11.0296 9.57553 10.4252 7.19897 10.9138 5.01791Z',
} as const;

export const IconCursorDisabled01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-disabled-01-stroke-rounded IconCursorDisabled01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCursorDisabled01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-disabled-01-duotone-rounded IconCursorDisabled01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorDisabled01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-disabled-01-twotone-rounded IconCursorDisabled01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorDisabled01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-disabled-01-solid-rounded IconCursorDisabled01SolidRounded"
    >
      <path 
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

export const IconCursorDisabled01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-disabled-01-bulk-rounded IconCursorDisabled01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCursorDisabled01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-disabled-01-stroke-sharp IconCursorDisabled01StrokeSharp"
    >
      <path 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconCursorDisabled01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-disabled-01-solid-sharp IconCursorDisabled01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfCursorDisabled01: TheIconSelfPack = {
  name: 'CursorDisabled01',
  StrokeRounded: IconCursorDisabled01StrokeRounded,
  DuotoneRounded: IconCursorDisabled01DuotoneRounded,
  TwotoneRounded: IconCursorDisabled01TwotoneRounded,
  SolidRounded: IconCursorDisabled01SolidRounded,
  BulkRounded: IconCursorDisabled01BulkRounded,
  StrokeSharp: IconCursorDisabled01StrokeSharp,
  SolidSharp: IconCursorDisabled01SolidSharp,
};