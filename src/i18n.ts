export type Lang = 'ja' | 'en';

export const site = {
  ja: {
    name: 'プロジェクト発信型英語プログラム',
    short: 'PEP',
    tagline: 'Project-based English Program',
    nav: [
      { href: '/about/', label: 'PEPについて', color: 'red' },
      { href: '/about/curriculum/', label: 'カリキュラム', color: 'blue' },
      { href: '/research/', label: '研究活動', color: 'green' },
      { href: '/members/', label: 'メンバー', color: 'orange' },
      { href: '/links/', label: '関連サイト', color: 'cyan' },
      { href: '/contact/', label: 'お問い合わせ', color: 'purple' },
    ],
    switchLabel: 'English',
    footerAddress:
      '〒525-8577 滋賀県草津市野路東1-1-1 立命館大学びわこ・くさつキャンパス（BKC）リンクスクエア2F プロジェクト英語ルーム',
    copyright: '立命館大学 プロジェクト発信型英語プログラム（PEP）',
  },
  en: {
    name: 'Project-based English Program',
    short: 'PEP',
    tagline: 'Ritsumeikan University',
    nav: [
      { href: '/en/about/', label: 'About', color: 'red' },
      { href: '/en/about/curriculum/', label: 'Curriculum', color: 'blue' },
      { href: '/en/research/', label: 'Research', color: 'green' },
      { href: '/en/members/', label: 'Members', color: 'orange' },
      { href: '/en/links/', label: 'Links', color: 'cyan' },
      { href: '/en/contact/', label: 'Contact', color: 'purple' },
    ],
    switchLabel: '日本語',
    footerAddress:
      'Project English Room, Link Square 2F, Biwako-Kusatsu Campus (BKC), Ritsumeikan University, 1-1-1 Noji-higashi, Kusatsu, Shiga 525-8577, Japan',
    copyright: 'Project-based English Program (PEP), Ritsumeikan University',
  },
} as const;

/**
 * PEPロゴのカラーバリエーション（2015 PEP New Logo）。
 * base = ロゴ本来の色（線・帯・ロゴ画像に使用）、ink = 白背景で文字に使っても読める濃さに調整した色。
 * 画像は public/logo/pep-<名前>.png。
 */
export const palette = {
  red:    { base: '#ac181e', ink: '#ac181e', soft: '#f9ecec' }, // 立命館カラー（トップ・PEPについて）
  blue:   { base: '#1d2088', ink: '#1d2088', soft: '#ececf6' },
  green:  { base: '#009944', ink: '#007a36', soft: '#e8f5ed' },
  orange: { base: '#ea5413', ink: '#b8400c', soft: '#fdf0ea' },
  cyan:   { base: '#00a0e9', ink: '#00709f', soft: '#e8f5fc' },
  purple: { base: '#920783', ink: '#920783', soft: '#f5eaf3' },
  pink:   { base: '#e61874', ink: '#c2135f', soft: '#fdebf2' },
  gold:   { base: '#f8b62b', ink: '#8a5a00', soft: '#fef6e5' },
} as const;
export type PaletteName = keyof typeof palette;

/** パスから所属セクションの色を決める（最も長く一致したメニュー項目の色。なければ立命館カラー） */
export function sectionColor(pathname: string, lang: Lang): PaletteName {
  const p = pathname.endsWith('/') ? pathname : pathname + '/';
  let best: { len: number; color: PaletteName } = { len: 0, color: 'red' };
  for (const item of site[lang].nav) {
    if (p.startsWith(item.href) && item.href.length > best.len) best = { len: item.href.length, color: item.color };
  }
  return best.color;
}

/** 対応する他言語ページのパスを返す（/about/ ⇔ /en/about/） */
export function alternatePath(pathname: string, lang: Lang): string {
  const p = pathname.endsWith('/') ? pathname : pathname + '/';
  if (lang === 'en') return p.replace(/^\/en\//, '/');
  return '/en' + p;
}
