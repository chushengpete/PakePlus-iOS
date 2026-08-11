window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="我的健身计划">
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Crect width='512' height='512' rx='100' fill='%230b0e14'/%3E%3Cg transform='translate(256,256)'%3E%3Crect x='-160' y='-16' width='320' height='32' rx='8' fill='%23f0c27f'/%3E%3Crect x='-200' y='-40' width='40' height='80' rx='8' fill='%23fc5c7d'/%3E%3Crect x='160' y='-40' width='40' height='80' rx='8' fill='%23fc5c7d'/%3E%3Crect x='-170' y='-32' width='20' height='64' rx='6' fill='%23ff8a5c'/%3E%3Crect x='150' y='-32' width='20' height='64' rx='6' fill='%23ff8a5c'/%3E%3C/g%3E%3C/svg%3E">
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Crect width='512' height='512' rx='100' fill='%230b0e14'/%3E%3Cg transform='translate(256,256)'%3E%3Crect x='-160' y='-16' width='320' height='32' rx='8' fill='%23f0c27f'/%3E%3Crect x='-200' y='-40' width='40' height='80' rx='8' fill='%23fc5c7d'/%3E%3Crect x='160' y='-40' width='40' height='80' rx='8' fill='%23fc5c7d'/%3E%3Crect x='-170' y='-32' width='20' height='64' rx='6' fill='%23ff8a5c'/%3E%3Crect x='150' y='-32' width='20' height='64' rx='6' fill='%23ff8a5c'/%3E%3C/g%3E%3C/svg%3E">
    <title>专属健身计划 · 增肌塑形</title>
    <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body {
            font-family: 'Segoe UI', Roboto, system-ui, sans-serif;
            background: #0b0e14;
            color: #e8edf5;
            padding: 20px;
            line-height:1.6;
        }
        .app {
            max-width:1280px; margin:0 auto;
            background:linear-gradient(145deg,#131a24,#0e141c);
            border-radius:32px;
            padding:28px 32px 40px;
            box-shadow:0 25px 60px rgba(0,0,0,0.85);
            border:1px solid rgba(255,255,255,0.04);
        }
        ::-webkit-scrollbar { width:6px; height:6px; }
        ::-webkit-scrollbar-track { background:#1a232e; border-radius:12px; }
        ::-webkit-scrollbar-thumb { background:#3d4c5e; border-radius:12px; }
        ::-webkit-scrollbar-thumb:hover { background:#5a6f86; }
        h1,h2,h3,h4 { font-weight:600; letter-spacing:0.3px; }
        h1 {
            font-size:2.2rem;
            background:linear-gradient(135deg,#f0c27f,#fc5c7d);
            -webkit-background-clip:text; -webkit-text-fill-color:transparent;
            display:inline-block; margin-bottom:6px;
        }
        h2 {
            font-size:1.5rem; color:#d6e2f0;
            border-left:4px solid #fc5c7d; padding-left:16px;
            margin:32px 0 20px 0;
        }
        .subhead { color:#8fa2bb; font-size:0.95rem; margin-top:-6px; margin-bottom:20px; }
        .tag {
            display:inline-block; background:#1f2a37; padding:2px 14px; border-radius:30px;
            font-size:0.75rem; color:#9bb1cc; border:1px solid #2d3b4b;
        }
        .profile-grid {
            display:grid; grid-template-columns:repeat(auto-fit, minmax(180px,1fr));
            gap:14px 20px; background:#141d27; border-radius:20px;
            padding:22px 28px; margin:16px 0 22px 0; border:1px solid #25313f;
            position:relative;
        }
        .profile-item .label { font-size:0.7rem; text-transform:uppercase; color:#7b91ab; }
        .profile-item .value {
            font-size:1.2rem; font-weight:600; color:#eef4fa;
            display:flex; align-items:center; gap:8px; flex-wrap:wrap;
        }
        .profile-item .value small { font-weight:400; font-size:0.8rem; color:#8fa2bb; }
        .edit-btn {
            background:#1f2a37; border:1px solid #2d3b4b; color:#b0c5dd;
            border-radius:30px; padding:2px 12px; font-size:0.7rem; cursor:pointer; transition:0.2s;
        }
        .edit-btn:hover { background:#2d3b4b; color:#fff; }
        .profile-edit-form {
            display:none; grid-column:1/-1;
            background:#0f1721; border-radius:16px; padding:20px 24px;
            border:1px solid #2d3b4b; margin-top:8px;
            grid-template-columns:repeat(auto-fit, minmax(200px,1fr));
            gap:16px 24px;
        }
        .profile-edit-form.active { display:grid; }
        .profile-edit-form label {
            display:flex; flex-direction:column; font-size:0.8rem; color:#8fa2bb; gap:4px;
        }
        .profile-edit-form input, .profile-edit-form select {
            background:#1a232e; border:1px solid #2d3b4b; border-radius:10px;
            padding:8px 12px; color:#e8edf5; font-size:0.9rem; width:100%;
        }
        .profile-edit-form input:focus, .profile-edit-form select:focus {
            outline:none; border-color:#fc5c7d;
            box-shadow:0 0 0 2px rgba(252,92,125,0.2);
        }
        .edit-actions {
            grid-column:1/-1; display:flex; gap:12px; justify-content:flex-end; margin-top:8px;
        }
        .edit-actions button {
            background:#1f2a37; border:1px solid #2d3b4b; color:#b0c5dd;
            padding:6px 24px; border-radius:30px; cursor:pointer; font-size:0.85rem; transition:0.2s;
        }
        .edit-actions .save-btn {
            background:linear-gradient(135deg,#fc5c7d,#f0c27f);
            border-color:transparent; color:#0b0e14; font-weight:600;
        }
        .edit-actions button:hover { opacity:0.85; transform:scale(0.98); }
        .progress-wrap {
            background:#1a232e; border-radius:40px; height:12px; overflow:hidden;
            margin:8px 0 4px 0; border:1px solid #2a3746;
        }
        .progress-fill {
            height:100%; border-radius:40px;
            background:linear-gradient(90deg,#fc5c7d,#f0c27f);
            width:0%; transition:width 0.5s ease;
        }
        .progress-label { display:flex; justify-content:space-between; font-size:0.8rem; color:#8fa2bb; }
        .week-selector {
            display:flex; flex-wrap:wrap; gap:8px; margin:12px 0 18px 0;
        }
        .week-btn {
            background:#1a232e; border:1px solid #2d3b4b; color:#b0c5dd;
            padding:6px 16px; border-radius:40px; font-size:0.8rem; font-weight:500;
            cursor:pointer; transition:all 0.2s;
        }
        .week-btn:hover { background:#25313f; border-color:#4d627a; color:#fff; }
        .week-btn.active {
            background:linear-gradient(135deg,#fc5c7d,#f0c27f);
            border-color:transparent; color:#0b0e14; font-weight:600;
        }
        .week-btn .small-note { font-weight:300; opacity:0.7; font-size:0.7rem; }
        .table-responsive {
            overflow-x:auto; border-radius:16px; border:1px solid #1f2a37;
            background:#111a24; margin:8px 0 16px 0;
        }
        table { width:100%; border-collapse:collapse; font-size:0.9rem; min-width:700px; }
        th {
            background:#1a232e; color:#b8cae0; font-weight:600;
            padding:12px 14px; text-align:left; border-bottom:2px solid #2d3b4b;
            font-size:0.8rem; text-transform:uppercase; letter-spacing:0.5px;
        }
        td { padding:10px 14px; border-bottom:1px solid #1f2a37; vertical-align:middle; color:#d6e2f0; }
        tr:last-child td { border-bottom:none; }
        tr:hover td { background:#141d27; }
        .food-item {
            display:inline-block; background:#1f2a37; padding:1px 12px; border-radius:20px;
            font-size:0.8rem; color:#b8cae0; margin:2px 4px 2px 0; border:1px solid #2d3b4b;
        }
        .time-tag { font-weight:600; color:#f0c27f; font-size:0.8rem; }
        .day-tag { color:#f0c27f; font-weight:500; margin-right:6px; }
        .video-link {
            color:#7bb3ff; text-decoration:none; font-size:0.75rem;
            border-bottom:1px dashed #3d5a7a; cursor:pointer;
        }
        .video-link:hover { color:#a8ccff; border-bottom-color:#7bb3ff; }
        .badge {
            display:inline-block; background:#2d3b4b; padding:0px 10px; border-radius:30px;
            font-size:0.7rem; color:#b0c5dd; margin-right:4px;
        }
        .meal-grid {
            display:grid; grid-template-columns:repeat(auto-fit, minmax(260px,1fr));
            gap:12px; margin:12px 0 8px 0;
        }
        .meal-card {
            background:#141d27; border-radius:16px; padding:14px 18px;
            border:1px solid #1f2a37;
        }
        .meal-card .meal-title {
            font-weight:600; color:#f0c27f; font-size:0.9rem;
            border-bottom:1px solid #1f2a37; padding-bottom:6px; margin-bottom:10px;
        }
        .meal-card .food-selector {
            margin-bottom:6px; display:flex; align-items:center; gap:8px; flex-wrap:wrap;
        }
        .meal-card .food-selector label { font-size:0.75rem; color:#8fa2bb; min-width:50px; }
        .meal-card .food-selector select {
            background:#1a232e; border:1px solid #2d3b4b; border-radius:8px;
            padding:4px 8px; color:#e8edf5; font-size:0.8rem; flex:1; min-width:100px;
        }
        .meal-card .food-selector select:focus { outline:none; border-color:#fc5c7d; }
        .meal-card .food-amount { font-size:0.8rem; color:#f0c27f; margin-left:4px; }
        .schedule-grid {
            display:grid; grid-template-columns:repeat(4, 1fr);
            gap:12px 20px;
            background:#141d27;
            border-radius:16px;
            padding:18px 22px;
            border:1px solid #1f2a37;
            margin:8px 0 12px 0;
        }
        .schedule-item {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            padding:6px 4px;
            border-bottom:none;
            gap:2px;
        }
        .schedule-item .s-time-input {
            background:transparent;
            border:none;
            color:#f0c27f;
            font-weight:500;
            font-size:1rem;
            font-family:inherit;
            padding:0;
            margin:0;
            width:auto;
            min-width:60px;
            cursor:pointer;
            outline:none;
        }
        .schedule-item .s-time-input::-webkit-calendar-picker-indicator {
            filter: invert(0.7) sepia(1) saturate(3) hue-rotate(340deg);
            cursor:pointer;
            opacity:0.5;
            padding:2px;
        }
        .schedule-item .s-time-input::-webkit-calendar-picker-indicator:hover {
            opacity:1;
        }
        .schedule-item .s-time-input::-webkit-datetime-edit-fields-wrapper {
            color:#f0c27f;
            font-weight:500;
        }
        .schedule-item .s-time-input::-webkit-datetime-edit-text {
            color:#f0c27f;
        }
        .schedule-item .s-time-input::-webkit-datetime-edit-hour-field,
        .schedule-item .s-time-input::-webkit-datetime-edit-minute-field {
            color:#f0c27f;
            font-weight:500;
        }
        .schedule-item .s-time-input::-webkit-datetime-edit-hour-field:focus,
        .schedule-item .s-time-input::-webkit-datetime-edit-minute-field:focus {
            background:rgba(240,194,127,0.15);
            border-radius:3px;
        }
        .schedule-item .s-desc {
            color:#b8cae0;
            font-size:0.8rem;
            line-height:1.4;
            word-break:break-word;
        }
        @media (max-width:820px) {
            .schedule-grid {
                grid-template-columns:repeat(2, 1fr);
                gap:10px 16px;
                padding:14px 16px;
            }
        }
        @media (max-width:480px) {
            .schedule-grid {
                grid-template-columns:1fr;
                gap:8px;
                padding:12px 14px;
            }
            .schedule-item {
                padding:4px 0;
                border-bottom:1px solid #1a232e;
            }
            .schedule-item:last-child {
                border-bottom:none;
            }
        }
        .weight-record-area {
            background:#141d27; border-radius:20px; padding:20px 24px;
            border:1px solid #1f2a37; margin:16px 0 12px 0;
        }
        .weight-record-area .record-input {
            display:flex; flex-wrap:wrap; gap:12px; align-items:center;
            margin-bottom:16px;
        }
        .weight-record-area .record-input label { font-size:0.8rem; color:#8fa2bb; }
        .weight-record-area .record-input input[type="date"] {
            background:#1a232e; border:1px solid #2d3b4b; border-radius:8px;
            padding:6px 10px; color:#e8edf5; font-size:0.9rem;
        }
        .weight-record-area .record-input input[type="number"] {
            background:#1a232e; border:1px solid #2d3b4b; border-radius:8px;
            padding:6px 10px; color:#e8edf5; font-size:0.9rem; width:100px;
        }
        .weight-record-area .record-input button {
            background:linear-gradient(135deg,#fc5c7d,#f0c27f);
            border:none; border-radius:30px; padding:6px 20px;
            color:#0b0e14; font-weight:600; cursor:pointer;
        }
        .weight-record-area .record-input button:hover { opacity:0.85; }
        .weight-record-list {
            max-height:200px; overflow-y:auto; font-size:0.85rem;
        }
        .weight-record-list .record-item {
            display:flex; justify-content:space-between; padding:4px 8px;
            border-bottom:1px solid #1a232e;
        }
        .weight-record-list .record-item .del-btn {
            background:none; border:none; color:#fc5c7d; cursor:pointer; font-size:0.8rem;
        }
        .weight-record-list .record-item .del-btn:hover { color:#ff8a5c; }
        .chart-wrapper {
            background:#111a24; border-radius:20px; padding:20px 20px 10px 20px;
            border:1px solid #1f2a37; margin:16px 0 10px 0;
        }
        .chart-wrapper canvas { width:100% !important; height:auto !important; max-height:300px; }
        .week-detail-panel {
            margin-top:12px; background:#0f1721; border-radius:12px; padding:12px 16px;
            border:1px solid #1f2a37;
        }
        .week-detail-panel .day-item {
            display:flex; justify-content:space-between; padding:3px 0;
            border-bottom:1px dashed #1a232e; font-size:0.8rem;
        }
        .week-detail-panel .day-item:last-child { border-bottom:none; }
        .exercise-grid {
            display:grid; grid-template-columns:repeat(auto-fill, minmax(220px,1fr));
            gap:12px; margin:12px 0 8px 0;
        }
        .exercise-card {
            background:#141d27; border-radius:14px; padding:14px 16px;
            border:1px solid #1f2a37; transition:0.2s;
        }
        .exercise-card:hover { border-color:#3d4c5e; background:#18222e; }
        .exercise-card .ex-name { font-weight:600; color:#d6e2f0; }
        .exercise-card .ex-muscle { font-size:0.75rem; color:#9bb1cc; margin:2px 0 6px 0; }
        .exercise-card .ex-detail { font-size:0.8rem; color:#8fa2bb; }
        .exercise-card .watched-badge {
            display:inline-block; background:#2d4a3a; color:#8bc34a;
            font-size:0.6rem; padding:1px 10px; border-radius:30px; margin-left:8px;
        }
        .exercise-card .cache-btn, .exercise-card .del-cache-btn {
            background:none; border:1px solid #2d3b4b; color:#b0c5dd;
            border-radius:20px; padding:0 10px; font-size:0.6rem; cursor:pointer;
            margin-left:4px; transition:0.2s;
        }
        .exercise-card .cache-btn:hover { background:#1f2a37; }
        .exercise-card .del-cache-btn { border-color:#5a3a3a; color:#fc5c7d; }
        .exercise-card .del-cache-btn:hover { background:#3d2a2a; }
        .cardio-selector { display:flex; align-items:center; gap:6px; flex-wrap:wrap; }
        .cardio-selector select {
            background:#1a232e; border:1px solid #2d3b4b; border-radius:8px;
            padding:3px 8px; color:#e8edf5; font-size:0.8rem; max-width:120px;
        }
        .cardio-selector .cardio-params { font-size:0.75rem; color:#8fa2bb; white-space:nowrap; }
        .cardio-selector .cardio-params span { color:#f0c27f; }
        @media (max-width:768px) {
            .app { padding:16px 14px 28px; border-radius:20px; }
            h1 { font-size:1.6rem; }
            .profile-grid { grid-template-columns:1fr 1fr; padding:16px 18px; }
            .profile-item .value { font-size:1rem; }
            .meal-grid { grid-template-columns:1fr 1fr; }
            .schedule-grid { grid-template-columns:repeat(2,1fr); padding:14px 16px; }
            .week-btn { font-size:0.7rem; padding:4px 12px; }
            table { font-size:0.8rem; min-width:500px; }
            th, td { padding:8px 10px; }
            .exercise-grid { grid-template-columns:1fr 1fr; }
            .profile-edit-form { grid-template-columns:1fr 1fr; }
        }
        @media (max-width:480px) {
            .profile-grid { grid-template-columns:1fr 1fr; gap:8px; padding:12px 14px; }
            .meal-grid { grid-template-columns:1fr; }
            .exercise-grid { grid-template-columns:1fr; }
            .week-selector { gap:4px; }
            .week-btn { font-size:0.65rem; padding:3px 10px; }
            table { font-size:0.7rem; min-width:400px; }
            th, td { padding:6px 8px; }
            .profile-edit-form { grid-template-columns:1fr; }
            .cardio-selector select { max-width:80px; }
            .schedule-grid { grid-template-columns:1fr; gap:6px; padding:12px 14px; }
            .schedule-item { border-bottom:1px solid #1a232e; padding:6px 0; }
            .schedule-item:last-child { border-bottom:none; }
        }
        .flex-between { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; }
        .pill {
            background:#1f2a37; border-radius:30px; padding:2px 14px;
            font-size:0.7rem; color:#b0c5dd; border:1px solid #2d3b4b;
        }
        .mt-8 { margin-top:8px; }
        .mb-8 { margin-bottom:8px; }
        .text-center { text-align:center; }
    </style>
</head>
<body>

<div class="app" id="app">

    <!-- 头部 -->
    <div class="flex-between">
        <div>
            <h1>⚡ 专属健身计划</h1>
            <div class="subhead">增肌塑形 · 12周蜕变 · 手动缓存视频</div>
        </div>
        <div class="pill" style="font-size:0.8rem; padding:4px 20px;">
            🗓️ 第 <span id="currentWeekDisplay">1</span> / 12 周
        </div>
    </div>

    <!-- 个人信息 -->
    <div class="profile-grid" id="profileGrid">
        <div class="profile-item"><span class="label">👤 姓名</span><span class="value" id="dispName">张先生</span></div>
        <div class="profile-item"><span class="label">⚧ 性别 / 年龄</span><span class="value" id="dispGenderAge">男 · 25岁</span></div>
        <div class="profile-item"><span class="label">📏 身高</span><span class="value" id="dispHeight">165 cm</span></div>
        <div class="profile-item"><span class="label">⚖️ 当前体重</span><span class="value" id="dispCurrentWeight">67.5 <small>kg</small></span></div>
        <div class="profile-item"><span class="label">🎯 目标体重</span><span class="value" id="dispTargetWeight">60.0 <small>kg</small></span></div>
        <div class="profile-item"><span class="label">🏋️ 目标体型</span><span class="value" id="dispTargetBody">胸肌 · 腹肌</span></div>
        <div class="profile-item"><span class="label">📅 训练频率</span><span class="value" id="dispFrequency">每周 5 次</span></div>
        <div class="profile-item"><span class="label">⏰ 可锻炼时间</span><span class="value" id="dispTime">2 小时 / 天</span></div>
        <div class="profile-item"><span class="label">🕒 工作时间</span><span class="value" id="dispWorkTime">09:00-18:00</span></div>
        <div style="grid-column: 1 / -1; display: flex; justify-content: flex-end; margin-top: 4px;">
            <button class="edit-btn" id="toggleEditBtn">✏️ 修改个人信息</button>
        </div>
        <div class="profile-edit-form" id="editForm">
            <label>姓名 <input type="text" id="editName" value="张先生"></label>
            <label>性别 <input type="text" id="editGender" value="男"></label>
            <label>年龄 <input type="number" id="editAge" value="25"></label>
            <label>身高 (cm) <input type="number" id="editHeight" value="165"></label>
            <label>当前体重 (kg) <input type="number" step="0.1" id="editCurrentWeight" value="67.5"></label>
            <label>目标体重 (kg) <input type="number" step="0.1" id="editTargetWeight" value="60.0"></label>
            <label>目标体型 <input type="text" id="editTargetBody" value="胸肌 · 腹肌"></label>
            <label>训练频率 (天/周) 
                <select id="editFrequency">
                    <option value="1">1 天</option>
                    <option value="2">2 天</option>
                    <option value="3">3 天</option>
                    <option value="4">4 天</option>
                    <option value="5" selected>5 天</option>
                    <option value="6">6 天</option>
                    <option value="7">7 天</option>
                </select>
            </label>
            <label>可锻炼时间 (小时/天) <input type="number" step="0.5" id="editTime" value="2"></label>
            <label>工作时间 <select id="editWorkTime">
                <option value="08:00-17:00">08:00-17:00</option>
                <option value="09:00-18:00" selected>09:00-18:00</option>
                <option value="10:00-19:00">10:00-19:00</option>
                <option value="13:00-22:00">13:00-22:00</option>
                <option value="14:00-23:00">14:00-23:00</option>
            </select></label>
            <div class="edit-actions">
                <button id="cancelEditBtn">取消</button>
                <button class="save-btn" id="saveEditBtn">💾 保存并更新计划</button>
            </div>
        </div>
    </div>

    <!-- 进度 -->
    <div style="margin: 6px 0 4px 0;">
        <div class="flex-between">
            <span style="font-weight:500;">📉 减脂进度</span>
            <span style="font-size:0.85rem; color:#8fa2bb;" id="progressText">已减 0.0 kg · 目标 7.5 kg</span>
        </div>
        <div class="progress-wrap"><div class="progress-fill" id="progressFill" style="width:0%;"></div></div>
        <div class="progress-label">
            <span id="startWeightLabel">67.5 kg</span>
            <span id="currentWeightLabel">67.5 kg</span>
            <span id="targetWeightLabel">60.0 kg</span>
        </div>
    </div>

    <!-- 周选择器 -->
    <div style="margin-top:24px;">
        <div class="flex-between" style="margin-bottom:6px;">
            <h2 style="margin:0; border-left-color:#f0c27f;">📋 训练计划</h2>
            <span class="tag">点击周次切换</span>
        </div>
        <div class="week-selector" id="weekSelector"></div>
    </div>

    <!-- 训练表格 -->
    <div class="table-responsive">
        <table>
            <thead><tr>
                <th style="min-width:100px;">训练日</th>
                <th style="min-width:100px;">部位</th>
                <th>训练内容</th>
                <th style="min-width:180px;">有氧器材</th>
                <th style="min-width:90px;">视频</th>
            </tr></thead>
            <tbody id="trainingBody"></tbody>
        </table>
    </div>

    <!-- 饮食 -->
    <h2 style="margin-top:36px;">🥗 每日饮食计划 <span style="font-size:0.8rem; color:#8fa2bb; font-weight:400;">（下拉选择食物，量自动变化）</span></h2>
    <div class="subhead">常见食材 · 中式减肥餐 · 可自定义</div>
    <div class="meal-grid" id="mealGrid"></div>

    <!-- 作息 -->
    <h2 style="margin-top:36px;">🕐 作息时间表 <span style="font-size:0.8rem; color:#8fa2bb; font-weight:400;">（点击时间可编辑，精确到分钟）</span></h2>
    <div class="subhead">每行4项 · 金色时间为可编辑输入框</div>
    <div class="schedule-grid" id="scheduleGrid"></div>

    <!-- 体重记录与图表 -->
    <h2 style="margin-top:36px;">📊 体重记录与预测对比</h2>
    <div class="subhead">记录每日体重，与预测曲线对比，按周查看明细</div>
    <div class="weight-record-area">
        <div class="record-input">
            <label>日期 <input type="date" id="recordDate"></label>
            <label>体重 (kg) <input type="number" step="0.1" id="recordWeight" placeholder="65.0"></label>
            <button id="addRecordBtn">➕ 添加记录</button>
            <button id="clearRecordsBtn" style="background:#3d2a2a; color:#fc5c7d; border:none; border-radius:30px; padding:6px 20px; cursor:pointer;">🗑️ 清空</button>
        </div>
        <div class="weight-record-list" id="recordList"></div>
    </div>
    <div class="chart-wrapper">
        <canvas id="weightChart" height="300"></canvas>
        <div id="weekDetailPanel" class="week-detail-panel" style="display:none;"></div>
    </div>

    <!-- 动作库 -->
    <h2 style="margin-top:36px;">🏋️ 核心动作库 <span style="font-size:0.8rem; color:#8fa2bb; font-weight:400;">（手动缓存视频）</span></h2>
    <div class="subhead">点击「搜索视频」在抖音中查找，找到喜欢的视频后复制链接，点击「缓存视频」粘贴保存</div>
    <div class="exercise-grid" id="exerciseGrid"></div>

    <div style="margin-top:40px; border-top:1px solid #1f2a37; padding-top:20px; font-size:0.8rem; color:#5a6f86; text-align:center;">
        ⚕️ 结合中医养生 · 每周5练 · 每次2小时 &nbsp;|&nbsp; 计划执行 12 周
    </div>
</div>

<script>
// ============================================================
//  核心数据
// ============================================================
let user = {
    name: '张先生',
    gender: '男',
    age: 25,
    height: 165,
    currentWeight: 67.5,
    targetWeight: 60.0,
    targetBody: '胸肌 · 腹肌',
    frequency: 5,
    timePerDay: 2,
    workTime: '09:00-18:00'
};

function generateWeightForecast(start, target, weeks=12) {
    const forecast = [];
    for (let i=0; i<weeks; i++) {
        const progress = i / (weeks-1);
        forecast.push(Math.round((start - (start-target)*progress)*10)/10);
    }
    return forecast;
}
let weightForecast = generateWeightForecast(user.currentWeight, user.targetWeight, 12);

// 体重记录
let weightRecords = JSON.parse(localStorage.getItem('weightRecords') || '[]');
function saveRecords() { localStorage.setItem('weightRecords', JSON.stringify(weightRecords)); }

// 饮食
const foodDB = {
    '主食': { '全麦面包': {unit:'片',amount:2}, '糙米饭':{unit:'g',amount:100}, '红薯':{unit:'g',amount:150}, '燕麦':{unit:'g',amount:30}, '玉米':{unit:'根',amount:1}, '荞麦面':{unit:'g',amount:80} },
    '蛋白质': { '鸡蛋':{unit:'个',amount:2}, '鸡胸肉':{unit:'g',amount:150}, '三文鱼':{unit:'g',amount:150}, '牛肉':{unit:'g',amount:100}, '豆腐':{unit:'g',amount:200}, '虾仁':{unit:'g',amount:150} },
    '水果': { '苹果':{unit:'个',amount:1}, '香蕉':{unit:'根',amount:1}, '蓝莓':{unit:'g',amount:50}, '橙子':{unit:'个',amount:1}, '猕猴桃':{unit:'个',amount:1}, '草莓':{unit:'g',amount:100} },
    '饮品': { '纯牛奶':{unit:'ml',amount:200}, '无糖酸奶':{unit:'g',amount:150}, '豆浆':{unit:'ml',amount:250}, '黑咖啡':{unit:'杯',amount:1} },
    '蔬菜': { '西兰花':{unit:'g',amount:200}, '生菜':{unit:'g',amount:100}, '黄瓜':{unit:'根',amount:1}, '番茄':{unit:'个',amount:1}, '菠菜':{unit:'g',amount:150} },
    '坚果': { '核桃':{unit:'颗',amount:3}, '杏仁':{unit:'g',amount:30}, '腰果':{unit:'g',amount:30} },
    '其他': { '蜂蜜':{unit:'g',amount:5}, '橄榄油':{unit:'ml',amount:5}, '亚麻籽油':{unit:'ml',amount:5} }
};
const mealCategories = {
    '🌅 早餐 (07:00)': ['主食','蛋白质','水果','饮品'],
    '🍎 加餐 (10:00)': ['水果','坚果','饮品'],
    '🍗 午餐 (12:30)': ['主食','蛋白质','蔬菜','其他'],
    '🥤 加餐 (16:00)': ['主食','水果','饮品'],
    '🐟 晚餐 (19:00)': ['主食','蛋白质','蔬菜','其他'],
    '💪 训练后 (22:00)': ['蛋白质','饮品','其他']
};
let mealSelections = JSON.parse(localStorage.getItem('mealSelections') || '{}');
function initMealSelections() {
    for (let meal in mealCategories) {
        if (!mealSelections[meal]) mealSelections[meal] = {};
        const cats = mealCategories[meal];
        cats.forEach(cat => {
            if (!mealSelections[meal][cat]) {
                const keys = Object.keys(foodDB[cat] || {});
                mealSelections[meal][cat] = keys.length ? keys[0] : '';
            }
        });
    }
    localStorage.setItem('mealSelections', JSON.stringify(mealSelections));
}
initMealSelections();

// 有氧
const cardioOptions = {
    '跑步机': { params:'速度6, 坡度3', time:'20min' },
    '椭圆机': { params:'阻力6', time:'20min' },
    '动感单车': { params:'中速阻力', time:'20min' },
    '划船机': { params:'阻力5', time:'20min' },
    '登山机': { params:'速度4', time:'20min' }
};
let cardioSelections = JSON.parse(localStorage.getItem('cardioSelections') || '{}');
function initCardioSelections() {
    for (let w=0; w<12; w++) {
        for (let d=0; d<7; d++) {
            const key = w+'_'+d;
            if (!cardioSelections[key]) cardioSelections[key] = '跑步机';
        }
    }
    localStorage.setItem('cardioSelections', JSON.stringify(cardioSelections));
}
initCardioSelections();

// ============================================================
//  训练计划生成 - 根据目标和频率动态调整
// ============================================================
const baseExercises = {
    chest: ['平板杠铃卧推 4×12','上斜哑铃卧推 4×12','蝴蝶机夹胸 4×15','绳索下压 4×15','凳上臂屈伸 3×15'],
    back: ['引体向上 4×力竭','杠铃划船 4×12','坐姿划船 4×15','哑铃弯举 4×15','锤式弯举 3×15'],
    shoulders: ['哑铃推举 4×12','侧平举 4×15','俯身飞鸟 4×15'],
    legs: ['深蹲 4×12','腿举 4×15','腿弯举 4×15','臀桥 4×15','哑铃箭步蹲 3×12'],
    abs: ['卷腹 4×20','举腿 4×15','俄罗斯转体 3×20','平板支撑 4×30s','悬垂举腿 3×15'],
    full: ['硬拉 4×10','俯身划船 4×12','平板卧推 4×12','深蹲 4×12','平板支撑 4×30s','悬垂举腿 3×15'],
    cardio: ['有氧跑步 20min','椭圆机 20min','动感单车 20min'],
    recovery: ['静态拉伸 15min','泡沫轴放松 15min','核心激活 10min']
};

function generateTrainingData() {
    const freq = user.frequency;
    const target = user.targetBody.toLowerCase();
    const hasAbs = target.includes('腹') || target.includes('核心');
    const hasChest = target.includes('胸');

    // 构建7天计划模板
    let weeklyPlan = [];
    // 根据目标调整胸部动作
    let chestEx = [...baseExercises.chest];
    if (hasChest) {
        chestEx.push('上斜飞鸟 4×12');
        chestEx.push('双杠臂屈伸 4×力竭');
    }
    // 第5天（腹部/全身）
    let day5Ex = hasAbs ? baseExercises.abs : baseExercises.full;
    let day5Name = hasAbs ? '腹部 + 核心' : '全身 + 核心';

    // 定义7天内容
    const plan = [
        { day: '周一', part: '胸部 + 三头', ex: chestEx },
        { day: '周二', part: '背部 + 二头', ex: baseExercises.back },
        { day: '周三', part: '肩部 + 腹部', ex: baseExercises.shoulders.concat(['卷腹 4×20','举腿 4×15','俄罗斯转体 3×20']) },
        { day: '周四', part: '腿部 + 臀部', ex: baseExercises.legs },
        { day: '周五', part: day5Name, ex: day5Ex },
        { day: '周六', part: '全身 + 有氧', ex: baseExercises.full.concat(baseExercises.cardio) },
        { day: '周日', part: '拉伸 + 恢复', ex: baseExercises.recovery }
    ];

    // 截取前freq天
    const selected = plan.slice(0, freq);

    // 计算训练时间段
    const [start, end] = user.workTime.split('-').map(s => s.trim());
    const workEndHour = parseInt(end.split(':')[0]);
    let trainStartHour = workEndHour + 1;
    if (trainStartHour >= 24) trainStartHour = 20;
    const trainDuration = user.timePerDay;
    let trainEndHour = trainStartHour + trainDuration;
    if (trainEndHour > 24) trainEndHour = 24;
    const timeStr = `${String(trainStartHour).padStart(2,'0')}:00-${String(Math.floor(trainEndHour)).padStart(2,'0')}:${trainEndHour % 1 === 0 ? '00' : '30'}`;

    // 为每一天生成数据
    return selected.map(item => ({
        day: item.day,
        time: timeStr,
        part: item.part,
        exercises: item.ex,
        video: item.part.replace(/[+·]/g,'').trim()
    }));
}
let trainingData = generateTrainingData();

// ============================================================
//  动作库 - 手动缓存视频
// ============================================================
const exerciseLibrary = [
    { name:'平板杠铃卧推', muscle:'胸大肌 · 三头肌', detail:'4组 × 12次', searchKey:'平板杠铃卧推 维亚德' },
    { name:'深蹲', muscle:'股四头肌 · 臀大肌', detail:'4组 × 12次', searchKey:'深蹲 维亚德' },
    { name:'硬拉', muscle:'背部 · 臀腿 · 核心', detail:'4组 × 10次', searchKey:'硬拉 维亚德' },
    { name:'引体向上', muscle:'背阔肌 · 二头肌', detail:'4组 × 力竭', searchKey:'引体向上 维亚德' },
    { name:'哑铃推举', muscle:'三角肌 · 三头肌', detail:'4组 × 12次', searchKey:'哑铃推举 维亚德' },
    { name:'卷腹', muscle:'腹直肌', detail:'4组 × 20次', searchKey:'卷腹 维亚德' },
    { name:'杠铃划船', muscle:'背阔肌 · 斜方肌', detail:'4组 × 12次', searchKey:'杠铃划船 维亚德' },
    { name:'臀桥', muscle:'臀大肌 · 腘绳肌', detail:'4组 × 15次', searchKey:'臀桥 维亚德' },
    { name:'绳索下压', muscle:'三头肌', detail:'4组 × 15次', searchKey:'绳索下压 维亚德' },
    { name:'平板支撑', muscle:'核心 · 腹横肌', detail:'4组 × 30秒', searchKey:'平板支撑 维亚德' }
];

// 观看记录存储结构: { [动作名称]: { url: string } }  如果有url则表示已缓存
let watchedVideos = JSON.parse(localStorage.getItem('watchedVideos') || '{}');
// 兼容旧格式
Object.keys(watchedVideos).forEach(key => {
    if (watchedVideos[key] === true || watchedVideos[key] === false) {
        delete watchedVideos[key];
    } else if (typeof watchedVideos[key] === 'string') {
        if (watchedVideos[key].startsWith('http') || watchedVideos[key].includes('douyin')) {
            watchedVideos[key] = { url: watchedVideos[key] };
        } else {
            delete watchedVideos[key];
        }
    } else if (watchedVideos[key] && typeof watchedVideos[key] === 'object' && !watchedVideos[key].url) {
        delete watchedVideos[key];
    }
});
localStorage.setItem('watchedVideos', JSON.stringify(watchedVideos));

function getCachedUrl(name) {
    return watchedVideos[name]?.url || null;
}

function cacheVideo(name, url) {
    if (!url || !url.trim()) return false;
    watchedVideos[name] = { url: url.trim() };
    localStorage.setItem('watchedVideos', JSON.stringify(watchedVideos));
    return true;
}

function uncacheVideo(name) {
    if (watchedVideos[name]) {
        delete watchedVideos[name];
        localStorage.setItem('watchedVideos', JSON.stringify(watchedVideos));
        return true;
    }
    return false;
}

// ============================================================
//  状态
// ============================================================
let currentWeek = 0;

// ============================================================
//  作息自定义时间存储
// ============================================================
let scheduleCustomTimes = JSON.parse(localStorage.getItem('scheduleCustomTimes') || '{}');

function saveScheduleTimes() {
    localStorage.setItem('scheduleCustomTimes', JSON.stringify(scheduleCustomTimes));
}

// ============================================================
//  渲染函数
// ============================================================

function renderProfile() {
    document.getElementById('dispName').textContent = user.name;
    document.getElementById('dispGenderAge').textContent = `${user.gender} · ${user.age}岁`;
    document.getElementById('dispHeight').textContent = `${user.height} cm`;
    document.getElementById('dispCurrentWeight').innerHTML = `${user.currentWeight} <small>kg</small>`;
    document.getElementById('dispTargetWeight').innerHTML = `${user.targetWeight} <small>kg</small>`;
    document.getElementById('dispTargetBody').textContent = user.targetBody;
    document.getElementById('dispFrequency').textContent = `每周 ${user.frequency} 次`;
    document.getElementById('dispTime').textContent = `${user.timePerDay} 小时 / 天`;
    document.getElementById('dispWorkTime').textContent = user.workTime;
    document.getElementById('editName').value = user.name;
    document.getElementById('editGender').value = user.gender;
    document.getElementById('editAge').value = user.age;
    document.getElementById('editHeight').value = user.height;
    document.getElementById('editCurrentWeight').value = user.currentWeight;
    document.getElementById('editTargetWeight').value = user.targetWeight;
    document.getElementById('editTargetBody').value = user.targetBody;
    document.getElementById('editFrequency').value = user.frequency;
    document.getElementById('editTime').value = user.timePerDay;
    document.getElementById('editWorkTime').value = user.workTime;
    document.getElementById('startWeightLabel').textContent = user.currentWeight.toFixed(1)+' kg';
    document.getElementById('targetWeightLabel').textContent = user.targetWeight.toFixed(1)+' kg';
}

function renderWeekSelector() {
    const container = document.getElementById('weekSelector');
    container.innerHTML = '';
    for (let i=0; i<12; i++) {
        const btn = document.createElement('button');
        btn.className = 'week-btn' + (i===currentWeek ? ' active' : '');
        const weight = weightForecast[i] || user.currentWeight;
        btn.innerHTML = `第${i+1}周 <span class="small-note">${weight.toFixed(1)}kg</span>`;
        btn.dataset.index = i;
        btn.addEventListener('click', ()=>{
            currentWeek = i;
            renderAll();
        });
        container.appendChild(btn);
    }
    document.getElementById('currentWeekDisplay').textContent = currentWeek+1;
}

function renderTraining() {
    const tbody = document.getElementById('trainingBody');
    tbody.innerHTML = '';
    const data = trainingData.slice(0, user.frequency);
    data.forEach((day, idx) => {
        const tr = document.createElement('tr');
        // 训练日列：显示“周一 20:00-22:00”
        const tdDay = document.createElement('td');
        tdDay.innerHTML = `<span class="day-tag">${day.day}</span><span class="time-tag">${day.time}</span>`;
        tr.appendChild(tdDay);
        // 部位
        const tdPart = document.createElement('td');
        tdPart.innerHTML = `<strong>${day.part}</strong>`;
        tr.appendChild(tdPart);
        // 训练内容
        const tdEx = document.createElement('td');
        tdEx.innerHTML = day.exercises.map(e => `<span class="food-item">${e}</span>`).join(' ');
        tr.appendChild(tdEx);
        // 有氧器材
        const tdCardio = document.createElement('td');
        const selectId = `cardio_${currentWeek}_${idx}`;
        const select = document.createElement('select');
        select.id = selectId;
        const currentVal = cardioSelections[currentWeek+'_'+idx] || '跑步机';
        Object.keys(cardioOptions).forEach(key => {
            const opt = document.createElement('option');
            opt.value = key; opt.textContent = key;
            if (key === currentVal) opt.selected = true;
            select.appendChild(opt);
        });
        select.addEventListener('change', function(e) {
            const key = currentWeek+'_'+idx;
            cardioSelections[key] = this.value;
            localStorage.setItem('cardioSelections', JSON.stringify(cardioSelections));
            updateCardioParams(idx);
        });
        const paramSpan = document.createElement('span');
        paramSpan.className = 'cardio-params';
        paramSpan.id = `cardioParams_${currentWeek}_${idx}`;
        const params = cardioOptions[currentVal];
        paramSpan.innerHTML = ` &nbsp; ${params.params} · ${params.time}`;
        const wrapper = document.createElement('div');
        wrapper.className = 'cardio-selector';
        wrapper.appendChild(select);
        wrapper.appendChild(paramSpan);
        tdCardio.appendChild(wrapper);
        tr.appendChild(tdCardio);
        // 视频演示
        const tdVideo = document.createElement('td');
        let actionName = '';
        const found = exerciseLibrary.find(ex => day.video.includes(ex.name.replace(/[+·]/g,'').trim()));
        if (found) actionName = found.name;
        else actionName = day.video;
        const cachedUrl = getCachedUrl(actionName);
        let html = '';
        if (cachedUrl) {
            html = `<a class="video-link" href="${cachedUrl}" target="_blank">▶ 视频演示 ✅</a>`;
        } else {
            const searchKey = found ? found.searchKey : day.video + ' 维亚德';
            const url = `https://www.douyin.com/search/${encodeURIComponent(searchKey)}`;
            html = `<a class="video-link" href="${url}" target="_blank">▶ 搜索视频</a>`;
        }
        tdVideo.innerHTML = html;
        tr.appendChild(tdVideo);
        tbody.appendChild(tr);
    });
}

function updateCardioParams(idx) {
    const key = currentWeek+'_'+idx;
    const val = cardioSelections[key] || '跑步机';
    const params = cardioOptions[val];
    const span = document.getElementById(`cardioParams_${currentWeek}_${idx}`);
    if (span) span.innerHTML = ` &nbsp; ${params.params} · ${params.time}`;
}

function renderMeals() {
    const container = document.getElementById('mealGrid');
    container.innerHTML = '';
    const meals = Object.keys(mealCategories);
    meals.forEach(mealName => {
        const card = document.createElement('div');
        card.className = 'meal-card';
        const title = document.createElement('div');
        title.className = 'meal-title';
        title.textContent = mealName;
        card.appendChild(title);

        const cats = mealCategories[mealName];
        cats.forEach(cat => {
            const wrapper = document.createElement('div');
            wrapper.className = 'food-selector';
            const label = document.createElement('label');
            label.textContent = cat;
            const select = document.createElement('select');
            const foodKeys = Object.keys(foodDB[cat] || {});
            foodKeys.forEach(food => {
                const opt = document.createElement('option');
                opt.value = food; opt.textContent = food;
                select.appendChild(opt);
            });
            const current = mealSelections[mealName]?.[cat] || '';
            if (current && foodKeys.includes(current)) select.value = current;
            else if (foodKeys.length) select.value = foodKeys[0];
            const amountSpan = document.createElement('span');
            amountSpan.className = 'food-amount';
            const updateAmount = (selected) => {
                const data = foodDB[cat]?.[selected];
                if (data) amountSpan.textContent = ` ${data.amount}${data.unit}`;
                else amountSpan.textContent = '';
            };
            updateAmount(select.value);
            select.addEventListener('change', function(e) {
                const val = this.value;
                if (!mealSelections[mealName]) mealSelections[mealName] = {};
                mealSelections[mealName][cat] = val;
                localStorage.setItem('mealSelections', JSON.stringify(mealSelections));
                updateAmount(val);
            });
            wrapper.appendChild(label);
            wrapper.appendChild(select);
            wrapper.appendChild(amountSpan);
            card.appendChild(wrapper);
        });
        container.appendChild(card);
    });
}

// ============================================================
//  作息渲染
// ============================================================
function renderSchedule() {
    const container = document.getElementById('scheduleGrid');
    container.innerHTML = '';
    const [start, end] = user.workTime.split('-').map(s => s.trim());
    const workStart = parseInt(start.split(':')[0]);
    const workEnd = parseInt(end.split(':')[0]);
    let schedule = [];
    if (workEnd <= 18) {
        schedule = [
            { id: 'wake', desc: '起床 · 喝温水 300ml', defaultTime: '06:30' },
            { id: 'breakfast', desc: '早餐 (养胃健脾)', defaultTime: '07:00' },
            { id: 'work_morning', desc: `上午工作 (${String(workStart).padStart(2,'0')}:00-12:00)`, defaultTime: `${String(workStart).padStart(2,'0')}:00` },
            { id: 'lunch', desc: '午餐 (吃饱)', defaultTime: '12:30' },
            { id: 'work_afternoon', desc: `下午工作 (13:00-${String(workEnd).padStart(2,'0')}:00)`, defaultTime: '13:00' },
            { id: 'snack', desc: '加餐 (补充能量)', defaultTime: '17:30' },
            { id: 'rest', desc: `休息/通勤 (${String(workEnd).padStart(2,'0')}:00-20:00)`, defaultTime: `${String(workEnd).padStart(2,'0')}:00` },
            { id: 'train', desc: '🏋️ 训练 (2小时)', defaultTime: '20:00' },
            { id: 'post_train', desc: '训练后营养补充', defaultTime: '22:00' },
            { id: 'sleep', desc: '🛌 睡觉 (养肝血)', defaultTime: '23:00' }
        ];
    } else if (workEnd > 20) {
        const trainStart = workEnd + 1;
        schedule = [
            { id: 'wake', desc: '起床 · 喝温水 300ml', defaultTime: '06:30' },
            { id: 'breakfast', desc: '早餐 (养胃健脾)', defaultTime: '07:00' },
            { id: 'work_morning', desc: `上午工作 (${String(workStart).padStart(2,'0')}:00-12:00)`, defaultTime: `${String(workStart).padStart(2,'0')}:00` },
            { id: 'lunch', desc: '午餐 (吃饱)', defaultTime: '12:30' },
            { id: 'work_afternoon', desc: `下午工作 (13:00-${String(workEnd).padStart(2,'0')}:00)`, defaultTime: '13:00' },
            { id: 'snack', desc: '加餐 (补充能量)', defaultTime: '17:30' },
            { id: 'rest', desc: '休息/通勤', defaultTime: '17:30' },
            { id: 'work_evening', desc: `晚间工作 (20:00-${String(workEnd).padStart(2,'0')}:00)`, defaultTime: `20:00` },
            { id: 'train', desc: `🏋️ 训练 (2小时)`, defaultTime: `${String(trainStart).padStart(2,'0')}:00` },
            { id: 'post_train', desc: '训练后营养补充', defaultTime: `${String(trainStart+2).padStart(2,'0')}:00` },
            { id: 'sleep', desc: '🛌 睡觉 (养肝血)', defaultTime: `${String(trainStart+3).padStart(2,'0')}:00` }
        ];
    } else {
        schedule = [
            { id: 'wake', desc: '起床 · 喝温水 300ml', defaultTime: '06:30' },
            { id: 'breakfast', desc: '早餐 (养胃健脾)', defaultTime: '07:00' },
            { id: 'work_morning', desc: `上午工作 (${String(workStart).padStart(2,'0')}:00-12:00)`, defaultTime: `${String(workStart).padStart(2,'0')}:00` },
            { id: 'lunch', desc: '午餐 (吃饱)', defaultTime: '12:30' },
            { id: 'work_afternoon', desc: `下午工作 (13:00-${String(workEnd).padStart(2,'0')}:00)`, defaultTime: '13:00' },
            { id: 'snack', desc: '加餐 (补充能量)', defaultTime: '17:30' },
            { id: 'rest', desc: `休息/通勤 (${String(workEnd).padStart(2,'0')}:00-20:00)`, defaultTime: `${String(workEnd).padStart(2,'0')}:00` },
            { id: 'train', desc: '🏋️ 训练 (2小时)', defaultTime: '20:00' },
            { id: 'post_train', desc: '训练后营养补充', defaultTime: '22:00' },
            { id: 'sleep', desc: '🛌 睡觉 (养肝血)', defaultTime: '23:00' }
        ];
    }

    schedule.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'schedule-item';
        const timeInput = document.createElement('input');
        timeInput.type = 'time';
        timeInput.className = 's-time-input';
        const customTime = scheduleCustomTimes[item.id];
        timeInput.value = customTime || item.defaultTime;
        timeInput.step = 60;
        timeInput.addEventListener('change', function() {
            scheduleCustomTimes[item.id] = this.value;
            saveScheduleTimes();
        });
        timeInput.addEventListener('click', function(e) {
            e.stopPropagation();
            this.showPicker && this.showPicker();
        });
        const descSpan = document.createElement('span');
        descSpan.className = 's-desc';
        descSpan.textContent = item.desc;
        div.appendChild(timeInput);
        div.appendChild(descSpan);
        container.appendChild(div);
    });
}

function renderExercises() {
    const container = document.getElementById('exerciseGrid');
    container.innerHTML = '';
    exerciseLibrary.forEach(ex => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        const cachedUrl = getCachedUrl(ex.name);
        const isCached = !!cachedUrl;
        let html = `
            <div class="ex-name">${ex.name} ${isCached ? '<span class="watched-badge">✓ 已缓存</span>' : ''}</div>
            <div class="ex-muscle">🎯 ${ex.muscle}</div>
            <div class="ex-detail">${ex.detail}</div>
        `;
        if (isCached) {
            html += `<a class="video-link" href="${cachedUrl}" target="_blank">▶ 视频演示 ✅</a>`;
            html += ` <button class="del-cache-btn" data-name="${ex.name}">删除缓存</button>`;
        } else {
            const searchUrl = `https://www.douyin.com/search/${encodeURIComponent(ex.searchKey)}`;
            html += `<a class="video-link" href="${searchUrl}" target="_blank">🔍 搜索视频</a>`;
            html += ` <button class="cache-btn" data-name="${ex.name}">缓存视频</button>`;
        }
        card.innerHTML = html;
        container.appendChild(card);
    });
    document.querySelectorAll('#exerciseGrid .cache-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const name = this.dataset.name;
            if (!name) return;
            const url = prompt(`请输入“${name}”的抖音视频链接（或完整的分享链接）:\n例如: https://www.douyin.com/video/xxxxxx`, '');
            if (url && url.trim()) {
                if (cacheVideo(name, url.trim())) {
                    renderExercises();
                    renderTraining();
                } else {
                    alert('缓存失败，请检查链接');
                }
            }
        });
    });
    document.querySelectorAll('#exerciseGrid .del-cache-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const name = this.dataset.name;
            if (!name) return;
            if (confirm(`确定要删除“${name}”的缓存视频吗？`)) {
                if (uncacheVideo(name)) {
                    renderExercises();
                    renderTraining();
                }
            }
        });
    });
}

function renderRecords() {
    const list = document.getElementById('recordList');
    list.innerHTML = '';
    if (weightRecords.length === 0) {
        list.innerHTML = '<div class="text-center" style="color:#5a6f86;padding:12px;">暂无记录</div>';
        return;
    }
    const sorted = [...weightRecords].sort((a,b) => a.date < b.date ? 1 : -1);
    sorted.forEach(rec => {
        const div = document.createElement('div');
        div.className = 'record-item';
        div.innerHTML = `
            <span>${rec.date} &nbsp; ${rec.weight} kg</span>
            <button class="del-btn" data-date="${rec.date}">✕</button>
        `;
        list.appendChild(div);
    });
    document.querySelectorAll('.record-item .del-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const date = this.dataset.date;
            weightRecords = weightRecords.filter(r => r.date !== date);
            saveRecords();
            renderRecords();
            drawWeightChart();
        });
    });
}

function drawWeightChart() {
    const canvas = document.getElementById('weightChart');
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    const W = container.clientWidth - 40;
    const H = 300;
    canvas.width = W * (window.devicePixelRatio || 1);
    canvas.height = H * (window.devicePixelRatio || 1);
    canvas.style.width = W+'px';
    canvas.style.height = H+'px';
    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);

    const pad = { top:30, bottom:40, left:50, right:30 };
    const chartW = W - pad.left - pad.right;
    const chartH = H - pad.top - pad.bottom;

    const sortedRecords = [...weightRecords].sort((a,b) => a.date < b.date ? -1 : 1);
    const recordDates = sortedRecords.map(r => r.date);
    const recordWeights = sortedRecords.map(r => r.weight);

    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - today.getDay() + 1);
    const forecastDates = [];
    const forecastWeights = [];
    for (let i=0; i<12; i++) {
        const d = new Date(startDate);
        d.setDate(d.getDate() + i*7);
        forecastDates.push(d.toISOString().slice(0,10));
        forecastWeights.push(weightForecast[i] || user.currentWeight);
    }

    const allDates = [...forecastDates];
    recordDates.forEach(d => { if (!allDates.includes(d)) allDates.push(d); });
    allDates.sort();

    let showWeekly = false;
    if (allDates.length > 14) showWeekly = true;

    const allWeights = [...forecastWeights, ...recordWeights.filter(w => w !== null)];
    const minW = Math.min(...allWeights) - 2;
    const maxW = Math.max(...allWeights) + 2;

    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = '#111a24';
    ctx.fillRect(0,0,W,H);

    ctx.strokeStyle = '#1f2a37';
    ctx.lineWidth = 0.5;
    for (let i=0; i<6; i++) {
        const y = pad.top + (i/5)*chartH;
        ctx.beginPath(); ctx.moveTo(pad.left,y); ctx.lineTo(W-pad.right,y); ctx.stroke();
        const val = maxW - (i/5)*(maxW-minW);
        ctx.fillStyle = '#5a6f86';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(val.toFixed(1), pad.left-6, y);
    }

    const xStep = chartW / (allDates.length-1 || 1);
    const predPoints = forecastWeights.map((w,i) => ({
        x: pad.left + i*xStep,
        y: pad.top + chartH - ((w-minW)/(maxW-minW||1))*chartH
    }));
    ctx.beginPath();
    predPoints.forEach((p,i) => { if(i===0) ctx.moveTo(p.x,p.y); else ctx.lineTo(p.x,p.y); });
    ctx.strokeStyle = '#fc5c7d';
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    ctx.stroke();

    const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top+chartH);
    grad.addColorStop(0, 'rgba(252,92,125,0.15)');
    grad.addColorStop(0.5, 'rgba(252,92,125,0.05)');
    ctx.beginPath();
    ctx.moveTo(predPoints[0].x, pad.top+chartH);
    predPoints.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(predPoints[predPoints.length-1].x, pad.top+chartH);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    if (recordWeights.some(w => w !== null)) {
        const recPoints = recordWeights.map((w,i) => {
            if (w === null) return null;
            const dateIdx = allDates.indexOf(recordDates[i]);
            if (dateIdx === -1) return null;
            return {
                x: pad.left + dateIdx*xStep,
                y: pad.top + chartH - ((w-minW)/(maxW-minW||1))*chartH,
                date: recordDates[i]
            };
        }).filter(p => p !== null);
        ctx.beginPath();
        recPoints.forEach((p,i) => { if(i===0) ctx.moveTo(p.x,p.y); else ctx.lineTo(p.x,p.y); });
        ctx.strokeStyle = '#4fc3f7';
        ctx.lineWidth = 2;
        ctx.stroke();
        recPoints.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, 2*Math.PI);
            ctx.fillStyle = '#4fc3f7';
            ctx.fill();
            ctx.fillStyle = '#b0c5dd';
            ctx.font = '9px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            const w = recordWeights.find((v,i) => recordDates[i] === p.date);
            if (w !== undefined) ctx.fillText(w.toFixed(1), p.x, p.y-6);
        });
    }

    ctx.fillStyle = '#5a6f86';
    ctx.font = '9px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    if (showWeekly) {
        const weekMap = {};
        allDates.forEach((d, i) => {
            const dateObj = new Date(d);
            const weekNum = Math.floor((dateObj - startDate) / (7*24*60*60*1000));
            if (!weekMap[weekNum]) weekMap[weekNum] = [];
            weekMap[weekNum].push(i);
        });
        Object.keys(weekMap).sort((a,b)=>a-b).forEach(wk => {
            const indices = weekMap[wk];
            const lastIdx = indices[indices.length-1];
            const x = pad.left + lastIdx*xStep;
            const label = `第${parseInt(wk)+1}周`;
            ctx.fillText(label, x, pad.top+chartH+6);
            ctx.beginPath();
            ctx.moveTo(x, pad.top);
            ctx.lineTo(x, pad.top+chartH);
            ctx.strokeStyle = '#1a232e';
            ctx.lineWidth = 0.5;
            ctx.stroke();
        });
        window._weeklyClickPos = Object.keys(weekMap).sort((a,b)=>a-b).map(wk => {
            const indices = weekMap[wk];
            const lastIdx = indices[indices.length-1];
            return { x: pad.left + lastIdx*xStep, week: parseInt(wk)+1 };
        });
    } else {
        allDates.forEach((date, i) => {
            const label = date.slice(5);
            const x = pad.left + i*xStep;
            ctx.fillText(label, x, pad.top+chartH+6);
        });
    }

    const targetY = pad.top + chartH - ((user.targetWeight-minW)/(maxW-minW||1))*chartH;
    ctx.setLineDash([4,4]);
    ctx.strokeStyle = '#4caf50';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(pad.left, targetY);
    ctx.lineTo(W-pad.right, targetY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#4caf50';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    ctx.fillText('🎯 目标 '+user.targetWeight.toFixed(1)+'kg', W-pad.right-100, targetY-4);

    ctx.fillStyle = '#fc5c7d';
    ctx.fillRect(pad.left+10, pad.top-20, 12, 12);
    ctx.fillStyle = '#b0c5dd';
    ctx.font = '9px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('预测', pad.left+26, pad.top-14);
    ctx.fillStyle = '#4fc3f7';
    ctx.fillRect(pad.left+80, pad.top-20, 12, 12);
    ctx.fillStyle = '#b0c5dd';
    ctx.fillText('实际记录', pad.left+96, pad.top-14);
}

// ============================================================
//  体重记录添加与删除
// ============================================================
document.getElementById('addRecordBtn').addEventListener('click', function() {
    const dateInput = document.getElementById('recordDate');
    const weightInput = document.getElementById('recordWeight');
    const date = dateInput.value;
    const weight = parseFloat(weightInput.value);
    if (!date || isNaN(weight) || weight <= 0) {
        alert('请选择日期并输入有效体重');
        return;
    }
    const existing = weightRecords.find(r => r.date === date);
    if (existing) {
        if (!confirm(`日期 ${date} 已有记录 ${existing.weight}kg，是否覆盖？`)) return;
        existing.weight = weight;
    } else {
        weightRecords.push({ date, weight });
    }
    saveRecords();
    renderRecords();
    drawWeightChart();
    dateInput.value = '';
    weightInput.value = '';
});

document.getElementById('clearRecordsBtn').addEventListener('click', function() {
    if (weightRecords.length === 0) return;
    if (confirm('确定要清空所有体重记录吗？')) {
        weightRecords = [];
        saveRecords();
        renderRecords();
        drawWeightChart();
    }
});

// ============================================================
//  编辑个人信息
// ============================================================
const toggleBtn = document.getElementById('toggleEditBtn');
const editForm = document.getElementById('editForm');
const cancelBtn = document.getElementById('cancelEditBtn');
const saveBtn = document.getElementById('saveEditBtn');

toggleBtn.addEventListener('click', ()=>{
    editForm.classList.toggle('active');
    if (editForm.classList.contains('active')) {
        document.getElementById('editName').value = user.name;
        document.getElementById('editGender').value = user.gender;
        document.getElementById('editAge').value = user.age;
        document.getElementById('editHeight').value = user.height;
        document.getElementById('editCurrentWeight').value = user.currentWeight;
        document.getElementById('editTargetWeight').value = user.targetWeight;
        document.getElementById('editTargetBody').value = user.targetBody;
        document.getElementById('editFrequency').value = user.frequency;
        document.getElementById('editTime').value = user.timePerDay;
        document.getElementById('editWorkTime').value = user.workTime;
    }
});
cancelBtn.addEventListener('click', ()=> editForm.classList.remove('active'));
saveBtn.addEventListener('click', ()=>{
    const newName = document.getElementById('editName').value.trim() || '用户';
    const newGender = document.getElementById('editGender').value.trim() || '男';
    const newAge = parseInt(document.getElementById('editAge').value) || 25;
    const newHeight = parseFloat(document.getElementById('editHeight').value) || 165;
    const newCurrent = parseFloat(document.getElementById('editCurrentWeight').value) || 65;
    const newTarget = parseFloat(document.getElementById('editTargetWeight').value) || 60;
    const newTargetBody = document.getElementById('editTargetBody').value.trim() || '胸肌 · 腹肌';
    const newFreq = parseInt(document.getElementById('editFrequency').value) || 5;
    const newTime = parseFloat(document.getElementById('editTime').value) || 2;
    const newWorkTime = document.getElementById('editWorkTime').value;

    user.name = newName; user.gender = newGender; user.age = newAge;
    user.height = newHeight; user.currentWeight = newCurrent; user.targetWeight = newTarget;
    user.targetBody = newTargetBody; user.frequency = Math.min(7,Math.max(1,newFreq));
    user.timePerDay = Math.min(4,Math.max(0.5,newTime));
    user.workTime = newWorkTime;

    weightForecast = generateWeightForecast(user.currentWeight, user.targetWeight, 12);
    // 重新生成训练计划
    trainingData = generateTrainingData();
    // 重置有氧选择 (确保所有天都有记录)
    for (let w=0; w<12; w++) {
        for (let d=0; d<7; d++) {
            const key = w+'_'+d;
            if (!cardioSelections[key]) cardioSelections[key] = '跑步机';
        }
    }
    localStorage.setItem('cardioSelections', JSON.stringify(cardioSelections));
    currentWeek = 0;
    editForm.classList.remove('active');
    renderAll();
});

// ============================================================
//  窗口自适应 & 整体渲染
// ============================================================
function renderAll() {
    renderProfile();
    renderWeekSelector();
    renderTraining();
    renderMeals();
    renderSchedule();
    renderExercises();
    renderRecords();
    updateProgress();
    requestAnimationFrame(() => drawWeightChart());
}

function updateProgress() {
    const current = weightForecast[currentWeek] || user.currentWeight;
    const start = weightForecast[0] || user.currentWeight;
    const target = weightForecast[weightForecast.length-1] || user.targetWeight;
    const totalLoss = start - target;
    const lossSoFar = start - current;
    const pct = totalLoss > 0 ? Math.min(100, (lossSoFar/totalLoss)*100) : 0;
    document.getElementById('progressFill').style.width = pct+'%';
    document.getElementById('progressText').textContent = `已减 ${lossSoFar.toFixed(1)} kg · 目标 ${totalLoss.toFixed(1)} kg`;
    document.getElementById('currentWeightLabel').textContent = current.toFixed(1)+' kg';
}

let resizeTimer;
window.addEventListener('resize', ()=>{
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=> drawWeightChart(), 300);
});

renderAll();
</script>
</body>
</html>