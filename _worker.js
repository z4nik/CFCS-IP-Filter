/**
 * 地区名称映射 (全球主要 Cloudflare 节点所在国家/地区)
 */
const REGION_MAP = {
    // Азиатско-Тихоокеанский регион (Asia Pacific)
    'JP': 'Япония', 'KR': 'ЮЖНАЯ КОРЕЯ', 'SG': 'Сингапур', 'HK': 'Гонконг', 'TW': 'Тайвань',
    'MY': 'Малайзия', 'TH': 'Таиланд', 'VN': 'Вьетнам', 'PH': 'Филиппины', 'ID': 'Индонезия',
    'IN': 'Индия', 'AU': 'Австралия', 'NZ': 'новая Зеландия', 'KH': 'Камбоджа', 'MO': 'Макао',
    'BD': 'Бангладеш', 'PK': 'Пакистан', 'NP': 'Непал', 'MN': 'Монголия', 'LK': 'Шри-Ланка',
    'LA': 'Лаос', 'BN': 'Бруней', 'MM': 'Мьянма', 'BT': 'Бутан', 'MV': 'Мальдивы',
    'AF': 'Афганистан', 'TJ': 'Таджикистан', 'TM': 'Туркменистан', 'TL': 'Восточный Тимор', 'FJ': 'Фиджи', 
    'PG': 'Папуа новая Гвинея', 'SB': 'Соломоновы острова', 'VU': 'Вануату', 'WS': 'Самоа', 'TO': 'Тонганский', 
    'TV': 'Тувалу', 'KI': 'Kiribati', 'MH': 'Маршалловы острова', 'FM': 'Микронезия', 'PW': 'Palau', 
    'NR': 'Науру', 'CK': 'Острова Кука', 'NU': 'Ниуэ', 'NC': 'Новая Каледония', 'PF': 'Французская Полинезия', 
    'MP': 'Северные Марианские острова', 'AS': 'Американское Самоа', 'IO': 'Британская территория в Индийском океане', 'CC': 'Кокосовые острова', 
    'CX': 'Остров Рождества', 'NF': 'Остров Норфолк', 'TK': 'Токелау', 'WF': 'Уоллис и Футуна', 'PN': 'Острова Питкэрн', 
    'UM': 'Небольшие острова за пределами материковой части США',

    // Северная Америка (North America)
    'US': 'США', 'CA': 'Канада', 'MX': 'Мексика', 'PR': 'Пуэрто-Рико', 'GU': 'ГУАМ',
    'PM': 'Сен - Пьер и Микелон', 'BM': 'Бермуды', 'GL': 'Гренландия',

    // Европа (Europe)
    'GB': 'Англия', 'UK': 'Великобритания', 'DE': 'Германия', 'FR': 'Франция', 'NL': 'Голландия', 'IT': 'Италия',
    'ES': 'Испания', 'PT': 'Португалия', 'RU': 'Россия', 'UA': 'Украина', 'PL': 'Польша',
    'SE': 'Швеция', 'FI': 'Финляндия', 'NO': 'Норвегия', 'DK': 'Дания', 'IS': 'Исландия',
    'IE': 'Ирландия', 'BE': 'Бельгия', 'LU': 'Люксембург', 'CH': 'Швейцария', 'AT': 'Австрия',
    'CZ': "Чешская Республика", "HU": "Венгрия", "RO": "Румыния", "BG": "Болгария", "GR": "Греция",
    'TR': "Турция","HR": "Хорватия","RS":"Сербия", "SI":"Словения","SK":"Словакия",
    'EE': "Эстония", "LV":"Латвия", "LT":"Литва", "MD":"Молдова", "AL":"Албания",
    'BA': 'Босния и Герцеговина', 'ME': 'Черногория', 'MK': 'Северная Македония', 'CY': 'Кипр', 'MT': 'Мальта',
    'BY': 'Belarus','GE':'Georgia','AM':'Armenia','AZ':'Azerbaijan','LI':'Liechtenstein',
    'AD': "Андорра", "MC": "Монако", "SM": "Сан-Малино", "VA": "Ватикан", "FO": "Фарерские острова", 
    'GI': "Гибралтар", "IM": "Остров Мэн", "JE": "Джерси", "GG": "Гернси", "AX": "Аландские острова", 
    'SJ': 'Шпицберген и Ян - Майен',

    // Южная Америка (South America)
    'BR': 'Бразилия', 'AR': 'Аргентина', 'CL': 'Чили', 'CO': 'Колумбия', 'PE': 'Перу',
    'EC': "Эквадор", "UY": "Уругвай", "PY": "Парагвай", "VE": "Венесуэла", "BO": "Боливия",
    'GY': 'Гайана', 'SR': 'Суринам', 'FK': 'Фолклендские острова', 'GF': 'французская Гвиана', 'GS': 'Южная Георгия и Южные Сандвичевы острова',

    // Центральная Америка и Карибский бассейн (Central America & Caribbean)
    'PA': 'Панама', 'CR': 'Коста-Рика', 'GT': 'Гватемала', 'HN': 'Гондурас', 'SV': 'Сальвадор',
    'NI': 'Никарагуа', 'JM': 'Ямайка', 'DO': 'Доминикано', 'BS': 'Багамы', 'TT': 'Тринидад и Тобаго',
    'BB': 'Барбадос', 'CW': 'Кюрасао', 'BZ': 'Белиз', 'DM': 'Доминик', 'GD': 'Гренада', 
    'KN': "Сент-Китс и Невис", "LC": "Сент-Люсия", "VC": "Сент-Винсент и Гренадины", "HT": "Гаити", 
    'CU': "Куба", "AW": "Аруба", "BQ": "Голландский Карибский бассейн", "SX": "Голландский Синт-Мартен", "MF": "Французский Синт-Мартен", 
    'BL': "Сен-Бартелеми", "AI": "Ангилья", "KY": "Каймановы острова", "TC": "Теркс и Кайкос", 
    'VG': "Британские Виргинские острова", "VI": "Виргинские острова США", "MS": "Монтсеррат", "AG": "Антигуа и Барбуда",

    // Ближний Восток и Африка (Middle East & Africa)
    'ZA': "Южная АФРИКА", "EG": "Египет", "MA": "Марокко", "DZ": "Алжир", "TN": "Тунис",
    'NG': 'Нигерия', 'KE': 'Кения', 'GH': 'Гана', 'TZ': 'Танзания', 'UG': 'Уганда',
    'MU': 'Маврикий', 'RE': 'Остров Реюньон', 'AO': 'Ангола', 'MZ': 'Мозамбик', 'SN': 'Сенегал',
    'AE': 'ОАЭ', 'SA': 'СА', 'IL': 'Израиль', 'QA': 'Катар', 'BH': 'Бахрейн',
    'KW': 'Кувейт', 'OM': 'Оман', 'JO': 'Иордания', 'LB': 'Ливан', 'IQ': 'Ирак',
    'KZ': "Казахстан", "UZ": "Узбекистан", "KG": "Кыргызстан", "SY": "Сирия", 
    'YE': "Йемен", "IR": "Иран", "PS": "Палестина", "MR":"Мавритания", "ML": "Мали","NE":"Нигер", 
    'TD': "Чад", "SD": "Судан", "SS": "Южный Судан", "ER": "Эритрея","DJ":"Джибути", "SO":"Сомали", 
    'ET': "Эфиопия", "CV": "Кабо-Верде", "GW": "Гвинея-Бисау", "GM": "Гамбия", "GN": "Гвинея", 
    'SL': 'Сьерра-Леоне', 'LR': 'Либерия', 'CI': 'Кот-д-Ивуар', 'BF': 'Буркина - Фасо', 'TG': 'Того', 
    'BJ': "Бенин", "CM": "Камерун", "CF": "Центральная Африка", "GQ": "Экваториальная Гвинея", "GA": "Габон", 
    'CG': "Республика Конго", "CD": "Демократическая Республика Конго", "ST": "Сан-Томе и Принсипи", "RW": "Руанда", 
    'BI': "Бурунди", "ZM": "Замбия", "MW": "Малави", "ZW": "Зимбабве", "BW": "Ботсвана", 
    'NA': "Намибия", "LS": "Лесото", "SZ": "Свазиленд", "MG": "Мадагаскар", "KM": "Коморские острова", 
    'SC': 'Сейшельские острова', 'YT': 'Майорт', 'SH': 'Остров Святой Елены', 'EH': 'Западная Сахара',

    // Антарктида и другие отдаленные острова (Antarctica & Other Islands)
    'AQ': 'Антарктида', 'TF': 'Южная Территория Франции', 'BV': 'Остров Буве', 'HM': 'Остров Херд и острова Макдональд'
};

