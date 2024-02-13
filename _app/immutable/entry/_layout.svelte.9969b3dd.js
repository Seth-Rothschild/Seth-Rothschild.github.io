import {
  S as J,
  i as K,
  s as Q,
  C as T,
  k as v,
  q as f,
  a as B,
  l as g,
  m as b,
  r as i,
  h as n,
  c as I,
  n as r,
  b as S,
  D as e,
  E as U,
  F as W,
  G as X,
  g as Y,
  d as Z,
} from "../chunks/index.0da420e6.js";
function x(E) {
  let o, h, $, k, u, H, w, y, a, _, G, R, c, q, C, d, M, N, m, O, A;
  const P = E[1].default,
    s = T(P, E, E[0], null);
  return {
    c() {
      (o = v("nav")),
        (h = v("a")),
        ($ = f("Home")),
        (k = f(` |
	`)),
        (u = v("a")),
        (H = f("Programming")),
        (w = B()),
        s && s.c(),
        (y = B()),
        (a = v("nav")),
        (_ = v("a")),
        (G = f("GitHub")),
        (R = f(`
	|
	`)),
        (c = v("a")),
        (q = f("Reddit")),
        (C = f(`
	|
	`)),
        (d = v("a")),
        (M = f("Mastodon")),
        (N = f(` |
	`)),
        (m = v("a")),
        (O = f("Stack Overflow")),
        this.h();
    },
    l(t) {
      o = g(t, "NAV", {});
      var l = b(o);
      h = g(l, "A", { href: !0 });
      var V = b(h);
      ($ = i(V, "Home")),
        V.forEach(n),
        (k = i(
          l,
          ` |
	`
        )),
        (u = g(l, "A", { href: !0 }));
      var D = b(u);
      (H = i(D, "Programming")),
        D.forEach(n),
        l.forEach(n),
        (w = I(t)),
        s && s.l(t),
        (y = I(t)),
        (a = g(t, "NAV", { class: !0 }));
      var p = b(a);
      _ = g(p, "A", { href: !0, target: !0, rel: !0 });
      var F = b(_);
      (G = i(F, "GitHub")),
        F.forEach(n),
        (R = i(
          p,
          `
	|
	`
        )),
        (c = g(p, "A", { href: !0, target: !0, rel: !0 }));
      var L = b(c);
      (q = i(L, "Reddit")),
        L.forEach(n),
        (C = i(
          p,
          `
	|
	`
        )),
        (d = g(p, "A", { rel: !0, href: !0, target: !0 }));
      var j = b(d);
      (M = i(j, "Mastodon")),
        j.forEach(n),
        (N = i(
          p,
          ` |
	`
        )),
        (m = g(p, "A", { href: !0, target: !0, rel: !0 }));
      var z = b(m);
      (O = i(z, "Stack Overflow")), z.forEach(n), p.forEach(n), this.h();
    },
    h() {
      r(h, "href", "/"),
        r(u, "href", "/programming"),
        r(_, "href", "https://github.com/Seth-Rothschild"),
        r(_, "target", "_blank"),
        r(_, "rel", "noopener noreferrer"),
        r(c, "href", "https://www.reddit.com/user/seth-rothschild"),
        r(c, "target", "_blank"),
        r(c, "rel", "noopener noreferrer"),
        r(d, "rel", "me"),
        r(d, "href", "https://fosstodon.org/@sethrothschild"),
        r(d, "target", "_blank"),
        r(m, "href", "https://stackoverflow.com/users/9458191/seth-rothschild"),
        r(m, "target", "_blank"),
        r(m, "rel", "noopener noreferrer"),
        r(a, "class", "footer svelte-w3l09u");
    },
    m(t, l) {
      S(t, o, l),
        e(o, h),
        e(h, $),
        e(o, k),
        e(o, u),
        e(u, H),
        S(t, w, l),
        s && s.m(t, l),
        S(t, y, l),
        S(t, a, l),
        e(a, _),
        e(_, G),
        e(a, R),
        e(a, c),
        e(c, q),
        e(a, C),
        e(a, d),
        e(d, M),
        e(a, N),
        e(a, m),
        e(m, O),
        (A = !0);
    },
    p(t, [l]) {
      s &&
        s.p &&
        (!A || l & 1) &&
        U(s, P, t, t[0], A ? X(P, t[0], l, null) : W(t[0]), null);
    },
    i(t) {
      A || (Y(s, t), (A = !0));
    },
    o(t) {
      Z(s, t), (A = !1);
    },
    d(t) {
      t && n(o), t && n(w), s && s.d(t), t && n(y), t && n(a);
    },
  };
}
function tt(E, o, h) {
  let { $$slots: $ = {}, $$scope: k } = o;
  return (
    (E.$$set = (u) => {
      "$$scope" in u && h(0, (k = u.$$scope));
    }),
    [k, $]
  );
}
class rt extends J {
  constructor(o) {
    super(), K(this, o, tt, x, Q, {});
  }
}
export { rt as default };
