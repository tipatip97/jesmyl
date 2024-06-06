import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.53767 15.0937C2.8878 8.60966 5.99612 4.5631 12.0003 2C18.0046 4.5631 21.1122 8.60966 19.4623 15.0937C19.3427 15.5637 19.3575 16.063 19.5336 16.514L20.9095 20.038C21.4448 21.409 19.4664 21.7351 18.6252 21.9121C16.3106 22.3991 14.0668 20.8106 13.693 18.4203C13.4291 16.7328 14.3833 16.4559 15.6306 15.817C15.6306 15.817 17.1867 15.2855 17.1867 13.6913C17.1867 12.5173 16.2578 11.5656 15.1119 11.5656C14.3943 11.5656 13.7621 11.774 13.135 12.4517C12.5272 13.1086 12.2234 13.437 12.0004 13.437C11.7774 13.437 11.4734 13.1086 10.8656 12.4518C10.2382 11.774 9.60571 11.5656 8.88813 11.5656C7.74224 11.5656 6.81332 12.5173 6.81332 13.6913C6.81332 15.2855 8.36942 15.817 8.36942 15.817C9.61674 16.4559 10.5709 16.7328 10.307 18.4203C9.93315 20.8106 7.6894 22.3991 5.37484 21.9121C4.53362 21.7351 2.55521 21.409 3.09051 20.038L4.46636 16.514C4.64246 16.063 4.65729 15.5637 4.53767 15.0937Z',
  d2: 'M10 20H14',
  d3: 'M11.9998 8H12.0088',
  d4: 'M8.99994 20C8.99994 19.4477 9.44765 19 9.99994 19H13.9999C14.5522 19 14.9999 19.4477 14.9999 20C14.9999 20.5523 14.5522 21 13.9999 21H9.99994C9.44765 21 8.99994 20.5523 8.99994 20Z',
  d5: 'M12.2947 1.31022C12.1067 1.22993 11.8939 1.22993 11.7058 1.31022C8.6273 2.6244 6.19394 4.35825 4.76031 6.6828C3.31204 9.03109 2.94613 11.8805 3.81078 15.2786C3.89621 15.6143 3.8806 15.952 3.76766 16.2413L2.39182 19.7652C2.19051 20.2808 2.19942 20.7935 2.44483 21.2435C2.67016 21.6566 3.04295 21.9192 3.37243 22.0893C3.95107 22.3879 4.80757 22.5622 5.22036 22.646C7.97217 23.2251 10.6104 21.3337 11.0479 18.5362C11.1245 18.0466 11.122 17.603 11.0163 17.2008C10.9075 16.7871 10.7006 16.4594 10.4341 16.194C10.1788 15.9397 9.87815 15.7522 9.5945 15.5975C9.47561 15.5327 9.06171 15.3311 8.7597 15.184C8.6326 15.1221 8.52531 15.0699 8.46817 15.0415C8.36048 14.9863 8.21802 14.9009 8.0783 14.7816C7.80535 14.5485 7.56326 14.2099 7.56326 13.6913C7.56326 12.9143 8.17342 12.3156 8.88807 12.3156C9.41322 12.3156 9.86369 12.4736 10.3382 12.9863C10.6224 13.2933 10.8681 13.5589 11.0716 13.7446C11.1774 13.8412 11.2989 13.9419 11.4324 14.0208C11.5645 14.099 11.7597 14.187 12.0004 14.187C12.241 14.187 12.4362 14.099 12.5683 14.0208C12.7018 13.9418 12.8232 13.8412 12.9291 13.7445C13.1325 13.5587 13.3782 13.2931 13.6623 12.9861C14.1367 12.4735 14.5868 12.3156 15.1118 12.3156C15.8265 12.3156 16.4366 12.9143 16.4366 13.6913C16.4366 14.2099 16.1945 14.5485 15.9216 14.7816C15.7819 14.9009 15.6394 14.9863 15.5317 15.0415C15.4746 15.0699 15.3672 15.1221 15.2401 15.1841C14.9381 15.3312 14.5243 15.5327 14.4054 15.5975C14.1217 15.7522 13.8211 15.9397 13.5658 16.194C13.2993 16.4594 13.0924 16.7871 12.9836 17.2008C12.8779 17.603 12.8754 18.0466 12.952 18.5362C13.3895 21.3337 16.0277 23.2251 18.7795 22.646C19.1923 22.5622 20.0488 22.3879 20.6275 22.0893C20.9569 21.9192 21.3297 21.6566 21.5551 21.2435C21.8005 20.7935 21.8094 20.2808 21.6081 19.7652L20.2322 16.2413C20.1193 15.952 20.1037 15.6143 20.1891 15.2786C21.0538 11.8805 20.688 9.03113 19.24 6.68283C17.8065 4.35827 15.3733 2.6244 12.2947 1.31022ZM11.9955 6.75C11.3076 6.75 10.75 7.30964 10.75 8C10.75 8.69036 11.3076 9.25 11.9955 9.25H12.0045C12.6924 9.25 13.25 8.69036 13.25 8C13.25 7.30964 12.6924 6.75 12.0045 6.75H11.9955Z',
  d6: 'M9.93402 20.9979C9.95583 20.9993 9.97783 21 10 21H14C14.0221 21 14.0441 20.9993 14.0659 20.9979C13.5925 20.4336 13.2372 19.756 13.0465 19H10.9534C10.7627 19.756 10.4074 20.4336 9.93402 20.9979Z',
  d7: 'M11.7058 1.31022C11.8939 1.22993 12.1067 1.22993 12.2947 1.31022C15.3733 2.6244 17.8065 4.35827 19.24 6.68283C20.688 9.03113 21.0538 11.8805 20.1891 15.2786C20.1037 15.6143 20.1193 15.952 20.2322 16.2413L21.6081 19.7652C21.8094 20.2808 21.8005 20.7935 21.5551 21.2435C21.3297 21.6566 20.9569 21.9192 20.6275 22.0893C20.0488 22.3879 19.1923 22.5622 18.7795 22.646C16.0277 23.2251 13.3895 21.3337 12.952 18.5362C12.8754 18.0466 12.8779 17.603 12.9836 17.2008C13.0924 16.7871 13.2993 16.4594 13.5658 16.194C13.8211 15.9397 14.1217 15.7522 14.4054 15.5975C14.5743 15.5054 15.3388 15.1372 15.5317 15.0415C15.6394 14.9863 15.7819 14.9009 15.9216 14.7816C16.1945 14.5485 16.4366 14.2099 16.4366 13.6913C16.4366 12.9143 15.8265 12.3156 15.1118 12.3156C14.5868 12.3156 14.1367 12.4735 13.6623 12.9861C13.3782 13.2931 13.1325 13.5587 12.9291 13.7445C12.8232 13.8412 12.7018 13.9418 12.5683 14.0208C12.4362 14.099 12.241 14.187 12.0004 14.187C11.7597 14.187 11.5645 14.099 11.4324 14.0208C11.2989 13.9419 11.1774 13.8412 11.0716 13.7446C10.8681 13.5589 10.6224 13.2933 10.3382 12.9863C9.86369 12.4736 9.41322 12.3156 8.88807 12.3156C8.17342 12.3156 7.56326 12.9143 7.56326 13.6913C7.56326 14.2099 7.80535 14.5485 8.0783 14.7816C8.21802 14.9009 8.36048 14.9863 8.46817 15.0415C8.66107 15.1372 9.42557 15.5054 9.5945 15.5975C9.87815 15.7522 10.1788 15.9397 10.4341 16.194C10.7006 16.4594 10.9075 16.7871 11.0163 17.2008C11.122 17.603 11.1245 18.0466 11.0479 18.5362C10.6104 21.3337 7.97217 23.2251 5.22036 22.646C4.80757 22.5622 3.95107 22.3879 3.37243 22.0893C3.04295 21.9192 2.67016 21.6566 2.44483 21.2435C2.19942 20.7935 2.19051 20.2808 2.39182 19.7652L3.76766 16.2413C3.8806 15.952 3.89621 15.6143 3.81078 15.2786C2.94613 11.8805 3.31204 9.03109 4.76031 6.6828C6.19394 4.35825 8.6273 2.6244 11.7058 1.31022Z',
  d8: 'M10.75 8C10.75 7.30964 11.3076 6.75 11.9955 6.75H12.0045C12.6924 6.75 13.25 7.30964 13.25 8C13.25 8.69036 12.6924 9.25 12.0045 9.25H11.9955C11.3076 9.25 10.75 8.69036 10.75 8Z',
  d9: 'M19.5834 16.0621C21.2416 9.54935 18.0339 4.57447 11.9994 2C5.9648 4.57447 2.7584 9.54935 4.41661 16.0621L3 20.118C5.92419 24.0976 9.87722 20.8941 10.253 18.4931C10.5182 16.7981 9.55921 16.52 8.30559 15.8783C8.30559 15.8783 6.74162 15.3445 6.74162 13.7431C6.74162 12.564 7.67524 11.608 8.82692 11.608C9.54809 11.608 10.1835 11.8173 10.8138 12.4981L11.9994 13.551L13.1862 12.4981C13.8165 11.8173 14.4519 11.608 15.1731 11.608C16.3248 11.608 17.2584 12.564 17.2584 13.7431C17.2584 15.3445 15.6944 15.8783 15.6944 15.8783C14.4408 16.52 13.4818 16.7981 13.747 18.4931C14.1228 20.8941 18.0758 24.0976 21 20.118L19.5834 16.0621Z',
  d10: 'M11.9994 1.25L12.291 1.37517C15.3929 2.70645 17.8273 4.68403 19.2628 7.23152C20.6733 9.73463 21.0816 12.7221 20.2899 16.0458L21.75 20.2512L21.5181 20.5687C20.7169 21.6656 19.799 22.3277 18.8273 22.6029C17.8564 22.878 16.9077 22.7451 16.0841 22.3881C15.2661 22.0335 14.5365 21.4416 13.9884 20.75H10.0116C9.46354 21.4416 8.73393 22.0335 7.91593 22.3881C7.09233 22.7451 6.14359 22.878 5.17266 22.6029C4.201 22.3277 3.28308 21.6656 2.48185 20.5687L2.25 20.2512L3.71011 16.0458C2.91837 12.7222 3.32633 9.73471 4.73651 7.23158C6.1717 4.68407 8.60579 2.70646 11.7077 1.37517L11.9994 1.25ZM12.997 18.6216C13.0294 18.8296 13.0822 19.0401 13.1535 19.25H10.8465C10.9178 19.0401 10.9706 18.8296 11.003 18.6216C11.0792 18.1316 11.0767 17.6878 10.9715 17.2855C10.8633 16.8718 10.6575 16.5442 10.3925 16.2788C10.1385 16.0245 9.83946 15.8369 9.55706 15.6821C9.43869 15.6172 9.02648 15.4154 8.72569 15.2681C8.5992 15.2062 8.49215 15.1537 8.43529 15.1254C8.32783 15.07 8.18567 14.9843 8.04624 14.8646C7.77378 14.6307 7.5321 14.2908 7.5321 13.7704C7.5321 12.991 8.14101 12.3895 8.85541 12.3895C9.3795 12.3895 9.80588 12.523 10.279 13.0371L10.3037 13.0639L11.9991 14.5787L13.6962 13.0641L13.721 13.0371C14.1941 12.523 14.6205 12.3895 15.1446 12.3895C15.859 12.3895 16.4679 12.991 16.4679 13.7704C16.4679 14.2908 16.2262 14.6307 15.9538 14.8646C15.8143 14.9843 15.6722 15.07 15.5647 15.1254C15.5079 15.1537 15.4011 15.206 15.2747 15.2679C14.9739 15.4152 14.5613 15.6172 14.4429 15.6821C14.1605 15.8369 13.8615 16.0245 13.6075 16.2788C13.3425 16.5442 13.1367 16.8718 13.0285 17.2855C12.9233 17.6878 12.9208 18.1316 12.997 18.6216ZM11.9964 6.75C11.3091 6.75 10.752 7.30964 10.752 8C10.752 8.69036 11.3091 9.25 11.9964 9.25H12.0075C12.6948 9.25 13.252 8.69036 13.252 8C13.252 7.30964 12.6948 6.75 12.0075 6.75H11.9964Z',
};

