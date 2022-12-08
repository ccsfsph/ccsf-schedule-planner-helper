// ==UserScript==
// @name         CCSF Schedule Planner Helper
// @namespace    https://github.com/ccsfsph/ccsf-schedule-planner-helper
// @version      0.0.2
// @description  This userscript helps student to choose course more convenient
// @author       ccsfsph
// @match        *://ccsf.collegescheduler.com/*
// @match        *://*.ccsf.edu/*
// @icon         data:image/x-icon;base64,AAABAAMAMDAAAAEAIACoJQAANgAAACAgAAABACAAqBAAAN4lAAAQEAAAAQAgAGgEAACGNgAAKAAAADAAAABgAAAAAQAgAAAAAAAAJAAAAAAAAAAAAAAAAAAAAAAAAO+uABvvrgCd764A9O+uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAPTvrgCd764AG++uAJ3vrgD8764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD8764Anu+uAPLvrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A8u+uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrwD/768A/++vAP/vrwD/768A/++vAP/vrwD/768A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/768A/++sAP/tpgD/654A/+mYAP/olQD/6JQA/+iWAP/pmgD/66AA/+2nAP/vrQD/768A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/tpwD/6ZcA/+SHAP/ifQD/4HgA/+B3AP/gdgD/4HYA/+B3AP/gdwD/4XkA/+J+AP/liAD/6ZkA/+6pAP/vrwD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrwD/7qoA/+iVAP/ifwD/4HcA/+B2AP/gdQD/33UA/991AP/gdQD/4HUA/991AP/fdQD/4HUA/+B1AP/gdgD/4HcA/+OCAP/qmwD/760A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++vAP/sowD/5IYA/+B3AP/gdQD/4HUA/+F8Cf/liyf/6Z5L/+yuaP/utnf/77d4/+60c//sqmH/6JtE/+SJI//hegf/4HUA/+B1AP/heQD/55AA/+6rAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/+ufAP/ifwD/4HUA/+B2Af/kiCH/7bFu//bZuf/88eb//vz5//////////////////////////7//vv3//vv4v/21rP/7Kxl/+OEGf/gdQD/4HcA/+aNAP/uqwD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrwD/7KEA/+J+AP/fdQD/4oEU/+61dv/669r///79//////////////////////////////////////////////////////////////38//nkzv/rp1v/4XoH/+B3AP/nkwD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/tqAD/44MA/991AP/mkjX/99u8///+/P/////////////////////////////////////////////////////////////////////////////////++vX/8cKO/+J+EP/heQD/6p0A/++vAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/njwD/4HUA/+icR//669v///////////////////////////////////////////////////////////////////////////////////////////////////79//LImv/jgg7/6ZgA/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/768A/+yiAP/hegD/55c+//vt3v////////////////////////////////////////////////////////////////////////////////////////////////////////////78/P/1z4L/764E/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/+aNAP/jhiD/+OLK///////////////////////////////////////////////////+/v/+/Pf//vz1///9+//////////////////////////////////////////////////++vH/9MdP/++tAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/7agA/+OBBP/xxJL////////////////////////////////////////////++u//+eOp//XNZP/zw0P/88I+//THT//31Hr/++vB///9+P/////////////////////////////////++ez/9c5l/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrwD/6p0A/+eXO//99Oz///////////////////////////////////////zw0P/zxUj/768G/++tAP/vrQD/760A/++tAP/vrQD/8LIP//XPav/99+f///////////////////77//vpuv/zwT7/768D/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrwD/6JUB//LFlf///////////////////////////////////////PLX//K9M//vrQD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++tAP/0yVf//vnu///////99uP/9tJ0//CzEv/vrQD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrQD/6p0d//rq2v///////////////////////////////////fj/9cte/++tAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgP/99eD//rlrv/yvjP/760B/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/urAD/7rJL//76+P/////////////////////////////////77MT/8LMQ/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/8LEM//CxDP/vrQD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/urAD/88l4///////////////////////////////////////31oD/760A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrQD/+NuX///////////////////////////////////9+//0xlH/760A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgL/+eOn//////////////////////////////////358//wtzv/760A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrwL/+eOq//////////////////////////////////338v/sqDj/7qwA/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/+eCf//////////////////////////////////769//qoUX/7KIA/++vAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/7qkA/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrQD/99iG///////////////////////////////////////srmn/5YoA/++tAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++vAP/rnwD/44IA/+iWAP/uqwD/768A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrQD/9ctd///+/f/////////////////////////////////0zqb/4XoE/+eSAP/urAD/768A/++uAP/vrgD/764A/++uAP/vrwD/764A/+ufAP/ifwD/4HUA/+B4AP/liQD/7KQA/++vAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrQD/8rwu//746f/////////////////////////////////88uf/5pEz/+B2AP/liQD/658A/+6pAP/urAD/7qwA/+6qAP/sogD/55AA/+F8AP/geAX/5Icg/+B4BP/gdgD/4n4A/+mYAP/urAD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/77EJ//rntf//////////////////////////////////////9M+m/+F8Df/gdQD/4XkA/+OAAP/khQD/5IUA/+OBAP/hegD/4HYA/991AP/poE7/+unW/++5fv/igBP/33UA/+B4AP/mjQD/7qsA/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/760A//XLX////fv//////////////////////////////////vz6//HBjf/ifxH/33UA/+B1AP/gdgD/4HYA/+B1AP/fdQD/4HgE/+qhUP/77d7////////9/P/22br/55U6/+B3Af/mjgD/760A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A//CzE//76sD////////////////////////////////////////9+//22bn/6qNU/+SHH//ifxD/4n8Q/+OGHv/onEb/88mb//327////////////////////////PHm//C9df/vrhD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++tAP/zxUn//vnt/////////////////////////////////////////////vv5//vu3//548z/+eTN//vt3v/++vb////////////////////////////////////////+/P/546f/8LIP/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgP/99R6///9+v/////////////////////////////////////////////////////////////////////////////////////////////////////////////+/f/32Yj/768F/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/8LEL//jajv///fr///////////////////////////////////////////////////////////////////////////////////////////////////79//ngn//wshD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A//CxC//31X7//vrw/////////////////////////////////////////////////////////////////////////////////////////fj/+N2W//CzE//vrQD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrwT/9MZP//vtyf///vz////////////////////////////////////////////////////////////////////+//3z2v/1zmf/77AK/++tAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/760A//C1F//20Gz/++zE//778/////////////////////////////////////////////789v/88ND/99aA//G5Jf/vrQH/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrQD/8LMP//PBPv/20nX/+eCg//rouf/768L/++vB//rntf/5353/9tN3//PDRP/wtRX/760B/++tAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++tAP/vrQD/764B/++wB//wsQv/8LEK/++wBv/vrgH/760A/++tAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAPLvrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A8u+uAJ3vrgD8764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD8764Ane+uABvvrgCd764A9O+uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAPTvrgCd764AG4AAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAEAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAADvrgBx764A6u+uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgDq764Ace+uAOrvrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgDq764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/768A/++vAP/vrwD/768A/++vAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrwD/764A/+6qAP/sowD/6p0A/+qbAP/qnQD/7KIA/+2oAP/vrgD/768A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/+ylAP/nkQD/44EA/+F5AP/gdgD/4HUA/+B2AP/geAD/4n4A/+aMAP/roQD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++sAP/olgD/4XwA/+B2Af/igRT/5pI1/+mgTv/qpVb/6qFQ/+eWO//jhRz/4HcE/+F5AP/nkgD/7qwA/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/urAD/548A/+B3Af/lji3/8L+I//nlz//99/D//v37///+/f///fv//fjz//rr2//zy5//55g//+B4BP/njwD/760A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/+iTAP/hfAv/7bJw//vv4v/////////////////////////////////////////////////99u7/77uB/+J+Df/plwD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++vAP/roQD/4oEM//HDkP/+/Pn////////////////////////////////////////////////////////////+/fv/8sSO/+qbCf/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/760A/+aMAv/vuHz//v37/////////////////////////////vz3//768P/+/Pf////+///////////////////////+/fn/9c9o/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/tpQD/6Z09//zz6v///////////////////////vjo//jZiv/zw0T/8r4z//PDQ//31n7//fTd//////////////////335f/1zmX/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/768A/+ufBP/0zaH///////////////////////335v/0xkz/760B/++tAP/vrQD/760A/++tAP/yvjT//PHS///++//65a7/8r40/++uAf/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/7aol//vv4v//////////////////////99R6/++tAP/vrgD/764A/++uAP/vrgD/764A/++tAP/zxEb/9c5l//CyDf/vrQD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++tAP/yvk///vz6//////////////////335f/xuin/760A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrQD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/760A//XPbf//////////////////////++vG//CxDf/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrQD/9tN2///////////////////////437v/7akH/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrwD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++tAP/20Gv///////////////////////jhyP/pmw7/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/+yiAP/uqQD/768A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/760A//TGTP///fn//////////////////PLn/+eTLP/qnAD/764A/++vAP/vrwD/768A/++uAP/qmwD/4XsA/+SEAP/roQD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrQD/8bgi//303///////////////////////77p//+F7AP/nkAD/654A/+uhAP/qmwD/5owA/+F7BP/omEH/44Uc/+F6AP/olAD/7qsA/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrwP/+d+b///////////////////////88+n/6qNU/+B3Av/gdgD/4HcA/+B1AP/geAb/66he//zz6v/44cf/6JtG/+J+A//sowD/768A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++tAP/yvzj//ffn///////////////////////99ez/8seX/+qkVf/pnUj/7Kph//TPp//9+PL////////////99O3/9MyE//CzE//vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAf/20nT///35//////////////////////////////38//78+f///v7////////////////////////////99uH/8r0w/++tAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++wCv/32If//vz3/////////////////////////////////////////////////////////////vjq//XKW//vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++wCP/1zmf//fTc//////////////////////////////////////////////79//zuy//0xUr/764C/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++tAf/xuib/99V9//vsxf/++Oj//vz1//789v/++vH//fXg//rot//2z2r/8LYZ/++tAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++tAP/vrQD/8LIO//G7Kf/zwT3/88JB//K/Nv/xuCD/77AI/++tAP/vrQD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/760A/++tAP/vrQD/760A/++tAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgDp764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A6e+uAHHvrgDq764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAOrvrgBxgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAEoAAAAEAAAACAAAAABACAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAA764A2++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrwD/768A/++uAP/vrgD/764A/++uAP/vrgD/764A2++uAP/vrgD/764A/++uAP/vrgD/768A/++tAP/tpgD/66EA/+yiAP/uqQD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/+ykAP/mjgX/5o8g/+eWNf/nlDD/5YwU/+iWAf/urAD/764A/++uAP/vrgD/764A/++uAP/vrgD/768A/+yjAP/omCv/88qe//vu4P/9+PL//fbu//nl0P/tsm7/6ZkK/++tAP/vrgD/764A/++uAP/vrgD/764A/+6rAP/roy//+eXR/////////vz//vnt//789P///////vv7//TKe//vrQH/764A/++uAP/vrgD/764A/++uAP/tqQf/9tWo///////++vD/9tN3//K8LP/zwT7/+uay//303v/1zWH/768C/++uAP/vrgD/764A/++uAP/vrQD/8LYq//306P//////+eCe/++uBP/vrQD/760A//C2Gv/xuib/764B/++uAP/vrgD/764A/++uAP/vrgD/760A//PCQv/+/Pf///////TLa//vrQD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++tAP/zwDn//vvy///////yxH3/7KQA/++uAP/urAD/6ZkA/+qcAP/vrQD/764A/++uAP/vrgD/764A/++uAP/vrgD/8LUW//zvz///////+eXO/+eWJ//mjAD/5owJ/+ytYv/rplT/6pwG/++uAP/vrgD/764A/++uAP/vrgD/764A/++tAP/1z2n///34///////66NX/88ug//bYuf/++fX//fj0//TIYv/vrQD/764A/++uAP/vrgD/764A/++uAP/vrgD/77AJ//fVev/++Or///////////////////35//rns//xuib/760A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgT/8r81//fUef/43ZX/99mI//TIUv/wsxD/760A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++tAP/vrQD/760A/++tAP/vrQD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A2++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A/++uAP/vrgD/764A2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=
// @run-at       document-start
// @license      GPL-3.0
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    // TODO:
    // 1. Remember to fix the switch scheule not work problem, since we need to listen the button event
    // 2. when switch the page, we cannot get the status, that's why we use the setTimeout to listen the page refresh, but this will also cause another problem: when user change from saved schedule to current schuele, the page didn't redener again.

    // NOTE:
    // React
    // we can get the detail date from `span aria-label="xx"`
    // M - Monday
    // W - Wednesday

    const originFetch = fetch;
    // https://juejin.cn/post/7135590843544502308
    window.unsafeWindow.fetch = (url, options) => {
        console.log('unsafeWindow.fetch, url: ', url);
        console.log('unsafeWindow.fetch, options: ', options);
        return originFetch(url, options).then(async (response) => {
            console.log('unsafeWindow.fetch, response ', response);
            if(url.indexOf('/generate') > -1) {
                console.log('unsafeWindow.fetch, get the generate request success');
                // why we have to clone the origin response, otherwise the page cannot continue????
                const responseClone = response.clone();
                console.log('unsafeWindow.fetch, responseClone ', responseClone);
                let res = await responseClone.json();
                console.log('unsafeWindow.fetch, res ', res);
                localStorage.setItem('generate-request', JSON.stringify(res));
            }
            return response;
        });
    };

    // tampermonkey documentation: https://www.tampermonkey.net/documentation.php
    // code example: https://wiki.greasespot.net/GM.xmlHttpRequest

    // ====================== global constants begin ======================
    // use UPPER_CAMEL_CASE to identify this is a constant

    // whether to enable the log, use true to enable, use false to disable
    const IS_LOG_ENABLE = true;

    // identify whether use https or not, true to use https, false to use http
    const IS_USE_HTTPS = true;

    // how many ms to detect whether the user change the page for every times
    const pageRefreshInterval = 500;

    const RMP_AUTHORIZATION_KEY = 'Basic dGVzdDp0ZXN0';

    // ---------------------- constants for Schedule Plnnaer begin ----------------------
    // NOTE: since the website use 'React' to compile, the name of css may change for every compile,
    // may change the name of css every times when the website update
    const SCHEDULE_PLANNER_TABLE_HEAD_CLASS_NAME = 'css-ri4373-headerCss';
    // ---------------------- constants for Schedule Plnnaer end ----------------------

    // ====================== global constants end ======================

    // ====================== global variables begin ======================
    // use like g_userStatus to identify this is a global variable

    var g_pageLoadFinish = false;

    // ---------------------- variables for Schedule Plnnaer begin ----------------------
    var href = '';

    var PAGE;

    // identify user in the chosen schedule page, build scheule page: Current Schedule / Register by CRN
    const PAGE_CURRENT_SCHEDULE = 'PAGE_CURRENT_SCHEDULE';
    // identify user is choosing the course, viewing the potential / possible schedule
    const PAGE_POTENTIAL_SCHEDULE = 'PAGE_POTENTIAL_SCHEDULE';
    const PAGE_UNKNOWN = 'PAGE_UNKNOWN';

    var g_instructorColumnIndex = 0;
    var g_seatsCapacityColumnIndex = 0;
    var g_isUpdateLocationChangeFinish = false;
    var g_isSwitchSheduleUpdateFinish = true;
    var g_tableHeadTotalCell = -1;
    var g_tableHeadCrnIndex = -1;
    var g_tableHeadSeatsOpenIndex = -1;
    // it seems the page use lazy load, which will cause the table didn't render soon, and cause not find the element.
    var g_isFirstLoadSuccess = false;

    // ---------------------- variables for Schedule Plnnaer end ----------------------

    // ====================== global variables end ======================


    // ====================== global functions begin ======================

    // ---------------------- base function begin ----------------------
    function log(...msg) {
        if (IS_LOG_ENABLE) {
            console.log(msg);
        }
    }

    function getRequestURLProtocol() {
        return IS_USE_HTTPS ? 'https://' : 'http://';
    }

    // whther or not the user change location, return true if the location change, return false if the location doesn't change
    function isLocationChange() {
        updateGlobalPageByHref();
        console.log("isLocationChange, href", href);
        console.log("isLocationChange, location.href ", location.href);
        let flag = href !== location.href;
        console.log("isLocationChange, flag ", flag);
        href = location.href;
        if (flag) {
            g_isUpdateLocationChangeFinish = false;
            console.log("isLocationChange, location change");
        }
        return flag;
    }

    function updateGlobalPageByHref() {
        log("invoke updateGlobalPageByHref...");
        let userDisplayURL = location.href;
        // https://ccsf.collegescheduler.com/terms/Spring%202023/options
        if (userDisplayURL.indexOf('/options') !== -1) {
            PAGE = PAGE_CURRENT_SCHEDULE;
        }
        // https://ccsf.collegescheduler.com/terms/Spring%202023/schedules/xxxxx
        else if (userDisplayURL.indexOf('/schedules/') !== -1) {
            PAGE = PAGE_POTENTIAL_SCHEDULE;
        }
        else {
            PAGE = PAGE_UNKNOWN;
        }
    }

    function updateUserSwitchPotentialSchedulePage() {
        if (isLocationChange() && PAGE === PAGE_POTENTIAL_SCHEDULE) {
            g_isSwitchSheduleUpdateFinish = false;
        }
    }
    // ---------------------- base function end ----------------------

    // ---------------------- Third-party API function begin ----------------------

    // ********************** RMP (Rate My Professors) API function begin **********************
    function getProfessorsURL(legacyId) {
        return getRequestURLProtocol() + 'www.ratemyprofessors.com/professor?tid=' + legacyId;
    }

    function getRMPSearchProfessorAPI() {
        return getRequestURLProtocol() + 'www.ratemyprofessors.com/graphql';
    }

    function buildRMPSearchProfessorQuery(professorName) {
        return '{"query":"query NewSearchTeachersQuery(  $query: TeacherSearchQuery!) {  newSearch {    teachers(query: $query) {      didFallback      edges {        cursor        node {          id          legacyId          firstName          lastName          school {            name            id          }          department        }      }    }  }}","variables":{"query":{"text":"' + professorName + '","schoolID":"U2Nob29sLTE4NTA="}}}';
    }

    function buildRMPGetProfessorDetailQuery(id) {
        return '{"query":"query TeacherRatingsPageQuery(  $id: ID!) {  node(id: $id) {    __typename    ... on Teacher {      id      legacyId      firstName      lastName      school {        legacyId        name        id      }      lockStatus      ...StickyHeader_teacher      ...RatingDistributionWrapper_teacher      ...TeacherMetaInfo_teacher      ...TeacherInfo_teacher      ...SimilarProfessors_teacher      ...TeacherRatingTabs_teacher    }    id  }}fragment StickyHeader_teacher on Teacher {  ...HeaderDescription_teacher  ...HeaderRateButton_teacher}fragment RatingDistributionWrapper_teacher on Teacher {  ...NoRatingsArea_teacher  ratingsDistribution {    total    ...RatingDistributionChart_ratingsDistribution  }}fragment TeacherMetaInfo_teacher on Teacher {  legacyId  firstName  lastName  department  school {    name    city    state    id  }}fragment TeacherInfo_teacher on Teacher {  id  lastName  numRatings  ...RatingValue_teacher  ...NameTitle_teacher  ...TeacherTags_teacher  ...NameLink_teacher  ...TeacherFeedback_teacher  ...RateTeacherLink_teacher}fragment SimilarProfessors_teacher on Teacher {  department  relatedTeachers {    legacyId    ...SimilarProfessorListItem_teacher    id  }}fragment TeacherRatingTabs_teacher on Teacher {  numRatings  courseCodes {    courseName    courseCount  }  ...RatingsList_teacher  ...RatingsFilter_teacher}fragment RatingsList_teacher on Teacher {  id  legacyId  lastName  numRatings  school {    id    legacyId    name    city    state    avgRating    numRatings  }  ...Rating_teacher  ...NoRatingsArea_teacher  ratings(first: 20) {    edges {      cursor      node {        ...Rating_rating        id        __typename      }    }    pageInfo {      hasNextPage      endCursor    }  }}fragment RatingsFilter_teacher on Teacher {  courseCodes {    courseCount    courseName  }}fragment Rating_teacher on Teacher {  ...RatingFooter_teacher  ...RatingSuperHeader_teacher  ...ProfessorNoteSection_teacher}fragment NoRatingsArea_teacher on Teacher {  lastName  ...RateTeacherLink_teacher}fragment Rating_rating on Rating {  comment  flagStatus  createdByUser  teacherNote {    id  }  ...RatingHeader_rating  ...RatingSuperHeader_rating  ...RatingValues_rating  ...CourseMeta_rating  ...RatingTags_rating  ...RatingFooter_rating  ...ProfessorNoteSection_rating}fragment RatingHeader_rating on Rating {  date  class  helpfulRating  clarityRating  isForOnlineClass}fragment RatingSuperHeader_rating on Rating {  legacyId}fragment RatingValues_rating on Rating {  helpfulRating  clarityRating  difficultyRating}fragment CourseMeta_rating on Rating {  attendanceMandatory  wouldTakeAgain  grade  textbookUse  isForOnlineClass  isForCredit}fragment RatingTags_rating on Rating {  ratingTags}fragment RatingFooter_rating on Rating {  id  comment  adminReviewedAt  flagStatus  legacyId  thumbsUpTotal  thumbsDownTotal  thumbs {    userId    thumbsUp    thumbsDown    id  }  teacherNote {    id  }}fragment ProfessorNoteSection_rating on Rating {  teacherNote {    ...ProfessorNote_note    id  }  ...ProfessorNoteEditor_rating}fragment ProfessorNote_note on TeacherNotes {  comment  ...ProfessorNoteHeader_note  ...ProfessorNoteFooter_note}fragment ProfessorNoteEditor_rating on Rating {  id  legacyId  class  teacherNote {    id    teacherId    comment  }}fragment ProfessorNoteHeader_note on TeacherNotes {  createdAt  updatedAt}fragment ProfessorNoteFooter_note on TeacherNotes {  legacyId  flagStatus}fragment RateTeacherLink_teacher on Teacher {  legacyId  numRatings  lockStatus}fragment RatingFooter_teacher on Teacher {  id  legacyId  lockStatus  isProfCurrentUser}fragment RatingSuperHeader_teacher on Teacher {  firstName  lastName  legacyId  school {    name    id  }}fragment ProfessorNoteSection_teacher on Teacher {  ...ProfessorNote_teacher  ...ProfessorNoteEditor_teacher}fragment ProfessorNote_teacher on Teacher {  ...ProfessorNoteHeader_teacher  ...ProfessorNoteFooter_teacher}fragment ProfessorNoteEditor_teacher on Teacher {  id}fragment ProfessorNoteHeader_teacher on Teacher {  lastName}fragment ProfessorNoteFooter_teacher on Teacher {  legacyId  isProfCurrentUser}fragment SimilarProfessorListItem_teacher on RelatedTeacher {  legacyId  firstName  lastName  avgRating}fragment RatingValue_teacher on Teacher {  avgRating  numRatings  ...NumRatingsLink_teacher}fragment NameTitle_teacher on Teacher {  id  firstName  lastName  department  school {    legacyId    name    id  }  ...TeacherDepartment_teacher  ...TeacherBookmark_teacher}fragment TeacherTags_teacher on Teacher {  lastName  teacherRatingTags {    legacyId    tagCount    tagName    id  }}fragment NameLink_teacher on Teacher {  isProfCurrentUser  id  legacyId  firstName  lastName  school {    name    id  }}fragment TeacherFeedback_teacher on Teacher {  numRatings  avgDifficulty  wouldTakeAgainPercent}fragment TeacherDepartment_teacher on Teacher {  department  departmentId  school {    legacyId    name    id  }}fragment TeacherBookmark_teacher on Teacher {  id  isSaved}fragment NumRatingsLink_teacher on Teacher {  numRatings  ...RateTeacherLink_teacher}fragment RatingDistributionChart_ratingsDistribution on ratingsDistribution {  r1  r2  r3  r4  r5}fragment HeaderDescription_teacher on Teacher {  id  firstName  lastName  department  school {    legacyId    name    city    state    id  }  ...TeacherTitles_teacher  ...TeacherBookmark_teacher}fragment HeaderRateButton_teacher on Teacher {  ...RateTeacherLink_teacher}fragment TeacherTitles_teacher on Teacher {  department  school {    legacyId    name    id  }}","variables":{"id":"' + id + '"}}';
    }

    // set extParams a default value, otherwise it will display undefined
    function setInstructorElement(professorName, changeHerfElement, url, extParams = '') {
        log('setInstructorElement, professorName', professorName);
        log('setInstructorElement, changeHerfElement', changeHerfElement);
        log('setInstructorElement, extParams', extParams);
        if (changeHerfElement) {
            // remove the origin innerHTML
            changeHerfElement.innerHTML = '';
            log('searchProfessorByRMP, remove the origin innerHTML');
            let aElement = document.createElement('a');
            aElement.setAttribute('href', url);
            aElement.setAttribute('target', '_blank');
            // NOTE: DONT use innerText here, because I want to contain the html characters in extParams
            aElement.innerHTML = professorName + extParams;
            changeHerfElement.appendChild(aElement);
        }
    }

    function getProfessRateShowFormat(avgRating, numRatings) {
        // TODO: strengthen the avgRating to use different color
        // >= 4.1: red
        // 3.3 - 4.0: green
        // < 3.3: blue
        if (avgRating >= 4.1) {
            avgRating = '<span style="color: red;">' + avgRating + '</span>';
        }
        else if (avgRating >= 3.3) {
            avgRating = '<span style="color: green;">' + avgRating + '</span>';
        }
        else {
            avgRating = '<span style="color: blue;">' + avgRating + '</span>';
        }
        return '<br>' + avgRating + ' / 5<br>' + numRatings + ' ratings';
    }

    // TODO: CACHE THE TEACHER ALREADY SEARCH ON LOCAL STORAGE: boost next redenr speed
    function searchProfessorByRMP(professorName, changeHerfElement) {
        console.log('invoke searchProfessorByRMP');
        console.log('searchProfessorByRMP, professorName ', professorName);
        console.log('searchProfessorByRMP, changeHerfElement ', changeHerfElement);

        let localStorageProfessorPropertyJSON = localStorage.getItem(professorName);
        console.log('searchProfessorByRMP, localStorageProfessorPropertyJSON ', localStorageProfessorPropertyJSON);
        if (localStorageProfessorPropertyJSON) {
            log('searchProfessorByRMP, nice, found the data from localStorage, not invoke from third-party!');
            let localStorageProfessorProperty = JSON.parse(localStorageProfessorPropertyJSON);
            console.log('searchProfessorByRMP, localStorageProfessorProperty ', localStorageProfessorProperty);
            let url = getProfessorsURL(localStorageProfessorProperty.legacyId);
            setInstructorElement(professorName, changeHerfElement, url);
            // add data
            let id = localStorageProfessorProperty.id;
            console.log('searchProfessorByRMP, id ', id);
            let localStorageProfessorDetailJSON = localStorage.getItem(id);
            console.log('searchProfessorByRMP, localStorageProfessorDetailJSON ', localStorageProfessorDetailJSON);
            let localStorageProfessorDetail = JSON.parse(localStorageProfessorDetailJSON);
            console.log('searchProfessorByRMP, localStorageProfessorDetail ', localStorageProfessorDetail);
            let avgRating = localStorageProfessorDetail.data.node.avgRating;
            console.log('searchProfessorByRMP, avgRating ', avgRating);
            let numRatings = localStorageProfessorDetail.data.node.numRatings;
            console.log('searchProfessorByRMP, numRatings ', numRatings);
            setInstructorElement(professorName, changeHerfElement, url, getProfessRateShowFormat(avgRating, numRatings));
            return;
        }
        let requetURL = getRMPSearchProfessorAPI();
        console.log('searchProfessorByRMP, requetURL ', requetURL);
        let requestData = buildRMPSearchProfessorQuery(professorName);
        console.log('searchProfessorByRMP, requestData ', requestData);
        GM_xmlhttpRequest({
            method: "POST",
            url: requetURL,
            headers: {
                'Authorization': RMP_AUTHORIZATION_KEY,
                'Content-Type': 'text/plain',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.56',
                'Accept': 'application/json',
            },
            data: requestData,
            onload: function(response) {
                console.log('searchProfessorByRMP, response ', response);
                let jsonText = response.responseText;
                console.log('searchProfessorByRMP, jsonText ', jsonText);
                let dataObj = JSON.parse(jsonText);
                console.log('searchProfessorByRMP, dataObj ', dataObj);
                let teachers = dataObj.data.newSearch.teachers.edges;
                console.log('searchProfessorByRMP, teachers ', teachers);

                // TODO: when return multi teachers, the result show on the page is not always correct!
                let teacher = teachers[0];
                console.log('searchProfessorByRMP, teacher ', teacher);
                // cannot search any info for the teacher in RMP
                if (!teacher) {
                    log('searchProfessorByRMP, cannot search any info for the teacher in RMP');
                    return;
                }
                let teacherProperty = teacher.node;
                console.log('searchProfessorByRMP, teacherProperty ', teacherProperty);
                // legacyId: 2445727
                let legacyId = teacherProperty.legacyId;
                console.log('searchProfessorByRMP, legacyId ', legacyId);
                // department: "Computer amp Informational Tech."
                let department = teacherProperty.department;
                console.log('searchProfessorByRMP, department ', department);
                // firstName: "Jonathan"
                let firstName = teacherProperty.firstName;
                console.log('searchProfessorByRMP, firstName ', firstName);
                // lastName: "Potter"
                let lastName = teacherProperty.lastName;
                console.log('searchProfessorByRMP, lastName ', lastName);
                // id: "VGVhY2hlci0yNDQ1NzI3"
                let id = teacherProperty.id;
                console.log('searchProfessorByRMP, id ', id);

                let professionPageURL = getProfessorsURL(legacyId);
                console.log('searchProfessorByRMP, professionPageURL ', professionPageURL);

                localStorage.setItem(professorName, JSON.stringify(teacherProperty));

                setInstructorElement(professorName, changeHerfElement, professionPageURL);

                // use the id to get the professor detail
                let searchProfessorDetailData = buildRMPGetProfessorDetailQuery(id);
                GM_xmlhttpRequest({
                    method: "POST",
                    url: requetURL,
                    headers: {
                        'Authorization': RMP_AUTHORIZATION_KEY,
                        'Content-Type': 'text/plain',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.56',
                        'Accept': 'application/json',
                    },
                    data: searchProfessorDetailData,
                    onload: function(response) {
                        console.log('searchProfessorByRMP, professorDetail, response ', response);
                        let jsonText = response.responseText;
                        console.log('searchProfessorByRMP, professorDetail, jsonText ', jsonText);
                        let dataObj = JSON.parse(jsonText);
                        console.log('searchProfessorByRMP, professorDetail, dataObj ', dataObj);
                        let professorDetail = dataObj.data.node;
                        console.log('searchProfessorByRMP, professorDetail ', professorDetail);

                        if (!professorDetail) {
                            log('searchProfessorByRMP, professorDetail is null ', professorDetail);
                            return;
                        }

                        // avgRating: 2.3
                        let avgRating = professorDetail.avgRating;
                        log('searchProfessorByRMP, professorDetail, avgRating', avgRating);
                        // avgDifficulty: 2
                        let avgDifficulty = professorDetail.avgDifficulty;
                        log('searchProfessorByRMP, professorDetail, avgDifficulty', avgDifficulty);
                        // numRatings: 4
                        let numRatings = professorDetail.numRatings;
                        log('searchProfessorByRMP, professorDetail, numRatings', numRatings);

                        localStorage.setItem(id, jsonText);

                        setInstructorElement(professorName, changeHerfElement, professionPageURL, getProfessRateShowFormat(avgRating, numRatings));
                    }
                });
            }
        });
    }

    //searchProfessorByRMP('Conner, Constance')
    // ********************** RMP (Rate My Professors) API function end **********************

    // ---------------------- Third-party API function end ----------------------

    // ---------------------- Schedule Planner function begin ----------------------
    function getScheduleByCRN(crn) {
        log('getScheduleByCRN, crn ' + crn);
        let scheduleJSONData = localStorage.getItem('generate-request');
        log('getScheduleByCRN, scheduleJSONData ' + scheduleJSONData);
        let scheduleData = JSON.parse(scheduleJSONData);
        let scheduleDataSections = scheduleData.sections;
        for (let scheduleDataSection of scheduleDataSections) {
            log('getScheduleByCRN, scheduleDataSection ', scheduleDataSection);
            if (scheduleDataSection.id === crn) {
                return scheduleDataSection;
            }
        }
    }
    // ---------------------- Schedule Planner function end ----------------------

    // ====================== global functions end ======================

    //

    console.log("loading ...");

    window.onload = function() {
        console.log("window.onload()");

        g_pageLoadFinish = true;
        // TODO open the page, may be not render finish, it will cause cannot find the element, emmm....
    }

    // NOTE: only use setInterval method can work when the page location change,
    // I also try to use event listner, but it doesn't work, I guess because the website use href to change location instead of hash.
    // plus, click the `generate` button to change href address is not working as well (I am also curious why?)
    // This method can work, but low efficiency (sam left).
    setInterval(function() {
        log("page detector works! invoke for every " + pageRefreshInterval + " ms");
        if (g_pageLoadFinish) {
            console.log("page load finish, begin to render page");
            updateUserSwitchPotentialSchedulePage();
            let flag = (!g_isFirstLoadSuccess && (PAGE === PAGE_POTENTIAL_SCHEDULE || PAGE === PAGE_CURRENT_SCHEDULE));
            console.log("g_pageLoadFinish, flag, ", flag);
            if (!g_isUpdateLocationChangeFinish || flag) {
                handleSchedulePlannerPage();
            }
        } else {
            console.log("page not load finish, waiting for next time invoke");
        }
    }, pageRefreshInterval);

    function showCurrentSchedule(tHeadElement, instructorRowIndex) {
        console.log('showCurrentSchedule, tHeadElement ', tHeadElement);
        console.log('showCurrentSchedule, instructorRowIndex ', instructorRowIndex);
        // now, let us get the real name for each row
        for (let tHeadElementRow of tHeadElement.rows) {
            console.log(tHeadElementRow);
        }

        let tableElements = tHeadElement.parentElement;
        console.log('showCurrentSchedule, tableElements ', tableElements);
        let tableBodyElements = tableElements.getElementsByTagName('tbody');
        console.log('showCurrentSchedule, tableBodyElements ', tableBodyElements);
        for (let tableBodyElement of tableBodyElements) {
            console.log('showCurrentSchedule, tableBodyElement ', tableBodyElement);
            let tableBodyElementTrs = tableBodyElement.getElementsByTagName('tr');
            console.log('showCurrentSchedule, tableBodyElementTrs ', tableBodyElementTrs);
            // get the first only, contain the table head data
            let tableBodyElementTr = tableBodyElementTrs[0];
            console.log('showCurrentSchedule, tableBodyElementTr ', tableBodyElementTr);
            let tableBodyElementTrTd = tableBodyElementTr.getElementsByTagName('td');
            console.log('showCurrentSchedule, tableBodyElementTrTd ', tableBodyElementTrTd)
            let instrctorNameElement = tableBodyElementTrTd[instructorRowIndex];
            console.log('showCurrentSchedule, instrctorNameElement ', instrctorNameElement);
            let instrctorNameElementSpans = instrctorNameElement.getElementsByTagName('span');
            console.log('showCurrentSchedule, instrctorNameElementSpans ', instrctorNameElementSpans);
            let instrctorNameElementSpan = instrctorNameElementSpans[0];
            console.log('showCurrentSchedule, instrctorNameElementSpan ', instrctorNameElementSpan);
            if (!instrctorNameElementSpan) {
                console.log('showCurrentSchedule, skip, !instrctorNameElementSpan ', instrctorNameElementSpan);
                continue;
            }
            let instructorName = instrctorNameElementSpan.innerText;
            console.log('showCurrentSchedule, instructorName', instructorName);
            searchProfessorByRMP(instructorName, instrctorNameElementSpan);
        }
    }

    function showPotentialSchedule(tHeadElement, instructorRowIndex) {
        console.log('showPotentialSchedule, tHeadElement ', tHeadElement);
        console.log('showPotentialSchedule, instructorRowIndex ', instructorRowIndex);
        let tableHeadthRows = tHeadElement.rows[0];
        log('showPotentialSchedule, tableHeadthRows', tableHeadthRows);
        let tableHeadColumnindex = -1;
        let seatsOpenIndex = -1;
        let crnIndex = -1;
        let tableHeadthRowsThElements = tableHeadthRows.getElementsByTagName('th');
        let tableHeadTotalCell = tableHeadthRowsThElements.length;
        log('showPotentialScheduleSwitchPage, tableHeadTotalCell ', tableHeadTotalCell);
        for (let tableHeadthRow of tableHeadthRowsThElements) {
            tableHeadColumnindex++;
            log('showPotentialSchedule, tableHeadColumnindex', tableHeadColumnindex);
            log('showPotentialSchedule, tableHeadthRow', tableHeadthRow);
            // display order: Seats Capacity、Seats Open、Seats Filled
            // first, add 'Seats Capacity' before 'Seats Open'
            if (tableHeadthRow.innerText === 'Seats Open') {
                seatsOpenIndex = tableHeadColumnindex;
            }
            if (tableHeadthRow.innerText === 'CRN #') {
                crnIndex = tableHeadColumnindex;
            }
        }
        log('showPotentialSchedule, seatsOpenIndex', seatsOpenIndex);

        tableHeadTotalCell += 1;
        let seatsCapacityCell = tableHeadthRows.insertCell(seatsOpenIndex);
        log('showPotentialSchedule, seatsCapacityCell', seatsCapacityCell);
        seatsCapacityCell.innerText = 'Seats Capacity';
        g_seatsCapacityColumnIndex = seatsCapacityCell.cellIndex;
        console.log("showPotentialSchedule, g_seatsCapacityColumnIndex, ", g_seatsCapacityColumnIndex);

        tableHeadTotalCell += 1;
        let instructorCell = tableHeadthRows.insertCell(seatsOpenIndex);
        log('showPotentialSchedule, instructorCell', instructorCell);
        instructorCell.innerText = 'Instructor';
        g_instructorColumnIndex = instructorCell.cellIndex;
        console.log("showPotentialSchedule, g_instructorColumnIndex, ", g_instructorColumnIndex);

        g_tableHeadTotalCell = tableHeadTotalCell;
        g_tableHeadCrnIndex = crnIndex;
        g_tableHeadSeatsOpenIndex = seatsOpenIndex;
        potentialSheduleCellAddData(tHeadElement)
    }

    function potentialSheduleCellAddData(tHeadElement) {
        g_isSwitchSheduleUpdateFinish = true;
        let tableHeadTotalCell = g_tableHeadTotalCell;
        let crnIndex = g_tableHeadCrnIndex;
        let seatsOpenIndex = g_tableHeadSeatsOpenIndex;
        // begin to add the data
        let tableElement = tHeadElement.parentElement;
        log('showPotentialSchedule, tableElement ', tableElement);
        let tableElementBodyElements = tableElement.getElementsByTagName('tbody');
        log('showPotentialSchedule, tableElementBodyElements ', tableElementBodyElements);
        for (let tableElementBodyElement of tableElementBodyElements) {
            log('showPotentialSchedule, tableElementBodyElement ', tableElementBodyElement);
            // add cell data
            let tableElementBodyElementTrElement = tableElementBodyElement.getElementsByTagName('tr')[0];
            log('showPotentialSchedule, tableElementBodyElementTrElement ', tableElementBodyElementTrElement);
            let tableElementBodyElementTrElementCells = tableElementBodyElementTrElement.cells;
            log('showPotentialSchedule, tableElementBodyElementTrElementCells, ', tableElementBodyElementTrElementCells);
            let tableElementBodyElementTrElementCellsTotalCell = tableElementBodyElementTrElementCells.length;
            log('showPotentialSchedule, tableElementBodyElementTrElementCellsTotalCell, ', tableElementBodyElementTrElementCellsTotalCell);
            if (tableElementBodyElementTrElementCellsTotalCell === tableHeadTotalCell) {
                log('showPotentialSchedule, skip this body, no change');
                continue;
            }
            let crn = '';
            let crnCell = tableElementBodyElementTrElementCells[crnIndex];
            log('showPotentialSchedule, crnCell ', crnCell);
            crn = crnCell.innerText;
            log('showPotentialSchedule, crn ', crn);

            let seatsCapacityCellValueElement = tableElementBodyElementTrElement.insertCell(seatsOpenIndex);
            log('showPotentialSchedule, seatsCapacityCellValueElement ', seatsCapacityCellValueElement);
            seatsCapacityCellValueElement.innerText = getScheduleByCRN(crn).seatsCapacity;

            let instructorCellValueElement = tableElementBodyElementTrElement.insertCell(seatsOpenIndex);
            log('showPotentialSchedule, instructorCellValueElement ', instructorCellValueElement);
            // I think we have better to get the instructor name from the ! 'show questions detail' button, but it doesn't matter. since that data get from api as well
            // and instructor may have multi one, use this to keep it normal
            let instructorName = getScheduleByCRN(crn).instructor[0].name;
            log('showPotentialSchedule, instructorName', instructorName);
            instructorCellValueElement.innerText = instructorName;
            searchProfessorByRMP(instructorName, instructorCellValueElement);

            // expand the cell for table body
            let tableElementBodyElementTdElements = tableElementBodyElement.getElementsByTagName('td');
            log('showPotentialSchedule, tableElementBodyElementTdElements ', tableElementBodyElementTdElements);
            for (let tableElementBodyElementTdElement of tableElementBodyElementTdElements) {
                log('showPotentialSchedule, tableElementBodyElementTdElement ', tableElementBodyElementTdElement);
                let tableElementBodyElementTdElementAttribute = tableElementBodyElementTdElement.getAttribute('colspan');
                if (tableElementBodyElementTdElementAttribute) {
                    log('showPotentialSchedule, tableElementBodyElementTdElementAttribute ', tableElementBodyElementTdElementAttribute);
                    tableElementBodyElementTdElement.setAttribute('colspan', tableHeadTotalCell);
                }
            }
        }

        // expand the body foot cell colspan
        let tableElementFootElements = tableElement.getElementsByTagName('tfoot');
        log('showPotentialSchedule, tableElementFootElements ', tableElementFootElements);
        for (let tableElementFootElement of tableElementFootElements) {
            log('showPotentialSchedule, tableElementFootElement ', tableElementFootElement);
            let tableElementFootElementTdElements = tableElementFootElement.getElementsByTagName('td');
            log('showPotentialSchedule, tableElementFootElementTdElements ', tableElementFootElementTdElements);
            for (let tableElementFootElementTdElement of tableElementFootElementTdElements) {
                log('showPotentialSchedule, tableElementFootElementTdElement ', tableElementFootElementTdElement);
                let tableElementFootElementTdElementAttribute = tableElementFootElementTdElement.getAttribute('colspan');
                if (tableElementFootElementTdElementAttribute) {
                    log('showPotentialSchedule, tableElementFootElementTdElementAttribute ', tableElementFootElementTdElementAttribute);
                    // because the show num is not in the last column, that's why need to -1
                    tableElementFootElementTdElement.setAttribute('colspan', tableHeadTotalCell - 1);
                }
            }
        }
    }

    // in potential schedule, user switch to differnt schedule
    function showPotentialScheduleSwitchPage(tHeadElement, instructorRowIndex) {
        console.log('showPotentialScheduleSwitchPage, tHeadElement ', tHeadElement);
        console.log('showPotentialScheduleSwitchPage, instructorRowIndex ', instructorRowIndex);
        // the table head will not change, only change the differnt course!
        let tableHeadthRows = tHeadElement.rows[0];
        log('showPotentialSchedule, tableHeadthRows', tableHeadthRows);
    }

    function handleSchedulePlannerPage() {
        g_isUpdateLocationChangeFinish = true;
        // const SCHEDULE_PLANNER_TABLE_HEAD_CLASS_NAME = 'css-ri4373-headerCss';
        let tHeadElements = document.getElementsByClassName(SCHEDULE_PLANNER_TABLE_HEAD_CLASS_NAME);
        if (tHeadElements) {
            log(" schedule planner page ");
            console.log('handleSchedulePlannerPage, tHeadElements ', tHeadElements);
            // the first row is the table title head
            let tHeadElement = tHeadElements[0];
            if (!tHeadElement) {
                return log('handleSchedulePlannerPage, no tHeadElement found');
            }
            console.log('handleSchedulePlannerPage, tHeadElement ', tHeadElement);
            let tHeadtrElement = tHeadElement.rows[0];
            log('handleSchedulePlannerPage, tHeadtrElement ', tHeadtrElement);
            let tHeadtrElementCells = tHeadtrElement.cells;
            log('handleSchedulePlannerPage, tHeadtrElementCells ', tHeadtrElementCells);
            // we should get the column index, and use the index to get the row for each instrutor name
            let instructorRowIndex = -1;
            for (let tHeadtrElementCell of tHeadtrElementCells) {
                instructorRowIndex++;
                log('handleSchedulePlannerPage, tHeadtrElementCellIndex ', instructorRowIndex);
                log('handleSchedulePlannerPage, tHeadtrElementCell ', tHeadtrElementCell);
                // try to find the text 'Instructor' Element
                let cellText = tHeadtrElementCell.innerText;
                log('handleSchedulePlannerPage, tHeadtrElementCell, cellText', cellText);
                if (cellText === 'Instructor') {
                    console.log('handleSchedulePlannerPage, tHeadtrElementCell: found the Instructor element', tHeadtrElementCell);
                    break;
                }
            }
            console.log('handleSchedulePlannerPage, instructorRowIndex ' + instructorRowIndex);
            g_isFirstLoadSuccess = true;
            // may be we need to change another way to identify whther the column is exist in the table
            // the build scheuled page and enrolled page have different table title head
            // the index begin from zero, however the length starts with 1 when the index is zero!!
            // NOTE: in possible schedule page, if the user switch course, there is definitely one table body will change
            // therefore, we need to get the table head total cell num, and each body num, if one of them is different, we need to invoke it again
            // no found the instructor index, because the last cell is not instrctuor index
            if (instructorRowIndex == tHeadtrElementCells.length - 1) {
                console.log('handleSchedulePlannerPage, instructorRowIndex not found');
                showPotentialSchedule(tHeadElement, instructorRowIndex);
                return;
            }
            if (!g_isSwitchSheduleUpdateFinish) {
                console.log("handleSchedulePlannerPage, g_isSwitchSheduleUpdateFinish ", g_isSwitchSheduleUpdateFinish);
                potentialSheduleCellAddData(tHeadElement);
                return;
            }
            showCurrentSchedule(tHeadElement, instructorRowIndex);
        } else {
            log("not in schedule planner page");
        }
    }

})();