/**
 * Вспомогательная функция：Получить флаг Emoji
 */
function getFlagEmoji(code) {
    if (code === 'TW') return '🇹🇼';
    if (code === 'UK') return '🇬🇧';
    if (!code || code.length !== 2) return '🇺🇳'; 
    const codePoints = code.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

/**
 * Вспомогательная функция：Число с надстрочным знаком
 */
function toSuperScript(num) {
    const supers = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
    return num.toString().split('').map(c => supers[c] || c).join('');
}

export default {
    async fetch(request, env) {
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                    'Access-Control-Allow-Headers': '*'
                }
            });
        }
        const url = new URL(request.url);

        // Получаем параметр limit
        const limit = parseInt(url.searchParams.get('limit')) || 0;

        // Маршрутизация пути
        const rawPath = decodeURIComponent(url.pathname);
        const pathMatches = rawPath.replace(/\/+$/, '')
            .match(/^\/(CFnew|edgetunnel)\/(.+)$/);
            
        if (pathMatches) {
            const type = pathMatches[1];
            const regions = pathMatches[2];
            const format = type === 'CFnew' ? 'cf_line_short' : 'line';
            return handleRawRequest(regions, format, limit, request.url);
        }

        if (url.searchParams.has('api')) return handleApiRequest(url);
        if (url.searchParams.has('get_regions')) return handleGetRegions();
        
        return new Response(getHtml(), { headers: { 'content-type': 'text/html; charset=UTF-8' } });
    }
};

