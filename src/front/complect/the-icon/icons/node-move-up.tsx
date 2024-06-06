import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.49512 8V12.5M5.49512 12.5V14C5.49512 16.8284 5.49512 18.2426 6.37314 19.1213C7.19781 19.9466 8.49459 19.9968 10.991 19.9998M5.49512 12.5H10.991',
  d2: 'M10.9907 12.5C10.9907 11.5572 10.9907 11.0858 11.2834 10.7929C11.5761 10.5 12.0471 10.5 12.9892 10.5C13.9313 10.5 14.4024 10.5 14.695 10.7929C14.9877 11.0858 14.9877 11.5572 14.9877 12.5C14.9877 13.4428 14.9877 13.9142 14.695 14.2071C14.4024 14.5 13.9313 14.5 12.9892 14.5C12.0471 14.5 11.5761 14.5 11.2834 14.2071C10.9907 13.9142 10.9907 13.4428 10.9907 12.5Z',
  d3: 'M10.9907 20C10.9907 19.0572 10.9907 18.5858 11.2834 18.2929C11.5761 18 12.0471 18 12.9892 18C13.9313 18 14.4024 18 14.695 18.2929C14.9877 18.5858 14.9877 19.0572 14.9877 20C14.9877 20.9428 14.9877 21.4142 14.695 21.7071C14.4024 22 13.9313 22 12.9892 22C12.0471 22 11.5761 22 11.2834 21.7071C10.9907 21.4142 10.9907 20.9428 10.9907 20Z',
  d4: 'M3.99605 2H6.99379C8.80763 2 8.99229 3.10993 8.99229 5C8.99229 6.89007 8.80763 8 6.99379 8H3.99605C2.18222 8 1.99756 6.89007 1.99756 5C1.99756 3.10993 2.18222 2 3.99605 2Z',
  d5: 'M17.9923 11.0888L19.4465 9.31614C19.6852 9.04977 19.8549 8.99924 20.003 9.00381M20.003 9.00381C20.1493 9.00832 20.2878 9.06683 20.4968 9.31614L22.0022 11.1001M20.003 9.00381L19.9803 17.2621C20.0513 18.1365 19.931 19.8282 17.9834 20.0082',
  d6: 'M11 12.5C11 11.5572 11 11.0858 11.2929 10.7929C11.5858 10.5 12.0572 10.5 13 10.5C13.9428 10.5 14.4142 10.5 14.7071 10.7929C15 11.0858 15 11.5572 15 12.5C15 13.4428 15 13.9142 14.7071 14.2071C14.4142 14.5 13.9428 14.5 13 14.5C12.0572 14.5 11.5858 14.5 11.2929 14.2071C11 13.9142 11 13.4428 11 12.5Z',
  d7: 'M4 2H7C8.8152 2 9 3.10993 9 5C9 6.89007 8.8152 8 7 8H4C2.1848 8 2 6.89007 2 5C2 3.10993 2.1848 2 4 2Z',
  d8: 'M5.5 8V12.5M5.5 12.5V14C5.5 16.8284 5.5 18.2426 6.37868 19.1213C7.20398 19.9466 8.50173 19.9968 11 19.9998M5.5 12.5H11',
  d9: 'M20 17.9048H19.25H20ZM21 9.86788L21.5814 9.39414V9.39414L21 9.86788ZM21.4186 11.569C21.6802 11.8901 22.1526 11.9383 22.4737 11.6767C22.7949 11.415 22.8431 10.9426 22.5814 10.6215L21.4186 11.569ZM17.4186 10.6215C17.1569 10.9426 17.2051 11.415 17.5263 11.6767C17.8474 11.9383 18.3198 11.8901 18.5814 11.569L17.4186 10.6215ZM19 9.86788L18.4186 9.39414L18.4186 9.39414L19 9.86788ZM18 19.25C17.5858 19.25 17.25 19.5858 17.25 20C17.25 20.4142 17.5858 20.75 18 20.75V19.25ZM20.75 17.9048L20.75 9L19.25 9L19.25 17.9048H20.75ZM20.4186 10.3416L21.4186 11.569L22.5814 10.6215L21.5814 9.39414L20.4186 10.3416ZM18.5814 11.569L19.5814 10.3416L18.4186 9.39414L17.4186 10.6215L18.5814 11.569ZM21.5814 9.39414C21.3598 9.12211 21.146 8.85708 20.9457 8.66953C20.7374 8.47446 20.428 8.25 20 8.25V9.75C19.8649 9.75 19.8198 9.67019 19.9204 9.76441C20.0291 9.86615 20.1688 10.0351 20.4186 10.3416L21.5814 9.39414ZM19.5814 10.3416C19.8312 10.0351 19.9709 9.86615 20.0796 9.76441C20.1802 9.67019 20.1351 9.75 20 9.75V8.25C19.572 8.25 19.2626 8.47446 19.0543 8.66953C18.854 8.85708 18.6402 9.12211 18.4186 9.39414L19.5814 10.3416ZM19.25 17.9048C19.25 18.681 18.6579 19.25 18 19.25V20.75C19.5513 20.75 20.75 19.4429 20.75 17.9048H19.25Z',
  d10: 'M11 20C11 19.0572 11 18.5858 11.2929 18.2929C11.5858 18 12.0572 18 13 18C13.9428 18 14.4142 18 14.7071 18.2929C15 18.5858 15 19.0572 15 20C15 20.9428 15 21.4142 14.7071 21.7071C14.4142 22 13.9428 22 13 22C12.0572 22 11.5858 22 11.2929 21.7071C11 21.4142 11 20.9428 11 20Z',
  d11: 'M21 11.6549V18.0952C21 19.7449 19.6103 21 18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5988 19 19 18.5495 19 18.0952V11.6549H18C17.8217 11.6549 17.6427 11.5918 17.4994 11.4634C17.191 11.1869 17.165 10.7128 17.4415 10.4043L18.4415 9.28852C18.6529 9.05257 18.887 8.79123 19.0808 8.62626C19.2962 8.4429 19.5971 8.2501 20 8.2501C20.4029 8.2501 20.7038 8.44289 20.9192 8.62626C21.113 8.79123 21.3471 9.05257 21.5585 9.28852L22.5585 10.4043C22.835 10.7128 22.809 11.1869 22.5006 11.4634C22.3573 11.5918 22.1783 11.6549 22 11.6549H21Z',
  d12: 'M5.5 7C6.05229 7 6.5 7.44772 6.5 8V11.5H11C11.5523 11.5 12 11.9477 12 12.5C12 13.0523 11.5523 13.5 11 13.5H6.5V14C6.5 15.4425 6.50213 16.4237 6.60092 17.1586C6.69585 17.8646 6.86322 18.1916 7.08579 18.4142C7.29564 18.6241 7.59723 18.7838 8.21697 18.881C8.86597 18.9828 9.73354 18.9983 11.0012 18.9998C11.5535 19.0005 12.0007 19.4487 12 20.001C11.9993 20.5533 11.5511 21.0005 10.9988 20.9998C9.7682 20.9983 8.73775 20.9872 7.90699 20.8568C7.04696 20.7219 6.28702 20.4439 5.67158 19.8284C5.01547 19.1723 4.7435 18.3529 4.61875 17.4251C4.49994 16.5413 4.49997 15.4247 4.5 14.0706L4.5 8C4.5 7.44772 4.94772 7 5.5 7Z',
  d13: 'M12.9553 9.75L13 9.75001L13.0448 9.75C13.4776 9.74995 13.8744 9.74991 14.1972 9.79331C14.5527 9.8411 14.9284 9.95355 15.2374 10.2626C15.5465 10.5716 15.6589 10.9473 15.7067 11.3028C15.7501 11.6256 15.7501 12.0224 15.75 12.4553V12.4553L15.75 12.5L15.75 12.5448V12.5448C15.7501 12.9776 15.7501 13.3744 15.7067 13.6972C15.6589 14.0527 15.5465 14.4284 15.2374 14.7374C14.9284 15.0465 14.5527 15.1589 14.1972 15.2067C13.8744 15.2501 13.4776 15.2501 13.0448 15.25H13.0448L13 15.25L12.9553 15.25H12.9553C12.5224 15.2501 12.1256 15.2501 11.8028 15.2067C11.4473 15.1589 11.0716 15.0465 10.7626 14.7374C10.4535 14.4284 10.3411 14.0527 10.2933 13.6972C10.2499 13.3744 10.25 12.9776 10.25 12.5448L10.25 12.5L10.25 12.4553C10.25 12.0224 10.2499 11.6256 10.2933 11.3028C10.3411 10.9473 10.4535 10.5716 10.7626 10.2626C11.0716 9.95355 11.4473 9.8411 11.8028 9.79331C12.1256 9.74991 12.5224 9.74995 12.9553 9.75Z',
  d14: 'M12.9553 17.25L13 17.25L13.0448 17.25C13.4776 17.25 13.8744 17.2499 14.1972 17.2933C14.5527 17.3411 14.9284 17.4535 15.2374 17.7626C15.5465 18.0716 15.6589 18.4473 15.7067 18.8028C15.7501 19.1256 15.7501 19.5224 15.75 19.9553V19.9553L15.75 20L15.75 20.0448V20.0448C15.7501 20.4776 15.7501 20.8744 15.7067 21.1972C15.6589 21.5527 15.5465 21.9284 15.2374 22.2374C14.9284 22.5465 14.5527 22.6589 14.1972 22.7067C13.8744 22.7501 13.4776 22.7501 13.0448 22.75H13.0448L13 22.75L12.9553 22.75H12.9553C12.5224 22.7501 12.1256 22.7501 11.8028 22.7067C11.4473 22.6589 11.0716 22.5465 10.7626 22.2374C10.4535 21.9284 10.3411 21.5527 10.2933 21.1972C10.2499 20.8744 10.25 20.4776 10.25 20.0448L10.25 20L10.25 19.9553C10.25 19.5224 10.2499 19.1256 10.2933 18.8028C10.3411 18.4473 10.4535 18.0716 10.7626 17.7626C11.0716 17.4535 11.4473 17.3411 11.8028 17.2933C12.1256 17.2499 12.5224 17.25 12.9553 17.25Z',
  d15: 'M2.59166 1.52949C3.00042 1.32916 3.47599 1.25 4 1.25H7C7.52401 1.25 7.99958 1.32916 8.40834 1.52949C8.83238 1.7373 9.13747 2.05266 9.34295 2.43918C9.71797 3.14465 9.75 4.08743 9.75 5C9.75 5.91257 9.71797 6.85535 9.34295 7.56082C9.13747 7.94734 8.83238 8.2627 8.40834 8.47051C7.99958 8.67084 7.52401 8.75 7 8.75H4C3.47599 8.75 3.00042 8.67084 2.59166 8.47051C2.16762 8.2627 1.86253 7.94734 1.65705 7.56082C1.28203 6.85535 1.25 5.91257 1.25 5C1.25 4.08743 1.28203 3.14465 1.65705 2.43918C1.86253 2.05266 2.16762 1.7373 2.59166 1.52949Z',
  d16: 'M4.5 8.75L4.5 14.0706C4.49997 15.4247 4.49994 16.5413 4.61876 17.4251C4.7435 18.3529 5.01547 19.1723 5.67158 19.8284C6.28702 20.4439 7.04696 20.7219 7.90699 20.8568C8.56867 20.9606 9.35702 20.9888 10.2723 20.9968C10.2499 20.7156 10.25 20.3918 10.25 20.0448V19.9553C10.25 19.6055 10.2499 19.2792 10.2728 18.9965C9.38818 18.9883 8.73339 18.962 8.21697 18.881C7.59723 18.7838 7.29564 18.6241 7.08579 18.4142C6.86322 18.1916 6.69585 17.8646 6.60092 17.1586C6.50213 16.4237 6.5 15.4425 6.5 14V13.5H10.2725C10.2499 13.2181 10.25 12.8931 10.25 12.5448V12.4553C10.25 12.1069 10.2499 11.7819 10.2725 11.5H6.5V8.75H4.5Z',
  d17: 'M8.99862 8V2H2V8H8.99862Z',
  d18: 'M14.9975 14.5V10.5H10.9983V14.5H14.9975Z',
  d19: 'M14.9975 22V18H10.9983V22H14.9975Z',
  d20: 'M5.49902 8V12.5M5.49902 12.5V20L10.9979 19.9998M5.49902 12.5H10.9979',
  d21: 'M17.4871 20.0362H19.6524C19.7076 20.0362 19.7523 19.9914 19.7523 19.9362V9.68132M17.4883 11.0196L19.7523 8.95996L22.0028 11.0196',
  d22: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H9C9.41421 1.25 9.75 1.58579 9.75 2V8C9.75 8.41421 9.41421 8.75 9 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8V2Z',
  d23: 'M10.25 10.5C10.25 10.0858 10.5858 9.75 11 9.75H15C15.4142 9.75 15.75 10.0858 15.75 10.5V14.5C15.75 14.9142 15.4142 15.25 15 15.25H11C10.5858 15.25 10.25 14.9142 10.25 14.5V10.5Z',
  d24: 'M10.25 18C10.25 17.5858 10.5858 17.25 11 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18V22C15.75 22.4142 15.4142 22.75 15 22.75H11C10.5858 22.75 10.25 22.4142 10.25 22V18Z',
  d25: 'M4.50024 8H6.50024V11.5H11.0002V13.5H6.50024V19L11.0002 18.9998L11.0003 20.9998L5.50028 21C5.23506 21 4.98069 20.8947 4.79315 20.7071C4.60561 20.5196 4.50024 20.2652 4.50024 20V8Z',
  d26: 'M19.7501 7.66199L22.6644 10.2525L21.3357 11.7474L20.7501 11.2268V20C20.7501 20.5523 20.3023 21 19.7501 21H17.5001V19H18.7501V11.2268L18.1644 11.7474L16.8357 10.2525L19.7501 7.66199Z',
};

export const IconNodeMoveUpStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-move-up-stroke-rounded IconNodeMoveUpStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconNodeMoveUpDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-move-up-duotone-rounded IconNodeMoveUpDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeMoveUpTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-move-up-twotone-rounded IconNodeMoveUpTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeMoveUpSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-move-up-solid-rounded IconNodeMoveUpSolidRounded"
    >
      <path 
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

export const IconNodeMoveUpBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-move-up-bulk-rounded IconNodeMoveUpBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeMoveUpStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-move-up-stroke-sharp IconNodeMoveUpStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeMoveUpSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="node-move-up-solid-sharp IconNodeMoveUpSolidSharp"
    >
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNodeMoveUp: TheIconSelfPack = {
  name: 'NodeMoveUp',
  StrokeRounded: IconNodeMoveUpStrokeRounded,
  DuotoneRounded: IconNodeMoveUpDuotoneRounded,
  TwotoneRounded: IconNodeMoveUpTwotoneRounded,
  SolidRounded: IconNodeMoveUpSolidRounded,
  BulkRounded: IconNodeMoveUpBulkRounded,
  StrokeSharp: IconNodeMoveUpStrokeSharp,
  SolidSharp: IconNodeMoveUpSolidSharp,
};