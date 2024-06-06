import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.5 2V4M13.5 2V4M8 6.5H6M8 9.5H6M18 6.5H16M18 9.5H16M13.3333 4H10.6667C9.40959 4 8.78105 4 8.39052 4.39052C8 4.78105 8 5.40959 8 6.66667V9.33333C8 10.5904 8 11.219 8.39052 11.6095C8.78105 12 9.40959 12 10.6667 12H13.3333C14.5904 12 15.219 12 15.6095 11.6095C16 11.219 16 10.5904 16 9.33333V6.66667C16 5.40959 16 4.78105 15.6095 4.39052C15.219 4 14.5904 4 13.3333 4Z',
  d2: 'M3.61732 21.9239C3.80109 22 4.03406 22 4.5 22C4.96594 22 5.19891 22 5.38268 21.9239C5.62771 21.8224 5.82239 21.6277 5.92388 21.3827C6 21.1989 6 20.9659 6 20.5C6 20.0341 6 19.8011 5.92388 19.6173C5.82239 19.3723 5.62771 19.1776 5.38268 19.0761C5.19891 19 4.96594 19 4.5 19C4.03406 19 3.80109 19 3.61732 19.0761C3.37229 19.1776 3.17761 19.3723 3.07612 19.6173C3 19.8011 3 20.0341 3 20.5C3 20.9659 3 21.1989 3.07612 21.3827C3.17761 21.6277 3.37229 21.8224 3.61732 21.9239Z',
  d3: 'M11.1173 21.9239C11.3011 22 11.5341 22 12 22C12.4659 22 12.6989 22 12.8827 21.9239C13.1277 21.8224 13.3224 21.6277 13.4239 21.3827C13.5 21.1989 13.5 20.9659 13.5 20.5C13.5 20.0341 13.5 19.8011 13.4239 19.6173C13.3224 19.3723 13.1277 19.1776 12.8827 19.0761C12.6989 19 12.4659 19 12 19C11.5341 19 11.3011 19 11.1173 19.0761C10.8723 19.1776 10.6776 19.3723 10.5761 19.6173C10.5 19.8011 10.5 20.0341 10.5 20.5C10.5 20.9659 10.5 21.1989 10.5761 21.3827C10.6776 21.6277 10.8723 21.8224 11.1173 21.9239Z',
  d4: 'M12 19V12',
  d5: 'M4.5 19C4.5 17.5955 4.5 16.8933 4.83706 16.3889C4.98298 16.1705 5.17048 15.983 5.38886 15.8371C5.89331 15.5 6.59554 15.5 8 15.5H16C17.4045 15.5 18.1067 15.5 18.6111 15.8371C18.8295 15.983 19.017 16.1705 19.1629 16.3889C19.5 16.8933 19.5 17.5955 19.5 19',
  d6: 'M18.6173 21.9239C18.8011 22 19.0341 22 19.5 22C19.9659 22 20.1989 22 20.3827 21.9239C20.6277 21.8224 20.8224 21.6277 20.9239 21.3827C21 21.1989 21 20.9659 21 20.5C21 20.0341 21 19.8011 20.9239 19.6173C20.8224 19.3723 20.6277 19.1776 20.3827 19.0761C20.1989 19 19.9659 19 19.5 19C19.0341 19 18.8011 19 18.6173 19.0761C18.3723 19.1776 18.1776 19.3723 18.0761 19.6173C18 19.8011 18 20.0341 18 20.5C18 20.9659 18 21.1989 18.0761 21.3827C18.1776 21.6277 18.3723 21.8224 18.6173 21.9239Z',
  d7: 'M13.3333 4H10.6667C9.40959 4 8.78105 4 8.39052 4.39052C8 4.78105 8 5.40959 8 6.66667V9.33333C8 10.5904 8 11.219 8.39052 11.6095C8.78105 12 9.40959 12 10.6667 12H13.3333C14.5904 12 15.219 12 15.6095 11.6095C16 11.219 16 10.5904 16 9.33333V6.66667C16 5.40959 16 4.78105 15.6095 4.39052C15.219 4 14.5904 4 13.3333 4Z',
  d8: 'M10.5 2V4M13.5 2V4M8 6.5H6M8 9.5H6M18 6.5H16M18 9.5H16',
  d9: 'M4.5 19C4.5 17.5955 4.5 16.8933 4.83706 16.3889C4.98298 16.1705 5.17048 15.983 5.38886 15.8371C5.89331 15.5 6.59554 15.5 8 15.5H16C17.4045 15.5 18.1067 15.5 18.6111 15.8371C18.8295 15.983 19.017 16.1705 19.1629 16.3889C19.5 16.8933 19.5 17.5955 19.5 19M12 19V12',
  d10: 'M10.6185 3.25H13.3815L13.3815 3.25C13.9688 3.24996 14.4829 3.24993 14.8963 3.30551C15.3426 3.3655 15.782 3.50236 16.1398 3.8602C16.4976 4.21804 16.6345 4.65745 16.6945 5.10371C16.7501 5.51712 16.75 6.03125 16.75 6.61852V6.61853V9.38148V9.38149C16.75 9.96876 16.7501 10.4829 16.6945 10.8963C16.6345 11.3426 16.4976 11.782 16.1398 12.1398C15.782 12.4976 15.3426 12.6345 14.8963 12.6945C14.4829 12.7501 13.9688 12.75 13.3815 12.75H13.3815H10.6185H10.6185C10.0313 12.75 9.51712 12.7501 9.10371 12.6945C8.65745 12.6345 8.21804 12.4976 7.8602 12.1398C7.50236 11.782 7.3655 11.3426 7.30551 10.8963C7.24993 10.4829 7.24996 9.96876 7.25 9.38149L7.25 9.38148L7.25 6.61853L7.25 6.61852C7.24996 6.03125 7.24993 5.51712 7.30551 5.10371C7.3655 4.65745 7.50236 4.21804 7.8602 3.8602C8.21804 3.50236 8.65745 3.3655 9.10371 3.30551C9.51712 3.24993 10.0313 3.24996 10.6185 3.25L10.6185 3.25Z',
  d11: 'M10.5 1.25C10.9142 1.25 11.25 1.58579 11.25 2V4C11.25 4.41421 10.9142 4.75 10.5 4.75C10.0858 4.75 9.75 4.41421 9.75 4V2C9.75 1.58579 10.0858 1.25 10.5 1.25ZM13.5 1.25C13.9142 1.25 14.25 1.58579 14.25 2V4C14.25 4.41421 13.9142 4.75 13.5 4.75C13.0858 4.75 12.75 4.41421 12.75 4V2C12.75 1.58579 13.0858 1.25 13.5 1.25ZM5.25 6.5C5.25 6.08579 5.58579 5.75 6 5.75H8C8.41421 5.75 8.75 6.08579 8.75 6.5C8.75 6.91421 8.41421 7.25 8 7.25H6C5.58579 7.25 5.25 6.91421 5.25 6.5ZM15.25 6.5C15.25 6.08579 15.5858 5.75 16 5.75H18C18.4142 5.75 18.75 6.08579 18.75 6.5C18.75 6.91421 18.4142 7.25 18 7.25H16C15.5858 7.25 15.25 6.91421 15.25 6.5ZM5.25 9.5C5.25 9.08579 5.58579 8.75 6 8.75H8C8.41421 8.75 8.75 9.08579 8.75 9.5C8.75 9.91421 8.41421 10.25 8 10.25H6C5.58579 10.25 5.25 9.91421 5.25 9.5ZM15.25 9.5C15.25 9.08579 15.5858 8.75 16 8.75H18C18.4142 8.75 18.75 9.08579 18.75 9.5C18.75 9.91421 18.4142 10.25 18 10.25H16C15.5858 10.25 15.25 9.91421 15.25 9.5Z',
  d12: 'M4.50007 18.25C4.71433 18.25 4.9329 18.25 5.09821 18.2613C5.27585 18.2734 5.47119 18.301 5.6697 18.3832C6.0985 18.5608 6.43918 18.9015 6.61679 19.3303C6.69901 19.5288 6.72663 19.7241 6.73875 19.9018C6.75003 20.0671 6.75002 20.3075 6.75 20.5218V20.5218C6.75002 20.736 6.75003 20.9329 6.73875 21.0982C6.72663 21.2759 6.69901 21.4712 6.61679 21.6697C6.43918 22.0985 6.0985 22.4392 5.6697 22.6168C5.47119 22.699 5.27585 22.7266 5.09821 22.7387C4.93289 22.75 4.69251 22.75 4.47824 22.75H4.47823C4.26396 22.75 4.06712 22.75 3.90179 22.7387C3.72415 22.7266 3.52881 22.699 3.33031 22.6168C2.90151 22.4392 2.56083 22.0985 2.38321 21.6697C2.30099 21.4712 2.27338 21.2759 2.26126 21.0982C2.24998 20.9329 2.24999 20.7361 2.25 20.5218V20.5218C2.24999 20.3075 2.24998 20.0671 2.26126 19.9018C2.27338 19.7241 2.30099 19.5288 2.38321 19.3303C2.56083 18.9015 2.90151 18.5608 3.33031 18.3832C3.52881 18.301 3.72415 18.2734 3.90179 18.2613C4.0671 18.25 4.28568 18.25 4.49993 18.25H4.5H4.50007Z',
  d13: 'M12 18.25C12.2143 18.25 12.4329 18.25 12.5982 18.2613C12.7759 18.2734 12.9712 18.301 13.1697 18.3832C13.5985 18.5608 13.9392 18.9015 14.1168 19.3303C14.199 19.5288 14.2266 19.7241 14.2387 19.9018C14.25 20.0671 14.25 20.3075 14.25 20.5218V20.5218C14.25 20.736 14.25 20.9329 14.2387 21.0982C14.2266 21.2759 14.199 21.4712 14.1168 21.6697C13.9392 22.0985 13.5985 22.4392 13.1697 22.6168C12.9712 22.699 12.7759 22.7266 12.5982 22.7387C12.4329 22.75 12.1925 22.75 11.9782 22.75C11.764 22.75 11.5671 22.75 11.4018 22.7387C11.2242 22.7266 11.0288 22.699 10.8303 22.6168C10.4015 22.4392 10.0608 22.0985 9.88321 21.6697C9.80099 21.4712 9.77338 21.2759 9.76126 21.0982C9.74998 20.9329 9.74999 20.7361 9.75 20.5218V20.5218C9.74999 20.3075 9.74998 20.0671 9.76126 19.9018C9.77338 19.7241 9.80099 19.5288 9.88321 19.3303C10.0608 18.9015 10.4015 18.5608 10.8303 18.3832C11.0288 18.301 11.2242 18.2734 11.4018 18.2613C11.5671 18.25 11.7857 18.25 12 18.25H12H12Z',
  d14: 'M12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V14.75L16.0384 14.75C16.7079 14.75 17.2667 14.75 17.719 14.796C18.1925 14.8441 18.6318 14.9489 19.0278 15.2135C19.3281 15.4141 19.5859 15.6719 19.7865 15.9722C20.0511 16.3682 20.1559 16.8075 20.204 17.281C20.25 17.7333 20.25 18.2921 20.25 18.9616V19C20.25 19.4142 19.9142 19.75 19.5 19.75C19.0858 19.75 18.75 19.4142 18.75 19C18.75 18.2822 18.7491 17.8002 18.7117 17.4328C18.6756 17.078 18.6118 16.914 18.5393 16.8055C18.4481 16.669 18.331 16.5519 18.1945 16.4607C18.086 16.3882 17.922 16.3244 17.5672 16.2883C17.1998 16.2509 16.7178 16.25 16 16.25H12.75V19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19V16.25H8C7.28216 16.25 6.80023 16.2509 6.43283 16.2883C6.07796 16.3244 5.91399 16.3882 5.80554 16.4607C5.66905 16.5519 5.55186 16.669 5.46066 16.8055C5.3882 16.914 5.32438 17.078 5.28828 17.4328C5.25091 17.8002 5.25 18.2822 5.25 19C5.25 19.4142 4.91421 19.75 4.5 19.75C4.08579 19.75 3.75 19.4142 3.75 19L3.75 18.9617C3.74998 18.2921 3.74997 17.7334 3.79598 17.281C3.84415 16.8075 3.94886 16.3682 4.21346 15.9722C4.4141 15.6719 4.67191 15.4141 4.97218 15.2135C5.36818 14.9489 5.80755 14.8441 6.28102 14.796C6.73335 14.75 7.29208 14.75 7.96165 14.75L11.25 14.75V12C11.25 11.5858 11.5858 11.25 12 11.25Z',
  d15: 'M19.5001 18.25C19.7143 18.25 19.9329 18.25 20.0982 18.2613C20.2759 18.2734 20.4712 18.301 20.6697 18.3832C21.0985 18.5608 21.4392 18.9015 21.6168 19.3303C21.699 19.5288 21.7266 19.7241 21.7387 19.9018C21.75 20.0671 21.75 20.3075 21.75 20.5218V20.5218C21.75 20.736 21.75 20.9329 21.7387 21.0982C21.7266 21.2759 21.699 21.4712 21.6168 21.6697C21.4392 22.0985 21.0985 22.4392 20.6697 22.6168C20.4712 22.699 20.2759 22.7266 20.0982 22.7387C19.9329 22.75 19.6925 22.75 19.4782 22.75H19.4782C19.264 22.75 19.0671 22.75 18.9018 22.7387C18.7241 22.7266 18.5288 22.699 18.3303 22.6168C17.9015 22.4392 17.5608 22.0985 17.3832 21.6697C17.301 21.4712 17.2734 21.2759 17.2613 21.0982C17.25 20.9329 17.25 20.7361 17.25 20.5218V20.5218C17.25 20.3075 17.25 20.0671 17.2613 19.9018C17.2734 19.7241 17.301 19.5288 17.3832 19.3303C17.5608 18.9015 17.9015 18.5608 18.3303 18.3832C18.5288 18.301 18.7241 18.2734 18.9018 18.2613C19.0671 18.25 19.2857 18.25 19.4999 18.25H19.5H19.5001Z',
  d16: 'M12 18.25C12.2143 18.25 12.4329 18.25 12.5982 18.2613C12.7759 18.2734 12.9712 18.301 13.1697 18.3832C13.5985 18.5608 13.9392 18.9015 14.1168 19.3303C14.199 19.5288 14.2266 19.7241 14.2387 19.9018C14.25 20.0671 14.25 20.3075 14.25 20.5218V20.5218C14.25 20.736 14.25 20.9329 14.2387 21.0982C14.2266 21.2759 14.199 21.4712 14.1168 21.6697C13.9392 22.0985 13.5985 22.4392 13.1697 22.6168C12.9712 22.699 12.7759 22.7266 12.5982 22.7387C12.4329 22.75 12.1925 22.75 11.9782 22.75C11.764 22.75 11.5671 22.75 11.4018 22.7387C11.2241 22.7266 11.0288 22.699 10.8303 22.6168C10.4015 22.4392 10.0608 22.0985 9.88321 21.6697C9.80099 21.4712 9.77338 21.2759 9.76126 21.0982C9.74998 20.9329 9.74999 20.7361 9.75 20.5218V20.5218C9.74999 20.3075 9.74998 20.0671 9.76126 19.9018C9.77338 19.7241 9.80099 19.5288 9.88321 19.3303C10.0608 18.9015 10.4015 18.5608 10.8303 18.3832C11.0288 18.301 11.2241 18.2734 11.4018 18.2613C11.5671 18.25 11.7857 18.25 12 18.25H12H12Z',
  d17: 'M11.25 2C11.25 1.58579 10.9142 1.25 10.5 1.25C10.0858 1.25 9.75 1.58579 9.75 2V3.25824C10.0162 3.24996 10.3071 3.24998 10.6185 3.25H11.25V2Z',
  d18: 'M14.25 3.25824C13.9838 3.24996 13.6929 3.24998 13.3815 3.25H12.75V2C12.75 1.58579 13.0858 1.25 13.5 1.25C13.9142 1.25 14.25 1.58579 14.25 2V3.25824Z',
  d19: 'M16.75 7.25V6.61853C16.75 6.3071 16.7501 6.01618 16.7418 5.75H18C18.4142 5.75 18.75 6.08579 18.75 6.5C18.75 6.91421 18.4142 7.25 18 7.25H16.75Z',
  d20: 'M16.7418 10.25C16.75 9.98382 16.75 9.69297 16.75 9.38155V8.75H18C18.4142 8.75 18.75 9.08579 18.75 9.5C18.75 9.91421 18.4142 10.25 18 10.25H16.7418Z',
  d21: 'M7.25 8.75V9.38148C7.24998 9.69293 7.24996 9.98381 7.25824 10.25H6C5.58579 10.25 5.25 9.91421 5.25 9.5C5.25 9.08579 5.58579 8.75 6 8.75H7.25Z',
  d22: 'M7.25824 5.75C7.24996 6.0162 7.24998 6.30708 7.25 6.61853V7.25H6C5.58579 7.25 5.25 6.91421 5.25 6.5C5.25 6.08579 5.58579 5.75 6 5.75H7.25824Z',
  d23: 'M11.2498 12.75V14.75L7.96142 14.75C7.29184 14.75 6.73311 14.75 6.28078 14.796C5.80731 14.8441 5.36794 14.9489 4.97195 15.2135C4.67167 15.4141 4.41386 15.6719 4.21322 15.9722C3.94863 16.3682 3.84391 16.8075 3.79575 17.281C3.76645 17.569 3.75581 17.9001 3.75195 18.2755C3.80295 18.269 3.85292 18.2646 3.90156 18.2612C4.06685 18.25 4.28555 18.25 4.49979 18.25C4.71403 18.25 4.93268 18.25 5.09797 18.2612C5.14806 18.2647 5.19955 18.2693 5.25212 18.2761C5.25574 17.9318 5.2649 17.6604 5.28804 17.4328C5.32414 17.078 5.38796 16.914 5.46043 16.8055C5.55162 16.669 5.66881 16.5519 5.8053 16.4607C5.91375 16.3882 6.07772 16.3244 6.43259 16.2883C6.8 16.2509 7.28192 16.25 7.99976 16.25H11.2498V18.2758C11.3015 18.2692 11.3522 18.2646 11.4016 18.2612C11.5669 18.25 11.7855 18.25 11.9997 18.25C12.214 18.25 12.4327 18.25 12.598 18.2612C12.6473 18.2646 12.698 18.2692 12.7498 18.2758V16.25H15.9998C16.7176 16.25 17.1995 16.2509 17.5669 16.2883C17.9218 16.3244 18.0858 16.3882 18.1942 16.4607C18.3307 16.5519 18.4479 16.669 18.5391 16.8055C18.6116 16.914 18.6754 17.078 18.7115 17.4328C18.7346 17.6604 18.7438 17.9318 18.7474 18.2761C18.8 18.2693 18.8515 18.2647 18.9016 18.2612C19.0669 18.25 19.2856 18.25 19.4998 18.25C19.714 18.25 19.9327 18.25 20.098 18.2612C20.1466 18.2646 20.1966 18.269 20.2476 18.2755C20.2437 17.9001 20.2331 17.569 20.2038 17.281C20.1556 16.8075 20.0509 16.3682 19.7863 15.9722C19.5857 15.6719 19.3279 15.4141 19.0276 15.2135C18.6316 14.9489 18.1922 14.8441 17.7187 14.796C17.2664 14.75 16.7077 14.75 16.0381 14.75L12.7498 14.75V12.75H11.2498Z',
  d24: 'M15.5 4.5H8.5V11.5H15.5V4.5Z',
  d25: 'M21 19H18V22H21V19Z',
  d26: 'M6 19H3V22H6V19Z',
  d27: 'M13.5 19H10.5V22H13.5V19Z',
  d28: 'M10.5 2V4.5M13.5 2V4.5M8.5 6.5H6M8.5 9.5H6M18 6.5H15.5M18 9.5H15.5',
  d29: 'M12 19V11.5',
  d30: 'M19.5 19V15H4.5V19',
  d31: 'M7.75 3.75H16.25V12.25H7.75V3.75Z',
  d32: 'M17.25 18.25H21.75V22.75H17.25V18.25Z',
  d33: 'M2.25 18.25H6.75V22.75H2.25V18.25Z',
  d34: 'M9.75 18.25H14.25V22.75H9.75V18.25Z',
  d35: 'M9.75 4.5V2H11.25V4.5H9.75ZM12.75 4.5V2H14.25V4.5H12.75ZM6 5.75H8.5V7.25H6V5.75ZM15.5 5.75H18V7.25H15.5V5.75ZM6 8.75H8.5V10.25H6V8.75ZM15.5 8.75H18V10.25H15.5V8.75Z',
  d36: 'M12 10.75C12.4142 10.75 12.75 11.0858 12.75 11.5V19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19V11.5C11.25 11.0858 11.5858 10.75 12 10.75Z',
  d37: 'M3.75 14.25H20.25V19H18.75V15.75H5.25V19H3.75V14.25Z',
};

export const IconAlgorithmStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="algorithm-stroke-rounded IconAlgorithmStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlgorithmDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="algorithm-duotone-rounded IconAlgorithmDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlgorithmTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="algorithm-twotone-rounded IconAlgorithmTwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlgorithmSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="algorithm-solid-rounded IconAlgorithmSolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconAlgorithmBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="algorithm-bulk-rounded IconAlgorithmBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlgorithmStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="algorithm-stroke-sharp IconAlgorithmStrokeSharp"
    >
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
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlgorithmSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="algorithm-solid-sharp IconAlgorithmSolidSharp"
    >
      <path 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d35} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d37} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlgorithm: TheIconSelfPack = {
  name: 'Algorithm',
  StrokeRounded: IconAlgorithmStrokeRounded,
  DuotoneRounded: IconAlgorithmDuotoneRounded,
  TwotoneRounded: IconAlgorithmTwotoneRounded,
  SolidRounded: IconAlgorithmSolidRounded,
  BulkRounded: IconAlgorithmBulkRounded,
  StrokeSharp: IconAlgorithmStrokeSharp,
  SolidSharp: IconAlgorithmSolidSharp,
};