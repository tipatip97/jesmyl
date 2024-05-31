import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15 4L12 6L9 4C8.41425 4.50941 7.07071 5.29343 7.00348 6.14565C6.97434 6.51512 7.12883 6.71716 7.43782 7.12122C8.11164 8.00239 8.87991 8.52009 8.87991 10H15.1201C15.1201 8.52009 15.8884 8.00239 16.5622 7.12122C16.8712 6.71716 17.0257 6.51512 16.9965 6.14565C16.9293 5.29343 15.5858 4.50941 15 4Z',
  d2: 'M19.8632 17.8082C19.1589 15.1179 17.3658 12.6502 16.1811 11.2368C15.3314 10.2231 14.7041 10 13.3704 10H10.6296C9.29591 10 8.66864 10.2231 7.81893 11.2368C6.63423 12.6502 4.8411 15.1179 4.13677 17.8082C3.70683 19.4504 4.29064 20.3493 5.88646 20.9301C7.32124 21.4523 9.43708 22 12 22C14.5629 22 16.6788 21.4523 18.1135 20.9301C19.7094 20.3493 20.2932 19.4504 19.8632 17.8082Z',
  d3: 'M9 4V2',
  d4: 'M15 4V2',
  d5: 'M14 15C14 15 16 18 16 21.5M10 15C10 15 8 18 8 21.5',
  d6: 'M17.3416 11.4797C18.5026 12.9742 19.9542 15.1937 20.5887 17.6171C20.8311 18.5433 20.825 19.4044 20.3966 20.1425C19.9771 20.8654 19.2393 21.3173 18.3699 21.6337C18.1186 21.7251 17.6035 22.0167 17.3595 21.8625C17.2388 21.7862 17.2173 21.6062 17.1743 21.2461C17.0081 19.8558 16.5955 18.6045 16.1917 17.6454C15.9291 17.0218 15.485 16.1236 15.1245 15.5829C14.8947 15.2383 14.429 15.1451 14.0844 15.3749C13.74 15.6045 13.6473 16.0704 13.8764 16.415C14.2292 16.9456 14.5717 17.6635 14.8092 18.2275C15.2249 19.2147 15.6295 20.4945 15.7278 21.8733C15.7443 22.1044 15.7526 22.2199 15.6816 22.3108C15.6107 22.4017 15.494 22.4223 15.2606 22.4634C14.2796 22.6363 13.1857 22.7489 11.9999 22.7489C10.8143 22.7489 9.72062 22.6364 8.73987 22.4635C8.50643 22.4224 8.38971 22.4019 8.31879 22.311C8.24787 22.2201 8.25611 22.1045 8.27259 21.8735C8.37094 20.4946 8.77554 19.2147 9.19123 18.2275C9.42868 17.6635 9.77119 16.9456 10.124 16.415C10.3531 16.0704 10.2604 15.6045 9.91603 15.3749C9.57138 15.1451 9.10573 15.2383 8.87596 15.5829C8.51547 16.1236 8.07132 17.0218 7.80877 17.6454C7.4049 18.6046 6.99227 19.8559 6.82613 21.2463C6.78311 21.6064 6.7616 21.7864 6.64092 21.8627C6.39685 22.0169 5.8812 21.7252 5.62984 21.6337C4.76042 21.3173 4.0227 20.8654 3.60317 20.1425C3.17478 19.4044 3.16862 18.5433 3.41111 17.6171C4.04557 15.1937 5.49713 12.9742 6.65819 11.4797C6.92866 11.1316 7.0639 10.9575 7.27191 10.8557C7.47992 10.7539 7.71237 10.7539 8.17728 10.7539H15.8225C16.2874 10.7539 16.5198 10.7539 16.7279 10.8557C16.9359 10.9575 17.0711 11.1316 17.3416 11.4797Z',
  d7: 'M9.7497 2C9.7497 1.58579 9.41391 1.25 8.9997 1.25C8.58549 1.25 8.2497 1.58579 8.2497 2V3.40138C8.2497 3.49074 8.2497 3.53542 8.23756 3.57679C8.22768 3.61045 8.2116 3.64277 8.1907 3.67096C8.16503 3.70559 8.12965 3.73235 8.05888 3.78586L7.99749 3.83229C7.78807 3.99078 7.54368 4.17764 7.31247 4.38046C7.08308 4.58167 6.84354 4.81833 6.65202 5.08505C6.4621 5.34953 6.28704 5.68835 6.25562 6.08667C6.2035 6.74745 6.52389 7.16363 6.79629 7.51748L6.84186 7.5768C7.02511 7.81644 7.19251 8.0133 7.34158 8.18861C7.54809 8.43145 7.71943 8.63295 7.84902 8.84951C7.97765 9.06447 8.04197 9.17195 8.1108 9.21097C8.17964 9.25 8.27674 9.25 8.47094 9.25H15.5287C15.7229 9.25 15.82 9.25 15.8888 9.21097C15.9577 9.17195 16.022 9.06447 16.1506 8.84951C16.2802 8.63295 16.4515 8.43145 16.658 8.18861C16.8071 8.0133 16.9745 7.81644 17.1578 7.5768L17.2033 7.51748C17.4757 7.16363 17.7961 6.74745 17.744 6.08667C17.7126 5.68834 17.5375 5.3495 17.3476 5.08502C17.156 4.81831 16.9165 4.58165 16.6871 4.38044C16.4559 4.17762 16.2115 3.99077 16.002 3.83228L15.9407 3.78592C15.8699 3.73235 15.8344 3.70556 15.8088 3.67087C15.7879 3.64273 15.7719 3.61048 15.762 3.57689C15.7498 3.53547 15.7498 3.49073 15.7498 3.40125V2C15.7498 1.58579 15.414 1.25 14.9998 1.25C14.5856 1.25 14.2498 1.58579 14.2498 2V3.2775C14.2498 3.43469 14.2498 3.51329 14.2143 3.57961C14.1788 3.64594 14.1134 3.68954 13.9826 3.77673L12.3326 4.87674C12.1713 4.98429 12.0906 5.03806 11.9998 5.03806C11.909 5.03807 11.8283 4.98429 11.667 4.87675L10.0169 3.77672C9.88609 3.68953 9.8207 3.64593 9.7852 3.5796C9.7497 3.51328 9.7497 3.43468 9.7497 3.27749V2Z',
  d8: 'M6.65819 11.4797C5.49713 12.9742 4.04557 15.1937 3.41111 17.6171C3.16862 18.5433 3.17478 19.4044 3.60317 20.1425C4.0227 20.8654 4.76042 21.3173 5.62984 21.6337C7.12711 22.1786 9.3307 22.7489 11.9999 22.7489C14.6691 22.7489 16.8727 22.1786 18.3699 21.6337C19.2393 21.3173 19.9771 20.8654 20.3966 20.1425C20.825 19.4044 20.8311 18.5433 20.5887 17.6171C19.9542 15.1937 18.5026 12.9742 17.3416 11.4797C17.0711 11.1316 16.9359 10.9575 16.7279 10.8557C16.5198 10.7539 16.2874 10.7539 15.8225 10.7539H8.17728C7.71237 10.7539 7.47992 10.7539 7.27191 10.8557C7.0639 10.9575 6.92866 11.1316 6.65819 11.4797Z',
  d9: 'M17.2382 22.0034C17.1555 20.3125 16.6675 18.7767 16.1916 17.6465C15.9291 17.023 15.4849 16.1248 15.1245 15.5841C14.8947 15.2394 14.429 15.1463 14.0844 15.376C13.74 15.6056 13.6473 16.0715 13.8764 16.4161C14.2292 16.9468 14.5717 17.6647 14.8092 18.2286C15.2743 19.3333 15.7256 20.8044 15.7494 22.3706C16.2846 22.2616 16.7821 22.136 17.2382 22.0034ZM8.25097 22.3707C8.27478 20.8045 8.72606 19.3334 9.19121 18.2286C9.42867 17.6647 9.77118 16.9468 10.124 16.4161C10.3531 16.0715 10.2604 15.6056 9.91601 15.376C9.57137 15.1463 9.10571 15.2394 8.87595 15.5841C8.51546 16.1248 8.07131 17.023 7.80876 17.6465C7.33288 18.7768 6.84483 20.3126 6.76221 22.0036C7.21826 22.1362 7.71581 22.2618 8.25097 22.3707Z',
  d10: 'M8.99756 4V2.00049',
  d11: 'M14.9976 4V2.00049',
  d12: 'M13.9976 15.0039C13.9976 15.0039 15.9976 18.0046 15.9976 21.5055M9.99756 15.0039C9.99756 15.0039 7.99756 18.0046 7.99756 21.5055',
  d13: 'M9.00609 10.0003L7.00863 6.03172C7.00671 6.0279 7.00744 6.02328 7.01044 6.02023L9.00609 3.99575L12.0014 6.02533L14.9952 3.99512L17.0072 6.02021C17.0102 6.02326 17.011 6.02792 17.009 6.03175L14.9952 10.0003M9.00609 10.0003H14.9952M9.00609 10.0003C6.30779 12.1935 4 16.1263 4 19.9894C11.1799 23.6662 17.1243 21.4555 20 19.9793C20 15.2713 17.0123 11.7485 14.9952 10.0003',
  d14: 'M7.15307 10.5C6.76436 10.9273 6.32711 11.4517 5.8897 12.0641C4.58674 13.8882 3.25 16.5391 3.25 19.75V20.2054L3.65404 20.4154C4.63702 20.9265 5.85781 21.4517 7.27571 21.8471C7.38806 20.1704 7.85051 18.6504 8.30344 17.5157C8.56499 16.8604 8.82683 16.3251 9.02458 15.9513C9.12355 15.7643 9.20676 15.6172 9.26624 15.5152C9.29599 15.4642 9.31984 15.4244 9.33679 15.3966L9.35693 15.3638L9.36289 15.3542L9.36481 15.3511L9.36577 15.3496C9.36577 15.3496 9.366 15.3493 10 15.7499C10.634 16.1506 10.6342 16.1503 10.6342 16.1503L10.6316 16.1545L10.6183 16.1762C10.6059 16.1965 10.5868 16.2283 10.5619 16.2711C10.512 16.3566 10.4389 16.4855 10.3504 16.6529C10.1732 16.9879 9.93501 17.4744 9.69656 18.0718C9.25559 19.1765 8.82523 20.6316 8.75883 22.1941C9.7651 22.3848 10.8492 22.5 12 22.5C13.1508 22.5 14.2349 22.3848 15.2412 22.1941C15.1748 20.6316 14.7444 19.1765 14.3034 18.0718C14.065 17.4744 13.8268 16.9879 13.6496 16.6529C13.5611 16.4855 13.488 16.3566 13.4381 16.2711C13.4132 16.2283 13.3941 16.1965 13.3817 16.1762L13.3684 16.1545L13.3658 16.1503C13.3658 16.1503 13.366 16.1506 14 15.7499C14.634 15.3493 14.6342 15.3496 14.6342 15.3496L14.6352 15.3511L14.6371 15.3542L14.6431 15.3638L14.6632 15.3966C14.6802 15.4244 14.704 15.4642 14.7338 15.5152C14.7932 15.6172 14.8764 15.7643 14.9754 15.9513C15.1732 16.3251 15.435 16.8604 15.6966 17.5157C16.1495 18.6504 16.6119 20.1704 16.7243 21.8471C18.1422 21.4517 19.363 20.9265 20.346 20.4154L20.75 20.2054V19.75C20.75 16.5391 19.4133 13.8882 18.1103 12.0641C17.6729 11.4517 17.2356 10.9273 16.8469 10.5H7.15307Z',
  d15: 'M9.75 3.34896V1.5H8.25V3.4389L6.46962 5.21975C6.24143 5.44801 6.18485 5.79665 6.32916 6.08535L7.7861 9H16.2132L17.6708 6.08549C17.8152 5.79671 17.7586 5.4479 17.5303 5.21961L15.75 3.4398V1.5H14.25V3.34829L11.9995 4.84862L9.75 3.34896Z',
  d16: 'M15.004 10.5H8.99501L8.99949 10.5H14.9995L15.004 10.5Z',
} as const;

export const IconDress04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-04-stroke-rounded IconDress04StrokeRounded"
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

export const IconDress04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-04-duotone-rounded IconDress04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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

export const IconDress04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-04-twotone-rounded IconDress04TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDress04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-04-solid-rounded IconDress04SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDress04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-04-bulk-rounded IconDress04BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDress04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-04-stroke-sharp IconDress04StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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

export const IconDress04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-04-solid-sharp IconDress04SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfDress04: TheIconSelfPack = {
  name: 'Dress04',
  StrokeRounded: IconDress04StrokeRounded,
  DuotoneRounded: IconDress04DuotoneRounded,
  TwotoneRounded: IconDress04TwotoneRounded,
  SolidRounded: IconDress04SolidRounded,
  BulkRounded: IconDress04BulkRounded,
  StrokeSharp: IconDress04StrokeSharp,
  SolidSharp: IconDress04SolidSharp,
};