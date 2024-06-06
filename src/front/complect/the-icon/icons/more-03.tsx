import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 19.5C3 19.0341 3 18.8011 3.07612 18.6173C3.17761 18.3723 3.37229 18.1776 3.61732 18.0761C3.80109 18 4.03406 18 4.5 18C4.96594 18 5.19891 18 5.38268 18.0761C5.62771 18.1776 5.82239 18.3723 5.92388 18.6173C6 18.8011 6 19.0341 6 19.5C6 19.9659 6 20.1989 5.92388 20.3827C5.82239 20.6277 5.62771 20.8224 5.38268 20.9239C5.19891 21 4.96594 21 4.5 21C4.03406 21 3.80109 21 3.61732 20.9239C3.37229 20.8224 3.17761 20.6277 3.07612 20.3827C3 20.1989 3 19.9659 3 19.5Z',
  d2: 'M10.5 19.5C10.5 19.0341 10.5 18.8011 10.5761 18.6173C10.6776 18.3723 10.8723 18.1776 11.1173 18.0761C11.3011 18 11.5341 18 12 18C12.4659 18 12.6989 18 12.8827 18.0761C13.1277 18.1776 13.3224 18.3723 13.4239 18.6173C13.5 18.8011 13.5 19.0341 13.5 19.5C13.5 19.9659 13.5 20.1989 13.4239 20.3827C13.3224 20.6277 13.1277 20.8224 12.8827 20.9239C12.6989 21 12.4659 21 12 21C11.5341 21 11.3011 21 11.1173 20.9239C10.8723 20.8224 10.6776 20.6277 10.5761 20.3827C10.5 20.1989 10.5 19.9659 10.5 19.5Z',
  d3: 'M18 19.5C18 19.0341 18 18.8011 18.0761 18.6173C18.1776 18.3723 18.3723 18.1776 18.6173 18.0761C18.8011 18 19.0341 18 19.5 18C19.9659 18 20.1989 18 20.3827 18.0761C20.6277 18.1776 20.8224 18.3723 20.9239 18.6173C21 18.8011 21 19.0341 21 19.5C21 19.9659 21 20.1989 20.9239 20.3827C20.8224 20.6277 20.6277 20.8224 20.3827 20.9239C20.1989 21 19.9659 21 19.5 21C19.0341 21 18.8011 21 18.6173 20.9239C18.3723 20.8224 18.1776 20.6277 18.0761 20.3827C18 20.1989 18 19.9659 18 19.5Z',
  d4: 'M3 12C3 11.5341 3 11.3011 3.07612 11.1173C3.17761 10.8723 3.37229 10.6776 3.61732 10.5761C3.80109 10.5 4.03406 10.5 4.5 10.5C4.96594 10.5 5.19891 10.5 5.38268 10.5761C5.62771 10.6776 5.82239 10.8723 5.92388 11.1173C6 11.3011 6 11.5341 6 12C6 12.4659 6 12.6989 5.92388 12.8827C5.82239 13.1277 5.62771 13.3224 5.38268 13.4239C5.19891 13.5 4.96594 13.5 4.5 13.5C4.03406 13.5 3.80109 13.5 3.61732 13.4239C3.37229 13.3224 3.17761 13.1277 3.07612 12.8827C3 12.6989 3 12.4659 3 12Z',
  d5: 'M10.5 12C10.5 11.5341 10.5 11.3011 10.5761 11.1173C10.6776 10.8723 10.8723 10.6776 11.1173 10.5761C11.3011 10.5 11.5341 10.5 12 10.5C12.4659 10.5 12.6989 10.5 12.8827 10.5761C13.1277 10.6776 13.3224 10.8723 13.4239 11.1173C13.5 11.3011 13.5 11.5341 13.5 12C13.5 12.4659 13.5 12.6989 13.4239 12.8827C13.3224 13.1277 13.1277 13.3224 12.8827 13.4239C12.6989 13.5 12.4659 13.5 12 13.5C11.5341 13.5 11.3011 13.5 11.1173 13.4239C10.8723 13.3224 10.6776 13.1277 10.5761 12.8827C10.5 12.6989 10.5 12.4659 10.5 12Z',
  d6: 'M18 12C18 11.5341 18 11.3011 18.0761 11.1173C18.1776 10.8723 18.3723 10.6776 18.6173 10.5761C18.8011 10.5 19.0341 10.5 19.5 10.5C19.9659 10.5 20.1989 10.5 20.3827 10.5761C20.6277 10.6776 20.8224 10.8723 20.9239 11.1173C21 11.3011 21 11.5341 21 12C21 12.4659 21 12.6989 20.9239 12.8827C20.8224 13.1277 20.6277 13.3224 20.3827 13.4239C20.1989 13.5 19.9659 13.5 19.5 13.5C19.0341 13.5 18.8011 13.5 18.6173 13.4239C18.3723 13.3224 18.1776 13.1277 18.0761 12.8827C18 12.6989 18 12.4659 18 12Z',
  d7: 'M3 4.5C3 4.03406 3 3.80109 3.07612 3.61732C3.17761 3.37229 3.37229 3.17761 3.61732 3.07612C3.80109 3 4.03406 3 4.5 3C4.96594 3 5.19891 3 5.38268 3.07612C5.62771 3.17761 5.82239 3.37229 5.92388 3.61732C6 3.80109 6 4.03406 6 4.5C6 4.96594 6 5.19891 5.92388 5.38268C5.82239 5.62771 5.62771 5.82239 5.38268 5.92388C5.19891 6 4.96594 6 4.5 6C4.03406 6 3.80109 6 3.61732 5.92388C3.37229 5.82239 3.17761 5.62771 3.07612 5.38268C3 5.19891 3 4.96594 3 4.5Z',
  d8: 'M10.5 4.5C10.5 4.03406 10.5 3.80109 10.5761 3.61732C10.6776 3.37229 10.8723 3.17761 11.1173 3.07612C11.3011 3 11.5341 3 12 3C12.4659 3 12.6989 3 12.8827 3.07612C13.1277 3.17761 13.3224 3.37229 13.4239 3.61732C13.5 3.80109 13.5 4.03406 13.5 4.5C13.5 4.96594 13.5 5.19891 13.4239 5.38268C13.3224 5.62771 13.1277 5.82239 12.8827 5.92388C12.6989 6 12.4659 6 12 6C11.5341 6 11.3011 6 11.1173 5.92388C10.8723 5.82239 10.6776 5.62771 10.5761 5.38268C10.5 5.19891 10.5 4.96594 10.5 4.5Z',
  d9: 'M18 4.5C18 4.03406 18 3.80109 18.0761 3.61732C18.1776 3.37229 18.3723 3.17761 18.6173 3.07612C18.8011 3 19.0341 3 19.5 3C19.9659 3 20.1989 3 20.3827 3.07612C20.6277 3.17761 20.8224 3.37229 20.9239 3.61732C21 3.80109 21 4.03406 21 4.5C21 4.96594 21 5.19891 20.9239 5.38268C20.8224 5.62771 20.6277 5.82239 20.3827 5.92388C20.1989 6 19.9659 6 19.5 6C19.0341 6 18.8011 6 18.6173 5.92388C18.3723 5.82239 18.1776 5.62771 18.0761 5.38268C18 5.19891 18 4.96594 18 4.5Z',
  d10: 'M19.4782 17.25C19.4855 17.25 19.4927 17.25 19.5 17.25C19.5073 17.25 19.5145 17.25 19.5218 17.25C19.736 17.25 19.9329 17.25 20.0982 17.2613C20.2759 17.2734 20.4712 17.301 20.6697 17.3832C21.0985 17.5608 21.4392 17.9015 21.6168 18.3303C21.699 18.5288 21.7266 18.7241 21.7387 18.9018C21.75 19.0671 21.75 19.264 21.75 19.4782V19.5218C21.75 19.736 21.75 19.9329 21.7387 20.0982C21.7266 20.2759 21.699 20.4712 21.6168 20.6697C21.4392 21.0985 21.0985 21.4392 20.6697 21.6168C20.4712 21.699 20.2759 21.7266 20.0982 21.7387C19.9329 21.75 19.736 21.75 19.5218 21.75H19.4782C19.264 21.75 19.0671 21.75 18.9018 21.7387C18.7241 21.7266 18.5288 21.699 18.3303 21.6168C17.9015 21.4392 17.5608 21.0985 17.3832 20.6697C17.301 20.4712 17.2734 20.2759 17.2613 20.0982C17.25 19.9329 17.25 19.736 17.25 19.5218C17.25 19.5145 17.25 19.5073 17.25 19.5C17.25 19.4927 17.25 19.4855 17.25 19.4782C17.25 19.264 17.25 19.0671 17.2613 18.9018C17.2734 18.7241 17.301 18.5288 17.3832 18.3303C17.5608 17.9015 17.9015 17.5608 18.3303 17.3832C18.5288 17.301 18.7241 17.2734 18.9018 17.2613C19.0671 17.25 19.264 17.25 19.4782 17.25Z',
  d11: 'M19.4782 9.75C19.4855 9.75 19.4927 9.75 19.5 9.75C19.5073 9.75 19.5145 9.75 19.5218 9.75C19.736 9.74999 19.9329 9.74998 20.0982 9.76126C20.2759 9.77338 20.4712 9.80099 20.6697 9.88321C21.0985 10.0608 21.4392 10.4015 21.6168 10.8303C21.699 11.0288 21.7266 11.2241 21.7387 11.4018C21.75 11.5671 21.75 11.764 21.75 11.9782V12.0218C21.75 12.236 21.75 12.4329 21.7387 12.5982C21.7266 12.7759 21.699 12.9712 21.6168 13.1697C21.4392 13.5985 21.0985 13.9392 20.6697 14.1168C20.4712 14.199 20.2759 14.2266 20.0982 14.2387C19.9329 14.25 19.736 14.25 19.5218 14.25H19.4782C19.264 14.25 19.0671 14.25 18.9018 14.2387C18.7241 14.2266 18.5288 14.199 18.3303 14.1168C17.9015 13.9392 17.5608 13.5985 17.3832 13.1697C17.301 12.9712 17.2734 12.7759 17.2613 12.5982C17.25 12.4329 17.25 12.236 17.25 12.0218C17.25 12.0145 17.25 12.0073 17.25 12C17.25 11.9927 17.25 11.9855 17.25 11.9782C17.25 11.764 17.25 11.5671 17.2613 11.4018C17.2734 11.2241 17.301 11.0288 17.3832 10.8303C17.5608 10.4015 17.9015 10.0608 18.3303 9.88321C18.5288 9.80099 18.7241 9.77338 18.9018 9.76126C19.0671 9.74998 19.264 9.74999 19.4782 9.75Z',
  d12: 'M19.4782 2.25C19.4855 2.25 19.4927 2.25 19.5 2.25C19.5073 2.25 19.5145 2.25 19.5218 2.25C19.736 2.24999 19.9329 2.24998 20.0982 2.26126C20.2759 2.27338 20.4712 2.30099 20.6697 2.38321C21.0985 2.56083 21.4392 2.90151 21.6168 3.33031C21.699 3.52881 21.7266 3.72415 21.7387 3.90179C21.75 4.06712 21.75 4.26396 21.75 4.47824V4.52176C21.75 4.73604 21.75 4.93289 21.7387 5.09821C21.7266 5.27585 21.699 5.47119 21.6168 5.6697C21.4392 6.0985 21.0985 6.43918 20.6697 6.61679C20.4712 6.69901 20.2759 6.72663 20.0982 6.73875C19.9329 6.75003 19.736 6.75002 19.5218 6.75H19.4782C19.264 6.75002 19.0671 6.75003 18.9018 6.73875C18.7241 6.72663 18.5288 6.69901 18.3303 6.61679C17.9015 6.43918 17.5608 6.0985 17.3832 5.6697C17.301 5.47119 17.2734 5.27585 17.2613 5.09821C17.25 4.93288 17.25 4.73604 17.25 4.52176C17.25 4.51453 17.25 4.50727 17.25 4.5C17.25 4.49273 17.25 4.48548 17.25 4.47825C17.25 4.26397 17.25 4.06712 17.2613 3.90179C17.2734 3.72415 17.301 3.52881 17.3832 3.33031C17.5608 2.90151 17.9015 2.56083 18.3303 2.38321C18.5288 2.30099 18.7241 2.27338 18.9018 2.26126C19.0671 2.24998 19.264 2.24999 19.4782 2.25Z',
  d13: 'M11.9782 17.25C11.9855 17.25 11.9927 17.25 12 17.25C12.0073 17.25 12.0145 17.25 12.0218 17.25C12.236 17.25 12.4329 17.25 12.5982 17.2613C12.7759 17.2734 12.9712 17.301 13.1697 17.3832C13.5985 17.5608 13.9392 17.9015 14.1168 18.3303C14.199 18.5288 14.2266 18.7241 14.2387 18.9018C14.25 19.0671 14.25 19.264 14.25 19.4782V19.5218C14.25 19.736 14.25 19.9329 14.2387 20.0982C14.2266 20.2759 14.199 20.4712 14.1168 20.6697C13.9392 21.0985 13.5985 21.4392 13.1697 21.6168C12.9712 21.699 12.7759 21.7266 12.5982 21.7387C12.4329 21.75 12.236 21.75 12.0218 21.75H11.9782C11.764 21.75 11.5671 21.75 11.4018 21.7387C11.2241 21.7266 11.0288 21.699 10.8303 21.6168C10.4015 21.4392 10.0608 21.0985 9.88321 20.6697C9.80099 20.4712 9.77338 20.2759 9.76126 20.0982C9.74998 19.9329 9.74999 19.736 9.75 19.5218C9.75 19.5145 9.75 19.5073 9.75 19.5C9.75 19.4927 9.75 19.4855 9.75 19.4782C9.74999 19.264 9.74998 19.0671 9.76126 18.9018C9.77338 18.7241 9.80099 18.5288 9.88321 18.3303C10.0608 17.9015 10.4015 17.5608 10.8303 17.3832C11.0288 17.301 11.2241 17.2734 11.4018 17.2613C11.5671 17.25 11.764 17.25 11.9782 17.25Z',
  d14: 'M11.9782 9.75C11.9855 9.75 11.9927 9.75 12 9.75C12.0073 9.75 12.0145 9.75 12.0218 9.75C12.236 9.74999 12.4329 9.74998 12.5982 9.76126C12.7759 9.77338 12.9712 9.80099 13.1697 9.88321C13.5985 10.0608 13.9392 10.4015 14.1168 10.8303C14.199 11.0288 14.2266 11.2241 14.2387 11.4018C14.25 11.5671 14.25 11.764 14.25 11.9782V12.0218C14.25 12.236 14.25 12.4329 14.2387 12.5982C14.2266 12.7759 14.199 12.9712 14.1168 13.1697C13.9392 13.5985 13.5985 13.9392 13.1697 14.1168C12.9712 14.199 12.7759 14.2266 12.5982 14.2387C12.4329 14.25 12.236 14.25 12.0218 14.25H11.9782C11.764 14.25 11.5671 14.25 11.4018 14.2387C11.2241 14.2266 11.0288 14.199 10.8303 14.1168C10.4015 13.9392 10.0608 13.5985 9.88321 13.1697C9.80099 12.9712 9.77338 12.7759 9.76126 12.5982C9.74998 12.4329 9.74999 12.236 9.75 12.0218C9.75 12.0145 9.75 12.0073 9.75 12C9.75 11.9927 9.75 11.9855 9.75 11.9782C9.74999 11.764 9.74998 11.5671 9.76126 11.4018C9.77338 11.2241 9.80099 11.0288 9.88321 10.8303C10.0608 10.4015 10.4015 10.0608 10.8303 9.88321C11.0288 9.80099 11.2241 9.77338 11.4018 9.76126C11.5671 9.74998 11.764 9.74999 11.9782 9.75Z',
  d15: 'M11.9782 2.25C11.9855 2.25 11.9927 2.25 12 2.25C12.0073 2.25 12.0145 2.25 12.0218 2.25C12.236 2.24999 12.4329 2.24998 12.5982 2.26126C12.7759 2.27338 12.9712 2.30099 13.1697 2.38321C13.5985 2.56083 13.9392 2.90151 14.1168 3.33031C14.199 3.52881 14.2266 3.72415 14.2387 3.90179C14.25 4.06712 14.25 4.26396 14.25 4.47824V4.52176C14.25 4.73604 14.25 4.93289 14.2387 5.09821C14.2266 5.27585 14.199 5.47119 14.1168 5.6697C13.9392 6.0985 13.5985 6.43918 13.1697 6.61679C12.9712 6.69901 12.7759 6.72663 12.5982 6.73875C12.4329 6.75003 12.236 6.75002 12.0218 6.75H11.9782C11.764 6.75002 11.5671 6.75003 11.4018 6.73875C11.2241 6.72663 11.0288 6.69901 10.8303 6.61679C10.4015 6.43918 10.0608 6.0985 9.88321 5.6697C9.80099 5.47119 9.77338 5.27585 9.76126 5.09821C9.74998 4.93288 9.74999 4.73604 9.75 4.52176C9.75 4.51453 9.75 4.50727 9.75 4.5C9.75 4.49273 9.75 4.48548 9.75 4.47825C9.74999 4.26397 9.74998 4.06712 9.76126 3.90179C9.77338 3.72415 9.80099 3.52881 9.88321 3.33031C10.0608 2.90151 10.4015 2.56083 10.8303 2.38321C11.0288 2.30099 11.2241 2.27338 11.4018 2.26126C11.5671 2.24998 11.764 2.24999 11.9782 2.25Z',
  d16: 'M4.47825 17.25C4.48548 17.25 4.49273 17.25 4.5 17.25C4.50727 17.25 4.51453 17.25 4.52176 17.25C4.73604 17.25 4.93288 17.25 5.09821 17.2613C5.27585 17.2734 5.47119 17.301 5.6697 17.3832C6.0985 17.5608 6.43918 17.9015 6.61679 18.3303C6.69901 18.5288 6.72663 18.7241 6.73875 18.9018C6.75003 19.0671 6.75002 19.264 6.75 19.4782V19.5218C6.75002 19.736 6.75003 19.9329 6.73875 20.0982C6.72663 20.2759 6.69901 20.4712 6.61679 20.6697C6.43918 21.0985 6.0985 21.4392 5.6697 21.6168C5.47119 21.699 5.27585 21.7266 5.09821 21.7387C4.93289 21.75 4.73604 21.75 4.52176 21.75H4.47824C4.26396 21.75 4.06712 21.75 3.90179 21.7387C3.72415 21.7266 3.52881 21.699 3.33031 21.6168C2.90151 21.4392 2.56083 21.0985 2.38321 20.6697C2.30099 20.4712 2.27338 20.2759 2.26126 20.0982C2.24998 19.9329 2.24999 19.736 2.25 19.5218C2.25 19.5145 2.25 19.5073 2.25 19.5C2.25 19.4927 2.25 19.4855 2.25 19.4782C2.24999 19.264 2.24998 19.0671 2.26126 18.9018C2.27338 18.7241 2.30099 18.5288 2.38321 18.3303C2.56083 17.9015 2.90151 17.5608 3.33031 17.3832C3.52881 17.301 3.72415 17.2734 3.90179 17.2613C4.06712 17.25 4.26397 17.25 4.47825 17.25Z',
  d17: 'M4.47825 9.75C4.48548 9.75 4.49273 9.75 4.5 9.75C4.50727 9.75 4.51453 9.75 4.52176 9.75C4.73604 9.74999 4.93288 9.74998 5.09821 9.76126C5.27585 9.77338 5.47119 9.80099 5.6697 9.88321C6.0985 10.0608 6.43918 10.4015 6.61679 10.8303C6.69901 11.0288 6.72663 11.2241 6.73875 11.4018C6.75003 11.5671 6.75002 11.764 6.75 11.9782V12.0218C6.75002 12.236 6.75003 12.4329 6.73875 12.5982C6.72663 12.7759 6.69901 12.9712 6.61679 13.1697C6.43918 13.5985 6.0985 13.9392 5.6697 14.1168C5.47119 14.199 5.27585 14.2266 5.09821 14.2387C4.93289 14.25 4.73604 14.25 4.52176 14.25H4.47824C4.26396 14.25 4.06712 14.25 3.90179 14.2387C3.72415 14.2266 3.52881 14.199 3.33031 14.1168C2.90151 13.9392 2.56083 13.5985 2.38321 13.1697C2.30099 12.9712 2.27338 12.7759 2.26126 12.5982C2.24998 12.4329 2.24999 12.236 2.25 12.0218C2.25 12.0145 2.25 12.0073 2.25 12C2.25 11.9927 2.25 11.9855 2.25 11.9782C2.24999 11.764 2.24998 11.5671 2.26126 11.4018C2.27338 11.2241 2.30099 11.0288 2.38321 10.8303C2.56083 10.4015 2.90151 10.0608 3.33031 9.88321C3.52881 9.80099 3.72415 9.77338 3.90179 9.76126C4.06712 9.74998 4.26397 9.74999 4.47825 9.75Z',
  d18: 'M4.47825 2.25C4.48548 2.25 4.49273 2.25 4.5 2.25C4.50727 2.25 4.51453 2.25 4.52176 2.25C4.73604 2.24999 4.93288 2.24998 5.09821 2.26126C5.27585 2.27338 5.47119 2.30099 5.6697 2.38321C6.0985 2.56083 6.43918 2.90151 6.61679 3.33031C6.69901 3.52881 6.72663 3.72415 6.73875 3.90179C6.75003 4.06712 6.75002 4.26396 6.75 4.47824V4.52176C6.75002 4.73604 6.75003 4.93289 6.73875 5.09821C6.72663 5.27585 6.69901 5.47119 6.61679 5.6697C6.43918 6.0985 6.0985 6.43918 5.6697 6.61679C5.47119 6.69901 5.27585 6.72663 5.09821 6.73875C4.93289 6.75003 4.73604 6.75002 4.52176 6.75H4.47824C4.26396 6.75002 4.06712 6.75003 3.90179 6.73875C3.72415 6.72663 3.52881 6.69901 3.33031 6.61679C2.90151 6.43918 2.56083 6.0985 2.38321 5.6697C2.30099 5.47119 2.27338 5.27585 2.26126 5.09821C2.24998 4.93288 2.24999 4.73604 2.25 4.52176C2.25 4.51453 2.25 4.50727 2.25 4.5C2.25 4.49273 2.25 4.48548 2.25 4.47825C2.24999 4.26397 2.24998 4.06712 2.26126 3.90179C2.27338 3.72415 2.30099 3.52881 2.38321 3.33031C2.56083 2.90151 2.90151 2.56083 3.33031 2.38321C3.52881 2.30099 3.72415 2.27338 3.90179 2.26126C4.06712 2.24998 4.26397 2.24999 4.47825 2.25Z',
  d19: 'M3 6H6V3H3V6Z',
  d20: 'M18 6H21V3H18V6Z',
  d21: 'M10.5 6H13.5V3H10.5V6Z',
  d22: 'M3 21H6V18H3V21Z',
  d23: 'M3 13.5H6V10.5H3V13.5Z',
  d24: 'M18 21H21V18H18V21Z',
  d25: 'M18 13.5H21V10.5H18V13.5Z',
  d26: 'M10.5 21H13.5V18H10.5V21Z',
  d27: 'M10.5 13.5H13.5V10.5H10.5V13.5Z',
  d28: 'M2.25 2.25H6.75V6.75H2.25V2.25Z',
  d29: 'M17.25 2.25H21.75V6.75H17.25V2.25Z',
  d30: 'M9.75 2.25H14.25V6.75H9.75V2.25Z',
  d31: 'M2.25 17.25H6.75V21.75H2.25V17.25Z',
  d32: 'M2.25 9.75H6.75V14.25H2.25V9.75Z',
  d33: 'M17.25 17.25H21.75V21.75H17.25V17.25Z',
  d34: 'M17.25 9.75H21.75V14.25H17.25V9.75Z',
  d35: 'M9.75 17.25H14.25V21.75H9.75V17.25Z',
  d36: 'M9.75 9.75H14.25V14.25H9.75V9.75Z',
};

