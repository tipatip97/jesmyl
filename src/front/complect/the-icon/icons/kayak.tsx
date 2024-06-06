import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.8208 3.18011C10.9261 1.49903 2.07221 11.6149 3.03361 20.9241C12.3654 21.8831 22.506 13.0507 20.8208 3.18011Z',
  d2: 'M6.95947 16.9956H6.96845',
  d3: 'M16.9595 6.99561H16.9685',
  d4: 'M9.4958 14.4776C8.80348 13.787 8.80348 12.6673 9.4958 11.9767L11.9649 9.51358C12.6572 8.82295 13.7796 8.82295 14.4719 9.51358C15.1643 10.2042 15.1643 11.3239 14.4719 12.0145L12.0028 14.4776C11.3105 15.1683 10.1881 15.1683 9.4958 14.4776Z',
  d5: 'M5.75869 5.68351C5.881 3.29211 5.22287 2.32941 4.6042 2.05759C4.24672 1.90053 3.85777 2.09946 3.54251 2.32954C2.94925 2.7625 2.62326 3.08467 2.23657 3.67953C2.03935 3.98292 1.91342 4.36016 2.06996 4.68629C2.5949 5.77999 4.68545 5.93926 5.75869 5.68351ZM5.75869 5.68351L18.2405 18.3171M18.2405 18.3171C18.1197 20.7086 18.7785 21.6709 19.3973 21.9423C19.7549 22.0992 20.1437 21.9 20.4588 21.6697C21.0518 21.2364 21.3776 20.914 21.7639 20.3189C21.9609 20.0153 22.0866 19.638 21.9299 19.312C21.4042 18.2186 19.3136 18.0607 18.2405 18.3171Z',
  d6: 'M20.8165 3.18451C10.9459 1.50343 2.11343 11.6193 3.07249 20.9285C12.3817 21.8875 22.4976 13.0551 20.8165 3.18451Z',
  d7: 'M7.00098 17H7.00996',
  d8: 'M17.001 7H17.01',
  d9: 'M20.8165 3.18451C10.9459 1.50343 2.11343 11.6193 3.07249 20.9285C12.3817 21.8875 22.4976 13.0551 20.8165 3.18451ZM9.51894 11.9811C8.82831 12.6717 8.82831 13.7914 9.51894 14.482C10.2096 15.1727 11.3293 15.1727 12.0199 14.482L14.483 12.0189C15.1737 11.3283 15.1737 10.2086 14.483 9.51797C13.7924 8.82734 12.6727 8.82734 11.9821 9.51797L9.51894 11.9811Z',
  d10: 'M9.51895 14.482C8.82832 13.7914 8.82832 12.6717 9.51895 11.9811L11.9821 9.51797C12.6727 8.82734 13.7924 8.82734 14.483 9.51797C15.1737 10.2086 15.1737 11.3283 14.483 12.0189L12.0199 14.482C11.3293 15.1727 10.2096 15.1727 9.51895 14.482Z',
  d11: 'M5.75918 5.684C5.88149 3.2926 5.22336 2.3299 4.60469 2.05808C4.24721 1.90102 3.85826 2.09995 3.543 2.33003C2.94974 2.76299 2.62375 3.08516 2.23706 3.68002C2.03984 3.98341 1.91391 4.36065 2.07045 4.68678C2.59539 5.78048 4.68594 5.93975 5.75918 5.684ZM5.75918 5.684L18.241 18.3176M18.241 18.3176C18.1202 20.7091 18.779 21.6714 19.3978 21.9428C19.7554 22.0997 20.1442 21.9005 20.4593 21.6702C21.0523 21.2369 21.3781 20.9145 21.7644 20.3194C21.9614 20.0158 22.0871 19.6385 21.9304 19.3125C21.4047 18.2191 19.3141 18.0612 18.241 18.3176Z',
  d12: 'M20.815 3.18451C10.9444 1.50343 2.11197 11.6193 3.07103 20.9285C12.3802 21.8875 22.4961 13.0551 20.815 3.18451Z',
  d13: 'M6.99951 17H7.00849',
  d14: 'M16.9995 7H17.0085',
  d15: 'M9.51748 14.482C8.82685 13.7914 8.82685 12.6717 9.51748 11.9811L11.9806 9.51797C12.6712 8.82734 13.7909 8.82734 14.4815 9.51797C15.1722 10.2086 15.1722 11.3283 14.4815 12.0189L12.0184 14.482C11.3278 15.1727 10.2081 15.1727 9.51748 14.482Z',
  d16: 'M5.75869 5.68375C5.881 3.29235 5.22287 2.32965 4.6042 2.05783C4.24672 1.90077 3.85777 2.09971 3.54251 2.32978C2.94925 2.76275 2.62326 3.08492 2.23657 3.67978C2.03935 3.98317 1.91342 4.3604 2.06996 4.68654C2.5949 5.78023 4.68545 5.9395 5.75869 5.68375ZM5.75869 5.68375L18.2405 18.3174M18.2405 18.3174C18.1197 20.7089 18.7785 21.6711 19.3973 21.9426C19.7549 22.0994 20.1437 21.9002 20.4588 21.6699C21.0518 21.2366 21.3776 20.9142 21.7639 20.3191C21.9609 20.0156 22.0866 19.6383 21.9299 19.3122C21.4042 18.2189 19.3136 18.061 18.2405 18.3174Z',
  d17: 'M20.9415 2.4455C15.7058 1.55381 10.792 3.79894 7.33979 7.41782C3.89249 11.0316 1.81989 16.0975 2.32556 21.0057C2.36196 21.3591 2.64134 21.6385 2.99475 21.6749C7.90297 22.1805 12.9688 20.108 16.5826 16.6606C20.2015 13.2085 22.4466 8.29461 21.5549 3.05893C21.5015 2.74494 21.2555 2.49898 20.9415 2.4455ZM7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18H7.00898C7.56127 18 8.00898 17.5523 8.00898 17C8.00898 16.4477 7.56127 16 7.00898 16H7ZM16 7C16 6.44772 16.4477 6 17 6H17.009C17.5613 6 18.009 6.44772 18.009 7C18.009 7.55228 17.5613 8 17.009 8H17C16.4477 8 16 7.55228 16 7ZM15.0124 8.98764C14.0288 8.00412 12.4342 8.00412 11.4507 8.98764L8.98764 11.4507C8.00412 12.4342 8.00412 14.0288 8.98764 15.0124C9.97116 15.9959 11.5658 15.9959 12.5493 15.0124L15.0124 12.5493C15.9959 11.5658 15.9959 9.97116 15.0124 8.98764Z',
  d18: 'M6.53708 5.12338C6.55103 4.98795 6.55624 4.84907 6.55489 4.71136C6.55015 4.22654 6.463 3.66812 6.29963 3.15291C6.14094 2.65244 5.88285 2.10543 5.47803 1.72483C5.26779 1.52715 4.99956 1.35764 4.67231 1.28585C4.3384 1.21261 3.9988 1.25357 3.67548 1.39053C3.44672 1.48742 3.21292 1.649 3.01168 1.80735C2.79992 1.97398 2.58061 2.17201 2.37624 2.37641C2.17187 2.5808 1.97386 2.80013 1.80725 3.01192C1.64892 3.21318 1.48737 3.447 1.39049 3.67576C1.25357 3.99909 1.21262 4.33868 1.28584 4.67256C1.35761 4.9998 1.52708 5.26804 1.72474 5.47831C2.1053 5.88318 2.65227 6.14131 3.1527 6.30004C3.66787 6.46343 4.22625 6.55059 4.71104 6.55533C4.84866 6.55668 4.98747 6.55148 5.12282 6.53754L17.4628 18.8787C17.449 19.0135 17.4438 19.1517 17.4452 19.2887C17.4499 19.7735 17.5371 20.3319 17.7004 20.8472C17.8591 21.3476 18.1172 21.8946 18.522 22.2752C18.7323 22.4729 19.0005 22.6424 19.3278 22.7142C19.6617 22.7875 20.0013 22.7465 20.3246 22.6095C20.5533 22.5126 20.7871 22.3511 20.9884 22.1927C21.2002 22.0261 21.4195 21.8281 21.6238 21.6237C21.8282 21.4193 22.0262 21.1999 22.1928 20.9881C22.3512 20.7869 22.5127 20.5531 22.6096 20.3243C22.7465 20.001 22.7874 19.6614 22.7142 19.3275C22.6425 19.0003 22.473 18.732 22.2753 18.5218C21.8948 18.1169 21.3478 17.8588 20.8474 17.7C20.3322 17.5366 19.7738 17.4495 19.289 17.4447C19.1507 17.4434 19.0113 17.4486 18.8753 17.4627L6.53708 5.12338Z',
  d19: 'M7.33979 7.41782C10.792 3.79894 15.7058 1.55381 20.9415 2.4455C21.2555 2.49898 21.5015 2.74494 21.5549 3.05893C22.4466 8.29461 20.2015 13.2085 16.5826 16.6606C12.9688 20.108 7.90297 22.1805 2.99475 21.6749C2.64134 21.6385 2.36196 21.3591 2.32556 21.0057C1.81989 16.0975 3.89249 11.0316 7.33979 7.41782Z',
  d20: 'M16 7C16 6.44772 16.4477 6 17 6H17.009C17.5613 6 18.009 6.44772 18.009 7C18.009 7.55228 17.5613 8 17.009 8H17C16.4477 8 16 7.55228 16 7ZM6 17C6 16.4477 6.44772 16 7 16H7.00898C7.56127 16 8.00898 16.4477 8.00898 17C8.00898 17.5523 7.56127 18 7.00898 18H7C6.44772 18 6 17.5523 6 17ZM15.0124 8.98764C14.0288 8.00412 12.4342 8.00412 11.4507 8.98764L8.98764 11.4507C8.00412 12.4342 8.00412 14.0288 8.98764 15.0124C9.97116 15.9959 11.5658 15.9959 12.5493 15.0124L15.0124 12.5493C15.9959 11.5658 15.9959 9.97116 15.0124 8.98764Z',
  d21: 'M20.8392 3.18344C10.9561 1.50323 2.11256 11.6138 3.07283 20.9182C12.3937 21.8767 22.5224 13.0489 20.8392 3.18344Z',
  d22: 'M7.00586 16.9922H7.01484',
  d23: 'M17.0186 6.99707H17.0276',
  d24: 'M9.52729 14.4753C8.83579 13.785 8.83579 12.6659 9.52729 11.9756L11.9935 9.5138C12.685 8.82353 13.8061 8.82353 14.4976 9.5138C15.1892 10.2041 15.1892 11.3232 14.4976 12.0134L12.0314 14.4753C11.3399 15.1656 10.2188 15.1656 9.52729 14.4753Z',
  d25: 'M18.0571 17.9752L11.9988 11.9258L6.00893 5.92959M18.0571 17.9752C17.5015 18.5095 17.6548 19.8162 18.9828 21.9963L22.0127 18.9975C20.2345 17.7584 18.6883 17.3683 18.0571 17.9752ZM6.00893 5.92959C5.47363 6.47811 4.17375 6.3177 2.01172 4.98509L5.01592 1.99438C6.23838 3.76825 6.61707 5.30643 6.00893 5.92959Z',
  d26: 'M5.95889 2.12457C5.93155 2.08104 5.37929 1.25 5.37929 1.25L1.25 5.37987L1.4729 5.52776C1.72238 5.69342 2.09527 5.94104 2.12448 5.95938C2.21147 6.014 2.33538 6.08992 2.48665 6.1775C2.78728 6.35153 3.20493 6.57682 3.66095 6.77225C4.10895 6.96424 4.63485 7.1454 5.14281 7.20183C5.42616 7.23331 5.75624 7.23082 6.07478 7.13397L16.8661 17.9253C16.7693 18.2439 16.7669 18.5739 16.7984 18.8573C16.8548 19.3652 17.0361 19.8911 17.2281 20.3391C17.4236 20.7951 17.6489 21.2128 17.823 21.5134C17.9105 21.6647 17.9865 21.7886 18.0411 21.8756C18.0594 21.9047 18.3051 22.2746 18.4707 22.5241L18.4723 22.5264L18.4732 22.5278C18.5542 22.6498 18.6156 22.7422 18.6207 22.7501L22.75 18.6203C22.7421 18.6152 22.6501 18.5541 22.5284 18.4733L22.5262 18.4718C22.2767 18.3061 21.9047 18.0591 21.8755 18.0408C21.7885 17.9862 21.6646 17.9102 21.5133 17.8227C21.2127 17.6486 20.7951 17.4233 20.339 17.2279C19.8911 17.0359 19.3651 16.8548 18.8572 16.7983C18.5745 16.7669 18.2454 16.7693 17.9276 16.8655L7.13458 6.07246C7.2307 5.75465 7.23306 5.42551 7.20163 5.14288C7.14516 4.63493 6.96394 4.10903 6.77191 3.66104C6.57644 3.20502 6.35111 2.78737 6.17704 2.48675C6.08945 2.33547 6.01352 2.21156 5.95889 2.12457Z',
  d27: 'M20.9442 2.4455C15.7085 1.55381 10.7946 3.79894 7.34247 7.41782C3.89517 11.0316 1.82258 16.0975 2.32824 21.0057L2.39074 21.6124L2.99743 21.6749C7.90565 22.1805 12.9715 20.108 16.5853 16.6606C20.2042 13.2085 22.4493 8.29461 21.5576 3.05893L21.4684 2.53477L20.9442 2.4455ZM7.00269 16.0005C6.4504 16.0005 6.00269 16.4482 6.00269 17.0005C6.00269 17.5528 6.4504 18.0005 7.00269 18.0005H7.01167C7.56395 18.0005 8.01167 17.5528 8.01167 17.0005C8.01167 16.4482 7.56395 16.0005 7.01167 16.0005H7.00269ZM16.0027 7.00049C16.0027 6.4482 16.4504 6.00049 17.0027 6.00049H17.0117C17.564 6.00049 18.0117 6.4482 18.0117 7.00049C18.0117 7.55277 17.564 8.00049 17.0117 8.00049H17.0027C16.4504 8.00049 16.0027 7.55277 16.0027 7.00049ZM15.015 8.98813C14.0315 8.00461 12.4369 8.00461 11.4534 8.98813L8.99033 11.4512C8.00681 12.4347 8.00681 14.0293 8.99032 15.0128C9.97385 15.9964 11.5684 15.9964 12.552 15.0128L15.015 12.5498C15.9986 11.5662 15.9986 9.97165 15.015 8.98813Z',
};

export const IconKayakStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kayak-stroke-rounded IconKayakStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconKayakDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kayak-duotone-rounded IconKayakDuotoneRounded"
    >
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
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKayakTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kayak-twotone-rounded IconKayakTwotoneRounded"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKayakSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kayak-solid-rounded IconKayakSolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconKayakBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kayak-bulk-rounded IconKayakBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKayakStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kayak-stroke-sharp IconKayakStrokeSharp"
    >
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKayakSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kayak-solid-sharp IconKayakSolidSharp"
    >
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKayak: TheIconSelfPack = {
  name: 'Kayak',
  StrokeRounded: IconKayakStrokeRounded,
  DuotoneRounded: IconKayakDuotoneRounded,
  TwotoneRounded: IconKayakTwotoneRounded,
  SolidRounded: IconKayakSolidRounded,
  BulkRounded: IconKayakBulkRounded,
  StrokeSharp: IconKayakStrokeSharp,
  SolidSharp: IconKayakSolidSharp,
};