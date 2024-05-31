import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.9998 14.4986C14.9981 15.0266 14.983 15.3137 14.8502 15.5299C14.5236 16.0612 13.8736 15.9976 13.3241 15.9976H10.7994C9.69158 15.9976 9.13766 15.9976 9.01957 15.6713C8.90149 15.345 9.32205 14.9765 10.1632 14.2394L11.8529 12.7588C12.2554 12.4062 12.4566 12.2298 12.4566 12C12.4566 11.7702 12.2554 11.5938 11.8529 11.2412L10.1632 9.76058C9.32205 9.02355 8.90149 8.65503 9.01957 8.3287C9.13766 8.00237 9.69158 8.00237 10.7994 8.00237H13.3241C13.8736 8.00237 14.5236 7.93885 14.8502 8.47006C14.983 8.68627 14.9981 8.97338 14.9998 9.50144',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM10.8243 9.00896L13.987 9.0201C13.9969 9.11628 14.0011 9.2592 14.0019 9.50516C14.0037 10.0574 14.4528 10.5037 15.0051 10.5019C15.5574 10.5002 16.0037 10.051 16.0019 9.49871C16.0011 9.2406 15.9977 8.97885 15.9686 8.74537C15.9376 8.49781 15.8713 8.2188 15.7042 7.94691C15.3472 7.36602 14.8063 7.13805 14.3555 7.05432C14.0267 6.99325 13.6597 6.99852 13.4361 7.00172L10.7359 7.00285H10.7359C10.2392 7.00275 9.76401 7.00266 9.40196 7.05329C9.08102 7.09817 8.35087 7.24412 8.08135 7.98893C7.81605 8.7221 8.26645 9.30245 8.47888 9.54697C8.71995 9.82445 9.07932 10.1392 9.4576 10.4706L11.196 12.0072L9.4576 13.5304L9.45759 13.5304C9.07932 13.8618 8.71995 14.1765 8.47888 14.454C8.26645 14.6985 7.81605 15.2789 8.08135 16.0121C8.35087 16.7569 9.08102 16.9028 9.40196 16.9477C9.764 16.9983 10.2392 16.9982 10.7359 16.9981H10.7359H10.7359C10.7359 16.9981 10.714 16.9993 10.7359 16.9993H13.4361C13.6597 17.0025 14.0267 17.0077 14.3555 16.9467C14.8063 16.8629 15.3472 16.635 15.7042 16.0541C15.8713 15.7822 15.9376 15.5032 15.9686 15.2556C15.9977 15.0222 16.0011 14.7604 16.0019 14.5023C16.0037 13.95 15.5574 13.5009 15.0051 13.4991C14.4528 13.4973 14.0037 13.9436 14.0019 14.4959C14.0011 14.7418 13.9969 14.8847 13.987 14.9809L10.8174 14.9981L12.5469 13.4826C12.7185 13.3325 12.9177 13.1581 13.0657 12.9862C13.2426 12.7807 13.4587 12.454 13.4587 12.0005C13.4587 11.547 13.2426 11.2203 13.0657 11.0148C12.9177 10.8429 12.7185 10.6685 12.5469 10.5184L12.5469 10.5184L12.514 10.4896L10.8243 9.00896Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M13.987 9.0201L10.8243 9.00896L12.514 10.4896L12.5469 10.5184L12.5469 10.5184C12.7185 10.6685 12.9177 10.8429 13.0657 11.0148C13.2426 11.2203 13.4587 11.547 13.4587 12.0005C13.4587 12.454 13.2426 12.7807 13.0657 12.9862C12.9177 13.1581 12.7185 13.3325 12.5469 13.4826L10.8174 14.9981L13.987 14.9809C13.9969 14.8847 14.0011 14.7418 14.0019 14.4959C14.0037 13.9436 14.4528 13.4973 15.0051 13.4991C15.5574 13.5009 16.0037 13.95 16.0019 14.5023C16.0011 14.7604 15.9977 15.0222 15.9686 15.2556C15.9376 15.5032 15.8713 15.7822 15.7042 16.0541C15.3472 16.635 14.8063 16.8629 14.3555 16.9467C14.0267 17.0077 13.6597 17.0025 13.4361 16.9993H10.7359C10.714 16.9993 10.7359 16.9981 10.7359 16.9981H10.7359C10.2392 16.9982 9.76401 16.9983 9.40196 16.9477C9.08102 16.9028 8.35087 16.7569 8.08135 16.0121C7.81605 15.2789 8.26645 14.6985 8.47888 14.454C8.71995 14.1765 9.07932 13.8618 9.45759 13.5304L9.4576 13.5304L11.196 12.0072L9.4576 10.4706C9.07932 10.1392 8.71995 9.82445 8.47888 9.54697C8.26645 9.30245 7.81605 8.7221 8.08135 7.98893C8.35087 7.24412 9.08102 7.09817 9.40196 7.05329C9.76401 7.00266 10.2392 7.00275 10.7359 7.00285L13.4361 7.00172C13.6597 6.99852 14.0267 6.99325 14.3555 7.05432C14.8063 7.13805 15.3472 7.36602 15.7042 7.94691C15.8713 8.2188 15.9376 8.49781 15.9686 8.74537C15.9977 8.97885 16.0011 9.2406 16.0019 9.49871C16.0037 10.051 15.5574 10.5002 15.0051 10.5019C14.4528 10.5037 14.0037 10.0574 14.0019 9.50516C14.0011 9.2592 13.9969 9.11628 13.987 9.0201Z',
  d5: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d6: 'M15 10.0079V8.00002L9.00474 8C9.00103 8 8.99906 8.00455 9.00154 8.00741L12.5115 11.9935L9.0011 15.9839C8.99863 15.9867 9.00059 15.9913 9.00429 15.9913L14.9998 16L15 14.0104',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.0006 8C16.0006 7.73472 15.8952 7.48031 15.7076 7.29276C15.52 7.10521 15.2655 6.9999 15.0002 7L9.00022 7.00228C8.60781 7.00243 8.25175 7.23208 8.08977 7.5895C7.92779 7.94692 7.98983 8.36605 8.24841 8.66122L11.1714 11.9978L8.24748 15.339C7.98903 15.6343 7.92722 16.0536 8.08945 16.4109C8.25168 16.7683 8.60796 16.9977 9.00042 16.9976L15.0007 16.9951C15.5529 16.9949 16.0003 16.5473 16.0003 15.9951V13.9975H14.0003V14.9955L11.2048 14.9967L13.8297 11.9972L11.2054 9.00144L14.0006 9.00038V9.9975H16.0006V8Z',
} as const;

export const IconSummationCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-circle-stroke-rounded IconSummationCircleStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconSummationCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-circle-duotone-rounded IconSummationCircleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSummationCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-circle-twotone-rounded IconSummationCircleTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconSummationCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-circle-solid-rounded IconSummationCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSummationCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-circle-bulk-rounded IconSummationCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSummationCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-circle-stroke-sharp IconSummationCircleStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSummationCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-circle-solid-sharp IconSummationCircleSolidSharp"
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

export const iconPackOfSummationCircle: TheIconSelfPack = {
  name: 'SummationCircle',
  StrokeRounded: IconSummationCircleStrokeRounded,
  DuotoneRounded: IconSummationCircleDuotoneRounded,
  TwotoneRounded: IconSummationCircleTwotoneRounded,
  SolidRounded: IconSummationCircleSolidRounded,
  BulkRounded: IconSummationCircleBulkRounded,
  StrokeSharp: IconSummationCircleStrokeSharp,
  SolidSharp: IconSummationCircleSolidSharp,
};