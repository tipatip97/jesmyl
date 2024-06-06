import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.5 2L13.5 6M13.5 10L13.5 12',
  d2: 'M5 2C3.94531 3.13158 3.23544 4.50113 3 6',
  d3: 'M12 7.5C12 7.03406 12 6.80109 12.0761 6.61732C12.1776 6.37229 12.3723 6.17761 12.6173 6.07612C12.8011 6 13.0341 6 13.5 6C13.9659 6 14.1989 6 14.3827 6.07612C14.6277 6.17761 14.8224 6.37229 14.9239 6.61732C15 6.80109 15 7.03406 15 7.5V8.5C15 8.96594 15 9.19891 14.9239 9.38268C14.8224 9.62771 14.6277 9.82239 14.3827 9.92388C14.1989 10 13.9659 10 13.5 10C13.0341 10 12.8011 10 12.6173 9.92388C12.3723 9.82239 12.1776 9.62771 12.0761 9.38268C12 9.19891 12 8.96594 12 8.5V7.5Z',
  d4: 'M6.24061 17.0888C6.43047 19.4803 8.32417 21.511 10.765 21.8118C11.6626 21.9223 12.5752 22 13.5 22C14.4247 22 15.3373 21.9223 16.2349 21.8118C18.6758 21.511 20.5694 19.4803 20.7593 17.0888C20.8909 15.4317 21 13.732 21 12C21 10.268 20.8909 8.56832 20.7593 6.91118C20.5694 4.51965 18.6758 2.48893 16.2349 2.1882C15.3373 2.07762 14.4247 2 13.5 2C12.5752 2 11.6626 2.07762 10.765 2.1882C8.32417 2.48893 6.43047 4.51965 6.24061 6.91118C6.10903 8.56832 6 10.268 6 12C6 13.732 6.10903 15.4317 6.24061 17.0888Z',
  d5: 'M10.765 21.8118C8.32417 21.511 6.43047 19.4803 6.24061 17.0888C6.10903 15.4317 6 13.7319 6 12C6 10.2681 6.10903 8.56832 6.24061 6.91118C6.43047 4.51965 8.32417 2.48893 10.765 2.1882C11.6626 2.07762 12.5752 2 13.5 2C14.4247 2 15.3373 2.07762 16.2349 2.1882C18.6758 2.48893 20.5694 4.51965 20.7593 6.91118C20.8909 8.56832 21 10.2681 21 12C21 13.7319 20.8909 15.4317 20.7593 17.0888C20.5694 19.4803 18.6758 21.511 16.2349 21.8118C15.3373 21.9223 14.4247 22 13.5 22C12.5752 22 11.6626 21.9223 10.765 21.8118ZM12.0761 6.61732C12 6.80109 12 7.03406 12 7.5V8.5C12 8.96594 12 9.19891 12.0761 9.38268C12.1776 9.62771 12.3723 9.82239 12.6173 9.92388C12.8011 10 13.0341 10 13.5 10C13.9659 10 14.1989 10 14.3827 9.92388C14.6277 9.82239 14.8224 9.62771 14.9239 9.38268C15 9.19891 15 8.96594 15 8.5V7.5C15 7.03406 15 6.80109 14.9239 6.61732C14.8224 6.37229 14.6277 6.17761 14.3827 6.07612C14.1989 6 13.9659 6 13.5 6C13.0341 6 12.8011 6 12.6173 6.07612C12.3723 6.17761 12.1776 6.37229 12.0761 6.61732Z',
  d6: 'M5.93196 1.51848C6.33597 1.89504 6.35822 2.52781 5.98167 2.93182C5.04911 3.93237 4.43946 5.12282 4.23803 6.40518C4.15233 6.95077 3.64057 7.32359 3.09497 7.23789C2.54938 7.15219 2.17656 6.64043 2.26226 6.09483C2.5317 4.37945 3.3418 2.83081 4.51862 1.56819C4.89518 1.16418 5.52795 1.14192 5.93196 1.51848Z',
  d7: 'M12.75 1.54683C12.75 1.37636 12.6081 1.23995 12.4379 1.2495C11.8394 1.28306 11.2505 1.34163 10.6733 1.41283C7.87402 1.75821 5.71063 4.08279 5.49296 6.82844C5.36089 8.49409 5.25 10.2196 5.25 11.9839C5.25 13.7482 5.36089 15.4737 5.49296 17.1393C5.71064 19.885 7.87413 22.2095 10.6734 22.555C11.5888 22.6678 12.5341 22.749 13.5 22.749C14.4658 22.749 15.4112 22.6678 16.3266 22.555C19.126 22.2095 21.2892 19.885 21.507 17.1393C21.6391 15.4737 21.75 13.7482 21.75 11.9839C21.75 10.2195 21.6391 8.49407 21.507 6.82843C21.2892 4.08281 19.126 1.75821 16.3266 1.41283C15.7495 1.34163 15.1606 1.28307 14.5621 1.2495C14.3919 1.23995 14.25 1.37636 14.25 1.54684V4.98743C14.25 5.13844 14.3635 5.26216 14.5088 5.30335C14.562 5.31844 14.6157 5.33679 14.6697 5.35917C15.0985 5.53704 15.4392 5.8782 15.6168 6.3076C15.699 6.50638 15.7266 6.702 15.7387 6.87989C15.75 7.04545 15.75 7.24258 15.75 7.45715V8.50215C15.75 8.71673 15.75 8.91385 15.7387 9.07941C15.7266 9.2573 15.699 9.45292 15.6168 9.6517C15.4392 10.0811 15.0985 10.4223 14.6697 10.6001C14.6157 10.6225 14.562 10.6409 14.5088 10.6559C14.3635 10.6971 14.25 10.8209 14.25 10.9719V11.9853C14.25 12.4001 13.9142 12.7363 13.5 12.7363C13.0858 12.7363 12.75 12.4001 12.75 11.9853V10.9719C12.75 10.8209 12.6365 10.6971 12.4912 10.6559C12.438 10.6409 12.3843 10.6225 12.3303 10.6001C11.9015 10.4223 11.5608 10.0811 11.3832 9.6517C11.301 9.45292 11.2734 9.2573 11.2613 9.07941C11.25 8.91385 11.25 8.71672 11.25 8.50215V8.50214V7.45716V7.45715C11.25 7.24258 11.25 7.04545 11.2613 6.87989C11.2734 6.702 11.301 6.50638 11.3832 6.3076C11.5608 5.8782 11.9015 5.53704 12.3303 5.35917C12.3843 5.33679 12.438 5.31844 12.4912 5.30335C12.6365 5.26216 12.75 5.13844 12.75 4.98743V1.54683ZM12.7659 6.90256C12.7683 6.88705 12.7731 6.87199 12.7806 6.85822C12.8035 6.81616 12.8381 6.78156 12.8801 6.75857C12.8939 6.75102 12.909 6.7462 12.9245 6.74381C12.9409 6.7413 12.9663 6.73824 13.0039 6.73568C13.1119 6.7283 13.2568 6.72789 13.5 6.72789C13.7432 6.72789 13.8881 6.7283 13.9961 6.73568C14.0337 6.73824 14.0591 6.7413 14.0755 6.74382C14.091 6.74621 14.1061 6.75102 14.1199 6.75857C14.1619 6.78156 14.1965 6.81615 14.2194 6.85821C14.2269 6.87199 14.2317 6.88706 14.2341 6.90257C14.2366 6.91896 14.2397 6.94445 14.2422 6.98214C14.2496 7.0903 14.25 7.23537 14.25 7.47895V8.48035C14.25 8.72393 14.2496 8.869 14.2422 8.97716C14.2397 9.01484 14.2366 9.04033 14.2341 9.05672C14.2317 9.07224 14.2269 9.08732 14.2194 9.1011C14.1964 9.14315 14.1619 9.17774 14.1199 9.20073C14.1061 9.20828 14.091 9.2131 14.0755 9.21549C14.0591 9.218 14.0337 9.22106 13.9961 9.22363C13.8881 9.231 13.7432 9.23141 13.5 9.23141C13.2568 9.23141 13.1119 9.231 13.0039 9.22363C12.9663 9.22106 12.9409 9.218 12.9245 9.21549C12.909 9.2131 12.8939 9.20828 12.8801 9.20072C12.8381 9.17774 12.8036 9.14315 12.7806 9.10109C12.7731 9.08731 12.7683 9.07224 12.7659 9.05673C12.7634 9.04034 12.7603 9.01485 12.7578 8.97716C12.7504 8.869 12.75 8.72393 12.75 8.48035V7.47895C12.75 7.23537 12.7504 7.0903 12.7578 6.98214C12.7603 6.94444 12.7634 6.91895 12.7659 6.90256Z',
  d8: 'M10.6733 1.41285C11.5889 1.29989 12.5341 1.21875 13.5 1.21875C14.4658 1.21875 15.4111 1.29989 16.3266 1.41285C19.126 1.75823 21.2892 4.08283 21.507 6.82845C21.6391 8.49409 21.75 10.2196 21.75 11.9839C21.75 13.7482 21.6391 15.4737 21.507 17.1394C21.2892 19.885 19.126 22.2095 16.3266 22.555C15.4112 22.6678 14.4658 22.749 13.5 22.749C12.5341 22.749 11.5888 22.6678 10.6734 22.555C7.87413 22.2095 5.71064 19.885 5.49296 17.1393C5.36089 15.4737 5.25 13.7482 5.25 11.9839C5.25 10.2196 5.36089 8.49411 5.49296 6.82846C5.71063 4.08281 7.87402 1.75823 10.6733 1.41285Z',
  d9: 'M14.25 1.23438V5.25014C14.3846 5.26732 14.5263 5.29826 14.6697 5.35773C15.0985 5.53559 15.4392 5.87675 15.6168 6.30616C15.699 6.50494 15.7266 6.70056 15.7387 6.87845C15.75 7.04401 15.75 7.24113 15.75 7.45571V8.5007C15.75 8.71528 15.75 8.9124 15.7387 9.07796C15.7266 9.25586 15.699 9.45147 15.6168 9.65026C15.4392 10.0797 15.0985 10.4208 14.6697 10.5987C14.5263 10.6582 14.3846 10.6891 14.25 10.7063V11.9838C14.25 12.3986 13.9142 12.7349 13.5 12.7349C13.0858 12.7349 12.75 12.3986 12.75 11.9838V10.7063C12.6154 10.6891 12.4737 10.6582 12.3303 10.5987C11.9015 10.4208 11.5608 10.0797 11.3832 9.65026C11.301 9.45147 11.2734 9.25586 11.2613 9.07796C11.25 8.91241 11.25 8.7153 11.25 8.50074V7.45571C11.25 7.24115 11.25 7.044 11.2613 6.87845C11.2734 6.70056 11.301 6.50494 11.3832 6.30616C11.5608 5.87675 11.9015 5.53559 12.3303 5.35773C12.4737 5.29826 12.6154 5.26732 12.75 5.25014V1.23438C12.9985 1.22425 13.2485 1.21875 13.5 1.21875C13.7514 1.21875 14.0015 1.22425 14.25 1.23438ZM12.7703 6.87797C12.7956 6.81905 12.8425 6.77209 12.9013 6.74678C12.9087 6.7449 12.9371 6.7388 13.0039 6.73423C13.1119 6.72685 13.2568 6.72644 13.5 6.72644C13.7432 6.72644 13.8881 6.72685 13.9961 6.73423C14.0629 6.7388 14.0913 6.74491 14.0987 6.74678C14.1575 6.77209 14.2044 6.81905 14.2297 6.87797C14.2316 6.88533 14.2377 6.91378 14.2422 6.9807C14.2496 7.08886 14.25 7.23393 14.25 7.4775V8.47891C14.25 8.72249 14.2496 8.86755 14.2422 8.97571C14.2377 9.04264 14.2316 9.07108 14.2297 9.07844C14.2044 9.13736 14.1575 9.18432 14.0987 9.20963C14.0913 9.2115 14.0629 9.21761 13.9961 9.22218C13.8881 9.22956 13.7432 9.22997 13.5 9.22997C13.2568 9.22997 13.1119 9.22956 13.0039 9.22218C12.9371 9.21761 12.9087 9.2115 12.9013 9.20963C12.8425 9.18432 12.7956 9.13736 12.7703 9.07844C12.7684 9.07108 12.7623 9.04264 12.7578 8.97571C12.7504 8.86755 12.75 8.72249 12.75 8.47891V7.4775C12.75 7.23393 12.7504 7.08886 12.7578 6.9807C12.7623 6.91377 12.7684 6.88533 12.7703 6.87797Z',
  d10: 'M15 6H12V10H15V6Z',
  d11: 'M2.25 5.77664C2.51944 4.06126 3.32954 2.51262 4.50636 1.25L5.96941 2.61363C5.03685 3.61418 4.4272 4.80463 4.22577 6.08699L2.25 5.77664Z',
  d12: 'M12.749 1.26562V5.25002H11.999C11.5848 5.25002 11.249 5.58581 11.249 6.00002V10C11.249 10.4142 11.5848 10.75 11.999 10.75H12.749V12H14.249V10.75H14.999C15.4132 10.75 15.749 10.4142 15.749 10V6.00002C15.749 5.58581 15.4132 5.25002 14.999 5.25002H14.249V1.26563C14.955 1.29437 15.6485 1.36042 16.3256 1.44385C19.125 1.78875 21.2882 4.11007 21.506 6.85183C21.6381 8.51513 21.749 10.2382 21.749 12C21.749 13.7619 21.6381 15.4849 21.506 17.1482C21.2882 19.89 19.125 22.2112 16.3257 22.5562C15.4102 22.6689 14.4648 22.75 13.499 22.75C12.5331 22.75 11.5879 22.6689 10.6724 22.5562C7.87316 22.2112 5.70966 19.89 5.49198 17.1482C5.35992 15.4849 5.24902 13.7619 5.24902 12C5.24902 10.2382 5.35992 8.51514 5.49198 6.85184C5.70966 4.11005 7.87305 1.78874 10.6723 1.44385C11.3495 1.36041 12.043 1.29436 12.749 1.26562Z',
  d13: 'M12.749 6.75002H14.249V9.25002H12.749V6.75002Z',
};

export const IconMouseLeftClick01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-01-stroke-rounded IconMouseLeftClick01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-01-duotone-rounded IconMouseLeftClick01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-01-twotone-rounded IconMouseLeftClick01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-01-solid-rounded IconMouseLeftClick01SolidRounded"
    >
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

export const IconMouseLeftClick01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-01-bulk-rounded IconMouseLeftClick01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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

export const IconMouseLeftClick01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-01-stroke-sharp IconMouseLeftClick01StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
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
    </TheIconWrapper>
  );
};

export const IconMouseLeftClick01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-left-click-01-solid-sharp IconMouseLeftClick01SolidSharp"
    >
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouseLeftClick01: TheIconSelfPack = {
  name: 'MouseLeftClick01',
  StrokeRounded: IconMouseLeftClick01StrokeRounded,
  DuotoneRounded: IconMouseLeftClick01DuotoneRounded,
  TwotoneRounded: IconMouseLeftClick01TwotoneRounded,
  SolidRounded: IconMouseLeftClick01SolidRounded,
  BulkRounded: IconMouseLeftClick01BulkRounded,
  StrokeSharp: IconMouseLeftClick01StrokeSharp,
  SolidSharp: IconMouseLeftClick01SolidSharp,
};