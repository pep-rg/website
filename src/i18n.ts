export type Lang = 'ja' | 'en';

export const site = {
  ja: {
    name: 'プロジェクト発信型英語プログラム',
    short: 'PEP',
    tagline: 'Project-based English Program',
    nav: [
      { href: '/about/', label: 'PEPについて' },
      { href: '/about/curriculum/', label: 'カリキュラム' },
      { href: '/research/', label: '研究活動' },
      { href: '/members/', label: 'メンバー' },
      { href: '/links/', label: '関連サイト' },
      { href: '/contact/', label: 'お問い合わせ' },
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
      { href: '/en/about/', label: 'About' },
      { href: '/en/about/curriculum/', label: 'Curriculum' },
      { href: '/en/research/', label: 'Research' },
      { href: '/en/members/', label: 'Members' },
      { href: '/en/links/', label: 'Links' },
      { href: '/en/contact/', label: 'Contact' },
    ],
    switchLabel: '日本語',
    footerAddress:
      'Project English Room, Link Square 2F, Biwako-Kusatsu Campus (BKC), Ritsumeikan University, 1-1-1 Noji-higashi, Kusatsu, Shiga 525-8577, Japan',
    copyright: 'Project-based English Program (PEP), Ritsumeikan University',
  },
} as const;

/** 対応する他言語ページのパスを返す（/about/ ⇔ /en/about/） */
export function alternatePath(pathname: string, lang: Lang): string {
  const p = pathname.endsWith('/') ? pathname : pathname + '/';
  if (lang === 'en') return p.replace(/^\/en\//, '/');
  return '/en' + p;
}