export const IconMore03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-03-stroke-rounded IconMore03StrokeRounded"
    >
      <rect 
        x="18" 
        y="18" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="18" 
        y="10.5" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="18" 
        y="3" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="10.5" 
        y="18" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="10.5" 
        y="10.5" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="10.5" 
        y="3" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="3" 
        y="18" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="3" 
        y="10.5" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="3" 
        y="3" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
    </TheIconWrapper>
  );
};

export const IconMore03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-03-duotone-rounded IconMore03DuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
      <rect 
        x="18" 
        y="18" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="18" 
        y="10.5" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="18" 
        y="3" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="10.5" 
        y="18" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="10.5" 
        y="10.5" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="10.5" 
        y="3" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="3" 
        y="18" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="3" 
        y="10.5" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="3" 
        y="3" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
    </TheIconWrapper>
  );
};

export const IconMore03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-03-twotone-rounded IconMore03TwotoneRounded"
    >
      <rect 
        x="18" 
        y="18" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="18" 
        y="10.5" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="18" 
        y="3" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        opacity="var(--icon-opacity)" 
        x="10.5" 
        y="18" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        opacity="var(--icon-opacity)" 
        x="10.5" 
        y="10.5" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        opacity="var(--icon-opacity)" 
        x="10.5" 
        y="3" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="3" 
        y="18" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="3" 
        y="10.5" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
      <rect 
        x="3" 
        y="3" 
        width="3" 
        height="3" 
        rx="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
    </TheIconWrapper>
  );
};

export const IconMore03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-03-solid-rounded IconMore03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMore03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-03-bulk-rounded IconMore03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMore03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-03-stroke-sharp IconMore03StrokeSharp"
    >
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMore03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-03-solid-sharp IconMore03SolidSharp"
    >
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d35} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMore03: TheIconSelfPack = {
  name: 'More03',
  StrokeRounded: IconMore03StrokeRounded,
  DuotoneRounded: IconMore03DuotoneRounded,
  TwotoneRounded: IconMore03TwotoneRounded,
  SolidRounded: IconMore03SolidRounded,
  BulkRounded: IconMore03BulkRounded,
  StrokeSharp: IconMore03StrokeSharp,
  SolidSharp: IconMore03SolidSharp,
};