export const IconSpartanHelmetStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spartan-helmet-stroke-rounded IconSpartanHelmetStrokeRounded"
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

export const IconSpartanHelmetDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spartan-helmet-duotone-rounded IconSpartanHelmetDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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

export const IconSpartanHelmetTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spartan-helmet-twotone-rounded IconSpartanHelmetTwotoneRounded"
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

export const IconSpartanHelmetSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spartan-helmet-solid-rounded IconSpartanHelmetSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpartanHelmetBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spartan-helmet-bulk-rounded IconSpartanHelmetBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconSpartanHelmetStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spartan-helmet-stroke-sharp IconSpartanHelmetStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSpartanHelmetSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="spartan-helmet-solid-sharp IconSpartanHelmetSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSpartanHelmet: TheIconSelfPack = {
  name: 'SpartanHelmet',
  StrokeRounded: IconSpartanHelmetStrokeRounded,
  DuotoneRounded: IconSpartanHelmetDuotoneRounded,
  TwotoneRounded: IconSpartanHelmetTwotoneRounded,
  SolidRounded: IconSpartanHelmetSolidRounded,
  BulkRounded: IconSpartanHelmetBulkRounded,
  StrokeSharp: IconSpartanHelmetStrokeSharp,
  SolidSharp: IconSpartanHelmetSolidSharp,
};