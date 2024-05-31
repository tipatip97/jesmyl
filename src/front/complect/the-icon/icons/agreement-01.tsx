import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 7H4.86503C5.59174 7 6.28868 6.64031 6.80255 6.00005C7.53643 5.08565 8.62195 4.76636 9.60655 5.17529L11 5.75402M2 15.9668H3.62068C4.78017 15.9668 5.35991 15.9668 5.90812 16.1213C5.93477 16.1288 5.96134 16.1366 5.98782 16.1446C6.53259 16.3101 7.01496 16.6209 7.97971 17.2427C9.86787 18.4596 10.812 19.0681 11.8407 18.994C11.8892 18.9905 11.9376 18.9858 11.9859 18.9801C13.0096 18.8577 13.8119 18.0821 15.4166 16.5308L17 15',
  d2: 'M22 7.23384H19.4832C18.4174 7.23384 17.6649 6.65468 16.9003 5.88258C16.4051 5.38247 15.7731 5.08772 15.1088 5.04713C14.366 5.00175 13.5053 4.93785 12.784 5.13601C11.9811 5.35656 11.451 5.96063 10.8902 6.59196L9.44309 8.22111C8.8523 8.88621 8.8523 9.96455 9.44309 10.6297C9.953 11.2037 10.7519 11.2928 11.3519 10.8424C11.7837 10.5184 12.2743 9.99506 12.7831 9.83025C13.3557 9.64476 13.7109 10.0615 14.0354 10.4999L16.3556 13.6344C17.2167 14.7976 17.6472 15.3793 18.2358 15.6896C18.8244 16 19.4969 16 20.842 16H22',
  d3: 'M4.86503 7H2V15.9668H3.62068H3.6207C4.78017 15.9668 5.35992 15.9668 5.90812 16.1213C5.93477 16.1288 5.96134 16.1366 5.98782 16.1446C6.53259 16.3101 7.01496 16.6209 7.97971 17.2427C9.86787 18.4596 10.812 19.0681 11.8407 18.994C11.8892 18.9905 11.9376 18.9858 11.9859 18.9801C13.0096 18.8577 13.8119 18.0821 15.4166 16.5308L15.4166 16.5308L17.1956 14.7558C16.3133 13.5922 14.4106 11.0707 13.8583 10.2933C13.3059 9.51588 12.6393 9.79037 12.375 10.0248C9.68986 12.8634 8.27056 9.50054 9.43413 8.23467L11.3649 5.9331L11.2242 5.85638L11 5.75402L9.60655 5.17529C8.62195 4.76636 7.53643 5.08565 6.80255 6.00005C6.28868 6.64031 5.59174 7 4.86503 7Z',
  d4: 'M19.4832 7.23384H22V16H20.842C19.4969 16 18.8244 16 18.2358 15.6896C17.6472 15.3793 17.2167 14.7976 16.3556 13.6344L14.0354 10.4999C13.7109 10.0615 13.3557 9.64476 12.7831 9.83025C12.2743 9.99506 11.7837 10.5184 11.3519 10.8424C10.7519 11.2928 9.953 11.2037 9.44309 10.6297C8.8523 9.96455 8.8523 8.88621 9.44309 8.22111L10.8902 6.59196C11.451 5.96063 11.9811 5.35656 12.784 5.13601C13.5053 4.93785 14.366 5.00175 15.1088 5.04713C15.7731 5.08772 16.4051 5.38247 16.9003 5.88258C17.6649 6.65468 18.4174 7.23384 19.4832 7.23384Z',
  d5: 'M17.1954 15.8548C17.1955 15.8549 17.1957 15.8549 17.1958 15.8548C17.1959 15.8547 17.1961 15.8547 17.1962 15.8548C17.407 16.052 17.6304 16.2192 17.886 16.354C18.6416 16.7524 19.4937 16.7518 20.6757 16.751L21.2166 16.7375C22.0114 16.6383 22.6374 16.0123 22.7365 15.2176C22.7502 15.1077 22.7501 14.9883 22.75 14.8733L22.75 9.19003C22.7501 8.75721 22.7501 8.36038 22.7067 8.03756C22.6589 7.68208 22.5465 7.30636 22.2374 6.99733C21.9284 6.68831 21.5527 6.57586 21.1972 6.52807C20.8744 6.48467 20.4776 6.48472 20.0448 6.48477L19.4832 6.48477C18.7358 6.48477 18.1707 6.10053 17.4333 5.35579C16.8165 4.7329 15.887 4.34407 15.0274 4.29155C14.3553 4.24938 13.4527 4.19275 12.6529 4.39587L12.5853 4.41444C11.5725 4.69267 10.912 5.4381 10.3923 6.02469L8.88236 7.72467C8.03921 8.67388 8.03922 10.1802 8.88236 11.1294C9.64174 11.9843 10.8785 12.1372 11.8021 11.4439C11.93 11.348 12.1075 11.1984 12.2217 11.1016C12.3213 11.017 12.4132 10.939 12.5068 10.8642C12.6757 10.7033 13.0973 10.4948 13.4326 10.9477L15.7713 14.1072L15.7713 14.1073L15.7713 14.1073C16.1861 14.6677 16.5245 15.1248 16.8338 15.4778C16.9526 15.6134 17.0719 15.7392 17.1954 15.8548ZM9.11557 4.2741C9.29388 4.29709 9.38304 4.30859 9.45176 4.36881C9.52075 4.42927 9.56352 4.54308 9.55142 4.634C9.53937 4.72458 9.4669 4.80661 9.32196 4.97069L7.76086 6.72856C6.41303 8.24597 6.41305 10.6081 7.76089 12.1255C8.8866 13.3928 10.7599 13.7061 12.2689 12.9087C12.5414 12.7647 12.6777 12.6927 12.7861 12.7174C12.8945 12.742 12.9756 12.8516 13.1379 13.0709L14.5946 15.0388L14.5947 15.0389L14.5947 15.039C14.9856 15.567 15.3552 16.0664 15.7057 16.4664C15.7711 16.5411 15.8388 16.6158 15.9091 16.6899C16.0196 16.8064 16.0202 16.9913 15.9048 17.1029C15.1306 17.8514 14.5023 18.4588 13.9379 18.8888C13.3495 19.3371 12.5879 19.6601 11.8946 19.7429C11.1987 19.7931 10.5682 19.6038 9.90189 19.2766C9.26195 18.9623 8.48493 18.4615 7.57343 17.8741C6.5745 17.2303 6.19144 16.9912 5.76986 16.8632C5.34439 16.7433 4.82104 16.7177 3.62069 16.7177L3.59354 16.7177H3.59351C3.32708 16.7178 3.08239 16.7178 2.87807 16.7005C2.65759 16.6819 2.41668 16.6392 2.18031 16.5139C1.87093 16.3499 1.61787 16.0968 1.45385 15.7874C1.32854 15.5511 1.28585 15.3102 1.26723 15.0897C1.24997 14.8854 1.24999 14.6407 1.25001 14.3742L1.25 8.95618C1.24995 8.52336 1.24991 8.12653 1.29331 7.80372C1.3411 7.44824 1.45355 7.07252 1.76257 6.76349C2.07159 6.45447 2.44732 6.34202 2.8028 6.29423C3.12561 6.25083 3.52243 6.25087 3.95524 6.25093H3.95526L4.86503 6.25093C5.33292 6.25093 5.82524 6.02045 6.21764 5.53153C6.95525 4.61249 8.02838 4.13387 9.11557 4.2741Z',
  d6: 'M9.11569 4.27411C9.29353 4.29706 9.38245 4.30853 9.45108 4.36852C9.52034 4.42905 9.56322 4.54318 9.55098 4.63435C9.53884 4.72469 9.46655 4.80653 9.32196 4.9702L7.76086 6.72807C6.41303 8.24548 6.41305 10.6076 7.76089 12.125C8.8866 13.3923 10.7599 13.7057 12.2689 12.9082C12.5414 12.7642 12.6777 12.6922 12.7861 12.7169C12.8945 12.7415 12.9756 12.8511 13.1379 13.0704L14.5946 15.0384C14.9855 15.5664 15.3552 16.0659 15.7057 16.4659C15.7711 16.5406 15.8388 16.6153 15.9091 16.6894C16.0197 16.8061 16.0204 16.9912 15.9048 17.1029C15.1306 17.8514 14.5023 18.4588 13.9379 18.8888C13.3495 19.3371 12.5879 19.6601 11.8946 19.7429C11.1987 19.7931 10.5682 19.6038 9.90189 19.2766C9.26195 18.9623 8.48493 18.4615 7.57343 17.8741C6.5745 17.2303 6.19144 16.9912 5.76986 16.8632C5.34439 16.7433 4.82104 16.7177 3.62069 16.7177L3.59354 16.7177C3.32711 16.7178 3.08239 16.7178 2.87807 16.7005C2.65759 16.6819 2.41668 16.6392 2.18031 16.5139C1.87093 16.3499 1.61787 16.0968 1.45385 15.7874C1.32854 15.5511 1.28585 15.3102 1.26723 15.0897C1.24997 14.8854 1.24999 14.6407 1.25001 14.3742L1.25 8.95618C1.24995 8.52336 1.24991 8.12653 1.29331 7.80372C1.3411 7.44824 1.45355 7.07252 1.76257 6.76349C2.07159 6.45447 2.44732 6.34202 2.8028 6.29423C3.12561 6.25083 3.52243 6.25087 3.95524 6.25093L4.86503 6.25093C5.33292 6.25093 5.82524 6.02045 6.21764 5.53153C6.95528 4.61246 8.02847 4.13384 9.11569 4.27411Z',
  d7: 'M17.1959 15.8539C17.4068 16.0511 17.6304 16.2184 17.886 16.3532C18.6416 16.7516 19.4937 16.751 20.6757 16.7502L21.2166 16.7366C22.0114 16.6375 22.6374 16.0115 22.7365 15.2167C22.7502 15.1069 22.7501 14.9875 22.75 14.8725L22.75 9.1892C22.7501 8.75639 22.7501 8.35955 22.7067 8.03674C22.6589 7.68126 22.5465 7.30554 22.2374 6.99651C21.9284 6.68749 21.5527 6.57504 21.1972 6.52725C20.8744 6.48385 20.4776 6.48389 20.0448 6.48395L19.4832 6.48395C18.7358 6.48395 18.1707 6.09971 17.4333 5.35497C16.8165 4.73208 15.887 4.34325 15.0274 4.29073C14.3468 4.24803 13.4299 4.19049 12.6227 4.40286L12.5853 4.41313C11.5725 4.69136 10.912 5.43679 10.3923 6.02338L8.88236 7.72336C8.03921 8.67257 8.03922 10.1789 8.88236 11.1281C9.64174 11.983 10.8785 12.1359 11.8021 11.4426C11.93 11.3467 12.1075 11.1971 12.2217 11.1003C12.3213 11.0157 12.4132 10.9377 12.5068 10.8629C12.6757 10.702 13.0973 10.4935 13.4326 10.9464L15.7713 14.1059C16.1861 14.6663 16.5245 15.1235 16.8338 15.4765C16.9528 15.6122 17.0722 15.7382 17.1959 15.8539Z',
  d8: 'M2 6.99693H5.90636L6.80039 5.99851C7.53394 5.08552 8.61897 4.76672 9.60313 5.17502L11.4957 5.99851M2 15.95H5.9982L7.97702 17.2239C9.86433 18.4389 10.808 19.0465 11.8363 18.9725C11.8848 18.969 11.9331 18.9643 11.9814 18.9586C13.0046 18.8364 13.8066 18.062 15.4106 16.5131L16.9933 14.9846',
  d9: 'M21.9814 7.22558H19.0062C17.8582 6.53293 16.5448 4.74389 14.0454 5.01021C13.4889 5.0695 12.4062 5.15622 11.269 6.28451L9.47178 8.16414C9.11797 8.58707 8.62265 9.67278 9.47178 10.6322C10.3209 11.5916 11.4494 10.8813 11.9075 10.4062L13.0384 9.48507L18.446 15.9408C18.4649 15.9635 18.493 15.9766 18.5226 15.9766H22.004',
  d10: 'M19 7.23396H22V16.0001H18.5L13 9.50012L11.3519 10.8426C10.7519 11.2929 9.953 11.2038 9.44309 10.6298C8.8523 9.96467 8.8523 8.88633 9.44309 8.22123L11.317 6.24654C12.0723 5.45068 13.1213 5 14.2185 5H14.6743C15.5351 5 16.3729 5.27768 17.0633 5.79179L19 7.23396Z',
  d11: 'M16.2788 15.6971L12.8059 11.5928L12.2993 12.0054C12.2839 12.018 12.2682 12.0302 12.2524 12.0421C11.005 12.9783 9.33048 12.7616 8.32163 11.6258C7.22613 10.3925 7.22612 8.45826 8.32162 7.22495C8.33256 7.21264 8.3437 7.20051 8.35504 7.18856L10.0729 5.37832L9.60655 5.17517C8.62195 4.76624 7.53643 5.08553 6.80255 5.99992L5.90812 6.99988H2V15.9667H6L7.97971 17.2426C9.86787 18.4595 10.812 19.0679 11.8407 18.9938C11.8892 18.9903 11.9376 18.9857 11.9859 18.9799C13.0096 18.8576 13.8119 18.0819 15.4166 16.5307L16.2788 15.6971Z',
} as const;

export const IconAgreement01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-01-stroke-rounded IconAgreement01StrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAgreement01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-01-duotone-rounded IconAgreement01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAgreement01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-01-twotone-rounded IconAgreement01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconAgreement01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-01-solid-rounded IconAgreement01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAgreement01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-01-bulk-rounded IconAgreement01BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAgreement01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-01-stroke-sharp IconAgreement01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAgreement01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-01-solid-sharp IconAgreement01SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAgreement01: TheIconSelfPack = {
  name: 'Agreement01',
  StrokeRounded: IconAgreement01StrokeRounded,
  DuotoneRounded: IconAgreement01DuotoneRounded,
  TwotoneRounded: IconAgreement01TwotoneRounded,
  SolidRounded: IconAgreement01SolidRounded,
  BulkRounded: IconAgreement01BulkRounded,
  StrokeSharp: IconAgreement01StrokeSharp,
  SolidSharp: IconAgreement01SolidSharp,
};