import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d2: 'M14 3V5.8M18.9502 5.05078L16.9703 7.03068M21 10H18.2',
  d3: 'M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424Z',
  d4: 'M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z',
  d5: 'M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.88991C7.83786 4.48011 8.11473 4.9768 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L5.61417 10.9759C5.37889 11.2461 5.26124 11.3812 5.25049 11.5501C5.23974 11.719 5.33616 11.8633 5.529 12.1518C7.17259 14.6109 9.38773 16.8268 11.8488 18.4718C12.1374 18.6647 12.2816 18.7611 12.4505 18.7503C12.6194 18.7396 12.7546 18.6219 13.0248 18.3866L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.0239 15.886 19.5206 16.1629 20.1107 16.4918L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657Z',
  d6: 'M14 2C14.5523 2 15 2.44772 15 3V5.8C15 6.35228 14.5523 6.8 14 6.8C13.4477 6.8 13 6.35228 13 5.8V3C13 2.44772 13.4477 2 14 2ZM19.6573 4.34367C20.0478 4.7342 20.0478 5.36736 19.6573 5.75789L17.6774 7.73779C17.2869 8.12831 16.6537 8.12831 16.2632 7.73779C15.8727 7.34726 15.8727 6.7141 16.2632 6.32357L18.2431 4.34367C18.6336 3.95315 19.2668 3.95315 19.6573 4.34367ZM17.2 10C17.2 9.44772 17.6477 9 18.2 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H18.2C17.6477 11 17.2 10.5523 17.2 10Z',
  d7: 'M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.88991C7.83786 4.48011 8.11473 4.9768 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L5.61417 10.9759C5.37889 11.2461 5.26124 11.3812 5.25049 11.5501C5.23974 11.719 5.33616 11.8633 5.529 12.1518C7.17259 14.6109 9.38773 16.8268 11.8488 18.4718C12.1374 18.6647 12.2816 18.7611 12.4505 18.7503C12.6194 18.7396 12.7546 18.6219 13.0248 18.3866L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.0239 15.886 19.5206 16.1629 20.1107 16.4918L20.1109 16.4919L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.88688 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657Z',
  d8: 'M13.9999 2.00024C14.5522 2.00024 14.9999 2.44796 14.9999 3.00024V5.80024C14.9999 6.35253 14.5522 6.80024 13.9999 6.80024C13.4476 6.80024 12.9999 6.35253 12.9999 5.80024V3.00024C12.9999 2.44796 13.4476 2.00024 13.9999 2.00024ZM19.6572 4.34392C20.0477 4.73444 20.0477 5.36761 19.6572 5.75813L17.6773 7.73803C17.2868 8.12856 16.6536 8.12856 16.2631 7.73803C15.8725 7.34751 15.8725 6.71434 16.2631 6.32382L18.243 4.34392C18.6335 3.95339 19.2667 3.95339 19.6572 4.34392ZM17.1999 10.0002C17.1999 9.44796 17.6476 9.00024 18.1999 9.00024H20.9999C21.5522 9.00024 21.9999 9.44796 21.9999 10.0002C21.9999 10.5525 21.5522 11.0002 20.9999 11.0002H18.1999C17.6476 11.0002 17.1999 10.5525 17.1999 10.0002Z',
  d9: 'M2.08793 7.57126L1.3527 7.71937L1.35275 7.71962L2.08793 7.57126ZM8 8L8.51137 8.54863L8.92208 8.16582L8.67048 7.6639L8 8ZM4.99233 2L5.6628 1.6639C5.56084 1.4605 5.37205 1.31438 5.14958 1.26667C4.92711 1.21896 4.69501 1.27483 4.51861 1.41855L4.99233 2ZM7.37927 16.6207L7.9098 16.0906L7.90941 16.0902L7.37927 16.6207ZM16.4285 21.9122L16.2801 22.6474L16.2804 22.6474L16.4285 21.9122ZM15.9997 16.0001L16.3358 15.3296L15.8339 15.078L15.4511 15.4887L15.9997 16.0001ZM21.9997 19.0078L22.5812 19.4815C22.7249 19.3051 22.7808 19.073 22.7331 18.8505C22.6854 18.6281 22.5392 18.4393 22.3358 18.3373L21.9997 19.0078ZM1.35275 7.71962C1.64441 9.16491 2.13033 10.5909 3.11985 12.3156L4.42092 11.5692C3.51363 9.98777 3.08368 8.71413 2.82311 7.42289L1.35275 7.71962ZM4.28176 12.491L8.51137 8.54863L7.48863 7.45137L3.25901 11.3938L4.28176 12.491ZM8.67048 7.6639L5.6628 1.6639L4.32185 2.3361L7.32952 8.3361L8.67048 7.6639ZM4.51861 1.41855C3.00645 2.65052 0.736597 4.66102 1.3527 7.71937L2.82316 7.42315C2.40334 5.33917 3.88184 3.87213 5.46605 2.58145L4.51861 1.41855ZM3.11985 12.3156C4.11578 14.0515 5.39178 15.695 6.84914 17.1513L7.90941 16.0902C6.53943 14.7212 5.34646 13.1824 4.42092 11.5692L3.11985 12.3156ZM16.5768 21.177C15.2856 20.9164 14.012 20.4865 12.4306 19.5792L11.6841 20.8803C13.4088 21.8698 14.8348 22.3557 16.2801 22.6474L16.5768 21.177ZM12.606 20.7411L16.5484 16.5115L15.4511 15.4887L11.5087 19.7184L12.606 20.7411ZM15.6636 16.6706L21.6636 19.6783L22.3358 18.3373L16.3358 15.3296L15.6636 16.6706ZM21.4183 18.5341C20.1276 20.1183 18.6606 21.5968 16.5766 21.177L16.2804 22.6474C19.3387 23.2635 21.3492 20.9937 22.5812 19.4815L21.4183 18.5341ZM12.4306 19.5792C10.8174 18.6537 9.27883 17.4606 7.9098 16.0906L6.84874 17.1509C8.305 18.6082 9.94815 19.8843 11.6841 20.8803L12.4306 19.5792Z',
  d10: 'M5.08213 11.7457C5.94718 13.1708 7.02459 14.5303 8.2473 15.7521C9.46896 16.9746 10.8284 18.0523 12.2531 18.9174L15.831 15.0788L22.7492 19.0189C21.7451 20.8831 19.337 23.2672 16.2776 22.6508C14.8318 22.3591 13.4051 21.8729 11.6798 20.8831C9.94318 19.8868 8.30353 18.6143 6.84677 17.1565C5.38892 15.6997 4.11239 14.056 3.11606 12.3194C2.1262 10.5941 1.64007 9.16735 1.3483 7.72156C0.731986 4.66214 3.11606 2.25408 4.98024 1.25L8.92032 8.16817L5.08213 11.7457Z',
  d11: 'M13 5.8V3H15V5.8H13ZM16.2632 6.32357L18.2431 4.34367L19.6573 5.75789L17.6774 7.73779L16.2632 6.32357ZM18.2 9H21V11H18.2V9Z',
};

export const IconCallRinging02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-02-stroke-rounded IconCallRinging02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCallRinging02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-02-duotone-rounded IconCallRinging02DuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      </g>
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
      />
    </TheIconWrapper>
  );
};

export const IconCallRinging02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-02-twotone-rounded IconCallRinging02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCallRinging02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-02-solid-rounded IconCallRinging02SolidRounded"
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

export const IconCallRinging02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-02-bulk-rounded IconCallRinging02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCallRinging02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-02-stroke-sharp IconCallRinging02StrokeSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallRinging02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-ringing-02-solid-sharp IconCallRinging02SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCallRinging02: TheIconSelfPack = {
  name: 'CallRinging02',
  StrokeRounded: IconCallRinging02StrokeRounded,
  DuotoneRounded: IconCallRinging02DuotoneRounded,
  TwotoneRounded: IconCallRinging02TwotoneRounded,
  SolidRounded: IconCallRinging02SolidRounded,
  BulkRounded: IconCallRinging02BulkRounded,
  StrokeSharp: IconCallRinging02StrokeSharp,
  SolidSharp: IconCallRinging02SolidSharp,
};