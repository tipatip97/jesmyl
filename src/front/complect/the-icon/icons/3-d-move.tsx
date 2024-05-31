import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 14L17.5 18.5M12 14L6.5 18.5M12 14V7',
  d2: 'M10.3914 3.69046C11.1054 2.56349 11.4624 2 12 2C12.5376 2 12.8946 2.56349 13.6086 3.69046L14.1215 4.49995C14.8259 5.6118 15.1781 6.16772 14.9104 6.58386C14.6426 7 13.9327 7 12.5129 7H11.4871C10.0673 7 9.35739 7 9.08963 6.58386C8.82188 6.16772 9.17409 5.6118 9.87852 4.49995L10.3914 3.69046Z',
  d3: 'M21.2324 19.1408C21.8559 20.3502 22.1676 20.9548 21.9085 21.4249C21.6494 21.8949 20.9936 21.9144 19.6819 21.9536L18.7398 21.9817C17.4457 22.0203 16.7987 22.0396 16.5705 21.5895C16.3422 21.1393 16.6843 20.5186 17.3686 19.2773L17.8629 18.3805C18.5471 17.1391 18.8893 16.5184 19.3756 16.5004C19.8619 16.4824 20.1694 17.0789 20.7846 18.2721L21.2324 19.1408Z',
  d4: 'M2.76761 19.1408C2.14414 20.3502 1.8324 20.9548 2.09148 21.4249C2.35055 21.8949 3.00639 21.9144 4.31805 21.9536L5.26021 21.9817C6.55427 22.0203 7.20131 22.0396 7.42955 21.5895C7.65779 21.1393 7.31567 20.5186 6.63143 19.2773L6.13711 18.3805C5.45286 17.1391 5.11074 16.5184 4.62443 16.5004C4.13811 16.4824 3.83055 17.0789 3.21545 18.2721L2.76761 19.1408Z',
  d5: 'M13.0004 13.5261L18.1337 17.726L16.8672 19.274L12.0004 15.2921L7.13366 19.274L5.86719 17.726L11.0004 13.5261V7H13.0004V13.5261Z',
  d6: 'M10.6969 1.92967C11.0022 1.57954 11.4145 1.25 12.0003 1.25C12.5861 1.25 12.9983 1.57954 13.3037 1.92967C13.5875 2.25517 13.8812 2.71882 14.212 3.24102L14.2424 3.28906L14.7553 4.09855L14.7873 4.14902L14.7873 4.14903C15.112 4.66143 15.4028 5.12037 15.5692 5.50521C15.7447 5.91123 15.881 6.46179 15.5414 6.98968C15.221 7.48752 14.6849 7.63222 14.2435 7.69135C13.8049 7.75008 13.2307 7.75004 12.5661 7.75H12.5661H11.4344H11.4344C10.7699 7.75004 10.1956 7.75008 9.75708 7.69135C9.3156 7.63222 8.77951 7.48752 8.45919 6.98968C8.11953 6.46179 8.25584 5.91123 8.43135 5.50521C8.5977 5.12037 8.88855 4.66143 9.21327 4.14902L9.21327 4.14902L9.24525 4.09855L9.75812 3.28906L9.78855 3.24102C10.1193 2.71882 10.413 2.25517 10.6969 1.92967Z',
  d7: 'M21.4245 17.8763L21.4513 17.9285L21.8992 18.7971L21.9246 18.8464C22.2145 19.4088 22.4697 19.9036 22.6112 20.3174C22.7616 20.7572 22.8459 21.2783 22.5655 21.7869C22.2794 22.306 21.7864 22.5009 21.3303 22.5876C20.9108 22.6674 20.3684 22.6835 19.7629 22.7015L19.7045 22.7033L18.7623 22.7314L18.7019 22.7332C18.107 22.751 17.5703 22.7671 17.1571 22.7124C16.7124 22.6535 16.1828 22.483 15.9017 21.9287C15.6381 21.4089 15.765 20.8788 15.9285 20.4583C16.0893 20.0446 16.3661 19.5425 16.6865 18.9613L16.6865 18.9613L16.7119 18.9153L17.2062 18.0185L17.2322 17.9714L17.2322 17.9714C17.552 17.391 17.8289 16.8886 18.0912 16.5349C18.3533 16.1816 18.7453 15.7733 19.3479 15.751C19.9784 15.7276 20.3828 16.1382 20.6392 16.4919C20.8876 16.8346 21.1401 17.3246 21.4245 17.8763L21.4245 17.8763Z',
  d8: 'M3.36102 16.4919C3.61741 16.1382 4.02178 15.7276 4.65228 15.751C5.25487 15.7733 5.64692 16.1816 5.90898 16.5349C6.17127 16.8886 6.44818 17.391 6.76805 17.9714L6.79398 18.0185L7.2883 18.9153L7.31367 18.9613C7.63411 19.5425 7.91091 20.0446 8.07175 20.4583C8.2352 20.8788 8.36207 21.4089 8.09853 21.9287C7.81746 22.483 7.28778 22.6535 6.84306 22.7124C6.42993 22.7671 5.89322 22.751 5.29834 22.7332L5.23789 22.7314L4.29573 22.7033L4.23735 22.7015C3.6318 22.6835 3.08946 22.6674 2.66994 22.5876C2.21377 22.5009 1.72081 22.306 1.4347 21.7869C1.15435 21.2783 1.2386 20.7572 1.38899 20.3174C1.53051 19.9036 1.78567 19.4088 2.07566 18.8464L2.10103 18.7971L2.54887 17.9285L2.57575 17.8763C2.86012 17.3246 3.11264 16.8346 3.36102 16.4919Z',
  d9: 'M10.9994 7.75C11.1392 7.75066 11.284 7.75065 11.4334 7.75064H12.5652C12.7147 7.75065 12.8596 7.75066 12.9994 7.75V13.5268L17.6078 17.2973C17.4883 17.5055 17.3634 17.7321 17.2312 17.972L16.6856 18.9619C16.6645 19.0001 16.6436 19.038 16.6229 19.0756L11.9994 15.2927L7.37552 19.0759C7.35478 19.0383 7.33384 19.0003 7.3127 18.9619L6.76707 17.972C6.63492 17.7323 6.51011 17.5058 6.39062 17.2976L10.9994 13.5268V7.75Z',
  d10: 'M12 14L17.5 18.5M12 14L6.5 18.5M12 14V8',
  d11: 'M15.0007 8L12.0007 3L9 8H15.0007Z',
  d12: 'M22.0007 21L19.0007 16L16 21H22.0007Z',
  d13: 'M8.00075 21L5.00075 16L2 21H8.00075Z',
  d14: 'M13.0004 13.5261L18.1337 17.726L16.8672 19.274L12.0004 15.2921L7.13366 19.274L5.86719 17.726L11.0004 13.5261V8H13.0004V13.5261Z',
  d15: 'M12.0008 2.25C12.2642 2.25001 12.5083 2.38824 12.6439 2.61413L15.6439 7.61413C15.7829 7.84583 15.7865 8.13439 15.6534 8.36952C15.5203 8.60466 15.271 8.75 15.0007 8.75H9C8.72978 8.75 8.48045 8.60464 8.34733 8.36949C8.21421 8.13434 8.21787 7.84575 8.35692 7.61406L11.3577 2.61406C11.4932 2.38818 11.7374 2.24999 12.0008 2.25Z',
  d16: 'M19.0008 15.25C19.2642 15.25 19.5083 15.3882 19.6439 15.6141L22.6439 20.6141C22.7829 20.8458 22.7865 21.1344 22.6534 21.3695C22.5203 21.6047 22.271 21.75 22.0007 21.75H16C15.7298 21.75 15.4805 21.6046 15.3473 21.3695C15.2142 21.1343 15.2179 20.8458 15.3569 20.6141L18.3577 15.6141C18.4932 15.3882 18.7374 15.25 19.0008 15.25Z',
  d17: 'M5.00079 15.25C5.26422 15.25 5.50833 15.3882 5.64387 15.6141L8.64387 20.6141C8.78289 20.8458 8.78653 21.1344 8.6534 21.3695C8.52027 21.6047 8.27095 21.75 8.00075 21.75H2C1.72978 21.75 1.48045 21.6046 1.34733 21.3695C1.21421 21.1343 1.21787 20.8458 1.35692 20.6141L4.35767 15.6141C4.49323 15.3882 4.73736 15.25 5.00079 15.25Z',
} as const;

export const Icon3DMoveStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-move-stroke-rounded Icon3DMoveStrokeRounded"
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

export const Icon3DMoveDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-move-duotone-rounded Icon3DMoveDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const Icon3DMoveTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-move-twotone-rounded Icon3DMoveTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3DMoveSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-move-solid-rounded Icon3DMoveSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3DMoveBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-move-bulk-rounded Icon3DMoveBulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3DMoveStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-move-stroke-sharp Icon3DMoveStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const Icon3DMoveSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-move-solid-sharp Icon3DMoveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOf3DMove: TheIconSelfPack = {
  name: '3DMove',
  StrokeRounded: Icon3DMoveStrokeRounded,
  DuotoneRounded: Icon3DMoveDuotoneRounded,
  TwotoneRounded: Icon3DMoveTwotoneRounded,
  SolidRounded: Icon3DMoveSolidRounded,
  BulkRounded: Icon3DMoveBulkRounded,
  StrokeSharp: Icon3DMoveStrokeSharp,
  SolidSharp: Icon3DMoveSolidSharp,
};