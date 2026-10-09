/* 澳門世遺探索 — 共用模組 v5（帳號下拉選單 + 訪客模式） */
(function () {
  var K_USERS = 'mh_users', K_CURRENT = 'mh_current_user', K_THEME = 'mh_theme',
      K_BOOKINGS = 'mh_bookings', K_PAYMENTS = 'mh_payments', K_REVIEWS = 'mh_reviews';

  function get(key, fb) { try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fb; } catch (e) { return fb; } }
  function set(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {} }
  function hash(str) { var h = 0; for (var i = 0; i < str.length; i++) { h = ((h << 5) - h) + str.charCodeAt(i); h |= 0; } return 'h' + Math.abs(h).toString(36); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (m) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]; }); }
  function t(key, vars) {
    return (window.MH_I18N && typeof MH_I18N.t === 'function') ? MH_I18N.t(key, vars) : key;
  }

  var MH = {
    escapeHTML: esc,
    formatMOP: function (n) { return 'MOP ' + Number(n).toLocaleString('zh-MO'); },
    formatDate: function (iso) {
      if (!iso) return '';
      var d = new Date(iso);
      var p = function (n) { return String(n).padStart(2, '0'); };
      return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
    },
    isLoggedIn: function () { return !!this.getCurrentUser(); },

    // ---------- 主題 ----------
    getTheme: function () {
      try {
        var t = localStorage.getItem(K_THEME);
        if (!t) t = localStorage.getItem('mh_dark') === '1' ? 'dark' : 'light';
        return t === 'dark' ? 'dark' : 'light';
      } catch (e) { return 'light'; }
    },
    applyTheme: function () {
      if (this.getTheme() === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    },
    setTheme: function (t) {
      try { localStorage.setItem(K_THEME, t); localStorage.setItem('mh_dark', t === 'dark' ? '1' : '0'); } catch (e) {}
      this.applyTheme();
      window.dispatchEvent(new Event('mh-theme-change'));
    },
    toggleTheme: function () {
      this.setTheme(this.getTheme() === 'dark' ? 'light' : 'dark');
      var stateEl = document.getElementById('darkStateMobile');
      if (stateEl) stateEl.textContent = this.getTheme() === 'dark' ? 'ON' : 'OFF';
    },

    // ---------- 帳號 ----------
    getUsers: function () { return get(K_USERS, []); },
    getCurrentUser: function () { return get(K_CURRENT, null); },
    _setCurrent: function (u) {
      set(K_CURRENT, u);
      window.dispatchEvent(new Event('mh-auth-change'));
      window.dispatchEvent(new Event('mh-bookings-change'));
    },
    register: function (name, email, password) {
      name = (name || '').trim(); email = (email || '').trim().toLowerCase();
      if (!name || !email || !password) return { ok: false, msg: t('errAllFields') };
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, msg: t('errEmailFormat') };
      if (password.length < 6) return { ok: false, msg: t('errPasswordShort') };
      var users = this.getUsers();
      if (users.some(function (u) { return u.email === email; })) return { ok: false, msg: t('errEmailTaken') };
      var user = { id: 'u_' + Date.now().toString(36), name: name, email: email, password: hash(password), createdAt: new Date().toISOString() };
      users.push(user); set(K_USERS, users);
      this._setCurrent({ id: user.id, name: user.name, email: user.email });
      return { ok: true };
    },
    login: function (email, password) {
      email = (email || '').trim().toLowerCase();
      var u = this.getUsers().find(function (x) { return x.email === email && x.password === hash(password); });
      if (!u) return { ok: false, msg: t('errLoginFailed') };
      this._setCurrent({ id: u.id, name: u.name, email: u.email });
      return { ok: true };
    },
    logout: function () { this._setCurrent(null); },

    // ---------- 預約 ----------
    getAllBookings: function () { return get(K_BOOKINGS, []); },
    getBookings: function () {
      var all = this.getAllBookings(), u = this.getCurrentUser();
      if (!u) return [];  // ★ 訪客回傳空陣列
      return all.filter(function (b) { return b.userId === u.id; });
    },
    addBooking: function (b) {
      var all = this.getAllBookings(), u = this.getCurrentUser();
      if (!u) return { ok: false, msg: t('signInToBook') };
      b.userId = u.id; b.userName = u.name; b.userEmail = u.email;
      all.unshift(b); set(K_BOOKINGS, all);
      var pays = get(K_PAYMENTS, []);
      pays.unshift({
        id: 'p_' + Date.now().toString(36),
        orderNo: b.orderNo, userId: b.userId,
        amount: b.total, method: 'Credit Card', status: 'paid',
        paidAt: new Date().toISOString(), description: b.spotTitle
      });
      set(K_PAYMENTS, pays);
      window.dispatchEvent(new Event('mh-bookings-change'));
      return { ok: true };
    },
    cancelBooking: function (orderNo) {
      var all = this.getAllBookings().filter(function (b) { return b.orderNo !== orderNo; });
      set(K_BOOKINGS, all);
      var pays = get(K_PAYMENTS, []).map(function (p) {
        if (p.orderNo === orderNo) { p.status = 'refunded'; p.refundedAt = new Date().toISOString(); }
        return p;
      });
      set(K_PAYMENTS, pays);
      window.dispatchEvent(new Event('mh-bookings-change'));
    },

    getPayments: function () {
      var all = get(K_PAYMENTS, []), u = this.getCurrentUser();
      if (!u) return [];
      return all.filter(function (p) { return p.userId === u.id; });
    },

    getReviews: function (spotId) {
      var all = get(K_REVIEWS, []);
      return spotId ? all.filter(function (r) { return r.spotId === spotId; }) : all;
    },
    addReview: function (spotId, rating, comment) {
      comment = (comment || '').trim();
      if (!rating) return { ok: false, msg: t('errSelectStar') };
      if (!comment) return { ok: false, msg: t('errEmptyComment') };
      var u = this.getCurrentUser();
      var r = {
        id: 'r_' + Date.now().toString(36), spotId: spotId,
        userId: u ? u.id : null, userName: u ? u.name : t('guest'),
        rating: rating, comment: comment, createdAt: new Date().toISOString()
      };
      var all = get(K_REVIEWS, []); all.unshift(r); set(K_REVIEWS, all);
      return { ok: true, review: r };
    }
  };

  MH.applyTheme();

  // ============ MHUI ============
  var MHUI = {
    _injectOnce: function () {
      if (document.getElementById('mhAuthModal')) return;

      var authHTML =
        '<div id="mhAuthModal" class="fixed inset-0 z-[90] hidden">' +
        '  <div class="absolute inset-0 bg-black/50" data-mh-close></div>' +
        '  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-md bg-white dark:bg-[#1A2530] rounded-2xl p-6 shadow-2xl">' +
        '    <div class="flex justify-between items-center mb-4">' +
        '      <h2 class="text-xl font-bold" id="mhAuthTitle">' + t('accountLoginTitle') + '</h2>' +
        '      <button data-mh-close class="w-10 h-10 grid place-items-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">✕</button>' +
        '    </div>' +
        '    <div class="flex gap-2 mb-4 p-1 bg-heritage-bg dark:bg-[#0F1720] rounded-xl text-sm">' +
        '      <button id="mhTabLogin" class="flex-1 py-2 rounded-lg bg-white dark:bg-[#1A2530] font-bold">' + t('accountLoginTab') + '</button>' +
        '      <button id="mhTabRegister" class="flex-1 py-2 rounded-lg">' + t('accountRegisterTab') + '</button>' +
        '    </div>' +
        '    <form id="mhAuthForm" class="space-y-3">' +
        '      <div id="mhNameWrap" class="hidden"><label class="block text-sm mb-1">' + t('accountName') + '</label>' +
        '        <input id="mhName" class="w-full px-3 py-2.5 rounded-xl border border-heritage-border dark:border-gray-600 bg-white dark:bg-[#0F1720] text-base"></div>' +
        '      <div><label class="block text-sm mb-1">' + t('accountEmail') + '</label>' +
        '        <input id="mhEmail" type="email" class="w-full px-3 py-2.5 rounded-xl border border-heritage-border dark:border-gray-600 bg-white dark:bg-[#0F1720] text-base"></div>' +
        '      <div><label class="block text-sm mb-1">' + t('accountPassword') + '</label>' +
        '        <input id="mhPassword" type="password" class="w-full px-3 py-2.5 rounded-xl border border-heritage-border dark:border-gray-600 bg-white dark:bg-[#0F1720] text-base"></div>' +
        '      <p id="mhAuthErr" class="text-sm text-red-600 hidden"></p>' +
        '      <button type="submit" id="mhAuthSubmit" class="w-full py-3 rounded-xl bg-heritage-blue text-white font-bold">' + t('accountSubmitLogin') + '</button>' +
        '    </form>' +
        '    <p class="text-xs text-gray-400 mt-3 text-center">' + t('accountNote') + '</p>' +
        '  </div>' +
        '</div>';

      var accountHTML =
        '<div id="mhAccountModal" class="fixed inset-0 z-[90] hidden">' +
        '  <div class="absolute inset-0 bg-black/50" data-mh-close></div>' +
        '  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#1A2530] rounded-2xl p-6 shadow-2xl">' +
        '    <div class="flex justify-between items-center mb-4">' +
        '      <h2 class="text-xl font-bold" id="mhAccountTitle">' + t('accountTitle') + '</h2>' +
        '      <button data-mh-close class="w-10 h-10 grid place-items-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">✕</button>' +
        '    </div>' +
        '    <div id="mhProfile" class="p-4 rounded-xl bg-heritage-bg dark:bg-[#0F1720] mb-4 text-sm"></div>' +
        '    <div class="flex gap-2 mb-3 text-sm border-b border-heritage-border dark:border-gray-700 overflow-x-auto">' +
        '      <button data-mh-atab="bookings" class="px-3 py-2 font-bold border-b-2 border-heritage-blue text-heritage-blue whitespace-nowrap">' + t('accountTabBookings') + '</button>' +
        '      <button data-mh-atab="payments" class="px-3 py-2 border-b-2 border-transparent whitespace-nowrap">' + t('accountTabPayments') + '</button>' +
        '      <button data-mh-atab="reviews" class="px-3 py-2 border-b-2 border-transparent whitespace-nowrap">' + t('accountTabReviews') + '</button>' +
        '    </div>' +
        '    <div id="mhATab-bookings" class="space-y-3 text-sm"></div>' +
        '    <div id="mhATab-payments" class="space-y-3 text-sm hidden"></div>' +
        '    <div id="mhATab-reviews" class="space-y-3 text-sm hidden"></div>' +
        '    <button id="mhLogout" class="mt-5 w-full py-2.5 rounded-xl border border-red-300 text-red-600 text-sm">' + t('accountLogout') + '</button>' +
        '  </div>' +
        '</div>';

      // ★ 帳戶下拉選單
      var dropdownHTML =
        '<div id="mhAccountDropdown" class="hidden fixed z-[95] w-56 bg-white dark:bg-[#1A2530] border border-heritage-border dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden">' +
        '  <div id="mhDropdownUser" class="px-4 py-3 border-b border-heritage-border dark:border-gray-700 text-sm"></div>' +
        '  <button id="mhDropdownAccount" class="block w-full text-left px-4 py-2.5 text-sm hover:bg-heritage-blue/10">' + t('myAccount') + '</button>' +
        '  <button id="mhDropdownLogout" class="block w-full text-left px-4 py-2.5 text-sm hover:bg-red-50 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400">' + t('logout') + '</button>' +
        '</div>';

      document.body.insertAdjacentHTML('beforeend', authHTML + accountHTML + dropdownHTML);

      document.querySelectorAll('[data-mh-close]').forEach(function (el) {
        el.addEventListener('click', function () { MHUI.closeAll(); });
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { MHUI.closeAll(); MHUI.closeDropdown(); }
      });

      var tabL = document.getElementById('mhTabLogin'), tabR = document.getElementById('mhTabRegister');
      tabL.addEventListener('click', function () { MHUI._switchAuth('login'); });
      tabR.addEventListener('click', function () { MHUI._switchAuth('register'); });

      document.getElementById('mhAuthForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var mode = tabL.classList.contains('font-bold') ? 'login' : 'register';
        var err = document.getElementById('mhAuthErr');
        var name = document.getElementById('mhName').value;
        var email = document.getElementById('mhEmail').value;
        var pwd = document.getElementById('mhPassword').value;
        var res = mode === 'login' ? MH.login(email, pwd) : MH.register(name, email, pwd);
        if (!res.ok) { err.textContent = res.msg; err.classList.remove('hidden'); return; }
        err.classList.add('hidden');
        MHUI.closeAll();
        MHUI.toast(mode === 'login' ? t('toastLoginSuccess') : t('toastRegisterSuccess'));
      });

      document.querySelectorAll('[data-mh-atab]').forEach(function (b) {
        b.addEventListener('click', function () {
          var tab = this.dataset.mhAtab;
          document.querySelectorAll('[data-mh-atab]').forEach(function (x) {
            x.className = 'px-3 py-2 border-b-2 border-transparent whitespace-nowrap';
          });
          this.className = 'px-3 py-2 font-bold border-b-2 border-heritage-blue text-heritage-blue whitespace-nowrap';
          ['bookings', 'payments', 'reviews'].forEach(function (tt) {
            document.getElementById('mhATab-' + tt).classList.toggle('hidden', tt !== tab);
          });
        });
      });

      document.getElementById('mhLogout').addEventListener('click', function () {
        MH.logout(); MHUI.closeAll(); MHUI.toast(t('toastLogout'));
      });

      // 下拉選單項目
      document.getElementById('mhDropdownAccount').addEventListener('click', function () {
        MHUI.closeDropdown();
        MHUI.openAccount();
      });
      document.getElementById('mhDropdownLogout').addEventListener('click', function () {
        MH.logout(); MHUI.closeDropdown(); MHUI.toast(t('toastLogout'));
      });

      window.addEventListener('mh-auth-change', MHUI.refreshAccountBtn);
      window.addEventListener('mh-auth-change', MHUI.closeDropdown);
      window.addEventListener('mh-bookings-change', function () {
        var modal = document.getElementById('mhAccountModal');
        if (modal && !modal.classList.contains('hidden')) MHUI._renderAccount();
      });
    },

    openDropdown: function (anchorEl) {
      this._injectOnce();
      var dd = document.getElementById('mhAccountDropdown');
      var u = MH.getCurrentUser();
      if (!dd || !u) return;
      document.getElementById('mhDropdownUser').innerHTML =
        '<p class="font-bold">' + esc(u.name) + '</p>' +
        '<p class="text-xs text-gray-500 truncate">' + esc(u.email) + '</p>';
      dd.classList.remove('hidden');
      // 定位到按鈕下方
      var rect = anchorEl.getBoundingClientRect();
      var top = rect.bottom + 8;
      var right = window.innerWidth - rect.right;
      dd.style.top = top + 'px';
      dd.style.right = Math.max(8, right) + 'px';
      dd.style.left = 'auto';
    },

    closeDropdown: function () {
      var dd = document.getElementById('mhAccountDropdown');
      if (dd) dd.classList.add('hidden');
    },

    _switchAuth: function (mode) {
      var tabL = document.getElementById('mhTabLogin'), tabR = document.getElementById('mhTabRegister');
      var nameWrap = document.getElementById('mhNameWrap');
      var title = document.getElementById('mhAuthTitle');
      var submit = document.getElementById('mhAuthSubmit');
      if (mode === 'login') {
        tabL.className = 'flex-1 py-2 rounded-lg bg-white dark:bg-[#1A2530] font-bold';
        tabR.className = 'flex-1 py-2 rounded-lg';
        nameWrap.classList.add('hidden');
        title.textContent = t('accountLoginTitle');
        submit.textContent = t('accountSubmitLogin');
      } else {
        tabR.className = 'flex-1 py-2 rounded-lg bg-white dark:bg-[#1A2530] font-bold';
        tabL.className = 'flex-1 py-2 rounded-lg';
        nameWrap.classList.remove('hidden');
        title.textContent = t('accountRegisterTitle');
        submit.textContent = t('accountSubmitRegister');
      }
      document.getElementById('mhAuthErr').classList.add('hidden');
    },

    openAuth: function (mode) { this._injectOnce(); this._switchAuth(mode || 'login'); document.getElementById('mhAuthModal').classList.remove('hidden'); },
    openAccount: function () { this._injectOnce(); this._renderAccount(); document.getElementById('mhAccountModal').classList.remove('hidden'); },
    closeAll: function () {
      ['mhAuthModal', 'mhAccountModal'].forEach(function (id) {
        var el = document.getElementById(id); if (el) el.classList.add('hidden');
      });
    },

    _renderAccount: function () {
      var u = MH.getCurrentUser();
      if (!u) { this.openAuth('login'); return; }
      document.getElementById('mhProfile').innerHTML =
        '<p><strong>' + esc(u.name) + '</strong></p>' +
        '<p class="text-gray-500">' + esc(u.email) + '</p>';

      var bookings = MH.getBookings();
      var bEl = document.getElementById('mhATab-bookings');
      if (!bookings.length) { bEl.innerHTML = '<p class="text-gray-500">' + t('noBookings') + '</p>'; }
      else {
        bEl.innerHTML = bookings.map(function (b) {
          return '<div class="border border-heritage-border dark:border-gray-700 rounded-xl p-3">' +
            '<div class="flex justify-between gap-2 flex-wrap">' +
            '<div><p class="font-bold">' + esc(b.spotTitle) + '</p>' +
            '<p class="text-gray-500">' + b.date + ' ' + b.session + ' · ' + b.people + ' ' + t('peopleUnit') + '</p>' +
            '<p class="font-mono text-xs text-gray-400">' + esc(b.orderNo) + '</p></div>' +
            '<div class="text-right"><p class="text-heritage-terracotta font-bold">' + MH.formatMOP(b.total) + '</p>' +
            '<button data-mh-cancel="' + esc(b.orderNo) + '" class="text-xs text-red-600 hover:underline">' + t('cancelBook') + '</button></div>' +
            '</div></div>';
        }).join('');
      }

      var pays = MH.getPayments();
      var pEl = document.getElementById('mhATab-payments');
      if (!pays.length) { pEl.innerHTML = '<p class="text-gray-500">' + t('accountNoPayments') + '</p>'; }
      else {
        pEl.innerHTML = pays.map(function (p) {
          var badge = p.status === 'refunded'
            ? '<span class="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-700">' + t('statusRefunded') + '</span>'
            : '<span class="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">' + t('statusPaid') + '</span>';
          return '<div class="border border-heritage-border dark:border-gray-700 rounded-xl p-3 flex justify-between gap-2 flex-wrap">' +
            '<div><p class="font-bold">' + esc(p.description) + '</p>' +
            '<p class="text-gray-500 text-xs">' + MH.formatDate(p.paidAt) + ' · ' + esc(p.method) + '</p>' +
            '<p class="font-mono text-xs text-gray-400">' + esc(p.orderNo) + '</p></div>' +
            '<div class="text-right"><p class="text-heritage-terracotta font-bold">' + MH.formatMOP(p.amount) + '</p>' + badge + '</div>' +
            '</div>';
        }).join('');
      }

      var reviews = MH.getReviews().filter(function (r) { return r.userId === u.id; });
      var rEl = document.getElementById('mhATab-reviews');
      if (!reviews.length) { rEl.innerHTML = '<p class="text-gray-500">' + t('accountNoReviews') + '</p>'; }
      else {
        rEl.innerHTML = reviews.map(function (r) {
          return '<div class="border border-heritage-border dark:border-gray-700 rounded-xl p-3">' +
            '<div class="flex justify-between"><strong>⭐ ' + r.rating + '</strong>' +
            '<span class="text-xs text-gray-400">' + MH.formatDate(r.createdAt) + '</span></div>' +
            '<p class="text-gray-600 dark:text-gray-300 mt-1">' + esc(r.comment) + '</p>' +
            '</div>';
        }).join('');
      }
    },

    bindCancel: function () {
      document.addEventListener('click', function (e) {
        var b = e.target.closest('[data-mh-cancel]');
        if (!b) return;
        if (!confirm(t('cancelConfirm'))) return;
        MH.cancelBooking(b.dataset.mhCancel);
        MHUI.toast(t('cancelDone'));
      });
    },

    refreshAccountBtn: function () {
      var u = MH.getCurrentUser();
      var lbl = document.getElementById('accountLabel');
      if (lbl) lbl.textContent = u ? u.name : t('navAccount');
      var lblM = document.getElementById('accountLabelMobile');
      if (lblM) lblM.textContent = u ? '👤 ' + u.name : t('navAccountMobile');
      // 更新 icon（改用 emoji 或頭像圖示）
      var icon = document.querySelector('[data-mh-account] svg');
      // 不強制改 svg，保持原設計
    },

    toast: function (msg, isErr) {
      var el = document.createElement('div');
      el.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] px-4 py-3 rounded-xl shadow-lg text-white text-sm ' + (isErr ? 'bg-red-600' : 'bg-heritage-blue');
      el.textContent = msg;
      document.body.appendChild(el);
      setTimeout(function () { el.remove(); }, 2200);
    }
  };

  window.MH = MH;
  window.MHUI = MHUI;
  MHUI.bindCancel();

  // ============ 統一事件委派 ============
  document.addEventListener('click', function (e) {
    // 深色模式切換
    if (e.target.closest('#darkToggle') || e.target.closest('#darkToggleMobile')) {
      MH.toggleTheme();
      return;
    }
    // 帳戶按鈕
    var acc = e.target.closest('[data-mh-account]');
    if (acc) {
      if (MH.getCurrentUser()) {
        MHUI._injectOnce();
        MHUI.openDropdown(acc);
      } else {
        MHUI.openAuth('login');
      }
      e.stopPropagation();
      return;
    }
    // 點擊別處關閉 dropdown
    var dd = document.getElementById('mhAccountDropdown');
    if (dd && !dd.classList.contains('hidden') && !dd.contains(e.target)) {
      MHUI.closeDropdown();
    }
  });

  // 語言變更
  window.addEventListener('mh-lang-change', function () {
    try {
      MHUI.refreshAccountBtn();
      var dd = document.getElementById('mhAccountDropdown');
      if (dd) {
        var btnAcc = document.getElementById('mhDropdownAccount');
        if (btnAcc) btnAcc.textContent = t('myAccount');
        var btnLog = document.getElementById('mhDropdownLogout');
        if (btnLog) btnLog.textContent = t('logout');
      }
      var modal = document.getElementById('mhAccountModal');
      if (modal && !modal.classList.contains('hidden')) {
        var accTitle = document.getElementById('mhAccountTitle');
        if (accTitle) accTitle.textContent = t('accountTitle');
        var btnBookings = document.querySelector('[data-mh-atab="bookings"]');
        if (btnBookings) btnBookings.textContent = t('accountTabBookings');
        var btnPayments = document.querySelector('[data-mh-atab="payments"]');
        if (btnPayments) btnPayments.textContent = t('accountTabPayments');
        var btnReviews = document.querySelector('[data-mh-atab="reviews"]');
        if (btnReviews) btnReviews.textContent = t('accountTabReviews');
        var btnLogout = document.getElementById('mhLogout');
        if (btnLogout) btnLogout.textContent = t('accountLogout');
        MHUI._renderAccount();
      }
    } catch (err) {
      console.error('[app.js] mh-lang-change:', err);
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { MHUI.refreshAccountBtn(); });
  } else {
    MHUI.refreshAccountBtn();
  }
})();