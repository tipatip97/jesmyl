import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.0342 20.8715C11.0574 21.0082 9.09878 11.7891 10.4437 10.444C11.7886 9.09888 21.0083 11.0561 20.8717 13.0329C20.7776 14.3275 18.5864 14.8396 18.6504 15.9902C18.6691 16.3272 19.0948 16.6343 19.9462 17.2485C20.5377 17.6754 21.141 18.0899 21.7224 18.5304C21.9545 18.7062 22.0461 19.0018 21.978 19.2805C21.6507 20.619 20.6249 21.6493 19.2809 21.978C19.0022 22.0462 18.7066 21.9545 18.5308 21.7224C18.0905 21.1408 17.676 20.5375 17.2492 19.9459C16.635 19.0944 16.328 18.6686 15.991 18.6499C14.8406 18.5859 14.3286 20.7775 13.0342 20.8715Z',
  d2: 'M7.05139 16C4.12629 15.1008 2 12.3774 2 9.15744C2 5.20449 5.20449 2 9.15744 2C12.3774 2 15.1008 4.12629 16 7.05139',
  d3: 'M11 6.95491C10.4754 6.36883 9.71316 6 8.86472 6C7.28258 6 6 7.28258 6 8.86472C6 9.71316 6.36883 10.4754 6.95491 11',
  d4: 'M2 9.15744C2 5.20449 5.20449 2 9.15744 2C12.3774 2 15.1008 4.12629 16 7.05139C16.2027 8.01052 16.2792 9.23034 16.0716 10.4605C13.6566 9.91889 11.1032 9.78435 10.4437 10.444C9.7979 11.0899 9.91379 13.5512 10.4276 15.9206C9.45963 16.0795 8.34095 16.1167 7.05139 16C4.12629 15.1008 2 12.3774 2 9.15744Z',
  d5: 'M21.0466 11.7669C21.3586 12.0768 21.6586 12.5248 21.6199 13.0846L21.6197 13.0873C21.5802 13.6312 21.3197 14.0549 21.0397 14.374C20.7742 14.6765 20.4449 14.9354 20.1834 15.141C19.8913 15.3706 19.6665 15.5504 19.5258 15.7139C19.4742 15.7632 19.395 15.8816 19.4906 15.9605C19.6667 16.1207 20.5178 16.7317 20.9592 17.0501L20.9592 17.0502C21.3627 17.3367 21.7779 17.6315 22.1753 17.9325C22.6653 18.3037 22.8397 18.914 22.7066 19.4586C22.313 21.0681 21.0755 22.3112 19.4591 22.7065C18.9143 22.8398 18.304 22.6651 17.9329 22.1751C17.632 21.7777 17.3372 21.3625 17.0508 20.9589L17.0507 20.9589C16.7324 20.5175 16.1213 19.6663 15.9612 19.4901C15.8759 19.3864 15.7615 19.4704 15.7149 19.5253C15.5514 19.666 15.3717 19.8908 15.1421 20.183C14.9365 20.4446 14.6777 20.7739 14.3752 21.0394C14.0562 21.3194 13.6325 21.58 13.0885 21.6196L13.0859 21.6198C12.5261 21.6585 12.0781 21.3585 11.7681 21.0465C11.4504 20.7268 11.1752 20.2958 10.9378 19.8291C10.4597 18.8892 10.0546 17.6437 9.76263 16.3826C9.46977 15.1178 9.28019 13.7918 9.25331 12.6781C9.2399 12.1228 9.26624 11.5961 9.35062 11.1457C9.43 10.722 9.58169 10.2454 9.91333 9.91369C10.245 9.58201 10.7216 9.43025 11.1453 9.3508C11.5957 9.26636 12.1223 9.23995 12.6777 9.25327C13.7914 9.27999 15.1175 9.46937 16.3824 9.76204C17.6435 10.0538 18.8891 10.4588 19.8291 10.9367C20.2958 11.1741 20.7268 11.4491 21.0466 11.7669Z',
  d6: 'M9.15238 3.18747C5.85805 3.18747 3.18747 5.85805 3.18747 9.15238C3.18747 11.8344 4.95831 14.1054 7.39685 14.855C7.90824 15.0123 8.19536 15.5543 8.03815 16.0657C7.88093 16.5771 7.33892 16.8642 6.82752 16.707C3.59878 15.7144 1.25 12.7089 1.25 9.15238C1.25 4.78802 4.78802 1.25 9.15238 1.25C12.7089 1.25 15.7144 3.59878 16.707 6.82752C16.8642 7.33892 16.5771 7.88093 16.0657 8.03815C15.5543 8.19536 15.0123 7.90824 14.855 7.39685C14.1054 4.95831 11.8344 3.18747 9.15238 3.18747Z',
  d7: 'M8.83867 7.10714C7.88237 7.10714 7.10714 7.88237 7.10714 8.83867C7.10714 9.3514 7.32882 9.81113 7.68455 10.1295C8.06668 10.4715 8.0992 11.0586 7.75718 11.4407C7.41516 11.8228 6.82812 11.8553 6.44599 11.5133C5.7133 10.8575 5.25 9.9016 5.25 8.83867C5.25 6.8567 6.8567 5.25 8.83867 5.25C9.9016 5.25 10.8575 5.7133 11.5133 6.44599C11.8553 6.82812 11.8228 7.41516 11.4407 7.75718C11.0586 8.0992 10.4715 8.06668 10.1295 7.68455C9.81113 7.32882 9.3514 7.10714 8.83867 7.10714Z',
  d8: 'M21.9999 12.4L10 10L12.4 21.9995L16.0001 18.3997L19.6004 22L22 19.5997L18.3999 15.9996L21.9999 12.4Z',
  d9: 'M9.46968 9.46968C9.647 9.29237 9.9012 9.2154 10.1471 9.26458L22.147 11.6645C22.4182 11.7188 22.6375 11.9179 22.7177 12.1826C22.7978 12.4474 22.7258 12.7347 22.5302 12.9303L19.4606 15.9997L22.5303 19.0694C22.8232 19.3623 22.8232 19.8371 22.5304 20.13L20.1308 22.5303C19.9901 22.671 19.7994 22.75 19.6004 22.75C19.4015 22.75 19.2107 22.671 19.07 22.5303L16.0001 19.4604L12.9303 22.5299C12.7347 22.7255 12.4474 22.7975 12.1827 22.7174C11.9179 22.6372 11.7188 22.4179 11.6646 22.1466L9.26458 10.1471C9.2154 9.90121 9.29236 9.647 9.46968 9.46968Z',
  d10: 'M9.40744 3.25C6.00678 3.25 3.25 6.00678 3.25 9.40744C3.25 12.176 5.078 14.5203 7.59524 15.2941L7.00754 17.2059C3.67459 16.1812 1.25 13.0788 1.25 9.40744C1.25 4.90221 4.90221 1.25 9.40744 1.25C13.0788 1.25 16.1812 3.67459 17.2059 7.00754L15.2941 7.59524C14.5203 5.078 12.176 3.25 9.40744 3.25ZM9.11472 7.25C8.08487 7.25 7.25 8.08487 7.25 9.11472C7.25 9.6669 7.48873 10.162 7.87182 10.5049L6.53799 11.9951C5.74893 11.2889 5.25 10.2594 5.25 9.11472C5.25 6.9803 6.9803 5.25 9.11472 5.25C10.2594 5.25 11.2889 5.74893 11.9951 6.53799L10.5049 7.87182C10.162 7.48873 9.6669 7.25 9.11472 7.25Z',
};

export const IconCursorPointer01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-01-stroke-rounded IconCursorPointer01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconCursorPointer01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-01-duotone-rounded IconCursorPointer01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconCursorPointer01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-01-twotone-rounded IconCursorPointer01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCursorPointer01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-01-solid-rounded IconCursorPointer01SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorPointer01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-01-bulk-rounded IconCursorPointer01BulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursorPointer01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-01-stroke-sharp IconCursorPointer01StrokeSharp"
    >
      <path 
        d={d.d8} 
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
      />
    </TheIconWrapper>
  );
};

export const IconCursorPointer01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-pointer-01-solid-sharp IconCursorPointer01SolidSharp"
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

export const iconPackOfCursorPointer01: TheIconSelfPack = {
  name: 'CursorPointer01',
  StrokeRounded: IconCursorPointer01StrokeRounded,
  DuotoneRounded: IconCursorPointer01DuotoneRounded,
  TwotoneRounded: IconCursorPointer01TwotoneRounded,
  SolidRounded: IconCursorPointer01SolidRounded,
  BulkRounded: IconCursorPointer01BulkRounded,
  StrokeSharp: IconCursorPointer01StrokeSharp,
  SolidSharp: IconCursorPointer01SolidSharp,
};