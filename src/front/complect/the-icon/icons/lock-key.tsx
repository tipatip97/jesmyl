import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 10.997C17.6078 10.1968 16.5481 9.02147 14.3703 9.07148C14.3703 9.07148 12.6431 8.99646 10.6906 8.99646C8.73815 8.99646 7.82408 9.04218 6.25999 9.07148C5.25872 9.04647 3.35629 9.27153 2.48018 11.3471C1.90445 13.0976 1.87941 16.7736 2.22986 18.6241C2.30496 19.5743 2.80559 20.8997 4.35757 21.5999C5.30878 22.1 6.83573 21.9 7.9872 22M5.98465 8.19624C5.93458 5.82059 5.83445 3.94508 8.58796 2.39466C9.51414 2.01956 10.8909 1.69447 12.5931 2.49469C14.3703 3.56998 14.5917 4.70796 14.7458 4.99537C15.1713 6.12068 14.9461 7.72111 14.9961 8.37129',
  d2: 'M15.5 19.7349C15.5 20.9789 14.4911 21.9653 13.2552 21.9653C12.0194 21.9653 11 20.9789 11 19.7349C11 18.4909 12.0194 17.4912 13.2552 17.4912C14.4911 17.4912 15.5 18.4909 15.5 19.7349Z',
  d3: 'M15.225 17.7904L17.2156 15.8477M22 15.8477L20.373 14.3084C19.6 13.5687 18.95 14.2143 18.6264 14.4901L17.2156 15.8477M17.2156 15.8477L18.825 17.393',
  d4: 'M6.03312 21.6538C4.24437 21.5764 2.77446 20.2679 2.53553 18.5976C2.37959 17.5076 2.25098 16.3905 2.25098 15.2529C2.25098 14.1153 2.37959 12.9982 2.53553 11.9082C2.77446 10.2379 4.24437 8.92942 6.03311 8.85202C7.53827 8.7869 9.06724 8.75293 10.751 8.75293C12.4347 8.75293 13.9637 8.7869 15.4689 8.85202C17.2576 8.92942 18.7275 10.2379 18.9665 11.9082C19.1224 12.9982 19.251 14.1153 19.251 15.2529C19.251 16.3905 19.1224 17.5076 18.9665 18.5976C18.7275 20.2679 17.2576 21.5764 15.4689 21.6538C14.9676 21.6755 14.4637 21.6937 13.9523 21.7084C14.3698 21.6248 14.7678 21.4241 15.0917 21.1061C15.9703 20.2434 15.9703 18.8447 15.0917 17.982C14.2131 17.1193 12.7886 17.1193 11.91 17.982C11.0313 18.8447 11.0313 20.2434 11.91 21.1061C12.2629 21.4526 12.7039 21.66 13.1623 21.7281C12.386 21.7445 11.5876 21.7529 10.751 21.7529C9.06724 21.7529 7.53827 21.7189 6.03312 21.6538Z',
  d5: 'M18.251 10.757C17.6676 9.66997 16.524 8.91068 15.2029 8.85223C13.728 8.78697 12.2298 8.75293 10.58 8.75293C8.93009 8.75293 7.43189 8.78697 5.95702 8.85223C4.20426 8.92978 2.76393 10.241 2.5298 11.9147C2.377 13.007 2.25098 14.1263 2.25098 15.2663C2.25098 16.4063 2.377 17.5256 2.5298 18.6179C2.76393 20.2916 4.20426 21.6028 5.95702 21.6804C6.67111 21.712 7.51139 21.7363 8.25098 21.7529',
  d6: 'M6.25098 8.75293V6.25293C6.25098 3.76765 8.2657 1.75293 10.751 1.75293C13.2363 1.75293 15.251 3.76765 15.251 6.25293V8.75293',
  d7: 'M15.7509 19.5225C15.7509 20.7665 14.742 21.7529 13.5061 21.7529C12.2703 21.7529 11.2509 20.7665 11.2509 19.5225C11.2509 18.2785 12.2703 17.2788 13.5061 17.2788C14.742 17.2788 15.7509 18.2785 15.7509 19.5225Z',
  d8: 'M15.4756 17.578L17.4662 15.6353M17.4662 15.6353L18.877 14.2777C19.2006 14.0019 19.8506 13.3563 20.6236 14.096L22.2506 15.6353M17.4662 15.6353L19.0756 17.1806',
  d9: 'M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22',
  d10: 'M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9',
  d11: 'M15.2248 17.8251L17.2154 15.8824M17.2154 15.8824L18.6262 14.5248C18.9498 14.249 19.5998 13.6034 20.3728 14.3431L21.9998 15.8824M17.2154 15.8824L18.8248 17.4277M15.4998 19.7696C15.4998 21.0136 14.4909 22 13.255 22C12.0192 22 10.9998 21.0136 10.9998 19.7696C10.9998 18.5256 12.0192 17.5259 13.255 17.5259C14.4909 17.5259 15.4998 18.5256 15.4998 19.7696Z',
  d12: 'M10 3.25C8.067 3.25 6.5 4.817 6.5 6.75V9.25C6.5 9.80228 6.05228 10.25 5.5 10.25C4.94772 10.25 4.5 9.80228 4.5 9.25V6.75C4.5 3.71243 6.96243 1.25 10 1.25C13.0376 1.25 15.5 3.71243 15.5 6.75V9.25C15.5 9.80228 15.0523 10.25 14.5 10.25C13.9477 10.25 13.5 9.80228 13.5 9.25V6.75C13.5 4.817 11.933 3.25 10 3.25Z',
  d13: 'M18.8971 16.5177C18.6894 16.3145 18.5855 16.2129 18.5875 16.0841C18.5894 15.9552 18.6941 15.8588 18.9033 15.6662C18.9591 15.6148 19.0127 15.5662 19.0634 15.5209C19.2159 15.3845 19.2922 15.3163 19.4066 15.3162C19.5211 15.3161 19.5971 15.3839 19.7491 15.5194C19.9014 15.6551 20.0826 15.8245 20.2849 16.0224L21.0704 16.7907C21.4596 17.1714 22.0849 17.1657 22.4671 16.778C22.8492 16.3903 22.8435 15.7674 22.4543 15.3868L21.6687 14.6184C21.3328 14.2897 20.9746 13.9393 20.6782 13.7181C20.3467 13.4707 19.933 13.25 19.4056 13.25C18.8783 13.25 18.4646 13.4707 18.1331 13.7181C17.8367 13.9393 17.5181 14.251 17.1822 14.5797L15.2348 16.4843C15.0931 16.6228 15.0223 16.6921 14.939 16.7107C14.8556 16.7293 14.7479 16.6918 14.5325 16.6168C13.4054 16.2246 12.1002 16.4704 11.1965 17.3543C9.93451 18.5886 9.93451 20.5974 11.1965 21.8317C12.4484 23.0561 14.4708 23.0561 15.7227 21.8317C16.6225 20.9516 16.8807 19.6778 16.4973 18.5717C16.4231 18.3576 16.386 18.2505 16.4035 18.1687C16.4045 18.1641 16.4052 18.1609 16.4064 18.1563C16.4273 18.0753 16.4973 18.0069 16.6372 17.87C16.8277 17.6838 16.9229 17.5906 17.0401 17.5872C17.046 17.587 17.0518 17.587 17.0576 17.5872C17.1748 17.5906 17.27 17.6838 17.4605 17.87L17.9281 18.3274C18.3173 18.7081 18.9426 18.7024 19.3248 18.3147C19.7069 17.927 19.7012 17.3042 19.312 16.9235L18.8971 16.5177ZM12.5803 18.7582C13.0639 18.2853 13.8552 18.2853 14.3388 18.7582C14.8123 19.2213 14.8123 19.9646 14.3388 20.4277C13.8552 20.9007 13.0639 20.9007 12.5803 20.4277C12.1069 19.9646 12.1069 19.2213 12.5803 18.7582Z',
  d14: 'M10 8.25C8.40416 8.25 6.95364 8.28422 5.52522 8.34988C3.46716 8.4445 1.79609 10.0382 1.52452 12.0552C1.37636 13.1556 1.25 14.3118 1.25 15.5C1.25 16.6882 1.37636 17.8444 1.52452 18.9448C1.79609 20.9618 3.46716 22.5555 5.52522 22.6501C6.53013 22.6963 7.54598 22.7269 8.61567 22.741C9.17358 22.7484 9.45254 22.7521 9.54228 22.6106C9.63203 22.469 9.49344 22.1848 9.21627 21.6165C8.36725 19.8754 8.67771 17.7197 10.1476 16.282C11.2641 15.1899 12.79 14.7663 14.222 14.9973C14.3913 15.0247 14.476 15.0383 14.544 15.0167C14.612 14.9952 14.668 14.9404 14.7801 14.8308L16.1705 13.4709C16.4775 13.1704 16.8578 12.7981 17.236 12.5159C17.4298 12.3713 17.6687 12.2144 17.9522 12.0804C18.2072 11.9599 18.3347 11.8997 18.3799 11.7974C18.4251 11.6952 18.3919 11.587 18.3256 11.3706C17.8102 9.6879 16.2936 8.4335 14.4748 8.34989C13.0464 8.28422 11.5958 8.25 10 8.25Z',
  d15: 'M18.1606 20.0775C18.1628 20.0724 18.1597 20.0666 18.1542 20.0656C18.1493 20.0646 18.1445 20.0681 18.144 20.0732C18.143 20.0831 18.1566 20.0866 18.1606 20.0775Z',
  d16: 'M6.5 6.75C6.5 4.817 8.067 3.25 10 3.25C11.933 3.25 13.5 4.817 13.5 6.75V8.31016C13.827 8.32177 14.1515 8.33502 14.4748 8.34988C14.8298 8.3662 15.1732 8.42712 15.5 8.52712V6.75C15.5 3.71243 13.0376 1.25 10 1.25C6.96243 1.25 4.5 3.71243 4.5 6.75V8.52712C4.82676 8.42712 5.17023 8.3662 5.52522 8.34988C5.84854 8.33502 6.17299 8.32177 6.5 8.31016V6.75Z',
  d17: 'M14.5678 9.00683V6.53084C14.5678 3.96508 12.6134 1.99902 10.1679 1.99902C7.72238 1.99902 5.57555 3.96508 5.57555 6.53084L5.45533 9.00683M18.072 11.0026V9.00683H2.00052L2.00173 22.0007H8.00206',
  d18: 'M14.8814 18.2038C14.4349 17.7888 13.9373 17.5609 13.2695 17.5609C12.0401 17.5609 11.0435 18.5549 11.0435 19.781C11.0435 21.0071 12.0401 22.0011 13.2695 22.0011C14.4989 22.0011 15.4955 21.0071 15.4955 19.781C15.4955 19.2209 15.2245 18.5944 14.8814 18.2038ZM14.8814 18.2038L17.2623 15.8506M21.9995 15.8888L19.7136 13.5689C19.6748 13.5295 19.6112 13.5291 19.5719 13.568L17.2623 15.8506M17.2623 15.8506L18.8259 17.4299',
  d19: 'M10 3.25C8.067 3.25 6.5 4.817 6.5 6.75V9.25H4.5V6.75C4.5 3.71243 6.96243 1.25 10 1.25C13.0376 1.25 15.5 3.71243 15.5 6.75V9.25H13.5V6.75C13.5 4.817 11.933 3.25 10 3.25Z',
  d20: 'M19.161 13.1086C19.5297 12.7398 20.1277 12.7398 20.4965 13.1086L22.75 15.3621L21.4145 16.6976L19.8287 15.1119L18.9169 16.0237L19.7392 16.8312L18.4159 18.1788L17.5752 17.3534L16.559 18.3512C17.1421 19.4904 16.9501 20.9175 15.983 21.8671C14.7859 23.0425 12.8521 23.0425 11.655 21.8671C10.4483 20.6823 10.4483 18.754 11.655 17.5692C12.6212 16.6205 14.0674 16.4375 15.2187 17.0203L16.9105 15.3591L19.161 13.1086ZM14.6597 18.9169C14.1973 18.4629 13.4406 18.4629 12.9783 18.9169C12.5255 19.3614 12.5255 20.0749 12.9783 20.5195C13.4406 20.9735 14.1973 20.9735 14.6597 20.5195C15.1124 20.0749 15.1124 19.3614 14.6597 18.9169Z',
  d21: 'M18.75 8.25H1.25V22.75H10.4227C8.80081 20.9663 8.86126 18.2111 10.6041 16.4999C11.7568 15.368 13.3609 14.9716 14.83 15.3008L15.8547 14.2945L18.1003 12.0489C18.2955 11.8538 18.5154 11.6985 18.75 11.5832V8.25Z',
};

export const IconLockKeyStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-key-stroke-rounded IconLockKeyStrokeRounded"
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

export const IconLockKeyDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-key-duotone-rounded IconLockKeyDuotoneRounded"
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
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLockKeyTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-key-twotone-rounded IconLockKeyTwotoneRounded"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLockKeySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-key-solid-rounded IconLockKeySolidRounded"
    >
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLockKeyBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-key-bulk-rounded IconLockKeyBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLockKeyStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-key-stroke-sharp IconLockKeyStrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLockKeySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-key-solid-sharp IconLockKeySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLockKey: TheIconSelfPack = {
  name: 'LockKey',
  StrokeRounded: IconLockKeyStrokeRounded,
  DuotoneRounded: IconLockKeyDuotoneRounded,
  TwotoneRounded: IconLockKeyTwotoneRounded,
  SolidRounded: IconLockKeySolidRounded,
  BulkRounded: IconLockKeyBulkRounded,
  StrokeSharp: IconLockKeyStrokeSharp,
  SolidSharp: IconLockKeySolidSharp,
};