async function handleGetRegions() {
    try {
        const res = await fetch("https://zip.cm.edu.kg/all.txt");
        const text = await res.text();
        const matches = text.match(/#[A-Z]+/g) || [];
        const counts = {};
        matches.forEach(tag => {
            const region = tag.replace('#', '');
            counts[region] = (counts[region] || 0) + 1;
        });
        const regions = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
        return new Response(JSON.stringify(regions), { headers: { 'content-type': 'application/json' } });
    } catch (e) {
        return new Response('[]', { headers: { 'content-type': 'application/json' } });
    }
}

async function handleApiRequest(url) {
    const regions = url.searchParams.get('region')?.split(',') || [];
    const format = url.searchParams.get('format') || 'line';
    return handleRawRequest(regions.join(','), format, 0, url.toString());
}

async function handleRawRequest(regionStr, format, limit = 0, requestUrl = null) {
    const decoded = decodeURIComponent(regionStr);
    
    const targetRegions = decoded.split(/[,-]/)
                                 .map(r => r.trim().toUpperCase())
                                 .filter(r => r);
    
    let needBase64 = false;
    if (requestUrl) {
        const urlObj = new URL(requestUrl);
        needBase64 = urlObj.searchParams.has('base64') && urlObj.searchParams.get('base64') !== '0';
    }

    try {
        const response = await fetch("https://zip.cm.edu.kg/all.txt");
        let text = await response.text();
        text = text.replace(/^\uFEFF/, '');
        const lines = text.split('\n');

        const regionPools = {};
        
        targetRegions.forEach(r => regionPools[r] = []);

        for (const line of lines) {
            if (!line.includes('#')) continue;
            const parts = line.split('#');
            const code = parts[1] ? parts[1].trim().toUpperCase() : '';
            const ipPort = parts[0].trim();
            
            if (regionPools[code]) {
                regionPools[code].push({ line, code, ipPort });
            }
        }

        let selectedItems = [];

        for (const region of targetRegions) {
            const pool = regionPools[region];
            
            if (!pool || pool.length === 0) continue;
            if (limit > 0 && pool.length > limit) {
                const shuffled = [...pool].sort(() => 0.5 - Math.random());
                selectedItems.push(...shuffled.slice(0, limit));
            } else {
                selectedItems.push(...pool);
            }
        }

        const processed = [];
        const isCFStyle = format.startsWith('cf') || format === 'comma';
        const isShortName = format.includes('short');
        const isLineSeparated = format.includes('line');
        const regionCounters = {}; 

        for (const item of selectedItems) {
            const { line, code, ipPort } = item;
            
            const flag = getFlagEmoji(code);
            const name = REGION_MAP[code] || code;

            if (isCFStyle) {
                regionCounters[code] = (regionCounters[code] || 0) + 1;
                const countStr = toSuperScript(regionCounters[code]);
                const port = ipPort.split(':')[1] || ''; 
                
                let nodeName = `${flag} ${name}${countStr}`;
                if (!isShortName) nodeName += `-${port}`;
                
                processed.push(`${ipPort}#${nodeName}`);
            } else {
                processed.push(`${ipPort}#${flag} ${name} ${ipPort}`);
            }
        }

        const separator = (format.includes('comma') && !isLineSeparated) ? ',' : '\n';
        let resultStr = processed.join(separator);

        if (needBase64) {
            resultStr = btoa(unescape(encodeURIComponent(resultStr)));
        }

        return new Response(resultStr, { 
            headers: { 
                'content-type': 'text/plain; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
            } 
        });

    } catch (e) {
        return new Response("Error fetching data: " + e.message, { status: 500 });
    }
}

function getHtml() {
    return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloudflare Country-Specific IP Filter</title>
    <link rel="icon" href="https://www.cloudflare.com/favicon.ico" type="image/x-icon">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = { darkMode: 'class' }
    </script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Fira+Code&display=swap');
        body { font-family: 'Inter', sans-serif; transition: background 0.3s, color 0.3s; }
        .dark { background-color: #020617; color: #f8fafc; }
        .light { background-color: #f8fafc; color: #0f172a; }
        .glass { border: 1px solid rgba(150,150,150,0.1); }
        .region-card { transition: all 0.2s; border: 2px solid transparent; }
        .region-card.active { border-color: #2563eb !important; background-color: rgba(37,99,235,0.1) !important; transform: scale(1.05); font-weight: 700; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15); }
        .fira { font-family: 'Fira Code', monospace; }
        .dropdown-menu { transform-origin: top right; transition: all 0.2s ease-out; transform: scale(0.95); opacity: 0; pointer-events: none; }
        .dropdown-menu.open { transform: scale(1); opacity: 1; pointer-events: auto; }
        
        /* 弹窗菜单动画与定位修正 */
        .link-menu { 
            transform-origin: top center;
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); 
            transform: translate(-50%, -10px) scale(0.95);
            opacity: 0; 
            pointer-events: none; 
        }
        .group:hover .link-menu, 
        .link-menu.open {
            transform: translate(-50%, 0) scale(1);
            opacity: 1;
            pointer-events: auto;
        }

        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { margin: 4px 0; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
        
        .btn-matrix { background-color: #000; color: #0f0; border: 1px solid #0f0; font-family: 'Courier New', monospace; border-radius: 0.75rem; box-shadow: 0 0 5px rgba(0, 255, 0, 0.5); text-shadow: 0 0 5px rgba(0, 255, 0, 0.8); transition: all 0.2s ease; letter-spacing: 2px; position: relative; overflow: hidden; }
        .btn-matrix:hover { background-color: #001a00; box-shadow: 0 0 20px rgba(0, 255, 0, 0.8), inset 0 0 10px rgba(0, 255, 0, 0.4); transform: translateY(-2px); }
        .btn-matrix:active { transform: scale(0.98); }
        
        .btn-racing { background: linear-gradient(135deg, #ff8c00, #ff4500); color: white; border: none; border-radius: 0.75rem; font-style: italic; font-weight: 800; text-transform: none; box-shadow: 5px 5px 0px rgba(0,0,0,0.2); transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .btn-racing:hover { transform: scale(1.02) translate(-2px, -2px); box-shadow: 8px 8px 0px rgba(0,0,0,0.2); filter: brightness(1.1); }
        .btn-racing:active { transform: scale(0.98); box-shadow: 2px 2px 0px rgba(0,0,0,0.2); }
        .btn-racing span { display: inline-block; transform: skew(15deg); }
        input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }

        /* 🔥 Toast 通知样式 */
        #toast-container {
            position: fixed;
            top: 24px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 12px;
            pointer-events: none;
        }
        .toast {
            pointer-events: auto;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 24px;
            border-radius: 16px;
            font-weight: 600;
            font-size: 14px;
            box-shadow: 0 15px 30px -5px rgba(0,0,0,0.2);
            backdrop-filter: blur(12px);
            animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            max-width: 90vw;
            white-space: pre-line;
            text-align: left;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .toast-success { background-color: rgba(22, 163, 74, 0.9); color: white; } /* Green */
        .toast-error { background-color: rgba(220, 38, 38, 0.9); color: white; } /* Red */
        
        @keyframes slideIn {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(-20px); opacity: 0; }
        }
    </style>
</head>
<body class="light min-h-screen pb-10" onclick="closeAllDropdowns(event)">
    <div id="toast-container"></div>

    <nav class="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex justify-between items-center mb-6">
        <div class="flex items-center gap-3 font-bold text-xl">
        <div id="cfLogo" class="flex items-center justify-center w-9 h-9">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 117" class="w-9 h-9">
    <path fill="#fbad41" d="M205.52 50.813c-.858 0-1.705.03-2.551.058q-.207.012-.398.094a1.42 1.42 0 0 0-.92.994l-3.628 12.672c-1.565 5.449-.983 10.48 1.646 14.174c2.41 3.416 6.42 5.421 11.289 5.655l19.679 1.194c.585.03 1.092.312 1.4.776a1.92 1.92 0 0 1 .2 1.692a2.5 2.5 0 0 1-2.134 1.662l-20.448 1.193c-11.11.515-23.062 9.58-27.255 20.633l-1.474 3.9a1.092 1.092 0 0 0 .967 1.49h70.425a1.87 1.87 0 0 0 1.81-1.365A51.2 51.2 0 0 0 256 101.828c0-28.16-22.582-50.984-50.449-50.984"/>
    <path fill="#f6821f" d="m174.782 115.362l1.303-4.583c1.568-5.449.987-10.48-1.639-14.173c-2.418-3.417-6.424-5.422-11.296-5.656l-92.312-1.193a1.82 1.82 0 0 1-1.459-.776a1.92 1.92 0 0 1-.203-1.693a2.5 2.5 0 0 1 2.154-1.662l93.173-1.193c11.063-.511 23.015-9.58 27.208-20.633l5.313-14.04c.214-.596.27-1.238.156-1.86C191.126 20.51 166.91 0 137.96 0C111.269 0 88.626 17.403 80.5 41.596a27 27 0 0 0-19.156-5.359C48.549 37.524 38.25 47.946 36.979 60.88a27.9 27.9 0 0 0 .702 9.642C16.773 71.145 0 88.454 0 109.726c0 1.923.137 3.818.413 5.667c.115.897.879 1.57 1.783 1.568h170.48a2.22 2.22 0 0 0 2.106-1.63"/>
  </svg>
</div>
  <span class="text-slate-700 dark:text-slate-200 tracking-tight">Cloudflare Country-Specific IP Filter</span>
</div>

<div class="flex items-center gap-3">
<div class="relative">
<button id="githubBtn" 
onclick="window.open('https://github.com/alienwaregf/Cloudflare-Country-Specific-IP-Filter', '_blank')"
class="group h-12 flex items-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-lg ring-1 ring-black/5 dark:ring-white/10 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all px-3.5 hover:px-5 hover:gap-3 ease-out duration-500 hover:duration-1000">
<i data-lucide="github" class="w-5 h-5 -rotate-0 group-hover:-rotate-12 transition-transform duration-500 flex-shrink-0"></i>
<span class="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all ease-out whitespace-nowrap font-bold overflow-hidden duration-500 hover:duration-1000">GitHub项目地址</span>
</button>
</div>

            <div class="relative">
                <button onclick="toggleDropdown(event)" class="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                    <i data-lucide="sun" class="w-6 h-6"></i>
                </button>
                <div id="themeDropdown" class="dropdown-menu absolute right-0 top-14 w-28 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-1.5 flex flex-col gap-1 z-50 text-slate-700 dark:text-slate-200 ring-1 ring-black/5 dark:ring-white/10">
                    <button onclick="setThemeMode('system')" class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm font-bold theme-opt text-left" data-mode="system"><span class="text-lg">🖥️</span> <span>系统</span></button>
                    <button onclick="setThemeMode('light')" class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm font-bold theme-opt text-left" data-mode="light"><span class="text-lg">🌞</span> <span>浅色</span></button>
                    <button onclick="setThemeMode('dark')" class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm font-bold theme-opt text-left" data-mode="dark"><span class="text-lg">🌙</span> <span>深色</span></button>
                </div>
            </div>

        </div>
    </nav>
    <main class="max-w-5xl mx-auto px-4 md:px-6 flex flex-col gap-6">
        <div class="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] glass shadow-xl">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
                <div><h2 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">全球节点</h2><p class="text-sm opacity-60">点击下方卡片选择要提取的地区 (按 IP 数量排序)</p></div>
                <div class="flex gap-3 w-full md:w-auto">
                <button onclick="randomSelect()" class="w-full md:w-auto px-6 py-2 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-xs font-bold text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition flex items-center justify-center gap-2">
                    <i data-lucide="dices" class="w-4 h-4"></i> 随机摇号
                </button>
                <button onclick="selectAll()" class="w-full md:w-auto px-6 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-blue-600 hover:opacity-70 transition">全选/取消</button>
            </div>            </div>
            <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 p-2" id="regionGrid"><div class="col-span-full py-10 text-center animate-pulse text-slate-400">正在同步全球数据源...</div></div>
            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <button onclick="autoRun('cf_comma_short')" class="btn-matrix h-16 text-lg font-bold flex items-center justify-center gap-3 cursor-pointer"><i data-lucide="terminal-square" class="w-6 h-6"></i><span>CFnew</span></button>
              <button onclick="autoRun('cf_line_short')" class="btn-racing h-16 text-xl flex items-center justify-center gap-3 cursor-pointer"><i data-lucide="zap" class="w-6 h-6"></i><span>edgetunnel</span></button>
            </div>
            <div id="loadingState" class="hidden text-center py-4 text-slate-500 animate-pulse text-sm mt-2"><i data-lucide="loader-2" class="animate-spin inline mr-2"></i> 正在从全球边缘节点提取数据...</div>
        </div>
        
        <div class="bg-white dark:bg-slate-900 rounded-[2rem] glass shadow-xl border border-slate-200 dark:border-slate-800">
        <div class="rounded-t-[2rem] px-6 py-4 border-b border-slate-50 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center bg-slate-50/50 dark:bg-slate-800/50 gap-4 relative">
        <div class="flex items-center gap-3 self-start sm:self-center"><i data-lucide="terminal" size="16" class="text-blue-500"></i><span id="stats" class="text-xs font-bold opacity-40 uppercase tracking-tighter italic font-mono">WAITING FOR INPUT...</span></div>
        
        <img src="https://github.com/666OS/ClashMac/raw/refs/heads/main/assets/cat.svg" class="hidden sm:block absolute left-1/2 -translate-x-1/2 -bottom-3 h-[110px] w-auto opacity-90 hover:scale-110 transition-transform duration-300 pointer-events-none">
        
        <div class="flex items-center gap-2 w-full sm:w-auto z-10">
                    <div class="flex items-center bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 shadow-sm mr-1 h-[34px]" title="单地区节点数量上限 (0为不限制)">
                        <i data-lucide="filter" class="w-3.5 h-3.5 text-slate-400 mr-2"></i><span class="text-[10px] font-bold text-slate-400 mr-2 whitespace-nowrap">MAX</span>
                        <input id="limitInput" type="number" min="0" value="10" class="w-10 bg-transparent text-xs font-bold text-center outline-none text-slate-700 dark:text-slate-200 font-mono focus:text-blue-500 transition-colors" placeholder="0">
                    </div>
                    <button onclick="copy()" class="flex-1 sm:flex-none bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-600 transition flex items-center justify-center gap-2 shadow-sm"><i data-lucide="copy" size="14"></i> 复制全部</button>
                    
                    <div class="relative group z-20 flex-1 sm:flex-none">
                        <button id="linkBtn" onclick="toggleLinkMenu(event)" class="w-full sm:w-auto bg-slate-900 dark:bg-blue-600 text-white px-5 py-2 rounded-lg font-bold text-xs hover:opacity-80 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"><i data-lucide="link" size="14"></i> API 地址</button>
                        
                        <div id="linkMenu" class="link-menu absolute top-full left-1/2 w-48 pt-4 z-50">
                            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl shadow-2xl p-2 flex flex-col gap-2 ring-1 ring-black/5">
                                <div class="text-[10px] text-center text-slate-400 font-bold uppercase tracking-wider py-1">请选择使用 API 的项目</div>
                                <button onclick="generateLink('CFnew')" class="btn-matrix h-10 text-xs flex items-center justify-center gap-2 w-full">
                                    <span>CFnew</span>
                                </button>
                                <button onclick="generateLink('edgetunnel')" class="btn-racing h-10 text-xs flex items-center justify-center gap-2 w-full">
                                    <span>edgetunnel</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <textarea id="out" readonly class="w-full h-48 md:h-64 p-6 bg-transparent fira text-[13px] leading-relaxed outline-none resize-y text-slate-700 dark:text-slate-300 custom-scrollbar" placeholder="点击上方按钮提取，结果将显示在这里..."></textarea>
        </div>
    </main>
    <footer class="mt-12 py-8 border-t border-slate-200 dark:border-slate-800">
        <div class="max-w-5xl mx-auto px-6 text-center">
            <div class="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[13px] text-slate-500 dark:text-slate-400">
                <span class="font-bold opacity-80">特别鸣谢：</span>
                <a href="https://github.com/cmliu/edgetunnel" target="_blank" class="hover:text-blue-500 transition-colors flex items-center gap-1"><i data-lucide="github" class="w-3.5 h-3.5"></i> CM大佬</a>
                <a href="https://github.com/byJoey/cfnew" target="_blank" class="hover:text-blue-500 transition-colors flex items-center gap-1"><i data-lucide="github" class="w-3.5 h-3.5"></i> Joey大佬</a>
            </div>
            <p class="mt-4 text-[11px] opacity-30 font-mono uppercase tracking-tighter">Powered by Cloudflare Workers & Lucide Icons</p>
        </div>
    </footer>
    <script>
        // 🔥 显示 Toast 通知函数
        function showToast(message, type = 'success') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            // 图标
            const icon = type === 'success' ? '<i data-lucide="check-circle-2" class="w-5 h-5"></i>' : '<i data-lucide="alert-circle" class="w-5 h-5"></i>';
            
            toast.className = \`toast \${type === 'success' ? 'toast-success' : 'toast-error'}\`;
            toast.innerHTML = \`\${icon}<span>\${message}</span>\`;
            
            container.appendChild(toast);
            lucide.createIcons();

            // 3秒后移除
            setTimeout(() => {
                toast.style.animation = 'fadeOut 0.3s forwards';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }
        const slotAudio = new Audio("https://github.com/alienwaregf/CF-Custom-IPs-By-Country/raw/refs/heads/main/Audio/%E8%80%81%E8%99%8E%E6%9C%BA2%E7%A7%92.mp3");
        slotAudio.preload = 'auto';
        slotAudio.volume = 1;

        function getFlag(code) {
            if(code === 'TW') return '🇹🇼';
            if(code === 'UK') return '🇬🇧';
            const codePoints = code.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
            return String.fromCodePoint(...codePoints);
        }
        const regionMap = ${JSON.stringify(REGION_MAP)};
        let selected = []; let fmt = 'line'; let allRegions = [];
        async function init() {
            try {
                const res = await fetch('?get_regions=1');
                allRegions = await res.json();
                allRegions = allRegions.filter(r => r !== 'CN');
                const grid = document.getElementById('regionGrid');
                grid.innerHTML = allRegions.map(r => \`
                    <button onclick="toggle('\${r}')" id="r-\${r}" class="region-card p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center gap-1 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 cursor-pointer">
                        <span class="text-xl">\${getFlag(r)}</span><span class="text-[10px] font-bold opacity-70">\${regionMap[r] || r}</span>
                    </button>\`).join('');
                lucide.createIcons();
            } catch(e) { console.error(e); }
        }
        function toggle(r) {
            const el = document.getElementById('r-' + r);
            if(!el) return;
            if(selected.includes(r)) { selected = selected.filter(i => i !== r); el.classList.remove('active'); } 
            else { selected.push(r); el.classList.add('active'); }
        }
        function selectAll() {
            if(selected.length === allRegions.length) { selected = []; document.querySelectorAll('.region-card').forEach(el => el.classList.remove('active')); } 
            else { selected = [...allRegions]; document.querySelectorAll('.region-card').forEach(el => el.classList.add('active')); }
        }
        async function autoRun(format) {
            fmt = format;
            const btns = document.querySelectorAll('.btn-matrix, .btn-racing');
            btns.forEach(b => b.style.opacity = '0.5'); btns.forEach(b => b.style.pointerEvents = 'none');
            document.getElementById('loadingState').classList.remove('hidden');
            await fetchIps();
            btns.forEach(b => b.style.opacity = '1'); btns.forEach(b => b.style.pointerEvents = 'auto');
            document.getElementById('loadingState').classList.add('hidden');
        }
        async function fetchIps() {
            if(selected.length === 0) { showToast('请至少选择一个地区！', 'error'); return; }
            try {
                const res = await fetch(\`?api=1&region=\${selected.join(',')}&format=\${fmt}\`);
                const data = await res.text();
                document.getElementById('out').value = data;
                const isComma = fmt.includes('comma') || fmt === 'comma';
                const count = data ? (isComma ? data.split(',').length : data.trim().split('\\n').length) : 0;
                document.getElementById('stats').innerText = \`SUCCESS: \${count} NODES FOUND\`;
                document.getElementById('out').scrollIntoView({ behavior: 'smooth', block: 'center' });
                showToast(\`成功获取 \${count} 个节点 IP\`, 'success');
            } catch(e) { showToast('获取数据失败，请重试', 'error'); console.error(e); }
        }
        function copy() {
            const out = document.getElementById('out');
            if(!out.value) { showToast('没有内容可复制', 'error'); return; }
            navigator.clipboard.writeText(out.value);
            showToast('内容已复制到剪贴板', 'success');
        }
        // 🎰 随机摇号功能
        async function randomSelect() {
            selected = [];
            document.querySelectorAll('.region-card').forEach(el => el.classList.remove('active'));
            
            try {
                slotAudio.currentTime = 0;
                slotAudio.play().catch(() => {});
            } catch(e) { console.error(e); }

            const minSelect = 1;
            const maxSelect = Math.min(30, allRegions.length);
            const finalCount = Math.floor(Math.random() * (maxSelect - minSelect + 1)) + minSelect;
            
            const duration = 2000; 
            const intervalTime = 100; 
            const startTime = Date.now();
            
            const btn = document.querySelector('button[onclick="randomSelect()"]');
            const originalHtml = btn.innerHTML;
            
            btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> 摇号中...';
            btn.disabled = true;

            const interval = setInterval(() => {
                document.querySelectorAll('.region-card.active').forEach(el => el.classList.remove('active'));
                
                const tempIndices = new Set();
                while(tempIndices.size < finalCount) {
                    tempIndices.add(Math.floor(Math.random() * allRegions.length));
                }
                
                tempIndices.forEach(idx => {
                    const r = allRegions[idx];
                    const el = document.getElementById('r-' + r);
                    if(el) el.classList.add('active');
                });

                if (Date.now() - startTime > duration) {
                    clearInterval(interval);
                    finalizeSelection(finalCount);
                    btn.innerHTML = originalHtml;
                    btn.disabled = false;
                    lucide.createIcons();
                }
            }, intervalTime);
        }

        function finalizeSelection(count) {
            document.querySelectorAll('.region-card.active').forEach(el => el.classList.remove('active'));
            selected = [];
            const finalIndices = new Set();
            while(finalIndices.size < count) {
                finalIndices.add(Math.floor(Math.random() * allRegions.length));
            }
            finalIndices.forEach(idx => {
                const r = allRegions[idx];
                toggle(r);
            });
            
            showToast('🎰 欧皇附体！随机选中了 ' + count + ' 个地区', 'success');
        }
        // 移动端点击切换菜单
        function toggleLinkMenu(e) {
            e.stopPropagation();
            document.getElementById('linkMenu').classList.toggle('open');
        }

        // 生成特定格式的链接并复制
        function generateLink(type) {
            if(selected.length === 0) { showToast('请先选择地区！', 'error'); return; }
            const limitVal = document.getElementById('limitInput').value;
            const limit = parseInt(limitVal) || 0;
            
            // 构建链接 (使用 - 分隔)
            let url = \`\${window.location.origin}/\${type}/\${selected.join('-')}\`;
            
            if (limit > 0) { url += \`?limit=\${limit}\`; }
            
            navigator.clipboard.writeText(url);
            
            let msg = \`【\${type}】订阅地址已复制到剪贴板\`;
            if(limit > 0) msg += \`\\n(已限制单地区最大 \${limit} 个节点)\`;
            
            showToast(msg, 'success');
            
            // 关闭菜单
            document.getElementById('linkMenu').classList.remove('open');
        }

        let currentThemeMode = localStorage.getItem('themeMode') || 'system';
        function applyTheme() {
            let isDark = false;
            if (currentThemeMode === 'system') { isDark = window.matchMedia('(prefers-color-scheme: dark)').matches; } 
            else { isDark = currentThemeMode === 'dark'; }
            document.documentElement.classList.toggle('dark', isDark); document.body.classList.toggle('dark', isDark); document.body.classList.toggle('light', !isDark);
            document.querySelectorAll('.theme-opt').forEach(btn => {
                if(btn.dataset.mode === currentThemeMode) { btn.classList.add('text-blue-600', 'dark:text-blue-400', 'bg-slate-100', 'dark:bg-slate-700'); } 
                else { btn.classList.remove('text-blue-600', 'dark:text-blue-400', 'bg-slate-100', 'dark:bg-slate-700'); }
            });
        }
        function setThemeMode(mode) { currentThemeMode = mode; localStorage.setItem('themeMode', mode); applyTheme(); document.getElementById('themeDropdown').classList.remove('open'); }
        function toggleDropdown(e) { e.stopPropagation(); document.getElementById('themeDropdown').classList.toggle('open'); }
        
        // 全局点击关闭所有菜单
        function closeAllDropdowns(e) { 
            document.getElementById('themeDropdown').classList.remove('open');
            document.getElementById('linkMenu').classList.remove('open');
        }
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => { if(currentThemeMode === 'system') applyTheme(); });
        applyTheme(); init(); lucide.createIcons();
    </script>
</body>
</html>
    `;
}
