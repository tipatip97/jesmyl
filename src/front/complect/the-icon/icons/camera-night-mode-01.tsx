import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.1195 18C10.1205 18 8.5 16.4197 8.5 14.4702C8.5 12.7426 9.77269 11.3048 11.4536 11C11.2992 11.3925 11.2146 11.8186 11.2146 12.2641C11.2146 14.2135 12.8351 15.7939 14.8341 15.7939C15.0616 15.7939 15.2842 15.7734 15.5 15.7343C14.9787 17.0594 13.6617 18 12.1195 18Z',
  d2: 'M7 6.00049C5.77936 6.00415 5.10383 6.03335 4.54873 6.26634C3.7712 6.59269 3.13801 7.19552 2.76811 7.96158C2.46618 8.58687 2.41677 9.38799 2.31796 10.9902L2.16312 13.5009C1.91739 17.4853 1.79452 19.4775 2.96369 20.7388C4.13285 22 6.10252 22 10.0419 22H13.9581C17.8975 22 19.8672 22 21.0363 20.7388C22.2055 19.4775 22.0826 17.4853 21.8369 13.5009L21.682 10.9902C21.5832 9.38799 21.5338 8.58687 21.2319 7.96158C20.862 7.19552 20.2288 6.59269 19.4513 6.26634C18.8962 6.03335 18.2206 6.00415 17 6.00049',
  d3: 'M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7',
  d4: 'M11.9998 6H12.0088',
  d5: 'M2.31796 10.9902L2.16312 13.5009C1.91739 17.4853 1.79452 19.4775 2.96369 20.7388C4.13285 22 6.10252 22 10.0419 22H13.9581C17.8975 22 19.8672 22 21.0363 20.7388C22.2055 19.4775 22.0826 17.4853 21.8369 13.5009L21.682 10.9902C21.5832 9.38799 21.5338 8.58687 21.2319 7.96158C20.862 7.19552 20.2288 6.59269 19.4513 6.26634C18.8962 6.03335 18.2206 6.00415 17 6.00049H16.6L16.1139 4.78543C16.0752 4.68856 16.0369 4.59037 15.9985 4.49162C15.6576 3.61633 15.2995 2.69677 14.4164 2.25955C13.8922 2 13.2614 2 11.9998 2C10.7382 2 10.1074 2 9.58311 2.25955C8.7 2.69677 8.34189 3.61633 8.00103 4.49162C7.96257 4.59037 7.92433 4.68856 7.88558 4.78543L7.38741 6.00049H7C5.77936 6.00415 5.10383 6.03335 4.54873 6.26634C3.7712 6.59269 3.13801 7.19552 2.76811 7.96158C2.46618 8.58687 2.41677 9.38799 2.31796 10.9902ZM8.5 14.4702C8.5 16.4197 10.1205 18 12.1195 18C13.6617 18 14.9787 17.0594 15.5 15.7343C15.2842 15.7734 15.0616 15.7939 14.8341 15.7939C12.8351 15.7939 11.2146 14.2135 11.2146 12.2641C11.2146 11.8186 11.2992 11.3925 11.4536 11C9.77269 11.3048 8.5 12.7426 8.5 14.4702Z',
  d6: 'M7 6C5.77936 6.00366 5.10383 6.03286 4.54873 6.26585C3.7712 6.5922 3.13801 7.19503 2.76811 7.9611C2.46618 8.58638 2.41677 9.3875 2.31796 10.9897L2.16312 13.5004C1.91739 17.4849 1.79452 19.4771 2.96369 20.7383C4.13285 21.9995 6.10252 21.9995 10.0419 21.9995H13.9581C17.8975 21.9995 19.8672 21.9995 21.0363 20.7383C22.2055 19.4771 22.0826 17.4849 21.8369 13.5004L21.682 10.9897C21.5832 9.3875 21.5338 8.58638 21.2319 7.9611C20.862 7.19503 20.2288 6.5922 19.4513 6.26585C18.8962 6.03286 18.2206 6.00366 17 6',
  d7: 'M11.9686 1.25H12.0314H12.0314C12.6355 1.24999 13.1356 1.24998 13.5485 1.28515C13.9812 1.32201 14.3723 1.40069 14.7494 1.58742C15.4213 1.92009 15.8461 2.44877 16.1443 2.979C16.3755 3.39004 16.555 3.85182 16.7071 4.24318C16.743 4.33553 16.7774 4.42396 16.8105 4.50689L17.1081 5.25086C18.2353 5.25543 19.0437 5.28193 19.7414 5.57479C20.6892 5.97261 21.4585 6.70632 21.9071 7.63547C22.1073 8.05002 22.2092 8.49536 22.2767 9.01254C22.3425 9.51676 22.3808 10.1389 22.4288 10.9174L22.5889 13.5123C22.7087 15.4557 22.8035 16.9915 22.715 18.196C22.6242 19.4329 22.3342 20.4418 21.5862 21.2486C20.8368 22.0571 19.8569 22.4154 18.6395 22.5851C17.4567 22.75 15.9366 22.75 14.017 22.75H9.98273C8.06311 22.75 6.54301 22.75 5.36028 22.5851C4.14282 22.4154 3.16298 22.0571 2.41353 21.2486C1.66555 20.4418 1.37551 19.4329 1.28469 18.196C1.19625 16.9915 1.29098 15.4557 1.41085 13.5123L1.5709 10.9172C1.6189 10.1388 1.65726 9.51672 1.72303 9.01254C1.79049 8.49536 1.89241 8.05002 2.09258 7.63547C2.54124 6.70632 3.31053 5.97261 4.25833 5.57479C4.95614 5.2819 5.76456 5.25543 6.89188 5.25086L7.18947 4.50689C7.22264 4.42397 7.25701 4.33554 7.2929 4.2432L7.2929 4.2432L7.29291 4.24317C7.44503 3.85181 7.62451 3.39003 7.85567 2.979C8.15388 2.44877 8.57866 1.92009 9.25059 1.58742C9.62775 1.40069 10.0188 1.32201 10.4515 1.28515C10.8644 1.24998 11.3645 1.24999 11.9686 1.25H11.9686ZM11.002 6C11.002 5.44772 11.4497 5 12.002 5H12.0109C12.5632 5 13.0109 5.44772 13.0109 6C13.0109 6.55228 12.5632 7 12.0109 7H12.002C11.4497 7 11.002 6.55228 11.002 6ZM11.3178 10.2621C11.5855 10.2135 11.8585 10.3137 12.0312 10.524C12.2039 10.7342 12.2492 11.0214 12.1496 11.2746C12.029 11.5813 11.9627 11.9144 11.9627 12.2641C11.9627 13.7817 13.2295 15.0439 14.8322 15.0439C15.0146 15.0439 15.1924 15.0275 15.3642 14.9963C15.6319 14.9478 15.9049 15.048 16.0776 15.2582C16.2503 15.4684 16.2956 15.7557 16.196 16.0089C15.5622 17.6197 13.9692 18.75 12.1175 18.75C9.72218 18.75 7.74804 16.8515 7.74804 14.4702C7.74804 12.3604 9.29981 10.628 11.3178 10.2621Z',
  d8: 'M11.9686 1.25H12.0314C12.6355 1.24999 13.1356 1.24998 13.5485 1.28515C13.9812 1.32201 14.3723 1.40069 14.7494 1.58742C15.4213 1.92009 15.8461 2.44877 16.1443 2.979C16.3755 3.39004 16.555 3.85182 16.7071 4.24318C16.743 4.33553 16.7774 4.42396 16.8105 4.50689L17.1081 5.25086C18.2353 5.25543 19.0437 5.28193 19.7414 5.57479C20.6892 5.97261 21.4585 6.70632 21.9071 7.63547C22.1073 8.05002 22.2092 8.49536 22.2767 9.01254C22.3425 9.51676 22.3808 10.1389 22.4288 10.9174L22.5889 13.5123C22.7087 15.4557 22.8035 16.9915 22.715 18.196C22.6242 19.4329 22.3342 20.4418 21.5862 21.2486C20.8368 22.0571 19.8569 22.4154 18.6395 22.5851C17.4567 22.75 15.9366 22.75 14.017 22.75H9.98273C8.06311 22.75 6.54301 22.75 5.36028 22.5851C4.14282 22.4154 3.16298 22.0571 2.41353 21.2486C1.66555 20.4418 1.37551 19.4329 1.28469 18.196C1.19625 16.9915 1.29098 15.4557 1.41085 13.5123L1.5709 10.9172C1.6189 10.1388 1.65726 9.51672 1.72303 9.01254C1.79049 8.49536 1.89241 8.05002 2.09258 7.63547C2.54124 6.70632 3.31053 5.97261 4.25833 5.57479C4.95614 5.2819 5.76456 5.25543 6.89188 5.25086L7.18947 4.50689C7.22264 4.42397 7.25701 4.33554 7.2929 4.2432C7.44502 3.85184 7.62451 3.39004 7.85567 2.979C8.15388 2.44877 8.57866 1.92009 9.25059 1.58742C9.62775 1.40069 10.0188 1.32201 10.4515 1.28515C10.8644 1.24998 11.3645 1.24999 11.9686 1.25Z',
  d9: 'M11.002 6C11.002 5.44772 11.4497 5 12.002 5H12.0109C12.5632 5 13.0109 5.44772 13.0109 6C13.0109 6.55228 12.5632 7 12.0109 7H12.002C11.4497 7 11.002 6.55228 11.002 6Z',
  d10: 'M12.0312 10.524C11.8585 10.3137 11.5855 10.2135 11.3178 10.2621C9.29981 10.628 7.74804 12.3604 7.74804 14.4702C7.74804 16.8515 9.72218 18.75 12.1175 18.75C13.9692 18.75 15.5622 17.6197 16.196 16.0089C16.2956 15.7557 16.2503 15.4684 16.0776 15.2582C15.9049 15.048 15.6319 14.9478 15.3642 14.9963C15.1924 15.0275 15.0146 15.0439 14.8322 15.0439C13.2295 15.0439 11.9627 13.7817 11.9627 12.2641C11.9627 11.9144 12.029 11.5813 12.1496 11.2746C12.2492 11.0214 12.2039 10.7342 12.0312 10.524Z',
  d11: 'M12 6H12.009',
  d12: 'M16.5138 6.00899C16.7723 5.95716 20.1128 5.98739 21.4916 6.00899L22.0166 21.9724L12.0723 21.9824H2.01855L2.49337 6.05265C2.49513 5.99941 2.48362 6.01772 2.55837 6.01772C3.96288 5.99627 7.24242 5.95832 7.49518 6.00899M17.0078 7.99395L15.5116 1.98242H12.0981L8.5007 1.98271L6.99821 7.99894',
  d13: 'M1.77204 5.97736C1.78466 5.57246 2.11582 5.25078 2.52001 5.25078H6.92448L7.92247 1.25H16.0756L17.0734 5.25H22.2034L22.749 22.75H1.24902L1.77204 5.97736ZM12.999 5H10.999V7H12.999V5ZM7.99902 14.4659C7.99902 16.6939 9.85103 18.5 12.1356 18.5C13.8981 18.5 15.4032 17.425 15.999 15.9106C15.7524 15.9553 15.498 15.9787 15.238 15.9787C12.9535 15.9787 11.1015 14.1726 11.1015 11.9447C11.1015 11.4356 11.1982 10.9485 11.3746 10.5C9.45353 10.8484 7.99902 12.4915 7.99902 14.4659Z',
} as const;

export const IconCameraNightMode01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-01-stroke-rounded IconCameraNightMode01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCameraNightMode01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-01-duotone-rounded IconCameraNightMode01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconCameraNightMode01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-01-twotone-rounded IconCameraNightMode01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconCameraNightMode01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-01-solid-rounded IconCameraNightMode01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraNightMode01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-01-bulk-rounded IconCameraNightMode01BulkRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraNightMode01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-01-stroke-sharp IconCameraNightMode01StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraNightMode01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-night-mode-01-solid-sharp IconCameraNightMode01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCameraNightMode01: TheIconSelfPack = {
  name: 'CameraNightMode01',
  StrokeRounded: IconCameraNightMode01StrokeRounded,
  DuotoneRounded: IconCameraNightMode01DuotoneRounded,
  TwotoneRounded: IconCameraNightMode01TwotoneRounded,
  SolidRounded: IconCameraNightMode01SolidRounded,
  BulkRounded: IconCameraNightMode01BulkRounded,
  StrokeSharp: IconCameraNightMode01StrokeSharp,
  SolidSharp: IconCameraNightMode01SolidSharp,
};