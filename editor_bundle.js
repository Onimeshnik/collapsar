/**
 * COLLAPSAR - StarWarsRP Config Editor Native Bundle
 * Scoped & Isolated IIFE
 */
(function() {
  'use strict';

const BUNDLED_DATA = {"categories":[{"name":"Администраторы","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":115,"g":22,"b":158,"a":255},"description":"","icon":"","formation_id":""},{"name":"Рекрутская","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":148,"g":196,"b":126,"a":255},"description":"","icon":"","formation_id":""},{"name":"Штабные единицы","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":97,"g":35,"b":60,"a":255},"description":"","icon":"","formation_id":""},{"name":"Великая Армия Республики","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":97,"g":35,"b":60,"a":255},"description":"","icon":"","formation_id":""},{"name":"Носители силы","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":83,"g":186,"b":237,"a":255},"description":"","icon":"","formation_id":""},{"name":"Корпус CT","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":0,"g":0,"b":100,"a":255},"description":"","icon":"","formation_id":""},{"name":"16-я Эскадрилья","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":56,"g":56,"b":56,"a":255},"description":"","icon":"","formation_id":""},{"name":"Рота Аврора","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":154,"g":77,"b":77,"a":255},"description":"","icon":"","formation_id":""},{"name":"74-й Взвод","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":63,"g":102,"b":0,"a":255},"description":"","icon":"","formation_id":""},{"name":"Служба безопасности","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":179,"g":28,"b":28,"a":255},"description":"","icon":"","formation_id":""},{"name":"Бригада Специальных Операций","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":0,"g":0,"b":0,"a":255},"description":"","icon":"","formation_id":""},{"name":"Сепаратисты","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":21,"g":20,"b":96,"a":255},"description":"","icon":"","formation_id":""},{"name":"Жители","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":154,"g":104,"b":10,"a":255},"description":"","icon":"","formation_id":""},{"name":"Дозор Смерти","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":22,"g":86,"b":158,"a":255},"description":"","icon":"","formation_id":""},{"name":"Орден Джедаев","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":82,"g":94,"b":210,"a":255},"description":"","icon":"","formation_id":""},{"name":"Взвод SSO","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":218,"g":172,"b":66,"a":255},"description":"","icon":"","formation_id":""},{"name":"Пираты","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":165,"g":105,"b":55,"a":255},"description":"","icon":"","formation_id":""},{"name":"Бойцы поддержки","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":88,"g":166,"b":185,"a":255},"description":"","icon":"","formation_id":""},{"name":"Батальон «Сарлакк»","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":86,"g":146,"b":72,"a":255},"description":"","icon":"","formation_id":""},{"name":"Рота «Лавина»","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":90,"g":132,"b":220,"a":255},"description":"","icon":"","formation_id":""},{"name":"Корусантская Гвардия","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":181,"g":58,"b":58,"a":255},"description":"","icon":"","formation_id":""},{"name":"Волчья стая","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":131,"g":41,"b":70,"a":255},"description":"","icon":"","formation_id":""},{"name":"Республика","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":50,"g":70,"b":100,"a":255},"description":"","icon":"","formation_id":""},{"name":"Doom Company","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":32,"g":131,"b":48,"a":255},"description":"","icon":"","formation_id":""},{"name":"Передовой Полк","tcolor":{"r":255,"g":255,"b":255,"a":255},"bcolor":{"r":40,"g":60,"b":90,"a":255},"description":"","icon":"","formation_id":""}],"jobs":[{"teamVar":"TEAM_ADMIN","name":"Администратор","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/player/police.mdl","skin":0,"weapons":["weapon_physgun","gmod_tool"],"jobID":"a1","groupId":"admin","cat":"Администраторы","spawnGroup":"Administration","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":99999,"maxHealth":99999,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)\n\t\tply:SetHealth(99999)\n\t\tply:SetMaxHealth(99999)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Cadets","name":"Рекрут","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/unarmored/unarmored_combo.mdl","skin":6,"weapons":[],"jobID":"cadet","groupId":"Recrut","cat":"Рекрутская","spawnGroup":"Clones","rank":"RCT","spec":"","bodygroups":{"0":0,"1":1,"2":0,"3":3,"4":0,"5":0,"6":0,"7":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":0,"maxArmor":0,"playerSpawn":"ply:SetMaxArmor(0)\n\t\tply:SetArmor(0)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_OBSLUZHIVAYUSHCHIY_PERSONAL","name":"Обслуживающий персонал","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/unarmored/unarmored_combo.mdl","skin":6,"weapons":[],"jobID":"Obslygaebana","groupId":"Recrut","cat":"Рекрутская","spawnGroup":"Clones","rank":"RCT","spec":"","bodygroups":{"0":0,"1":1,"2":0,"3":1,"4":0,"5":0,"6":0,"7":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":0,"maxArmor":0,"playerSpawn":"ply:SetMaxArmor(0)\n\t\tply:SetArmor(0)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_CIS11110","name":"Корпус CT | Подозрительный Боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/shpion/bx.mdl","skin":0,"weapons":[],"jobID":"CIS11110","groupId":"CIS","cat":"Корпус CT","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":300,"maxArmor":300,"playerSpawn":"ply:SetMaxArmor(300)\n\t\tply:SetArmor(300)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_CT1","name":"Корпус CT | Боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/trooper/trooper_ct.mdl","skin":0,"weapons":[],"jobID":"Soldier","groupId":"CT","cat":"Корпус CT","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_ROTA_DOOM_BOETS","name":"Рота Doom | Боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":24,"g":89,"b":24,"a":255},"worldModel":"models/doom/trooper_new.mdl","skin":0,"weapons":[],"jobID":"Doomsld","groupId":"Doom","cat":"Doom Company","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_ROTA_DOOM_ARC","name":"Рота Doom | ARC","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":24,"g":89,"b":24,"a":255},"worldModel":"models/doom/arc.mdl","skin":0,"weapons":[],"jobID":"DoomARC","groupId":"Doom","cat":"Doom Company","spawnGroup":"Clones","rank":"MSG","spec":"ARC","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_ROTA_DOOM_INZHENER","name":"Рота Doom | Инженер","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":24,"g":89,"b":24,"a":255},"worldModel":"models/doom/eng.mdl","skin":0,"weapons":[],"jobID":"DoomENG","groupId":"Doom","cat":"Doom Company","spawnGroup":"Clones","rank":"","spec":"ENG","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_ROTA_DOOM_DESANTNIK","name":"Рота Doom | Десантник","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":24,"g":89,"b":24,"a":255},"worldModel":"models/doom/para.mdl","skin":0,"weapons":[],"jobID":"DoomPR","groupId":"Doom","cat":"Doom Company","spawnGroup":"Clones","rank":"","spec":"PR","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_ROTA_DOOM_PILOT","name":"Рота Doom | Пилот","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":24,"g":89,"b":24,"a":255},"worldModel":"models/doom/pilot.mdl","skin":0,"weapons":[],"jobID":"DoomPIL","groupId":"Doom","cat":"Doom Company","spawnGroup":"Clones","rank":"","spec":"PIL","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_ROTA_DOOM_PILOT_COPY","name":"Рота Doom | Щитовик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":24,"g":89,"b":24,"a":255},"worldModel":"models/doom/trooper.mdl","skin":0,"weapons":[],"jobID":"DoomSHIT","groupId":"Doom","cat":"Doom Company","spawnGroup":"Clones","rank":"","spec":"SD","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_ROTA_DOOM_RAZVEDCHIK","name":"Рота Doom | Разведчик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":24,"g":89,"b":24,"a":255},"worldModel":"models/doom/arf.mdl","skin":0,"weapons":[],"jobID":"DoomRazved","groupId":"Doom","cat":"Doom Company","spawnGroup":"Clones","rank":"","spec":"ARF","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_ROTA_DOOM_PILOT_COPY_COPY","name":"Рота Doom | Тяжелый боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":24,"g":89,"b":24,"a":255},"worldModel":"models/doom/heavy.mdl","skin":0,"weapons":[],"jobID":"DoomSHIT_copy_5980","groupId":"Doom","cat":"Doom Company","spawnGroup":"Clones","rank":"","spec":"HEV","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_ROTA_DOOM_KOMANDIR_DOOM","name":"Рота Doom | Командир Doom","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":24,"g":89,"b":24,"a":255},"worldModel":"models/doom/doom.mdl","skin":0,"weapons":[],"jobID":"DoomCMD","groupId":"Doom","cat":"Doom Company","spawnGroup":"Clones","rank":"CPT","spec":"Doom","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_501_YY_LEGION_KAPITAN_REX","name":"501-ый Легион | Капитан Rex","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/501/rex.mdl","skin":0,"weapons":[],"jobID":"Soldier_copy_0652","groupId":"501st","cat":"Рота «Лавина»","spawnGroup":"Clones","rank":"CPT","spec":"Rex","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":4,"5":3,"6":0,"7":0,"8":0,"9":1,"10":1,"11":0,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_501_YY_LEGION_BOETS","name":"501-ый Легион | Боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/501/trooper.mdl","skin":0,"weapons":[],"jobID":"Soldier_copy_0652_copy_2560","groupId":"501st","cat":"Рота «Лавина»","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_212_YY_BATALON_KOMANDIR_CODY","name":"212-ый Батальон | Командир Cody","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/212/cody.mdl","skin":0,"weapons":[],"jobID":"Soldier_copy_0652_copy_2560_copy_6067","groupId":"212th","cat":"Бойцы поддержки","spawnGroup":"Clones","rank":"CO","spec":"Cody","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":5,"5":1,"6":0,"7":0,"8":0,"9":1,"10":0,"11":0,"12":2},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_212_YY_BATALON_BOETS","name":"212-ый Батальон | Боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/212/trooper.mdl","skin":0,"weapons":[],"jobID":"Soldier_copy_0652_copy_2560_copy_6067_copy_1229","groupId":"212th","cat":"Бойцы поддержки","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_KORPUS_CT_RAZVEDCHIK","name":"Корпус CT | Разведчик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/trooper/arf_ct.mdl","skin":0,"weapons":[],"jobID":"CTRazv","groupId":"CT","cat":"Корпус CT","spawnGroup":"Clones","rank":"SGT","spec":"ARF","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_KORPUS_CT_CHISTILSHCHIK","name":"Корпус CT | Чистильщик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/trooper/para_ct.mdl","skin":0,"weapons":[],"jobID":"CTDrb","groupId":"CT","cat":"Корпус CT","spawnGroup":"Clones","rank":"CPL","spec":"PRG","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_KORPUS_CT_INZHENER","name":"Корпус CT | Инженер","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/trooper/eng_ct.mdl","skin":0,"weapons":[],"jobID":"CTEng","groupId":"CT","cat":"Корпус CT","spawnGroup":"Clones","rank":"CPL","spec":"ENG","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_KORPUS_CT_PILOT","name":"Корпус CT | Пилот","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/trooper/pilot_ct.mdl","skin":0,"weapons":[],"jobID":"CTPilot","groupId":"CT","cat":"Корпус CT","spawnGroup":"Clones","rank":"CPL","spec":"PIL","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_KORPUS_CT_TYAZHELYY_BOETS","name":"Корпус CT | Тяжелый боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/trooper/heavy_ct.mdl","skin":0,"weapons":[],"jobID":"CTHeavy","groupId":"CT","cat":"Корпус CT","spawnGroup":"Clones","rank":"SGT","spec":"HEV","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_CT1_COPY","name":"Корпус CT | Десантник","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/trooper/trooper_ct.mdl","skin":0,"weapons":[],"jobID":"Soldier_copy_9895","groupId":"CT","cat":"Корпус CT","spawnGroup":"Clones","rank":"PVT","spec":"PR","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":2},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_KORPUS_CT_ARC","name":"Корпус CT | ARC","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/trooper/arc_ct.mdl","skin":0,"weapons":[],"jobID":"CT.Arc","groupId":"CT","cat":"Корпус CT","spawnGroup":"Clones","rank":"MSG","spec":"ARC","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_CC","name":"Корпус CT | Командир","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/trooper/trooper_ct.mdl","skin":1,"weapons":[],"jobID":"CTCC","groupId":"CT","cat":"Корпус CT","spawnGroup":"Clones","rank":"","spec":"CC","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_741","name":"74-ый Взвод | Боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/74/trooper.mdl","skin":0,"weapons":[],"jobID":"Vzvod1","groupId":"74th","cat":"74-й Взвод","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_74_YY_VZVOD_DESANTNIK","name":"74-ый Взвод | Десантник","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/74/trooper.mdl","skin":0,"weapons":[],"jobID":"Vzvod1Des","groupId":"74th","cat":"74-й Взвод","spawnGroup":"Clones","rank":"PVT","spec":"PR","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_742","name":"74-ый Взвод | Тяжёлый боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/74/heavy.mdl","skin":0,"weapons":[],"jobID":"Vzvod2","groupId":"74th","cat":"74-й Взвод","spawnGroup":"Clones","rank":"","spec":"HEV","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_743","name":"74-ый Взвод | Артиллерист","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/74/art.mdl","skin":0,"weapons":[],"jobID":"Vzvod3","groupId":"74th","cat":"74-й Взвод","spawnGroup":"Clones","rank":"","spec":"ART","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_744","name":"74-ый Взвод | Полевой медик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/74/med.mdl","skin":0,"weapons":[],"jobID":"Vzvod4","groupId":"74th","cat":"74-й Взвод","spawnGroup":"Clones","rank":"","spec":"MED","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_745","name":"74-ый Взвод | Инженер","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/74/eng.mdl","skin":0,"weapons":[],"jobID":"Vzvod5","groupId":"74th","cat":"74-й Взвод","spawnGroup":"Clones","rank":"","spec":"ENG","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_UDARNAYA_ROTA_SLEDOVATEL","name":"Ударная рота | Следователь","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":71,"a":255},"worldModel":"models/guard/arf.mdl","skin":1,"weapons":[],"jobID":"GuardSled","groupId":"CT","cat":"Корпус CT","spawnGroup":"Clones","rank":"CPL","spec":"ARF","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":1,"7":1,"8":0,"9":1,"10":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_GuardKino","name":"Ударная рота | Боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":218,"g":11,"b":11,"a":255},"worldModel":"models/guard/trooper.mdl","skin":0,"weapons":[],"jobID":"CTYdarnikgud","groupId":"CT","cat":"Корпус CT","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_GuardSosi","name":"Ударная рота | Ликвидатор","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":230,"g":0,"b":0,"a":255},"worldModel":"models/guard/para.mdl","skin":0,"weapons":[],"jobID":"GuardSosi","groupId":"CT","cat":"Корпус CT","spawnGroup":"Clones","rank":"CPL","spec":"Hound","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":1,"6":0,"7":4,"8":2,"9":1,"10":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Aurora2","name":"Рота Аврора | Боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/aurora/trooper.mdl","skin":0,"weapons":[],"jobID":"Aurora2","groupId":"Aurora","cat":"Рота Аврора","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Aurora3","name":"Рота Аврора | ARC","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/aurora/arc.mdl","skin":0,"weapons":[],"jobID":"Aurora3","groupId":"Aurora","cat":"Рота Аврора","spawnGroup":"Clones","rank":"","spec":"ARC","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_ROTA_AVRORA_BOETS","name":"Рота Аврора | Боец Hunter","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/aurora/wolffe.mdl","skin":0,"weapons":[],"jobID":"Aurora3_copy_5958","groupId":"Aurora","cat":"Рота Аврора","spawnGroup":"Clones","rank":"","spec":"Hunter","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Aurora4","name":"Рота Аврора | Скаут","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/aurora/scout.mdl","skin":0,"weapons":[],"jobID":"Aurora4","groupId":"Aurora","cat":"Рота Аврора","spawnGroup":"Clones","rank":"","spec":"SCT","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Aurora5","name":"Рота Аврора | Медик-Десантник","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/aurora/para.mdl","skin":0,"weapons":[],"jobID":"Aurora5","groupId":"Aurora","cat":"Рота Аврора","spawnGroup":"Clones","rank":"","spec":"MED","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Aurora6","name":"Рота Аврора | Разведчик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/aurora/arf.mdl","skin":0,"weapons":[],"jobID":"Aurora6","groupId":"Aurora","cat":"Рота Аврора","spawnGroup":"Clones","rank":"","spec":"ARF","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Aurora6_COPY","name":"Рота Аврора | Командир","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/aurora/cmd.mdl","skin":0,"weapons":[],"jobID":"Aurora6_copy_8593","groupId":"Aurora","cat":"Рота Аврора","spawnGroup":"Clones","rank":"CPT","spec":"CO","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":2,"6":0,"7":0,"8":0,"9":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Prudi","name":"БСО | ARC «Null-Ø5»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a17_2.mdl","skin":0,"weapons":[],"jobID":"Prudi","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Null-Ø5","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":2,"6":0,"7":0,"8":1,"9":0,"10":0,"11":0,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Komrk","name":"БСО | ARC «Null-Ø6»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a17_2.mdl","skin":0,"weapons":[],"jobID":"Komrk","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Null-Ø6","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":2,"6":0,"7":0,"8":1,"9":0,"10":0,"11":0,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Mereel","name":"БСО | ARC «Null-Ø7»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a17_2.mdl","skin":0,"weapons":[],"jobID":"Mereel","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Null-Ø7","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":2,"6":0,"7":0,"8":1,"9":0,"10":0,"11":0,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_jAING","name":"БСО | ARC «Null-10»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a17_2.mdl","skin":0,"weapons":[],"jobID":"jAING","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Null-10","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":2,"6":0,"7":0,"8":1,"9":0,"10":0,"11":0,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Ordo","name":"БСО | ARC «Null-11»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a17_2.mdl","skin":1,"weapons":[],"jobID":"Ordo","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Null-11","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":2,"6":0,"7":0,"8":1,"9":0,"10":0,"11":0,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Aden","name":"БСО | ARC «Null-12»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a17_2.mdl","skin":2,"weapons":[],"jobID":"Aden","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Null-12","bodygroups":{"0":0,"1":0,"2":0,"3":2,"4":0,"5":2,"6":0,"7":0,"8":1,"9":0,"10":0,"11":0,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_first","name":"БСО | ARC «Alpha-Ø1 Kossman»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a1.mdl","skin":0,"weapons":[],"jobID":"first","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"COL","spec":"Alpha-Ø1","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":200,"maxHealth":200,"armor":300,"maxArmor":400,"playerSpawn":"ply:SetMaxArmor(400)\n\t\tply:SetArmor(300)\n\t\tply:SetHealth(200)\n\t\tply:SetMaxHealth(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Alpha","name":"БСО | ARC «Alpha-10»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a17_3.mdl","skin":0,"weapons":[],"jobID":"Alpha","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Alpha-17","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Maze","name":"БСО | ARC «Alpha-11»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a67.mdl","skin":0,"weapons":[],"jobID":"Maze","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Alpha-26","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Sull","name":"БСО | ARC «Alpha-12»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a66.mdl","skin":0,"weapons":[],"jobID":"Sull","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Alpha-30","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Ember","name":"БСО | ARC «Alpha-13»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a13.mdl","skin":0,"weapons":[],"jobID":"Ember","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Alpha-13","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Trantos","name":"БСО | ARC «Alpha-14»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a30.mdl","skin":0,"weapons":[],"jobID":"Trantos","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Alpha-58","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Muzzle","name":"БСО | ARC «Alpha-15»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a26.mdl","skin":0,"weapons":[],"jobID":"Muzzle","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Alpha-66","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Fordo","name":"БСО | ARC «Alpha-16»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a98.mdl","skin":0,"weapons":[],"jobID":"Fordo","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Alpha-77","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":1,"9":1,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Nate","name":"БСО | ARC «Alpha-98»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/alpha/a13.mdl","skin":0,"weapons":[],"jobID":"Nate","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Alpha-98","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RC","name":"БСО | RC","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rc/rc_combo1.mdl","skin":0,"weapons":[],"jobID":"RC","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"RC","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":150,"maxHealth":150,"armor":500,"maxArmor":500,"playerSpawn":"ply:SetMaxArmor(500)\n\t\tply:SetArmor(500)\n\t\tply:SetHealth(150)\n\t\tply:SetMaxHealth(150)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RC_ZETA_KOMANDIR","name":"RC Zeta | Командир","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rc/rc_combo1.mdl","skin":5,"weapons":[],"jobID":"RC_copy_7856","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"RC","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":150,"maxHealth":150,"armor":500,"maxArmor":500,"playerSpawn":"ply:SetMaxArmor(500)\n\t\tply:SetArmor(500)\n\t\tply:SetHealth(150)\n\t\tply:SetMaxHealth(150)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RC_ZETA_SNAYPER","name":"RC Zeta | Снайпер","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rc/rc_combo1.mdl","skin":1,"weapons":[],"jobID":"RC_copy_7856_copy_3980","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"RC","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":150,"maxHealth":150,"armor":500,"maxArmor":500,"playerSpawn":"ply:SetMaxArmor(500)\n\t\tply:SetArmor(500)\n\t\tply:SetHealth(150)\n\t\tply:SetMaxHealth(150)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RC_ZETA_MEDIK","name":"RC Zeta | Медик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rc/rc_combo1.mdl","skin":3,"weapons":[],"jobID":"RC_copy_7856_copy_3980_copy_1028","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"RC","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":150,"maxHealth":150,"armor":500,"maxArmor":500,"playerSpawn":"ply:SetMaxArmor(500)\n\t\tply:SetArmor(500)\n\t\tply:SetHealth(150)\n\t\tply:SetMaxHealth(150)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RC_ZETA_PODRYVNIK","name":"RC Zeta | Подрывник","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rc/rc_combo1.mdl","skin":4,"weapons":[],"jobID":"RC_copy_7856_copy_3980_copy_1028_copy_8132","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"RC","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":150,"maxHealth":150,"armor":500,"maxArmor":500,"playerSpawn":"ply:SetMaxArmor(500)\n\t\tply:SetArmor(500)\n\t\tply:SetHealth(150)\n\t\tply:SetMaxHealth(150)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RC1","name":"БСО | Boss RC «Delta»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rc/rc_combo1.mdl","skin":17,"weapons":[],"jobID":"RC1","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Boss","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":500,"maxArmor":500,"playerSpawn":"ply:SetMaxArmor(500)\n\t\tply:SetArmor(500)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RC2","name":"БСО | Scorch RC «Delta»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rc/rc_combo1.mdl","skin":15,"weapons":[],"jobID":"RC2","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Scorch","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":500,"maxArmor":500,"playerSpawn":"ply:SetMaxArmor(500)\n\t\tply:SetArmor(500)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RC3","name":"БСО | Fixer RC «Delta»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rc/rc_combo1.mdl","skin":14,"weapons":[],"jobID":"RC3","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Fixer","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":300,"maxArmor":300,"playerSpawn":"ply:SetMaxArmor(300)\n\t\tply:SetArmor(300)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RC4","name":"БСО | Sev RC «Delta»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rc/rc_combo1.mdl","skin":16,"weapons":[],"jobID":"RC4","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Sev","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":500,"maxArmor":500,"playerSpawn":"ply:SetMaxArmor(500)\n\t\tply:SetArmor(500)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RC5","name":"БСО | Niner RC «Omega»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rc/rc_combo1.mdl","skin":7,"weapons":[],"jobID":"RC5","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Niner","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":500,"maxArmor":500,"playerSpawn":"ply:SetMaxArmor(500)\n\t\tply:SetArmor(500)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RC6","name":"БСО | Darman RC «Omega»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rc/rc_combo1.mdl","skin":6,"weapons":[],"jobID":"RC6","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Darman","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":500,"maxArmor":500,"playerSpawn":"ply:SetMaxArmor(500)\n\t\tply:SetArmor(500)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RC7","name":"БСО | Atin RC «Omega»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rc/rc_combo1.mdl","skin":6,"weapons":[],"jobID":"RC7","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Atin","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":500,"maxArmor":500,"playerSpawn":"ply:SetMaxArmor(500)\n\t\tply:SetArmor(500)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RC8","name":"БСО | Fi RC «Omega»","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rc/rc_combo1.mdl","skin":6,"weapons":[],"jobID":"RC8","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Fi","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":500,"maxArmor":500,"playerSpawn":"ply:SetMaxArmor(500)\n\t\tply:SetArmor(500)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Curscant","name":"Группа SO | Курсант","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rancor/arc_rancor.mdl","skin":0,"weapons":[],"jobID":"Curscant","groupId":"ARC","cat":"Взвод SSO","spawnGroup":"Clones","rank":"CPL","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_OTRYAD_RANCOR_INSTRUKTOR_HAMMER","name":"Отряд Rancor | Инструктор Hammer","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rancor/hammer.mdl","skin":0,"weapons":[],"jobID":"Hammer1","groupId":"ARC","cat":"Взвод SSO","spawnGroup":"Clones","rank":"JLT","spec":"Hammer","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_OTRYAD_RANCOR_INSTRUKTOR_BLITZ","name":"Отряд Rancor | Инструктор Blitz","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rancor/blitz.mdl","skin":0,"weapons":[],"jobID":"Blitz01","groupId":"ARC","cat":"Взвод SSO","spawnGroup":"Clones","rank":"JLT","spec":"Hammer","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Boez","name":"Группа SO | Боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rancor/arc_rancor.mdl","skin":1,"weapons":[],"jobID":"Boez","groupId":"ARC","cat":"Взвод SSO","spawnGroup":"Clones","rank":"CPL","spec":"ARC","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Kamandir","name":"Группа SO | Командир Blackout","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/rancor/arc_rancor.mdl","skin":2,"weapons":[],"jobID":"Kamandir","groupId":"ARC","cat":"Взвод SSO","spawnGroup":"Clones","rank":"CPL","spec":"Blackout","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Ura","name":"ВАР | Dralk Vess","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/mando/xerxes/xerxes.mdl","skin":0,"weapons":[],"jobID":"Ura","groupId":"GAR","cat":"Великая Армия Республики","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_VAR_VREY_SHENS","name":"ВАР | Vrey Shens","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/mandolorian/mandolorka.mdl","skin":0,"weapons":[],"jobID":"VreyShen","groupId":"GAR","cat":"Великая Армия Республики","spawnGroup":"Clones","rank":"","spec":"Vrey","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_MN","name":"ВАР | Механик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/unarmored/unarmored_clones.mdl","skin":7,"weapons":[],"jobID":"MN","groupId":"GAR","cat":"Великая Армия Республики","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{"0":1,"1":13,"2":0,"3":1,"4":0,"5":0,"6":0,"7":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":50,"maxArmor":50,"playerSpawn":"ply:SetMaxArmor(50)\n\t\tply:SetArmor(50)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_MED","name":"ВАР | Медицинский персонал","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/unarmored/unarmored_clones.mdl","skin":6,"weapons":[],"jobID":"MED","groupId":"GAR","cat":"Великая Армия Республики","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{"0":0,"1":12,"2":7,"3":2,"4":0,"5":1,"6":0,"7":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":50,"maxArmor":50,"playerSpawn":"ply:SetMaxArmor(50)\n\t\tply:SetArmor(50)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Sovet","name":"ВАР | Советник","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/unarmored/unarmored_clones.mdl","skin":0,"weapons":[],"jobID":"Sovet","groupId":"Shtab","cat":"Штабные единицы","spawnGroup":"Clones","rank":"","spec":"Suka","bodygroups":{"0":0,"1":12,"2":0,"3":2,"4":0,"5":1,"6":0,"7":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":50,"maxArmor":50,"playerSpawn":"ply:SetMaxArmor(50)\n\t\tply:SetArmor(50)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_RESPUBLIKA_SENATOR","name":"Республика | Сенатор","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/smuggler/pm_civ_smuggler_togruta_male.mdl","skin":0,"weapons":[],"jobID":"RepublicSenator","groupId":"GAR","cat":"Республика","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":0,"maxArmor":0,"playerSpawn":"ply:SetMaxArmor(0)\n\t\tply:SetArmor(0)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_KNS_SENATOR","name":"КНС | Сенатор","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":17,"g":8,"b":63,"a":255},"worldModel":"models/scientist/npc_civ_scientist_human_male_h.mdl","skin":0,"weapons":[],"jobID":"CISSenator","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":0,"maxArmor":0,"playerSpawn":"ply:SetMaxArmor(0)\n\t\tply:SetArmor(0)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_SENATSKAYA_GVARDIYA_OPERATIVNIK_SSO","name":"Сенатская гвардия | Оперативник ССО","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":5,"g":10,"b":163,"a":255},"worldModel":"models/vk/trooper.mdl","skin":0,"weapons":[],"jobID":"RepublicGuarSSO","groupId":"GAR","cat":"Республика","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":3,"6":0,"7":0,"8":0,"9":2,"10":1,"11":0,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":150,"maxHealth":150,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)\n\t\tply:SetHealth(150)\n\t\tply:SetMaxHealth(150)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_GAR","name":"ВАР | Высшее Командование","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":100,"a":255},"worldModel":"models/vk/trooper.mdl","skin":0,"weapons":[],"jobID":"GARdey","groupId":"Shtab","cat":"Штабные единицы","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_GAR_COPY","name":"ВАР | Инспектор","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":100,"a":255},"worldModel":"models/unarmored/unarmored_combo.mdl","skin":3,"weapons":[],"jobID":"GARdey_copy_4541","groupId":"Shtab","cat":"Штабные единицы","spawnGroup":"Clones","rank":"MAJ","spec":"Army","bodygroups":{"0":0,"1":12,"2":0,"3":0,"4":2,"5":0,"6":0,"7":1,"8":0,"9":0,"10":0,"11":0,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_JEDI_Zalipa","name":"Наёмники | Kiro Savano","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/moth/haze/haze.mdl","skin":0,"weapons":["weapon_lscs","arccw_k_rskf60"],"jobID":"Burmalda","groupId":"GAR","cat":"Носители силы","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":200,"maxHealth":200,"armor":100,"maxArmor":100,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(100)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(100)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(200)\n\t\tply:SetHealth(200)\n\t\tply:lscsSetMaxForce(300)\n\t\tply:lscsSetForce(300)\n\t\tply:SetWalkSpeed(125);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(280);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_slayer_saberstaff\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_burningwhite\", true )\n\t\tply:lscsAddInventory( \"item_stance_faststyle\", true )\n\t\tply:lscsAddInventory( \"item_stance_agile\", true )\n\t\tply:lscsAddInventory( \"item_stance_yongli\", true )\n\t\tply:lscsAddInventory( \"item_force_choke\", true )\n\t\tply:lscsAddInventory( \"item_force_sense1\", true )\n\t\tply:lscsAddInventory( \"item_force_jumpii\", true )\n\t\tply:lscsAddInventory( \"item_force_massheal\", true )\n\t\tply:lscsAddInventory( \"item_force_pushii\", true )\n\t\tply:lscsAddInventory( \"item_force_pullii\", true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\tply:lscsAddInventory( \"item_force_sfrockthrow\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_JEDI_padawanZash","name":"Орден Джедаев | Падаван Защитник","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/jedi/padawan1.mdl","skin":0,"weapons":["weapon_lscs"],"jobID":"jedi_zashitnik","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":50,"maxArmor":50,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(50)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(50)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(100)\n\t\tply:SetHealth(100)\n\t\tply:lscsSetMaxForce(150)\n\t\tply:lscsSetForce(150)\n\t\tply:SetWalkSpeed(125);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(260);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_ja7\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_sapphire\", true )\n\t\tply:lscsAddInventory( \"item_stance_warrior\", true )\n\t\tply:lscsAddInventory( \"item_stance_yongli\", true )\n\t\tply:lscsAddInventory(  \"item_force_jump\", true )\n\t\tply:lscsAddInventory(  \"item_force_pull\", true )\n\t\tply:lscsAddInventory(  \"item_force_push\", true )\n\t\tply:lscsAddInventory( \"item_force_adrenaline\", true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_JEDI_padawancons","name":"Орден Джедаев | Падаван Консул","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/jedi/padawan1.mdl","skin":0,"weapons":["weapon_lscs"],"jobID":"jedi.padawan","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":50,"maxArmor":50,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(50)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(50)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(100)\n\t\tply:SetHealth(100)\n\t\tply:lscsSetMaxForce(150)\n\t\tply:lscsSetForce(150)\n\t\tply:SetWalkSpeed(125);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(260);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_ja7\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_smaragd\", true )\n\t\tply:lscsAddInventory( \"item_stance_yongli\", true )\n\t\tply:lscsAddInventory( \"item_force_jump\", true )\n\t\tply:lscsAddInventory( \"item_stance_crescent\", true )\n\t\tply:lscsAddInventory( \"item_force_pull\", true )\n\t\tply:lscsAddInventory( \"item_force_push\", true )\n\t\tply:lscsAddInventory( \"item_force_adrenaline\", true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_JEDI_padawanstraj","name":"Орден Джедаев | Падаван Страж","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/jedi/padawan1.mdl","skin":0,"weapons":["weapon_lscs"],"jobID":"jedi.straz","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":50,"maxArmor":50,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(50)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(50)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(100)\n\t\tply:SetHealth(100)\n\t\tply:lscsSetMaxForce(150)\n\t\tply:lscsSetForce(150)\n\t\tply:SetWalkSpeed(125);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(260);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_ja7\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_citrine\", true )\n\t\tply:lscsAddInventory( \"item_stance_yongli\", true )\n\t\tply:lscsAddInventory( \"item_force_jump\", true )\n\t\tply:lscsAddInventory( \"item_stance_agile\", true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\tply:lscsAddInventory( \"item_force_pull\", true )\n\t\tply:lscsAddInventory( \"item_force_push\", true )\n\t\tply:lscsAddInventory( \"item_force_adrenaline\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_JEDI_rizarzash","name":"Орден Джедаев | Рыцарь Защитник","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/jedi/human3.mdl","skin":11,"weapons":["weapon_lscs"],"jobID":"jedi.kngihtzashitnik","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{"0":0,"1":2,"2":2,"3":0,"4":2,"5":0,"6":0,"7":2,"8":0,"9":1,"10":2,"11":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":200,"maxHealth":200,"armor":100,"maxArmor":100,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(100)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(100)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(200)\n\t\tply:SetHealth(200)\n\t\tply:lscsSetMaxForce(300)\n\t\tply:lscsSetForce(300)\n\t\tply:SetWalkSpeed(125);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(280);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_ja7\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_sapphire\", true )\n\t\tply:lscsAddInventory( \"item_stance_warrior\", true )\n\t\tply:lscsAddInventory( \"item_stance_yongli\", true )\n\t\tply:lscsAddInventory( \"item_force_jumpii\", true )\n\t\tply:lscsAddInventory( \"item_force_pullii\", true )\n\t\tply:lscsAddInventory( \"item_force_pushii\", true )\n\t\tply:lscsAddInventory( \"item_force_healiii\", true )\n\t\tply:lscsAddInventory( \"item_force_adrenaline\", true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_JEDI_rizarzash12","name":"Орден Джедаев | Мастер Защитник","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/jedi/human3.mdl","skin":11,"weapons":["weapon_lscs"],"jobID":"jedi.masterz","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{"0":0,"1":2,"2":2,"3":0,"4":2,"5":0,"6":0,"7":2,"8":0,"9":1,"10":2,"11":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":300,"maxHealth":300,"armor":200,"maxArmor":200,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(200)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(200)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(300)\n\t\tply:SetHealth(300)\n\t\tply:lscsSetMaxForce(500)\n\t\tply:lscsSetForce(500)\n\t\tply:SetWalkSpeed(125);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(280);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_ja7\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_sapphire\", true )\n\t\tply:lscsAddInventory( \"item_stance_warrior\", true )\n\t\tply:lscsAddInventory( \"item_stance_yongli\", true )\n\t\tply:lscsAddInventory( \"item_stance_shienso\", true )\n\t\tply:lscsAddInventory( \"item_stance_shiicho\", true )\n\t\tply:lscsAddInventory( \"item_force_jumpiii\", true )\n\t\tply:lscsAddInventory( \"item_force_pulliii\", true )\n\t\tply:lscsAddInventory( \"item_force_whirlwind\", true )\n\t\tply:lscsAddInventory( \"item_force_pushiii\", true )\n\t\tply:lscsAddInventory( \"item_force_healiii\", true )\n\t\tply:lscsAddInventory( \"item_force_adrenaline\", true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_JEDI_rizarcons","name":"Орден Джедаев | Рыцарь Консул","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/jedi/human3.mdl","skin":2,"weapons":["weapon_lscs"],"jobID":"jedi.knightk","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{"0":0,"1":2,"2":2,"3":0,"4":2,"5":0,"6":0,"7":2,"8":0,"9":1,"10":2,"11":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":200,"maxHealth":200,"armor":100,"maxArmor":100,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(100)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(100)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(200)\n\t\tply:SetHealth(200)\n\t\tply:lscsSetMaxForce(300)\n\t\tply:lscsSetForce(300)\n\t\tply:SetWalkSpeed(125);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(280);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_ja7\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_smaragd\", true )\n\t\tply:lscsAddInventory( \"item_stance_crescent\", true )\n\t\tply:lscsAddInventory( \"item_stance_yongli\", true )\n\t\tply:lscsAddInventory( \"item_force_jumpii\", true )\n\t\tply:lscsAddInventory( \"item_force_pullii\", true )\n\t\tply:lscsAddInventory( \"item_force_pushii\", true )\n\t\tply:lscsAddInventory( \"item_force_healiii\", true )\n\t\tply:lscsAddInventory( \"item_force_adrenaline\", true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_JEDI_rizarcons121","name":"Орден Джедаев | Мастер Консул","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/jedi/human3.mdl","skin":2,"weapons":["weapon_lscs"],"jobID":"jedi.masterk","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{"0":0,"1":2,"2":2,"3":0,"4":2,"5":0,"6":0,"7":2,"8":0,"9":1,"10":2,"11":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":300,"maxHealth":300,"armor":200,"maxArmor":200,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(200)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(200)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(300)\n\t\tply:SetHealth(300)\n\t\tply:lscsSetMaxForce(500)\n\t\tply:lscsSetForce(500)\n\t\tply:SetWalkSpeed(125);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(280);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_ja7\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_smaragd\", true )\n\t\tply:lscsAddInventory( \"item_stance_crescent\", true )\n\t\tply:lscsAddInventory( \"item_stance_shienso\", true )\n\t\tply:lscsAddInventory( \"item_stance_shiicho\", true )\n\t\tply:lscsAddInventory( \"item_stance_yongli\", true )\n\t\tply:lscsAddInventory( \"item_force_jumpiii\", true )\n\t\tply:lscsAddInventory( \"item_force_pulliii\", true )\n\t\tply:lscsAddInventory( \"item_force_pushiii\", true )\n\t\tply:lscsAddInventory( \"item_force_healiii\", true )\n\t\tply:lscsAddInventory( \"item_force_adrenaline\", true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\tply:lscsAddInventory( \"item_force_whirlwind\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_JEDI_rizarstraj","name":"Орден Джедаев | Рыцарь Страж","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/jedi/human3.mdl","skin":3,"weapons":["weapon_lscs"],"jobID":"jedi.sentinelr","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{"0":0,"1":2,"2":2,"3":0,"4":2,"5":0,"6":0,"7":2,"8":0,"9":1,"10":2,"11":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":200,"maxHealth":200,"armor":100,"maxArmor":100,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(100)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(100)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(200)\n\t\tply:SetHealth(200)\n\t\tply:lscsSetMaxForce(300)\n\t\tply:lscsSetForce(300)\n\t\tply:SetWalkSpeed(125);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(260);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_ja7\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_citrine\", true )\n\t\tply:lscsAddInventory( \"item_stance_agile\", true )\n\t\tply:lscsAddInventory( \"item_stance_yongli\", true )\n\t\tply:lscsAddInventory( \"item_force_jumpii\", true )\n\t\tply:lscsAddInventory( \"item_force_pullii\", true )\n\t\tply:lscsAddInventory( \"item_force_pushii\", true )\n\t\tply:lscsAddInventory( \"item_force_healiii\", true )\n\t\tply:lscsAddInventory( \"item_force_adrenaline\",  true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_JEDI_rizarstraj3","name":"Орден Джедаев | Мастер Страж","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/jedi/human3.mdl","skin":3,"weapons":["weapon_lscs"],"jobID":"jedi.mastersentinel","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{"0":0,"1":2,"2":2,"3":0,"4":2,"5":0,"6":0,"7":2,"8":0,"9":1,"10":2,"11":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":300,"maxHealth":300,"armor":200,"maxArmor":200,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(200)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(200)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(300)\n\t\tply:SetHealth(300)\n\t\tply:lscsSetMaxForce(500)\n\t\tply:lscsSetForce(500)\n\t\tply:SetWalkSpeed(125);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(260);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_ja7\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_citrine\", true )\n\t\tply:lscsAddInventory( \"item_stance_agile\", true )\n\t\tply:lscsAddInventory( \"item_stance_yongli\", true )\n\t\tply:lscsAddInventory( \"item_stance_shienso\", true )\n\t\tply:lscsAddInventory( \"item_stance_shiicho\", true )\n\t\tply:lscsAddInventory( \"item_force_jumpiii\", true )\n\t\tply:lscsAddInventory( \"item_force_pulliii\", true )\n\t\tply:lscsAddInventory( \"item_force_pushiii\", true )\n\t\tply:lscsAddInventory( \"item_force_healiii\", true )\n\t\tply:lscsAddInventory( \"item_force_adrenaline\",  true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\tply:lscsAddInventory( \"item_force_whirlwind\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_JEDI_Mace","name":"Орден Джедаев | Легендарный Джедай Mace Windu","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/jedi/mace_windu.mdl","skin":0,"weapons":["weapon_lscs"],"jobID":"Mace","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":1,"4":0,"5":0,"6":0,"7":0,"8":1,"9":1,"10":0,"11":0,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":300,"maxHealth":300,"armor":200,"maxArmor":200,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(200)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(200)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(300)\n\t\tply:SetHealth(300)\n\t\tply:lscsSetMaxForce(500)\n\t\tply:lscsSetForce(500)\n\t\tply:SetWalkSpeed(130);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(280);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_windu\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_amethyst\", true )\n\t\tply:lscsAddInventory( \"item_stance_shiicho\", true )\n\t\tply:lscsAddInventory( \"item_stance_vaapad\", true )\n\t\tply:lscsAddInventory( \"item_stance_shienso\", true )\n\t\tply:lscsAddInventory( \"item_force_jumpiii\", true )\n\t\tply:lscsAddInventory( \"item_force_whirlwind\", true )\n\t\tply:lscsAddInventory( \"item_force_throw\", true )\n\t\tply:lscsAddInventory( \"item_force_sense1\", true )\n\t\tply:lscsAddInventory( \"item_force_pulliii\", true )\n\t\tply:lscsAddInventory( \"item_force_pushiii\", true )\n\t\tply:lscsAddInventory( \"item_force_betterheal\", true )\n\t\tply:lscsAddInventory( \"item_force_sfbarrier\", true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\tply:lscsAddInventory( \"item_force_adrenaline\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_JEDI_Ani","name":"Орден Джедаев | Легендарный Джедай Anakin Skywalker","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/jedi/anakin_skyasan.mdl","skin":0,"weapons":["weapon_lscs"],"jobID":"Ani","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":2,"3":2,"4":0,"5":2,"6":0,"7":0,"8":2,"9":0,"10":1,"11":0,"12":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":300,"maxHealth":300,"armor":200,"maxArmor":200,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(200)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(200)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(300)\n\t\tply:SetHealth(300)\n\t\tply:lscsSetMaxForce(500)\n\t\tply:lscsSetForce(500)\n\t\tply:SetWalkSpeed(130);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(280);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_ani2\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_sapphire\", true )\n\t\tply:lscsAddInventory( \"item_stance_makashi\", true )\n\t\tply:lscsAddInventory( \"item_stance_faststyle\", true )\n\t\tply:lscsAddInventory( \"item_stance_shienso\", true )\n\t\tply:lscsAddInventory( \"item_stance_shiicho\", true )\n\t\tply:lscsAddInventory( \"item_force_jumpiii\", true )\n\t\tply:lscsAddInventory( \"item_force_throw\", true )\n\t\tply:lscsAddInventory( \"item_force_choke\", true )\n\t\tply:lscsAddInventory( \"item_force_pulliii\", true )\n\t\tply:lscsAddInventory( \"item_force_pushiii\", true )\n\t\tply:lscsAddInventory( \"item_force_betterheal\", true )\n\t\tply:lscsAddInventory( \"item_force_adrenaline\", true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\tply:lscsAddInventory( \"item_force_sense1\", true )\n\t\tply:lscsAddInventory( \"item_force_sfbarrier\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_JEDI_Obi","name":"Орден Джедаев | Легендарный Джедай Obi-Wan Kenobi","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/jedi/obiwan_kenobi.mdl","skin":0,"weapons":["weapon_lscs"],"jobID":"Obi","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":2,"3":2,"4":0,"5":2,"6":0,"7":0,"8":2,"9":1,"10":2,"11":2,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":300,"maxHealth":300,"armor":200,"maxArmor":200,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(200)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(200)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(300)\n\t\tply:SetHealth(300)\n\t\tply:lscsSetMaxForce(500)\n\t\tply:lscsSetForce(500)\n\t\tply:SetWalkSpeed(130);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(280);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_kenobi\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_sapphire\", true )\n\t\tply:lscsAddInventory( \"item_stance_shiicho\", true )\n\t\tply:lscsAddInventory( \"item_stance_soresu\", true )\n\t\tply:lscsAddInventory( \"item_stance_shienso\", true )\n\t\tply:lscsAddInventory( \"item_force_jumpiii\", true )\n\t\tply:lscsAddInventory( \"item_force_whirlwind\", true )\n\t\tply:lscsAddInventory( \"item_force_throw\", true )\n\t\tply:lscsAddInventory( \"item_force_pulliii\", true )\n\t\tply:lscsAddInventory( \"item_force_blind\", true )\n\t\tply:lscsAddInventory( \"item_force_pushiii\", true )\n\t\tply:lscsAddInventory( \"item_force_betterheal\", true )\n\t\tply:lscsAddInventory( \"item_force_adrenaline\", true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\tply:lscsAddInventory( \"item_force_sense1\", true )\n\t\tply:lscsAddInventory( \"item_force_sfbarrier\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_Dozor1","name":"Дозор Смерти | Пре Визсла","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/mando/dozor/dozor.mdl","skin":2,"weapons":["arccw_k_ee3s","arccw_k_westar35","arccw_k_nade_impact","arccw_k_nade_detonite","jet_mk10"],"jobID":"Dozor1","groupId":"Civil","cat":"Дозор Смерти","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":300,"maxArmor":300,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(300)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(300)\n\t\tply:lscsAddInventory( \"item_saberhilt_darksaber\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_whiteinner\", true )\n\t\tply:lscsAddInventory( \"item_stance_warrior\", true )\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_Dozor2","name":"Дозор Смерти | Новобранец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/mando/dozor/dozor.mdl","skin":0,"weapons":["arccw_k_ee3e","arccw_k_westar35","arccw_k_nade_impact","jet_mk10"],"jobID":"Dozor2","groupId":"Civil","cat":"Дозор Смерти","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":1,"5":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Dozor0","name":"Дозор Смерти | Ветеран","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/mando/dozor/dozor.mdl","skin":1,"weapons":["arccw_sops_galactic_deathwatchblaster","arccw_k_westar35","arccw_k_nade_thermalimploder","arccw_k_nade_detonite","vibrokinfe_base"],"jobID":"Dozor0","groupId":"Civil","cat":"Дозор Смерти","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":1,"4":1,"5":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Vost","name":"Тяжёлый боец повстанцев","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/player/valley/pao.mdl","skin":0,"weapons":["arccw_k_scatter","arccw_sops_empire_dlt19d","arccw_k_nade_thermalimploder","arccw_k_nade_c14"],"jobID":"Vost","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Vost1","name":"Повстанец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/wizard/tognath_pm/tognath.mdl","skin":0,"weapons":["arccw_k_vsspyke","arccw_k_dh17c","arccw_k_nade_c14"],"jobID":"Vost1","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":1,"4":0,"5":0,"6":0,"7":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Vost2","name":"Рейнджер","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/drifter/pm_civ_drifter_costume_male.mdl","skin":0,"weapons":["arccw_k_launcher_smartlauncher","arccw_k_rt97h","arccw_k_nade_c14","arccw_k_nade_thermal"],"jobID":"Vost2","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Terr5","name":"Террорист","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/valley/lgn/cgi pack/dengar/dengar.mdl","skin":0,"weapons":["arccw_k_dlt23","arccw_k_nade_sequencecharger","arccw_k_nade_blaststick"],"jobID":"Terr5","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Terr6","name":"Головорез","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/valley/lgn/cgi pack/rako_hardeen/rako_hardeen.mdl","skin":0,"weapons":["arccw_k_nade_detonite","arccw_k_nade_blaststick","arccw_k_an11","arccw_k_gau10r"],"jobID":"Terr6","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Pirat1","name":"Пират","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/player/ohanak_gang/pm_pirate_grunt.mdl","skin":0,"weapons":["arccw_k_mx1aquiles","arccw_k_nade_thermite","arccw_k_cyclerpistol"],"jobID":"Pirat1","groupId":"Civil","cat":"Пираты","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":1,"6":2,"7":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Pirat2","name":"Пират мародёр","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/player/ohanak_gang/pm_pirate_craggy.mdl","skin":0,"weapons":["arccw_k_a650","arccw_k_nade_thermite","arccw_k_nade_thermalimploder","arccw_k_cyclerpistol"],"jobID":"Pirat2","groupId":"Civil","cat":"Пираты","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":200,"maxHealth":200,"armor":300,"maxArmor":300,"playerSpawn":"ply:SetMaxArmor(300)\n\t\tply:SetArmor(300)\n\t\tply:SetHealth(200)\n\t\tply:SetMaxHealth(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Pirat4","name":"Капитан Пиратов","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/player/ohanak_gang/pm_pirate_marauder.mdl","skin":0,"weapons":["arccw_k_rr11k","arccw_k_nade_thermite","arccw_k_cyclerpistol"],"jobID":"Pirat4","groupId":"Civil","cat":"Пираты","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":1,"3":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Civil215","name":"Культист","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/player/valley/xalek.mdl","skin":0,"weapons":["weapon_nanosword"],"jobID":"civil_16","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":300,"maxArmor":300,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(300)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(300)\n\t\tply:lscsAddInventory( \"item_stance_yongli\", true )","isStandardPlayerSpawn":false},{"teamVar":"TEAM_Civil3","name":"Абориген","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/player/valley/talz.mdl","skin":0,"weapons":[],"jobID":"civil_15","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":0,"maxArmor":0,"playerSpawn":"ply:SetMaxArmor(0)\n\t\tply:SetArmor(0)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Civil17","name":"Раб","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/player/dathomir/pm_nightbrother_brawler.mdl","skin":1,"weapons":[],"jobID":"civil_15_409","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{"0":1,"1":4,"2":0,"3":1,"4":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":0,"maxArmor":0,"playerSpawn":"ply:SetMaxArmor(0)\n\t\tply:SetArmor(0)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Civil2","name":"Телохранитель","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/valley/lgn/cgi pack/onderon_guard/onderon_guard.mdl","skin":0,"weapons":["arccw_k_coruscantguardshield","arccw_k_gau9c","arccw_k_nade_stun","weapon_lscs_mandostaff"],"jobID":"civil_14","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(200)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(200)\t\t\t\t\t\t\t\t-- Установка кол-ва брони\n\t\tply:lscsAddInventory( \"item_stance_arrogant\", true )","isStandardPlayerSpawn":false},{"teamVar":"TEAM_Civil4","name":"Барон","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/valley/lgn/cgi pack/lux_bonteri/lux_bonteri.mdl","skin":0,"weapons":["arccw_k_dh11"],"jobID":"civil_13","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Civil411","name":"Дроид полицейский","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/guard/pm_protocol_guard.mdl","skin":0,"weapons":["arccw_k_coruscantguardshield","nn_stun_bu","arccw_sops_galactic_dh16"],"jobID":"civil_12","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Civil6","name":"Контрабандист","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/player/valley/karkarodon.mdl","skin":0,"weapons":["arccw_k_defender_s"],"jobID":"civil_11","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Mercenary112121","name":"Глава Синдиката","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/valley/lgn/cgi pack/ion_papanoida/ion_papanoida.mdl","skin":0,"weapons":["arccw_sops_galactic_galaar15","arccw_k_rg4d","arccw_k_nade_thermal","arccw_k_nade_impact"],"jobID":"civil_10","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Mercenary1","name":"Член Синдиката","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/valley/lgn/cgi pack/blacksun_soldier/blacksun_soldier.mdl","skin":0,"weapons":["arccw_sops_galactic_galaar15","arccw_k_rg4d","arccw_k_nade_thermal","arccw_k_nade_impact"],"jobID":"civil_9","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Civil33","name":"Нелегал","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/sochek/pm_trandoshan_sochek.mdl","skin":0,"weapons":["arccw_k_bk43","arccw_k_nade_impact"],"jobID":"civil_8","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":50,"maxArmor":50,"playerSpawn":"ply:SetMaxArmor(50)\n\t\tply:SetArmor(50)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Civil100","name":"Охотник за головами","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/mando/default/default.mdl","skin":1,"weapons":["jet_mk10","arccw_k_cr2","arccw_k_s5c","arccw_k_nade_thermal","arccw_k_nade_detonite"],"jobID":"civil_7","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":1,"4":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Mercenary6","name":"Вуки","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/tfa/comm/gg/pm_sw_chewbacca.mdl","skin":0,"weapons":["arccw_k_bowcaster","arccw_k_nade_thermal","arccw_k_nade_impact"],"jobID":"civil_6","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Civil15","name":"Джава","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/jajoff/sw/blizz.mdl","skin":0,"weapons":["arccw_sops_galactic_jawapistol"],"jobID":"civil_5","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":50,"maxArmor":50,"playerSpawn":"ply:SetMaxArmor(50)\n\t\tply:SetArmor(50)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Civil14","name":"Таскенский Рейдер","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/valley/lgn/cgi pack/tusken_raider/tusken_raider.mdl","skin":0,"weapons":["arccw_k_cycler","weapon_lscs_tusken"],"jobID":"civil_4","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(100)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(100)\t\t\t\t\t\t\t\t-- Установка кол-ва брони\n\t\tply:lscsAddInventory( \"item_stance_yongli\", true )","isStandardPlayerSpawn":false},{"teamVar":"TEAM_Civil1443","name":"Джеонозианец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/player/valley/lgn/geonosian/geonosian.mdl","skin":0,"weapons":["arccw_k_geonosianblaster"],"jobID":"civil_3","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Civil10","name":"Жительница","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/player/valley/orphne.mdl","skin":0,"weapons":[],"jobID":"civil_2","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":0,"maxArmor":0,"playerSpawn":"ply:SetMaxArmor(0)\n\t\tply:SetArmor(0)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Civil5","name":"Рабочий","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/player/valley/bith.mdl","skin":0,"weapons":[],"jobID":"civil_1","groupId":"Civil","cat":"Жители","spawnGroup":"Civil","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":0,"maxArmor":0,"playerSpawn":"ply:SetMaxArmor(0)\n\t\tply:SetArmor(0)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_CIS1","name":"САД | Генерал Гривус","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/droids/grievous.mdl","skin":0,"weapons":[],"jobID":"CIS1","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":500,"maxHealth":500,"armor":500,"maxArmor":500,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(500)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(500)\t\t\t\t\t\t\t\t-- Установка кол-ва брони\n\t\tply:SetMaxHealth(500)\n\t\tply:SetHealth(500)\n\t\tply:lscsSetMaxForce(0)\n\t\tply:lscsSetForce(0)\n\t\tply:SetWalkSpeed(90);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(500);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_ja4\", true )\n\t\tply:lscsAddInventory( \"item_saberhilt_ja2\", false )\n\t\tply:lscsAddInventory( \"item_crystal_labradorite\", true )\n\t\tply:lscsAddInventory( \"item_crystal_limegreen\", false )\n\t\tply:lscsAddInventory( \"item_stance_warriordual\", true )\n\t\tply:lscsAddInventory( \"item_stance_vaapaddual\", true )\n\t\tply:lscsAddInventory( \"item_stance_agiledual\", true )\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_CIS2","name":"САД | B1","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/droids/b1.mdl","skin":0,"weapons":["arccw_k_e5"],"jobID":"CIS2","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":50,"maxArmor":50,"playerSpawn":"ply:SetMaxArmor(50)\n\t\tply:SetArmor(50)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_CIS9090","name":"САД | B1 Десантник","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/droids/b1.mdl","skin":0,"weapons":["arccw_k_e5","arccw_k_e5c","jet_mk10"],"jobID":"CIS9090","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":1,"2":1,"3":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":50,"maxArmor":50,"playerSpawn":"ply:SetMaxArmor(50)\n\t\tply:SetArmor(50)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_CIS3","name":"САД | B1 Штурмовик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/droids/b1.mdl","skin":0,"weapons":["arccw_k_sg6","arccw_k_z4"],"jobID":"CIS3","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":50,"maxArmor":50,"playerSpawn":"ply:SetMaxArmor(50)\n\t\tply:SetArmor(50)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_CIS4","name":"САД | B1 Снайпер","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/droids/b1.mdl","skin":0,"weapons":["arccw_k_e5s","arccw_k_e5"],"jobID":"CIS4","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":50,"maxArmor":50,"playerSpawn":"ply:SetMaxArmor(50)\n\t\tply:SetArmor(50)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_CIS9","name":"САД | B2","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/droids/b2.mdl","skin":0,"weapons":["arccw_k_b2hand"],"jobID":"CIS9","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":200,"maxHealth":200,"armor":400,"maxArmor":400,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(400)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(400)\n\t\tply:SetMaxHealth(200)\n\t\tply:SetHealth(200)\n\t\tply:SetWalkSpeed(70);\n\t\tply:SetRunSpeed(150);\t\t\t\t\t\t\t\t\t-- Установка кол-ва брони","isStandardPlayerSpawn":false},{"teamVar":"TEAM_CIS10","name":"САД | B2 Десантник","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/droids/b2.mdl","skin":1,"weapons":["arccw_k_b2hand","jet_mk10"],"jobID":"CIS10","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":200,"maxHealth":200,"armor":400,"maxArmor":400,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(400)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(400)\n\t\tply:SetMaxHealth(200)\n\t\tply:SetHealth(200)\n\t\tply:SetWalkSpeed(70);\n\t\tply:SetRunSpeed(150);\t\t\t\t\t\t\t\t\t-- Установка кол-ва брони","isStandardPlayerSpawn":false},{"teamVar":"TEAM_CIS11","name":"САД | BX","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/droids/bx.mdl","skin":0,"weapons":["weapon_vibrosword","arccw_k_e5bx","arccw_k_e5s","arccw_k_nade_thermal","arccw_k_nade_impact"],"jobID":"CIS11","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(100)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(100)\n\t\tply:lscsSetMaxForce(0)\n\t\tply:lscsSetForce(0)\n\t\tply:SetWalkSpeed(125);\n\t\tply:SetRunSpeed(300);\n\t\tply:lscsAddInventory( \"item_stance_warrior\", true )\t\t\t\t\t\t\t\t\t-- Установка кол-ва брони","isStandardPlayerSpawn":false},{"teamVar":"TEAM_CIS1121","name":"САД | BX Командир","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/droids/bx.mdl","skin":1,"weapons":["weapon_vibrosword","arccw_k_e5bx","arccw_k_e5s","arccw_k_nade_thermal","arccw_k_nade_impact"],"jobID":"CIS1121","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(100)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(100)\n\t\tply:lscsSetMaxForce(0)\n\t\tply:lscsSetForce(0)\n\t\tply:SetWalkSpeed(125);\n\t\tply:SetRunSpeed(300);\n\t\tply:lscsAddInventory( \"item_stance_warrior\", true )\t\t\t\t\t\t\t\t\t-- Установка кол-ва брони","isStandardPlayerSpawn":false},{"teamVar":"TEAM_CIS14","name":"САД | BX Cуперкоммандос","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/droids/bx.mdl","skin":5,"weapons":["weapon_vibrosword","arccw_k_e5bx","arccw_k_e5s","arccw_k_nade_thermal","arccw_k_nade_impact","arccw_k_nade_sequencecharger","nn_invis"],"jobID":"CIS14","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":1,"2":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":150,"maxArmor":150,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(150)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(150)\n\t\tply:lscsSetMaxForce(0)\n\t\tply:lscsSetForce(0)\n\t\tply:SetWalkSpeed(125);\n\t\tply:SetRunSpeed(300);\n\t\tply:lscsAddInventory( \"item_stance_warrior\", true )\n\t\tply:lscsAddInventory( \"item_stance_faststyle\", true )","isStandardPlayerSpawn":false},{"teamVar":"TEAM_CIS15","name":"САД | Магнастраж","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/droids/magnaguard.mdl","skin":0,"weapons":["weapon_lscs_purgestaff"],"jobID":"CIS15","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":200,"maxHealth":200,"armor":200,"maxArmor":200,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(200)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(200)\n\t\tply:SetMaxHealth(200)\n\t\tply:SetHealth(200)\n\t\tply:SetWalkSpeed(150);\n\t\tply:SetRunSpeed(300);\n\t\tply:lscsSetMaxForce(0)\n\t\tply:lscsSetForce(0)\n\t\tply:lscsAddInventory( \"item_stance_warrior\", true )","isStandardPlayerSpawn":false},{"teamVar":"TEAM_CIS15_2","name":"САД | Убийца Джедаев","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/droids/magnaguard.mdl","skin":1,"weapons":["arccw_k_weapon_antimaterial"],"jobID":"CIS15_2","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":300,"maxHealth":300,"armor":300,"maxArmor":300,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(300)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(300)\n\t\tply:SetMaxHealth(300)\n\t\tply:SetHealth(300)\n\t\tply:lscsSetMaxForce(300)\n\t\tply:lscsSetForce(300)\n\t\tply:SetWalkSpeed(90);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(400);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_challenger\", true )\n\t\tply:lscsAddInventory( \"item_saberhilt_challenger\", false )\n\t\tply:lscsAddInventory( \"item_crystal_garnet\", true )\n\t\tply:lscsAddInventory( \"item_crystal_garnet\", false )\n\t\tply:lscsAddInventory( \"item_stance_dualwield\", true )\n\t\tply:lscsAddInventory( \"item_stance_soresudual\", true )\n\t\tply:lscsAddInventory( \"item_stance_vaapaddual\", true )\n\t\tply:lscsAddInventory( \"item_stance_visigothdual\", true )\n\t\tply:lscsAddInventory( \"item_stance_agiledual\", true )\n\t\tply:lscsAddInventory( \"item_stance_dancerdual\", true )\n\t\tply:lscsAddInventory( \"item_stance_shiichotwo\", true )\n\t\tply:lscsAddInventory( \"item_force_sense1\", true )\n\t\tply:lscsAddInventory( \"item_stance_crescentdual\", true )\n\t\tply:lscsAddInventory( \"item_stance_juggernautdual\", true )\n\t\tply:lscsAddInventory( \"item_stance_warriordual\", true )\n\t\tply:lscsAddInventory( \"item_stance_shiensodual\", true )\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_CIS17","name":"САД | Дроид тактик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/tactic.mdl","skin":0,"weapons":["arccw_k_e5","arccw_k_e5s","arccw_k_nade_thermal","arccw_k_nade_impact"],"jobID":"CIS17","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_CIS24","name":"КНС | Наёмник","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/bandit/pm_civ_bandit_human_male.mdl","skin":11,"weapons":["arccw_k_a620su","arccw_k_rg4d","arccw_k_nade_thermal","arccw_k_nade_impact"],"jobID":"CIS24","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Mando4","name":"КНС | Мандалорец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/mando/default/default.mdl","skin":0,"weapons":["arccw_k_sg6","arccw_k_e5c","arccw_k_nade_thermal","arccw_k_nade_impact"],"jobID":"Mando4","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Mando67","name":"КНС | Мандалорка","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/mando/default/female.mdl","skin":0,"weapons":["arccw_k_sg6","arccw_k_e5c","arccw_k_nade_thermal","arccw_k_nade_impact","jet_mk10"],"jobID":"Mando67","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":1,"9":0,"10":0,"11":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(200)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(200)\n\t\tply:SetWalkSpeed(150);\n\t\tply:SetRunSpeed(300);","isStandardPlayerSpawn":false},{"teamVar":"TEAM_CIS29","name":"КНС | Трандошан Коммандос","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/garnac/pm_trandoshan_garnac.mdl","skin":0,"weapons":["arccw_k_launcher_smartlauncher","arccw_k_rg4d","arccw_k_a280c","arccw_k_nade_thermal","arccw_k_nade_detonite","arccw_k_nade_impact"],"jobID":"CIS29","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":300,"maxArmor":300,"playerSpawn":"ply:SetMaxArmor(300)\n\t\tply:SetArmor(300)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_CIS30","name":"КНС | Нимбус Коммандос","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/panixida/kotez.mdl","skin":0,"weapons":["arccw_k_dlt74","arccw_k_rg4d","arccw_k_nade_thermal","arccw_k_nade_detonite","arccw_k_nade_impact"],"jobID":"CIS30","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(200)\t\t\t\t\t\t\t-- Установка максимального кол-ва брони\n\t\tply:SetArmor(200)\n\t\tply:SetWalkSpeed(125);\n\t\tply:SetRunSpeed(250);\t\t\t\t\t\t\t\t\t-- Установка кол-ва брони","isStandardPlayerSpawn":false},{"teamVar":"TEAM_Mando","name":"КНС | Мандалорский Суперкоммандос","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/mando/desertir/alpha_02.mdl","skin":0,"weapons":["arccw_k_cr2s","arccw_sops_galactic_mandorifle","arccw_k_nade_thermal","arccw_k_nade_impact","arccw_k_nade_thermalimploder","jet_mk10"],"jobID":"Mando","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":1,"4":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Mando1","name":"КНС | Мандалор Восстановитель Alpha-Ø2","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/mando/desertir/alpha_02.mdl","skin":1,"weapons":["arccw_k_cr2s","arccw_sops_galactic_mandorifle","arccw_k_nade_thermal","arccw_k_nade_impact","arccw_k_nade_thermalimploder"],"jobID":"Mando1","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":2,"4":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":300,"maxArmor":300,"playerSpawn":"ply:SetMaxArmor(300)\n\t\tply:SetArmor(300)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Mando3","name":"КНС | Шпионка","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":0,"b":0,"a":255},"worldModel":"models/mando/default/female.mdl","skin":0,"weapons":["arccw_k_rg4d","arccw_k_e5bx"],"jobID":"Mando3","groupId":"CIS","cat":"Сепаратисты","spawnGroup":"Droids","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":1,"3":0,"4":0,"5":0,"6":0,"7":0,"8":1,"9":1,"10":1,"11":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_CTPRG","name":"Корпус CT | Чистильщик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/trooper/para_ct.mdl","skin":0,"weapons":[],"jobID":"CTPRG","groupId":"CT","cat":"Бойцы поддержки","spawnGroup":"Clones","rank":"CPL","spec":"PRG","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_PP20","name":"Передовой Полк | Чистильщик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/hawkbat/eng.mdl","skin":0,"weapons":[],"jobID":"PP20","groupId":"PP","cat":"Передовой Полк","spawnGroup":"Clones","rank":"CPL","spec":"PRG","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_41stPRG","name":"Батальон «Сарлакк» | Чистильщик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":131,"g":41,"b":70,"a":255},"worldModel":"models/41/para.mdl","skin":0,"weapons":[],"jobID":"41stPRG","groupId":"41st","cat":"Батальон «Сарлакк»","spawnGroup":"Clones","rank":"CPL","spec":"PRG","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_501stPRG","name":"Рота «Лавина» | Чистильщик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":237,"g":63,"b":71,"a":255},"worldModel":"models/501/para.mdl","skin":0,"weapons":[],"jobID":"501stPRG","groupId":"501st","cat":"Рота «Лавина»","spawnGroup":"Clones","rank":"CPL","spec":"PRG","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_GuardPRG","name":"Корусантская Гвардия | Чистильщик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":71,"a":255},"worldModel":"models/guard/para.mdl","skin":1,"weapons":[],"jobID":"GuardPRG","groupId":"Guard","cat":"Корусантская Гвардия","spawnGroup":"Clones","rank":"CPL","spec":"PRG","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_JEDI_PLO","name":"Орден Джедаев | Легендарный Джедай Plo Koon","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":90,"g":0,"b":157,"a":255},"worldModel":"models/jedi/plo_kasan.mdl","skin":0,"weapons":["weapon_lscs"],"jobID":"Plo","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{"0":0,"1":0,"2":2,"3":2,"4":0,"5":2,"6":0,"7":0,"8":2,"9":1,"10":2,"11":2,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":300,"maxHealth":300,"armor":200,"maxArmor":200,"playerSpawn":"-- Функции которые выполняются при спавне\n\t\tply:SetMaxArmor(200)                                      -- Установка максимального кол-ва брони\n\t\tply:SetArmor(200)                                         -- Установка кол-ва брони\n\t\tply:SetMaxHealth(300)\n\t\tply:SetHealth(300)\n\t\tply:lscsSetMaxForce(500)\n\t\tply:lscsSetForce(500)\n\t\tply:SetWalkSpeed(130);                                    -- Скорость обычной ходьбы(по умолчанию 100)\n\t\tply:SetRunSpeed(280);                                      -- Скорость бега(по умолчанию 225)\n\t\tply:lscsAddInventory( \"item_saberhilt_plo\", true )     -- \"\" - Предмет, true - Если в правую руку, false - в левую(Для стоек только true)\n\t\tply:lscsAddInventory( \"item_crystal_sapphire\", true )\n\t\tply:lscsAddInventory( \"item_stance_shiicho\", true )\n\t\tply:lscsAddInventory( \"item_stance_niman\", true )\n\t\tply:lscsAddInventory( \"item_stance_shienso\", true )\n\t\tply:lscsAddInventory( \"item_force_jumpiii\", true )\n\t\tply:lscsAddInventory( \"item_force_whirlwind\", true )\n\t\tply:lscsAddInventory( \"item_force_throw\", true )\n\t\tply:lscsAddInventory( \"item_force_pulliii\", true )\n\t\tply:lscsAddInventory( \"item_force_pushiii\", true )\n\t\tply:lscsAddInventory( \"item_force_betterheal\", true )\n\t\tply:lscsAddInventory( \"item_force_adrenaline\", true )\n\t\tply:lscsAddInventory( \"item_force_meditateii\", true )\n\t\tply:lscsAddInventory( \"item_force_sense1\", true )\n\t\tply:lscsAddInventory( \"item_force_sfbarrier\", true )\n\t\tply:lscsAddInventory( \"item_force_judgementii\", true )\n\t\tply:lscsAddInventory( \"item_force_sfrockthrow\", true )\n\t\t\n\t\tply:lscsCraftSaber()                                      -- Крафт меча, объязательно в конце","isStandardPlayerSpawn":false},{"teamVar":"TEAM_GuardBracer","name":"Корусантская Гвардия | ARC Bracer","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":71,"a":255},"worldModel":"models/donat/bracer.mdl","skin":0,"weapons":[],"jobID":"GuardBracer","groupId":"Guard","cat":"Корусантская Гвардия","spawnGroup":"Clones","rank":"","spec":"Bracer","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_SOBA","name":"БСО | Клон-Командующий ССО","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":71,"a":255},"worldModel":"models/hydra/trooper2.mdl","skin":0,"weapons":[],"jobID":"SOBA","groupId":"SOB","cat":"Бригада Специальных Операций","spawnGroup":"Clones","rank":"","spec":"Bracer","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":200,"maxHealth":200,"armor":200,"maxArmor":200,"playerSpawn":"ply:SetMaxArmor(200)\n\t\tply:SetArmor(200)\n\t\tply:SetHealth(200)\n\t\tply:SetMaxHealth(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Champ","name":"Корпус CT | Чемпион","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":71,"a":255},"worldModel":"models/champ/champ.mdl","skin":0,"weapons":[],"jobID":"Champ","groupId":"CT","cat":"Великая Армия Республики","spawnGroup":"Clones","rank":"","spec":"Champion","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":200,"maxHealth":200,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)\n\t\tply:SetHealth(200)\n\t\tply:SetMaxHealth(200)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_Favor","name":"Корпус CT | Фаворит","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":71,"a":255},"worldModel":"models/champ/champ.mdl","skin":1,"weapons":[],"jobID":"Favor","groupId":"CT","cat":"Великая Армия Республики","spawnGroup":"Clones","rank":"","spec":"Favorite","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":150,"maxHealth":150,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)\n\t\tply:SetHealth(150)\n\t\tply:SetMaxHealth(150)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_104CC","name":"104-ый Батальон | Командир","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":131,"g":41,"b":70,"a":255},"worldModel":"models/104/trooper.mdl","skin":1,"weapons":[],"jobID":"104CC","groupId":"104th","cat":"Волчья стая","spawnGroup":"Clones","rank":"","spec":"СС","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_104CT","name":"104-ый Батальон | Боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":131,"g":41,"b":70,"a":255},"worldModel":"models/104/trooper.mdl","skin":0,"weapons":[],"jobID":"104CT","groupId":"104th","cat":"Волчья стая","spawnGroup":"Clones","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_104MED","name":"104-ый Батальон | Полевой Медик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":131,"g":41,"b":70,"a":255},"worldModel":"models/104/trooper.mdl","skin":4,"weapons":[],"jobID":"104MED","groupId":"104th","cat":"Волчья стая","spawnGroup":"Clones","rank":"","spec":"MED","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_104ENG","name":"104-ый Батальон | Инженер","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":131,"g":41,"b":70,"a":255},"worldModel":"models/104/eng.mdl","skin":0,"weapons":[],"jobID":"104ENG","groupId":"104th","cat":"Волчья стая","spawnGroup":"Clones","rank":"","spec":"ENG","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_104PIL","name":"104-ый Батальон | Пилот","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":131,"g":41,"b":70,"a":255},"worldModel":"models/104/pilot.mdl","skin":0,"weapons":[],"jobID":"104PIL","groupId":"104th","cat":"Волчья стая","spawnGroup":"Clones","rank":"","spec":"PIL","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_104ARF","name":"104-ый Батальон | Разведчик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":131,"g":41,"b":70,"a":255},"worldModel":"models/104/arf.mdl","skin":0,"weapons":[],"jobID":"104ARF","groupId":"104th","cat":"Волчья стая","spawnGroup":"Clones","rank":"CPL","spec":"ARF","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_104CTHEV","name":"104-ый Батальон | Тяжёлый Боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":131,"g":41,"b":70,"a":255},"worldModel":"models/104/heavy.mdl","skin":0,"weapons":[],"jobID":"104HEV","groupId":"104th","cat":"Волчья стая","spawnGroup":"Clones","rank":"CPL","spec":"HEV","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_104ARC","name":"104-ый Батальон | ARC","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":131,"g":41,"b":70,"a":255},"worldModel":"models/104/arc.mdl","skin":0,"weapons":[],"jobID":"104ARC","groupId":"104th","cat":"Волчья стая","spawnGroup":"Clones","rank":"CPL","spec":"ARC","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_104PRG","name":"104-ый Батальон | Чистильщик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":71,"a":255},"worldModel":"models/104/para.mdl","skin":0,"weapons":[],"jobID":"104PRG","groupId":"104th","cat":"Волчья стая","spawnGroup":"Clones","rank":"CPL","spec":"PRG","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_SF1","name":"16-я Эскадрилья | Боец","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/teni/trooper.mdl","skin":1,"weapons":[],"jobID":"SF1","groupId":"SF","cat":"16-я Эскадрилья","spawnGroup":"Clones","rank":"PVT","spec":"","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_SF2","name":"16-я Эскадрилья | Командир","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/teni/trooper.mdl","skin":1,"weapons":[],"jobID":"SF2","groupId":"SF","cat":"16-я Эскадрилья","spawnGroup":"Clones","rank":"","spec":"CC","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":5,"5":0,"6":0,"7":0,"8":0,"9":1,"10":0,"11":0,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_SF3","name":"16-я Эскадрилья | Полевой Медик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/teni/med.mdl","skin":4,"weapons":[],"jobID":"SF3","groupId":"SF","cat":"16-я Эскадрилья","spawnGroup":"Clones","rank":"PVT","spec":"MED","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":2,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_SF4","name":"16-я Эскадрилья | Инженер","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/teni/eng.mdl","skin":0,"weapons":[],"jobID":"SF4","groupId":"SF","cat":"16-я Эскадрилья","spawnGroup":"Clones","rank":"PVT","spec":"ENG","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_SF7","name":"16-я Эскадрилья | Пилот","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/teni/pilot.mdl","skin":0,"weapons":[],"jobID":"SF7","groupId":"SF","cat":"16-я Эскадрилья","spawnGroup":"Clones","rank":"PVT","spec":"PIL","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_SF8","name":"16-я Эскадрилья | ARC","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/teni/arc.mdl","skin":0,"weapons":[],"jobID":"SF8","groupId":"SF","cat":"16-я Эскадрилья","spawnGroup":"Clones","rank":"CPL","spec":"ARC","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":5,"10":0,"11":0,"12":0,"13":0},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_SF20","name":"16-я Эскадрилья | Чистильщик","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/teni/para.mdl","skin":0,"weapons":[],"jobID":"SF20","groupId":"SF","cat":"16-я Эскадрилья","spawnGroup":"Clones","rank":"CPL","spec":"PRG","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_74_Y_POLK_KOMANDIR","name":"74-й Полк | Командир","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/74/cmd.mdl","skin":0,"weapons":["nn_hands"],"jobID":"new_job_9602","groupId":"74th","cat":"74-й Взвод","spawnGroup":"Clones","rank":"SGT","spec":"CO","bodygroups":{"0":0,"1":0,"2":0,"3":0,"4":0,"5":1,"6":0,"7":0,"8":0,"9":1},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":100,"maxHealth":100,"armor":100,"maxArmor":100,"playerSpawn":"ply:SetMaxArmor(100)\n\t\tply:SetArmor(100)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_VELICHAYSHIY_USTAV_BRATAN","name":"Величайший | Устав братан","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":100,"b":0,"a":255},"worldModel":"models/kniga/trooper.mdl","skin":0,"weapons":["nn_hands"],"jobID":"Ustavbrat","groupId":"GAR","cat":"Великая Армия Республики","spawnGroup":"Clones","rank":"MC","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":1000,"maxHealth":1000,"armor":1000,"maxArmor":1000,"playerSpawn":"ply:SetMaxArmor(1000)\n\t\tply:SetArmor(1000)\n\t\tply:SetHealth(1000)\n\t\tply:SetMaxHealth(1000)","isStandardPlayerSpawn":true},{"teamVar":"TEAM_ORDEN_DZHEDAEV_MASTER_TEN_ARTES","name":"Орден Джедаев | Мастер-тень Artes","has_backpack":false,"has_jetpack":false,"has_nvg":false,"has_thermal":false,"color":{"r":0,"g":255,"b":251,"a":255},"worldModel":"models/gonzo/tenarshaddaaarmourpack/archaelogymaster/archaelogymaster.mdl","skin":0,"weapons":["nn_hands","weapon_lscs"],"jobID":"Aizensosuke","groupId":"Jedi","cat":"Орден Джедаев","spawnGroup":"Jedi","rank":"","spec":"","bodygroups":{},"locked_bodygroups":[],"allowed_bodygroups":[],"banned_bodygroups":[],"hidden_bodygroups":[],"health":500,"maxHealth":500,"armor":300,"maxArmor":300,"playerSpawn":"ply:SetMaxArmor(300)\n\t\tply:SetArmor(300)\n\t\tply:SetHealth(500)\n\t\tply:SetMaxHealth(500)","isStandardPlayerSpawn":true}],"formations":[]};
const BUNDLED_ARSENAL_DATA = {"maxWeight":50,"weapons":[{"name":"DC-17","class":"arccw_k_dc17","desc":"Бластер-пистолет","rank":"RCT","spec":"","weight":2.5,"category":"Табельное"},{"name":"DC-17 Dual","class":"arccw_k_dc17_akimbo","desc":"Бластер-пистолет","rank":"JLT","spec":"","weight":2.5,"category":"Табельное"},{"name":"DC-17s","class":"arccw_k_dc17s","desc":"Бластер-пистолет","rank":"","spec":"ARC","weight":2.5,"category":"Табельное"},{"name":"DC-17s Dual","class":"arccw_k_dc17s_dual","desc":"Бластер-пистолет","rank":"","spec":"ARC","weight":2.5,"category":"Табельное"},{"name":"DC-15sa","class":"arccw_k_dc15sa","desc":"Бластер-пистолет","rank":"","spec":"CM","weight":2.5,"category":"Табельное"},{"name":"X-11","class":"arccw_sops_republic_x11","desc":"Бластер-пистолет","rank":"","spec":"SO","weight":2.5,"category":"Табельное"},{"name":"Dl-44","class":"arccw_k_dl44","desc":"Бластер-пистолет","rank":"","spec":"Mando","weight":2.5,"category":"Табельное"},{"name":"DC-15A","class":"arccw_k_dc15a_grenadier","desc":"Бластер-винтовка","rank":"RCT","spec":"","weight":2.5,"category":"Винтовки"},{"name":"DC-15S","class":"arccw_k_dc15s","desc":"Бластер-карабин","rank":"RCT","spec":"","weight":2.5,"category":"Карабины"},{"name":"DC-15SE","class":"arccw_k_dc15s_grenadier","desc":"Бластер-карабин","rank":"","spec":"ARF","weight":2.5,"category":"Карабины"},{"name":"EE-3","class":"arccw_k_ee3e","desc":"Бластер-карабин","rank":"","spec":"Mando","weight":2.5,"category":"Карабины"},{"name":"DC-19","class":"arccw_sops_republic_dc19","desc":"Бластер-карабин","rank":"","spec":"AG","weight":2.5,"category":"Карабины"},{"name":"DP-24","class":"arccw_k_dp24","desc":"Бластер-автомат","rank":"","spec":"UNV","weight":2.5,"category":"Карабины"},{"name":"Westar-M5","class":"arccw_k_westarm5","desc":"Бластер-автомат","rank":"","spec":"ARC","weight":2.5,"category":"Карабины"},{"name":"DC-17m Rifle","class":"arccw_k_dc17m_rifle_republic","desc":"Модульный автомат-бластер коммандос","rank":"","spec":"RC","weight":2.5,"category":"Карабины"},{"name":"E-9","class":"arccw_k_republic_e9","desc":"Бластер-автомат","rank":"","spec":"PRT","weight":2.5,"category":"Карабины"},{"name":"RX-21","class":"arccw_sops_republic_rx21","desc":"Бластер-автомат","rank":"","spec":"SO","weight":2.5,"category":"Карабины"},{"name":"CR-2","class":"arccw_k_cr2s","desc":"Бластер-автомат","rank":"","spec":"MSC","weight":2.5,"category":"Карабины"},{"name":"DP-23","class":"arccw_k_dp23","desc":"Бластер-дробовик","rank":"","spec":"ENG","weight":2.5,"category":"Дробовики"},{"name":"DP-23с","class":"arccw_k_dp23c","desc":"Бластер-дробовик","rank":"","spec":"PRG","weight":2.5,"category":"Дробовики"},{"name":"DP-24c","class":"arccw_k_dp24c","desc":"Бластер-дробовик","rank":"","spec":"UNV","weight":2.5,"category":"Дробовики"},{"name":"DC-17m Shotgun","class":"arccw_k_dc17m_shotgun_republic","desc":"Модульный бластер-дробовик","rank":"","spec":"RC","weight":2.5,"category":"Дробовики"},{"name":"MD-12x","class":"arccw_sops_republic_md12x","desc":"Бластер-дробовик","rank":"","spec":"SO","weight":2.5,"category":"Дробовики"},{"name":"SB-2","class":"arccw_k_sb2","desc":"Бластер-дробовик","rank":"","spec":"MRK","weight":2.5,"category":"Экипировка"},{"name":"Valken-38x","class":"arccw_k_valken38","desc":"Снайперская бластер-винтовка","rank":"","spec":"ARF","weight":2.5,"category":"Винтовки"},{"name":"DC-15x","class":"arccw_k_dc15x","desc":"Снайперская бластер-винтовка","rank":"","spec":"SN","weight":2.5,"category":"Винтовки"},{"name":"DC-15xr","class":"arccw_k_dc15xr","desc":"Снайперская бластер-винтовка","rank":"","spec":"PRG","weight":2.5,"category":"Винтовки"},{"name":"DC-17m Sniper","class":"arccw_k_dc17m_sniper_republic","desc":"Модульная бластер-винтовка","rank":"","spec":"RC","weight":2.5,"category":"Винтовки"},{"name":"T-702","class":"arccw_sops_republic_t702","desc":"Снайперская бластер-винтовка","rank":"","spec":"MRK","weight":2.5,"category":"Винтовки"},{"name":"arccw_k_iqa11","class":"arccw_k_iqa11","desc":"Снайперская бластер-винтовка","rank":"","spec":"Mando","weight":2.5,"category":"Винтовки"},{"name":"Amban","class":"arccw_sops_galactic_mandorifle","desc":"Снайперская бластер-винтовка","rank":"","spec":"MSC","weight":2.5,"category":"Винтовки"},{"name":"Z-6","class":"arccw_k_z6","desc":"Лучемёт","rank":"","spec":"SM","weight":2.5,"category":"Лучемёты"},{"name":"DLT-23v","class":"arccw_sops_republic_dlt23v","desc":"Лучемёт","rank":"","spec":"HEV","weight":2.5,"category":"Лучемёты"},{"name":"ZX-6","class":"arccw_sops_republic_z6x","desc":"Лучëмет","rank":"","spec":"MRK","weight":2.5,"category":"Лучемёты"},{"name":"RPS-6","class":"arccw_k_launcher_rps6","desc":"Ракетница","rank":"","spec":"DM","weight":2.5,"category":"Взрывчатка"},{"name":"PLX-1","class":"arccw_k_launcher_plx1","desc":"Ракетница","rank":"","spec":"HEV","weight":2.5,"category":"Взрывчатка"},{"name":"DC-17m Launcher","class":"arccw_k_dc17m_launcher_republic","desc":"Модульный гранатомёт","rank":"","spec":"RC","weight":2.5,"category":"Взрывчатка"},{"name":"Shield","class":"arccw_k_republicshield","desc":"Баллистический щит","rank":"","spec":"SD","weight":2.5,"category":"Экипировка"},{"name":"Shield","class":"arccw_k_coruscantguardshield","desc":"Баллистический щит","rank":"","spec":"SK","weight":2.5,"category":"Экипировка"},{"name":"Vibro Knife","class":"vibrokinfe_base","desc":"Вибро нож","rank":"","spec":"CM","weight":2.5,"category":"Ближнее"},{"name":"Stimpistol","class":"arccw_stimpistol","desc":"Бакта пистолет","rank":"","spec":"CM","weight":2.5,"category":"Экипировка"},{"name":"Grappling hook","class":"nn_grapple","desc":"Крюк-Кошка","rank":"","spec":"GH","weight":2.5,"category":"Экипировка"},{"name":"Electrostaff","class":"weapon_lscs_mandostaff","desc":"Посох","rank":"","spec":"PRT","weight":2.5,"category":"Ближнее"},{"name":"Vibro Sword","class":"weapon_lscs_electrokatana","desc":"Вибро меч","rank":"","spec":"MSC","weight":2.5,"category":"Ближнее"},{"name":"Импакт-граната","class":"arccw_k_nade_impact","desc":"Метательное средство","rank":"","spec":"GN","weight":2.5,"category":"Взрывчатка"},{"name":"Термальный детонатор","class":"arccw_k_nade_thermal","desc":"Метательное средство","rank":"","spec":"GN","weight":2.5,"category":"Взрывчатка"},{"name":"Дымовая граната","class":"arccw_k_nade_smoke","desc":"Метательное средство","rank":"","spec":"GN","weight":2.5,"category":"Взрывчатка"},{"name":"Поджигательная граната","class":"arccw_k_nade_thermite","desc":"Метательное средство","rank":"","spec":"GN","weight":2.5,"category":"Взрывчатка"},{"name":"Дезориентирующая граната","class":"arccw_k_nade_flashbang","desc":"Метательное средство","rank":"","spec":"GN","weight":2.5,"category":"Взрывчатка"},{"name":"Стан-граната","class":"arccw_k_nade_stun","desc":"Метательное средство","rank":"","spec":"SK","weight":2.5,"category":"Взрывчатка"},{"name":"Сонарная граната","class":"arccw_k_nade_sonar","desc":"Метательное средство","rank":"","spec":"ARF","weight":2.5,"category":"Взрывчатка"},{"name":"Термальная граната","class":"arccw_k_nade_thermalimploder","desc":"Метательное средство","rank":"","spec":"HEV","weight":2.5,"category":"Взрывчатка"},{"name":"Ионная граната","class":"arccw_k_nade_c25","desc":"Метательное средство","rank":"","spec":"PRG","weight":2.5,"category":"Взрывчатка"},{"name":"Противотанковая граната","class":"arccw_k_nade_c14","desc":"Метательное средство","rank":"","spec":"SO","weight":2.5,"category":"Взрывчатка"},{"name":"Бакта-граната","class":"arccw_k_nade_bacta","desc":"Метательное средство","rank":"","spec":"MED","weight":2.5,"category":"Взрывчатка"},{"name":"Противопехотный детонатор","class":"arccw_k_nade_detonite","desc":"Подрывное устройство","rank":"","spec":"DM","weight":2.5,"category":"Взрывчатка"},{"name":"Противотанковая мина","class":"arccw_k_nade_antitankmine","desc":"Подрывное устройство","rank":"","spec":"DM","weight":2.5,"category":"Взрывчатка"},{"name":"Ионная мина","class":"arccw_k_nade_sequencecharger","desc":"Подрывное устройство","rank":"","spec":"DM","weight":2.5,"category":"Взрывчатка"},{"name":"С-4","class":"nn_c4","desc":"Подрывное устройство","rank":"","spec":"DM","weight":2.5,"category":"Взрывчатка"},{"name":"Щит Doom","class":"zeus_no_dc17shield","desc":"Щит","rank":"","spec":"SD, Doom","weight":8,"category":"Экипировка"}],"bodygroups":[{"smd":"empty","name":"Снять","desc":"Убрать элемент","category":"Прочее","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet_Pilot.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet_Pilot_Head.smd","name":"Без шлема","desc":"Шлем в руке","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet_Head.smd","name":"В руке","desc":"Шлем в руке","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Head.smd","name":"Без шлема","desc":"Открытое лицо","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet_arc.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet_arcHead.smd","name":"В руке","desc":"Шлем в руках","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Head_arc.smd","name":"Без шлема","desc":"Открытое лицо","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"1phase_helm.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"1phase_head.smd","name":"В руке","desc":"Шлем в руках","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"helmet_scout.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"helmet_scouthead.smd","name":"В руке","desc":"Шлем в руках","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"helmet_head.smd","name":"Без шлема","desc":"Открытое лицо","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Senat8.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Senat9.smd","name":"Визор снят","desc":"Шлем в руках","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Senat10.smd","name":"Без шлема","desc":"Открытое лицо","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Fordo1.smd","name":"Надет","desc":"Шлем на голове","category":"Прочее","weight":0,"reqRank":"","reqSpec":""},{"smd":"Fordo2.smd","name":"В руке","desc":"Шлем в руках","category":"Прочее","weight":0,"reqRank":"","reqSpec":""},{"smd":"a17_helmet.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"a17_helmet2.smd","name":"В руке","desc":"Шлем в руках","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"a17_helmet3.smd","name":"Без шлема","desc":"Открытое лицо","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet_Arf.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet_Arf_Head.smd","name":"В руке","desc":"Шлем в руках","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet151.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet152.smd","name":"В руке","desc":"Шлем в руках","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Senat6.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Senat7.smd","name":"Визор снят","desc":"Шлем в руках","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Senat12.smd","name":"Без шлема","desc":"Открытое лицо","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet_senate.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet_Head_senate.smd","name":"Визор снят","desc":"Шлем в руках","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Head_senate.smd","name":"Без шлема","desc":"Открытое лицо","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Senat13.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Senat14.smd","name":"Без шлема","desc":"Открытое лицо","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet_Para.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet_Para_Head.smd","name":"В руке","desc":"Шлем в руках","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet_Heavy.smd","name":"Надет","desc":"Шлем на голове","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Helmet_Heavy_Head.smd","name":"В руке","desc":"Шлем в руках","category":"Шлем","weight":0,"reqRank":"","reqSpec":""},{"smd":"Visor.smd","name":"Визор (Вниз)","desc":"ПНВ","category":"Модули","weight":0,"reqRank":"","reqSpec":""},{"smd":"Visor UP.smd","name":"Визор (Вверх)","desc":"ПНВ","category":"Модули","weight":0,"reqRank":"","reqSpec":""},{"smd":"ARF_Kilt.smd","name":"Намордник","desc":"Тактический","category":"Модули","weight":0,"reqRank":"","reqSpec":""},{"smd":"Rangefinder.smd","name":"Дальномер (Вниз)","desc":"Бинокль","category":"Модули","weight":0,"reqRank":"CPL","reqSpec":""},{"smd":"Rangefinder UP.smd","name":"Дальномер (Вверх)","desc":"Бинокль","category":"Модули","weight":0,"reqRank":"CPL","reqSpec":""},{"smd":"helmet_mano_2_REWORK_antenna.smd","name":"Дальномер (Вниз)","desc":"Бинокль","category":"Шлем","weight":0,"reqRank":"CPL","reqSpec":""},{"smd":"helmet_mano_2_REWORK_antenna2.smd","name":"Дальномер (Вверх)","desc":"Бинокль","category":"Шлем","weight":0,"reqRank":"CPL","reqSpec":""},{"smd":"a17_rng_down.smd","name":"Дальномер (Вниз)","desc":"Бинокль","category":"Прочее","weight":0,"reqRank":"","reqSpec":""},{"smd":"a17_rng_up.smd","name":"Дальномер (Вверх)","desc":"Бинокль","category":"Прочее","weight":0,"reqRank":"","reqSpec":""},{"smd":"Sunvisor V2.smd","name":"Козырёк №1","desc":"Защита от солнца","category":"Модули","weight":0,"reqRank":"MAJ","reqSpec":""},{"smd":"Helmet_comms.smd","name":"Козырёк №2","desc":"Защита от солнца","category":"Шлем","weight":0,"reqRank":"MAJ","reqSpec":""},{"smd":"Helmet_pads.smd","name":"Козырёк №3","desc":"Защита от солнца","category":"Шлем","weight":0,"reqRank":"MAJ","reqSpec":""},{"smd":"RightPauldron.smd","name":"Правый","desc":"Наплечник +25 Брони","category":"Плечи","weight":3,"reqRank":"JLT","reqSpec":""},{"smd":"LeftPauldron.smd","name":"Левый","desc":"Наплечник +25 Брони","category":"Плечи","weight":3,"reqRank":"JLT","reqSpec":""},{"smd":"DualPauldron.smd","name":"Двойной","desc":"Наплечник +25 Брони","category":"Плечи","weight":3,"reqRank":"JLT","reqSpec":""},{"smd":"Pauldron_alpha.smd","name":"Универсальный","desc":"Наплечник +50 Брони","category":"Плечи","weight":6,"reqRank":"","reqSpec":""},{"smd":"fordo_pauldron.smd","name":"В сторону","desc":"Наплечник +50 Брони","category":"Плечи","weight":6,"reqRank":"","reqSpec":""},{"smd":"a17_pauldron.smd","name":"Огромный","desc":"Наплечник +50 Брони","category":"Плечи","weight":6,"reqRank":"","reqSpec":""},{"smd":"SuperPauldron.smd","name":"Супер «ARC»","desc":"Усиленный Наплечник +50 Брони","category":"Плечи","weight":6,"reqRank":"","reqSpec":"ARC"},{"smd":"Cloak.smd","name":"Плащ","desc":"Тактический","category":"Спина","weight":0,"reqRank":"SGT","reqSpec":""},{"smd":"Cloak_senate.smd","name":"Плащ","desc":"Тактический","category":"Шлем","weight":0,"reqRank":"SGT","reqSpec":""},{"smd":"cloth_hood.smd","name":"Плащ","desc":"Тактический","category":"Спина","weight":0,"reqRank":"","reqSpec":""},{"smd":"arc_chestplate.smd","name":"Броня «ARC»","desc":"Усиленный нагрудник +35 брони","category":"Нагрудник","weight":10,"reqRank":"","reqSpec":"ARC"},{"smd":"Strap_body1.smd","name":"Ремни","desc":"Легкие ремни","category":"Нагрудник","weight":0,"reqRank":"","reqSpec":""},{"smd":"Strap_body2.smd","name":"Ремни с пластиной","desc":"Утяжеленные ремни +10 Брони","category":"Нагрудник","weight":2,"reqRank":"SGT","reqSpec":""},{"smd":"Gunbelt.smd","name":"Пояс","desc":"Тактический","category":"Нагрудник","weight":0,"reqRank":"","reqSpec":""},{"smd":"Straps_alpha.smd","name":"Подтяжки","desc":"Тактические","category":"Нагрудник","weight":0,"reqRank":"","reqSpec":""},{"smd":"Gunbelt_bacta.smd","name":"Бакта-пояс","desc":"Медицинский","category":"Нагрудник","weight":0,"reqRank":"","reqSpec":"MED"},{"smd":"Antenna.smd","name":"Антенна на руке","desc":"Связь","category":"Модули","weight":0,"reqRank":"MAJ","reqSpec":""},{"smd":"Shoulder_ammo.smd","name":"Патронаж","desc":"Запасные обоймы","category":"Прочее","weight":0,"reqRank":"MAJ","reqSpec":""},{"smd":"arc_backpack.smd","name":"Рюкзак «ARC»","desc":"1/3 слотов в инвентаре","category":"Спина","weight":0.5,"reqRank":"","reqSpec":"ARC"},{"smd":"Backpack.smd","name":"Рюкзак","desc":"Все слоты в инвентаре","category":"Спина","weight":3,"reqRank":"","reqSpec":""},{"smd":"Backpack_small.smd","name":"Малый Рюкзак","desc":"1/2 слотов в инвентаре","category":"Спина","weight":1.5,"reqRank":"","reqSpec":""},{"smd":"Jetpack.smd","name":"Джетпак","desc":"Классический","category":"Спина","weight":15,"reqRank":"","reqSpec":"PR"},{"smd":"Jumppack.smd","name":"Джамппак","desc":"Элитный","category":"Спина","weight":7.5,"reqRank":"JLT","reqSpec":""},{"smd":"Radio_alpha.smd","name":"Радио","desc":"На спину","category":"Спина","weight":0,"reqRank":"","reqSpec":""},{"smd":"Kama.smd","name":"Кама","desc":"+15 Брони","category":"Кама","weight":5,"reqRank":"SGT","reqSpec":""},{"smd":"Kama+.smd","name":"Кама «ARC»","desc":"+15 Брони","category":"Кама","weight":5,"reqRank":"","reqSpec":"ARC"},{"smd":"a17_kama.smd","name":"Кама","desc":"+15 Брони","category":"Кама","weight":5,"reqRank":"","reqSpec":""},{"smd":"Dual_Pistols.smd","name":"Две кобуры","desc":"Для двух DC-17","category":"Кобуры","weight":0,"reqRank":"","reqSpec":""},{"smd":"Right_Pistol.smd","name":"Кобура справа","desc":"Для DC-17","category":"Кобуры","weight":0,"reqRank":"","reqSpec":""},{"smd":"Holster_alpha.smd","name":"Две кобуры","desc":"Для двух DC-17","category":"Кобуры","weight":0,"reqRank":"","reqSpec":""},{"smd":"Pistols_alpha.smd","name":"Две кобуры на каму","desc":"Для двух DC-17","category":"Кобуры","weight":0,"reqRank":"SGT","reqSpec":""}],"armorWeights":{"RightPauldron.smd":3,"LeftPauldron.smd":3,"DualPauldron.smd":3,"SuperPauldron.smd":6,"Pauldron_alpha.smd":6,"fordo_pauldron.smd":6,"a17_pauldron.smd":6,"arc_chestplate.smd":10,"Strap_body2.smd":2,"arc_backpack.smd":0.5,"Backpack.smd":3,"Backpack_small.smd":1.5,"Jetpack.smd":15,"Jumppack.smd":7.5,"Kama.smd":5,"Kama+.smd":5,"a17_kama.smd":5}};
const BUNDLED_ARCCW_DATA = {"weapons":[{"Addon":"arccwcgigal","Class":"arccw_k_cgi_an14","Name":"AN-14","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":34,"Num":1,"DamageMin":22,"RPM":430,"DPS":243.7,"DPSMin":157.7,"Clip":33,"Recoil":0.67,"MOA":5,"Range":300,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_btx12","Name":"BTX-12","TriviaClass":"Blaster Shotgun","Modes":"Auto/Semi","Damage":108,"Num":6,"DamageMin":18,"RPM":120,"DPS":216,"DPSMin":36,"Clip":12,"Recoil":2.5,"MOA":50,"Range":75,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_btx32","Name":"BTX-32","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":36,"Num":1,"DamageMin":18,"RPM":600,"DPS":360,"DPSMin":180,"Clip":40,"Recoil":0.54,"MOA":5,"Range":430,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_btx42pistol","Name":"BTX-42 Pistol","TriviaClass":"Hand Flamethrower","Modes":"Semi","Damage":33,"Num":1,"DamageMin":24,"RPM":260,"DPS":143,"DPSMin":104,"Clip":15,"Recoil":1,"MOA":0,"Range":135,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_dc10","Name":"DC-10","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":34,"Num":1,"DamageMin":23,"RPM":360,"DPS":204,"DPSMin":138,"Clip":36,"Recoil":0.7,"MOA":5,"Range":560,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_dc17sa","Name":"DC-17SA","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":33,"Num":1,"DamageMin":24,"RPM":260,"DPS":143,"DPSMin":104,"Clip":15,"Recoil":1,"MOA":0,"Range":135,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_dc21","Name":"DC-21","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":46,"Num":1,"DamageMin":27,"RPM":540,"DPS":414,"DPSMin":243,"Clip":36,"Recoil":0.45,"MOA":5,"Range":450,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_e7","Name":"E-7","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":62,"Num":1,"DamageMin":11,"RPM":250,"DPS":258.3,"DPSMin":45.8,"Clip":22,"Recoil":0.45,"MOA":5,"Range":540,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_iqa11","Name":"IQA-11","TriviaClass":"Blaster Sniper","Modes":"Auto/Semi","Damage":128,"Num":1,"DamageMin":98,"RPM":120,"DPS":256,"DPSMin":196,"Clip":14,"Recoil":1.5,"MOA":5,"Range":900,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_nt220","Name":"NT-220","TriviaClass":"Blaster Sniper","Modes":"Auto/Semi","Damage":165,"Num":1,"DamageMin":105,"RPM":120,"DPS":330,"DPSMin":210,"Clip":14,"Recoil":1.5,"MOA":5,"Range":600,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_nt240x","Name":"NT-240x","TriviaClass":"Blaster Sniper","Modes":"Auto/Semi","Damage":204,"Num":1,"DamageMin":34,"RPM":120,"DPS":408,"DPSMin":68,"Clip":8,"Recoil":4,"MOA":5,"Range":700,"Penetration":10,"DmgType":"DMG_BLAST"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_rps4","Name":"RPS-4","TriviaClass":"Rocket Launcher","Modes":"Auto/Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":60,"DPS":0,"DPSMin":0,"Clip":4,"Recoil":2,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_sc16","Name":"SC-16","TriviaClass":"Blaster Scatter","Modes":"Semi/Burst","Damage":252,"Num":9,"DamageMin":27,"RPM":140,"DPS":588,"DPSMin":63,"Clip":2,"Recoil":2,"MOA":5,"Range":200,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_t20","Name":"T-20","TriviaClass":"Blaster Repeater","Modes":"Auto/Semi","Damage":41,"Num":1,"DamageMin":23,"RPM":320,"DPS":218.7,"DPSMin":122.7,"Clip":65,"Recoil":0.45,"MOA":5,"Range":350,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_t22","Name":"T-22","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto/Semi","Damage":46,"Num":1,"DamageMin":21,"RPM":220,"DPS":168.7,"DPSMin":77,"Clip":65,"Recoil":0.7,"MOA":5,"Range":420,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_vibrokatana","Name":"Vibrokatana","TriviaClass":"Blaster Sniper Rifle","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":600,"DPS":0,"DPSMin":0,"Clip":0,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_westar35c","Name":"WESTAR-35c","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":46,"Num":1,"DamageMin":23,"RPM":240,"DPS":184,"DPSMin":92,"Clip":33,"Recoil":0.76,"MOA":1.5,"Range":280,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_westar35p","Name":"WESTAR-35p","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":33,"Num":1,"DamageMin":24,"RPM":260,"DPS":143,"DPSMin":104,"Clip":15,"Recoil":1,"MOA":0,"Range":135,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_westar35r","Name":"WESTAR-35r","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":38,"Num":1,"DamageMin":11,"RPM":300,"DPS":190,"DPSMin":55,"Clip":55,"Recoil":0.65,"MOA":5,"Range":330,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_westar35s","Name":"WESTAR-35s","TriviaClass":"Blaster Sniper Rifle","Modes":"Auto/Semi","Damage":204,"Num":1,"DamageMin":98,"RPM":120,"DPS":408,"DPSMin":196,"Clip":15,"Recoil":2,"MOA":5,"Range":700,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_westar35sc","Name":"WESTAR-35sc","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":34,"Num":1,"DamageMin":16,"RPM":370,"DPS":209.7,"DPSMin":98.7,"Clip":36,"Recoil":0.45,"MOA":5,"Range":300,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_westar35sg","Name":"WESTAR-35sg","TriviaClass":"Blaster Scatter","Modes":"Semi/Burst","Damage":198,"Num":9,"DamageMin":72,"RPM":140,"DPS":462,"DPSMin":168,"Clip":4,"Recoil":2,"MOA":5,"Range":250,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_westar35smg","Name":"WESTAR-35smg","TriviaClass":"Blaster Submachine Gun","Modes":"Auto/Semi/Burst","Damage":22,"Num":1,"DamageMin":15,"RPM":430,"DPS":157.7,"DPSMin":107.5,"Clip":45,"Recoil":0.3,"MOA":5,"Range":280,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_westar35_gau","Name":"WESTAR GAU-35","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto/Semi","Damage":34,"Num":1,"DamageMin":18,"RPM":170,"DPS":96.3,"DPSMin":51,"Clip":100,"Recoil":0.5,"MOA":0.5,"Range":330,"Penetration":8,"DmgType":"DMG_BLAST"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_westarm5_heavy","Name":"WESTAR M5 Heavy","TriviaClass":"Blaster Heavy Rifle","Modes":"Auto/Semi","Damage":34,"Num":1,"DamageMin":22,"RPM":340,"DPS":192.7,"DPSMin":124.7,"Clip":25,"Recoil":1,"MOA":0.5,"Range":280,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_westarm5_sniper","Name":"WESTAR M5 Sniper","TriviaClass":"Blaster Sniper Rifle","Modes":"Semi","Damage":110,"Num":1,"DamageMin":49,"RPM":80,"DPS":146.7,"DPSMin":65.3,"Clip":15,"Recoil":1.5,"MOA":0.5,"Range":700,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwcgigal","Class":"arccw_k_cgi_z6x_ion","Name":"Z-6 Mortar","TriviaClass":"Blaster Mortar","Modes":"Auto/Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":120,"DPS":0,"DPSMin":0,"Clip":15,"Recoil":4.3,"MOA":5,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccweffects","Class":"arccw_masita_base_updated","Name":"Masita ArcCW Weapon Base","TriviaClass":"","Modes":"Semi","Damage":26,"Num":1,"DamageMin":10,"RPM":750,"DPS":325,"DPSMin":125,"Clip":25,"Recoil":2,"MOA":15,"Range":200,"Penetration":1,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_launcher_e60r","Name":"E-60r","TriviaClass":"Rocket Launcher","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":60,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":4,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_launcher_hh12","Name":"Republic HH-12","TriviaClass":"Rocket Launcher","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":60,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":4,"MOA":0.5,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_launcher_hh12_empire","Name":"Empire HH-12","TriviaClass":"Rocket Launcher","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":60,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":4,"MOA":0.5,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_launcher_plx1","Name":"Republic PLX-1","TriviaClass":"Rocket Launcher","Modes":"Burst","Damage":0,"Num":1,"DamageMin":0,"RPM":180,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":4,"MOA":0.5,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_launcher_plx1_empire","Name":"Empire PLX-1","TriviaClass":"Rocket Launcher","Modes":"Burst","Damage":0,"Num":1,"DamageMin":0,"RPM":180,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":4,"MOA":0.5,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_launcher_rps6","Name":"Republic RPS-6","TriviaClass":"Rocket Launcher","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":60,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":4,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_launcher_rps6_empire","Name":"Empire RPS-6","TriviaClass":"Rocket Launcher","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":60,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":4,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_launcher_smartlauncher","Name":"Smart Launcher","TriviaClass":"Rocket Launcher","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":60,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":4,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_antitankmine","Name":"Anti-Tank Mine","TriviaClass":"Mine","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_bacta","Name":"Bacta Grenade","TriviaClass":"Hand Grenade, Healing Effect","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_base","Name":"Kraken Kabum","TriviaClass":"","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":0,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_blaststick","Name":"Blast Stick","TriviaClass":"Hand Grenade","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_c14","Name":"C-14 Anti-Vehicle Grenade","TriviaClass":"Hand Grenade","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_c25","Name":"C-25 Fragmentation Grenade","TriviaClass":"Hand Grenade, Fragmentation Grenade","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_decoy","Name":"Decoy Grenade","TriviaClass":"Grenade, Decoy","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_detonite","Name":"Detonite Charge","TriviaClass":"Mine","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_dioxis","Name":"Dioxis Grenade","TriviaClass":"Explosive, Dioxis","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_flashbang","Name":"Flash Grenade","TriviaClass":"Hand Grenade, Disorienting","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_impact","Name":"Impact Grenade","TriviaClass":"Hand Grenade, High Explosive","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_plasmagrenade","Name":"Plasma Grenade","TriviaClass":"Hand Grenade, Plasma","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_sequencecharger","Name":"Sequencer Charge","TriviaClass":"Mine","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_shock","Name":"Shock Grenade","TriviaClass":"Hand Grenade, Shock","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_smoke","Name":"Smoke Grenade","TriviaClass":"Hand Grenade, Smoke","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_sonar","Name":"Sonar Grenade","TriviaClass":"Grenade, Sonar","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_stun","Name":"Stun Grenade","TriviaClass":"Hand Grenade, Stun","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_thermal","Name":"Class-A Thermal Detonator","TriviaClass":"Hand Grenade, High Explosive","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_thermalimploder","Name":"Thermal Imploder","TriviaClass":"Hand Grenade, Thermal Implosionator","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_nade_thermite","Name":"Thermite Grenade","TriviaClass":"Blaster, Carbine","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwexplosive","Class":"arccw_k_weapon_antimaterial","Name":"K-43","TriviaClass":"Rifle, Anti-Material Rifle","Modes":"Semi","Damage":700,"Num":1,"DamageMin":350,"RPM":60,"DPS":700,"DPSMin":350,"Clip":8,"Recoil":4,"MOA":0.1,"Range":1300,"Penetration":8,"DmgType":"DMG_BLAST"},{"Addon":"arccwexplosive","Class":"arccw_k_weapon_g125","Name":"G-125","TriviaClass":"Projectile Launcher","Modes":"Auto/Semi/Burst","Damage":34,"Num":1,"DamageMin":32,"RPM":430,"DPS":243.7,"DPSMin":229.3,"Clip":29,"Recoil":1.2,"MOA":0.5,"Range":320,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_9228","Name":"9228 Carbine","TriviaClass":"Blaster Carbine","Modes":"Semi/Burst","Damage":182,"Num":7,"DamageMin":133,"RPM":200,"DPS":606.7,"DPSMin":443.3,"Clip":18,"Recoil":1.4,"MOA":0,"Range":340,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwgexpa","Class":"arccw_k_a274su","Name":"A-274su","TriviaClass":"Blaster Carbine","Modes":"Auto/Semi/Burst","Damage":22,"Num":1,"DamageMin":20,"RPM":700,"DPS":256.7,"DPSMin":233.3,"Clip":45,"Recoil":0.87,"MOA":1,"Range":240,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_a280","Name":"A-280","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":34,"Num":1,"DamageMin":20,"RPM":550,"DPS":311.7,"DPSMin":183.3,"Clip":34,"Recoil":0.86,"MOA":0,"Range":650,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_a280c","Name":"A-280c","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":32,"Num":1,"DamageMin":22,"RPM":550,"DPS":293.3,"DPSMin":201.7,"Clip":40,"Recoil":0.55,"MOA":0,"Range":320,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_a280s","Name":"A-280s","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":31,"Num":1,"DamageMin":23,"RPM":450,"DPS":232.5,"DPSMin":172.5,"Clip":31,"Recoil":0.93,"MOA":0,"Range":430,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_a280su","Name":"A-280su","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":46,"Num":1,"DamageMin":25,"RPM":750,"DPS":575,"DPSMin":312.5,"Clip":25,"Recoil":1.1,"MOA":0,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_a287","Name":"A-287","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":44,"Num":1,"DamageMin":25,"RPM":430,"DPS":315.3,"DPSMin":179.2,"Clip":26,"Recoil":0.65,"MOA":0,"Range":540,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_a620","Name":"A-620","TriviaClass":"Blaster Carbine","Modes":"Auto/Semi/Burst","Damage":48,"Num":1,"DamageMin":28,"RPM":320,"DPS":256,"DPSMin":149.3,"Clip":45,"Recoil":1.15,"MOA":0,"Range":540,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_a620su","Name":"A-620su","TriviaClass":"Blaster Carbine","Modes":"Auto/Semi/Burst","Damage":48,"Num":1,"DamageMin":28,"RPM":600,"DPS":480,"DPSMin":280,"Clip":26,"Recoil":0.55,"MOA":0,"Range":200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_bowcaster","Name":"Bowcaster","TriviaClass":"Blaster Crossbow","Modes":"Semi/Burst","Damage":45,"Num":1,"DamageMin":29,"RPM":400,"DPS":300,"DPSMin":193.3,"Clip":20,"Recoil":0.7,"MOA":0,"Range":350,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_bowcaster_ext","Name":"Bowcaster Extended","TriviaClass":"Blaster Crossbow","Modes":"Semi/Burst","Damage":65,"Num":1,"DamageMin":20,"RPM":400,"DPS":433.3,"DPSMin":133.3,"Clip":15,"Recoil":0.7,"MOA":0,"Range":320,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_bryar","Name":"Bryar Extended","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":38,"Num":1,"DamageMin":22,"RPM":260,"DPS":164.7,"DPSMin":95.3,"Clip":25,"Recoil":1,"MOA":0.5,"Range":260,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_bryar_extended","Name":"Bryar Extended","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":57,"Num":1,"DamageMin":43,"RPM":260,"DPS":247,"DPSMin":186.3,"Clip":20,"Recoil":1.5,"MOA":0.5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_caradune","Name":"Cara Dune Blaster","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":29,"Num":1,"DamageMin":21,"RPM":380,"DPS":183.7,"DPSMin":133,"Clip":25,"Recoil":0.55,"MOA":0.5,"Range":250,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_charriccarbine","Name":"Charric Carbine","TriviaClass":"Blaster Carabine","Modes":"Semi/Burst","Damage":33,"Num":1,"DamageMin":25,"RPM":400,"DPS":220,"DPSMin":166.7,"Clip":31,"Recoil":0.7,"MOA":0,"Range":500,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_cr2","Name":"CR-2","TriviaClass":"Heavy Pistol","Modes":"Auto/Semi/Burst","Damage":20,"Num":1,"DamageMin":15,"RPM":680,"DPS":226.7,"DPSMin":170,"Clip":60,"Recoil":0.75,"MOA":0,"Range":600,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_cr2c","Name":"CR-2c","TriviaClass":"Heavy Pistol","Modes":"Auto/Semi/Burst","Damage":27,"Num":1,"DamageMin":19,"RPM":600,"DPS":270,"DPSMin":190,"Clip":55,"Recoil":0.55,"MOA":0,"Range":750,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_cr2hp","Name":"CR-2hp","TriviaClass":"Heavy Pistol","Modes":"Auto/Semi/Burst","Damage":37,"Num":1,"DamageMin":20,"RPM":500,"DPS":308.3,"DPSMin":166.7,"Clip":35,"Recoil":0.8,"MOA":0,"Range":550,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_cr2s","Name":"CR-2s","TriviaClass":"Heavy Pistol","Modes":"Auto/Semi/Burst","Damage":33,"Num":1,"DamageMin":20,"RPM":700,"DPS":385,"DPSMin":233.3,"Clip":30,"Recoil":0.75,"MOA":0,"Range":600,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_cycler","Name":"Cycler","TriviaClass":"Double-Barrel Sniper","Modes":"Semi","Damage":190,"Num":1,"DamageMin":95,"RPM":120,"DPS":380,"DPSMin":190,"Clip":2,"Recoil":3,"MOA":0,"Range":700,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwgexpa","Class":"arccw_k_cyclerobrez","Name":"Cycler Obrez","TriviaClass":"Shotgun","Modes":"Semi","Damage":279,"Num":9,"DamageMin":225,"RPM":120,"DPS":558,"DPSMin":450,"Clip":2,"Recoil":3,"MOA":0,"Range":1000,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwgexpa","Class":"arccw_k_dc15sc","Name":"DC-15sc","TriviaClass":"Blaster Carbine","Modes":"Auto/Semi/Burst","Damage":37,"Num":1,"DamageMin":22,"RPM":300,"DPS":185,"DPSMin":110,"Clip":35,"Recoil":0.75,"MOA":0,"Range":600,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dc15se","Name":"DC-15se","TriviaClass":"Blaster Carbine","Modes":"Auto/Semi/Burst","Damage":42,"Num":1,"DamageMin":27,"RPM":330,"DPS":231,"DPSMin":148.5,"Clip":25,"Recoil":0.75,"MOA":0,"Range":900,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dc40","Name":"DC-40","TriviaClass":"Outer Rim Submachine Gun","Modes":"Auto/Semi/Burst","Damage":30,"Num":1,"DamageMin":15,"RPM":680,"DPS":340,"DPSMin":170,"Clip":50,"Recoil":0.75,"MOA":0,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dc40c","Name":"DC-40c","TriviaClass":"Outer Rim Submachine Gun","Modes":"Auto/Semi/Burst","Damage":42,"Num":1,"DamageMin":22,"RPM":450,"DPS":315,"DPSMin":165,"Clip":50,"Recoil":0.75,"MOA":0,"Range":400,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dc92","Name":"DC-92","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":65,"Num":1,"DamageMin":39,"RPM":280,"DPS":303.3,"DPSMin":182,"Clip":18,"Recoil":1.56,"MOA":0.5,"Range":170,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_de18","Name":"DE-18","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":72,"Num":1,"DamageMin":39,"RPM":160,"DPS":192,"DPSMin":104,"Clip":15,"Recoil":2.2,"MOA":0.5,"Range":170,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_de18_akimbo","Name":"DE-18 Akimbo","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":72,"Num":1,"DamageMin":39,"RPM":160,"DPS":192,"DPSMin":104,"Clip":30,"Recoil":2,"MOA":0.5,"Range":170,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_defender","Name":"Defender","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":22,"Num":1,"DamageMin":13,"RPM":350,"DPS":128.3,"DPSMin":75.8,"Clip":30,"Recoil":0.5,"MOA":0.5,"Range":270,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_defender_s","Name":"Defender","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":34,"Num":1,"DamageMin":16,"RPM":220,"DPS":124.7,"DPSMin":58.7,"Clip":20,"Recoil":1.2,"MOA":0.5,"Range":340,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dh17","Name":"DH-17","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":27,"Num":1,"DamageMin":20,"RPM":340,"DPS":153,"DPSMin":113.3,"Clip":29,"Recoil":0.6,"MOA":0.5,"Range":400,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dh17c","Name":"DH-17c","TriviaClass":"Blaster Pistol-Carbine","Modes":"Semi/Burst","Damage":30,"Num":1,"DamageMin":23,"RPM":345,"DPS":172.5,"DPSMin":132.2,"Clip":32,"Recoil":0.55,"MOA":0.5,"Range":600,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dh17e","Name":"DH-17e","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":30,"Num":1,"DamageMin":23,"RPM":345,"DPS":172.5,"DPSMin":132.2,"Clip":32,"Recoil":0.55,"MOA":0.5,"Range":600,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dl18","Name":"DL-18","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":32,"Num":1,"DamageMin":17,"RPM":290,"DPS":154.7,"DPSMin":82.2,"Clip":12,"Recoil":0.4,"MOA":0.5,"Range":220,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dl18d","Name":"DL-18d","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":55,"Num":1,"DamageMin":27,"RPM":180,"DPS":165,"DPSMin":81,"Clip":18,"Recoil":0.8,"MOA":0.5,"Range":440,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dl18e","Name":"DL-18e","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":38,"Num":1,"DamageMin":22,"RPM":180,"DPS":114,"DPSMin":66,"Clip":15,"Recoil":0.85,"MOA":0.5,"Range":600,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dl44","Name":"DL-44","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":62,"Num":1,"DamageMin":45,"RPM":260,"DPS":268.7,"DPSMin":195,"Clip":20,"Recoil":1,"MOA":0.5,"Range":250,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dl44e","Name":"DL-44e","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":62,"Num":1,"DamageMin":45,"RPM":260,"DPS":268.7,"DPSMin":195,"Clip":28,"Recoil":1.1,"MOA":0,"Range":250,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dl44_akimbo","Name":"DL-44 Akimbo","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":62,"Num":1,"DamageMin":45,"RPM":260,"DPS":268.7,"DPSMin":195,"Clip":40,"Recoil":1,"MOA":0.5,"Range":250,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dlt16_galexp","Name":"DLT-16","TriviaClass":"Prototype Heavy Rifle","Modes":"Auto/Semi/Burst","Damage":34,"Num":1,"DamageMin":23,"RPM":700,"DPS":396.7,"DPSMin":268.3,"Clip":100,"Recoil":0.74,"MOA":0,"Range":370,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dlt19h_galexp","Name":"DLT-19h","TriviaClass":"Prototype Heavy Rifle","Modes":"Auto/Semi/Burst","Damage":44,"Num":1,"DamageMin":29,"RPM":600,"DPS":440,"DPSMin":290,"Clip":150,"Recoil":0.79,"MOA":0,"Range":400,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dlt19_galexp","Name":"DLT-19","TriviaClass":"Prototype Heavy Rifle","Modes":"Auto/Semi/Burst","Damage":39,"Num":1,"DamageMin":25,"RPM":700,"DPS":455,"DPSMin":291.7,"Clip":75,"Recoil":0.74,"MOA":0,"Range":370,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dlt20c_galexp","Name":"DLT-20c","TriviaClass":"Blaster Light Carbine","Modes":"Auto/Semi/Burst","Damage":36,"Num":1,"DamageMin":22,"RPM":350,"DPS":210,"DPSMin":128.3,"Clip":31,"Recoil":0.75,"MOA":0,"Range":500,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dlt20s","Name":"DLT-20s","TriviaClass":"Blaster Rifle","Modes":"Semi/Burst","Damage":45,"Num":1,"DamageMin":28,"RPM":300,"DPS":225,"DPSMin":140,"Clip":25,"Recoil":0.8,"MOA":0,"Range":650,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dlt20x","Name":"DLT-20x","TriviaClass":"Blaster Rifle","Modes":"Semi/Burst","Damage":130,"Num":1,"DamageMin":90,"RPM":180,"DPS":390,"DPSMin":270,"Clip":20,"Recoil":1.28,"MOA":0,"Range":900,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dlt74","Name":"DLT-74","TriviaClass":"Outer Rim Machine Gun","Modes":"Auto/Semi/Burst","Damage":136,"Num":4,"DamageMin":76,"RPM":680,"DPS":1541.3,"DPSMin":861.3,"Clip":100,"Recoil":0.75,"MOA":20,"Range":450,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_dp9","Name":"DP-9","TriviaClass":"Blaster, Rifle","Modes":"Auto/Semi/Burst","Damage":243,"Num":9,"DamageMin":153,"RPM":120,"DPS":486,"DPSMin":306,"Clip":25,"Recoil":1.5,"MOA":0,"Range":250,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwgexpa","Class":"arccw_k_e9","Name":"E-9","TriviaClass":"Blaster, Rifle","Modes":"Auto/Semi/Burst","Damage":30,"Num":1,"DamageMin":24,"RPM":420,"DPS":210,"DPSMin":168,"Clip":40,"Recoil":0.75,"MOA":0,"Range":500,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_e9x","Name":"E-9x","TriviaClass":"Blaster Sniper","Modes":"Auto/Semi/Burst","Damage":98,"Num":1,"DamageMin":67,"RPM":180,"DPS":294,"DPSMin":201,"Clip":18,"Recoil":1.7,"MOA":0,"Range":700,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_ee3e","Name":"EE-3e","TriviaClass":"Blaster Long-Range Carabine","Modes":"Semi/Burst","Damage":33,"Num":1,"DamageMin":25,"RPM":400,"DPS":220,"DPSMin":166.7,"Clip":31,"Recoil":0.7,"MOA":0,"Range":500,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_ee3k","Name":"EE-3k","TriviaClass":"Blaster Short-Range Carabine","Modes":"Semi/Burst","Damage":47,"Num":1,"DamageMin":20,"RPM":180,"DPS":141,"DPSMin":60,"Clip":20,"Recoil":1,"MOA":0,"Range":500,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_ee3r","Name":"EE-3r","TriviaClass":"Blaster Short-Range Carabine","Modes":"Semi/Burst","Damage":37,"Num":1,"DamageMin":27,"RPM":400,"DPS":246.7,"DPSMin":180,"Clip":29,"Recoil":0.8,"MOA":0,"Range":250,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_ee3s","Name":"EE-3s","TriviaClass":"Blaster Long-Range Carabine","Modes":"Semi/Burst","Damage":39,"Num":1,"DamageMin":28,"RPM":400,"DPS":260,"DPSMin":186.7,"Clip":40,"Recoil":0.7,"MOA":0,"Range":350,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_el16","Name":"EL-16","TriviaClass":"Blaster Carabine","Modes":"Auto/Semi/Burst","Damage":36,"Num":1,"DamageMin":24,"RPM":320,"DPS":192,"DPSMin":128,"Clip":36,"Recoil":0.75,"MOA":0,"Range":430,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_el16c","Name":"EL-16C","TriviaClass":"Blaster Carabine","Modes":"Auto/Semi/Burst","Damage":40,"Num":1,"DamageMin":27,"RPM":270,"DPS":180,"DPSMin":121.5,"Clip":30,"Recoil":0.86,"MOA":0,"Range":470,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_el16hfe","Name":"EL-16HFE","TriviaClass":"Blaster Carabine","Modes":"Auto/Semi/Burst","Damage":42,"Num":1,"DamageMin":29,"RPM":270,"DPS":189,"DPSMin":130.5,"Clip":35,"Recoil":0.86,"MOA":0,"Range":290,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_esb_ee3","Name":"ESB-EE3","TriviaClass":"Blaster Carabine","Modes":"Semi/Burst","Damage":36,"Num":1,"DamageMin":24,"RPM":450,"DPS":270,"DPSMin":180,"Clip":26,"Recoil":0.75,"MOA":0,"Range":450,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_f10","Name":"F-10","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":34,"Num":1,"DamageMin":25,"RPM":320,"DPS":181.3,"DPSMin":133.3,"Clip":30,"Recoil":0.67,"MOA":0,"Range":390,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_f11","Name":"F-11","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":41,"Num":1,"DamageMin":28,"RPM":270,"DPS":184.5,"DPSMin":126,"Clip":25,"Recoil":0.78,"MOA":0,"Range":410,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_f11d","Name":"F-11d","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":56,"Num":1,"DamageMin":29,"RPM":340,"DPS":317.3,"DPSMin":164.3,"Clip":25,"Recoil":1.2,"MOA":0,"Range":250,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_fwmb10","Name":"FWMB-10","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto/Semi/Burst","Damage":28,"Num":1,"DamageMin":25,"RPM":400,"DPS":186.7,"DPSMin":166.7,"Clip":70,"Recoil":0.75,"MOA":0,"Range":400,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_fwmb10h","Name":"FWMB-10H","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto/Semi/Burst","Damage":30,"Num":1,"DamageMin":26,"RPM":350,"DPS":175,"DPSMin":151.7,"Clip":100,"Recoil":0.75,"MOA":0,"Range":450,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_fwmb10k","Name":"FWMB-10K","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto/Semi/Burst","Damage":45,"Num":1,"DamageMin":29,"RPM":390,"DPS":292.5,"DPSMin":188.5,"Clip":80,"Recoil":0.7,"MOA":0,"Range":200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_glie44","Name":"GLIE-44","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":28,"Num":1,"DamageMin":22,"RPM":280,"DPS":130.7,"DPSMin":102.7,"Clip":19,"Recoil":0.7,"MOA":0.5,"Range":270,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_glie44_e","Name":"GLIE-44e","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":35,"Num":1,"DamageMin":28,"RPM":170,"DPS":99.2,"DPSMin":79.3,"Clip":12,"Recoil":0.77,"MOA":0.5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_iqa11","Name":"IQA-11","TriviaClass":"Blaster Rifle","Modes":"Semi","Damage":104,"Num":1,"DamageMin":76,"RPM":120,"DPS":208,"DPSMin":152,"Clip":12,"Recoil":1.5,"MOA":0,"Range":900,"Penetration":11,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_iqa11c","Name":"IQA-11c","TriviaClass":"Blaster Rifle","Modes":"Semi","Damage":87,"Num":1,"DamageMin":65,"RPM":120,"DPS":174,"DPSMin":130,"Clip":18,"Recoil":1.7,"MOA":0,"Range":650,"Penetration":11,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_iqa11e","Name":"IQA-11e","TriviaClass":"Blaster Rifle","Modes":"Semi","Damage":120,"Num":1,"DamageMin":101,"RPM":120,"DPS":240,"DPSMin":202,"Clip":10,"Recoil":2,"MOA":0,"Range":1200,"Penetration":11,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_j1","Name":"J1 Blaster","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":27,"Num":1,"DamageMin":20,"RPM":340,"DPS":153,"DPSMin":113.3,"Clip":29,"Recoil":0.6,"MOA":0.5,"Range":400,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_kyd21","Name":"KYD-21 Blaster","TriviaClass":"Blaster Pistol","Modes":"Auto/Semi/Burst","Damage":189,"Num":9,"DamageMin":189,"RPM":180,"DPS":567,"DPSMin":567,"Clip":18,"Recoil":1.5,"MOA":0,"Range":200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_m45","Name":"arccw_k_m45","TriviaClass":"Repeating Ion Blaster","Modes":"Auto/Semi/Burst","Damage":34,"Num":1,"DamageMin":19,"RPM":666,"DPS":377.4,"DPSMin":210.9,"Clip":100,"Recoil":0.75,"MOA":0,"Range":500,"Penetration":8,"DmgType":"DMG_BLAST"},{"Addon":"arccwgexpa","Class":"arccw_k_m45c","Name":"arccw_k_m45c","TriviaClass":"Repeating Ion Blaster","Modes":"Auto/Semi/Burst","Damage":42,"Num":1,"DamageMin":24,"RPM":666,"DPS":466.2,"DPSMin":266.4,"Clip":100,"Recoil":0.75,"MOA":0,"Range":450,"Penetration":8,"DmgType":"DMG_BLAST"},{"Addon":"arccwgexpa","Class":"arccw_k_m45x","Name":"arccw_k_m45x","TriviaClass":"Repeating Ion Blaster","Modes":"Auto/Semi/Burst","Damage":34,"Num":1,"DamageMin":19,"RPM":750,"DPS":425,"DPSMin":237.5,"Clip":100,"Recoil":1.25,"MOA":0,"Range":500,"Penetration":8,"DmgType":"DMG_BLAST"},{"Addon":"arccwgexpa","Class":"arccw_k_md12","Name":"MD-12","TriviaClass":"Blaster Scatter","Modes":"Auto/Semi/Burst","Damage":297,"Num":9,"DamageMin":225,"RPM":180,"DPS":891,"DPSMin":675,"Clip":31,"Recoil":1.5,"MOA":0,"Range":500,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwgexpa","Class":"arccw_k_mk2paladin","Name":"MK II Paladin","TriviaClass":"Blaster Rifle","Modes":"Semi/Burst","Damage":36,"Num":1,"DamageMin":24,"RPM":280,"DPS":168,"DPSMin":112,"Clip":20,"Recoil":1.05,"MOA":0,"Range":450,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_nn14","Name":"NN-14","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":45,"Num":1,"DamageMin":29,"RPM":170,"DPS":127.5,"DPSMin":82.2,"Clip":14,"Recoil":1.3,"MOA":0.5,"Range":430,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_nt240","Name":"NT-240","TriviaClass":"Sniper","Modes":"Semi","Damage":105,"Num":1,"DamageMin":95,"RPM":120,"DPS":210,"DPSMin":190,"Clip":20,"Recoil":2.1,"MOA":0,"Range":1000,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_nt242","Name":"NT-242","TriviaClass":"Sniper","Modes":"Semi","Damage":135,"Num":1,"DamageMin":96,"RPM":180,"DPS":405,"DPSMin":288,"Clip":14,"Recoil":2.5,"MOA":0,"Range":1200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_nt242e","Name":"NT-242e","TriviaClass":"Sniper","Modes":"Semi","Damage":115,"Num":1,"DamageMin":90,"RPM":120,"DPS":230,"DPSMin":180,"Clip":10,"Recoil":2.8,"MOA":0,"Range":1700,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_nt242x","Name":"NT-242x","TriviaClass":"Sniper","Modes":"Semi","Damage":115,"Num":1,"DamageMin":90,"RPM":120,"DPS":230,"DPSMin":180,"Clip":5,"Recoil":3.5,"MOA":0,"Range":1700,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_pulse40","Name":"PULSE-40 Blaster","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":29,"Num":1,"DamageMin":21,"RPM":280,"DPS":135.3,"DPSMin":98,"Clip":25,"Recoil":0.65,"MOA":0.5,"Range":250,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_relbv15","Name":"Relby V-15","TriviaClass":"Blaster Carbine","Modes":"Semi/Burst","Damage":97,"Num":1,"DamageMin":56,"RPM":190,"DPS":307.2,"DPSMin":177.3,"Clip":20,"Recoil":1.2,"MOA":0,"Range":500,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_rt97","Name":"RT-97","TriviaClass":"Heavy Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":32,"Num":1,"DamageMin":19,"RPM":550,"DPS":293.3,"DPSMin":174.2,"Clip":100,"Recoil":0.86,"MOA":0,"Range":600,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_rt97c","Name":"RT-97c","TriviaClass":"Heavy Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":44,"Num":1,"DamageMin":19,"RPM":800,"DPS":586.7,"DPSMin":253.3,"Clip":85,"Recoil":0.86,"MOA":0,"Range":550,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_rt97h","Name":"RT-97h","TriviaClass":"Heavy Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":44,"Num":1,"DamageMin":22,"RPM":700,"DPS":513.3,"DPSMin":256.7,"Clip":76,"Recoil":0.86,"MOA":0,"Range":700,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_s5","Name":"S-5","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":25,"Num":1,"DamageMin":19,"RPM":340,"DPS":141.7,"DPSMin":107.7,"Clip":8,"Recoil":0.6,"MOA":0.5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_s5c","Name":"S-5c","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":45,"Num":1,"DamageMin":29,"RPM":280,"DPS":210,"DPSMin":135.3,"Clip":15,"Recoil":1,"MOA":0.5,"Range":500,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_s5e","Name":"S-5e","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":55,"Num":1,"DamageMin":38,"RPM":280,"DPS":256.7,"DPSMin":177.3,"Clip":15,"Recoil":1.5,"MOA":0.5,"Range":200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_smuggler","Name":"Smuggler Blaster","TriviaClass":"Blaster Pistol","Modes":"Auto/Semi/Burst","Damage":21,"Num":1,"DamageMin":21,"RPM":350,"DPS":122.5,"DPSMin":122.5,"Clip":30,"Recoil":0.75,"MOA":0.5,"Range":200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_stw48","Name":"ST-W48","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":41,"Num":1,"DamageMin":26,"RPM":340,"DPS":232.3,"DPSMin":147.3,"Clip":35,"Recoil":1.1,"MOA":0,"Range":500,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_stw48c","Name":"ST-W48c","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":38,"Num":1,"DamageMin":24,"RPM":500,"DPS":316.7,"DPSMin":200,"Clip":31,"Recoil":0.7,"MOA":0,"Range":450,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_westar35","Name":"WESTAR-35","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":25,"Num":1,"DamageMin":19,"RPM":280,"DPS":116.7,"DPSMin":88.7,"Clip":24,"Recoil":0.8,"MOA":0.5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_westar35_akimbo","Name":"WESTAR-35 Akimbo","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":25,"Num":1,"DamageMin":19,"RPM":280,"DPS":116.7,"DPSMin":88.7,"Clip":48,"Recoil":0.8,"MOA":0.5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_x8","Name":"X-8 Night Sniper","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":67,"Num":1,"DamageMin":44,"RPM":180,"DPS":201,"DPSMin":132,"Clip":8,"Recoil":1,"MOA":0.5,"Range":330,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa","Class":"arccw_k_zerzium","Name":"Zerzium Carbine","TriviaClass":"Blaster Carabine","Modes":"Auto/Semi/Burst","Damage":39,"Num":1,"DamageMin":26,"RPM":320,"DPS":208,"DPSMin":138.7,"Clip":20,"Recoil":0.9,"MOA":0,"Range":1000,"Penetration":8,"DmgType":"DMG_CRUSH"},{"Addon":"arccwgexpa2","Class":"arccw_k_434deathhammer","Name":".434 Deathhammer","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":67,"Num":1,"DamageMin":14,"RPM":180,"DPS":201,"DPSMin":42,"Clip":27,"Recoil":1.15,"MOA":1,"Range":420,"Penetration":8,"DmgType":"DMG_CRUSH"},{"Addon":"arccwgexpa2","Class":"arccw_k_a650","Name":"A-650","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":46,"Num":1,"DamageMin":24,"RPM":500,"DPS":383.3,"DPSMin":200,"Clip":70,"Recoil":0.8,"MOA":0.5,"Range":340,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_an11","Name":"AN-11","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":78,"Num":1,"DamageMin":39,"RPM":120,"DPS":156,"DPSMin":78,"Clip":15,"Recoil":1.2,"MOA":0.5,"Range":560,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_arccaster","Name":"ARC Caster","TriviaClass":"ARC Caster","Modes":"Auto/Semi/Burst","Damage":44,"Num":1,"DamageMin":21,"RPM":270,"DPS":198,"DPSMin":94.5,"Clip":50,"Recoil":0.7,"MOA":0.5,"Range":520,"Penetration":8,"DmgType":"DMG_SHOCK"},{"Addon":"arccwgexpa2","Class":"arccw_k_bk43","Name":"BK-43","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":47,"Num":1,"DamageMin":22,"RPM":450,"DPS":352.5,"DPSMin":165,"Clip":40,"Recoil":1.2,"MOA":0.5,"Range":340,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_c11","Name":"CC-11","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":39,"Num":1,"DamageMin":26,"RPM":250,"DPS":162.5,"DPSMin":108.3,"Clip":25,"Recoil":0.6,"MOA":0.5,"Range":260,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_cyclerpistol","Name":"Cycler Pistol","TriviaClass":"Slugthrower Pistol","Modes":"Semi","Damage":56,"Num":1,"DamageMin":34,"RPM":300,"DPS":280,"DPSMin":170,"Clip":6,"Recoil":0.6,"MOA":0.5,"Range":400,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_dh11","Name":"DH-11","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":28,"Num":1,"DamageMin":24,"RPM":300,"DPS":140,"DPSMin":120,"Clip":45,"Recoil":0.6,"MOA":0.5,"Range":450,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_dh16","Name":"DH-16","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":29,"Num":1,"DamageMin":21,"RPM":300,"DPS":145,"DPSMin":105,"Clip":30,"Recoil":0.4,"MOA":0.5,"Range":270,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_dlt23","Name":"DLT-23","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto/Semi","Damage":22,"Num":1,"DamageMin":19,"RPM":750,"DPS":275,"DPSMin":237.5,"Clip":100,"Recoil":0.8,"MOA":0.5,"Range":270,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_dx2","Name":"DX-2","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":22,"Num":1,"DamageMin":19,"RPM":270,"DPS":99,"DPSMin":85.5,"Clip":36,"Recoil":0.6,"MOA":0.5,"Range":180,"Penetration":8,"DmgType":"DMG_BLAST"},{"Addon":"arccwgexpa2","Class":"arccw_k_e4","Name":"E-4","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":49,"Num":1,"DamageMin":22,"RPM":210,"DPS":171.5,"DPSMin":77,"Clip":35,"Recoil":0.9,"MOA":0.5,"Range":200,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_e5r","Name":"E-5r","TriviaClass":"Blaster Revolver","Modes":"Semi","Damage":33,"Num":1,"DamageMin":23,"RPM":140,"DPS":77,"DPSMin":53.7,"Clip":18,"Recoil":1.3,"MOA":0.5,"Range":100,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_ee9","Name":"EE-9","TriviaClass":"Blaster Lever Action Shotgun","Modes":"Semi","Damage":176,"Num":11,"DamageMin":99,"RPM":100,"DPS":293.3,"DPSMin":165,"Clip":5,"Recoil":2.5,"MOA":0,"Range":120,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_fpee3p","Name":"FP/EE-3p","TriviaClass":"Blaster SMG","Modes":"Auto/Semi/Burst","Damage":22,"Num":1,"DamageMin":16,"RPM":600,"DPS":220,"DPSMin":160,"Clip":50,"Recoil":0.75,"MOA":0,"Range":200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_gau10r","Name":"GAU-10R","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":36,"Num":1,"DamageMin":25,"RPM":550,"DPS":330,"DPSMin":229.2,"Clip":33,"Recoil":0.55,"MOA":0,"Range":350,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_gau9c","Name":"GAU-9C","TriviaClass":"Blaster Carbine","Modes":"Auto/Semi/Burst","Damage":29,"Num":1,"DamageMin":22,"RPM":650,"DPS":314.2,"DPSMin":238.3,"Clip":45,"Recoil":0.5,"MOA":0,"Range":320,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_gn76","Name":"GN-76","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":119,"Num":7,"DamageMin":84,"RPM":120,"DPS":238,"DPSMin":168,"Clip":28,"Recoil":1.2,"MOA":30,"Range":200,"Penetration":8,"DmgType":"DMG_CRUSH"},{"Addon":"arccwgexpa2","Class":"arccw_k_hsb200","Name":"HSB-200","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":48,"Num":1,"DamageMin":17,"RPM":180,"DPS":144,"DPSMin":51,"Clip":14,"Recoil":1,"MOA":0.5,"Range":290,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_huttdefender","Name":"Hutt Defender","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":24,"Num":1,"DamageMin":21,"RPM":300,"DPS":120,"DPSMin":105,"Clip":35,"Recoil":0.45,"MOA":0.5,"Range":270,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_huttsplitter","Name":"Hutt Splitter","TriviaClass":"Slugthrower rifle","Modes":"Semi/Burst","Damage":198,"Num":9,"DamageMin":99,"RPM":120,"DPS":396,"DPSMin":198,"Clip":8,"Recoil":2,"MOA":5,"Range":150,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwgexpa2","Class":"arccw_k_ionpistol","Name":"Ion Pistol","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":23,"Num":1,"DamageMin":24,"RPM":300,"DPS":115,"DPSMin":120,"Clip":30,"Recoil":0.6,"MOA":0.5,"Range":200,"Penetration":8,"DmgType":"DMG_SHOCK"},{"Addon":"arccwgexpa2","Class":"arccw_k_jnd41","Name":"JND-41","TriviaClass":"Blaster Automatic Shotgun","Modes":"Auto/Semi","Damage":72,"Num":6,"DamageMin":54,"RPM":120,"DPS":144,"DPSMin":108,"Clip":12,"Recoil":2,"MOA":25,"Range":270,"Penetration":10,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwgexpa2","Class":"arccw_k_ka74","Name":"KA-74","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":39,"Num":1,"DamageMin":24,"RPM":550,"DPS":357.5,"DPSMin":220,"Clip":38,"Recoil":0.7,"MOA":0.5,"Range":350,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_mx1aquiles","Name":"MX-1 Aquiles","TriviaClass":"Slugthrower rifle","Modes":"Semi","Damage":105,"Num":1,"DamageMin":95,"RPM":170,"DPS":297.5,"DPSMin":269.2,"Clip":8,"Recoil":1.1,"MOA":0.5,"Range":700,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_nn4","Name":"NN-4","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":66,"Num":1,"DamageMin":23,"RPM":120,"DPS":132,"DPSMin":46,"Clip":30,"Recoil":1.2,"MOA":0.5,"Range":320,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_power5","Name":"POWER-5","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":43,"Num":1,"DamageMin":22,"RPM":180,"DPS":129,"DPSMin":66,"Clip":12,"Recoil":1.2,"MOA":0.5,"Range":270,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_relbyk8","Name":"Relby K-8","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":38,"Num":1,"DamageMin":29,"RPM":120,"DPS":76,"DPSMin":58,"Clip":25,"Recoil":1.2,"MOA":0.5,"Range":228,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_rr11k","Name":"RR-11k","TriviaClass":"HV-Slugthrower rifle","Modes":"Semi","Damage":127,"Num":1,"DamageMin":34,"RPM":120,"DPS":254,"DPSMin":68,"Clip":1,"Recoil":2.5,"MOA":0.5,"Range":700,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_rskf60","Name":"RSKF-60","TriviaClass":"Blaster Revolver","Modes":"Semi","Damage":45,"Num":1,"DamageMin":45,"RPM":100,"DPS":75,"DPSMin":75,"Clip":25,"Recoil":2,"MOA":0.5,"Range":75,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_s195","Name":"S-195","TriviaClass":"Blaster Double Barrel Pistol","Modes":"Semi","Damage":234,"Num":9,"DamageMin":144,"RPM":180,"DPS":702,"DPSMin":432,"Clip":2,"Recoil":2,"MOA":25,"Range":70,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwgexpa2","Class":"arccw_k_sacrosk11","Name":"Sacros K-11","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":152,"Num":2,"DamageMin":72,"RPM":170,"DPS":430.7,"DPSMin":204,"Clip":25,"Recoil":1,"MOA":0.5,"Range":150,"Penetration":8,"DmgType":"DMG_DISSOLVE"},{"Addon":"arccwgexpa2","Class":"arccw_k_scatter","Name":"Scatter Gun","TriviaClass":"Scatter Blaster","Modes":"Semi/Burst","Damage":120,"Num":6,"DamageMin":18,"RPM":120,"DPS":240,"DPSMin":36,"Clip":12,"Recoil":2.5,"MOA":50,"Range":95,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwgexpa2","Class":"arccw_k_t39","Name":"T-39","TriviaClass":"Blaster Submachine Gun","Modes":"Auto/Semi","Damage":28,"Num":1,"DamageMin":24,"RPM":560,"DPS":261.3,"DPSMin":224,"Clip":85,"Recoil":0.6,"MOA":0.5,"Range":300,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_t45","Name":"T-45","TriviaClass":"Blaster Carbine","Modes":"Semi","Damage":44,"Num":1,"DamageMin":23,"RPM":280,"DPS":205.3,"DPSMin":107.3,"Clip":33,"Recoil":1,"MOA":0.5,"Range":220,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_umbaranrifle","Name":"Umbaran Rifle","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":33,"Num":1,"DamageMin":26,"RPM":450,"DPS":247.5,"DPSMin":195,"Clip":55,"Recoil":1,"MOA":1,"Range":270,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwgexpa2","Class":"arccw_k_umbaranshotgun","Name":"Umbaran Shotgun","TriviaClass":"Blaster Shotgun","Modes":"Auto/Semi/Burst","Damage":176,"Num":8,"DamageMin":88,"RPM":120,"DPS":352,"DPSMin":176,"Clip":25,"Recoil":2,"MOA":50,"Range":160,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwgexpa2","Class":"arccw_k_umbaransniper","Name":"Umbaran Heavy Rifle","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":44,"Num":1,"DamageMin":25,"RPM":430,"DPS":315.3,"DPSMin":179.2,"Clip":40,"Recoil":1,"MOA":0,"Range":540,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_valken40tt","Name":"Valken 40-TT","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto/Semi","Damage":43,"Num":1,"DamageMin":25,"RPM":420,"DPS":301,"DPSMin":175,"Clip":65,"Recoil":0.7,"MOA":0.5,"Range":310,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_vsspyke","Name":"VSS Pyke","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":33,"Num":1,"DamageMin":29,"RPM":600,"DPS":330,"DPSMin":290,"Clip":35,"Recoil":0.5,"MOA":0.5,"Range":300,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwgexpa2","Class":"arccw_k_z1p","Name":"Z-1p","TriviaClass":"Blaster Hand-Repeater","Modes":"Auto/Semi","Damage":25,"Num":1,"DamageMin":22,"RPM":220,"DPS":91.7,"DPSMin":80.7,"Clip":75,"Recoil":0.5,"MOA":0,"Range":380,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_b2hand","Name":"B2 Handblaster","TriviaClass":"Blaster, Handblaster","Modes":"Auto/Semi","Damage":52,"Num":1,"DamageMin":34,"RPM":300,"DPS":260,"DPSMin":170,"Clip":50,"Recoil":0.5,"MOA":5,"Range":200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_coruscantguardshield","Name":"Coruscant Guard Shield","TriviaClass":"Ballistic Shield","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":0,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc15a","Name":"DC-15a","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":38,"Num":1,"DamageMin":20,"RPM":300,"DPS":190,"DPSMin":100,"Clip":70,"Recoil":0.2,"MOA":5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc15a_grenadier","Name":"DC-15a Grenadier","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":38,"Num":1,"DamageMin":20,"RPM":300,"DPS":190,"DPSMin":100,"Clip":70,"Recoil":0.2,"MOA":5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc15a_stun","Name":"DC-15a Stun","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":38,"Num":1,"DamageMin":20,"RPM":300,"DPS":190,"DPSMin":100,"Clip":70,"Recoil":0.2,"MOA":5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc15a_train","Name":"DC-15a Training","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":1,"Num":1,"DamageMin":1,"RPM":300,"DPS":5,"DPSMin":5,"Clip":70,"Recoil":0.2,"MOA":5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc15le","Name":"DC-15le","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":55,"Num":1,"DamageMin":20,"RPM":250,"DPS":229.2,"DPSMin":83.3,"Clip":40,"Recoil":0.75,"MOA":5,"Range":425,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc15s","Name":"DC-15s","TriviaClass":"Blaster Carbine","Modes":"Auto/Semi","Damage":44,"Num":1,"DamageMin":28,"RPM":250,"DPS":183.3,"DPSMin":116.7,"Clip":40,"Recoil":0.65,"MOA":5,"Range":230,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc15sa","Name":"DC-15sa","TriviaClass":"Blaster Modular Pistol","Modes":"Semi","Damage":45,"Num":1,"DamageMin":34,"RPM":250,"DPS":187.5,"DPSMin":141.7,"Clip":25,"Recoil":0.9,"MOA":5,"Range":200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc15s_grenadier","Name":"DC-15s Grenadier","TriviaClass":"Blaster Carbine","Modes":"Auto/Semi","Damage":44,"Num":1,"DamageMin":28,"RPM":250,"DPS":183.3,"DPSMin":116.7,"Clip":40,"Recoil":0.65,"MOA":5,"Range":230,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc15s_stun","Name":"DC-15s Stun","TriviaClass":"Blaster Carbine","Modes":"Auto/Semi","Damage":44,"Num":1,"DamageMin":28,"RPM":250,"DPS":183.3,"DPSMin":116.7,"Clip":40,"Recoil":0.65,"MOA":5,"Range":230,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc15s_train","Name":"DC-15s Training","TriviaClass":"Blaster Carbine","Modes":"Auto/Semi","Damage":1,"Num":1,"DamageMin":1,"RPM":250,"DPS":4.2,"DPSMin":4.2,"Clip":40,"Recoil":0.65,"MOA":5,"Range":230,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc15x","Name":"DC-15x","TriviaClass":"Blaster Sniper Rifle","Modes":"Semi","Damage":110,"Num":1,"DamageMin":51,"RPM":120,"DPS":220,"DPSMin":102,"Clip":20,"Recoil":1.8,"MOA":5,"Range":900,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc15xr","Name":"DC-15xr","TriviaClass":"Blaster Sniper Rifle","Modes":"Semi","Damage":110,"Num":1,"DamageMin":51,"RPM":120,"DPS":220,"DPSMin":102,"Clip":12,"Recoil":1.8,"MOA":1,"Range":900,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17","Name":"DC-17","TriviaClass":"Hand Blaster","Modes":"Semi","Damage":22,"Num":1,"DamageMin":19,"RPM":250,"DPS":91.7,"DPSMin":79.2,"Clip":35,"Recoil":0.9,"MOA":5,"Range":180,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17ext","Name":"DC-17 Extended","TriviaClass":"Hand Blaster","Modes":"Semi","Damage":28,"Num":1,"DamageMin":16,"RPM":190,"DPS":88.7,"DPSMin":50.7,"Clip":22,"Recoil":1.13,"MOA":5,"Range":200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17ext_akimbo","Name":"Dual DC-17 Extended","TriviaClass":"Hand Blaster","Modes":"Semi","Damage":28,"Num":1,"DamageMin":16,"RPM":190,"DPS":88.7,"DPSMin":50.7,"Clip":48,"Recoil":1.13,"MOA":5,"Range":200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17m_allinone","Name":"DC-17m Modular","TriviaClass":"Modular Weapon System","Modes":"Auto/Semi","Damage":48,"Num":1,"DamageMin":12,"RPM":600,"DPS":480,"DPSMin":120,"Clip":100,"Recoil":0.65,"MOA":5,"Range":400,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17m_launcher_republic","Name":"DC-17m Launcher","TriviaClass":"Modular Blaster Rifle","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":120,"DPS":0,"DPSMin":0,"Clip":1,"Recoil":4,"MOA":5,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17m_rifle_republic","Name":"DC-17m Rifle","TriviaClass":"Modular Blaster Rifle","Modes":"Auto/Semi","Damage":48,"Num":1,"DamageMin":12,"RPM":500,"DPS":400,"DPSMin":100,"Clip":100,"Recoil":0.65,"MOA":5,"Range":400,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17m_shotgun_republic","Name":"DC-17m Shotgun","TriviaClass":"Modular Blaster Rifle","Modes":"Semi","Damage":162,"Num":9,"DamageMin":72,"RPM":180,"DPS":486,"DPSMin":216,"Clip":100,"Recoil":2.2,"MOA":5,"Range":200,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwrepes","Class":"arccw_k_dc17m_sniper_republic","Name":"DC-17m Sniper","TriviaClass":"Modular Blaster Rifle","Modes":"Semi","Damage":150,"Num":1,"DamageMin":76,"RPM":120,"DPS":300,"DPSMin":152,"Clip":25,"Recoil":1.8,"MOA":5,"Range":600,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17s","Name":"DC-17s","TriviaClass":"Hand Blaster","Modes":"Auto/Semi","Damage":28,"Num":1,"DamageMin":22,"RPM":285,"DPS":133,"DPSMin":104.5,"Clip":30,"Recoil":0.55,"MOA":5,"Range":200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17sa","Name":"DC-17sa","TriviaClass":"Hand Blaster","Modes":"Auto/Semi","Damage":22,"Num":1,"DamageMin":19,"RPM":250,"DPS":91.7,"DPSMin":79.2,"Clip":25,"Recoil":0.9,"MOA":5,"Range":180,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17sa_dual","Name":"Dual DC-17sa","TriviaClass":"Hand Blaster","Modes":"Auto/Semi","Damage":22,"Num":1,"DamageMin":19,"RPM":250,"DPS":91.7,"DPSMin":79.2,"Clip":44,"Recoil":0.9,"MOA":5,"Range":180,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17s_dual","Name":"Dual DC-17s","TriviaClass":"Hand Blaster","Modes":"Auto/Semi","Damage":28,"Num":1,"DamageMin":22,"RPM":285,"DPS":133,"DPSMin":104.5,"Clip":50,"Recoil":0.55,"MOA":5,"Range":200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17_akimbo","Name":"Dual DC-17","TriviaClass":"Hand Blaster","Modes":"Semi","Damage":22,"Num":1,"DamageMin":19,"RPM":250,"DPS":91.7,"DPSMin":79.2,"Clip":54,"Recoil":0.9,"MOA":5,"Range":180,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17_stun","Name":"DC-17 Stun","TriviaClass":"Hand Blaster","Modes":"Semi","Damage":22,"Num":1,"DamageMin":19,"RPM":250,"DPS":91.7,"DPSMin":79.2,"Clip":25,"Recoil":0.9,"MOA":5,"Range":180,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc17_training","Name":"DC-17 Training","TriviaClass":"Hand Blaster","Modes":"Semi","Damage":1,"Num":1,"DamageMin":1,"RPM":250,"DPS":4.2,"DPSMin":4.2,"Clip":25,"Recoil":0.9,"MOA":5,"Range":180,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dc19","Name":"DC-19","TriviaClass":"Blaster Silent Carbine","Modes":"Auto/Semi","Damage":44,"Num":1,"DamageMin":28,"RPM":250,"DPS":183.3,"DPSMin":116.7,"Clip":20,"Recoil":0.65,"MOA":5,"Range":230,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dp23","Name":"DP-23","TriviaClass":"Blaster Shotgun","Modes":"Semi","Damage":126,"Num":9,"DamageMin":45,"RPM":140,"DPS":294,"DPSMin":105,"Clip":24,"Recoil":2.6,"MOA":7,"Range":200,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwrepes","Class":"arccw_k_dp23c","Name":"DP-23c","TriviaClass":"Blaster Shotgun","Modes":"Semi","Damage":135,"Num":9,"DamageMin":63,"RPM":140,"DPS":315,"DPSMin":147,"Clip":20,"Recoil":2,"MOA":5,"Range":170,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwrepes","Class":"arccw_k_dp24","Name":"DP-24","TriviaClass":"Blaster Carbine","Modes":"Auto/Semi","Damage":22,"Num":1,"DamageMin":19,"RPM":600,"DPS":220,"DPSMin":190,"Clip":50,"Recoil":0.7,"MOA":5,"Range":250,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_dp24c","Name":"DP-24c","TriviaClass":"Blaster Carbine","Modes":"Semi","Damage":171,"Num":9,"DamageMin":72,"RPM":140,"DPS":399,"DPSMin":168,"Clip":20,"Recoil":2.2,"MOA":5,"Range":120,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwrepes","Class":"arccw_k_e5","Name":"E-5","TriviaClass":"Blaster, Rifle","Modes":"Auto/Semi","Damage":38,"Num":1,"DamageMin":20,"RPM":300,"DPS":190,"DPSMin":100,"Clip":50,"Recoil":0.5,"MOA":5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_e5bx","Name":"E-5bx","TriviaClass":"Blaster, Rifle","Modes":"Auto/Semi","Damage":45,"Num":1,"DamageMin":28,"RPM":350,"DPS":262.5,"DPSMin":163.3,"Clip":25,"Recoil":0.6,"MOA":5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_e5c","Name":"E-5c","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":38,"Num":1,"DamageMin":20,"RPM":700,"DPS":443.3,"DPSMin":233.3,"Clip":50,"Recoil":0.5,"MOA":5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_e5s","Name":"E-5s","TriviaClass":"Blaster, Longblaster","Modes":"Semi","Damage":143,"Num":1,"DamageMin":98,"RPM":120,"DPS":286,"DPSMin":196,"Clip":10,"Recoil":1.8,"MOA":1,"Range":700,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_geonosianblaster","Name":"Geonosian Blaster","TriviaClass":"Sonic Blaster","Modes":"Auto/Semi","Damage":65,"Num":1,"DamageMin":45,"RPM":280,"DPS":303.3,"DPSMin":210,"Clip":50,"Recoil":1,"MOA":5,"Range":250,"Penetration":8,"DmgType":"DMG_SHOCK"},{"Addon":"arccwrepes","Class":"arccw_k_republicshield","Name":"Galactic Republic Shield","TriviaClass":"Ballistic Shield","Modes":"Semi","Damage":0,"Num":1,"DamageMin":0,"RPM":0,"DPS":0,"DPSMin":0,"Clip":0,"Recoil":0,"MOA":0,"Range":0,"Penetration":0,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_republic_e9","Name":"E-9","TriviaClass":"Blaster, Rifle","Modes":"Auto/Semi","Damage":38,"Num":1,"DamageMin":20,"RPM":330,"DPS":209,"DPSMin":110,"Clip":45,"Recoil":0.7,"MOA":5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_rg4d","Name":"RG-4D","TriviaClass":"Blaster, Pistol","Modes":"Semi","Damage":25,"Num":1,"DamageMin":23,"RPM":300,"DPS":125,"DPSMin":115,"Clip":30,"Recoil":0.7,"MOA":5,"Range":180,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_sb2","Name":"SB-2","TriviaClass":"Blaster Heavy Shotgun","Modes":"Semi","Damage":198,"Num":9,"DamageMin":81,"RPM":312,"DPS":1029.6,"DPSMin":421.2,"Clip":12,"Recoil":4,"MOA":5,"Range":170,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_sg6","Name":"SG-6","TriviaClass":"Blaster, Scatter","Modes":"Semi","Damage":126,"Num":9,"DamageMin":45,"RPM":140,"DPS":294,"DPSMin":105,"Clip":24,"Recoil":2,"MOA":5,"Range":200,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwrepes","Class":"arccw_k_valken38","Name":"Valken 38x","TriviaClass":"Blaster Sniper Rifle","Modes":"Semi","Damage":98,"Num":1,"DamageMin":76,"RPM":120,"DPS":196,"DPSMin":152,"Clip":25,"Recoil":1.2,"MOA":5,"Range":600,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_westarm5","Name":"WESTAR M5","TriviaClass":"Blaster, Rifle","Modes":"Auto/Semi","Damage":47,"Num":1,"DamageMin":27,"RPM":700,"DPS":548.3,"DPSMin":315,"Clip":75,"Recoil":0.2,"MOA":5,"Range":360,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_z4","Name":"Z-4","TriviaClass":"Blaster, Rotatory Cannon","Modes":"Auto/Semi","Damage":32,"Num":1,"DamageMin":22,"RPM":220,"DPS":117.3,"DPSMin":80.7,"Clip":200,"Recoil":0.5,"MOA":5.5,"Range":320,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_z6","Name":"Z-6","TriviaClass":"Blaster, Rotatory Cannon","Modes":"Auto/Semi","Damage":22,"Num":1,"DamageMin":18,"RPM":270,"DPS":99,"DPSMin":81,"Clip":200,"Recoil":0.5,"MOA":5.5,"Range":300,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwrepes","Class":"arccw_k_z6adv","Name":"Z-6 Advanced","TriviaClass":"Blaster, Rotatory Cannon","Modes":"Auto/Semi","Damage":28,"Num":1,"DamageMin":22,"RPM":270,"DPS":126,"DPSMin":99,"Clip":200,"Recoil":0.5,"MOA":5.5,"Range":350,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_empire_dlt19d","Name":"DLT-19d","TriviaClass":"Blaster Sniper Rifle","Modes":"Semi","Damage":132,"Num":1,"DamageMin":87,"RPM":145,"DPS":319,"DPSMin":210.2,"Clip":20,"Recoil":1.45,"MOA":0.5,"Range":750,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_empire_dlt23v","Name":"DLT-23V","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto/Semi","Damage":30,"Num":1,"DamageMin":13,"RPM":230,"DPS":115,"DPSMin":49.8,"Clip":0,"Recoil":0.55,"MOA":0,"Range":400,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_empire_dlt34","Name":"DLT-34","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto/Semi","Damage":22,"Num":1,"DamageMin":19,"RPM":600,"DPS":220,"DPSMin":190,"Clip":0,"Recoil":0.6,"MOA":0.5,"Range":600,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_empire_e11x","Name":"E-11x","TriviaClass":"Blaster Sniper Rifle","Modes":"Semi","Damage":105,"Num":1,"DamageMin":75,"RPM":120,"DPS":210,"DPSMin":150,"Clip":18,"Recoil":1.28,"MOA":0.5,"Range":900,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_empire_ee4","Name":"EE-4","TriviaClass":"Blaster Carbine","Modes":"Auto/Semi/Burst","Damage":37,"Num":1,"DamageMin":22,"RPM":900,"DPS":555,"DPSMin":330,"Clip":0,"Recoil":0.5,"MOA":0,"Range":400,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_empire_firepuncher","Name":"Empire","TriviaClass":"Blaster-Experimental Sniper Rifle","Modes":"Semi","Damage":97,"Num":1,"DamageMin":67,"RPM":120,"DPS":194,"DPSMin":134,"Clip":20,"Recoil":1.05,"MOA":0,"Range":320,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_empire_heavyrepeater","Name":"Imperial Repeater","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto/Semi/Burst","Damage":102,"Num":3,"DamageMin":66,"RPM":900,"DPS":1530,"DPSMin":990,"Clip":0,"Recoil":1.05,"MOA":0.5,"Range":200,"Penetration":10,"DmgType":"DMG_BLAST"},{"Addon":"arccwspecf","Class":"arccw_sops_empire_shortfirepuncher","Name":"Empire","TriviaClass":"Blaster-Experimental Sniper Rifle","Modes":"Semi","Damage":97,"Num":1,"DamageMin":67,"RPM":120,"DPS":194,"DPSMin":134,"Clip":25,"Recoil":1.25,"MOA":0,"Range":320,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_empire_stw48","Name":"STW-48","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":34,"Num":1,"DamageMin":29,"RPM":400,"DPS":226.7,"DPSMin":193.3,"Clip":50,"Recoil":0.76,"MOA":0.5,"Range":200,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_empire_tl40","Name":"TL-40","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto/Semi","Damage":37,"Num":1,"DamageMin":29,"RPM":800,"DPS":493.3,"DPSMin":386.7,"Clip":50,"Recoil":0.55,"MOA":0.5,"Range":400,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_empire_tl50","Name":"TL-50","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto/Semi","Damage":33,"Num":1,"DamageMin":26,"RPM":950,"DPS":522.5,"DPSMin":411.7,"Clip":75,"Recoil":0.55,"MOA":0.5,"Range":400,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_a180","Name":"A-180","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":33,"Num":1,"DamageMin":24,"RPM":260,"DPS":143,"DPSMin":104,"Clip":15,"Recoil":1,"MOA":0,"Range":135,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_a280cfe","Name":"A-280CFE","TriviaClass":"Blaster Modular Rifle","Modes":"Auto/Semi/Burst","Damage":40,"Num":1,"DamageMin":22,"RPM":460,"DPS":306.7,"DPSMin":168.7,"Clip":25,"Recoil":0.75,"MOA":0,"Range":500,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_b0l3","Name":"B0-L3","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":34,"Num":1,"DamageMin":29,"RPM":320,"DPS":181.3,"DPSMin":154.7,"Clip":50,"Recoil":0.5,"MOA":0.5,"Range":200,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_b1na","Name":"B1-NA","TriviaClass":"Blaster Repeater","Modes":"Auto/Semi/Burst","Damage":25,"Num":1,"DamageMin":22,"RPM":700,"DPS":291.7,"DPSMin":256.7,"Clip":65,"Recoil":0.5,"MOA":0,"Range":270,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_dca4","Name":"DC-A4","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi","Damage":37,"Num":1,"DamageMin":23,"RPM":500,"DPS":308.3,"DPSMin":191.7,"Clip":36,"Recoil":0.7,"MOA":0.5,"Range":600,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_de10","Name":"DE-10","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":45,"Num":1,"DamageMin":20,"RPM":260,"DPS":195,"DPSMin":86.7,"Clip":15,"Recoil":1,"MOA":0.5,"Range":190,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_deadmansrevenge","Name":"arccw_sops_galactic_deadmansrevenge","TriviaClass":"Lever-Action Blaster","Modes":"Semi","Damage":132,"Num":1,"DamageMin":87,"RPM":120,"DPS":264,"DPSMin":174,"Clip":14,"Recoil":1.25,"MOA":0.5,"Range":750,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_deadmanstale","Name":"Dead Man","TriviaClass":"Lever-Action Blaster","Modes":"Semi","Damage":132,"Num":1,"DamageMin":87,"RPM":120,"DPS":264,"DPSMin":174,"Clip":14,"Recoil":1.25,"MOA":0.5,"Range":750,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_deathwatchblaster","Name":"Deathwatch Blaster","TriviaClass":"Blaster Rifle","Modes":"Semi/Burst","Damage":30,"Num":1,"DamageMin":26,"RPM":450,"DPS":225,"DPSMin":195,"Clip":26,"Recoil":0.7,"MOA":0,"Range":270,"Penetration":4,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_dg29","Name":"DG-29","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":56,"Num":1,"DamageMin":25,"RPM":120,"DPS":112,"DPSMin":50,"Clip":20,"Recoil":1.4,"MOA":0.5,"Range":120,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_dh16","Name":"DH-16","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":26,"Num":1,"DamageMin":22,"RPM":370,"DPS":160.3,"DPSMin":135.7,"Clip":30,"Recoil":1,"MOA":0,"Range":270,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_dt40","Name":"DT-40","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":40,"Num":1,"DamageMin":22,"RPM":200,"DPS":133.3,"DPSMin":73.3,"Clip":24,"Recoil":1,"MOA":0.5,"Range":220,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_emprifle","Name":"EMP Rifle","TriviaClass":"","Modes":"Semi","Damage":305,"Num":1,"DamageMin":7,"RPM":120,"DPS":610,"DPSMin":14,"Clip":0,"Recoil":4,"MOA":0,"Range":250,"Penetration":10,"DmgType":"DMG_BLAST"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_fc1","Name":"FC-1 Flechette Launcher","TriviaClass":"High-Explosive Weapon","Modes":"Auto/Semi","Damage":304,"Num":4,"DamageMin":108,"RPM":400,"DPS":2026.7,"DPSMin":720,"Clip":10,"Recoil":1.05,"MOA":0,"Range":200,"Penetration":10,"DmgType":"DMG_BLAST"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_galaar15","Name":"GALAAR-15","TriviaClass":"Blaster Rifle","Modes":"Auto/Semi/Burst","Damage":43,"Num":1,"DamageMin":27,"RPM":430,"DPS":308.2,"DPSMin":193.5,"Clip":37,"Recoil":0.7,"MOA":0,"Range":450,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_galaar15c","Name":"GALAAR-15c","TriviaClass":"Blaster Carabine","Modes":"Auto/Semi/Burst","Damage":37,"Num":1,"DamageMin":22,"RPM":500,"DPS":308.3,"DPSMin":183.3,"Clip":32,"Recoil":0.75,"MOA":0,"Range":400,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_iondisruptor","Name":"T-7 Ion Disruptor","TriviaClass":"Ion Disruptor","Modes":"Semi","Damage":105,"Num":1,"DamageMin":27,"RPM":120,"DPS":210,"DPSMin":54,"Clip":0,"Recoil":4,"MOA":0,"Range":250,"Penetration":10,"DmgType":"DMG_DISSOLVE"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_jawapistol","Name":"Jawa Pistol","TriviaClass":"Blaster Pistol","Modes":"Semi/Burst","Damage":27,"Num":1,"DamageMin":19,"RPM":260,"DPS":117,"DPSMin":82.3,"Clip":22,"Recoil":1,"MOA":0.5,"Range":140,"Penetration":8,"DmgType":"DMG_SHOCK"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_k0bu","Name":"K-0Bu","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":26,"Num":1,"DamageMin":21,"RPM":430,"DPS":186.3,"DPSMin":150.5,"Clip":0,"Recoil":1,"MOA":0.5,"Range":140,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_k3bu","Name":"K3b-u","TriviaClass":"Blaster Carbine","Modes":"Auto/Semi","Damage":38,"Num":1,"DamageMin":27,"RPM":280,"DPS":177.3,"DPSMin":126,"Clip":32,"Recoil":1.05,"MOA":0,"Range":305,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_m5d","Name":"M5-D","TriviaClass":"Blaster Pistol","Modes":"Auto/Semi","Damage":26,"Num":1,"DamageMin":22,"RPM":120,"DPS":52,"DPSMin":44,"Clip":18,"Recoil":1.4,"MOA":0,"Range":240,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_mandorifle","Name":"Amban Pulse Rifle","TriviaClass":"Blaster Rifle","Modes":"Semi","Damage":204,"Num":1,"DamageMin":55,"RPM":120,"DPS":408,"DPSMin":110,"Clip":1,"Recoil":2,"MOA":0,"Range":900,"Penetration":10,"DmgType":"DMG_DISSOLVE"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_mw20","Name":"MW-20","TriviaClass":"Blaster Revolver","Modes":"Semi","Damage":67,"Num":1,"DamageMin":45,"RPM":120,"DPS":134,"DPSMin":90,"Clip":11,"Recoil":1.25,"MOA":0,"Range":120,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_prototypeblaster","Name":"Prototype Blaster","TriviaClass":"Blaster SMG","Modes":"Auto/Semi","Damage":23,"Num":1,"DamageMin":20,"RPM":1000,"DPS":383.3,"DPSMin":333.3,"Clip":70,"Recoil":0.35,"MOA":0,"Range":170,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_r1ca","Name":"R1-CA","TriviaClass":"Blaster Repeater","Modes":"Auto/Semi/Burst","Damage":47,"Num":1,"DamageMin":12,"RPM":200,"DPS":156.7,"DPSMin":40,"Clip":32,"Recoil":0.5,"MOA":0,"Range":200,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_scatterpistol","Name":"Scatter Pistol","TriviaClass":"Blaster-Scatter Pistol","Modes":"Semi/Burst","Damage":81,"Num":9,"DamageMin":63,"RPM":120,"DPS":162,"DPSMin":126,"Clip":15,"Recoil":1.9,"MOA":0.5,"Range":90,"Penetration":8,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_tl30","Name":"TL-30","TriviaClass":"Blaster Repeater","Modes":"Auto/Semi/Burst","Damage":18,"Num":1,"DamageMin":13,"RPM":800,"DPS":240,"DPSMin":173.3,"Clip":50,"Recoil":0.7,"MOA":0,"Range":400,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_wookieslug","Name":"Wookiee Slug","TriviaClass":"Slugthrower Scatter","Modes":"Semi","Damage":135,"Num":9,"DamageMin":108,"RPM":120,"DPS":270,"DPSMin":216,"Clip":5,"Recoil":0.98,"MOA":0.5,"Range":200,"Penetration":10,"DmgType":"DMG_BUCKSHOT"},{"Addon":"arccwspecf","Class":"arccw_sops_galactic_z5","Name":"Z5 Red Hydra","TriviaClass":"Blaster Pistol","Modes":"Auto/Semi","Damage":17,"Num":1,"DamageMin":15,"RPM":300,"DPS":85,"DPSMin":75,"Clip":15,"Recoil":1,"MOA":0,"Range":200,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_quadblaster_empire","Name":"Quad-Blaster (Empire)","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto","Damage":48,"Num":1,"DamageMin":24,"RPM":250,"DPS":200,"DPSMin":100,"Clip":50,"Recoil":0.35,"MOA":5,"Range":340,"Penetration":10,"DmgType":"DMG_BLAST"},{"Addon":"arccwspecf","Class":"arccw_sops_quadblaster_republic","Name":"Quad Blaster (Republic)","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto","Damage":48,"Num":1,"DamageMin":24,"RPM":250,"DPS":200,"DPSMin":100,"Clip":50,"Recoil":0.35,"MOA":5,"Range":340,"Penetration":10,"DmgType":"DMG_BLAST"},{"Addon":"arccwspecf","Class":"arccw_sops_republic_773firepuncher","Name":"Republic","TriviaClass":"Blaster-Experimental Sniper Rifle","Modes":"Semi","Damage":97,"Num":1,"DamageMin":67,"RPM":120,"DPS":194,"DPSMin":134,"Clip":20,"Recoil":1.05,"MOA":0,"Range":320,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_republic_773firepuncher_short","Name":"Republic","TriviaClass":"Blaster-Experimental Sniper Rifle","Modes":"Semi","Damage":97,"Num":1,"DamageMin":67,"RPM":120,"DPS":194,"DPSMin":134,"Clip":20,"Recoil":1.05,"MOA":0,"Range":320,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_republic_dc19","Name":"DC-19","TriviaClass":"Blaster Stealth Carbine","Modes":"Auto/Semi/Burst","Damage":54,"Num":1,"DamageMin":20,"RPM":280,"DPS":252,"DPSMin":93.3,"Clip":22,"Recoil":0.6,"MOA":0,"Range":700,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_republic_dlt23v","Name":"DLT-23V","TriviaClass":"Blaster Heavy Repeater","Modes":"Auto/Semi","Damage":30,"Num":1,"DamageMin":13,"RPM":230,"DPS":115,"DPSMin":49.8,"Clip":0,"Recoil":0.55,"MOA":0,"Range":400,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_republic_md12x","Name":"MD-12x","TriviaClass":"Blaster-Experimental Shotgun","Modes":"Auto/Semi","Damage":117,"Num":9,"DamageMin":99,"RPM":400,"DPS":780,"DPSMin":660,"Clip":22,"Recoil":1.9,"MOA":0.5,"Range":120,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_republic_rx21","Name":"RX-21","TriviaClass":"Blaster-Experimental Rifle","Modes":"Auto/Semi","Damage":37,"Num":1,"DamageMin":22,"RPM":400,"DPS":246.7,"DPSMin":146.7,"Clip":45,"Recoil":0.76,"MOA":0.5,"Range":400,"Penetration":10,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_republic_t702","Name":"T-702","TriviaClass":"Blaster Sniper Rifle","Modes":"Semi","Damage":140,"Num":1,"DamageMin":98,"RPM":120,"DPS":280,"DPSMin":196,"Clip":10,"Recoil":4,"MOA":0,"Range":600,"Penetration":10,"DmgType":"DMG_BLAST"},{"Addon":"arccwspecf","Class":"arccw_sops_republic_x11","Name":"X-11","TriviaClass":"Blaster Pistol","Modes":"Semi","Damage":32,"Num":1,"DamageMin":24,"RPM":280,"DPS":149.3,"DPSMin":112,"Clip":18,"Recoil":0.9,"MOA":0,"Range":220,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_republic_z6chaingun","Name":"Z-6 Chaingun","TriviaClass":"Blaster Heavy Cannon","Modes":"Auto/Semi","Damage":25,"Num":1,"DamageMin":19,"RPM":225,"DPS":93.8,"DPSMin":71.2,"Clip":200,"Recoil":0.6,"MOA":0.5,"Range":400,"Penetration":8,"DmgType":"DMG_BULLET"},{"Addon":"arccwspecf","Class":"arccw_sops_republic_z6x","Name":"ZX-6","TriviaClass":"Blaster-Experimental Heavy Canon","Modes":"Auto/Semi","Damage":22,"Num":1,"DamageMin":16,"RPM":225,"DPS":82.5,"DPSMin":60,"Clip":100,"Recoil":0.76,"MOA":0,"Range":600,"Penetration":10,"DmgType":"DMG_BULLET"}],"overrides":{"arccw_k_z6":{"Name":"Z-6 Rotary Cannon","Damage":28,"DamageMin":18,"RPM":720,"Recoil":0.55,"RecoilSide":0.35,"Range":350},"arccw_sops_republic_z6x":{"Name":"ZX-6 Experimental Cannon","Damage":30,"DamageMin":20,"RPM":650,"Recoil":0.65,"RecoilSide":0.4,"Range":400},"arccw_sops_republic_dlt23v":{"Name":"DLT-23v Heavy Repeater","Damage":36,"DamageMin":24,"RPM":520,"Recoil":0.6,"Range":450},"arccw_k_z6adv":{"Name":"Z-6 Advanced","Damage":30,"DamageMin":20,"RPM":700,"Recoil":0.6,"Range":380},"arccw_k_z4":{"Name":"Z-4 Rotary Cannon","Damage":28,"DamageMin":18,"RPM":680,"Recoil":0.55},"arccw_k_westarm5":{"Name":"WESTAR M5","Damage":40,"DamageMin":26,"RPM":450,"Recoil":0.55,"RecoilSide":0.35,"Clip":60},"arccw_k_dc17m_rifle_republic":{"Name":"DC-17m Rifle","Damage":42,"DamageMin":28,"RPM":450,"Clip":60,"Recoil":0.65},"arccw_k_dc17m_modular":{"Name":"DC-17m Modular","Damage":42,"DamageMin":28,"RPM":450,"Clip":60},"arccw_k_dc17m_allinone":{"Name":"DC-17m All-in-one","Damage":42,"DamageMin":28,"RPM":450,"Clip":60},"arccw_k_dc15a":{"Name":"DC-15A","Damage":42,"DamageMin":28,"RPM":340,"Recoil":0.45},"arccw_k_dc15a_grenadier":{"Name":"DC-15A Grenadier","Damage":42,"DamageMin":28,"RPM":340,"Recoil":0.45},"arccw_k_dc15s":{"Name":"DC-15S","Damage":38,"DamageMin":24,"RPM":400,"Recoil":0.55},"arccw_k_dc15s_grenadier":{"Name":"DC-15S Grenadier","Damage":38,"DamageMin":24,"RPM":360,"Recoil":0.55},"arccw_k_republic_e9":{"Name":"E-9 Rifle","Damage":36,"DamageMin":24,"RPM":380,"Recoil":0.6},"arccw_sops_republic_rx21":{"Name":"RX-21","Damage":36,"DamageMin":25,"RPM":420,"Recoil":0.7},"arccw_k_ee3e":{"Name":"EE-3","Damage":34,"DamageMin":22,"RPM":420,"Recoil":0.65},"arccw_sops_republic_dc19":{"Name":"DC-19 Stealth","Damage":50,"DamageMin":32,"RPM":290,"Recoil":0.65},"arccw_k_dp24":{"Name":"DP-24 Carbine","Damage":26,"DamageMin":18,"RPM":580,"Recoil":0.65},"arccw_k_cr2s":{"Name":"CR-2","Damage":26,"DamageMin":14,"RPM":620,"Range":220,"Recoil":0.8},"arccw_sops_republic_md12x":{"14":126,"Name":"MD-12x","Num":9,"Damage":14,"DamageMin":5,"RPM":140,"Clip":12,"Range":80,"RangeMin":15,"Recoil":2.2},"arccw_k_dc17m_shotgun_republic":{"16":144,"Name":"DC-17m Shotgun","Num":9,"Damage":16,"DamageMin":6,"RPM":120,"Clip":16,"Range":90,"RangeMin":20,"Recoil":2.4},"arccw_k_dp23":{"15":135,"Name":"DP-23","Num":9,"Damage":15,"DamageMin":5,"RPM":130,"Clip":20,"Range":90},"arccw_k_dp23c":{"15":135,"Name":"DP-23c","Num":9,"Damage":15,"DamageMin":5,"RPM":130,"Clip":20,"Range":90},"arccw_k_dp24c":{"15":135,"Name":"DP-24c","Num":9,"Damage":15,"DamageMin":5,"RPM":130,"Clip":20,"Range":90},"arccw_k_sb2":{"16":"144 (Было 198!)","Name":"SB-2","Num":9,"Damage":16,"DamageMin":6,"RPM":130,"Clip":16,"Range":85},"arccw_k_dc17":{"Name":"DC-17","Damage":28,"DamageMin":18,"RPM":280,"Recoil":0.7},"arccw_k_dc17_akimbo":{"Name":"Dual DC-17","Damage":26,"DamageMin":16,"RPM":440,"Clip":54,"Recoil":0.9},"arccw_k_dc17s":{"Name":"DC-17s","Damage":32,"DamageMin":20,"RPM":300,"Recoil":0.6},"arccw_k_dc17s_dual":{"Name":"Dual DC-17s","Damage":30,"DamageMin":18,"RPM":460,"Clip":50,"Recoil":0.8},"arccw_k_dc15sa":{"Name":"DC-15sa","Damage":38,"DamageMin":22,"RPM":260,"Recoil":0.8},"arccw_sops_republic_x11":{"Name":"X-11","Damage":32,"DamageMin":20,"RPM":300,"Recoil":0.75},"arccw_k_dl44":{"Name":"DL-44","Damage":52,"DamageMin":30,"RPM":200,"Recoil":1.1},"arccw_k_dc17m_sniper_republic":{"Name":"DC-17m Sniper","Damage":130,"DamageMin":110,"RPM":90,"Clip":15,"Recoil":2},"arccw_sops_republic_t702":{"Name":"T-702","Damage":140,"DamageMin":120,"RPM":85,"Recoil":3.5},"arccw_sops_galactic_mandorifle":{"Name":"Amban Pulse Rifle","Damage":200,"DamageMin":180,"RPM":50,"Clip":1,"Recoil":2.5},"arccw_sops_empire_heavyrepeater":{"Name":"Imperial Heavy Repeater","Num":1,"Damage":34,"DamageMin":22,"RPM":620,"DamageType":"DMG_BULLET"},"arccw_k_dlt74":{"Name":"DLT-74","Num":1,"Damage":36,"DamageMin":24,"RPM":560},"arccw_sops_galactic_fc1":{"25":"100 за залп (было 304!)","Name":"FC-1 Flechette Launcher","Num":4,"Damage":25,"DamageMin":12,"RPM":160},"arccw_k_weapon_antimaterial":{"Name":"K-43 Anti-Material","Damage":320,"DamageMin":200,"RPM":50,"Recoil":5}}};
const ARCCW_LUA_TAIL = "\n-- ============================================================================\n-- БАЛАНС ГРАНАТ И ВЗРЫВЧАТКИ (Сущности брошенных гранат)\n-- ============================================================================\nArcCW_Balance.Grenades = {\n    [\"arccw_nade_k_thrown_thermalimploder\"] = {\n        Name = \"Thermal Imploder\",\n        Damage = 480,       -- Было 5000 (!)\n        Radius = 450,       -- Было 800\n        FuseTime = 4.0,     -- Было 5.0\n        Desc = \"Тяжелый имплодер: мощный взрыв скоплений врага без уничтожения всей базы\",\n    },\n    [\"arccw_nade_k_thrown_impact\"] = {\n        Name = \"Impact Grenade\",\n        Damage = 140,       -- Было 500 (!)\n        Radius = 240,       -- Было 500\n        Desc = \"Быстрая импакт-граната: убран гарантированный мгновенный ваншот фуллового бойца\",\n    },\n    [\"arccw_nade_k_thrown_thermal\"] = {\n        Name = \"Thermal Detonator\",\n        Damage = 200,       -- Было 450\n        Radius = 320,       -- Было 500\n        FuseTime = 2.5,     -- Было 2.0\n        Desc = \"Классический термальный детонатор: смертелен в эпицентре, ранит на краю\",\n    },\n    [\"arccw_nade_k_thrown_c25\"] = {\n        Name = \"C-25 Fragmentation\",\n        Damage = 220,       -- Было 750 (!)\n        Radius = 340,       -- Было 600\n        FuseTime = 2.5,\n    },\n    [\"arccw_nade_k_thrown_c14\"] = {\n        Name = \"C-14 Anti-Vehicle\",\n        Damage = 420,       -- Было 900\n        Radius = 260,       -- Было 550 (сфокусированный взрыв против техники)\n        FuseTime = 2.5,\n    },\n    [\"arccw_nade_k_thrown_plasma\"] = {\n        Name = \"Plasma Grenade\",\n        Damage = 300,       -- Было 1000 (!)\n        Radius = 320,       -- Было 600\n        FuseTime = 2.5,\n    },\n    [\"arccw_nade_k_thrown_blaststick\"] = {\n        Name = \"BlastStick Grenade\",\n        Damage = 260,       -- Было 900\n        Radius = 300,       -- Было 550\n        FuseTime = 2.5,\n    },\n    [\"arccw_nade_k_thrown_cluster\"] = {\n        Name = \"Cluster Grenade\",\n        Damage = 220,       -- Было 700\n        Radius = 280,       -- Было 320\n    },\n    [\"arccw_nade_k_thrown_shock\"] = {\n        Name = \"Shock Grenade\",\n        Damage = 120,       -- Было 250\n        Radius = 300,       -- Было 450\n    },\n    [\"arccw_nade_k_thrown_bacta\"] = {\n        Name = \"Bacta Grenade\",\n        HealInterval = 0.5, -- Было 0.05 (лечило 100% HP за 1 секунду!)\n        HealDuration = 10,  -- Было 30 сек\n        HealAmount = 0.05,  -- 5% HP каждые 0.5 сек (10% в секунду)\n        HealRadius = 240,   -- Было 300\n        Desc = \"Тактическая бакта: стабильный постепенный отхил без статуса бессмертия\",\n    },\n    [\"arccw_nade_k_thrown_stun\"] = {\n        Name = \"Stun Grenade\",\n        BlurDuration = 4.5, -- Было 15.0 сек (!)\n        Desc = \"Светошумовая дезориентация: 4.5 секунды вместо слепоты на 15 секунд\",\n    },\n}\n\n-- ============================================================================\n-- Функция применения настроек к SWEP\n-- ============================================================================\nfunction ArcCW_Balance.ApplyToSWEP(swep, cfg)\n    if not swep or not cfg then return end\n\n    if cfg.Damage then swep.Damage = cfg.Damage end\n    if cfg.DamageMin then swep.DamageMin = cfg.DamageMin end\n    if cfg.Num then swep.Num = cfg.Num end\n\n    if cfg.RPM and cfg.RPM > 0 then\n        swep.Delay = 60 / cfg.RPM\n        swep.RPM = cfg.RPM\n    end\n\n    if cfg.Clip then\n        if swep.Primary then\n            swep.Primary.ClipSize = cfg.Clip\n        end\n        swep.RegularClipSize = cfg.Clip\n    end\n\n    if cfg.Recoil then swep.Recoil = cfg.Recoil end\n    if cfg.RecoilSide then swep.RecoilSide = cfg.RecoilSide end\n    if cfg.RecoilRise then swep.RecoilRise = cfg.RecoilRise end\n    if cfg.Range then swep.Range = cfg.Range end\n    if cfg.RangeMin then swep.RangeMin = cfg.RangeMin end\n    if cfg.DamageType then swep.DamageType = cfg.DamageType end\n\n    if cfg.MOA then swep.AccuracyMOA = cfg.MOA end\n    if cfg.AccuracyMOA then swep.AccuracyMOA = cfg.AccuracyMOA end\n    if cfg.HipDispersion then swep.HipDispersion = cfg.HipDispersion end\n    if cfg.MoveDispersion then swep.MoveDispersion = cfg.MoveDispersion end\n    if cfg.JumpDispersion then swep.JumpDispersion = cfg.JumpDispersion end\n\n    if cfg.Penetration then swep.Penetration = cfg.Penetration end\n    if cfg.SpeedMult then swep.SpeedMult = cfg.SpeedMult end\n    if cfg.SightedSpeedMult then swep.SightedSpeedMult = cfg.SightedSpeedMult end\n    if cfg.SightTime then swep.SightTime = cfg.SightTime end\n\n    if cfg.HeatCapacity then swep.HeatCapacity = cfg.HeatCapacity end\n    if cfg.HeatDissipation then swep.HeatDissipation = cfg.HeatDissipation end\n    if cfg.HeatDelayTime then swep.HeatDelayTime = cfg.HeatDelayTime end\nend\n\n-- ============================================================================\n-- Функция применения настроек к сущности гранаты\n-- ============================================================================\nfunction ArcCW_Balance.ApplyToGrenade(ent, cfg)\n    if not IsValid(ent) or not cfg then return end\n\n    if cfg.Damage then ent.Damage = cfg.Damage end\n    if cfg.Radius then ent.Radius = cfg.Radius end\n    if cfg.FuseTime then ent.FuseTime = cfg.FuseTime end\n\n    if cfg.HealInterval then ent.HealInterval = cfg.HealInterval end\n    if cfg.HealDuration then ent.HealDuration = cfg.HealDuration end\n    if cfg.HealAmount then ent.HealAmount = cfg.HealAmount end\n    if cfg.HealRadius then ent.HealRadius = cfg.HealRadius end\n\n    if cfg.BlurDuration then\n        ent.BlurDuration = cfg.BlurDuration\n        ent.ApplyBlurEffect = function(self, ply)\n            if SERVER and IsValid(ply) then\n                net.Start(\"ARC9_StunBlurEffect\")\n                net.WriteFloat(cfg.BlurDuration)\n                net.Send(ply)\n            end\n        end\n    end\nend\n\n-- ============================================================================\n-- ГЛОБАЛЬНАЯ ЗАЩИТА ОТ БЕСКОНЕЧНЫХ ГРАНАТ И ЛАУНЧЕРОВ\n-- На сервере включены конвары InfiniteAmmo/BottomlessClip для бластеров,\n-- из-за чего профессии с гранатами в спавне (BX, КНС, эвенты и т.д.)\n-- получают бесконечный запас гранат. Этот блок принудительно делает\n-- взрывчатку конечной для ВСЕХ игроков.\n-- ============================================================================\nfunction ArcCW_Balance.IsExplosiveOrConsumable(class, wep)\n    if isstring(class) then\n        if string.sub(class, 1, 13) == \"arccw_k_nade_\" then return true end\n        if string.sub(class, 1, 17) == \"arccw_k_launcher_\" then return true end\n        if class == \"arccw_k_dc17m_launcher_republic\" or class == \"nn_c4\" then return true end\n    end\n    if wep then\n        if wep.Throwing or wep.Base == \"arccw_base_nade\" or wep.Base == \"arccw_k_nade_base\" then return true end\n    end\n    return false\nend\n\nfunction ArcCW_Balance.ForceFiniteExplosives(wep)\n    if not IsValid(wep) then return end\n    local class = wep:GetClass()\n    if not ArcCW_Balance.IsExplosiveOrConsumable(class, wep) then return end\n\n    wep.InfiniteAmmo = false\n    wep.BottomlessClip = false\n    wep.KeepIfEmpty = false\n\n    wep.HasInfiniteAmmo = function() return false end\n    wep.HasBottomlessClip = function() return false end\nend\n\n-- ============================================================================\n-- Очистка некорректных dummy-моделей в AttachmentElements (убирает ERROR на Z-6 и др.)\n-- ============================================================================\nfunction ArcCW_Balance.SanitizeAttachmentElements(wep)\n    if not wep or not istable(wep.AttachmentElements) then return end\n    for _, eleData in pairs(wep.AttachmentElements) do\n        if istable(eleData) then\n            for _, listKey in ipairs({\"WMElements\", \"VMElements\"}) do\n                local list = eleData[listKey]\n                if istable(list) then\n                    for _, elem in ipairs(list) do\n                        if istable(elem) then\n                            if elem.Model == \"models/hunter/plates/plate.mdl\" then\n                                elem.Model = \"models/hunter/plates/plate025x025.mdl\"\n                                elem.NoDraw = true\n                            end\n                            if elem.IsMuzzleDevice or (elem.Scale and elem.Scale.x == 0 and elem.Scale.y == 0 and elem.Scale.z == 0) then\n                                elem.NoDraw = true\n                            end\n                        end\n                    end\n                end\n            end\n        end\n    end\nend\n\n-- ============================================================================\n-- Применение ко всем зарегистрированным оружиям и сущностям\n-- ============================================================================\nfunction ArcCW_Balance.ApplyAll()\n    if not ArcCW_Balance.Enabled then return end\n\n    local wepCount = 0\n    for class, cfg in pairs(ArcCW_Balance.Weapons) do\n        local swep = weapons.GetStored(class)\n        if swep then\n            ArcCW_Balance.SanitizeAttachmentElements(swep)\n            ArcCW_Balance.ApplyToSWEP(swep, cfg)\n            wepCount = wepCount + 1\n        end\n    end\n\n    -- Базовые таблицы сущностей гранат в scripted_ents\n    local nadeCount = 0\n    if scripted_ents and scripted_ents.GetStored then\n        for class, cfg in pairs(ArcCW_Balance.Grenades) do\n            local stored = scripted_ents.GetStored(class)\n            if stored and stored.t then\n                for k, v in pairs(cfg) do\n                    stored.t[k] = v\n                end\n                nadeCount = nadeCount + 1\n            end\n        end\n    end\n\n    -- Принудительно отключаем бесконечные патроны в базовых таблицах всех гранат и чистим dummy элементы\n    if weapons and weapons.GetList then\n        for _, swep in ipairs(weapons.GetList()) do\n            ArcCW_Balance.SanitizeAttachmentElements(swep)\n            local class = swep.ClassName or swep.Class\n            if ArcCW_Balance.IsExplosiveOrConsumable(class, swep) then\n                swep.InfiniteAmmo = false\n                swep.BottomlessClip = false\n                swep.KeepIfEmpty = false\n                swep.HasInfiniteAmmo = function() return false end\n                swep.HasBottomlessClip = function() return false end\n            end\n        end\n    end\n\n    -- Обновляем уже существующие сущности оружия на карте\n    for _, ent in ipairs(ents.GetAll()) do\n        if IsValid(ent) then\n            if ent:IsWeapon() then\n                local class = ent:GetClass()\n                ArcCW_Balance.SanitizeAttachmentElements(ent)\n                ArcCW_Balance.ForceFiniteExplosives(ent)\n                local cfg = ArcCW_Balance.Weapons[class]\n                if cfg then\n                    ArcCW_Balance.ApplyToSWEP(ent, cfg)\n                end\n            else\n                local class = ent:GetClass()\n                local cfg = ArcCW_Balance.Grenades[class]\n                if cfg then\n                    ArcCW_Balance.ApplyToGrenade(ent, cfg)\n                end\n            end\n        end\n    end\n\n    print(string.format(\"[ArcCW Balance] Баланс применен: %d оружия, %d гранат.\", wepCount, nadeCount))\nend\n\n-- Хук инициализации отдельного экземпляра оружия ArcCW\nhook.Add(\"ArcCW_WeaponInit\", \"ArcCW_Balance_WeaponInit\", function(wep)\n    if not ArcCW_Balance.Enabled or not IsValid(wep) then return end\n    local class = wep:GetClass()\n\n    ArcCW_Balance.SanitizeAttachmentElements(wep)\n\n    -- Принудительно отключаем бесконечный боезапас для гранат/лаунчеров\n    ArcCW_Balance.ForceFiniteExplosives(wep)\n\n    local cfg = ArcCW_Balance.Weapons[class]\n    if cfg then\n        ArcCW_Balance.ApplyToSWEP(wep, cfg)\n    end\nend)\n\n-- Хук создания сущности брошенной гранаты\nhook.Add(\"OnEntityCreated\", \"ArcCW_Balance_OnEntityCreated\", function(ent)\n    if not ArcCW_Balance.Enabled or not IsValid(ent) then return end\n\n    -- Небольшая задержка, чтобы энтити успела выполнить свой BaseClass.Initialize\n    timer.Simple(0, function()\n        if not IsValid(ent) then return end\n        local class = ent:GetClass()\n        local cfg = ArcCW_Balance.Grenades[class]\n        if cfg then\n            ArcCW_Balance.ApplyToGrenade(ent, cfg)\n        end\n    end)\nend)\n\n-- Серверный таймер контроля и нормализации гранат у всех игроков\nif SERVER then\n    local ARSENAL_GRENADE_MAX_SPAWN = 3 -- Максимум гранат при спавне (1 в руке + 2 в запасе)\n\n    timer.Create(\"ArcCW_Balance_GlobalFiniteExplosives\", 0.35, 0, function()\n        if not ArcCW_Balance.Enabled then return end\n\n        for _, ply in ipairs(player.GetAll()) do\n            if not IsValid(ply) or not ply:Alive() then continue end\n\n            for _, wep in ipairs(ply:GetWeapons()) do\n                if not IsValid(wep) then continue end\n                local class = wep:GetClass()\n\n                if ArcCW_Balance.IsExplosiveOrConsumable(class, wep) then\n                    ArcCW_Balance.ForceFiniteExplosives(wep)\n\n                    local clip = math.max(0, wep:Clip1())\n                    local ammoType = wep:GetPrimaryAmmoType()\n                    local reserve = (isnumber(ammoType) and ammoType >= 0) and math.max(0, ply:GetAmmoCount(ammoType)) or 0\n                    local total = clip + reserve\n\n                    -- Ограничиваем максимальный боезапас на руках (макс 3 гранаты)\n                    if total > ARSENAL_GRENADE_MAX_SPAWN and isnumber(ammoType) and ammoType >= 0 then\n                        local fixedClip = math.min(1, clip)\n                        wep:SetClip1(fixedClip)\n                        ply:SetAmmo(ARSENAL_GRENADE_MAX_SPAWN - fixedClip, ammoType)\n                    end\n\n                    -- Если все гранаты израсходованы и игрок прямо сейчас не держит чеку зажатой\n                    local primed = isfunction(wep.GetGrenadePrimed) and wep:GetGrenadePrimed()\n                    if total <= 0 and not primed then\n                        ply:StripWeapon(class)\n                        if IsValid(ply:GetWeapon(\"nn_hands\")) then\n                            ply:SelectWeapon(\"nn_hands\")\n                        end\n                    end\n                end\n            end\n        end\n    end)\nend\n\n-- Хуки глобальной загрузки\nhook.Add(\"PostGamemodeLoaded\", \"ArcCW_Balance_PostGamemodeLoaded\", function()\n    ArcCW_Balance.ApplyAll()\nend)\n\nhook.Add(\"InitPostEntity\", \"ArcCW_Balance_InitPostEntity\", function()\n    ArcCW_Balance.ApplyAll()\nend)\n\n-- Консольная команда перезагрузки для администратора\nconcommand.Add(\"arccw_balance_reload\", function(ply)\n    if IsValid(ply) and not ply:IsSuperAdmin() then\n        ply:ChatPrint(\"[ArcCW Balance] Доступно только SuperAdmin.\")\n        return\n    end\n\n    ArcCW_Balance.ApplyAll()\n\n    local msg = \"[ArcCW Balance] Конфигурация баланса оружия и гранат перезагружена!\"\n    if IsValid(ply) then\n        ply:ChatPrint(msg)\n    else\n        print(msg)\n    end\nend)\n\n-- Попытка применить сразу при загрузке скрипта\nif weapons and weapons.GetStored then\n    ArcCW_Balance.ApplyAll()\nend\n";
const BUNDLED_INVENTORY_DATA = {"items":[{"class":"weapon_scpsl_medkit","name":"Аптечка","weight":1,"type":"weapon","icon":"icon16/briefcase.png","spec":"FA","rank":"","consumable_wep":true},{"class":"nn_medkit","name":"ПМП","weight":1,"type":"weapon","icon":"icon16/briefcase.png","spec":"MED","rank":"","consumable_wep":false},{"class":"weapon_scpsl_injector_blue","name":"Шприц бакты","weight":0.5,"type":"weapon","icon":"icon16/drink.png","spec":"FA","rank":"","consumable_wep":true},{"class":"weapon_scpsl_injector","name":"Шприц адреналина","weight":0.5,"type":"weapon","icon":"icon16/heart.png","spec":"FA","rank":"","consumable_wep":true},{"class":"weapon_scpsl_painkillers","name":"Бакта пилюли","weight":0.5,"type":"weapon","icon":"icon16/drink.png","spec":"FA","rank":"","consumable_wep":true},{"class":"alydus_fusioncutter","name":"Резак","weight":2,"type":"weapon","icon":"icon16/wrench.png","spec":"ENG","rank":"","consumable_wep":false},{"class":"weapon_lvsrepair","name":"Паяльник","weight":1,"type":"weapon","icon":"icon16/lightning.png","spec":"MN","rank":"","consumable_wep":false},{"class":"nn_build","name":"Лопата","weight":4,"type":"weapon","icon":"icon16/brick.png","spec":"ENG","rank":"","consumable_wep":false},{"class":"nn_grapple","name":"Крюк-Кошка","weight":1,"type":"weapon","icon":"icon16/brick.png","spec":"","rank":"PVT","consumable_wep":false},{"class":"nn_repair_kit","name":"Полевой ремкомплект","weight":2,"type":"weapon","icon":"icon16/wrench.png","spec":"","rank":"","consumable_wep":false},{"class":"weapon_aflare_gun_artillery","name":"Сигнал артиллерии","weight":1.5,"type":"weapon","icon":"icon16/wrench.png","spec":"","rank":"COL","consumable_wep":false},{"class":"weapon_aflare_gun_p2a1","name":"Сигнал поддержки","weight":1.5,"type":"weapon","icon":"icon16/wrench.png","spec":"","rank":"COL","consumable_wep":false},{"class":"weapon_aflare_gun_rockets","name":"Сигнал обстрела","weight":1.5,"type":"weapon","icon":"icon16/wrench.png","spec":"","rank":"COL","consumable_wep":false},{"class":"mortar_constructor","name":"Миномёт","weight":10,"type":"weapon","icon":"icon16/wrench.png","spec":"GN","rank":"","consumable_wep":false},{"class":"mortar_constructor_dark","name":"Миномёт (Тёмный)","weight":10,"type":"weapon","icon":"icon16/wrench.png","spec":"GN","rank":"","consumable_wep":false},{"class":"mortar_ammo_he","name":"Снаряд миномёта (ОФ/HE)","weight":2,"type":"none","icon":"icon16/bomb.png","spec":"GN","rank":"","consumable_wep":false},{"class":"mortar_ammo_se","name":"Снаряд миномёта (Дым/SE)","weight":1.5,"type":"none","icon":"icon16/weather_clouds.png","spec":"GN","rank":"","consumable_wep":false},{"class":"mortar_ammo_in","name":"Снаряд миномёта (Зажиг/IN)","weight":2,"type":"none","icon":"icon16/fire.png","spec":"GN","rank":"","consumable_wep":false},{"class":"mortar_ammo","name":"Ящик со снарядами миномёта","weight":5,"type":"none","icon":"icon16/box.png","spec":"GN","rank":"","consumable_wep":false},{"class":"nn_dronek","name":"Дрон камикадзе","weight":5,"type":"entity","icon":"icon16/wrench.png","spec":"ENG","rank":"","consumable_wep":false},{"class":"nn_drone","name":"Дрон разведчик","weight":8,"type":"entity","icon":"icon16/wrench.png","spec":"REC","rank":"","consumable_wep":false},{"class":"defibrillator","name":"Дефибы","weight":4,"type":"weapon","icon":"icon16/wrench.png","spec":"MED","rank":"CPL","consumable_wep":false},{"class":"nn_shields","name":"Энергощит маленький","weight":5,"type":"entity","icon":"icon16/wrench.png","spec":"ENG","rank":"","consumable_wep":false},{"class":"nn_shieldb","name":"Энергощит большой","weight":10,"type":"entity","icon":"icon16/wrench.png","spec":"ENG","rank":"","consumable_wep":false},{"class":"rps6_ammo","name":"Набор ракет для РПС-6","weight":3,"type":"consumable","icon":"icon16/wrench.png","spec":"DM","rank":"","consumable_wep":false},{"class":"plx_ammo","name":"Набор ракет для ПЛХ","weight":4,"type":"consumable","icon":"icon16/wrench.png","spec":"HEV","rank":"","consumable_wep":false},{"class":"mortar_range_finder","name":"Буссоль","weight":0.5,"type":"weapon","icon":"icon16/wrench.png","spec":"ART","rank":"","consumable_wep":false}],"wepWeights":{"arccw_k_9228":4.6,"arccw_k_a274su":4.3,"arccw_k_b2hand":0,"arccw_k_coruscantguardshield":8,"arccw_k_cr2s":3.4,"arccw_k_dc15a":4.3,"arccw_k_dc15a_grenadier":4.8,"arccw_k_dc15le":5,"arccw_k_dc15s":3.8,"arccw_k_dc15s_grenadier":4.3,"arccw_k_dc15sa":1,"arccw_k_dc15x":5.3,"arccw_k_dc15xr":5.3,"arccw_k_dc17":1,"arccw_k_dc17_akimbo":2,"arccw_k_dc17ext":1.5,"arccw_k_dc17ext_akimbo":3,"arccw_k_dc17m_allinone":5,"arccw_k_dc17m_launcher_republic":8,"arccw_k_dc17m_modular":5,"arccw_k_dc17m_rifle_republic":4.8,"arccw_k_dc17m_shotgun_republic":5.2,"arccw_k_dc17m_sniper_republic":5.5,"arccw_k_dc17s":1.8,"arccw_k_dc17s_dual":3.6,"arccw_k_dc17sa":1.8,"arccw_k_dc17sa_dual":3.6,"arccw_k_dc19":5,"arccw_k_dl44":1.2,"arccw_k_dp23":4.6,"arccw_k_dp23c":3.4,"arccw_k_dp24":4,"arccw_k_dp24c":3.6,"arccw_k_e5":4.3,"arccw_k_e5c":4.8,"arccw_k_e5s":5.4,"arccw_k_ee3e":3.8,"arccw_k_iqa11":5.3,"arccw_k_launcher_hh12":12,"arccw_k_launcher_plx1":15,"arccw_k_launcher_rps6":10,"arccw_k_launcher_smartlauncher":10,"arccw_k_m45":9,"arccw_k_m45c":8.4,"arccw_k_m45x":9.4,"arccw_k_nade_antitankmine":2,"arccw_k_nade_bacta":1,"arccw_k_nade_blaststick":1.5,"arccw_k_nade_c14":1.7,"arccw_k_nade_c25":1.7,"arccw_k_nade_decoy":1.2,"arccw_k_nade_detonite":1.5,"arccw_k_nade_dioxis":1,"arccw_k_nade_flashbang":1.2,"arccw_k_nade_impact":1.2,"arccw_k_nade_plasmagrenade":1.5,"arccw_k_nade_sequencecharger":2,"arccw_k_nade_shock":1.2,"arccw_k_nade_smoke":1,"arccw_k_nade_sonar":1,"arccw_k_nade_stun":1.2,"arccw_k_nade_thermal":1.2,"arccw_k_nade_thermalimploder":1.2,"arccw_k_nade_thermite":1.2,"arccw_k_republic_e9":3.4,"arccw_k_republicshield":8,"arccw_k_rg4d":1.4,"arccw_k_sb2":3.8,"arccw_k_sg6":5,"arccw_k_valken38":4.8,"arccw_k_westarm5":4.3,"arccw_k_z4":12,"arccw_k_z6":12,"arccw_k_z6adv":12,"arccw_sops_galactic_a180":1,"arccw_sops_galactic_a280cfe":4,"arccw_sops_galactic_b0l3":4.8,"arccw_sops_galactic_b1na":4.4,"arccw_sops_galactic_dca4":4,"arccw_sops_galactic_de10":1,"arccw_sops_galactic_deadmansrevenge":4.8,"arccw_sops_galactic_deadmanstale":5.2,"arccw_sops_galactic_deathwatchblaster":3.2,"arccw_sops_galactic_dg29":1,"arccw_sops_galactic_dh16":1.5,"arccw_sops_galactic_dt40":1,"arccw_sops_galactic_emprifle":3.4,"arccw_sops_galactic_fc1":2.4,"arccw_sops_galactic_galaar15":3.8,"arccw_sops_galactic_galaar15c":3.8,"arccw_sops_galactic_iondisruptor":5,"arccw_sops_galactic_jawapistol":1,"arccw_sops_galactic_k0bu":1.4,"arccw_sops_galactic_k3bu":2.6,"arccw_sops_galactic_m5d":1,"arccw_sops_galactic_mandorifle":5.8,"arccw_sops_galactic_mw20":1,"arccw_sops_galactic_prototypeblaster":3.8,"arccw_sops_galactic_r1ca":3.4,"arccw_sops_galactic_scatterpistol":1.4,"arccw_sops_galactic_tl30":4.2,"arccw_sops_galactic_wookieslug":3.6,"arccw_sops_galactic_z5":1,"arccw_sops_republic_773firepuncher":4.3,"arccw_sops_republic_773firepuncher_short":3.3,"arccw_sops_republic_dc19":3.8,"arccw_sops_republic_dlt23v":8,"arccw_sops_republic_md12x":3.4,"arccw_sops_republic_rx21":4,"arccw_sops_republic_t702":5.2,"arccw_sops_republic_x11":1.2,"arccw_sops_republic_z6chaingun":14,"arccw_sops_republic_z6x":6.8,"arccw_stimpistol":1,"defibrillator":4,"mortar_constructor":10,"mortar_constructor_dark":10,"nn_c4":1.5,"nn_grapple":1.5,"vibrokinfe_base":2,"weapon_binoculars":1,"weapon_defibrilator":4,"weapon_frag":0.5,"weapon_grapple":1.5,"weapon_lscs_electrokatana":2.5,"weapon_lscs_mandostaff":3,"weapon_syringe":0.1,"weapon_vibrosword":2}};




// ===== ПРЯМАЯ ИНТЕГРАЦИЯ С ГЛАВНОЙ ВЕБ-ПАНЕЛЬЮ ЧЕРЕЗ WEBSOCKET =====
function applyLiveServerConfig(payload) {
  if (!payload) return;

  // 1. Синхронизация переопределений ArcCW баланса напрямую с GMod сервера через WebSocket
  if (payload.arccw_overrides && typeof payload.arccw_overrides === 'object') {
    if (typeof arccwState !== 'undefined') {
      const keys = Object.keys(payload.arccw_overrides);
      if (keys.length > 0) {
        arccwState.overrides = Object.assign({}, arccwState.overrides || {}, payload.arccw_overrides);
        if (typeof renderArcCWCatalog === 'function') renderArcCWCatalog();
        if (arccwState.selectedClass && typeof renderArcCWInspector === 'function') {
          renderArcCWInspector(arccwState.selectedClass);
        }
        console.log('[COLLAPSAR] ArcCW overrides synchronized from live server (' + keys.length + ' weapons)');
      }
    }
  }

  // Protect client edits: don't overwrite if user has unsaved edits, loaded a file, or recently saved
  if (state.hasUnsavedChanges || (Date.now() - (window._lastEditorSaveTime || 0) < 120000) || (Date.now() - (window._lastFileLoadTime || 0) < 120000)) {
    console.log('[COLLAPSAR] Protected local edits: skipped background overwrite from live server config.');
    return;
  }

  // If initial sync was already done, only update status indicator unless user explicitly clicked reload
  if (window._liveServerInitialSyncDone && !window._explicitLiveSyncRequested) {
    const syncStatus = document.getElementById('editor-sync-status');
    const syncDot = document.querySelector('#editor-sync-badge .sync-dot');
    if (syncStatus) syncStatus.textContent = 'GMod Сервер: живые данные (' + new Date().toLocaleTimeString() + ')';
    if (syncDot) syncDot.className = 'sync-dot live';
    updateServerIndicator(true);
    return;
  }
  window._explicitLiveSyncRequested = false;
  window._liveServerInitialSyncDone = true;
  if (Array.isArray(payload.jobs) && payload.jobs.length > 0) {
    payload.jobs.forEach((job, idx) => {
      if (!job.teamVar || !String(job.teamVar).trim()) {
        if (job.jobID && String(job.jobID).trim()) {
          job.teamVar = 'TEAM_' + String(job.jobID).trim().toUpperCase().replace(/[^A-Z0-9_]/g, '_');
        } else if (job.name && String(job.name).trim()) {
          job.teamVar = 'TEAM_' + (typeof transliterate === 'function' ? transliterate(job.name) : 'JOB' + (idx + 1));
        } else {
          job.teamVar = 'TEAM_JOB' + (idx + 1);
        }
      }
    });
    state.jobs = payload.jobs;
  }
  if (Array.isArray(payload.categories) && payload.categories.length > 0) {
    state.categories = payload.categories;
  }
  if (Array.isArray(payload.formations) && payload.formations.length > 0) {
    state.formations = payload.formations;
  }
  if (Array.isArray(payload.weapons) && payload.weapons.length > 0) {
    if (typeof AUTOCOMPLETE_SUGGESTIONS !== 'undefined') {
      AUTOCOMPLETE_SUGGESTIONS.weapons = payload.weapons;
    }
  }

  // Update live indicator badge in topbar
  const syncStatus = document.getElementById('editor-sync-status');
  const syncDot = document.querySelector('#editor-sync-badge .sync-dot');
  if (syncStatus) {
    const timeStr = new Date().toLocaleTimeString();
    syncStatus.textContent = 'GMod Сервер: живые данные (' + timeStr + ')';
    syncStatus.title = 'Загружено: ' + state.jobs.length + ' проф, ' + state.categories.length + ' категорий, ' + (payload.weapons || []).length + ' оружий';
  }
  if (syncDot) syncDot.className = 'sync-dot live';

  updateServerIndicator(true);
  gatherSuggestions();
  updateStats();
  populateFilters();
  populateDatalists();
  runDiagnostics();
  renderJobs();
  clearUnsaved();
  showToast('Синхронизировано: ' + state.jobs.length + ' профессий, ' + state.categories.length + ' категорий прямо из сервера Garry\'s Mod!', 'success', 5000);
  return;
}

function triggerLiveWebSocketSync() {
  if (typeof api !== 'undefined' && api && api.socket && api.socket.readyState === 1) {
    api.sendCommand('get_editor_data', '');
  }
}



/**
 * COLLAPSAR™ StarWarsRP Jobs Editor - Pure Client-Side Standalone Bundle
 * Zero dependencies: works in any browser via double click (file://)
 */

function getApiUrl(endpoint) {
  var path = endpoint.startsWith('/') ? endpoint : '/' + endpoint;
  if (typeof window === 'undefined') return path;
  if (window.COLLAPSAR_API_BASE) {
    return window.COLLAPSAR_API_BASE.replace(/\/+$/, '') + path;
  }
  if (window.location.hostname.includes('github.io') || window.location.protocol === 'file:') {
    return 'https://collapsar-admin-panel.onrender.com' + path;
  }
  return path;
}

// Initial state
const state = {
  jobs: [],
  categories: [],
  formations: [],
  catsSearchTerm: '',
  catsActiveTab: 'main-cats',
  meta: {
    weapons: [],
    models: [],
    groups: [],
    spawnGroups: [],
    ranks: [],
    specs: []
  },
  backups: [],
  diagnostics: {
    issues: [],
    summary: { total: 0, errors: 0, warnings: 0, info: 0 }
  },
  hasUnsavedChanges: false,
  editingIndex: -1,
  currentWeapons: [],
  currentBodygroups: {},
  activeView: 'grid',
  searchTerm: '',
  filterCat: '',
  filterGroup: '',
  filterSpawn: '',
  filterStatus: '',
  sortBy: 'default',
  diagActiveTab: 'all'
};

const translitMap = {
  'а': 'A', 'б': 'B', 'в': 'V', 'г': 'G', 'д': 'D', 'е': 'E', 'ё': 'E',
  'ж': 'ZH', 'з': 'Z', 'и': 'I', 'й': 'Y', 'к': 'K', 'л': 'L', 'м': 'M',
  'н': 'N', 'о': 'O', 'п': 'P', 'р': 'R', 'с': 'S', 'т': 'T', 'у': 'U',
  'ф': 'F', 'х': 'KH', 'ц': 'TS', 'ч': 'CH', 'ш': 'SH', 'щ': 'SHCH',
  'ы': 'Y', 'э': 'E', 'ю': 'YU', 'я': 'YA', 'ь': '', 'ъ': ''
};

function transliterate(str) {
  let res = '';
  for (const char of str.toLowerCase()) {
    res += translitMap[char] !== undefined ? translitMap[char] : char;
  }
  return res.toUpperCase().replace(/[^A-Z0-9_]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
}

function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : type === 'warning' ? '⚠' : 'ℹ';
  toast.innerHTML = '<strong>' + icon + '</strong><span>' + escapeHtml(message) + '</span>';
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function markUnsaved() {
  state.hasUnsavedChanges = true;
  const indicator = document.getElementById('unsaved-indicator');
  const saveBtn = document.getElementById('btn-download-config');
  if (indicator) indicator.style.display = 'inline-flex';
  if (saveBtn) saveBtn.classList.add('has-unsaved');
  runDiagnostics();
}

function clearUnsaved() {
  state.hasUnsavedChanges = false;
  const indicator = document.getElementById('unsaved-indicator');
  const saveBtn = document.getElementById('btn-download-config');
  if (indicator) indicator.style.display = 'none';
  if (saveBtn) saveBtn.classList.remove('has-unsaved');
}

window.addEventListener('beforeunload', (e) => {
  if (state.hasUnsavedChanges) {
    e.preventDefault();
    e.returnValue = 'У вас есть несохраненные изменения!';
  }
});

// Lua Parser for client
function parseConfigString(content) {
  content = content.replace(/\r\n/g, '\n');
  const categories = [];
  const catsMatch = content.match(/nn\.cats\s*=\s*\{([\s\S]*?)\n\}/);
  if (catsMatch) {
    const catBlock = catsMatch[1];
    const catRegex = /\[(['"])(.*?)\1\]\s*=\s*\{([\s\S]*?)\}/g;
    let cm;
    while ((cm = catRegex.exec(catBlock)) !== null) {
      const catName = cm[2];
      const catBody = cm[3];
      const tcolorM = catBody.match(/tcolor\s*=\s*Color\s*\(([^)]*)\)/i);
      const bcolorM = catBody.match(/bcolor\s*=\s*Color\s*\(([^)]*)\)/i);
      const orderM = catBody.match(/order\s*=\s*(\d+)/i);
      const descM = catBody.match(/description\s*=\s*(['"])(.*?)\1/i);
      const iconM = catBody.match(/icon\s*=\s*(['"])(.*?)\1/i);
      const formM = catBody.match(/formation_id\s*=\s*(['"])(.*?)\1/i);
      const idnStrM = catBody.match(/idn_prefix\s*=\s*(['"])(.*?)\1/i);
      const idnBoolM = catBody.match(/idn_prefix\s*=\s*(false|true)/i);

      let idn_prefix = undefined;
      if (idnStrM) {
        idn_prefix = idnStrM[2];
      } else if (idnBoolM) {
        idn_prefix = idnBoolM[1].toLowerCase() === 'true';
      }

      function toCol(m) {
        if (!m) return { r: 255, g: 255, b: 255, a: 255 };
        const nums = m[1].split(',').map(n => parseInt(n.trim(), 10) || 0);
        return { r: nums[0] || 0, g: nums[1] || 0, b: nums[2] || 0, a: nums[3] || 255 };
      }
      categories.push({
        name: catName,
        order: orderM ? parseInt(orderM[1], 10) : undefined,
        tcolor: toCol(tcolorM),
        bcolor: toCol(bcolorM),
        description: descM ? descM[2] : '',
        icon: iconM ? iconM[2] : '',
        formation_id: formM ? formM[2] : '',
        idn_prefix: idn_prefix
      });
    }
  }

  // 1.1 Parse additional formations (nn.formations)
  const formations = [];
  const formMatch = content.match(/nn\.formations\s*=\s*\{([\s\S]*?)\n\}/);
  if (formMatch) {
    const formBlock = formMatch[1].replace(/--[^\n]*/g, '');
    const rowRegex = /\{([^}]+)\}/g;
    let rm;
    while ((rm = rowRegex.exec(formBlock)) !== null) {
      const rowText = rm[1];
      const idM = rowText.match(/id\s*=\s*(['"])(.*?)\1/i);
      const nameM = rowText.match(/name\s*=\s*(['"])(.*?)\1/i);
      const idnStrM = rowText.match(/idn_prefix\s*=\s*(['"])(.*?)\1/i);
      const idnBoolM = rowText.match(/idn_prefix\s*=\s*(false|true)/i);

      let idn_prefix = undefined;
      if (idnStrM) {
        idn_prefix = idnStrM[2];
      } else if (idnBoolM) {
        idn_prefix = idnBoolM[1].toLowerCase() === 'true';
      }

      if (idM) {
        formations.push({
          id: idM[2],
          name: nameM ? nameM[2] : idM[2],
          idn_prefix: idn_prefix
        });
      }
    }
  }

  const jobHeaderRegex = /^(TEAM_\w+)\s*=\s*nn\.util\.addjob\s*\(\s*(['"])(.*?)\2\s*,\s*\{/gm;
  const indices = [];
  let match;
  while ((match = jobHeaderRegex.exec(content)) !== null) {
    indices.push({ index: match.index, teamVar: match[1], jobName: match[3] });
  }

  const jobs = [];
  for (let i = 0; i < indices.length; i++) {
    const cur = indices[i];
    const nextStart = (i + 1 < indices.length) ? indices[i + 1].index : content.indexOf('nn.jobs_by_id', cur.index);
    const blockText = content.substring(cur.index, nextStart !== -1 ? nextStart : content.length).trim();

    const colorM = blockText.match(/Color\s*=\s*Color\s*\(([^)]*)\)/i);
    const modelM = blockText.match(/WorldModel\s*=\s*(['"])(.*?)\1/);
    const skinM = blockText.match(/(?:ModelSkin|skin)\s*=\s*(\d+)/);
    const jobIdM = blockText.match(/jobID\s*=\s*(['"])(.*?)\1/);
    const groupIdM = blockText.match(/group_id\s*=\s*(['"])(.*?)\1/);
    const catM = blockText.match(/cat\s*=\s*(['"])(.*?)\1/);
    const spawnGroupM = blockText.match(/spawn_group\s*=\s*(['"])(.*?)\1/);
    const rankM = blockText.match(/rank\s*=\s*(['"])(.*?)\1/);
    const specM = blockText.match(/spec\s*=\s*(['"])(.*?)\1/);

    let weapons = [];
    const wepM = blockText.match(/weapons\s*=\s*\{([^}]*)\}/);
    if (wepM) {
      const wepItems = wepM[1].match(/(['"])(.*?)\1/g);
      if (wepItems) {
        weapons = wepItems.map(w => w.slice(1, -1).trim()).filter(Boolean);
      }
    }

    let bodygroups = {};
    const bgM = blockText.match(/\bbodygroups\s*=\s*\{([\s\S]*?)\}/);
    if (bgM) {
      const bgBody = bgM[1];
      const numRegex = /\[\s*(\d+)\s*\]\s*=\s*(\d+)/g;
      let bge;
      while ((bge = numRegex.exec(bgBody)) !== null) {
        bodygroups[parseInt(bge[1], 10)] = parseInt(bge[2], 10);
      }
      const strRegex = /\[\s*(['"])(.*?)\1\s*\]\s*=\s*(\d+)/g;
      while ((bge = strRegex.exec(bgBody)) !== null) {
        bodygroups[bge[2]] = parseInt(bge[3], 10);
      }
      const idRegex = /(?:^|[,;\s])([a-zA-Z_]\w*)\s*=\s*(\d+)/g;
      while ((bge = idRegex.exec(bgBody)) !== null) {
        if (bodygroups[bge[1]] === undefined) {
          bodygroups[bge[1]] = parseInt(bge[2], 10);
        }
      }
    }

    let locked_bodygroups = [];
    const lockedM = blockText.match(/locked_bodygroups\s*=\s*\{([\s\S]*?)\}/);
    if (lockedM) {
      const items = lockedM[1].match(/(['"])(.*?)\1|(\d+)/g);
      if (items) {
        locked_bodygroups = items.map(s => s.replace(/['"]/g, '').trim()).filter(Boolean);
      }
    }

    let allowed_bodygroups = [];
    const allowedM = blockText.match(/allowed_bodygroups\s*=\s*\{([\s\S]*?)\}/);
    if (allowedM) {
      const items = allowedM[1].match(/(['"])(.*?)\1|(\d+)/g);
      if (items) {
        allowed_bodygroups = items.map(s => s.replace(/['"]/g, '').trim()).filter(Boolean);
      }
    }

    let banned_bodygroups = [];
    const bannedM = blockText.match(/banned_bodygroups\s*=\s*\{([\s\S]*?)\}/);
    if (bannedM) {
      const items = bannedM[1].match(/(['"])(.*?)\1|(\d+)/g);
      if (items) {
        banned_bodygroups = items.map(s => s.replace(/['"]/g, '').trim()).filter(Boolean);
      }
    }

    let hidden_bodygroups = [];
    const hiddenM = blockText.match(/hidden_bodygroups\s*=\s*\{([\s\S]*?)\}/);
    if (hiddenM) {
      const items = hiddenM[1].match(/(['"])(.*?)\1|(\d+)/g);
      if (items) {
        hidden_bodygroups = items.map(s => s.replace(/['"]/g, '').trim()).filter(Boolean);
      }
    }

    let playerSpawn = '';
    let health = 100, maxHealth = 100, armor = 0, maxArmor = 0, isStandardPlayerSpawn = true;
    const psM = blockText.match(/PlayerSpawn\s*=\s*function\s*\([^\)]*\)([\s\S]*?)end/);
    if (psM) {
      playerSpawn = psM[1].trim();
      const hpM = playerSpawn.match(/ply:SetHealth\s*\(\s*(\d+)\s*\)/);
      const maxHpM = playerSpawn.match(/ply:SetMaxHealth\s*\(\s*(\d+)\s*\)/);
      const armM = playerSpawn.match(/ply:SetArmor\s*\(\s*(\d+)\s*\)/);
      const maxArmM = playerSpawn.match(/ply:SetMaxArmor\s*\(\s*(\d+)\s*\)/);

      if (hpM) health = parseInt(hpM[1], 10);
      if (maxHpM) maxHealth = parseInt(maxHpM[1], 10);
      if (armM) armor = parseInt(armM[1], 10);
      if (maxArmM) maxArmor = parseInt(maxArmM[1], 10);

      const cleaned = playerSpawn.replace(/--.*$/gm, '').replace(/ply:Set(Max)?(Armor|Health)\s*\(\s*\d+\s*\)/g, '').trim();
      if (cleaned.length > 0) isStandardPlayerSpawn = false;
    }

    function toCol(m) {
      if (!m) return { r: 0, g: 100, b: 0, a: 255 };
      const nums = m[1].split(',').map(n => parseInt(n.trim(), 10) || 0);
      return { r: nums[0] || 0, g: nums[1] || 100, b: nums[2] || 0, a: nums[3] || 255 };
    }

    const hasBackpackM = blockText.match(/\bhas_backpack\s*=\s*(true|false)/i);
    const backpackSlotsM = blockText.match(/\bbackpack_slots\s*=\s*(\d+)/i);
    const hasJetpackM = blockText.match(/\bhas_jetpack\s*=\s*(true|false)/i) || blockText.match(/\bjetpack\s*=\s*(true|false|['"]mk\d['"])/i);
    const hasNvgM = blockText.match(/\b(?:has_nvg|has_pnv|nvg|pnv)\s*=\s*(true|false)/i);
    const hasThermalM = blockText.match(/\b(?:has_thermal|has_heat|thermal|heat)\s*=\s*(true|false)/i);
    const hasKatarnM = blockText.match(/\b(?:has_katarn|has_extra_armor)\s*=\s*(true|false)/i);

    const has_backpack = hasBackpackM ? hasBackpackM[1].toLowerCase() === 'true' : false;
    const backpack_slots = backpackSlotsM ? parseInt(backpackSlotsM[1], 10) : (has_backpack ? 8 : undefined);
    const has_jetpack = hasJetpackM ? (hasJetpackM[1].toLowerCase() === 'true' || hasJetpackM[1].includes('mk')) : false;
    const has_nvg = hasNvgM ? hasNvgM[1].toLowerCase() === 'true' : false;
    const has_thermal = hasThermalM ? hasThermalM[1].toLowerCase() === 'true' : false;
    const has_katarn = hasKatarnM ? hasKatarnM[1].toLowerCase() === 'true' : false;

    jobs.push({
      teamVar: cur.teamVar,
      name: cur.jobName,
      has_backpack,
      backpack_slots,
      has_jetpack,
      has_nvg,
      has_thermal,
      has_katarn,
      color: toCol(colorM),
      worldModel: modelM ? modelM[2] : '',
      skin: skinM ? parseInt(skinM[1], 10) : 0,
      weapons,
      jobID: jobIdM ? jobIdM[2] : '',
      groupId: groupIdM ? groupIdM[2] : '',
      cat: catM ? catM[2] : '',
      spawnGroup: spawnGroupM ? spawnGroupM[2] : 'Clones',
      rank: rankM ? rankM[2] : '',
      spec: specM ? specM[2] : '',
      bodygroups,
      locked_bodygroups,
      allowed_bodygroups,
      banned_bodygroups,
      hidden_bodygroups,
      health,
      maxHealth,
      armor,
      maxArmor,
      playerSpawn,
      isStandardPlayerSpawn
    });
  }

  return { categories, jobs, formations };
}

// Lua Generator for client
function generateConfigLua({ categories, jobs, formations }) {
  const lines = [];
  lines.push('-- =================================================================');
  lines.push('-- [COLLAPSAR] StarWarsRP Jobs Configuration');
  lines.push('-- Generated by Collapsar Standalone Jobs Editor on ' + new Date().toLocaleString('ru-RU'));
  lines.push('-- =================================================================\n');

  lines.push('nn.cats = {');
  for (const cat of categories) {
    const tcol = cat.tcolor || { r: 255, g: 255, b: 255 };
    const bcol = cat.bcolor || { r: 50, g: 50, b: 50 };
    lines.push("\t['" + cat.name + "'] = {");
    if (cat.order !== undefined && cat.order !== null) {
      lines.push('\t\torder = ' + cat.order + ',');
    }
    lines.push('\t\ttcolor = Color(' + tcol.r + ', ' + tcol.g + ', ' + tcol.b + '),');
    lines.push('\t\tbcolor = Color(' + bcol.r + ', ' + bcol.g + ', ' + bcol.b + '),');
    if (cat.description) {
      lines.push("\t\tdescription = '" + cat.description.replace(/'/g, "\\'") + "',");
    }
    if (cat.icon) {
      lines.push("\t\ticon = '" + cat.icon.replace(/'/g, "\\'") + "',");
    }
    if (cat.formation_id) {
      lines.push("\t\tformation_id = '" + cat.formation_id.replace(/'/g, "\\'") + "',");
    }
    if (cat.idn_prefix !== undefined && cat.idn_prefix !== null) {
      if (typeof cat.idn_prefix === 'boolean') {
        lines.push('\t\tidn_prefix = ' + cat.idn_prefix + ',');
      } else {
        lines.push("\t\tidn_prefix = '" + String(cat.idn_prefix).replace(/'/g, "\\'") + "',");
      }
    }
    lines.push('\t},');
  }
  lines.push('}\n');

  // Additional Whitelist Formations (nn.formations)
  if (formations && Array.isArray(formations) && formations.length > 0) {
    lines.push('-- =================================================================');
    lines.push('-- ДОПОЛНИТЕЛЬНЫЕ ФОРМИРОВАНИЯ ДЛЯ ВАЙТЛИСТА (nn.formations):');
    lines.push('-- Основные формирования создаются автоматически из категорий nn.cats (по formation_id).');
    lines.push('-- Здесь задаются любые дополнительные спец-подразделения и подформирования:');
    lines.push('-- =================================================================');
    lines.push('nn.formations = {');
    for (const f of formations) {
      if (!f || !f.id) continue;
      const parts = [];
      parts.push('id = "' + f.id.replace(/"/g, '\\"') + '"');
      parts.push('name = "' + (f.name || f.id).replace(/"/g, '\\"') + '"');
      if (f.idn_prefix !== undefined && f.idn_prefix !== null && f.idn_prefix !== '') {
        if (typeof f.idn_prefix === 'boolean') {
          parts.push('idn_prefix = ' + f.idn_prefix);
        } else if (f.idn_prefix === 'false' || f.idn_prefix === 'true') {
          parts.push('idn_prefix = ' + f.idn_prefix);
        } else {
          parts.push('idn_prefix = "' + String(f.idn_prefix).replace(/"/g, '\\"') + '"');
        }
      }
      lines.push('\t{ ' + parts.join(', ') + ' },');
    }
    lines.push('}\n');
  }

  lines.push('if nn.util and nn.util.sync_categories then');
  lines.push('\tnn.util.sync_categories()');
  lines.push('end\n');
  lines.push('if nn.util and nn.util.reset_jobs then');
  lines.push('\tnn.util.reset_jobs()');
  lines.push('else');
  lines.push('\tnn.jobs = {}');
  lines.push('\tnn.jobs_by_id = {}');
  lines.push('\tnn.jobs_by_name = {}');
  lines.push('\tnn.job_index = 1');
  lines.push('end\n');

  for (const job of jobs) {
    const teamVar = job.teamVar || ('TEAM_' + (job.jobID || 'CUSTOM').toUpperCase().replace(/[^A-Z0-9_]/g, '_'));
    const name = job.name || 'Безымянная профессия';
    const col = job.color || { r: 0, g: 100, b: 0 };

    lines.push(teamVar + " = nn.util.addjob('" + name.replace(/'/g, "\\'") + "', {");
    lines.push('\tColor = Color(' + col.r + ', ' + col.g + ', ' + col.b + '),');
    lines.push("\tWorldModel = '" + (job.worldModel || '') + "',");

    const wepList = (job.weapons || []).map(w => "'" + w.replace(/'/g, "\\'") + "'").join(', ');
    lines.push('\tweapons = {' + wepList + '},');

    lines.push("\tjobID = '" + (job.jobID || '') + "',");
    lines.push("\tgroup_id = '" + (job.groupId || '') + "',");
    lines.push("\tcat = '" + (job.cat || '') + "',");
    lines.push("\tspawn_group = '" + (job.spawnGroup || 'Clones') + "',");

    if (job.rank && job.rank.trim()) {
      lines.push("\trank = '" + job.rank.trim() + "',");
    }
    if (job.spec && job.spec.trim()) {
      lines.push("\tspec = '" + job.spec.trim() + "',");
    }

    lines.push('\tskin = ' + (job.skin !== undefined ? job.skin : 0) + ',');
    lines.push('\thealth = ' + (job.health !== undefined ? job.health : 100) + ',');
    lines.push('\tmaxHealth = ' + (job.maxHealth !== undefined ? job.maxHealth : 100) + ',');
    lines.push('\tarmor = ' + (job.armor !== undefined ? job.armor : 100) + ',');
    lines.push('\tmaxArmor = ' + (job.maxArmor !== undefined ? job.maxArmor : 100) + ',');

    if (job.has_backpack) {
      lines.push('\thas_backpack = true,');
      if (job.backpack_slots && job.backpack_slots !== 8) {
        lines.push('\tbackpack_slots = ' + job.backpack_slots + ',');
      }
    } else if (job.backpack_slots) {
      lines.push('\tbackpack_slots = ' + job.backpack_slots + ',');
    }

    if (job.has_jetpack) {
      lines.push('\thas_jetpack = true,');
    }

    if (job.has_nvg) {
      lines.push('\thas_nvg = true,');
    }

    if (job.has_thermal) {
      lines.push('\thas_thermal = true,');
    }

    if (job.has_katarn || job.has_extra_armor) {
      lines.push('\thas_katarn = true,');
    }

    if (job.bodygroups && Object.keys(job.bodygroups).length > 0) {
      lines.push('\tbodygroups = {');
      const keys = Object.keys(job.bodygroups);
      const numKeys = keys.filter(k => /^\d+$/.test(k)).map(k => parseInt(k, 10)).sort((a, b) => a - b);
      const strKeys = keys.filter(k => !/^\d+$/.test(k)).sort();
      for (const k of numKeys) {
        lines.push('\t\t[' + k + '] = ' + job.bodygroups[k] + ',');
      }
      for (const k of strKeys) {
        lines.push("\t\t['" + k.replace(/'/g, "\\'") + "'] = " + job.bodygroups[k] + ',');
      }
      lines.push('\t},');
    }

    if (job.locked_bodygroups && job.locked_bodygroups.length > 0) {
      lines.push('\tlocked_bodygroups = {');
      for (const bg of job.locked_bodygroups) {
        const isNum = /^\d+$/.test(bg);
        lines.push(isNum ? '\t\t' + bg + ',' : "\t\t'" + bg.replace(/'/g, "\\'") + "',");
      }
      lines.push('\t},');
    }

    if (job.allowed_bodygroups && job.allowed_bodygroups.length > 0) {
      lines.push('\tallowed_bodygroups = {');
      for (const bg of job.allowed_bodygroups) {
        const isNum = /^\d+$/.test(bg);
        lines.push(isNum ? '\t\t' + bg + ',' : "\t\t'" + bg.replace(/'/g, "\\'") + "',");
      }
      lines.push('\t},');
    }

    if (job.banned_bodygroups && job.banned_bodygroups.length > 0) {
      lines.push('\tbanned_bodygroups = {');
      for (const bg of job.banned_bodygroups) {
        const isNum = /^\d+$/.test(bg);
        lines.push(isNum ? '\t\t' + bg + ',' : "\t\t'" + bg.replace(/'/g, "\\'") + "',");
      }
      lines.push('\t},');
    }

    if (job.hidden_bodygroups && job.hidden_bodygroups.length > 0) {
      lines.push('\thidden_bodygroups = {');
      for (const bg of job.hidden_bodygroups) {
        const isNum = /^\d+$/.test(bg);
        lines.push(isNum ? '\t\t' + bg + ',' : "\t\t'" + bg.replace(/'/g, "\\'") + "',");
      }
      lines.push('\t},');
    }

    lines.push('\tPlayerSpawn = function(ply)');
    if (job.isStandardPlayerSpawn || !job.playerSpawn || !job.playerSpawn.trim()) {
      const maxArmor = job.maxArmor !== undefined ? job.maxArmor : 100;
      const armor = job.armor !== undefined ? job.armor : 100;
      lines.push('\t\tply:SetMaxArmor(' + maxArmor + ')');
      lines.push('\t\tply:SetArmor(' + armor + ')');
      if (job.health && job.health !== 100) {
        lines.push('\t\tply:SetHealth(' + job.health + ')');
      }
      if (job.maxHealth && job.maxHealth !== 100) {
        lines.push('\t\tply:SetMaxHealth(' + job.maxHealth + ')');
      }
    } else {
      const customLines = job.playerSpawn.split('\n');
      for (const cl of customLines) {
        lines.push('\t\t' + cl.trim());
      }
    }
    lines.push('\tend');
    lines.push('})\n');
  }

  lines.push('nn.jobs_by_id = nn.jobs_by_id or {}');
  lines.push('for k, v in pairs(nn.jobs) do');
  lines.push('\tif v.jobID and v.jobID ~= "" then');
  lines.push('\t\tnn.jobs_by_id[v.jobID] = v');
  lines.push('\t\tnn.jobs_by_id[string.lower(v.jobID)] = v');
  lines.push('\tend');
  lines.push('end');
  lines.push('\nif nn.util and nn.util.sync_categories then');
  lines.push('\tnn.util.sync_categories()');
  lines.push('end');
  lines.push('if SERVER then');
  lines.push('\tfor _, ply in ipairs(player.GetAll()) do');
  lines.push('\t\tif IsValid(ply) then');
  lines.push('\t\t\tlocal curTeam = ply:Team()');
  lines.push('\t\t\tlocal tName = team.GetName(curTeam)');
  lines.push('\t\t\tif tName and tName ~= "" and nn and nn.jobs_by_name and nn.jobs_by_name[tName] then');
  lines.push('\t\t\t\tlocal realIdx = nn.jobs_by_name[tName].index');
  lines.push('\t\t\t\tif realIdx and realIdx ~= curTeam then ply:SetTeam(realIdx) end');
  lines.push('\t\t\tend');
  lines.push('\t\tend');
  lines.push('\tend');
  lines.push('end\n');

  return lines.join('\n');
}

// Diagnostics
function runDiagnostics() {
  const issues = [];
  const catNames = new Set((state.categories || []).map(c => c.name));
  const seenJobIDs = new Map();
  const seenTeamVars = new Map();
  const validSpawnGroups = new Set(['Clones', 'Droids', 'Administration', 'Jedi', 'Civil']);
  const usedCats = new Set();

  state.jobs.forEach((job, index) => {
    const jobLabel = job.name || job.teamVar || ('Профессия #' + (index + 1));

    if (!job.jobID || !job.jobID.trim()) {
      issues.push({
        level: 'error',
        jobIndex: index,
        jobName: jobLabel,
        teamVar: job.teamVar,
        field: 'jobID',
        tab: 'tab-main',
        title: 'Отсутствует уникальный jobID',
        desc: 'Каждая профессия должна иметь уникальный строковый идентификатор jobID.'
      });
    } else {
      const jid = job.jobID.trim();
      if (seenJobIDs.has(jid)) {
        const prev = seenJobIDs.get(jid);
        issues.push({
          level: 'error',
          jobIndex: index,
          jobName: jobLabel,
          teamVar: job.teamVar,
          field: 'jobID',
          tab: 'tab-main',
          title: 'Дубликат jobID "' + jid + '"',
          desc: 'Идентификатор "' + jid + '" также используется у "' + prev.name + '". В Garry\'s Mod это приведёт к перезаписи!',
          canAutoFix: true,
          fixType: 'rename_job_id'
        });
      } else {
        seenJobIDs.set(jid, { name: jobLabel, index });
      }

      if (/\s/.test(jid)) {
        issues.push({
          level: 'warning',
          jobIndex: index,
          jobName: jobLabel,
          teamVar: job.teamVar,
          field: 'jobID',
          tab: 'tab-main',
          title: 'Пробелы в jobID "' + jid + '"',
          desc: 'Рекомендуется убрать пробелы из jobID.',
          canAutoFix: true,
          fixType: 'trim_job_id'
        });
      }
    }

    if (!job.teamVar || !job.teamVar.trim()) {
      issues.push({
        level: 'error',
        jobIndex: index,
        jobName: jobLabel,
        teamVar: job.teamVar,
        field: 'teamVar',
        tab: 'tab-main',
        title: 'Отсутствует переменная TEAM_',
        desc: 'Для регистрации требуется переменная (например, TEAM_CT1).'
      });
    } else {
      const tvar = job.teamVar.trim();
      if (seenTeamVars.has(tvar)) {
        const prev = seenTeamVars.get(tvar);
        issues.push({
          level: 'error',
          jobIndex: index,
          jobName: jobLabel,
          teamVar: tvar,
          field: 'teamVar',
          tab: 'tab-main',
          title: 'Дубликат переменной "' + tvar + '"',
          desc: 'Переменная "' + tvar + '" уже объявлена у "' + prev.name + '"!',
          canAutoFix: true,
          fixType: 'rename_team_var'
        });
      } else {
        seenTeamVars.set(tvar, { name: jobLabel, index });
      }

      if (!tvar.startsWith('TEAM_')) {
        issues.push({
          level: 'warning',
          jobIndex: index,
          jobName: jobLabel,
          teamVar: tvar,
          field: 'teamVar',
          tab: 'tab-main',
          title: 'Переменная не начинается с TEAM_',
          desc: 'Рекомендуется стандартный префикс TEAM_.',
          canAutoFix: true,
          fixType: 'prefix_team_var'
        });
      }

      if (/[^A-Za-z0-9_]/.test(tvar)) {
        issues.push({
          level: 'error',
          jobIndex: index,
          jobName: jobLabel,
          teamVar: tvar,
          field: 'teamVar',
          tab: 'tab-main',
          title: 'Недопустимые символы в "' + tvar + '"',
          desc: 'Имя переменной в Lua не может содержать пробелы, кириллицу или спецсимволы.',
          canAutoFix: true,
          fixType: 'clean_team_var'
        });
      }
    }

    if (!job.cat || !job.cat.trim()) {
      issues.push({
        level: 'error',
        jobIndex: index,
        jobName: jobLabel,
        teamVar: job.teamVar,
        field: 'cat',
        tab: 'tab-main',
        title: 'Не указана категория (cat)',
        desc: 'Профессия без категории не сможет корректно отображаться в F4 меню.'
      });
    } else {
      usedCats.add(job.cat);
      if (!catNames.has(job.cat)) {
        issues.push({
          level: 'error',
          jobIndex: index,
          jobName: jobLabel,
          teamVar: job.teamVar,
          field: 'cat',
          tab: 'tab-main',
          title: 'Несуществующая категория "' + job.cat + '"',
          desc: 'Категории "' + job.cat + '" нет в nn.cats! Это вызовет ошибку при открытии F4 меню.',
          canAutoFix: true,
          fixType: 'create_missing_cat',
          missingCat: job.cat
        });
      }
    }

    if (!job.worldModel || !job.worldModel.trim()) {
      issues.push({
        level: 'error',
        jobIndex: index,
        jobName: jobLabel,
        teamVar: job.teamVar,
        field: 'worldModel',
        tab: 'tab-model',
        title: 'Не указан путь к модели (WorldModel)',
        desc: 'Игрок заспавнится невидимым или с ошибкой ERROR.'
      });
    } else {
      const mdl = job.worldModel.trim();
      if (!mdl.toLowerCase().endsWith('.mdl')) {
        issues.push({
          level: 'warning',
          jobIndex: index,
          jobName: jobLabel,
          teamVar: job.teamVar,
          field: 'worldModel',
          tab: 'tab-model',
          title: 'Модель не заканчивается на .mdl',
          desc: 'Путь "' + mdl + '" не имеет расширения .mdl.'
        });
      }
      if (mdl.startsWith('/') || mdl.startsWith('\\') || mdl.includes('\\')) {
        issues.push({
          level: 'warning',
          jobIndex: index,
          jobName: jobLabel,
          teamVar: job.teamVar,
          field: 'worldModel',
          tab: 'tab-model',
          title: 'Неверные слэши в пути к модели',
          desc: 'Путь "' + mdl + '" содержит обратные слэши или начинается со слэша.',
          canAutoFix: true,
          fixType: 'fix_model_slashes'
        });
      }
    }

    if (Array.isArray(job.weapons)) {
      let hasEmptyWep = false;
      const wepSet = new Set();
      let hasDupWep = false;

      job.weapons.forEach(w => {
        if (!w || !w.trim()) {
          hasEmptyWep = true;
        } else {
          if (wepSet.has(w)) hasDupWep = true;
          wepSet.add(w);
        }
      });

      if (hasEmptyWep) {
        issues.push({
          level: 'warning',
          jobIndex: index,
          jobName: jobLabel,
          teamVar: job.teamVar,
          field: 'weapons',
          tab: 'tab-weapons',
          title: 'Пустая строка "" в списке оружия',
          desc: 'Попытка выдать пустое оружие при спавне вызывает ошибку ply:Give("").',
          canAutoFix: true,
          fixType: 'remove_empty_weapons'
        });
      }

      if (hasDupWep) {
        issues.push({
          level: 'warning',
          jobIndex: index,
          jobName: jobLabel,
          teamVar: job.teamVar,
          field: 'weapons',
          tab: 'tab-weapons',
          title: 'Повторяющиеся оружия в комплекте',
          desc: 'В списке weapons один и тот же SWEP указан несколько раз.',
          canAutoFix: true,
          fixType: 'dedupe_weapons'
        });
      }
    }

    if (job.armor !== undefined && job.maxArmor !== undefined && job.maxArmor > 0 && job.armor > job.maxArmor) {
      issues.push({
        level: 'warning',
        jobIndex: index,
        jobName: jobLabel,
        teamVar: job.teamVar,
        field: 'armor',
        tab: 'tab-stats',
        title: 'Начальная броня (' + job.armor + ') > максимальной (' + job.maxArmor + ')',
        desc: 'Игрок заспавнится с броней выше установленного максимума.',
        canAutoFix: true,
        fixType: 'fix_armor_cap'
      });
    }

    if (job.health !== undefined && job.maxHealth !== undefined && job.maxHealth > 0 && job.health > job.maxHealth) {
      issues.push({
        level: 'warning',
        jobIndex: index,
        jobName: jobLabel,
        teamVar: job.teamVar,
        field: 'health',
        tab: 'tab-stats',
        title: 'Начальное здоровье (' + job.health + ') > максимального (' + job.maxHealth + ')',
        desc: 'Игрок заспавнится со здоровьем выше максимума.',
        canAutoFix: true,
        fixType: 'fix_health_cap'
      });
    }
  });

  state.categories.forEach(cat => {
    if (!usedCats.has(cat.name)) {
      issues.push({
        level: 'info',
        jobIndex: -1,
        jobName: 'Категория: ' + cat.name,
        field: 'category',
        tab: null,
        title: 'Пустая категория "' + cat.name + '"',
        desc: 'В этой категории нет ни одной профессии.'
      });
    }
  });

  state.diagnostics = {
    issues,
    summary: {
      total: issues.length,
      errors: issues.filter(i => i.level === 'error').length,
      warnings: issues.filter(i => i.level === 'warning').length,
      info: issues.filter(i => i.level === 'info').length
    }
  };

  updateDiagnosticsBadge();
}

function updateDiagnosticsBadge() {
  const badge = document.getElementById('diag-badge');
  if (!badge) return;

  const { errors, warnings, total } = state.diagnostics.summary;
  if (total > 0) {
    badge.style.display = 'inline-block';
    badge.textContent = total;
    badge.className = errors > 0 ? 'diag-badge-pill' : 'diag-badge-pill warning-only';
  } else {
    badge.style.display = 'none';
  }

  const allEl = document.getElementById('diag-tab-all');
  const errEl = document.getElementById('diag-tab-error');
  const warnEl = document.getElementById('diag-tab-warning');
  const infoEl = document.getElementById('diag-tab-info');

  if (allEl) allEl.textContent = state.diagnostics.summary.total;
  if (errEl) errEl.textContent = state.diagnostics.summary.errors;
  if (warnEl) warnEl.textContent = state.diagnostics.summary.warnings;
  if (infoEl) infoEl.textContent = state.diagnostics.summary.info;
}

// Initial Data Loader
let isServerConnected = false;

function updateServerIndicator(connected) {
  isServerConnected = connected;
  const brandSub = document.querySelector('.brand-sub');
  const saveBtnLabel = document.getElementById('btn-save-label');
  if (connected) {
    if (brandSub) {
      brandSub.innerHTML = '<span style="color:#10b981; font-weight:700;">● СЕРВЕР ПОДКЛЮЧЕН</span> // ПРЯМОЕ СОХРАНЕНИЕ В .LUA';
    }
    if (saveBtnLabel) {
      saveBtnLabel.textContent = 'Сохранить на сервере';
    }
  } else {
    if (brandSub) {
      brandSub.textContent = 'PORTABLE STANDALONE EDITION';
    }
    if (saveBtnLabel) {
      saveBtnLabel.textContent = 'Скачать sh_jobs_config.lua';
    }
  }
}

async function loadData() {
  // 1. Попытка загрузить актуальные данные с сервера Node.js при запуске через HTTP
  if (window.location.protocol.startsWith('http') || window.location.hostname.includes('github.io')) {
    try {
      const res = await fetch(getApiUrl('/api/data'));
      if (res.ok) {
        const data = await res.json();
        if (data && data.success && Array.isArray(data.jobs) && data.jobs.length > 0) {
          state.jobs = data.jobs;
          state.categories = data.categories || [];
          state.formations = data.formations || [];
          updateServerIndicator(true);
        }
      }
    } catch(e) {
      console.warn('Сервер недоступен, используется встроенная база:', e);
    }
  }

  // 2. Фолбэк на встроенные данные BUNDLED_DATA
  if (state.jobs.length === 0 && typeof BUNDLED_DATA !== 'undefined' && BUNDLED_DATA) {
    state.jobs = JSON.parse(JSON.stringify(BUNDLED_DATA.jobs || []));
    state.categories = JSON.parse(JSON.stringify(BUNDLED_DATA.categories || []));
    state.formations = JSON.parse(JSON.stringify(BUNDLED_DATA.formations || []));
    updateServerIndicator(false);
  }

  // 3. Запрос свежих живых данных через родительское окно веб-панели (WebSocket мост)
  if (window.parent && window.parent !== window) {
    try {
      window.parent.postMessage({ type: 'REQUEST_SERVER_CONFIG' }, '*');
    } catch(e) {}
  }

  triggerLiveWebSocketSync();
  gatherSuggestions();
  updateStats();
  populateFilters();
  populateDatalists();
  runDiagnostics();
  renderJobs();
  clearUnsaved();
  loadLocalBackups();

  if (isServerConnected) {
    showToast('Синхронизировано с сервером: загружено ' + state.jobs.length + ' профессий из sh_jobs_config.lua!', 'success');
  } else {
    showToast('Автономный режим: загружено ' + state.jobs.length + ' профессий!', 'success');
  }
}

// Приём живых данных от родительской веб-панели через WebSocket
window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SERVER_CONFIG_DATA') {
    applyLiveServerConfig(event.data.data);
  }
});

function gatherSuggestions() {
  const wepSet = new Set();
  const modelSet = new Set();
  const groupSet = new Set();
  const spawnGroupSet = new Set(['Clones', 'Droids', 'Administration', 'Jedi', 'Civil']);
  const rankSet = new Set(["RCT", "PV1", "PV2", "PFC", "SPC", "CPL", "SGT", "SSG", "MSG", "SGM", "JLT", "LT", "SLT", "CPT", "MAJ", "LTC", "CO", "SCO", "COL", "MC"]);
  const specSet = new Set();

  (state.jobs || []).forEach(j => {
    if (j.worldModel) modelSet.add(j.worldModel);
    if (j.groupId) groupSet.add(j.groupId);
    if (j.spawnGroup) spawnGroupSet.add(j.spawnGroup);
    if (j.rank) rankSet.add(j.rank);
    if (j.spec) specSet.add(j.spec);
    if (Array.isArray(j.weapons)) {
      j.weapons.forEach(w => { if (w) wepSet.add(w); });
    }
  });

  state.meta = {
    weapons: Array.from(wepSet).sort(),
    models: Array.from(modelSet).sort(),
    groups: Array.from(groupSet).sort(),
    spawnGroups: Array.from(spawnGroupSet).sort(),
    ranks: Array.from(rankSet).sort(),
    specs: Array.from(specSet).sort()
  };
}

function updateStats() {
  const totalJobsEl = document.getElementById('stat-total-jobs');
  const totalCatsEl = document.getElementById('stat-total-cats');
  const totalWepsEl = document.getElementById('stat-total-weps');
  if (totalJobsEl) totalJobsEl.textContent = state.jobs.length;
  if (totalCatsEl) totalCatsEl.textContent = state.categories.length;
  const modJobsCount = document.getElementById("mod-jobs-count");
  if (modJobsCount) modJobsCount.textContent = state.jobs.length;

  const weps = new Set();
  state.jobs.forEach(j => (j.weapons || []).forEach(w => weps.add(w)));
  if (totalWepsEl) totalWepsEl.textContent = weps.size;
}

function populateFilters() {
  const catSelect = document.getElementById('filter-cat');
  if (catSelect) {
    catSelect.innerHTML = '<option value="">Все категории</option>';
    state.categories.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.name;
      opt.textContent = c.name;
      catSelect.appendChild(opt);
    });
  }

  const groupSelect = document.getElementById('filter-group');
  if (groupSelect) {
    groupSelect.innerHTML = '<option value="">Все группы</option>';
    const groups = Array.from(new Set(state.jobs.map(j => j.groupId).filter(Boolean))).sort();
    groups.forEach(g => {
      const opt = document.createElement('option');
      opt.value = g;
      opt.textContent = g;
      groupSelect.appendChild(opt);
    });
  }

  const spawnSelect = document.getElementById('filter-spawn');
  if (spawnSelect) {
    spawnSelect.innerHTML = '<option value="">Все спавны</option>';
    const spawns = Array.from(new Set(state.jobs.map(j => j.spawnGroup).filter(Boolean))).sort();
    spawns.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      spawnSelect.appendChild(opt);
    });
  }
}

function populateDatalists() {
  function fillDl(id, list) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '';
    (list || []).forEach(item => {
      const opt = document.createElement('option');
      opt.value = item;
      el.appendChild(opt);
    });
  }
  fillDl('datalist-weapons', state.meta.weapons);
  fillDl('datalist-models', state.meta.models);
  fillDl('datalist-groups', state.meta.groups);
  fillDl('datalist-spawns', state.meta.spawnGroups);
  fillDl('datalist-ranks', state.meta.ranks);
  fillDl('datalist-specs', state.meta.specs);
}

function getFilteredJobs() {
  let list = state.jobs.map((job, idx) => ({ ...job, _originalIndex: idx }));

  if (state.searchTerm) {
    const q = state.searchTerm.toLowerCase();
    list = list.filter(j => {
      const name = (j.name || '').toLowerCase();
      const tvar = (j.teamVar || '').toLowerCase();
      const jid = (j.jobID || '').toLowerCase();
      const model = (j.worldModel || '').toLowerCase();
      const weps = (j.weapons || []).join(' ').toLowerCase();
      const cat = (j.cat || '').toLowerCase();
      const group = (j.groupId || '').toLowerCase();
      return name.includes(q) || tvar.includes(q) || jid.includes(q) || model.includes(q) || weps.includes(q) || cat.includes(q) || group.includes(q);
    });
  }

  if (state.filterCat) {
    list = list.filter(j => j.cat === state.filterCat);
  }

  if (state.filterGroup) {
    list = list.filter(j => j.groupId === state.filterGroup);
  }

  if (state.filterSpawn) {
    list = list.filter(j => j.spawnGroup === state.filterSpawn);
  }

  if (state.filterStatus) {
    list = list.filter(j => {
      const jobIssues = state.diagnostics.issues.filter(i => i.jobIndex === j._originalIndex);
      if (state.filterStatus === 'errors') return jobIssues.some(i => i.level === 'error');
      if (state.filterStatus === 'warnings') return jobIssues.some(i => i.level === 'warning');
      if (state.filterStatus === 'clean') return jobIssues.length === 0;
      return true;
    });
  }

  if (state.sortBy === 'name-asc') {
    list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  } else if (state.sortBy === 'name-desc') {
    list.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
  } else if (state.sortBy === 'cat') {
    list.sort((a, b) => (a.cat || '').localeCompare(b.cat || ''));
  } else if (state.sortBy === 'group') {
    list.sort((a, b) => (a.groupId || '').localeCompare(b.groupId || ''));
  }

  return list;
}

function getCategoryColors(catName) {
  const cat = state.categories.find(c => c.name === catName);
  if (cat) {
    const tc = cat.tcolor ? 'rgb(' + cat.tcolor.r + ',' + cat.tcolor.g + ',' + cat.tcolor.b + ')' : '#fff';
    const bc = cat.bcolor ? 'rgb(' + cat.bcolor.r + ',' + cat.bcolor.g + ',' + cat.bcolor.b + ')' : '#334155';
    return { textColor: tc, bgColor: bc };
  }
  return { textColor: '#ffffff', bgColor: '#334155' };
}

function renderJobs() {
  const filtered = getFilteredJobs();
  const countEl = document.getElementById('results-count');
  if (countEl) countEl.textContent = 'Показано: ' + filtered.length + ' из ' + state.jobs.length + ' профессий';

  const emptyState = document.getElementById('empty-state');
  const gridContainer = document.getElementById('jobs-grid');
  const tableContainer = document.getElementById('jobs-table-container');

  if (filtered.length === 0) {
    if (emptyState) emptyState.style.display = 'flex';
    if (gridContainer) gridContainer.style.display = 'none';
    if (tableContainer) tableContainer.style.display = 'none';
    return;
  }
  if (emptyState) emptyState.style.display = 'none';

  if (state.activeView === 'grid') {
    if (gridContainer) gridContainer.style.display = 'grid';
    if (tableContainer) tableContainer.style.display = 'none';
    renderGrid(filtered);
  } else {
    if (gridContainer) gridContainer.style.display = 'none';
    if (tableContainer) tableContainer.style.display = 'block';
    renderTable(filtered);
  }
}

function renderGrid(filtered) {
  const grid = document.getElementById('jobs-grid');
  if (!grid) return;
  grid.innerHTML = '';

  filtered.forEach(job => {
    const catColors = getCategoryColors(job.cat);
    const card = document.createElement('div');
    card.className = 'job-card';

    const wepCount = (job.weapons || []).length;
    const modelShort = (job.worldModel || '—').split('/').pop();

    const jobIssues = state.diagnostics.issues.filter(i => i.jobIndex === job._originalIndex);
    const hasErrors = jobIssues.some(i => i.level === 'error');
    const hasWarnings = jobIssues.some(i => i.level === 'warning');

    let issueBadgeHtml = '';
    if (hasErrors) {
      const errCount = jobIssues.filter(i => i.level === 'error').length;
      issueBadgeHtml = '<span class="job-issue-badge error" onclick="openDiagnosticsModal(\'error\')" title="Ошибки">⚠️ ' + errCount + ' ' + (errCount === 1 ? 'ошибка' : 'ошибки') + '</span>';
    } else if (hasWarnings) {
      const warnCount = jobIssues.filter(i => i.level === 'warning').length;
      issueBadgeHtml = '<span class="job-issue-badge warning" onclick="openDiagnosticsModal(\'warning\')" title="Предупреждения">⚡ ' + warnCount + ' ' + (warnCount === 1 ? 'замечание' : 'замечания') + '</span>';
    }

    card.innerHTML = `
      <div class="job-card-header">
        <span class="cat-badge" style="background-color: ${catColors.bgColor}; color: ${catColors.textColor};" title="Категория: ${escapeHtml(job.cat || 'Без категории')}">
          ${escapeHtml(job.cat || 'Без категории')}
        </span>
        <span class="team-badge" title="TEAM_ переменная">${escapeHtml(job.teamVar || '')}</span>
      </div>

      <div class="job-name">${escapeHtml(job.name || 'Безымянная')}</div>

      ${issueBadgeHtml}

      <div class="job-meta-row">
        ${job.groupId ? `<span class="meta-tag group-tag">${escapeHtml(job.groupId)}</span>` : ''}
        ${job.spawnGroup ? `<span class="meta-tag">${escapeHtml(job.spawnGroup)}</span>` : ''}
        ${job.rank ? `<span class="meta-tag rank-tag">${escapeHtml(job.rank)}</span>` : ''}
        ${job.spec ? `<span class="meta-tag spec-tag">${escapeHtml(job.spec)}</span>` : ''}
        <span class="meta-tag font-mono">id: ${escapeHtml(job.jobID)}</span>
      </div>

      <div class="job-model-box" title="${escapeHtml(job.worldModel || '')}">
        <span>📦</span> ${escapeHtml(modelShort)} ${job.skin !== undefined && job.skin > 0 ? '(скин ' + job.skin + ')' : ''}
      </div>

      <div class="job-stats-row">
        <span class="stat-item armor">🛡️ ${job.armor || 0} / ${job.maxArmor || 100}</span>
        <span class="stat-item health">❤️ ${job.health || 100}</span>
        <span class="stat-item weps">🔫 ${wepCount} шт.</span>
      </div>

      <div class="job-card-actions">
        <button class="btn-card" onclick="duplicateJob(${job._originalIndex})" title="Копировать"><i class="fas fa-copy"></i> Копия</button>
        <button class="btn-card btn-card-edit" onclick="editJob(${job._originalIndex})" title="Редактировать"><i class="fas fa-pencil-alt"></i> Редактировать</button>
        <button class="btn-card danger" onclick="deleteJob(${job._originalIndex})" title="Удалить"><i class="fas fa-trash-alt"></i></button>
      </div>
    `;

    grid.appendChild(card);
  });
}

function renderTable(filtered) {
  const tbody = document.getElementById('jobs-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  filtered.forEach(job => {
    const catColors = getCategoryColors(job.cat);
    const tr = document.createElement('tr');
    const wepCount = (job.weapons || []).length;
    const modelShort = (job.worldModel || '—').split('/').pop();

    const jobIssues = state.diagnostics.issues.filter(i => i.jobIndex === job._originalIndex);
    const hasErrors = jobIssues.some(i => i.level === 'error');
    const hasWarnings = jobIssues.some(i => i.level === 'warning');

    let statusIndicator = '';
    if (hasErrors) {
      statusIndicator = '<span class="job-issue-badge error" onclick="openDiagnosticsModal(\'error\')">⚠️</span>';
    } else if (hasWarnings) {
      statusIndicator = '<span class="job-issue-badge warning" onclick="openDiagnosticsModal(\'warning\')">⚡</span>';
    }

    tr.innerHTML = `
      <td>
        <div style="display:flex; align-items:center; gap:6px;">
          ${statusIndicator}
          <span class="team-badge font-mono">${escapeHtml(job.teamVar || '')}</span>
        </div>
      </td>
      <td><strong>${escapeHtml(job.name || '')}</strong></td>
      <td>
        <span class="cat-badge" style="background-color: ${catColors.bgColor}; color: ${catColors.textColor};">
          ${escapeHtml(job.cat || '')}
        </span>
      </td>
      <td><span class="meta-tag group-tag">${escapeHtml(job.groupId || '—')}</span></td>
      <td><span class="meta-tag">${escapeHtml(job.spawnGroup || '—')}</span></td>
      <td>
        ${job.rank ? `<span class="meta-tag rank-tag">${escapeHtml(job.rank)}</span>` : ''}
        ${job.spec ? `<span class="meta-tag spec-tag">${escapeHtml(job.spec)}</span>` : ''}
      </td>
      <td class="font-mono" title="${escapeHtml(job.worldModel || '')}">${escapeHtml(modelShort)}</td>
      <td><span class="meta-tag">🔫 ${wepCount}</span></td>
      <td>
        <span style="color:#38bdf8;">🛡️${job.armor || 0}</span> / 
        <span style="color:#f43f5e;">❤️${job.health || 100}</span>
      </td>
      <td class="th-actions">
        <div class="table-actions">
          <button class="btn-card" onclick="duplicateJob(${job._originalIndex})" title="Копировать"><i class="fas fa-copy"></i></button>
          <button class="btn-card btn-card-edit" onclick="editJob(${job._originalIndex})" title="Редактировать"><i class="fas fa-pencil-alt"></i></button>
          <button class="btn-card danger" onclick="deleteJob(${job._originalIndex})" title="Удалить"><i class="fas fa-trash-alt"></i></button>
        </div>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Modal open/close
function openJobModal(jobIndex = -1, targetTab = 'tab-main', highlightField = null) {
  state.editingIndex = jobIndex;
  const isNew = jobIndex === -1;
  const job = isNew ? createDefaultJob() : JSON.parse(JSON.stringify(state.jobs[jobIndex]));

  document.getElementById('modal-type-badge').textContent = isNew ? 'СОЗДАНИЕ' : 'РЕДАКТИРОВАНИЕ';
  document.getElementById('modal-job-title').textContent = isNew ? 'Новая профессия' : job.name;

  document.querySelectorAll('.field-error-highlight').forEach(el => el.classList.remove('field-error-highlight'));

  const catSelect = document.getElementById('input-job-cat');
  catSelect.innerHTML = '';
  state.categories.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.name;
    opt.textContent = c.name;
    catSelect.appendChild(opt);
  });

  document.getElementById('input-job-name').value = job.name || '';
  document.getElementById('input-team-var').value = job.teamVar || '';
  document.getElementById('input-job-id').value = job.jobID || '';
  catSelect.value = job.cat || (state.categories[0] ? state.categories[0].name : '');
  document.getElementById('input-job-group').value = job.groupId || '';
  document.getElementById('input-job-spawn-group').value = job.spawnGroup || 'Clones';

  const col = job.color || { r: 0, g: 100, b: 0 };
  const hex = rgbToHex(col.r, col.g, col.b);
  document.getElementById('input-job-color-picker').value = hex;
  document.getElementById('input-job-color-label').textContent = 'Color(' + col.r + ', ' + col.g + ', ' + col.b + ')';

  document.getElementById('input-job-model').value = job.worldModel || '';
  document.getElementById('input-job-skin').value = job.skin !== undefined ? job.skin : 0;
  state.currentBodygroups = { ...(job.bodygroups || {}) };
  renderBodygroupsList();

  const lockedInput = document.getElementById('input-job-locked-bg');
  if (lockedInput) lockedInput.value = (job.locked_bodygroups || []).join(', ');
  const allowedInput = document.getElementById('input-job-allowed-bg');
  if (allowedInput) allowedInput.value = (job.allowed_bodygroups || []).join(', ');
  const bannedInput = document.getElementById('input-job-banned-bg');
  if (bannedInput) bannedInput.value = (job.banned_bodygroups || []).join(', ');
  const hiddenInput = document.getElementById('input-job-hidden-bg');
  if (hiddenInput) hiddenInput.value = (job.hidden_bodygroups || []).join(', ');

  state.currentWeapons = [...(job.weapons || [])];
  renderWeaponsTags();

  document.getElementById('input-job-armor').value = job.armor !== undefined ? job.armor : 100;
  document.getElementById('input-job-maxarmor').value = job.maxArmor !== undefined ? job.maxArmor : 100;
  document.getElementById('input-job-health').value = job.health !== undefined ? job.health : 100;
  document.getElementById('input-job-maxhealth').value = job.maxHealth !== undefined ? job.maxHealth : 100;

  const isCustom = !job.isStandardPlayerSpawn && !!job.playerSpawn;
  const toggleSpawn = document.getElementById('toggle-custom-spawn');
  toggleSpawn.checked = isCustom;
  document.getElementById('custom-spawn-container').style.display = isCustom ? 'block' : 'none';
  document.getElementById('input-custom-spawn').value = job.playerSpawn || '';

  document.getElementById('input-job-rank').value = job.rank || '';
  document.getElementById('input-job-spec').value = job.spec || '';

  const cbBackpack = document.getElementById('input-job-has-backpack');
  if (cbBackpack) cbBackpack.checked = !!job.has_backpack;
  const inBackpackSlots = document.getElementById('input-job-backpack-slots');
  if (inBackpackSlots) inBackpackSlots.value = job.backpack_slots || 8;

  const cbJetpack = document.getElementById('input-job-has-jetpack');
  if (cbJetpack) cbJetpack.checked = !!job.has_jetpack;

  const cbNvg = document.getElementById('input-job-has-nvg');
  if (cbNvg) cbNvg.checked = !!job.has_nvg;

  const cbThermal = document.getElementById('input-job-has-thermal');
  if (cbThermal) cbThermal.checked = !!job.has_thermal;

  const cbKatarn = document.getElementById('input-job-has-katarn');
  if (cbKatarn) cbKatarn.checked = !!(job.has_katarn || job.has_extra_armor);

  switchJobModalTab(targetTab);

  if (highlightField) {
    const fieldMap = {
      jobID: 'input-job-id',
      teamVar: 'input-team-var',
      cat: 'input-job-cat',
      worldModel: 'input-job-model',
      armor: 'input-job-armor',
      health: 'input-job-health'
    };
    const targetInput = document.getElementById(fieldMap[highlightField]);
    if (targetInput) {
      targetInput.classList.add('field-error-highlight');
      targetInput.focus();
    }
  }

  document.getElementById('job-modal').style.display = 'flex';
}

function createDefaultJob() {
  return {
    teamVar: 'TEAM_NEW_JOB',
    name: 'Новый боец',
    color: { r: 0, g: 100, b: 0, a: 255 },
    worldModel: state.meta.models[0] || 'models/trooper/trooper_ct.mdl',
    skin: 0,
    has_backpack: false,
    backpack_slots: 8,
    has_jetpack: false,
    has_nvg: false,
    has_thermal: false,
    has_katarn: false,
    weapons: ['nn_hands'],
    jobID: 'new_job_' + Date.now().toString().slice(-4),
    groupId: 'CT',
    cat: state.categories[0] ? state.categories[0].name : 'Корпус CT',
    spawnGroup: 'Clones',
    rank: '',
    spec: '',
    bodygroups: {},
    health: 100,
    maxHealth: 100,
    armor: 100,
    maxArmor: 100,
    isStandardPlayerSpawn: true,
    playerSpawn: ''
  };
}

function closeJobModal() {
  document.getElementById('job-modal').style.display = 'none';
}

function switchJobModalTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === tabId);
  });
}

function renderBodygroupsList() {
  const container = document.getElementById('bg-list');
  if (!container) return;
  container.innerHTML = '';
  const allKeys = Object.keys(state.currentBodygroups);

  if (allKeys.length === 0) {
    container.innerHTML = '<p class="field-hint">Бодигруппы не заданы (модель спавнится по умолчанию)</p>';
    return;
  }

  const numKeys = allKeys.filter(k => /^\d+$/.test(k)).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  const strKeys = allKeys.filter(k => !/^\d+$/.test(k)).sort();
  const sortedKeys = [...numKeys, ...strKeys];

  sortedKeys.forEach(k => {
    const row = document.createElement('div');
    row.className = 'bg-row';
    const isNum = /^\d+$/.test(k);
    const labelText = isNum ? `Группа [${k}]:` : `Группа ['${escapeHtml(k)}']:`;
    const escapedKey = escapeHtml(k);
    row.innerHTML = `
      <label>${labelText}</label>
      <input type="number" min="0" max="100" value="${state.currentBodygroups[k]}" onchange="updateBodygroup('${escapedKey}', this.value)">
      <button type="button" class="btn-card danger" onclick="removeBodygroup('${escapedKey}')">✕</button>
    `;
    container.appendChild(row);
  });
}

function updateBodygroup(id, val) {
  state.currentBodygroups[id] = parseInt(val, 10) || 0;
}

function removeBodygroup(id) {
  delete state.currentBodygroups[id];
  renderBodygroupsList();
}

function addBodygroup() {
  const customName = prompt('Введите номер или имя бодигруппы (например: 0, 1 или Helmet):');
  if (customName === null) return;
  const trimmed = customName.trim();
  let key;
  if (/^\d+$/.test(trimmed)) {
    key = parseInt(trimmed, 10);
  } else if (trimmed.length > 0) {
    key = trimmed;
  } else {
    const keys = Object.keys(state.currentBodygroups).filter(k => /^\d+$/.test(k)).map(k => parseInt(k, 10));
    let nextId = 0;
    while (keys.includes(nextId)) {
      nextId++;
    }
    key = nextId;
  }
  state.currentBodygroups[key] = 0;
  renderBodygroupsList();
}

function renderWeaponsTags() {
  const container = document.getElementById('wep-tags-container');
  if (!container) return;
  container.innerHTML = '';
  const cnt1 = document.getElementById('tab-wep-count');
  const cnt2 = document.getElementById('wep-active-count');
  if (cnt1) cnt1.textContent = state.currentWeapons.length;
  if (cnt2) cnt2.textContent = state.currentWeapons.length;

  if (state.currentWeapons.length === 0) {
    container.innerHTML = '<p class="field-hint">Оружие не выбрано</p>';
    return;
  }

  state.currentWeapons.forEach((w, idx) => {
    const tag = document.createElement('span');
    tag.className = 'wep-tag';
    tag.innerHTML = `
      <span>${escapeHtml(w)}</span>
      <span class="wep-tag-del" onclick="removeWeapon(${idx})" title="Удалить">&times;</span>
    `;
    container.appendChild(tag);
  });
}

function addWeapon(wepName) {
  const clean = (wepName || '').trim();
  if (!clean) return;
  if (!state.currentWeapons.includes(clean)) {
    state.currentWeapons.push(clean);
    renderWeaponsTags();
  }
  const inp = document.getElementById('wep-add-input');
  if (inp) inp.value = '';
}

function removeWeapon(idx) {
  state.currentWeapons.splice(idx, 1);
  renderWeaponsTags();
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = (x || 0).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 100, b: 0 };
}

function saveJobModal() {
  const name = document.getElementById('input-job-name').value.trim();
  const teamVar = document.getElementById('input-team-var').value.trim();
  const jobID = document.getElementById('input-job-id').value.trim();
  const cat = document.getElementById('input-job-cat').value;
  const groupId = document.getElementById('input-job-group').value.trim();
  const spawnGroup = document.getElementById('input-job-spawn-group').value.trim() || 'Clones';
  const worldModel = document.getElementById('input-job-model').value.trim();
  const skin = parseInt(document.getElementById('input-job-skin').value, 10) || 0;
  const rank = document.getElementById('input-job-rank').value.trim();
  const spec = document.getElementById('input-job-spec').value.trim();

  if (!name) {
    showToast('Введите название профессии!', 'warning');
    switchJobModalTab('tab-main');
    return;
  }
  if (!teamVar) {
    showToast('Введите TEAM_ переменную!', 'warning');
    switchJobModalTab('tab-main');
    return;
  }
  if (!jobID) {
    showToast('Введите уникальный jobID!', 'warning');
    switchJobModalTab('tab-main');
    return;
  }
  if (!worldModel) {
    showToast('Укажите путь к модели WorldModel!', 'warning');
    switchJobModalTab('tab-model');
    return;
  }

  const hexCol = document.getElementById('input-job-color-picker').value;
  const rgbCol = hexToRgb(hexCol);

  const armor = parseInt(document.getElementById('input-job-armor').value, 10) || 0;
  const maxArmor = parseInt(document.getElementById('input-job-maxarmor').value, 10) || 0;
  const health = parseInt(document.getElementById('input-job-health').value, 10) || 100;
  const maxHealth = parseInt(document.getElementById('input-job-maxhealth').value, 10) || 100;

  const isCustomSpawn = document.getElementById('toggle-custom-spawn').checked;
  const customSpawnCode = document.getElementById('input-custom-spawn').value;

  const lockedBgInput = document.getElementById('input-job-locked-bg');
  const allowedBgInput = document.getElementById('input-job-allowed-bg');
  const bannedBgInput = document.getElementById('input-job-banned-bg');
  const hiddenBgInput = document.getElementById('input-job-hidden-bg');

  const parseCsvList = input => input ? input.value.split(',').map(s => s.trim()).filter(Boolean) : [];
  const locked_bodygroups = parseCsvList(lockedBgInput);
  const allowed_bodygroups = parseCsvList(allowedBgInput);
  const banned_bodygroups = parseCsvList(bannedBgInput);
  const hidden_bodygroups = parseCsvList(hiddenBgInput);

  const cbBackpack = document.getElementById('input-job-has-backpack');
  const has_backpack = cbBackpack ? cbBackpack.checked : false;
  const inBackpackSlots = document.getElementById('input-job-backpack-slots');
  const backpack_slots = has_backpack ? (parseInt(inBackpackSlots ? inBackpackSlots.value : 8, 10) || 8) : undefined;
  const cbJetpack = document.getElementById('input-job-has-jetpack');
  const has_jetpack = cbJetpack ? cbJetpack.checked : false;
  const cbNvg = document.getElementById('input-job-has-nvg');
  const has_nvg = cbNvg ? cbNvg.checked : false;
  const cbThermal = document.getElementById('input-job-has-thermal');
  const has_thermal = cbThermal ? cbThermal.checked : false;
  const cbKatarn = document.getElementById('input-job-has-katarn');
  const has_katarn = cbKatarn ? cbKatarn.checked : false;

  const jobData = {
    teamVar,
    name,
    color: rgbCol,
    worldModel,
    skin,
    has_backpack,
    backpack_slots,
    has_jetpack,
    has_nvg,
    has_thermal,
    has_katarn,
    weapons: [...state.currentWeapons],
    jobID,
    groupId,
    cat,
    spawnGroup,
    rank,
    spec,
    bodygroups: { ...state.currentBodygroups },
    locked_bodygroups,
    allowed_bodygroups,
    banned_bodygroups,
    hidden_bodygroups,
    armor,
    maxArmor,
    health,
    maxHealth,
    isStandardPlayerSpawn: !isCustomSpawn,
    playerSpawn: isCustomSpawn ? customSpawnCode : ''
  };

  if (state.editingIndex === -1) {
    state.jobs.push(jobData);
    showToast('Профессия "' + name + '" создана!', 'success');
  } else {
    state.jobs[state.editingIndex] = jobData;
    showToast('Профессия "' + name + '" обновлена!', 'success');
  }

  markUnsaved();
  updateStats();
  populateFilters();
  renderJobs();
  closeJobModal();
}

window.editJob = function(index, tab = 'tab-main', field = null) {
  openJobModal(index, tab, field);
};

window.duplicateJob = function(index) {
  const original = state.jobs[index];
  if (!original) return;

  const copy = JSON.parse(JSON.stringify(original));
  copy.name = original.name + ' (Копия)';
  copy.jobID = original.jobID + '_copy_' + Date.now().toString().slice(-4);
  copy.teamVar = original.teamVar + '_COPY';

  state.jobs.splice(index + 1, 0, copy);
  markUnsaved();
  updateStats();
  renderJobs();
  showToast('Создана копия "' + copy.name + '". Открываем редактор...', 'info');
  openJobModal(index + 1);
};

window.deleteJob = function(index) {
  const job = state.jobs[index];
  if (!job) return;

  if (confirm('Вы уверены, что хотите удалить профессию "' + job.name + '" (' + job.teamVar + ')?')) {
    state.jobs.splice(index, 1);
    markUnsaved();
    updateStats();
    populateFilters();
    renderJobs();
    showToast('Профессия "' + job.name + '" удалена', 'warning');
  }
};

// Diagnostics modal
function openDiagnosticsModal(initialTab = 'all') {
  state.diagActiveTab = initialTab;
  runDiagnostics();
  renderDiagnosticsModalTabs();
  renderDiagnosticsList();
  document.getElementById('diagnostics-modal').style.display = 'flex';
}

function closeDiagnosticsModal() {
  document.getElementById('diagnostics-modal').style.display = 'none';
}

function renderDiagnosticsModalTabs() {
  document.querySelectorAll('.diag-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-diag-filter') === state.diagActiveTab);
  });
}

function renderDiagnosticsList() {
  const container = document.getElementById('diagnostics-list-container');
  if (!container) return;
  container.innerHTML = '';

  let issues = state.diagnostics.issues;
  if (state.diagActiveTab !== 'all') {
    issues = issues.filter(i => i.level === state.diagActiveTab);
  }

  if (issues.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <h3 style="color:#10b981;">Проблем не обнаружено!</h3>
        <p>Конфигурация проверена: синтаксис, категории, дубликаты и снаряжение в полном порядке.</p>
      </div>
    `;
    return;
  }

  const list = document.createElement('div');
  list.className = 'diag-issues-list';

  issues.forEach((iss, index) => {
    const card = document.createElement('div');
    card.className = 'diag-card ' + iss.level;

    const severityIcon = iss.level === 'error' ? '🔴' : iss.level === 'warning' ? '🟡' : '🔵';
    const severityText = iss.level === 'error' ? 'Ошибка' : iss.level === 'warning' ? 'Предупреждение' : 'Инфо';

    let actionButtons = '';
    if (iss.jobIndex >= 0) {
      actionButtons += `
        <button class="btn btn-sm btn-secondary" onclick="fixInEditor(${iss.jobIndex}, '${iss.tab || 'tab-main'}', '${iss.field || ''}')">
          ✏️ Исправить в редакторе
        </button>
      `;
    }

    if (iss.canAutoFix) {
      actionButtons += `
        <button class="btn btn-sm btn-primary" onclick="autoFixSingleIssue(${index})">
          ⚡ Исправить автоматически
        </button>
      `;
    }

    card.innerHTML = `
      <div class="diag-card-top">
        <span class="diag-card-severity">
          ${severityIcon} ${severityText} ${iss.field ? '// [' + iss.field + ']' : ''}
        </span>
        <span class="diag-card-target">${escapeHtml(iss.jobName)}</span>
      </div>
      <div class="diag-card-title">${escapeHtml(iss.title)}</div>
      <div class="diag-card-desc">${escapeHtml(iss.desc)}</div>
      ${actionButtons ? '<div class="diag-card-actions">' + actionButtons + '</div>' : ''}
    `;

    list.appendChild(card);
  });

  container.appendChild(list);
}

window.fixInEditor = function(jobIndex, tab, field) {
  closeDiagnosticsModal();
  openJobModal(jobIndex, tab, field);
};

window.autoFixSingleIssue = function(issueIndex) {
  let issues = state.diagnostics.issues;
  if (state.diagActiveTab !== 'all') {
    issues = issues.filter(i => i.level === state.diagActiveTab);
  }
  const iss = issues[issueIndex];
  if (!iss) return;

  applyAutoFix(iss);
  markUnsaved();
  renderDiagnosticsList();
  renderJobs();
  showToast('Проблема "' + iss.title + '" успешно исправлена!', 'success');
};

function applyAutoFix(iss) {
  const job = iss.jobIndex >= 0 ? state.jobs[iss.jobIndex] : null;

  switch (iss.fixType) {
    case 'rename_job_id':
      if (job) job.jobID = job.jobID + '_' + Date.now().toString().slice(-3);
      break;
    case 'trim_job_id':
      if (job) job.jobID = job.jobID.replace(/\s+/g, '_');
      break;
    case 'rename_team_var':
      if (job) job.teamVar = job.teamVar + '_ALT';
      break;
    case 'prefix_team_var':
      if (job) job.teamVar = 'TEAM_' + job.teamVar;
      break;
    case 'clean_team_var':
      if (job) job.teamVar = transliterate(job.teamVar);
      break;
    case 'create_missing_cat':
      if (iss.missingCat) {
        state.categories.push({
          name: iss.missingCat,
          tcolor: { r: 255, g: 255, b: 255 },
          bcolor: { r: 40, g: 60, b: 90 }
        });
        populateFilters();
      }
      break;
    case 'remove_empty_weapons':
      if (job && Array.isArray(job.weapons)) {
        job.weapons = job.weapons.filter(w => w && w.trim());
      }
      break;
    case 'dedupe_weapons':
      if (job && Array.isArray(job.weapons)) {
        job.weapons = Array.from(new Set(job.weapons));
      }
      break;
    case 'fix_model_slashes':
      if (job && job.worldModel) {
        job.worldModel = job.worldModel.replace(/\\/g, '/').replace(/^\/+/, '');
      }
      break;
    case 'fix_armor_cap':
      if (job) job.maxArmor = job.armor;
      break;
    case 'fix_health_cap':
      if (job) job.maxHealth = job.health;
      break;
  }
}

function autoFixAll() {
  const fixable = state.diagnostics.issues.filter(i => i.canAutoFix);
  if (fixable.length === 0) {
    showToast('Нет проблем, доступных для автоматического исправления', 'info');
    return;
  }

  fixable.forEach(iss => applyAutoFix(iss));
  markUnsaved();
  renderDiagnosticsList();
  renderJobs();
  showToast('Автоматически исправлено ' + fixable.length + ' проблем!', 'success');
}

// ==========================================================================
// CATEGORIES & FORMATIONS CONTROLLER (nn.cats & nn.formations)
// ==========================================================================

function openCatsModal() {
  state.catsSearchTerm = '';
  const searchInput = document.getElementById('cats-search-input');
  if (searchInput) searchInput.value = '';

  // Auto-fill next order in creation form
  const nextOrder = state.categories.reduce((max, c) => Math.max(max, c.order || 0), 0) + 1;
  const orderInput = document.getElementById('new-cat-order');
  if (orderInput && (!orderInput.value || orderInput.value === '1')) {
    orderInput.value = nextOrder;
  }

  updateCatCreationPreview();
  renderCatsTable();
  renderFormationsTable();
  updateCatsBadges();
  switchCatsTab(state.catsActiveTab || 'main-cats');
  document.getElementById('cats-modal').style.display = 'flex';
}

function closeCatsModal() {
  document.getElementById('cats-modal').style.display = 'none';
}

function switchCatsTab(tabName) {
  state.catsActiveTab = tabName;
  const btnCats = document.getElementById('tab-btn-cats');
  const btnFormations = document.getElementById('tab-btn-formations');
  const paneCats = document.getElementById('cats-tab-main');
  const paneFormations = document.getElementById('cats-tab-formations');

  if (tabName === 'main-cats') {
    if (btnCats) btnCats.classList.add('active');
    if (btnFormations) btnFormations.classList.remove('active');
    if (paneCats) paneCats.style.display = 'block';
    if (paneFormations) paneFormations.style.display = 'none';
  } else {
    if (btnCats) btnCats.classList.remove('active');
    if (btnFormations) btnFormations.classList.add('active');
    if (paneCats) paneCats.style.display = 'none';
    if (paneFormations) paneFormations.style.display = 'block';
  }
}

function updateCatsBadges() {
  const badgeCats = document.getElementById('badge-cats-count');
  const badgeFormations = document.getElementById('badge-formations-count');
  if (badgeCats) badgeCats.textContent = state.categories.length;
  if (badgeFormations) badgeFormations.textContent = (state.formations || []).length;
}

function updateCatCreationPreview() {
  const nameInput = document.getElementById('new-cat-name');
  const bcolorInput = document.getElementById('new-cat-bcolor');
  const tcolorInput = document.getElementById('new-cat-tcolor');
  const bcolorHex = document.getElementById('new-cat-bcolor-hex');
  const tcolorHex = document.getElementById('new-cat-tcolor-hex');
  const preview = document.getElementById('new-cat-preview');

  if (bcolorHex && bcolorInput) bcolorHex.textContent = bcolorInput.value;
  if (tcolorHex && tcolorInput) tcolorHex.textContent = tcolorInput.value;
  if (preview && bcolorInput && tcolorInput) {
    preview.style.backgroundColor = bcolorInput.value;
    preview.style.color = tcolorInput.value;
    preview.textContent = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'Превью плашки';
  }
}

function renderCatsTable() {
  const tbody = document.getElementById('cats-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  const q = (state.catsSearchTerm || '').toLowerCase().trim();
  let displayed = state.categories.map((c, idx) => ({ ...c, _origIdx: idx }));
  if (q) {
    displayed = displayed.filter(c => 
      c.name.toLowerCase().includes(q) || 
      (c.description || '').toLowerCase().includes(q) ||
      (c.formation_id || '').toLowerCase().includes(q) ||
      (c.icon || '').toLowerCase().includes(q)
    );
  }

  const countLabel = document.getElementById('cats-count-label');
  if (countLabel) {
    countLabel.textContent = q ? `Найдено: ${displayed.length} из ${state.categories.length}` : `Всего: ${state.categories.length}`;
  }
  updateCatsBadges();

  if (displayed.length === 0) {
    tbody.innerHTML = '<tr><td colspan="9" style="text-align:center; padding: 24px; color: var(--text-muted);">' +
      (q ? 'По запросу "' + escapeHtml(q) + '" ничего не найдено.' : 'Список категорий пуст. Добавьте новую категорию выше.') +
      '</td></tr>';
    return;
  }

  displayed.forEach(item => {
    const idx = item._origIdx;
    const cat = state.categories[idx];
    const tr = document.createElement('tr');
    const jobsInCat = state.jobs.filter(j => j.cat === cat.name).length;

    const tc = cat.tcolor || { r: 255, g: 255, b: 255 };
    const bc = cat.bcolor || { r: 50, g: 50, b: 50 };
    const thex = rgbToHex(tc.r, tc.g, tc.b);
    const bhex = rgbToHex(bc.r, bc.g, bc.b);

    tr.innerHTML = `
      <td>
        <div class="cat-order-cell">
          <input type="number" class="cat-input-order" value="${cat.order !== undefined && cat.order !== null ? cat.order : ''}" min="1" placeholder="-" onchange="updateCatOrder(${idx}, this.value)" title="Порядковый номер order (в ТАБе и вайтлисте)">
          <div style="display:flex; flex-direction:column; gap:1px;">
            <button class="btn-order-move" onclick="moveCatUp(${idx})" title="Переместить выше" ${idx === 0 ? 'disabled' : ''}>▲</button>
            <button class="btn-order-move" onclick="moveCatDown(${idx})" title="Переместить ниже" ${idx === state.categories.length - 1 ? 'disabled' : ''}>▼</button>
          </div>
        </div>
      </td>
      <td>
        <input type="text" class="cat-input-name" value="${escapeHtml(cat.name)}" onchange="updateCatName(${idx}, this.value)" title="Название категории">
      </td>
      <td>
        <span class="cat-badge" id="preview-cat-${idx}" style="background-color: ${bhex}; color: ${thex}; font-weight:700;">
          ${escapeHtml(cat.name)}
        </span>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; gap:4px;">
          <div class="color-picker-row" style="font-size:11px;">
            <span style="width:14px; color:var(--text-muted);">Т:</span>
            <input type="color" value="${thex}" onchange="updateCatTColor(${idx}, this.value)">
            <span class="font-mono">${thex}</span>
          </div>
          <div class="color-picker-row" style="font-size:11px;">
            <span style="width:14px; color:var(--text-muted);">Ф:</span>
            <input type="color" value="${bhex}" onchange="updateCatBColor(${idx}, this.value)">
            <span class="font-mono">${bhex}</span>
          </div>
        </div>
      </td>
      <td>
        <input type="text" class="cat-input-desc" placeholder="Описание в ТАБе..." value="${escapeHtml(cat.description || '')}" onchange="updateCatDesc(${idx}, this.value)" title="Подзаголовок категории в ТАБе">
      </td>
      <td>
        <input type="text" class="cat-input-icon" placeholder="noname/tab/..." value="${escapeHtml(cat.icon || '')}" onchange="updateCatIcon(${idx}, this.value)" title="Путь к иконке ТАБа">
      </td>
      <td>
        <div class="cat-form-cell">
          <input type="text" class="cat-input-formid" placeholder="id формирования..." value="${escapeHtml(cat.formation_id || '')}" onchange="updateCatFormId(${idx}, this.value)" title="Formation ID для вайтлиста (e.g. gar, cg, recruits)">
          <input type="text" class="cat-input-idn" placeholder="префикс (CC-, false)..." value="${cat.idn_prefix === undefined ? '' : String(cat.idn_prefix)}" onchange="updateCatIdn(${idx}, this.value)" title="Префикс личного номера (e.g. CC-, SG-, false)">
        </div>
      </td>
      <td><span class="meta-tag">${jobsInCat} проф</span></td>
      <td>
        <div class="cat-actions-cell" style="justify-content:center;">
          <button class="btn-card danger" onclick="deleteCat(${idx})" title="Удалить категорию">🗑️</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.updateCatOrder = function(idx, val) {
  const n = parseInt(val, 10);
  state.categories[idx].order = isNaN(n) ? undefined : n;
  markUnsaved();
};

window.updateCatName = function(idx, newName) {
  newName = newName.trim();
  const oldName = state.categories[idx].name;
  if (!newName) {
    showToast('Название категории не может быть пустым!', 'warning');
    renderCatsTable();
    return;
  }
  if (newName === oldName) return;

  if (state.categories.some((c, i) => i !== idx && c.name.toLowerCase() === newName.toLowerCase())) {
    showToast('Категория с таким именем уже существует!', 'error');
    renderCatsTable();
    return;
  }

  // Update jobs that belong to this category
  let updatedJobsCount = 0;
  state.jobs.forEach(j => {
    if (j.cat === oldName) {
      j.cat = newName;
      updatedJobsCount++;
    }
  });

  state.categories[idx].name = newName;
  markUnsaved();
  populateFilters();
  renderCatsTable();
  renderJobs();
  if (updatedJobsCount > 0) {
    showToast(`Категория переименована (обновлено ${updatedJobsCount} проф)`, 'success');
  } else {
    showToast(`Категория переименована`, 'info');
  }
};

window.updateCatTColor = function(idx, hex) {
  state.categories[idx].tcolor = hexToRgb(hex);
  markUnsaved();
  renderCatsTable();
  renderJobs();
};

window.updateCatBColor = function(idx, hex) {
  state.categories[idx].bcolor = hexToRgb(hex);
  markUnsaved();
  renderCatsTable();
  renderJobs();
};

window.updateCatDesc = function(idx, val) {
  state.categories[idx].description = val.trim();
  markUnsaved();
};

window.updateCatIcon = function(idx, val) {
  state.categories[idx].icon = val.trim();
  markUnsaved();
};

window.updateCatFormId = function(idx, val) {
  state.categories[idx].formation_id = val.trim();
  markUnsaved();
};

window.updateCatIdn = function(idx, val) {
  val = val.trim();
  if (val === '') {
    delete state.categories[idx].idn_prefix;
  } else if (val.toLowerCase() === 'false') {
    state.categories[idx].idn_prefix = false;
  } else if (val.toLowerCase() === 'true') {
    state.categories[idx].idn_prefix = true;
  } else {
    state.categories[idx].idn_prefix = val;
  }
  markUnsaved();
};

window.moveCatUp = function(idx) {
  if (idx <= 0) return;
  const temp = state.categories[idx];
  state.categories[idx] = state.categories[idx - 1];
  state.categories[idx - 1] = temp;
  markUnsaved();
  renderCatsTable();
};

window.moveCatDown = function(idx) {
  if (idx >= state.categories.length - 1) return;
  const temp = state.categories[idx];
  state.categories[idx] = state.categories[idx + 1];
  state.categories[idx + 1] = temp;
  markUnsaved();
  renderCatsTable();
};

window.sortCatsByOrder = function() {
  state.categories.sort((a, b) => {
    const oA = a.order !== undefined && a.order !== null ? a.order : 9999;
    const oB = b.order !== undefined && b.order !== null ? b.order : 9999;
    if (oA === oB) return a.name.localeCompare(b.name);
    return oA - oB;
  });
  markUnsaved();
  renderCatsTable();
  showToast('Категории отсортированы по порядку (# order)', 'info');
};

window.renumberCats = function() {
  state.categories.forEach((cat, idx) => {
    cat.order = idx + 1;
  });
  markUnsaved();
  renderCatsTable();
  showToast('Категории перенумерованы по порядку: 1 .. ' + state.categories.length, 'success');
};

window.deleteCat = function(idx) {
  const cat = state.categories[idx];
  const count = state.jobs.filter(j => j.cat === cat.name).length;
  if (count > 0) {
    if (!confirm('В категории "' + cat.name + '" находится ' + count + ' профессий! Вы уверены, что хотите удалить категорию?')) {
      return;
    }
  }
  state.categories.splice(idx, 1);
  markUnsaved();
  updateStats();
  populateFilters();
  renderCatsTable();
  renderJobs();
  showToast('Категория "' + cat.name + '" удалена', 'warning');
};

function createCategory() {
  const nameInput = document.getElementById('new-cat-name');
  const name = nameInput.value.trim();
  if (!name) {
    showToast('Введите название категории!', 'warning');
    nameInput.focus();
    return;
  }
  if (state.categories.some(c => c.name.toLowerCase() === name.toLowerCase())) {
    showToast('Категория "' + name + '" уже существует!', 'error');
    return;
  }

  const orderInput = document.getElementById('new-cat-order');
  const parsedOrder = parseInt(orderInput.value, 10);
  const order = isNaN(parsedOrder) ? (state.categories.reduce((m, c) => Math.max(m, c.order || 0), 0) + 1) : parsedOrder;

  const thex = document.getElementById('new-cat-tcolor').value;
  const bhex = document.getElementById('new-cat-bcolor').value;
  const desc = document.getElementById('new-cat-desc').value.trim();
  const icon = document.getElementById('new-cat-icon').value.trim();
  const formId = document.getElementById('new-cat-formation-id').value.trim();
  const idnVal = document.getElementById('new-cat-idn-prefix').value.trim();

  let idn_prefix = undefined;
  if (idnVal.toLowerCase() === 'false') idn_prefix = false;
  else if (idnVal.toLowerCase() === 'true') idn_prefix = true;
  else if (idnVal) idn_prefix = idnVal;

  state.categories.push({
    name,
    order,
    tcolor: hexToRgb(thex),
    bcolor: hexToRgb(bhex),
    description: desc,
    icon: icon,
    formation_id: formId,
    idn_prefix: idn_prefix
  });

  nameInput.value = '';
  document.getElementById('new-cat-desc').value = '';
  document.getElementById('new-cat-icon').value = '';
  document.getElementById('new-cat-formation-id').value = '';
  document.getElementById('new-cat-idn-prefix').value = '';
  orderInput.value = order + 1;
  updateCatCreationPreview();

  markUnsaved();
  updateStats();
  populateFilters();
  renderCatsTable();
  renderJobs();
  showToast('Категория "' + name + '" успешно добавлена!', 'success');
}

// Formations logic
function renderFormationsTable() {
  const tbody = document.getElementById('formations-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  state.formations = state.formations || [];
  updateCatsBadges();

  if (state.formations.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 24px; color: var(--text-muted);">Нет дополнительных формирований. Добавьте формирование в форме выше.</td></tr>';
    return;
  }

  state.formations.forEach((f, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="color:var(--text-muted); font-family:var(--font-mono); text-align:center;">${idx + 1}</td>
      <td>
        <input type="text" class="cat-input-formid" style="width:100%; font-size:12px;" value="${escapeHtml(f.id)}" onchange="updateFormationId(${idx}, this.value)" placeholder="ID формирования...">
      </td>
      <td>
        <input type="text" class="cat-input-name" style="width:100%;" value="${escapeHtml(f.name || '')}" onchange="updateFormationName(${idx}, this.value)" placeholder="Название в вайтлисте...">
      </td>
      <td>
        <input type="text" class="cat-input-idn" style="width:100%;" value="${f.idn_prefix === undefined ? '' : String(f.idn_prefix)}" onchange="updateFormationIdn(${idx}, this.value)" placeholder="Префикс личного номера (напр. SG-, CC- или false)...">
      </td>
      <td style="text-align:center;">
        <button class="btn-card danger" onclick="deleteFormation(${idx})" title="Удалить формирование">🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.updateFormationId = function(idx, val) {
  val = val.trim();
  if (!val) {
    showToast('ID формирования не может быть пустым!', 'warning');
    renderFormationsTable();
    return;
  }
  state.formations[idx].id = val;
  markUnsaved();
};

window.updateFormationName = function(idx, val) {
  state.formations[idx].name = val.trim();
  markUnsaved();
};

window.updateFormationIdn = function(idx, val) {
  val = val.trim();
  if (val === '') {
    delete state.formations[idx].idn_prefix;
  } else if (val.toLowerCase() === 'false') {
    state.formations[idx].idn_prefix = false;
  } else if (val.toLowerCase() === 'true') {
    state.formations[idx].idn_prefix = true;
  } else {
    state.formations[idx].idn_prefix = val;
  }
  markUnsaved();
};

function createFormation() {
  const idInput = document.getElementById('new-formation-id');
  const nameInput = document.getElementById('new-formation-name');
  const idnInput = document.getElementById('new-formation-idn');

  const id = idInput.value.trim();
  const name = nameInput.value.trim();
  const idnVal = idnInput.value.trim();

  if (!id) {
    showToast('Введите ID формирования (например: doom, arc_alpha)!', 'warning');
    idInput.focus();
    return;
  }
  if (!name) {
    showToast('Введите название формирования!', 'warning');
    nameInput.focus();
    return;
  }

  state.formations = state.formations || [];
  if (state.formations.some(f => f.id.toLowerCase() === id.toLowerCase())) {
    showToast('Формирование с ID "' + id + '" уже существует!', 'error');
    return;
  }

  let idn_prefix = undefined;
  if (idnVal.toLowerCase() === 'false') idn_prefix = false;
  else if (idnVal.toLowerCase() === 'true') idn_prefix = true;
  else if (idnVal) idn_prefix = idnVal;

  state.formations.push({
    id,
    name,
    idn_prefix
  });

  idInput.value = '';
  nameInput.value = '';
  idnInput.value = '';

  markUnsaved();
  renderFormationsTable();
  showToast('Формирование "' + name + '" (' + id + ') добавлено!', 'success');
}

window.deleteFormation = function(idx) {
  state.formations = state.formations || [];
  const f = state.formations[idx];
  if (!confirm('Вы уверены, что хотите удалить формирование "' + (f.name || f.id) + '"?')) {
    return;
  }
  state.formations.splice(idx, 1);
  markUnsaved();
  renderFormationsTable();
  showToast('Формирование удалено', 'warning');
};

// Download & Local Backups
function triggerDownload(filename, text) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

function getLocalBackups() {
  try {
    return JSON.parse(localStorage.getItem('collapsar_jobs_backups') || '[]');
  } catch(e) { return []; }
}

function setLocalBackups(list) {
  try {
    localStorage.setItem('collapsar_jobs_backups', JSON.stringify(list));
  } catch(e) {}
}

function loadLocalBackups() {
  const list = getLocalBackups();
  const el = document.getElementById('stat-total-backups');
  if (el) el.textContent = list.length;
  const btnEl = document.getElementById('btn-backups-count');
  if (btnEl) btnEl.textContent = list.length;
}

function createLocalBackupSnapshot(label = 'Ручной снимок') {
  const list = getLocalBackups();
  const snap = {
    id: Date.now(),
    dateStr: new Date().toLocaleString('ru-RU'),
    label,
    jobsCount: state.jobs.length,
    categoriesCount: state.categories.length,
    data: {
      categories: JSON.parse(JSON.stringify(state.categories)),
      jobs: JSON.parse(JSON.stringify(state.jobs))
    }
  };
  list.unshift(snap);
  if (list.length > 20) list.pop();
  setLocalBackups(list);
  loadLocalBackups();
  renderLocalBackupsTable();
}

function renderLocalBackupsTable() {
  const tbody = document.getElementById('backups-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  const list = getLocalBackups();

  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 24px;">Резервные снимки пока не созданы</td></tr>';
    return;
  }

  list.forEach(b => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="meta-tag" style="color:#10b981; border-color:#10b981;">СНИМОК</span></td>
      <td><strong>${escapeHtml(b.label)}</strong></td>
      <td>${escapeHtml(b.dateStr)}</td>
      <td>${b.jobsCount} проф</td>
      <td>
        <button class="btn btn-sm btn-secondary" onclick="restoreLocalSnapshot(${b.id})">Восстановить</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.restoreLocalSnapshot = function(id) {
  const list = getLocalBackups();
  const snap = list.find(s => s.id === id);
  if (!snap) return;

  if (confirm('Восстановить конфигурацию из снимка "' + snap.label + '" (' + snap.dateStr + ')?')) {
    state.jobs = JSON.parse(JSON.stringify(snap.data.jobs));
    state.categories = JSON.parse(JSON.stringify(snap.data.categories));
    gatherSuggestions();
    updateStats();
    populateFilters();
    populateDatalists();
    runDiagnostics();
    renderJobs();
    document.getElementById('backups-modal').style.display = 'none';
    showToast('Успешно восстановлено из снимка ' + snap.dateStr, 'success');
  }
};


// ============================================================================
// UNIVERSAL LUA CONFIG PARSERS & FILE LOADERS (JOBS / ARSENAL / INVENTORY)
// ============================================================================
function parseArsenalLua(raw) {
  let maxWeight = 50;
  const mwMatch = raw.match(/MAX_WEIGHT\s*=\s*(\d+)/i);
  if (mwMatch) maxWeight = parseInt(mwMatch[1]);

  const catMap = {};
  const catMatch = raw.match(/NN_Arsenal\.Categories\s*=\s*\{([\s\S]*?)\n\}/);
  if (catMatch) {
    const cRegex = /\["([^"]+)"\]\s*=\s*"([^"]+)"/g;
    let cm;
    while ((cm = cRegex.exec(catMatch[1])) !== null) {
      catMap[cm[1]] = cm[2];
    }
  }

  const wepWeightMap = {};
  const wwMatch = raw.match(/NN_Arsenal\.WeaponWeights\s*=\s*NN_Arsenal\.WeaponWeights\s*or\s*\{([\s\S]*?)\n\}/);
  if (wwMatch) {
    const wwRegex = /\["([^"]+)"\]\s*=\s*([\d\.]+)/g;
    let wem;
    while ((wem = wwRegex.exec(wwMatch[1])) !== null) {
      wepWeightMap[wem[1]] = parseFloat(wem[2]);
    }
  }

  const weapons = [];
  const wepBlockMatch = raw.match(/NN_Arsenal\.WeaponConfig\s*=\s*\{([\s\S]*?)\n\}/);
  if (wepBlockMatch) {
    const block = wepBlockMatch[1];
    const itemRegex = /\{([^}]+)\}/g;
    let m;
    while ((m = itemRegex.exec(block)) !== null) {
      const line = m[1];
      const getStr = (key) => {
        const sm = line.match(new RegExp(key + '\\s*=\\s*["\']([^"\']*)["\']'));
        return sm ? sm[1] : '';
      };
      const getNum = (key) => {
        const nm = line.match(new RegExp(key + '\\s*=\\s*([\\d\\.]+)'));
        return nm ? parseFloat(nm[1]) : 0;
      };
      const cls = getStr('class');
      if (cls) {
        weapons.push({
          name: getStr('name') || cls,
          class: cls,
          desc: getStr('desc'),
          rank: getStr('rank') || 'RCT',
          spec: getStr('spec') || '',
          weight: getNum('weight') || wepWeightMap[cls] || 1,
          category: getStr('category') || catMap[cls] || 'Табельное'
        });
      }
    }
  }

  // Parse armor weights
  const armorWeights = {};
  const awMatch = raw.match(/NN_Arsenal\.ArmorWeights\s*=\s*NN_Arsenal\.ArmorWeights\s*or\s*\{([\s\S]*?)\n\}/);
  if (awMatch) {
    const wRegex = /\["([^"]+)"\]\s*=\s*([\d\.]+)/g;
    let wm;
    while ((wm = wRegex.exec(awMatch[1])) !== null) {
      armorWeights[wm[1]] = parseFloat(wm[2]);
    }
  }

  // Parse bodygroups (SubmodelInfo)
  const bodygroups = [];
  const submodelMatch = raw.match(/(?:NN_Arsenal\.SubmodelInfo|SUBMODEL_INFO)\s*=\s*(?:NN_Arsenal\.SubmodelInfo\s*or\s*)?\{([\s\S]*?)\n\}/);
  if (submodelMatch) {
    const block = submodelMatch[1];
    const bgRegex = /\["([^"]+)"\]\s*=\s*\{([^}]+)\}/g;
    let bm;
    while ((bm = bgRegex.exec(block)) !== null) {
      const smd = bm[1];
      const bBody = bm[2];
      const getStr = (key) => {
        const sm = bBody.match(new RegExp(key + '\\s*=\\s*["\']([^"\']*)["\']'));
        return sm ? sm[1] : '';
      };
      const getNum = (key) => {
        const nm = bBody.match(new RegExp(key + '\\s*=\\s*([\\d\\.]+)'));
        return nm ? parseFloat(nm[1]) : 0;
      };
      const weight = armorWeights[smd] || getNum('weight') || 0;

      let category = 'Прочее';
      const lSmd = smd.toLowerCase();
      if (lSmd.includes('helmet') || lSmd.includes('helm') || lSmd.includes('visor') || lSmd.includes('head')) category = 'Шлем';
      else if (lSmd.includes('pauldron')) category = 'Плечи';
      else if (lSmd.includes('chest') || lSmd.includes('strap') || lSmd.includes('belt')) category = 'Нагрудник';
      else if (lSmd.includes('back') || lSmd.includes('jetpack') || lSmd.includes('pack') || lSmd.includes('radio')) category = 'Спина';
      else if (lSmd.includes('kama') || lSmd.includes('cloak') || lSmd.includes('hood')) category = 'Кама';
      else if (lSmd.includes('holster') || lSmd.includes('pistol')) category = 'Кобуры';
      else if (lSmd.includes('arm') || lSmd.includes('antenna') || lSmd.includes('ammo')) category = 'Руки';

      bodygroups.push({
        smd: smd,
        name: getStr('name') || smd,
        desc: getStr('desc') || '',
        reqRank: getStr('reqRank') || '',
        reqSpec: getStr('reqSpec') || '',
        icon: getStr('icon') || '',
        category: category,
        weight: weight
      });
    }
  }

  // Parse attachments
  const attachments = [];
  const attStart = raw.indexOf('NN_Arsenal.AttachmentsConfig = {');
  if (attStart !== -1) {
    const attEnd = raw.indexOf('NN_Arsenal.WeaponRules', attStart);
    const chunk = attEnd !== -1 ? raw.slice(attStart, attEnd) : raw.slice(attStart);
    const wepBlocks = chunk.split(/\["([^"]+)"\]\s*=\s*\{/);
    for (let i = 1; i < wepBlocks.length; i += 2) {
      const wepClass = wepBlocks[i];
      const block = wepBlocks[i + 1];
      const slots = {};

      const slotBlocks = block.split(/\[(\d+)\]\s*=\s*\{/);
      for (let j = 1; j < slotBlocks.length; j += 2) {
        const slotId = parseInt(slotBlocks[j]);
        const sContent = slotBlocks[j + 1];

        const nameMatch = sContent.match(/name\s*=\s*"([^"]*)"/);
        const slotName = nameMatch ? nameMatch[1] : ('Слот ' + slotId);

        const options = [];
        const optRegex = /\{\s*name\s*=\s*"([^"]*)",\s*class\s*=\s*"([^"]*)"\s*\}/g;
        let optMatch;
        while ((optMatch = optRegex.exec(sContent)) !== null) {
          options.push({ name: optMatch[1], class: optMatch[2] });
        }

        slots[slotId] = { name: slotName, options };
      }
      if (Object.keys(slots).length > 0) {
        attachments.push({ wepClass, slots });
      }
    }
  }

  return {
    maxWeight,
    weapons,
    bodygroups,
    attachments,
    armorWeights
  };
}

function parseInventoryLua(raw) {
  const items = [];
  const wepWeights = {};

  const itemsMatch = raw.match(/nn\.Inventory\.Items\s*=\s*\{([\s\S]*?)\n\}\s*\n/);
  if (itemsMatch) {
    const rawItems = itemsMatch[1];
    const regex = /\[['"]([^'"]+)['"]\]\s*=\s*\{([^}]+)\}/g;
    let m;
    while ((m = regex.exec(rawItems)) !== null) {
      const cls = m[1];
      const body = m[2];
      const nameM = body.match(/name\s*=\s*['"]([^'"]+)['"]/);
      const weightM = body.match(/weight\s*=\s*([\d\.]+)/);
      const typeM = body.match(/type\s*=\s*['"]([^'"]+)['"]/);
      const iconM = body.match(/icon\s*=\s*['"]([^'"]+)['"]/);
      const rankM = body.match(/rank\s*=\s*['"]([^'"]+)['"]/);
      const specM = body.match(/spec\s*=\s*['"]([^'"]+)['"]/);
      const consM = body.match(/consumable_wep\s*=\s*true/);

      items.push({
        class: cls,
        name: nameM ? nameM[1] : cls,
        weight: weightM ? parseFloat(weightM[1]) : 1,
        type: typeM ? typeM[1] : 'weapon',
        icon: iconM ? iconM[1] : 'icon16/wrench.png',
        rank: rankM ? rankM[1] : '',
        spec: specM ? specM[1] : '',
        consumable_wep: !!consM
      });
    }
  }

  const weightsMatch = raw.match(/nn\.Config\.WeaponWeights\s*=\s*\{([\s\S]*?)\n\}/);
  if (weightsMatch) {
    const wRegex = /\[['"]([^'"]+)['"]\]\s*=\s*([\d\.]+)/g;
    let wm;
    while ((wm = wRegex.exec(weightsMatch[1])) !== null) {
      wepWeights[wm[1]] = parseFloat(wm[2]);
    }
  }

  return { items, wepWeights };
}


function loadLuaString(rawContent, filename = 'файл') {
  try {
    if (!rawContent || typeof rawContent !== 'string') {
      showToast('Файл пуст или повреждён!', 'error');
      return;
    }

    const lowerName = (filename || '').toLowerCase();
    const isArsenal = rawContent.includes('NN_Arsenal') || rawContent.includes('WeaponConfig') || lowerName.includes('arsenal');
    const isInventory = rawContent.includes('nn.Inventory') || rawContent.includes('Inventory.Items') || lowerName.includes('inventory');
    const isJobs = rawContent.includes('nn.util.addjob') || rawContent.includes('nn.cats') || lowerName.includes('jobs');

    // 1. ARSENAL LOADER
    if (isArsenal) {
      const parsed = parseArsenalLua(rawContent);
      if (parsed.weapons.length === 0 && parsed.bodygroups.length === 0) {
        showToast('В файле не найдено оружие (WeaponConfig) или бодигруппы (SubmodelInfo)!', 'warning');
        return;
      }
      if (typeof createUnifiedBackupSnapshot === 'function') {
        createUnifiedBackupSnapshot('Перед открытием арсенала: ' + filename, 'auto');
      }
      arsenalState.weapons = parsed.weapons;
      if (parsed.bodygroups.length > 0) arsenalState.bodygroups = parsed.bodygroups;
      if (parsed.attachments.length > 0) arsenalState.attachments = parsed.attachments;
      if (parsed.maxWeight) {
        arsenalState.maxWeight = parsed.maxWeight;
        const maxWeightInput = document.getElementById('arsenal-max-weight-input');
        if (maxWeightInput) maxWeightInput.value = parsed.maxWeight;
      }
      if (Object.keys(parsed.armorWeights).length > 0) arsenalState.armorWeights = parsed.armorWeights;

      saveArsenalState();
      if (typeof saveArsenalAttachmentsState === 'function') saveArsenalAttachmentsState();
      updateArsenalStats();
      if (typeof switchMainModule === 'function') switchMainModule('arsenal');
      renderArsenalSubtab(arsenalState.activeSubtab || 'weps');
      showToast('Арсенал успешно загружен из ' + filename + ' (' + parsed.weapons.length + ' оружия, ' + parsed.bodygroups.length + ' брони, ' + parsed.attachments.length + ' обвесов)!', 'success');
      return;
    }

    // 2. INVENTORY / SPECIAL EQUIPMENT LOADER
    if (isInventory) {
      const parsed = parseInventoryLua(rawContent);
      if (parsed.items.length === 0) {
        showToast('В файле не найдены предметы nn.Inventory.Items!', 'warning');
        return;
      }
      if (typeof createUnifiedBackupSnapshot === 'function') {
        createUnifiedBackupSnapshot('Перед открытием инвентаря: ' + filename, 'auto');
      }
      inventoryState.items = parsed.items;
      if (Object.keys(parsed.wepWeights).length > 0) inventoryState.wepWeights = parsed.wepWeights;

      if (typeof saveInventoryState === 'function') saveInventoryState();
      if (typeof switchMainModule === 'function') switchMainModule('inventory');
      if (typeof renderInventorySubtab === 'function') renderInventorySubtab(inventoryState.activeSubtab || 'items');
      showToast('Спецоборудование успешно загружено из ' + filename + ' (' + parsed.items.length + ' предметов)!', 'success');
      return;
    }

    // 3. JOBS CONFIG LOADER
    if (isJobs) {
      const parsed = parseConfigString(rawContent);
      if (parsed.jobs.length === 0 && parsed.categories.length === 0) {
        showToast('В файле не найдено nn.util.addjob или nn.cats!', 'warning');
        return;
      }
      if (typeof createLocalBackupSnapshot === 'function') {
        createLocalBackupSnapshot('Перед открытием ' + filename);
      }
      if (typeof createUnifiedBackupSnapshot === 'function') {
        createUnifiedBackupSnapshot('Перед открытием профессий: ' + filename, 'auto');
      }
      state.jobs = parsed.jobs;
      state.categories = parsed.categories;
      state.formations = parsed.formations || [];
      gatherSuggestions();
      updateStats();
      populateFilters();
      populateDatalists();
      runDiagnostics();
      if (typeof switchMainModule === 'function') switchMainModule('jobs');
      renderJobs();
      markUnsaved();
      showToast('Успешно загружено ' + parsed.jobs.length + ' профессий из ' + filename + '!', 'success');
      return;
    }

    showToast('Не удалось распознать формат файла: файл не содержит настроек Профессий, Арсенала или Спецоборудования!', 'warning');
  } catch(err) {
    console.error(err);
    showToast('Ошибка разбора файла: ' + err.message, 'error');
  }
}

// Event Listeners
function initEditorBundle() {
  loadData();

  const manualSyncBtn = document.getElementById('btn-manual-sync-editor');
  if (manualSyncBtn) {
    manualSyncBtn.addEventListener('click', () => {
      const syncStatus = document.getElementById('editor-sync-status');
      if (syncStatus) syncStatus.textContent = 'Запрос данных с сервера...';
      const liveApi = (typeof api !== 'undefined' && api) || window.api;
      if (liveApi && liveApi.socket && liveApi.socket.readyState === 1) {
        liveApi.sendCommand('get_editor_data', '');
        showToast('Запрос актуальной конфигурации отправлен на сервер...', 'info', 3000);
      } else {
        showToast('Нет подключения к игровому серверу через WebSocket', 'warning', 4000);
      }
    });
  }


  // Navigation
  document.getElementById('btn-create-job').addEventListener('click', () => openJobModal(-1));
  document.getElementById('btn-open-cats').addEventListener('click', openCatsModal);
  document.getElementById('btn-open-diagnostics').addEventListener('click', () => openDiagnosticsModal('all'));
  document.getElementById('btn-open-backups').addEventListener('click', () => {
    if (typeof openBackupsModal === 'function') {
      openBackupsModal('unified');
    } else {
      if (typeof updateBackupsBadges === 'function') updateBackupsBadges();
      if (typeof renderUnifiedBackupsTable === 'function') renderUnifiedBackupsTable();
      if (typeof renderLocalBackupsTable === 'function') renderLocalBackupsTable();
      document.getElementById('backups-modal').style.display = 'flex';
    }
  });

  // Download / Save - с контекстной поддержкой Профессий, Арсенала и Спецоборудования
  document.getElementById('btn-download-config').addEventListener('click', async () => {
    window._lastEditorSaveTime = Date.now();
    const liveApi = (typeof api !== 'undefined' && api) || window.api;
    const isSocketReady = liveApi && liveApi.socket && liveApi.socket.readyState === 1;
    const currentView = (typeof arsenalState !== 'undefined' && arsenalState.activeMainView) || 'jobs';

    if (currentView === 'arccw') {
      if (typeof saveArcCWToServer === 'function') {
        saveArcCWToServer();
      }
      return;
    }

    if (currentView === 'arsenal') {
      const lua = (typeof generateArsenalSharedLua === 'function') ? generateArsenalSharedLua() : '';
      if (typeof saveArsenalState === 'function') saveArsenalState();
      if (typeof saveArsenalAttachmentsState === 'function') saveArsenalAttachmentsState();
      try {
        fetch(getApiUrl('/api/save-arsenal'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ luaContent: lua })
        }).catch(() => {});
      } catch(e) {}
      if (isSocketReady) {
        liveApi.sendCommand('editor_save_arsenal', '', { lua: lua });
        showToast('sh_arsenal_config.lua отправлен и применён на сервере в реальном времени!', 'success', 5000);
        return;
      }
      if (typeof downloadLuaBlob === 'function') downloadLuaBlob('sh_arsenal_config.lua', lua);
      else triggerDownload('sh_arsenal_config.lua', lua);
      showToast('Сервер не подключен. sh_arsenal_config.lua скачан!', 'info', 5000);
      return;
    }

    if (currentView === 'inventory') {
      const lua = (typeof generateInventoryLua === 'function') ? generateInventoryLua() : '';
      if (typeof saveInventoryState === 'function') saveInventoryState();
      try {
        fetch(getApiUrl('/api/save-inventory'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: inventoryState.items, wepWeights: inventoryState.wepWeights })
        }).catch(() => {});
      } catch(e) {}
      if (isSocketReady) {
        liveApi.sendCommand('editor_save_inventory', '', { lua: lua });
        showToast('aa_sh_inventory_config.lua отправлен и применён на сервере в реальном времени!', 'success', 5000);
        return;
      }
      if (typeof downloadLuaBlob === 'function') downloadLuaBlob('aa_sh_inventory_config.lua', lua);
      else triggerDownload('aa_sh_inventory_config.lua', lua);
      showToast('Сервер не подключен. aa_sh_inventory_config.lua скачан!', 'info', 5000);
      return;
    }

    // Default: Профессии (jobs)
    runDiagnostics();
    if (state.diagnostics.summary.errors > 0) {
      if (!confirm('Внимание: обнаружено ' + state.diagnostics.summary.errors + ' критических ошибок! Вы хотите сохранить файл?')) {
        openDiagnosticsModal('error');
        return;
      }
    }
    const generatedLua = generateConfigLua({ categories: state.categories, jobs: state.jobs, formations: state.formations });
    createLocalBackupSnapshot('Автоматический бэкап при экспорте');

    try {
      fetch(getApiUrl('/api/save-config'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ luaContent: generatedLua })
      }).catch(() => {});
    } catch(e) {}

    if (isSocketReady) {
      liveApi.sendCommand('editor_save_config', '', { lua: generatedLua });
      clearUnsaved();
      showToast('Конфигурация профессий отправлена на сервер и обновлена в реальном времени!', 'success', 5000);
      return;
    }

    triggerDownload('sh_jobs_config.lua', generatedLua);
    clearUnsaved();
    showToast('Сервер не подключен. Файл sh_jobs_config.lua скачан на компьютер.', 'info', 5000);
  });

  // Контекстное скачивание .lua копии файла в зависимости от активного раздела
  const dlLuaBtn = document.getElementById('btn-download-lua-file');
  if (dlLuaBtn) {
    dlLuaBtn.addEventListener('click', () => {
      const currentView = (typeof arsenalState !== 'undefined' && arsenalState.activeMainView) || 'jobs';
      if (currentView === 'arsenal') {
        const lua = (typeof generateArsenalSharedLua === 'function') ? generateArsenalSharedLua() : '';
        if (typeof downloadLuaBlob === 'function') downloadLuaBlob('sh_arsenal_config.lua', lua);
        else triggerDownload('sh_arsenal_config.lua', lua);
        showToast('Файл sh_arsenal_config.lua скачан!', 'info', 4000);
      } else if (currentView === 'inventory') {
        const lua = (typeof generateInventoryLua === 'function') ? generateInventoryLua() : '';
        if (typeof downloadLuaBlob === 'function') downloadLuaBlob('aa_sh_inventory_config.lua', lua);
        else triggerDownload('aa_sh_inventory_config.lua', lua);
        showToast('Файл aa_sh_inventory_config.lua скачан!', 'info', 4000);
      } else {
        const generatedLua = generateConfigLua({ categories: state.categories, jobs: state.jobs, formations: state.formations });
        triggerDownload('sh_jobs_config.lua', generatedLua);
        showToast('Копия файла sh_jobs_config.lua скачана!', 'info', 4000);
      }
    });
  }

  // Backups modal actions
  document.getElementById('modal-backups-close').addEventListener('click', () => {
    document.getElementById('backups-modal').style.display = 'none';
  });
  document.getElementById('btn-manual-backup').addEventListener('click', () => {
    createLocalBackupSnapshot('Ручной снимок пользователя');
    showToast('Снимок текущего состояния сохранён!', 'success');
  });

  // File Input (Open file)
  const fileInput = document.getElementById('file-input');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        loadLuaString(evt.target.result, file.name);
      };
      reader.readAsText(file);
      fileInput.value = '';
    });
  }

  // Drag and Drop
  const overlay = document.getElementById('drop-overlay');
  if (overlay) {
    window.addEventListener('dragover', (e) => {
      e.preventDefault();
      overlay.classList.add('active');
    });
    window.addEventListener('dragleave', (e) => {
      if (e.clientX <= 0 || e.clientY <= 0) {
        overlay.classList.remove('active');
      }
    });
    window.addEventListener('drop', (e) => {
      e.preventDefault();
      overlay.classList.remove('active');
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
          loadLuaString(evt.target.result, file.name);
        };
        reader.readAsText(file);
      }
    });
  }

  // Diagnostics Modal Events
  document.getElementById('modal-diagnostics-close').addEventListener('click', closeDiagnosticsModal);
  document.querySelectorAll('.diag-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      state.diagActiveTab = tab.getAttribute('data-diag-filter');
      renderDiagnosticsModalTabs();
      renderDiagnosticsList();
    });
  });
  document.getElementById('btn-autofix-all').addEventListener('click', autoFixAll);

  // Search & Filters
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchTerm = e.target.value.trim();
      if (searchClear) searchClear.style.display = state.searchTerm ? 'block' : 'none';
      renderJobs();
    });
  }
  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      state.searchTerm = '';
      searchClear.style.display = 'none';
      renderJobs();
    });
  }

  const fCat = document.getElementById('filter-cat');
  if (fCat) fCat.addEventListener('change', (e) => { state.filterCat = e.target.value; renderJobs(); });
  const fGroup = document.getElementById('filter-group');
  if (fGroup) fGroup.addEventListener('change', (e) => { state.filterGroup = e.target.value; renderJobs(); });
  const fSpawn = document.getElementById('filter-spawn');
  if (fSpawn) fSpawn.addEventListener('change', (e) => { state.filterSpawn = e.target.value; renderJobs(); });
  const fStatus = document.getElementById('filter-status');
  if (fStatus) fStatus.addEventListener('change', (e) => { state.filterStatus = e.target.value; renderJobs(); });
  const sSort = document.getElementById('sort-select');
  if (sSort) sSort.addEventListener('change', (e) => { state.sortBy = e.target.value; renderJobs(); });

  const btnReset = document.getElementById('btn-reset-filters');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      state.searchTerm = '';
      if (searchClear) searchClear.style.display = 'none';
      if (fCat) fCat.value = '';
      state.filterCat = '';
      if (fGroup) fGroup.value = '';
      state.filterGroup = '';
      if (fSpawn) fSpawn.value = '';
      state.filterSpawn = '';
      if (fStatus) fStatus.value = '';
      state.filterStatus = '';
      if (sSort) sSort.value = 'default';
      state.sortBy = 'default';
      renderJobs();
    });
  }

  // Views
  const gridBtn = document.getElementById('view-grid-btn');
  const tableBtn = document.getElementById('view-table-btn');
  if (gridBtn && tableBtn) {
    gridBtn.addEventListener('click', () => {
      state.activeView = 'grid';
      gridBtn.classList.add('active');
      tableBtn.classList.remove('active');
      renderJobs();
    });
    tableBtn.addEventListener('click', () => {
      state.activeView = 'table';
      tableBtn.classList.add('active');
      gridBtn.classList.remove('active');
      renderJobs();
    });
  }

  // Edit Modal Tabs
  document.querySelectorAll('#job-modal .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchJobModalTab(btn.getAttribute('data-tab'));
    });
  });

  document.getElementById('modal-job-close').addEventListener('click', closeJobModal);
  document.getElementById('modal-job-cancel').addEventListener('click', closeJobModal);
  document.getElementById('modal-job-submit').addEventListener('click', saveJobModal);

  document.getElementById('btn-auto-team').addEventListener('click', () => {
    const name = document.getElementById('input-job-name').value.trim();
    if (!name) return;
    const trans = transliterate(name);
    document.getElementById('input-team-var').value = 'TEAM_' + trans;
    if (!document.getElementById('input-job-id').value) {
      document.getElementById('input-job-id').value = trans.toLowerCase();
    }
  });

  document.getElementById('input-job-color-picker').addEventListener('input', (e) => {
    const rgb = hexToRgb(e.target.value);
    document.getElementById('input-job-color-label').textContent = 'Color(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
  });

  document.getElementById('btn-add-bg').addEventListener('click', addBodygroup);
  document.getElementById('btn-add-wep').addEventListener('click', () => {
    addWeapon(document.getElementById('wep-add-input').value);
  });
  document.getElementById('wep-add-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addWeapon(e.target.value);
    }
  });
  document.getElementById('btn-clear-weps').addEventListener('click', () => {
    state.currentWeapons = [];
    renderWeaponsTags();
  });

  document.querySelectorAll('.chip[data-wep]').forEach(chip => {
    chip.addEventListener('click', () => {
      addWeapon(chip.getAttribute('data-wep'));
    });
  });

  document.getElementById('toggle-custom-spawn').addEventListener('change', (e) => {
    document.getElementById('custom-spawn-container').style.display = e.target.checked ? 'block' : 'none';
  });

  document.getElementById('btn-quick-new-cat').addEventListener('click', () => {
    const newName = prompt('Введите название новой категории:');
    if (newName && newName.trim()) {
      const clean = newName.trim();
      if (!state.categories.some(c => c.name.toLowerCase() === clean.toLowerCase())) {
        state.categories.push({
          name: clean,
          tcolor: { r: 255, g: 255, b: 255 },
          bcolor: { r: 50, g: 70, b: 100 }
        });
        markUnsaved();
        populateFilters();
        const sel = document.getElementById('input-job-cat');
        const opt = document.createElement('option');
        opt.value = clean;
        opt.textContent = clean;
        sel.appendChild(opt);
        sel.value = clean;
        showToast('Категория "' + clean + '" создана', 'success');
      } else {
        document.getElementById('input-job-cat').value = clean;
      }
    }
  });

  document.getElementById('modal-cats-close').addEventListener('click', closeCatsModal);
  document.getElementById('btn-create-cat').addEventListener('click', createCategory);
  
  // Category tabs
  const tabCats = document.getElementById('tab-btn-cats');
  if (tabCats) tabCats.addEventListener('click', () => switchCatsTab('main-cats'));
  const tabForms = document.getElementById('tab-btn-formations');
  if (tabForms) tabForms.addEventListener('click', () => switchCatsTab('extra-formations'));

  // Formation creation
  const btnCreateForm = document.getElementById('btn-create-formation');
  if (btnCreateForm) btnCreateForm.addEventListener('click', createFormation);
  const newFormName = document.getElementById('new-formation-name');
  if (newFormName) {
    newFormName.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        createFormation();
      }
    });
  }

  // Categories search & toolbar
  const catsSearch = document.getElementById('cats-search-input');
  if (catsSearch) {
    catsSearch.addEventListener('input', (e) => {
      state.catsSearchTerm = e.target.value;
      renderCatsTable();
    });
  }
  const btnSortCats = document.getElementById('btn-sort-cats-order');
  if (btnSortCats) btnSortCats.addEventListener('click', sortCatsByOrder);
  const btnRenumberCats = document.getElementById('btn-renumber-cats');
  if (btnRenumberCats) btnRenumberCats.addEventListener('click', renumberCats);

  // Live creation preview
  const newCatName = document.getElementById('new-cat-name');
  const newCatBcol = document.getElementById('new-cat-bcolor');
  const newCatTcol = document.getElementById('new-cat-tcolor');
  if (newCatName) newCatName.addEventListener('input', updateCatCreationPreview);
  if (newCatBcol) newCatBcol.addEventListener('input', updateCatCreationPreview);
  if (newCatTcol) newCatTcol.addEventListener('input', updateCatCreationPreview);

  initArsenalModule();
  initInventoryModule();
  if (newCatName) {
    newCatName.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        createCategory();
      }
    });
  }
}


// ==========================================================================
// ARSENAL CONTROLLER & MODULE INTEGRATION
// ==========================================================================

const arsenalState = {
  maxWeight: 50,
  weapons: [],
  bodygroups: [],
  armorWeights: {},
  categories: ["Табельное", "Карабины", "Винтовки", "Лучемёты", "Дробовики", "Ближнее", "Взрывчатка", "Экипировка"],
  bgCategories: ["Шлем", "Плечи", "Нагрудник", "Спина", "Кама", "Кобуры", "Модули", "Руки", "Прочее"],
  ranks: ["RCT", "PV1", "PV2", "PFC", "SPC", "CPL", "SGT", "SSG", "MSG", "SGM", "JLT", "LT", "SLT", "CPT", "MAJ", "LTC", "CO", "SCO", "COL", "MC"],
  specs: ["ARC", "CM", "SO", "Mando", "ARF", "AG", "UNV", "RC", "PRT", "MSC", "ENG", "PRG", "MRK", "SN", "SM", "HEV", "DM", "SD", "SK", "GH", "GN", "MED", "FA", "PR", "MN", "REC", "ART", "Hound", "Boss", "Scorch", "Fixer", "Sev", "Niner", "Darman", "Atin", "Fi"],
  attachments: [],
  activeSubtab: 'weps',
  wepSearch: '',
  wepFilterCat: '',
  bgSearch: '',
  bgFilterCat: '',
  activeMainView: 'jobs'
};

async function initArsenalModule() {
  // 0. Fetch live data from server if online
  if (window.location.protocol.startsWith('http') || window.location.hostname.includes('github.io')) {
    try {
      const res = await fetch(getApiUrl('/api/arsenal'));
      if (res.ok) {
        const data = await res.json();
        if (data && data.success && Array.isArray(data.weapons) && data.weapons.length > 0) {
          arsenalState.weapons = data.weapons;
          if (data.bodygroups && data.bodygroups.length > 0) arsenalState.bodygroups = data.bodygroups;
          if (data.attachments && data.attachments.length > 0) arsenalState.attachments = data.attachments;
          if (data.maxWeight) arsenalState.maxWeight = data.maxWeight;
          if (data.armorWeights) arsenalState.armorWeights = data.armorWeights;
          saveArsenalState();
          if (typeof saveArsenalAttachmentsState === 'function') saveArsenalAttachmentsState();
        }
      }
    } catch(e) {
      console.warn('Could not fetch /api/arsenal:', e);
    }
  }

  // 1. Load data from LocalStorage or Bundled Data
  try {
    const cached = localStorage.getItem('swrp_arsenal_saved_data');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed && Array.isArray(parsed.weapons) && parsed.weapons.length > 0) {
        arsenalState.weapons = parsed.weapons;
        arsenalState.bodygroups = parsed.bodygroups || [];
        arsenalState.maxWeight = parsed.maxWeight || 50;
        arsenalState.armorWeights = parsed.armorWeights || {};
        if (Array.isArray(parsed.attachments) && parsed.attachments.length > 0) {
          arsenalState.attachments = parsed.attachments;
        }
      }
    }
  } catch (e) {
    console.warn('Could not load cached arsenal data:', e);
  }

  // Fallback to BUNDLED_ARSENAL_DATA if empty
  if (arsenalState.weapons.length === 0 && typeof BUNDLED_ARSENAL_DATA !== 'undefined') {
    arsenalState.weapons = JSON.parse(JSON.stringify(BUNDLED_ARSENAL_DATA.weapons || []));
    arsenalState.bodygroups = JSON.parse(JSON.stringify(BUNDLED_ARSENAL_DATA.bodygroups || []));
    arsenalState.maxWeight = BUNDLED_ARSENAL_DATA.maxWeight || 50;
    arsenalState.armorWeights = JSON.parse(JSON.stringify(BUNDLED_ARSENAL_DATA.armorWeights || {}));
  }

  // Hydrate armor weights and bodygroup weights from BUNDLED_ARSENAL_DATA if localStorage has stale zeroes
  if (typeof BUNDLED_ARSENAL_DATA !== 'undefined') {
    const bundledWeights = BUNDLED_ARSENAL_DATA.armorWeights || {};
    if (!arsenalState.armorWeights || Object.keys(arsenalState.armorWeights).length === 0) {
      arsenalState.armorWeights = JSON.parse(JSON.stringify(bundledWeights));
    } else {
      Object.keys(bundledWeights).forEach(k => {
        if (arsenalState.armorWeights[k] === undefined) {
          arsenalState.armorWeights[k] = bundledWeights[k];
        }
      });
    }

    if (Array.isArray(arsenalState.bodygroups)) {
      arsenalState.bodygroups.forEach(bg => {
        if (!bg.weight || bg.weight === 0) {
          const w = (arsenalState.armorWeights && arsenalState.armorWeights[bg.smd])
            || bundledWeights[bg.smd]
            || bundledWeights[(bg.smd || '').toLowerCase()];
          if (w !== undefined && w > 0) {
            bg.weight = w;
            if (!arsenalState.armorWeights[bg.smd]) {
              arsenalState.armorWeights[bg.smd] = w;
            }
          }
        }
      });
    }
  }

  // Update input
  const maxWeightInput = document.getElementById('arsenal-max-weight-input');
  if (maxWeightInput) {
    maxWeightInput.value = arsenalState.maxWeight;
    maxWeightInput.addEventListener('change', (e) => {
      const val = parseFloat(e.target.value);
      if (!isNaN(val) && val > 0) {
        arsenalState.maxWeight = val;
        saveArsenalState();
        showToast('Максимальный вес арсенала установлен: ' + val + ' кг', 'success');
      }
    });
  }

  updateArsenalStats();
  setupArsenalEventListeners();
}

function saveArsenalState() {
  try {
    localStorage.setItem('swrp_arsenal_saved_data', JSON.stringify({
      weapons: arsenalState.weapons,
      bodygroups: arsenalState.bodygroups,
      attachments: arsenalState.attachments || [],
      maxWeight: arsenalState.maxWeight,
      armorWeights: arsenalState.armorWeights
    }));
  } catch (e) {
    console.warn('Could not save arsenal data to localStorage:', e);
  }
  updateArsenalStats();
}

function updateArsenalStats() {
  const modArsenalCount = document.getElementById('mod-arsenal-count');
  const statWeps = document.getElementById('stat-arsenal-weps');
  const statBgs = document.getElementById('stat-arsenal-bgs');
  const countSubtabWeps = document.getElementById('count-subtab-weps');
  const countSubtabBgs = document.getElementById('count-subtab-bgs');

  if (modArsenalCount) modArsenalCount.textContent = arsenalState.weapons.length;
  if (statWeps) statWeps.textContent = arsenalState.weapons.length;
  if (statBgs) statBgs.textContent = arsenalState.bodygroups.length;
  if (countSubtabWeps) countSubtabWeps.textContent = arsenalState.weapons.length;
  if (countSubtabBgs) countSubtabBgs.textContent = arsenalState.bodygroups.length;
}

function switchMainModule(moduleName) {
  arsenalState.activeMainView = moduleName;
  const jobsBtn = document.getElementById('tab-nav-jobs');
  const arsenalBtn = document.getElementById('tab-nav-arsenal');
  const invBtn = document.getElementById('tab-nav-inventory');
  const arccwBtn = document.getElementById('tab-nav-arccw');

  const jobsSection = document.getElementById('jobs-view-section');
  const jobsStats = document.getElementById('jobs-nav-stats');
  const arsenalSection = document.getElementById('arsenal-view-section');
  const invSection = document.getElementById('inventory-view-section');
  const arccwSection = document.getElementById('arccw-view-section');

  if (jobsBtn) jobsBtn.classList.toggle('active', moduleName === 'jobs');
  if (arsenalBtn) arsenalBtn.classList.toggle('active', moduleName === 'arsenal');
  if (invBtn) invBtn.classList.toggle('active', moduleName === 'inventory');
  if (arccwBtn) arccwBtn.classList.toggle('active', moduleName === 'arccw');

  if (jobsSection) jobsSection.style.display = (moduleName === 'jobs') ? 'block' : 'none';
  if (jobsStats) jobsStats.style.display = (moduleName === 'jobs') ? 'flex' : 'none';
  if (arsenalSection) arsenalSection.style.display = (moduleName === 'arsenal') ? 'flex' : 'none';
  if (invSection) invSection.style.display = (moduleName === 'inventory') ? 'flex' : 'none';
  if (arccwSection) arccwSection.style.display = (moduleName === 'arccw') ? 'flex' : 'none';

  if (moduleName === 'arsenal') {
    if (typeof switchArsenalSubtab === 'function') {
      switchArsenalSubtab(arsenalState.activeSubtab || 'weps');
    } else {
      renderArsenalSubtab(arsenalState.activeSubtab || 'weps');
    }
  } else if (moduleName === 'inventory') {
    renderInventorySubtab(inventoryState.activeSubtab);
  } else if (moduleName === 'arccw') {
    var liveApi = (typeof api !== 'undefined' && api) || window.api;
    if (liveApi && liveApi.socket && liveApi.socket.readyState === 1) {
      liveApi.sendCommand('get_editor_data', '');
    } else if (typeof fetchArcCWData === 'function') {
      fetchArcCWData();
    }
    if (typeof renderArcCWCatalog === 'function') {
      renderArcCWCatalog();
    }
    if (arccwState && arccwState.selectedClass && typeof renderArcCWInspector === 'function') {
      renderArcCWInspector(arccwState.selectedClass);
    }
  }

  const saveBtn = document.getElementById('btn-download-config');
  const dlBtn = document.getElementById('btn-download-lua-file');
  if (saveBtn) {
    if (moduleName === 'arsenal') {
      saveBtn.title = 'Сохранить sh_arsenal_config.lua на игровом сервере';
    } else if (moduleName === 'inventory') {
      saveBtn.title = 'Сохранить aa_sh_inventory_config.lua на игровом сервере';
    } else if (moduleName === 'arccw') {
      saveBtn.title = 'Сохранить sh_arccw_balance.lua на игровом сервере';
    } else {
      saveBtn.title = 'Сохранить sh_jobs_config.lua на игровом сервере';
    }
  }
  if (dlBtn) {
    if (moduleName === 'arsenal') {
      dlBtn.title = 'Скачать sh_arsenal_config.lua';
    } else if (moduleName === 'inventory') {
      dlBtn.title = 'Скачать aa_sh_inventory_config.lua';
    } else if (moduleName === 'arccw') {
      dlBtn.title = 'Скачать sh_arccw_balance.lua';
    } else {
      dlBtn.title = 'Скачать sh_jobs_config.lua';
    }
  }
}

function switchArsenalSubtab(subtabName) {
  arsenalState.activeSubtab = subtabName;
  document.querySelectorAll('.arsenal-subtab').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-subtab') === subtabName);
  });

  const panes = {
    'weps': document.getElementById('arsenal-pane-weps'),
    'bgs': document.getElementById('arsenal-pane-bgs'),
    'atts': document.getElementById('arsenal-pane-atts'),
    'export': document.getElementById('arsenal-pane-export')
  };

  Object.keys(panes).forEach(k => {
    if (panes[k]) panes[k].style.display = (k === subtabName) ? 'block' : 'none';
  });

  renderArsenalSubtab(subtabName);
}

function renderArsenalSubtab(subtabName) {
  if (subtabName === 'weps') renderArsenalWeapons();
  else if (subtabName === 'bgs') renderArsenalBodygroups();
  else if (subtabName === 'atts') renderArsenalAttachments();
  else if (subtabName === 'export') generateArsenalExportCode();
}

// --------------------------------------------------------------------------
// WEAPONS LOGIC
// --------------------------------------------------------------------------
function renderArsenalWeapons() {
  const container = document.getElementById('arsenal-weapons-grid');
  const pillsContainer = document.getElementById('arsenal-wep-cat-pills');
  if (!container || !pillsContainer) return;

  // Render category filter pills
  const counts = {};
  counts[''] = arsenalState.weapons.length;
  arsenalState.weapons.forEach(w => {
    const cat = w.category || 'Экипировка';
    counts[cat] = (counts[cat] || 0) + 1;
  });

  let pillsHtml = '<button class="cat-pill-btn ' + (arsenalState.wepFilterCat === '' ? 'active' : '') + '" data-cat="" type="button">Все (' + counts[''] + ')</button>';
  arsenalState.categories.forEach(cat => {
    const c = counts[cat] || 0;
    pillsHtml += '<button class="cat-pill-btn ' + (arsenalState.wepFilterCat === cat ? 'active' : '') + '" data-cat="' + escapeHtml(cat) + '" type="button">' + escapeHtml(cat) + ' (' + c + ')</button>';
  });
  pillsContainer.innerHTML = pillsHtml;

  pillsContainer.querySelectorAll('.cat-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      arsenalState.wepFilterCat = btn.getAttribute('data-cat') || '';
      renderArsenalWeapons();
    });
  });

  // Filter weapons
  const term = (arsenalState.wepSearch || '').toLowerCase().trim();
  const catFilter = arsenalState.wepFilterCat;

  const filtered = arsenalState.weapons.filter(w => {
    if (catFilter && (w.category || 'Экипировка') !== catFilter) return false;
    if (term) {
      const matchName = (w.name || '').toLowerCase().includes(term);
      const matchClass = (w.class || '').toLowerCase().includes(term);
      const matchDesc = (w.desc || '').toLowerCase().includes(term);
      const matchRank = (w.rank || '').toLowerCase().includes(term);
      const specStr = Array.isArray(w.spec) ? w.spec.join(' ') : (w.spec || '');
      const matchSpec = specStr.toLowerCase().includes(term);
      if (!matchName && !matchClass && !matchDesc && !matchRank && !matchSpec) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted); background: var(--bg-panel); border-radius: var(--radius-md); border: 1px dashed var(--border-color); font-size: 15px;">Оружие по заданным фильтрам не найдено</div>';
    return;
  }

  let html = '';
  filtered.forEach(w => {
    const originalIndex = arsenalState.weapons.indexOf(w);
    let specDisplay = '';
    if (Array.isArray(w.spec) && w.spec.length > 0) {
      specDisplay = w.spec.map(s => '<span class="req-badge spec">[' + escapeHtml(s) + ']</span>').join(' ');
    } else if (typeof w.spec === 'string' && w.spec.trim()) {
      specDisplay = '<span class="req-badge spec">[' + escapeHtml(w.spec.trim()) + ']</span>';
    }

    const rankDisplay = w.rank ? '<span class="req-badge rank">🎖 ' + escapeHtml(w.rank) + '</span>' : '';
    const noReqs = !specDisplay && !rankDisplay ? '<span class="req-badge any">Любой ранг / без ограничений</span>' : '';

    html += '<div class="wep-card">';
    html += '  <div class="wep-card-header">';
    html += '    <span class="wep-cat-tag">' + escapeHtml(w.category || 'Экипировка') + '</span>';
    html += '    <span class="wep-weight-badge">' + (w.weight !== undefined ? w.weight : 1) + ' кг</span>';
    html += '  </div>';
    html += '  <div class="wep-card-body">';
    html += '    <div class="wep-card-title">' + escapeHtml(w.name || w.class) + '</div>';
    html += '    <span class="wep-class-code">' + escapeHtml(w.class) + '</span>';
    if (w.desc) html += '    <div class="wep-desc-text">' + escapeHtml(w.desc) + '</div>';
    html += '    <div class="wep-reqs-row">' + rankDisplay + (specDisplay ? ' ' + specDisplay : '') + noReqs + '</div>';
    html += '  </div>';
    html += '  <div class="wep-card-actions">';
    html += '    <button class="btn btn-secondary btn-sm" onclick="openEditWeaponModal(' + originalIndex + ')">Редактировать</button>';
    html += '    <button class="btn btn-secondary btn-sm" onclick="duplicateWeapon(' + originalIndex + ')" title="Дублировать оружие">Копия</button>';
    html += '    <button class="btn btn-danger btn-sm" onclick="deleteWeapon(' + originalIndex + ')" title="Удалить из арсенала">&times;</button>';
    html += '  </div>';
    html += '</div>';
  });

  container.innerHTML = html;
}

function openAddWeaponModal() {
  document.getElementById('modal-wep-title').textContent = 'Добавить оружие в арсенал';
  document.getElementById('modal-wep-original-class').value = '';
  document.getElementById('modal-wep-name').value = '';
  document.getElementById('modal-wep-class').value = '';
  document.getElementById('modal-wep-weight').value = '1.0';
  document.getElementById('modal-wep-desc').value = '';
  document.getElementById('modal-wep-spec').value = '';

  populateWeaponModalSelects('', '');
  document.getElementById('arsenal-wep-modal').style.display = 'flex';
}

function openEditWeaponModal(index) {
  const w = arsenalState.weapons[index];
  if (!w) return;

  document.getElementById('modal-wep-title').textContent = 'Редактировать: ' + (w.name || w.class);
  document.getElementById('modal-wep-original-class').value = w.class;
  document.getElementById('modal-wep-name').value = w.name || '';
  document.getElementById('modal-wep-class').value = w.class || '';
  document.getElementById('modal-wep-weight').value = w.weight !== undefined ? w.weight : 1.0;
  document.getElementById('modal-wep-desc').value = w.desc || '';
  document.getElementById('modal-wep-spec').value = Array.isArray(w.spec) ? w.spec.join(', ') : (w.spec || '');

  populateWeaponModalSelects(w.category, w.rank);
  document.getElementById('arsenal-wep-modal').style.display = 'flex';
}

function populateWeaponModalSelects(selectedCat, selectedRank) {
  const catSel = document.getElementById('modal-wep-cat');
  const rankSel = document.getElementById('modal-wep-rank');

  catSel.innerHTML = '';
  arsenalState.categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    if (cat === selectedCat) opt.selected = true;
    catSel.appendChild(opt);
  });

  rankSel.innerHTML = '<option value="">Без ограничения по званию (Любое)</option>';
  arsenalState.ranks.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r;
    opt.textContent = r;
    if (r === selectedRank) opt.selected = true;
    rankSel.appendChild(opt);
  });
}

function duplicateWeapon(index) {
  const w = arsenalState.weapons[index];
  if (!w) return;
  const clone = JSON.parse(JSON.stringify(w));
  clone.name = clone.name + ' (Копия)';
  clone.class = clone.class + '_copy';
  arsenalState.weapons.splice(index + 1, 0, clone);
  saveArsenalState();
  renderArsenalWeapons();
  showToast('Оружие сдублировано: ' + clone.name, 'success');
}

function deleteWeapon(index) {
  const w = arsenalState.weapons[index];
  if (!w) return;
  if (confirm('Удалить оружие "' + (w.name || w.class) + '" из арсенала?')) {
    arsenalState.weapons.splice(index, 1);
    saveArsenalState();
    renderArsenalWeapons();
    showToast('Оружие удалено', 'info');
  }
}

// --------------------------------------------------------------------------
// BODYGROUPS & ARMOR LOGIC
// --------------------------------------------------------------------------
function renderArsenalBodygroups() {
  const container = document.getElementById('arsenal-bgs-table-body');
  const pillsContainer = document.getElementById('arsenal-bg-cat-pills');
  if (!container || !pillsContainer) return;

  const counts = {};
  counts[''] = arsenalState.bodygroups.length;
  arsenalState.bodygroups.forEach(bg => {
    const cat = bg.category || 'Прочее';
    counts[cat] = (counts[cat] || 0) + 1;
  });

  let pillsHtml = '<button class="cat-pill-btn ' + (arsenalState.bgFilterCat === '' ? 'active' : '') + '" data-cat="" type="button">Все (' + counts[''] + ')</button>';
  arsenalState.bgCategories.forEach(cat => {
    const c = counts[cat] || 0;
    pillsHtml += '<button class="cat-pill-btn ' + (arsenalState.bgFilterCat === cat ? 'active' : '') + '" data-cat="' + escapeHtml(cat) + '" type="button">' + escapeHtml(cat) + ' (' + c + ')</button>';
  });
  pillsContainer.innerHTML = pillsHtml;

  pillsContainer.querySelectorAll('.cat-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      arsenalState.bgFilterCat = btn.getAttribute('data-cat') || '';
      renderArsenalBodygroups();
    });
  });

  const term = (arsenalState.bgSearch || '').toLowerCase().trim();
  const catFilter = arsenalState.bgFilterCat;

  const filtered = arsenalState.bodygroups.filter(bg => {
    if (catFilter && (bg.category || 'Прочее') !== catFilter) return false;
    if (term) {
      const matchSmd = (bg.smd || '').toLowerCase().includes(term);
      const matchName = (bg.name || '').toLowerCase().includes(term);
      const matchDesc = (bg.desc || '').toLowerCase().includes(term);
      const matchRank = (bg.reqRank || '').toLowerCase().includes(term);
      const matchSpec = (bg.reqSpec || '').toLowerCase().includes(term);
      if (!matchSmd && !matchName && !matchDesc && !matchRank && !matchSpec) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 30px; color: var(--text-muted);">Бодигруппы не найдены</td></tr>';
    return;
  }

  let html = '';
  filtered.forEach(bg => {
    const originalIndex = arsenalState.bodygroups.indexOf(bg);
    const weightBadge = (bg.weight > 0)
      ? '<span class="wep-weight-badge" style="font-size: 11px;">' + bg.weight + ' кг</span>'
      : '<span style="color: var(--text-muted); font-size: 12px;">0 кг</span>';

    const rankBadge = bg.reqRank ? '<span class="req-badge rank">🎖 ' + escapeHtml(bg.reqRank) + '</span>' : '<span style="color: var(--text-muted); font-size: 12px;">—</span>';
    const specBadge = bg.reqSpec ? '<span class="req-badge spec">[' + escapeHtml(bg.reqSpec) + ']</span>' : '<span style="color: var(--text-muted); font-size: 12px;">—</span>';

    html += '<tr>';
    html += '  <td class="smd-filename">' + escapeHtml(bg.smd) + '</td>';
    html += '  <td><strong>' + escapeHtml(bg.name || bg.smd) + '</strong></td>';
    html += '  <td><span class="wep-cat-tag" style="font-size: 10px;">' + escapeHtml(bg.category || 'Прочее') + '</span></td>';
    html += '  <td>' + weightBadge + '</td>';
    html += '  <td style="color: var(--text-secondary);">' + escapeHtml(bg.desc || '—') + '</td>';
    html += '  <td>' + rankBadge + '</td>';
    html += '  <td>' + specBadge + '</td>';
    html += '  <td style="text-align: right; white-space: nowrap;">';
    html += '    <button class="btn btn-secondary btn-sm" onclick="openEditBgModal(' + originalIndex + ')">Изменить</button> ';
    html += '    <button class="btn btn-danger btn-sm" onclick="deleteBodygroup(' + originalIndex + ')">&times;</button>';
    html += '  </td>';
    html += '</tr>';
  });

  container.innerHTML = html;
}

function openAddBgModal() {
  document.getElementById('modal-bg-title').textContent = 'Добавить бодигруппу / броню';
  document.getElementById('modal-bg-original-smd').value = '';
  document.getElementById('modal-bg-smd').value = '';
  document.getElementById('modal-bg-name').value = '';
  document.getElementById('modal-bg-weight').value = '0';
  document.getElementById('modal-bg-desc').value = '';
  document.getElementById('modal-bg-spec').value = '';

  populateBgModalSelects('Шлем', '');
  document.getElementById('arsenal-bg-modal').style.display = 'flex';
}

function openEditBgModal(index) {
  const bg = arsenalState.bodygroups[index];
  if (!bg) return;

  document.getElementById('modal-bg-title').textContent = 'Редактировать: ' + (bg.name || bg.smd);
  document.getElementById('modal-bg-original-smd').value = bg.smd;
  document.getElementById('modal-bg-smd').value = bg.smd;
  document.getElementById('modal-bg-name').value = bg.name || '';
  document.getElementById('modal-bg-weight').value = bg.weight !== undefined ? bg.weight : 0;
  document.getElementById('modal-bg-desc').value = bg.desc || '';
  document.getElementById('modal-bg-spec').value = bg.reqSpec || '';

  populateBgModalSelects(bg.category, bg.reqRank);
  document.getElementById('arsenal-bg-modal').style.display = 'flex';
}

function populateBgModalSelects(selectedCat, selectedRank) {
  const catSel = document.getElementById('modal-bg-cat');
  const rankSel = document.getElementById('modal-bg-rank');

  catSel.innerHTML = '';
  arsenalState.bgCategories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    if (cat === selectedCat) opt.selected = true;
    catSel.appendChild(opt);
  });

  rankSel.innerHTML = '<option value="">Без ограничения по званию (Любое)</option>';
  arsenalState.ranks.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r;
    opt.textContent = r;
    if (r === selectedRank) opt.selected = true;
    rankSel.appendChild(opt);
  });
}

function deleteBodygroup(index) {
  const bg = arsenalState.bodygroups[index];
  if (!bg) return;
  if (confirm('Удалить бодигруппу "' + (bg.name || bg.smd) + '"?')) {
    arsenalState.bodygroups.splice(index, 1);
    delete arsenalState.armorWeights[bg.smd];
    saveArsenalState();
    renderArsenalBodygroups();
    showToast('Бодигруппа удалена', 'info');
  }
}

// --------------------------------------------------------------------------
// LUA CODE GENERATORS
// --------------------------------------------------------------------------
function generateArsenalInitLua() {
  let lua = '-- ==========================================================================\n';
  lua += '-- [SERVER] nn_arsenal/init.lua RULES & WEIGHTS CONFIGURATION\n';
  lua += '-- Generated by COLLAPSAR Arsenal Editor on ' + new Date().toLocaleString() + '\n';
  lua += '-- ==========================================================================\n\n';

  // 1. ARMOR_WEIGHT
  lua += 'local ARMOR_WEIGHT = {\n';
  arsenalState.bodygroups.forEach(bg => {
    if (bg.weight && bg.weight > 0) {
      lua += '    ["' + bg.smd + '"] = ' + bg.weight + ',\n';
    }
  });
  lua += '}\n';
  lua += 'local MAX_WEIGHT = ' + arsenalState.maxWeight + '\n\n';

  // 2. ARSENAL_WEAPON_RULES
  lua += '-- Server-authoritative list. Never trust the client-side menu configuration.\n';
  lua += 'local ARSENAL_WEAPON_RULES = {\n';
  arsenalState.weapons.forEach(w => {
    const parts = [];
    if (w.rank) parts.push('rank = "' + w.rank + '"');
    if (w.spec) {
      if (Array.isArray(w.spec)) {
        if (w.spec.length === 1) parts.push('spec = "' + w.spec[0] + '"');
        else parts.push('spec = {' + w.spec.map(s => '"' + s + '"').join(', ') + '}');
      } else if (typeof w.spec === 'string' && w.spec.trim()) {
        parts.push('spec = "' + w.spec.trim() + '"');
      }
    }
    if (parts.length > 0) {
      lua += '    ["' + w.class + '"] = {' + parts.join(', ') + '},\n';
    } else {
      lua += '    ["' + w.class + '"] = {},\n';
    }
  });
  lua += '}\n\n';

  // 3. WEAPONS_WEIGHT
  lua += '-- Вес оружия (WEAPONS_WEIGHT)\n';
  lua += 'local WEAPONS_WEIGHT = NN_WeaponWeights or {}\n';
  arsenalState.weapons.forEach(w => {
    if (w.weight !== undefined) {
      lua += 'WEAPONS_WEIGHT["' + w.class + '"] = ' + w.weight + '\n';
    }
  });

  return lua;
}

function generateArsenalClLua() {
  let lua = '-- ==========================================================================\n';
  lua += '-- [CLIENT] nn_arsenal/cl_init.lua TABLES CONFIGURATION\n';
  lua += '-- Generated by COLLAPSAR Arsenal Editor on ' + new Date().toLocaleString() + '\n';
  lua += '-- ==========================================================================\n\n';

  // 1. SUBMODEL_INFO
  lua += 'local SUBMODEL_INFO = {\n';
  lua += '    ["empty"] = { name = "Снять", desc = "Убрать элемент" },\n';
  arsenalState.bodygroups.forEach(bg => {
    if (bg.smd === 'empty') return;
    const parts = [];
    parts.push('name = "' + (bg.name || bg.smd) + '"');
    if (bg.desc) parts.push('desc = "' + bg.desc + '"');
    if (bg.reqRank) parts.push('reqRank = "' + bg.reqRank + '"');
    if (bg.reqSpec) parts.push('reqSpec = "' + bg.reqSpec + '"');
    if (bg.icon) parts.push('icon = "' + bg.icon + '"');
    lua += '    ["' + bg.smd + '"] = { ' + parts.join(', ') + ' },\n';
  });
  lua += '}\n\n';

  // 2. ARMOR_WEIGHT
  lua += '-- === ВЕС ЭЛЕМЕНТОВ БРОНИ (по SMD-файлу бодигруппы) ===\n';
  lua += 'local ARMOR_WEIGHT = {\n';
  arsenalState.bodygroups.forEach(bg => {
    if (bg.weight && bg.weight > 0) {
      lua += '    ["' + bg.smd + '"] = ' + bg.weight + ',\n';
    }
  });
  lua += '}\n\n';

  // 3. WEAPON_CONFIG
  lua += '-- === КОНФИГУРАЦИЯ ОРУЖИЯ ===\n';
  lua += 'local WEAPON_CONFIG = {\n';
  arsenalState.weapons.forEach(w => {
    const parts = [];
    parts.push('name = "' + (w.name || w.class) + '"');
    parts.push('class = "' + w.class + '"');
    parts.push('desc = "' + (w.desc || '') + '"');
    if (w.rank) parts.push('rank = "' + w.rank + '"');
    if (w.spec) {
      if (Array.isArray(w.spec)) {
        if (w.spec.length === 1) parts.push('spec = "' + w.spec[0] + '"');
        else parts.push('spec = {' + w.spec.map(s => '"' + s + '"').join(', ') + '}');
      } else if (typeof w.spec === 'string' && w.spec.trim()) {
        parts.push('spec = "' + w.spec.trim() + '"');
      }
    }
    lua += '    { ' + parts.join(', ') + ' },\n';
  });
  lua += '}\n\n';

  // 4. WEAPON_CATEGORIES
  lua += 'local WEAPON_CATEGORIES = {\n';
  arsenalState.weapons.forEach(w => {
    lua += '    ["' + w.class + '"] = "' + (w.category || 'Экипировка') + '",\n';
  });
  lua += '}\n\n';

  // 5. ITEM_DB
  lua += '-- === БАЗА ПРЕДМЕТОВ ===\n';
  lua += 'local ITEM_DB = {\n';
  arsenalState.items.forEach(itm => {
    const parts = [];
    parts.push('name = "' + (itm.name || itm.class) + '"');
    parts.push('weight = ' + (itm.weight || 0));
    if (itm.type) parts.push('type = "' + itm.type + '"');
    if (itm.rank) parts.push('rank = "' + itm.rank + '"');
    if (itm.spec) parts.push('spec = "' + itm.spec + '"');
    lua += '    ["' + itm.class + '"] = { ' + parts.join(', ') + ' },\n';
  });
  lua += '}\n';

  return lua;
}

function generateArsenalSharedLua() {
  let lua = '-- ==========================================================================\n';
  lua += '-- [SHARED] Общая конфигурация Арсенала Республики (sh_arsenal_config.lua)\n';
  lua += '-- Сгенерировано через COLLAPSAR Web Editor: ' + new Date().toLocaleString() + '\n';
  lua += '-- ==========================================================================\n\n';
  lua += 'NN_Arsenal = NN_Arsenal or {}\n\n';

  lua += '-- ============================================================================\n';
  lua += '-- 1. СПИСОК ОРУЖИЯ В АРСЕНАЛЕ\n';
  lua += '-- ============================================================================\n';
  lua += 'NN_Arsenal.WeaponConfig = {\n';

  arsenalState.weapons.forEach(w => {
    const parts = [];
    parts.push('name = "' + (w.name || w.class) + '"');
    parts.push('class = "' + w.class + '"');
    if (w.desc) parts.push('desc = "' + w.desc + '"');
    if (w.category) parts.push('category = "' + w.category + '"');
    if (w.rank) parts.push('rank = "' + w.rank + '"');
    if (w.spec) {
      if (Array.isArray(w.spec)) {
        if (w.spec.length === 1) parts.push('spec = "' + w.spec[0] + '"');
        else parts.push('spec = {' + w.spec.map(s => '"' + s + '"').join(', ') + '}');
      } else if (typeof w.spec === 'string' && w.spec.trim()) {
        parts.push('spec = "' + w.spec.trim() + '"');
      }
    }
    lua += '    { ' + parts.join(', ') + ' },\n';
  });
  lua += '}\n\n';

  lua += '-- ============================================================================\n';
  lua += '-- 2. КАТЕГОРИИ ОРУЖИЯ\n';
  lua += '-- ============================================================================\n';
  lua += 'NN_Arsenal.CategoryOrder = {\n';
  lua += '    "Табельное", "Карабины", "Винтовки", "Лучемёты",\n';
  lua += '    "Дробовики", "Взрывчатка", "Экипировка", "Ближнее",\n';
  lua += '}\n\n';

  lua += 'NN_Arsenal.Categories = {\n';
  arsenalState.weapons.forEach(w => {
    const cat = w.category || 'Табельное';
    lua += '    ["' + w.class + '"] = "' + cat + '",\n';
  });
  lua += '}\n\n';

  lua += '-- ============================================================================\n';
  lua += '-- 3. НАСТРОЙКИ МОДИФИКАЦИЙ ДЛЯ ОРУЖИЯ (ArcCW)\n';
  lua += '-- ============================================================================\n';
  lua += generateAttachmentsConfigLua();

  lua += 'NN_Arsenal.AttachmentRules = NN_Arsenal.AttachmentRules or {}\n';
  lua += 'for wepClass, slots in pairs(NN_Arsenal.AttachmentsConfig) do\n';
  lua += '    NN_Arsenal.AttachmentRules[wepClass] = {}\n';
  lua += '    for slotID, slotData in pairs(slots) do\n';
  lua += '        NN_Arsenal.AttachmentRules[wepClass][slotID] = {}\n';
  lua += '        for _, opt in ipairs(slotData.options or {}) do\n';
  lua += '            if opt.class and opt.class ~= "" then\n';
  lua += '                NN_Arsenal.AttachmentRules[wepClass][slotID][opt.class] = true\n';
  lua += '            end\n';
  lua += '        end\n';
  lua += '    end\n';
  lua += 'end\n\n';

  lua += '-- ============================================================================\n';
  lua += '-- 5. ВЕСА ЭЛЕМЕНТОВ БРОНИ И БОДИГРУПП (ARMOR_WEIGHT)\n';
  lua += '-- ============================================================================\n';
  lua += 'NN_Arsenal.ArmorWeights = NN_Arsenal.ArmorWeights or {\n';
  arsenalState.bodygroups.forEach(bg => {
    if (bg.weight && bg.weight > 0) {
      lua += '    ["' + bg.smd + '"] = ' + bg.weight + ',\n';
    }
  });
  lua += '}\n\n';

  lua += '-- ============================================================================\n';
  lua += '-- 8. ТАБЛИЦА РАНГОВ И ИХ ВЕСОВ ДЛЯ ПРОВЕРКИ ДОСТУПА\n';
  lua += '-- ============================================================================\n';
  lua += 'NN_Arsenal.RankWeights = NN_Arsenal.RankWeights or {}\n\n';
  lua += 'local defaultRankWeights = {\n';
  lua += '    ["CR"]               = 1, ["RCT"] = 1, ["CADET"] = 1, ["RECRUIT"] = 1,\n';
  lua += '    ["PV1"]              = 2, ["TRP"] = 2, ["TROOPER"] = 2, ["CLONE"] = 2,\n';
  lua += '    ["PV2"]              = 3, ["PVT"] = 3,\n';
  lua += '    ["PFC"]              = 4,\n';
  lua += '    ["SPC"]              = 5, ["SPECIALIST"] = 5,\n';
  lua += '    ["CPL"]              = 6, ["CORPORAL"] = 6,\n';
  lua += '    ["SGT"]              = 7, ["SERGEANT"] = 7,\n';
  lua += '    ["SSG"]              = 8, ["STAFF_SERGEANT"] = 8,\n';
  lua += '    ["MSG"]              = 9, ["MASTER_SERGEANT"] = 9,\n';
  lua += '    ["SGM"]              = 10, ["SERGEANT_MAJOR"] = 10, ["WO"] = 10, ["WARRANT_OFFICER"] = 10,\n';
  lua += '    ["2LT"]              = 11, ["JLT"] = 11, ["JUNIOR_LIEUTENANT"] = 11,\n';
  lua += '    ["1LT"]              = 12, ["LT"] = 12, ["LIEUTENANT"] = 12,\n';
  lua += '    ["SLT"]              = 13, ["SENIOR_LIEUTENANT"] = 13,\n';
  lua += '    ["CPT"]              = 14, ["CAPTAIN"] = 14,\n';
  lua += '    ["MAJ"]              = 15, ["MAJOR"] = 15,\n';
  lua += '    ["BAT"]              = 16, ["LTC"] = 16, ["LIEUTENANT_COLONEL"] = 16,\n';
  lua += '    ["CO"]               = 17,\n';
  lua += '    ["SCO"]              = 18, ["SENIOR_COMMANDER"] = 18,\n';
  lua += '    ["COL"]              = 19, ["COLONEL"] = 19,\n';
  lua += '    ["MC"]               = 20, ["MARSHAL_COMMANDER"] = 20, ["CDR"] = 20, ["CMDR"] = 20, ["COMMANDER"] = 20,\n';
  lua += '    ["GEN"]              = 21, ["GENERAL"] = 21,\n';
  lua += '    ["SGEN"]             = 22, ["SENIOR_GENERAL"] = 22,\n';
  lua += '    ["HGEN"]             = 23, ["HIGH_GENERAL"] = 23, ["ADM"] = 23, ["ADMIRAL"] = 23,\n';
  lua += '    ["JEDI"]             = 24,\n';
  lua += '    ["JCOM"]             = 25,\n';
  lua += '    ["JGEN"]             = 26,\n';
  lua += '}\n\n';
  lua += 'if nn and nn.Config and nn.Config.RankWeights then\n';
  lua += '    for k, v in pairs(nn.Config.RankWeights) do\n';
  lua += '        defaultRankWeights[string.upper(tostring(k))] = v\n';
  lua += '    end\n';
  lua += 'end\n\n';
  lua += 'for k, v in pairs(defaultRankWeights) do\n';
  lua += '    NN_Arsenal.RankWeights[k] = v\n';
  lua += 'end\n\n';
  lua += 'function NN_Arsenal.GetRankWeight(rankStr)\n';
  lua += '    if not rankStr or rankStr == "" then return 0 end\n';
  lua += '    local upper = string.upper(tostring(rankStr))\n';
  lua += '    if NN_Arsenal.RankWeights[upper] then\n';
  lua += '        return NN_Arsenal.RankWeights[upper]\n';
  lua += '    end\n';
  lua += '    if nn then\n';
  lua += '        if nn.Config and nn.Config.RankWeights then\n';
  lua += '            if nn.Config.RankWeights[upper] then return nn.Config.RankWeights[upper] end\n';
  lua += '            if nn.Config.RankWeights[rankStr] then return nn.Config.RankWeights[rankStr] end\n';
  lua += '        end\n';
  lua += '        if nn.RankWeights and nn.RankWeights[upper] then\n';
  lua += '            return nn.RankWeights[upper]\n';
  lua += '        end\n';
  lua += '        if nn.GetRankWeight then\n';
  lua += '            local w = nn.GetRankWeight(rankStr)\n';
  lua += '            if w and w > 0 then return w end\n';
  lua += '            w = nn.GetRankWeight(upper)\n';
  lua += '            if w and w > 0 then return w end\n';
  lua += '        end\n';
  lua += '    end\n';
  lua += '    return 0\n';
  lua += 'end\n\n';
  lua += 'if nn then\n';
  lua += '    nn.RankWeights = NN_Arsenal.RankWeights\n';
  lua += '    nn.GetRankWeight = NN_Arsenal.GetRankWeight\n';
  lua += 'end\n\n';

  lua += '-- Обратная совместимость\n';
  lua += 'ArsenalConfig = NN_Arsenal\n';
  return lua;
}

function generateArsenalExportCode() {
  const initTextarea = document.getElementById('export-init-lua-text');
  const clTextarea = document.getElementById('export-cl-lua-text');
  const shTextarea = document.getElementById('export-sh-lua-text');

  if (initTextarea) initTextarea.value = generateArsenalInitLua();
  if (clTextarea) clTextarea.value = generateArsenalClLua();
  if (shTextarea) shTextarea.value = generateArsenalSharedLua();
}

function downloadLuaBlob(filename, text) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
  showToast('Файл "' + filename + '" скачан', 'success');
}

function copyToClipboard(text, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message || 'Код скопирован в буфер обмена!', 'success');
    }).catch(() => {
      fallbackCopy(text, message);
    });
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast(message || 'Код скопирован в буфер обмена!', 'success');
}

// --------------------------------------------------------------------------
// EVENT LISTENERS SETUP
// --------------------------------------------------------------------------
function setupArsenalEventListeners() {


  const arFileInput = document.getElementById('arsenal-file-input');
  if (arFileInput) {
    arFileInput.onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => loadLuaString(evt.target.result, file.name);
      reader.readAsText(file);
      e.target.value = '';
    };
  }
  // Top nav switcher
  const jobsBtn = document.getElementById('tab-nav-jobs');
  const arsenalBtn = document.getElementById('tab-nav-arsenal');
  const invBtn = document.getElementById('tab-nav-inventory');
  const arccwBtn = document.getElementById('tab-nav-arccw');
  if (jobsBtn) jobsBtn.addEventListener('click', () => switchMainModule('jobs'));
  if (arsenalBtn) arsenalBtn.addEventListener('click', () => switchMainModule('arsenal'));
  if (invBtn) invBtn.addEventListener('click', () => switchMainModule('inventory'));
  if (arccwBtn) arccwBtn.addEventListener('click', () => switchMainModule('arccw'));

  // Arsenal subtabs
  document.querySelectorAll('.arsenal-subtab').forEach(btn => {
    btn.addEventListener('click', () => {
      switchArsenalSubtab(btn.getAttribute('data-subtab'));
    });
  });

  // Action buttons
  const btnAddWep = document.getElementById('btn-arsenal-add-wep');
  const btnAddBg = document.getElementById('btn-arsenal-add-bg');
  const btnExportTab = document.getElementById('btn-arsenal-export-tab');

  if (btnAddWep) btnAddWep.addEventListener('click', openAddWeaponModal);
  if (btnAddBg) btnAddBg.addEventListener('click', openAddBgModal);
  if (btnExportTab) btnExportTab.addEventListener('click', () => switchArsenalSubtab('export'));
  const btnAddAtt = document.getElementById('btn-arsenal-add-att');
  if (btnAddAtt) btnAddAtt.addEventListener('click', () => openArsenalAttModal());

  // Searches
  const wepSearch = document.getElementById('arsenal-wep-search');
  if (wepSearch) {
    wepSearch.addEventListener('input', (e) => {
      arsenalState.wepSearch = e.target.value;
      renderArsenalWeapons();
    });
  }

  const bgSearch = document.getElementById('arsenal-bg-search');
  if (bgSearch) {
    bgSearch.addEventListener('input', (e) => {
      arsenalState.bgSearch = e.target.value;
      renderArsenalBodygroups();
    });
  }

  // Weapon form submit
  const wepForm = document.getElementById('arsenal-wep-form');
  if (wepForm) {
    wepForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const origClass = document.getElementById('modal-wep-original-class').value;
      const name = document.getElementById('modal-wep-name').value.trim();
      const cls = document.getElementById('modal-wep-class').value.trim();
      const cat = document.getElementById('modal-wep-cat').value;
      const weight = parseFloat(document.getElementById('modal-wep-weight').value) || 1.0;
      const rank = document.getElementById('modal-wep-rank').value;
      const specRaw = document.getElementById('modal-wep-spec').value.trim();
      const desc = document.getElementById('modal-wep-desc').value.trim();

      let spec = '';
      if (specRaw.includes(',')) {
        spec = specRaw.split(',').map(s => s.trim()).filter(Boolean);
      } else {
        spec = specRaw;
      }

      const wepObj = {
        name: name,
        class: cls,
        category: cat,
        weight: weight,
        rank: rank,
        spec: spec,
        desc: desc
      };

      if (origClass) {
        // Edit existing
        const idx = arsenalState.weapons.findIndex(w => w.class === origClass);
        if (idx !== -1) arsenalState.weapons[idx] = wepObj;
        else arsenalState.weapons.push(wepObj);
      } else {
        // Add new
        arsenalState.weapons.push(wepObj);
      }

      saveArsenalState();
      document.getElementById('arsenal-wep-modal').style.display = 'none';
      renderArsenalWeapons();
      showToast('Оружие "' + name + '" сохранено', 'success');
    });
  }

  // Bodygroup form submit
  const bgForm = document.getElementById('arsenal-bg-form');
  if (bgForm) {
    bgForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const origSmd = document.getElementById('modal-bg-original-smd').value;
      const smd = document.getElementById('modal-bg-smd').value.trim();
      const name = document.getElementById('modal-bg-name').value.trim();
      const cat = document.getElementById('modal-bg-cat').value;
      const weight = parseFloat(document.getElementById('modal-bg-weight').value) || 0;
      const rank = document.getElementById('modal-bg-rank').value;
      const spec = document.getElementById('modal-bg-spec').value.trim();
      const desc = document.getElementById('modal-bg-desc').value.trim();

      const bgObj = {
        smd: smd,
        name: name,
        category: cat,
        weight: weight,
        reqRank: rank,
        reqSpec: spec,
        desc: desc
      };

      if (weight > 0) arsenalState.armorWeights[smd] = weight;
      else delete arsenalState.armorWeights[smd];

      if (origSmd) {
        const idx = arsenalState.bodygroups.findIndex(b => b.smd === origSmd);
        if (idx !== -1) arsenalState.bodygroups[idx] = bgObj;
        else arsenalState.bodygroups.push(bgObj);
      } else {
        arsenalState.bodygroups.push(bgObj);
      }

      saveArsenalState();
      document.getElementById('arsenal-bg-modal').style.display = 'none';
      renderArsenalBodygroups();
      showToast('Бодигруппа "' + name + '" сохранена', 'success');
    });
  }

  // Close modals buttons
  const modalWepClose = document.getElementById('modal-wep-close');
  const modalWepCancel = document.getElementById('modal-wep-cancel');
  if (modalWepClose) modalWepClose.addEventListener('click', () => document.getElementById('arsenal-wep-modal').style.display = 'none');
  if (modalWepCancel) modalWepCancel.addEventListener('click', () => document.getElementById('arsenal-wep-modal').style.display = 'none');

  const modalBgClose = document.getElementById('modal-bg-close');
  const modalBgCancel = document.getElementById('modal-bg-cancel');
  if (modalBgClose) modalBgClose.addEventListener('click', () => document.getElementById('arsenal-bg-modal').style.display = 'none');
  if (modalBgCancel) modalBgCancel.addEventListener('click', () => document.getElementById('arsenal-bg-modal').style.display = 'none');

  // Copy & Download buttons
  const copyInitBtn = document.getElementById('btn-copy-init-lua');
  if (copyInitBtn) copyInitBtn.addEventListener('click', () => copyToClipboard(generateArsenalInitLua(), 'Серверные таблицы скопированы!'));

  const downloadInitBtn = document.getElementById('btn-download-init-lua');
  if (downloadInitBtn) downloadInitBtn.addEventListener('click', () => downloadLuaBlob('init_arsenal_rules.lua', generateArsenalInitLua()));

  const copyClBtn = document.getElementById('btn-copy-cl-lua');
  if (copyClBtn) copyClBtn.addEventListener('click', () => copyToClipboard(generateArsenalClLua(), 'Клиентские таблицы скопированы!'));

  const downloadClBtn = document.getElementById('btn-download-cl-lua');
  if (downloadClBtn) downloadClBtn.addEventListener('click', () => downloadLuaBlob('cl_arsenal_config.lua', generateArsenalClLua()));

  const copyShBtn = document.getElementById('btn-copy-sh-lua');
  if (copyShBtn) copyShBtn.addEventListener('click', () => copyToClipboard(generateArsenalSharedLua(), 'sh_arsenal_config.lua скопирован!'));

  const downloadShBtn = document.getElementById('btn-download-sh-lua');
  if (downloadShBtn) downloadShBtn.addEventListener('click', () => downloadLuaBlob('sh_arsenal_config.lua', generateArsenalSharedLua()));

  const saveShServerBtn = document.getElementById('btn-save-sh-server');
  if (saveShServerBtn) {
    saveShServerBtn.addEventListener('click', async () => {
      const lua = generateArsenalSharedLua();
      const liveApi = (typeof api !== 'undefined' && api) || window.api;
      if (liveApi && liveApi.socket && liveApi.socket.readyState === 1) {
        liveApi.sendCommand('editor_save_arsenal', '', { lua: lua });
        showToast('sh_arsenal_config.lua отправлен и сохранён на сервере!', 'success');
        return;
      }
      downloadLuaBlob('sh_arsenal_config.lua', lua);
      showToast('sh_arsenal_config.lua скачан!', 'success');
    });
  }
}

// ==========================================================================
// SPECIAL EQUIPMENT & INVENTORY CONTROLLER & MODULE
// ==========================================================================

const inventoryState = {
  items: [],
  wepWeights: {},
  ranks: ["RCT", "PV1", "PV2", "PFC", "SPC", "CPL", "SGT", "SSG", "MSG", "SGM", "JLT", "LT", "SLT", "CPT", "MAJ", "LTC", "CO", "SCO", "COL", "MC"],
  specs: ["ARC", "CM", "SO", "Mando", "ARF", "AG", "UNV", "RC", "PRT", "MSC", "ENG", "PRG", "MRK", "SN", "SM", "HEV", "DM", "SD", "SK", "GH", "GN", "MED", "FA", "PR", "MN", "REC", "ART", "Hound", "Boss", "Scorch", "Fixer", "Sev", "Niner", "Darman", "Atin", "Fi"],
  activeSubtab: 'items',
  itemSearch: '',
  itemCatFilter: '',
  weightSearch: ''
};

async function initInventoryModule() {
  // 1. Try to fetch live data from server if running under HTTP
  let loadedFromServer = false;
  if (window.location.protocol.startsWith('http') || window.location.hostname.includes('github.io')) {
    try {
      const res = await fetch(getApiUrl('/api/inventory'));
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.items) && data.items.length > 0) {
          inventoryState.items = data.items;
          inventoryState.wepWeights = data.wepWeights || {};
          loadedFromServer = true;
        }
      }
    } catch (e) {
      console.warn('Could not fetch /api/inventory:', e);
    }
  }

  // 2. LocalStorage cache
  if (!loadedFromServer) {
    try {
      const cached = localStorage.getItem('swrp_inventory_saved_data');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && Array.isArray(parsed.items) && parsed.items.length > 0) {
          inventoryState.items = parsed.items;
          inventoryState.wepWeights = parsed.wepWeights || {};
          loadedFromServer = true;
        }
      }
    } catch (e) {
      console.warn('Could not load cached inventory data:', e);
    }
  }

  // 3. Fallback to BUNDLED_INVENTORY_DATA
  if (!loadedFromServer && typeof BUNDLED_INVENTORY_DATA !== 'undefined') {
    inventoryState.items = JSON.parse(JSON.stringify(BUNDLED_INVENTORY_DATA.items || []));
    inventoryState.wepWeights = JSON.parse(JSON.stringify(BUNDLED_INVENTORY_DATA.wepWeights || {}));
  }

  updateInventoryBadges();
  setupInventoryEventListeners();
}

function saveInventoryState() {
  try {
    localStorage.setItem('swrp_inventory_saved_data', JSON.stringify({
      items: inventoryState.items,
      wepWeights: inventoryState.wepWeights
    }));
  } catch (e) {
    console.warn('Could not save inventory to localStorage:', e);
  }
  updateInventoryBadges();
  generateInventoryExportCode();
}

function updateInventoryBadges() {
  const modCount = document.getElementById('mod-inventory-count');
  const statItems = document.getElementById('stat-inv-items');
  const statWeights = document.getElementById('stat-inv-weights');
  const countItems = document.getElementById('count-invsubtab-items');
  const countWeights = document.getElementById('count-invsubtab-weights');

  const itemsLen = inventoryState.items.length;
  const weightsLen = Object.keys(inventoryState.wepWeights).length;

  if (modCount) modCount.textContent = itemsLen;
  if (statItems) statItems.textContent = itemsLen;
  if (statWeights) statWeights.textContent = weightsLen;
  if (countItems) countItems.textContent = itemsLen;
  if (countWeights) countWeights.textContent = weightsLen;
}

function switchInventorySubtab(subtabName) {
  inventoryState.activeSubtab = subtabName;
  document.querySelectorAll('[data-invsubtab]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-invsubtab') === subtabName);
  });

  const panes = {
    'items': document.getElementById('inv-pane-items'),
    'weights': document.getElementById('inv-pane-weights'),
    'export': document.getElementById('inv-pane-export')
  };

  Object.keys(panes).forEach(k => {
    if (panes[k]) panes[k].style.display = (k === subtabName) ? 'block' : 'none';
  });

  renderInventorySubtab(subtabName);
}

function renderInventorySubtab(subtabName) {
  if (subtabName === 'items') {
    renderInventoryItems();
  } else if (subtabName === 'weights') {
    renderInventoryWeights();
  } else if (subtabName === 'export') {
    generateInventoryExportCode();
  }
}

function getInventoryCategory(itm) {
  const c = (itm.class || '').toLowerCase();
  const s = (itm.spec || '').toUpperCase();
  if (c.includes('medkit') || c.includes('injector') || c.includes('painkiller') || c.includes('datapad') || s === 'MED' || s === 'FA') {
    return { id: 'med', label: 'Медицина' };
  }
  if (c.includes('ammo') || c.includes('nade') || c.includes('mine')) {
    return { id: 'ammo', label: 'Боеприпасы' };
  }
  if (c.includes('mortar') || c.includes('flare') || c.includes('artillery') || s === 'GN' || s === 'ART') {
    return { id: 'fire', label: 'Огневая мощь' };
  }
  if (c.includes('drone') || c.includes('cutter') || c.includes('repair') || c.includes('build') || c.includes('shield') || s === 'ENG' || s === 'MN' || s === 'REC') {
    return { id: 'eng', label: 'Инженерия' };
  }
  return { id: 'other', label: 'Снаряжение' };
}

function renderInventoryItems() {
  const container = document.getElementById('inventory-items-table-body');
  if (!container) return;

  const term = (inventoryState.itemSearch || '').toLowerCase().trim();
  const catFilter = inventoryState.itemCatFilter;

  const filtered = inventoryState.items.filter(itm => {
    const cat = getInventoryCategory(itm);
    if (catFilter && cat.id !== catFilter) return false;
    if (term) {
      const matchClass = (itm.class || '').toLowerCase().includes(term);
      const matchName = (itm.name || '').toLowerCase().includes(term);
      const matchRank = (itm.rank || '').toLowerCase().includes(term);
      const matchSpec = (itm.spec || '').toLowerCase().includes(term);
      if (!matchClass && !matchName && !matchRank && !matchSpec) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<tr><td colspan="9" style="text-align: center; padding: 30px; color: var(--text-muted);">Предметы не найдены</td></tr>';
    return;
  }

  let html = '';
  filtered.forEach(itm => {
    const originalIndex = inventoryState.items.indexOf(itm);
    const cat = getInventoryCategory(itm);
    const rankBadge = itm.rank ? '<span class="req-badge rank">🎖 ' + escapeHtml(itm.rank) + '</span>' : '<span style="color: var(--text-muted); font-size: 12px;">—</span>';
    const specBadge = itm.spec ? '<span class="req-badge spec">[' + escapeHtml(itm.spec) + ']</span>' : '<span style="color: var(--text-muted); font-size: 12px;">—</span>';
    const consumableTag = itm.consumable_wep ? '<span style="color: #f59e0b; font-weight: 700; font-size: 11px;">ДА</span>' : '<span style="color: var(--text-muted); font-size: 11px;">НЕТ</span>';

    html += '<tr>';
    html += '  <td class="wep-class-code">' + escapeHtml(itm.class) + '</td>';
    html += '  <td><strong>' + escapeHtml(itm.name || itm.class) + '</strong></td>';
    html += '  <td><span class="inv-cat-pill">' + escapeHtml(cat.label) + '</span></td>';
    html += '  <td><span class="inv-type-pill">' + escapeHtml(itm.type || 'weapon') + '</span></td>';
    html += '  <td><span class="inv-weight-badge">' + (itm.weight || 0) + ' кг</span></td>';
    html += '  <td>' + consumableTag + '</td>';
    html += '  <td>' + rankBadge + '</td>';
    html += '  <td>' + specBadge + '</td>';
    html += '  <td style="text-align: right; white-space: nowrap;">';
    html += '    <button class="btn btn-secondary btn-sm" onclick="openEditInvItemModal(' + originalIndex + ')">Изменить</button> ';
    html += '    <button class="btn btn-danger btn-sm" onclick="deleteInvItem(' + originalIndex + ')">&times;</button>';
    html += '  </td>';
    html += '</tr>';
  });

  container.innerHTML = html;
}

function renderInventoryWeights() {
  const container = document.getElementById('inventory-weights-table-body');
  if (!container) return;

  const term = (inventoryState.weightSearch || '').toLowerCase().trim();
  const entries = Object.entries(inventoryState.wepWeights).sort((a, b) => a[0].localeCompare(b[0]));

  const filtered = entries.filter(([cls]) => {
    if (term && !cls.toLowerCase().includes(term)) return false;
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<tr><td colspan="3" style="text-align: center; padding: 30px; color: var(--text-muted);">Записи о весах не найдены</td></tr>';
    return;
  }

  let html = '';
  filtered.forEach(([cls, weight]) => {
    html += '<tr>';
    html += '  <td class="wep-class-code" style="font-size: 13px;">' + escapeHtml(cls) + '</td>';
    html += '  <td><span class="inv-weight-badge" style="font-size: 13px;">' + weight + ' кг</span></td>';
    html += '  <td style="text-align: right; white-space: nowrap;">';
    html += '    <button class="btn btn-secondary btn-sm" onclick="openEditInvWeightModal(\'' + escapeHtml(cls) + '\', ' + weight + ')">Изменить</button> ';
    html += '    <button class="btn btn-danger btn-sm" onclick="deleteInvWeight(\'' + escapeHtml(cls) + '\')">&times;</button>';
    html += '  </td>';
    html += '</tr>';
  });

  container.innerHTML = html;
}

function openAddInvItemModal() {
  document.getElementById('modal-invitem-title').textContent = 'Добавить спец. предмет';
  document.getElementById('modal-invitem-original-class').value = '';
  document.getElementById('modal-invitem-class').value = '';
  document.getElementById('modal-invitem-name').value = '';
  document.getElementById('modal-invitem-type').value = 'weapon';
  document.getElementById('modal-invitem-weight').value = '1.0';
  document.getElementById('modal-invitem-icon').value = 'icon16/wrench.png';
  document.getElementById('modal-invitem-spec').value = '';
  document.getElementById('modal-invitem-consumable').checked = false;

  populateInvItemRankSelect('');
  document.getElementById('inv-item-modal').style.display = 'flex';
}

function openEditInvItemModal(index) {
  const itm = inventoryState.items[index];
  if (!itm) return;

  document.getElementById('modal-invitem-title').textContent = 'Редактировать: ' + (itm.name || itm.class);
  document.getElementById('modal-invitem-original-class').value = itm.class;
  document.getElementById('modal-invitem-class').value = itm.class;
  document.getElementById('modal-invitem-name').value = itm.name || '';
  document.getElementById('modal-invitem-type').value = itm.type || 'weapon';
  document.getElementById('modal-invitem-weight').value = itm.weight !== undefined ? itm.weight : 1.0;
  document.getElementById('modal-invitem-icon').value = itm.icon || 'icon16/wrench.png';
  document.getElementById('modal-invitem-spec').value = itm.spec || '';
  document.getElementById('modal-invitem-consumable').checked = !!itm.consumable_wep;

  populateInvItemRankSelect(itm.rank);
  document.getElementById('inv-item-modal').style.display = 'flex';
}

function populateInvItemRankSelect(selectedRank) {
  const rankSel = document.getElementById('modal-invitem-rank');
  if (!rankSel) return;
  rankSel.innerHTML = '<option value="">Без ограничения по званию (Любое)</option>';
  inventoryState.ranks.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r;
    opt.textContent = r;
    if (r === selectedRank) opt.selected = true;
    rankSel.appendChild(opt);
  });
}

function deleteInvItem(index) {
  const itm = inventoryState.items[index];
  if (!itm) return;
  if (confirm('Удалить предмет "' + (itm.name || itm.class) + '" из базы инвентаря?')) {
    inventoryState.items.splice(index, 1);
    saveInventoryState();
    renderInventoryItems();
    showToast('Предмет удалён', 'info');
  }
}

function openAddInvWeightModal() {
  document.getElementById('modal-invweight-title').textContent = 'Добавить вес оружия';
  document.getElementById('modal-invweight-original-class').value = '';
  document.getElementById('modal-invweight-class').value = '';
  document.getElementById('modal-invweight-val').value = '4.0';
  document.getElementById('inv-weight-modal').style.display = 'flex';
}

function openEditInvWeightModal(cls, weight) {
  document.getElementById('modal-invweight-title').textContent = 'Редактировать вес: ' + cls;
  document.getElementById('modal-invweight-original-class').value = cls;
  document.getElementById('modal-invweight-class').value = cls;
  document.getElementById('modal-invweight-val').value = weight;
  document.getElementById('inv-weight-modal').style.display = 'flex';
}

function deleteInvWeight(cls) {
  if (confirm('Удалить запись о весе для оружия "' + cls + '"?')) {
    delete inventoryState.wepWeights[cls];
    saveInventoryState();
    renderInventoryWeights();
    showToast('Вес оружия удалён', 'info');
  }
}

function generateInventoryLua() {
  let lua = '-- ============================================================================\n';
  lua += '-- Единая конфигурация инвентаря, предметов, весов оружия/брони и рангов\n';
  lua += '-- (Single Source of Truth)\n';
  lua += '-- Сгенерировано через COLLAPSAR Web Editor: ' + new Date().toLocaleString() + '\n';
  lua += '-- ============================================================================\n\n';

  lua += 'nn = nn or {}\n';
  lua += 'nn.Config = nn.Config or {}\n';
  lua += 'nn.Inventory = nn.Inventory or {}\n\n';

  lua += '-- ============================================================================\n';
  lua += '-- 1. СИСТЕМА ЗВАНИЙ (20 званий по 4 категориям + обратная совместимость)\n';
  lua += '-- ============================================================================\n\n';

  lua += 'nn.Config.Ranks = {\n';
  lua += '    -- Рядовой состав\n';
  lua += '    { code = "RCT", name = "Рекрут",                 group = "Рядовой состав",            weight = 1 },\n';
  lua += '    { code = "PV1", name = "Рядовой Новобранец",      group = "Рядовой состав",            weight = 2 },\n';
  lua += '    { code = "PV2", name = "Рядовой",                 group = "Рядовой состав",            weight = 3 },\n';
  lua += '    { code = "PFC", name = "Рядовой Первого Класса",  group = "Рядовой состав",            weight = 4 },\n';
  lua += '    { code = "SPC", name = "Специалист",              group = "Рядовой состав",            weight = 5 },\n';
  lua += '    { code = "CPL", name = "Капрал",                  group = "Рядовой состав",            weight = 6 },\n\n';
  lua += '    -- Младший офицерский состав\n';
  lua += '    { code = "SGT", name = "Сержант",                 group = "Младший офицерский состав",  weight = 7 },\n';
  lua += '    { code = "SSG", name = "Старший Сержант",         group = "Младший офицерский состав",  weight = 8 },\n';
  lua += '    { code = "MSG", name = "Мастер Сержант",          group = "Младший офицерский состав",  weight = 9 },\n';
  lua += '    { code = "SGM", name = "Сержант Майор",           group = "Младший офицерский состав",  weight = 10 },\n';
  lua += '    { code = "JLT", name = "Младший Лейтенант",       group = "Младший офицерский состав",  weight = 11 },\n';
  lua += '    { code = "LT",  name = "Лейтенант",               group = "Младший офицерский состав",  weight = 12 },\n';
  lua += '    { code = "SLT", name = "Старший Лейтенант",       group = "Младший офицерский состав",  weight = 13 },\n\n';
  lua += '    -- Офицерский состав\n';
  lua += '    { code = "CPT", name = "Капитан",                 group = "Офицерский состав",         weight = 14 },\n';
  lua += '    { code = "MAJ", name = "Майор",                   group = "Офицерский состав",         weight = 15 },\n';
  lua += '    { code = "LTC", name = "Подполковник",             group = "Офицерский состав",         weight = 16 },\n\n';
  lua += '    -- Командный состав\n';
  lua += '    { code = "CO",  name = "Коммандер",               group = "Командный состав",          weight = 17 },\n';
  lua += '    { code = "SCO", name = "Старший Коммандер",       group = "Командный состав",          weight = 18 },\n';
  lua += '    { code = "COL", name = "Полковник",               group = "Командный состав",          weight = 19 },\n';
  lua += '    { code = "MC",  name = "Маршал Коммандер",        group = "Командный состав",          weight = 20 },\n';
  lua += '}\n\n';

  lua += 'nn.Config.RankOrder = {\n';
  lua += '    "RCT", "PV1", "PV2", "PFC", "SPC", "CPL",\n';
  lua += '    "SGT", "SSG", "MSG", "SGM", "JLT", "LT", "SLT",\n';
  lua += '    "CPT", "MAJ", "LTC",\n';
  lua += '    "CO", "SCO", "COL", "MC"\n';
  lua += '}\n\n';

  lua += 'nn.Config.RankNames = {\n';
  lua += '    RCT = "Рекрут",\n    PV1 = "Рядовой Новобранец",\n    PV2 = "Рядовой",\n    PFC = "Рядовой Первого Класса",\n';
  lua += '    SPC = "Специалист",\n    CPL = "Капрал",\n    SGT = "Сержант",\n    SSG = "Старший Сержант",\n';
  lua += '    MSG = "Мастер Сержант",\n    SGM = "Сержант Майор",\n    JLT = "Младший Лейтенант",\n    LT  = "Лейтенант",\n';
  lua += '    SLT = "Старший Лейтенант",\n    CPT = "Капитан",\n    MAJ = "Майор",\n    LTC = "Подполковник",\n';
  lua += '    CO  = "Коммандер",\n    SCO = "Старший Коммандер",\n    COL = "Полковник",\n    MC  = "Маршал Коммандер",\n';
  lua += '}\n\n';

  lua += 'nn.Config.RankWeights = {\n';
  lua += '    RCT  = 1,\n    PV1  = 2,\n    PV2  = 3,\n    PFC  = 4,\n    SPC  = 5,\n    CPL  = 6,\n';
  lua += '    SGT  = 7,\n    SSG  = 8,\n    MSG  = 9,\n    SGM  = 10,\n    JLT  = 11,\n    LT   = 12,\n';
  lua += '    SLT  = 13,\n    CPT  = 14,\n    MAJ  = 15,\n    LTC  = 16,\n    CO   = 17,\n    SCO  = 18,\n';
  lua += '    COL  = 19,\n    MC   = 20,\n';
  lua += '    -- Алиасы для старых сохранений в БД и совместимости\n';
  lua += '    TRP = 2, PVT = 3, CPT1 = 14, CPT2 = 14, CMDR = 17, GEN = 21, SGEN = 22, HGEN = 23, Jedi = 24, JCOM = 25, JGEN = 26\n';
  lua += '}\n\n';

  lua += 'function nn.GetRankWeight(rankCode)\n';
  lua += '    if not rankCode or rankCode == "" then return 0 end\n';
  lua += '    local upper = string.upper(tostring(rankCode))\n';
  lua += '    if nn.Config and nn.Config.RankWeights then\n';
  lua += '        if nn.Config.RankWeights[upper] then return nn.Config.RankWeights[upper] end\n';
  lua += '        if nn.Config.RankWeights[rankCode] then return nn.Config.RankWeights[rankCode] end\n';
  lua += '    end\n';
  lua += '    if NN_Arsenal and NN_Arsenal.RankWeights and NN_Arsenal.RankWeights[upper] then\n';
  lua += '        return NN_Arsenal.RankWeights[upper]\n';
  lua += '    end\n';
  lua += '    return 0\n';
  lua += 'end\n\n';

  lua += 'function nn.GetRankName(rankCode)\n';
  lua += '    if not rankCode or rankCode == "" then return "Без звания" end\n';
  lua += '    return nn.Config.RankNames[rankCode] or rankCode\n';
  lua += 'end\n\n';

  lua += 'GetRankWeight = nn.GetRankWeight\n';
  lua += 'GetRankName = nn.GetRankName\n';
  lua += 'RANK_WEIGHTS = nn.Config.RankWeights\n';
  lua += 'RANK_NAMES = nn.Config.RankNames\n\n';

  lua += '-- ============================================================================\n';
  lua += '-- 2. ЕДИНАЯ БАЗА ПРЕДМЕТОВ (Инвентарь, Склад, Ящики)\n';
  lua += '-- ============================================================================\n';
  lua += 'nn.Inventory.Items = {\n';

  inventoryState.items.forEach(itm => {
    lua += '    ["' + itm.class + '"] = {\n';
    lua += '        name = "' + (itm.name || itm.class) + '",\n';
    lua += '        weight = ' + (itm.weight !== undefined ? itm.weight : 1) + ',\n';
    lua += '        icon = "' + (itm.icon || 'icon16/wrench.png') + '",\n';
    lua += '        type = "' + (itm.type || 'weapon') + '"';
    if (itm.rank) lua += ',\n        rank = \'' + itm.rank + '\'';
    if (itm.spec) lua += ',\n        spec = \'' + itm.spec + '\'';
    if (itm.consumable_wep) lua += ',\n        consumable_wep = true';
    lua += '\n    },\n';
  });

  lua += '}\n\n';
  lua += 'STORAGE_ITEM_DB = nn.Inventory.Items\n';
  lua += 'ITEM_DB = nn.Inventory.Items\n\n';

  lua += '-- ============================================================================\n';
  lua += '-- 3. ВЕСА ОРУЖИЯ (Полная объединённая база)\n';
  lua += '-- ============================================================================\n';
  lua += 'nn.Config.WeaponWeights = {\n';

  const sortedWeights = Object.entries(inventoryState.wepWeights).sort((a, b) => a[0].localeCompare(b[0]));
  sortedWeights.forEach(([cls, w]) => {
    const pad = ' '.repeat(Math.max(1, 38 - cls.length));
    lua += '    ["' + cls + '"]' + pad + '= ' + w + ',\n';
  });

  lua += '}\n\n';

  lua += '-- ============================================================================\n';
  lua += '-- 4. ВЕС ЭЛЕМЕНТОВ БРОНИ\n';
  lua += '-- ============================================================================\n';
  lua += 'nn.Config.ArmorWeights = {\n';
  lua += '    ["RightPauldron.smd"] = 3,\n    ["LeftPauldron.smd"] = 3,\n    ["DualPauldron.smd"] = 3,\n';
  lua += '    ["SuperPauldron.smd"] = 6,\n    ["Pauldron_alpha.smd"] = 6,\n    ["fordo_pauldron.smd"] = 6,\n    ["a17_pauldron.smd"] = 6,\n';
  lua += '    ["arc_chestplate.smd"] = 10,\n    ["Strap_body2.smd"] = 2,\n    ["arc_backpack.smd"] = 0.5,\n';
  lua += '    ["Backpack.smd"] = 3,\n    ["Backpack_small.smd"] = 1.5,\n    ["Jetpack.smd"] = 15,\n    ["Jumppack.smd"] = 7.5,\n';
  lua += '    ["Kama.smd"] = 5,\n    ["Kama+.smd"] = 5,\n    ["a17_kama.smd"] = 5,\n';
  lua += '}\n\n';

  lua += 'ARMOR_WEIGHT = nn.Config.ArmorWeights\n\n';
  lua += '-- ============================================================================\n';
  lua += '-- 5. ОБЩИЕ ФУНКЦИИ РАСЧЁТА СЛОТОВ И ВЕСА (Shared)\n';
  lua += '-- ============================================================================\n';
  lua += '-- Модели с встроенными рюкзаками (без отдельной бодигруппы, исключительно Republic Commando)\n';
  lua += 'nn.Config.BuiltinBackpackModels = {\n';
  lua += '    ["models/rc/rc_combo1.mdl"] = 8,\n';
  lua += '}\n\n';
  lua += 'function nn.Inventory.GetMaxSlots(ply)\n';
  lua += '    if not IsValid(ply) then return 2 end\n\n';
  lua += '    local mdl = string.lower(string.gsub(ply:GetModel() or "", "\\\\", "/"))\n';
  lua += '    local isARCModel = string.find(mdl, "arc") ~= nil or string.find(mdl, "alpha") ~= nil\n\n';
  lua += '    -- 1. Проверка профессии (ТОЛЬКО для Republic Commando / RC)\n';
  lua += '    local job = (nn.util and nn.util.getjob and nn.util.getjob(ply:Team())) or (nn.jobs and nn.jobs[ply:Team()])\n';
  lua += '    local isARCJob = false\n';
  lua += '    if job then\n';
  lua += '        if job.backpack_slots then\n';
  lua += '            return job.backpack_slots\n';
  lua += '        end\n';
  lua += '        isARCJob = (job.spec == "ARC") or (job.jobID and string.find(string.lower(job.jobID), "arc") ~= nil) or (job.Name and string.find(string.lower(job.Name), "arc") ~= nil)\n';
  lua += '        if not isARCJob then\n';
  lua += '            if job.has_backpack or job.spec == \'RC\' or (job.jobID and string.StartWith(job.jobID, \'RC\')) or (job.Name and string.find(job.Name, "RC") ~= nil) then\n';
  lua += '                return 8\n';
  lua += '            end\n';
  lua += '        end\n';
  lua += '    end\n\n';
  lua += '    -- 2. Проверка моделей с встроенным рюкзаком (ТОЛЬКО Republic Commando, НЕ ARC!)\n';
  lua += '    if not isARCModel and not isARCJob then\n';
  lua += '        if nn.Config.BuiltinBackpackModels and nn.Config.BuiltinBackpackModels[mdl] then\n';
  lua += '            return nn.Config.BuiltinBackpackModels[mdl]\n';
  lua += '        end\n\n';
  lua += '        if string.find(mdl, "/rc/") or string.find(mdl, "models/rc") or string.find(mdl, "/rc_") or string.find(mdl, "rc_combo") or string.find(mdl, "republic_commando") then\n';
  lua += '            return 8\n';
  lua += '        end\n';
  lua += '    end\n\n';
  lua += '    -- 3. Проверка надетого рюкзака через бодигруппы (ARC и другие клоны надевают через Арсенал)\n';
  lua += '    for _, bg in ipairs(ply:GetBodyGroups() or {}) do\n';
  lua += '        local val = ply:GetBodygroup(bg.id)\n';
  lua += '        if val > 0 and bg.submodels and bg.submodels[val] then\n';
  lua += '            local smd = string.lower(bg.submodels[val])\n';
  lua += '            if not string.find(smd, "jetpack") and not string.find(smd, "jumppack") and not string.find(smd, "radio") and not string.find(smd, "empty") then\n';
  lua += '                if smd == "backpack.smd" or smd == "arc_backpack.smd" then\n';
  lua += '                    return 8\n';
  lua += '                elseif smd == "backpack_small.smd" then\n';
  lua += '                    return 5\n';
  lua += '                elseif string.find(smd, "backpack") or string.find(smd, "bag") or string.find(smd, "ранец") or string.find(smd, "рюкзак") then\n';
  lua += '                    return 8\n';
  lua += '                end\n';
  lua += '            end\n';
  lua += '        end\n';
  lua += '    end\n\n';
  lua += '    for _, name in ipairs({ "backpack", "Backpack", "рюкзак", "bag" }) do\n';
  lua += '        local bgID = ply:FindBodygroupByName(name)\n';
  lua += '        if bgID and bgID ~= -1 then\n';
  lua += '            local bgVal = ply:GetBodygroup(bgID)\n';
  lua += '            if bgVal > 0 then\n';
  lua += '                return (bgVal == 1) and 5 or 8\n';
  lua += '            end\n';
  lua += '        end\n';
  lua += '    end\n\n';
  lua += '    return 2\n';
  lua += 'end\n\n';
  lua += 'function nn.Inventory.GetMaxWeight(ply)\n';
  lua += '    if not IsValid(ply) then return 50 end\n';
  lua += '    return 50 -- Базовый максимальный вес (кг)\n';
  lua += 'end\n\n';
  lua += '-- Обратная совместимость\n';
  lua += 'GetPlayerMaxSlots = nn.Inventory.GetMaxSlots\n';
  lua += 'GetPlayerMaxWeight = nn.Inventory.GetMaxWeight\n';
  lua += 'GetAvailableSlots = nn.Inventory.GetMaxSlots\n\n';
  lua += 'function nn.GetWeaponWeight(class, default)\n';
  lua += '    if not class then return default or 2.5 end\n';
  lua += '    local w = (nn.Config and nn.Config.WeaponWeights and nn.Config.WeaponWeights[class])\n';
  lua += '        or (NN_Arsenal and NN_Arsenal.WeaponWeights and NN_Arsenal.WeaponWeights[class])\n';
  lua += '        or (nn.Inventory and nn.Inventory.Items and nn.Inventory.Items[class] and nn.Inventory.Items[class].weight)\n';
  lua += '        or (ITEM_DB and ITEM_DB[class] and ITEM_DB[class].weight)\n';
  lua += '    return w or default or 2.5\n';
  lua += 'end\n\n';
  lua += 'function nn.GetArmorWeight(smd, default)\n';
  lua += '    if not smd or smd == "" or smd == "empty" then return 0 end\n';
  lua += '    local weights = (NN_Arsenal and NN_Arsenal.ArmorWeights)\n';
  lua += '        or (nn.Config and nn.Config.ArmorWeights)\n';
  lua += '        or ARMOR_WEIGHT\n';
  lua += '        or {}\n\n';
  lua += '    if weights[smd] then return weights[smd] end\n';
  lua += '    local clean = string.match(smd, "[^/\\\\\\\\]+$") or smd\n';
  lua += '    if weights[clean] then return weights[clean] end\n\n';
  lua += '    local lowerClean = string.lower(clean)\n';
  lua += '    for k, val in pairs(weights) do\n';
  lua += '        if string.lower(k) == lowerClean or string.lower(string.match(k, "[^/\\\\\\\\]+$") or k) == lowerClean then\n';
  lua += '            return val\n';
  lua += '        end\n';
  lua += '    end\n';
  lua += '    return default or 0\n';
  lua += 'end\n\n';
  lua += 'GetWeaponWeight = nn.GetWeaponWeight\n';
  lua += 'GetArmorWeight = nn.GetArmorWeight\n';

  return lua;
}

function generateInventoryExportCode() {
  const invTextarea = document.getElementById('export-inv-lua-text');
  if (invTextarea) invTextarea.value = generateInventoryLua();
}

function setupInventoryEventListeners() {


  const invFileInput = document.getElementById('inv-file-input');
  if (invFileInput) {
    invFileInput.onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => loadLuaString(evt.target.result, file.name);
      reader.readAsText(file);
      e.target.value = '';
    };
  }
  // Top nav button
  const invBtn = document.getElementById('tab-nav-inventory');
  if (invBtn) invBtn.addEventListener('click', () => switchMainModule('inventory'));

  // Subtabs
  document.querySelectorAll('[data-invsubtab]').forEach(btn => {
    btn.addEventListener('click', () => {
      switchInventorySubtab(btn.getAttribute('data-invsubtab'));
    });
  });

  // Action buttons
  const btnAddItem = document.getElementById('btn-inv-add-item');
  const btnAddWeight = document.getElementById('btn-inv-add-weight');
  const btnExportTab = document.getElementById('btn-inv-export-tab');

  if (btnAddItem) btnAddItem.addEventListener('click', openAddInvItemModal);
  if (btnAddWeight) btnAddWeight.addEventListener('click', openAddInvWeightModal);
  if (btnExportTab) btnExportTab.addEventListener('click', () => switchInventorySubtab('export'));

  // Search & Filters
  const itemSearch = document.getElementById('inv-item-search');
  if (itemSearch) {
    itemSearch.addEventListener('input', (e) => {
      inventoryState.itemSearch = e.target.value;
      renderInventoryItems();
    });
  }

  const weightSearch = document.getElementById('inv-weight-search');
  if (weightSearch) {
    weightSearch.addEventListener('input', (e) => {
      inventoryState.weightSearch = e.target.value;
      renderInventoryWeights();
    });
  }

  // Category pills
  document.querySelectorAll('[data-invcat]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-invcat]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      inventoryState.itemCatFilter = pill.getAttribute('data-invcat');
      renderInventoryItems();
    });
  });

  // Modal forms
  const invItemForm = document.getElementById('inv-item-form');
  if (invItemForm) {
    invItemForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const origClass = document.getElementById('modal-invitem-original-class').value.trim();
      const cls = document.getElementById('modal-invitem-class').value.trim();
      const name = document.getElementById('modal-invitem-name').value.trim();
      const type = document.getElementById('modal-invitem-type').value;
      const weight = parseFloat(document.getElementById('modal-invitem-weight').value) || 0;
      const icon = document.getElementById('modal-invitem-icon').value.trim() || 'icon16/wrench.png';
      const rank = document.getElementById('modal-invitem-rank').value.trim();
      const spec = document.getElementById('modal-invitem-spec').value.trim();
      const consumable = document.getElementById('modal-invitem-consumable').checked;

      if (!cls || !name) {
        showToast('Класс и Название обязательны!', 'error');
        return;
      }

      const itemObj = {
        class: cls,
        name: name,
        type: type,
        weight: weight,
        icon: icon,
        rank: rank,
        spec: spec,
        consumable_wep: consumable
      };

      if (origClass) {
        const idx = inventoryState.items.findIndex(i => i.class === origClass);
        if (idx !== -1) inventoryState.items[idx] = itemObj;
        else inventoryState.items.push(itemObj);
      } else {
        const existing = inventoryState.items.findIndex(i => i.class === cls);
        if (existing !== -1) {
          inventoryState.items[existing] = itemObj;
        } else {
          inventoryState.items.push(itemObj);
        }
      }

      saveInventoryState();
      renderInventoryItems();
      document.getElementById('inv-item-modal').style.display = 'none';
      showToast('Предмет сохранён!', 'success');
    });
  }

  const invWeightForm = document.getElementById('inv-weight-form');
  if (invWeightForm) {
    invWeightForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const origClass = document.getElementById('modal-invweight-original-class').value.trim();
      const cls = document.getElementById('modal-invweight-class').value.trim();
      const weight = parseFloat(document.getElementById('modal-invweight-val').value);

      if (!cls || isNaN(weight) || weight < 0) {
        showToast('Введите корректный класс и вес!', 'error');
        return;
      }

      if (origClass && origClass !== cls) {
        delete inventoryState.wepWeights[origClass];
      }
      inventoryState.wepWeights[cls] = weight;

      saveInventoryState();
      renderInventoryWeights();
      document.getElementById('inv-weight-modal').style.display = 'none';
      showToast('Вес оружия сохранён!', 'success');
    });
  }

  // Close modals
  const modalItemClose = document.getElementById('modal-invitem-close');
  const modalItemCancel = document.getElementById('modal-invitem-cancel');
  if (modalItemClose) modalItemClose.addEventListener('click', () => document.getElementById('inv-item-modal').style.display = 'none');
  if (modalItemCancel) modalItemCancel.addEventListener('click', () => document.getElementById('inv-item-modal').style.display = 'none');

  const modalWeightClose = document.getElementById('modal-invweight-close');
  const modalWeightCancel = document.getElementById('modal-invweight-cancel');
  if (modalWeightClose) modalWeightClose.addEventListener('click', () => document.getElementById('inv-weight-modal').style.display = 'none');
  if (modalWeightCancel) modalWeightCancel.addEventListener('click', () => document.getElementById('inv-weight-modal').style.display = 'none');

  // Copy & Download & Save buttons
  const copyInvBtn = document.getElementById('btn-copy-inv-lua');
  if (copyInvBtn) copyInvBtn.addEventListener('click', () => copyToClipboard(generateInventoryLua(), 'Конфиг инвентаря скопирован!'));

  const downloadInvBtn = document.getElementById('btn-download-inv-lua');
  if (downloadInvBtn) downloadInvBtn.addEventListener('click', () => downloadLuaBlob('aa_sh_inventory_config.lua', generateInventoryLua()));

  const saveInvServerBtn = document.getElementById('btn-save-inv-server');
  if (saveInvServerBtn) {
    saveInvServerBtn.addEventListener('click', async () => {
      const lua = generateInventoryLua();
      const liveApi = (typeof api !== 'undefined' && api) || window.api;
      if (liveApi && liveApi.socket && liveApi.socket.readyState === 1) {
        liveApi.sendCommand('editor_save_inventory', '', { lua: lua });
        showToast('aa_sh_inventory_config.lua отправлен и сохранён на сервере!', 'success');
        return;
      }
      downloadLuaBlob('aa_sh_inventory_config.lua', lua);
      showToast('aa_sh_inventory_config.lua скачан!', 'success');
    });
  }
}



  // Expose global bridge functions for UI handlers & inline onclicks
  window.editJob = editJob;
  window.duplicateJob = duplicateJob;
  window.deleteJob = deleteJob;
  window.openDiagnosticsModal = openDiagnosticsModal;
  window.fixInEditor = fixInEditor;
  window.autoFixSingleIssue = autoFixSingleIssue;
  window.updateBodygroup = updateBodygroup;
  window.removeBodygroup = removeBodygroup;
  window.removeWeapon = removeWeapon;

  // Arsenal controller actions
  window.switchMainModule = switchMainModule;
  window.switchArsenalSubtab = switchArsenalSubtab;
  window.openAddWeaponModal = openAddWeaponModal;
  window.openEditWeaponModal = openEditWeaponModal;
  window.duplicateWeapon = duplicateWeapon;
  window.deleteWeapon = deleteWeapon;
  window.openAddBgModal = openAddBgModal;
  window.openEditBgModal = openEditBgModal;
  window.deleteBodygroup = deleteBodygroup;

  // Inventory / Special equipment controller actions
  window.switchInventorySubtab = switchInventorySubtab;
  window.openAddInvItemModal = openAddInvItemModal;
  window.openEditInvItemModal = openEditInvItemModal;
  window.deleteInvItem = deleteInvItem;
  window.openAddInvWeightModal = openAddInvWeightModal;
  window.openEditInvWeightModal = openEditInvWeightModal;
  window.deleteInvWeight = deleteInvWeight;

  window.applyLiveServerConfig = applyLiveServerConfig;
  window.initEditorBundle = initEditorBundle;
  window.refreshConfigEditorView = function() {
    if (typeof renderJobs === 'function') renderJobs();
    if (typeof updateStats === 'function') updateStats();
    if (typeof populateFilters === 'function') populateFilters();
  };

  // Safe initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEditorBundle);
  } else {
    initEditorBundle();
  }


/* ============================================================================
   COLLAPSAR ATTACHMENTS & UNIFIED BACKUPS SYSTEM (INSIDE SCOPE)
   ============================================================================ */



// ============================================================================
// BUNDLED ATTACHMENTS DATA & STATE
// ============================================================================
const BUNDLED_ATTACHMENTS_DATA = [{"wepClass":"arccw_k_dc15s_grenadier","slots":{"4":{"name":"Подствольный модуль","options":[{"name":"Отсутствует","class":""},{"name":"Гранатомёт","class":"acwatt_ubgl_dc15"},{"name":"Виброклинок","class":"acwatt_universal_vibroknife"}]},"5":{"name":"Модификация картриджа","options":[{"name":"Классика","class":""},{"name":"Long Engagements","class":"acwatt_mode_le"},{"name":"Heat-Based","class":"acwatt_mode_heatbased"},{"name":"Anti-Tank","class":"acwatt_mode_at"}]}}},{"wepClass":"arccw_k_dc15a_grenadier","slots":{"1":{"name":"Прицелы","options":[{"name":"Снять","class":""},{"name":"Прицел x8","class":"acwatt_arccw_k_dlt15x_scope"},{"name":"Прицел x4","class":"acwatt_arccw_k_dlt15a_scope"}]},"5":{"name":"Подствольный модуль","options":[{"name":"Отсутствует","class":""},{"name":"Виброклинок","class":"acwatt_universal_vibroknife"}]},"6":{"name":"Модификация картриджа","options":[{"name":"Классика","class":""},{"name":"Long Engagements","class":"acwatt_mode_le"},{"name":"Heat-Based","class":"acwatt_mode_heatbased"},{"name":"Anti-Tank","class":"acwatt_mode_at"}]}}},{"wepClass":"arccw_k_dc15s","slots":{"5":{"name":"Модификация картриджа","options":[{"name":"Классика","class":""},{"name":"Long Engagements","class":"acwatt_mode_le"},{"name":"Heat-Based","class":"acwatt_mode_heatbased"}]}}},{"wepClass":"arccw_k_dc15x","slots":{"1":{"name":"Прицелы","options":[{"name":"Снять","class":""},{"name":"Прицел x8","class":"acwatt_arccw_k_dlt15x_scope"},{"name":"Прицел x4","class":"acwatt_arccw_k_dlt15a_scope"}]},"5":{"name":"Модификация картриджа","options":[{"name":"Классика","class":""},{"name":"Super-Sonic","class":"acwatt_mode_supersonic"},{"name":"Overcharged","class":"acwatt_mode_overcharged"},{"name":"Heat-Based","class":"acwatt_mode_heatbased"}]}}},{"wepClass":"arccw_k_dc15xr","slots":{"1":{"name":"Прицелы","options":[{"name":"Снять","class":""},{"name":"Прицел x8","class":"acwatt_arccw_k_dlt15x_scope"},{"name":"Прицел x4","class":"acwatt_arccw_k_dlt15a_scope"}]}}},{"wepClass":"arccw_k_valken38","slots":{"1":{"name":"Прицелы","options":[{"name":"Снять","class":""},{"name":"Прицел №1 x8/IR","class":"acwatt_arccw_k_valken38_scope_ir"},{"name":"Прицел №1 x8","class":"acwatt_arccw_k_valken38_scope"},{"name":"Прицел №2 x8/IR","class":"acwatt_arccw_k_dc15x_scope_ir"},{"name":"Прицел №2 x8","class":"acwatt_arccw_k_dlt15x_scope"}]},"4":{"name":"Модификация картриджа","options":[{"name":"Классика","class":""},{"name":"Super-Sonic","class":"acwatt_mode_supersonic"},{"name":"Overcharged","class":"acwatt_mode_overcharged"},{"name":"Heat-Based","class":"acwatt_mode_heatbased"}]},"5":{"name":"Подствольный модуль","options":[{"name":"Отсутствует","class":""},{"name":"Ремень","class":"acwatt_valken38_sling"},{"name":"Виброклинок","class":"acwatt_universal_vibroknife"}]}}},{"wepClass":"arccw_k_dc17m_sniper_republic","slots":{"1":{"name":"Прицелы","options":[{"name":"Снять","class":""},{"name":"Прицел x8","class":"acwatt_arccw_k_dlt15x_scope"}]}}},{"wepClass":"arccw_sops_republic_t702","slots":{"1":{"name":"Прицелы","options":[{"name":"Снять","class":""},{"name":"Прицел x5","class":"acwatt_arccw_k_westar35_scope_ir"}]}}},{"wepClass":"arccw_k_westarm5","slots":{"1":{"name":"Прицелы","options":[{"name":"Снять","class":""},{"name":"Прицел X6","class":"acwatt_arccw_k_westarm5_scope_x6ir"},{"name":"Прицел X2","class":"acwatt_arccw_k_westarm5_scope_x2"}]},"3":{"name":"Модификация картриджа","options":[{"name":"Классика","class":""},{"name":"Long Engagements","class":"acwatt_mode_le"},{"name":"Heat-Based","class":"acwatt_mode_heatbased"},{"name":"Anti-Tank","class":"acwatt_mode_at"}]}}},{"wepClass":"arccw_k_iqa11","slots":{"1":{"name":"Прицелы","options":[{"name":"Снять","class":""},{"name":"Прицел X8/IR","class":"acwatt_arccw_k_valken38_scope_ir"},{"name":"Прицел X8","class":"acwatt_arccw_k_valken38_scope"}]}}},{"wepClass":"arccw_k_launcher_rps6","slots":{"2":{"name":"Вид ракетницы","options":[{"name":"Классическая","class":""},{"name":"Трекер","class":"acwatt_ammunition_track"},{"name":"Кластер","class":"acwatt_ammunition_cluster"}]}}},{"wepClass":"arccw_k_launcher_plx1","slots":{"2":{"name":"Вид ракетницы","options":[{"name":"Самонаводящаяся","class":""},{"name":"Противотанковая","class":"acwatt_ammxunition_heatfs"}]}}}];

// Initialize attachments in arsenalState
if (typeof arsenalState !== 'undefined') {
  if (!arsenalState.attachments || !Array.isArray(arsenalState.attachments) || arsenalState.attachments.length === 0) {
    try {
      const stored = localStorage.getItem('collapsar_arsenal_attachments');
      if (stored) {
        arsenalState.attachments = JSON.parse(stored);
      }
    } catch(e) {
      console.warn('Failed to load stored attachments, using defaults:', e);
    }
    if (!arsenalState.attachments || arsenalState.attachments.length === 0) {
      arsenalState.attachments = JSON.parse(JSON.stringify(BUNDLED_ATTACHMENTS_DATA));
    }
  }
}

// ============================================================================
// ATTACHMENTS (МОДИФИКАЦИИ ОРУЖИЯ ArcCW) CONTROLLER
// ============================================================================
function saveArsenalAttachmentsState() {
  if (typeof arsenalState !== 'undefined' && Array.isArray(arsenalState.attachments)) {
    try {
      localStorage.setItem('collapsar_arsenal_attachments', JSON.stringify(arsenalState.attachments));
    } catch(e) {
      console.error('Failed to save attachments to localStorage:', e);
    }
    updateArsenalAttachmentBadges();
    if (typeof generateArsenalExportCode === 'function') {
      generateArsenalExportCode();
    }
  }
}

function updateArsenalAttachmentBadges() {
  const countSpan = document.getElementById('count-subtab-atts');
  if (countSpan && typeof arsenalState !== 'undefined') {
    countSpan.textContent = (arsenalState.attachments || []).length;
  }
}

function renderArsenalAttachments() {
  const container = document.getElementById('arsenal-atts-grid');
  const catPills = document.getElementById('arsenal-att-cat-pills');
  if (!container) return;

  updateArsenalAttachmentBadges();

  if (!arsenalState.attachments || !Array.isArray(arsenalState.attachments) || arsenalState.attachments.length === 0) {
    try {
      const stored = localStorage.getItem('collapsar_arsenal_attachments');
      if (stored) {
        arsenalState.attachments = JSON.parse(stored);
      }
    } catch(e) {}
    if (!arsenalState.attachments || !Array.isArray(arsenalState.attachments) || arsenalState.attachments.length === 0) {
      arsenalState.attachments = JSON.parse(JSON.stringify(BUNDLED_ATTACHMENTS_DATA));
    }
  }

  // Category Pills
  if (catPills) {
    const categories = ['Все'];
    const usedCats = new Set();
    arsenalState.attachments.forEach(att => {
      const wep = (arsenalState.weapons || []).find(w => w.class === att.wepClass);
      const cat = (wep && wep.category) ? wep.category : 'Табельное';
      usedCats.add(cat);
    });
    usedCats.forEach(c => categories.push(c));

    const curCat = arsenalState.attFilterCat || 'Все';
    catPills.innerHTML = categories.map(cat => `
      <button type="button" class="cat-pill-btn ${curCat === cat ? 'active' : ''}" data-cat="${escapeHtml(cat)}">
        ${escapeHtml(cat)}
      </button>
    `).join('');

    catPills.querySelectorAll('.cat-pill-btn').forEach(btn => {
      btn.onclick = () => {
        arsenalState.attFilterCat = btn.getAttribute('data-cat') || 'Все';
        renderArsenalAttachments();
      };
    });
  }

  const search = (arsenalState.attSearch || '').toLowerCase().trim();
  const catFilter = arsenalState.attFilterCat || 'Все';

  const filtered = arsenalState.attachments.filter(att => {
    const wep = (arsenalState.weapons || []).find(w => w.class === att.wepClass);
    const wepName = wep ? wep.name : '';
    const wepCat = wep ? wep.category : 'Табельное';

    if (catFilter !== 'Все' && wepCat !== catFilter) return false;

    if (search) {
      const matchClass = att.wepClass.toLowerCase().includes(search);
      const matchName = wepName.toLowerCase().includes(search);
      const matchSlots = Object.values(att.slots || {}).some(s => {
        const slotNameMatch = (s.name || '').toLowerCase().includes(search);
        const optMatch = (s.options || []).some(o => 
          (o.name || '').toLowerCase().includes(search) || (o.class || '').toLowerCase().includes(search)
        );
        return slotNameMatch || optMatch;
      });
      if (!matchClass && !matchName && !matchSlots) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: rgba(18,24,36,0.5); border: 1px dashed rgba(255,255,255,0.1); border-radius: 12px;">
        <div style="font-size: 36px; margin-bottom: 12px;">⚙️</div>
        <h3 style="margin: 0 0 8px 0; color: var(--text-primary); font-size: 16px;">Модификации оружия не найдены</h3>
        <p style="margin: 0 0 16px 0; font-size: 13px; color: var(--text-secondary);">
          ${search ? 'По вашему поисковому запросу ничего не найдено.' : 'В арсенале пока не настроены модификации для оружия.'}
        </p>
        <button type="button" class="btn btn-primary" onclick="openArsenalAttModal()">+ Настроить модификации оружия</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(att => {
    const wep = (arsenalState.weapons || []).find(w => w.class === att.wepClass);
    const wepName = wep ? wep.name : att.wepClass;
    const wepCat = wep ? (wep.category || 'Табельное') : 'Модификация';

    const slotEntries = Object.entries(att.slots || {}).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

    return `
      <div class="att-card">
        <div class="att-card-header">
          <div style="min-width: 0; flex: 1;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <h3 class="att-card-title" title="${escapeHtml(wepName)}">${escapeHtml(wepName)}</h3>
              <span class="meta-tag cat-badge" style="font-size: 11px;">${escapeHtml(wepCat)}</span>
            </div>
            <div class="att-card-class font-mono">${escapeHtml(att.wepClass)}</div>
          </div>
        </div>

        <div class="att-card-slots">
          ${slotEntries.map(([sId, sData]) => `
            <div class="att-slot-block">
              <div class="att-slot-title">
                <span class="slot-num-pill">Слот ${sId}</span>
                <strong>${escapeHtml(sData.name || 'Слот ' + sId)}</strong>
                <span class="slot-opts-count">${(sData.options || []).length} вар.</span>
              </div>
              <div class="att-opts-pill-list">
                ${(sData.options || []).map(opt => `
                  <span class="att-opt-pill ${!opt.class ? 'opt-pill-empty' : ''}" title="${opt.class ? 'Класс: ' + escapeHtml(opt.class) : 'Снять (без обвеса)'}">
                    ${escapeHtml(opt.name || (opt.class ? opt.class : 'Снять'))}
                  </span>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="att-card-actions">
          <button type="button" class="btn btn-secondary btn-sm" onclick="editArsenalAttachment('${escapeHtml(att.wepClass)}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
            Редактировать
          </button>
          <button type="button" class="btn btn-secondary btn-sm" onclick="duplicateArsenalAttachment('${escapeHtml(att.wepClass)}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            Копировать
          </button>
          <button type="button" class="btn btn-danger btn-sm" onclick="deleteArsenalAttachment('${escapeHtml(att.wepClass)}')">
            ✕
          </button>
        </div>
      </div>
    `;
  }).join('');
}

window.openArsenalAttModal = function(editWepClass = null) {
  const modal = document.getElementById('arsenal-att-modal');
  const form = document.getElementById('arsenal-att-form');
  const title = document.getElementById('modal-att-title');
  const subtitle = document.getElementById('modal-att-subtitle');
  const wepClassInput = document.getElementById('modal-att-wep-class');
  const origClassInput = document.getElementById('modal-att-original-wep-class');
  const slotsContainer = document.getElementById('modal-att-slots-container');
  const datalist = document.getElementById('modal-att-wep-datalist');
  if (!modal) return;

  // Populate datalist with weapons from arsenal
  if (datalist && arsenalState.weapons) {
    datalist.innerHTML = arsenalState.weapons.map(w => `
      <option value="${escapeHtml(w.class)}">${escapeHtml(w.name)} (${escapeHtml(w.category || 'Оружие')})</option>
    `).join('');
  }

  slotsContainer.innerHTML = '';

  if (editWepClass) {
    const existing = (arsenalState.attachments || []).find(a => a.wepClass === editWepClass);
    if (!existing) return;

    const wep = (arsenalState.weapons || []).find(w => w.class === editWepClass);
    title.textContent = 'Редактировать модификации оружия';
    subtitle.textContent = (wep ? wep.name + ' (' + editWepClass + ')' : editWepClass);
    wepClassInput.value = existing.wepClass;
    origClassInput.value = existing.wepClass;

    const sortedSlots = Object.entries(existing.slots || {}).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
    sortedSlots.forEach(([sId, sData]) => {
      addSlotEditCard(parseInt(sId), sData.name || '', sData.options || []);
    });
  } else {
    title.textContent = 'Добавить модификации оружия';
    subtitle.textContent = 'Задайте слоты обвесов и доступные варианты для оружия';
    wepClassInput.value = '';
    origClassInput.value = '';
    // By default add Slot 1 Scopes
    addSlotPresetScopes();
  }

  modal.style.display = 'flex';
};

window.editArsenalAttachment = function(wepClass) {
  openArsenalAttModal(wepClass);
};

window.duplicateArsenalAttachment = function(wepClass) {
  const existing = (arsenalState.attachments || []).find(a => a.wepClass === wepClass);
  if (!existing) return;
  const newClass = prompt('Введите класс оружия для копирования модификаций (например arccw_k_...):', existing.wepClass + '_copy');
  if (!newClass || !newClass.trim()) return;
  const targetClass = newClass.trim();

  if (arsenalState.attachments.some(a => a.wepClass === targetClass)) {
    if (!confirm('Модификации для ' + targetClass + ' уже настроены! Перезаписать?')) return;
    const idx = arsenalState.attachments.findIndex(a => a.wepClass === targetClass);
    arsenalState.attachments[idx] = {
      wepClass: targetClass,
      slots: JSON.parse(JSON.stringify(existing.slots))
    };
  } else {
    arsenalState.attachments.push({
      wepClass: targetClass,
      slots: JSON.parse(JSON.stringify(existing.slots))
    });
  }

  saveArsenalAttachmentsState();
  renderArsenalAttachments();
  showToast('Модификации успешно скопированы на ' + targetClass + '!', 'success');
};

window.deleteArsenalAttachment = function(wepClass) {
  if (!confirm('Удалить конфигурацию модификаций для ' + wepClass + '?')) return;
  const idx = (arsenalState.attachments || []).findIndex(a => a.wepClass === wepClass);
  if (idx !== -1) {
    arsenalState.attachments.splice(idx, 1);
    saveArsenalAttachmentsState();
    renderArsenalAttachments();
    showToast('Модификации для ' + wepClass + ' удалены!', 'success');
  }
};

function addSlotEditCard(slotId = 1, slotName = '', options = []) {
  const container = document.getElementById('modal-att-slots-container');
  if (!container) return;

  const card = document.createElement('div');
  card.className = 'att-slot-edit-card';
  card.setAttribute('data-slot-id', slotId);

  card.innerHTML = `
    <div class="att-slot-edit-header">
      <div style="display: flex; gap: 8px; align-items: center; flex: 1;">
        <span class="slot-badge">Слот</span>
        <input type="number" class="input-field input-slot-id" value="${slotId}" min="1" max="20" style="width: 65px; text-align: center;" required>
        <input type="text" class="input-field input-slot-name" value="${escapeHtml(slotName)}" placeholder="Название слота (напр. Прицелы)" style="flex: 1;" required>
      </div>
      <button type="button" class="btn btn-danger btn-xs btn-remove-slot" title="Удалить этот слот">Удалить слот</button>
    </div>
    <div class="att-options-list" style="margin-top: 10px; display: flex; flex-direction: column; gap: 6px;"></div>
    <button type="button" class="btn btn-secondary btn-xs btn-add-option" style="margin-top: 8px;">+ Добавить вариант</button>
  `;

  const optsList = card.querySelector('.att-options-list');
  const addOptBtn = card.querySelector('.btn-add-option');
  const removeSlotBtn = card.querySelector('.btn-remove-slot');

  const addOptionRow = (name = '', cls = '') => {
    const row = document.createElement('div');
    row.className = 'att-option-row';
    row.style.cssText = 'display: flex; gap: 8px; align-items: center;';
    row.innerHTML = `
      <input type="text" class="input-field input-opt-name" value="${escapeHtml(name)}" placeholder="Отображаемое имя (напр. Прицел x8)" style="flex: 1;" required>
      <input type="text" class="input-field font-mono input-opt-class" value="${escapeHtml(cls)}" placeholder="Класс (acwatt_...) или пусто для снятия" style="flex: 1.2;">
      <button type="button" class="btn btn-danger btn-xs btn-remove-opt" title="Удалить вариант" style="padding: 4px 8px;">✕</button>
    `;
    const removeOptBtn = row.querySelector('.btn-remove-opt');
    if (removeOptBtn) removeOptBtn.onclick = () => row.remove();
    if (optsList) optsList.appendChild(row);
  };

  if (options.length === 0) {
    addOptionRow('Снять', '');
  } else {
    options.forEach(o => addOptionRow(o.name, o.class));
  }

  if (addOptBtn) addOptBtn.onclick = () => addOptionRow('', '');
  if (removeSlotBtn) removeSlotBtn.onclick = () => card.remove();

  container.appendChild(card);
}

// Presets for Attachment Modal
function addSlotPresetScopes() {
  addSlotEditCard(1, 'Прицелы', [
    { name: 'Снять', class: '' },
    { name: 'Прицел x8', class: 'acwatt_arccw_k_dlt15x_scope' },
    { name: 'Прицел x4', class: 'acwatt_arccw_k_dlt15a_scope' }
  ]);
}

function addSlotPresetCartridges() {
  addSlotEditCard(5, 'Модификация картриджа', [
    { name: 'Классика', class: '' },
    { name: 'Long Engagements', class: 'acwatt_mode_le' },
    { name: 'Heat-Based', class: 'acwatt_mode_heatbased' },
    { name: 'Anti-Tank', class: 'acwatt_mode_at' }
  ]);
}

function addSlotPresetCartridgesSniper() {
  addSlotEditCard(5, 'Модификация картриджа', [
    { name: 'Классика', class: '' },
    { name: 'Super-Sonic', class: 'acwatt_mode_supersonic' },
    { name: 'Overcharged', class: 'acwatt_mode_overcharged' },
    { name: 'Heat-Based', class: 'acwatt_mode_heatbased' }
  ]);
}

function addSlotPresetUBGL() {
  addSlotEditCard(4, 'Подствольный модуль', [
    { name: 'Отсутствует', class: '' },
    { name: 'Гранатомёт', class: 'acwatt_ubgl_dc15' },
    { name: 'Виброклинок', class: 'acwatt_universal_vibroknife' }
  ]);
}

function addSlotPresetLauncher() {
  addSlotEditCard(2, 'Вид ракетницы', [
    { name: 'Классическая', class: '' },
    { name: 'Трекер', class: 'acwatt_ammunition_track' },
    { name: 'Кластер', class: 'acwatt_ammunition_cluster' }
  ]);
}

// Setup Attachments Event Listeners
function setupAttachmentsEventListeners() {
  const addAttBtn = document.getElementById('btn-arsenal-add-att');
  if (addAttBtn) {
    addAttBtn.onclick = () => openArsenalAttModal();
  }

  const attSearch = document.getElementById('arsenal-att-search');
  if (attSearch) {
    attSearch.oninput = (e) => {
      arsenalState.attSearch = e.target.value;
      renderArsenalAttachments();
    };
  }

  // Preset buttons
  const pScopes = document.getElementById('btn-preset-scopes');
  if (pScopes) pScopes.onclick = addSlotPresetScopes;

  const pCartridges = document.getElementById('btn-preset-cartridges');
  if (pCartridges) pCartridges.onclick = addSlotPresetCartridges;

  const pCartridgesSniper = document.getElementById('btn-preset-cartridges-sniper');
  if (pCartridgesSniper) pCartridgesSniper.onclick = addSlotPresetCartridgesSniper;

  const pUBGL = document.getElementById('btn-preset-ubgl');
  if (pUBGL) pUBGL.onclick = addSlotPresetUBGL;

  const pLauncher = document.getElementById('btn-preset-launcher');
  if (pLauncher) pLauncher.onclick = addSlotPresetLauncher;

  const btnAddCustomSlot = document.getElementById('btn-add-custom-slot');
  if (btnAddCustomSlot) {
    btnAddCustomSlot.onclick = () => {
      const container = document.getElementById('modal-att-slots-container');
      const existingCards = container ? container.querySelectorAll('.att-slot-edit-card') : [];
      let nextId = 1;
      existingCards.forEach(c => {
        const id = parseInt(c.querySelector('.input-slot-id')?.value || 0);
        if (id >= nextId) nextId = id + 1;
      });
      addSlotEditCard(nextId, 'Слот ' + nextId, []);
    };
  }

  // Modal Close & Cancel
  const modal = document.getElementById('arsenal-att-modal');
  const closeBtn = document.getElementById('modal-att-close');
  const cancelBtn = document.getElementById('modal-att-cancel');
  if (closeBtn) closeBtn.onclick = () => { if (modal) modal.style.display = 'none'; };
  if (cancelBtn) cancelBtn.onclick = () => { if (modal) modal.style.display = 'none'; };

  // Form Submit
  const form = document.getElementById('arsenal-att-form');
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const wepClass = (document.getElementById('modal-att-wep-class')?.value || '').trim();
      const origClass = (document.getElementById('modal-att-original-wep-class')?.value || '').trim();
      if (!wepClass) {
        showToast('Укажите класс оружия!', 'warning');
        return;
      }

      const slotCards = document.querySelectorAll('#modal-att-slots-container .att-slot-edit-card');
      if (slotCards.length === 0) {
        showToast('Добавьте хотя бы один слот модификаций!', 'warning');
        return;
      }

      const slots = {};
      slotCards.forEach(c => {
        const sId = parseInt(c.querySelector('.input-slot-id')?.value || 1);
        const sName = (c.querySelector('.input-slot-name')?.value || '').trim() || ('Слот ' + sId);
        const optRows = c.querySelectorAll('.att-option-row');
        const options = [];
        optRows.forEach(r => {
          const name = (r.querySelector('.input-opt-name')?.value || '').trim();
          const cls = (r.querySelector('.input-opt-class')?.value || '').trim();
          if (name || cls) {
            options.push({ name: name || cls, class: cls });
          }
        });
        slots[sId] = { name: sName, options };
      });

      const attObj = { wepClass, slots };

      if (!arsenalState.attachments) arsenalState.attachments = [];
      const idx = arsenalState.attachments.findIndex(a => a.wepClass === (origClass || wepClass));
      if (idx !== -1) {
        arsenalState.attachments[idx] = attObj;
      } else {
        const existingClsIdx = arsenalState.attachments.findIndex(a => a.wepClass === wepClass);
        if (existingClsIdx !== -1) {
          arsenalState.attachments[existingClsIdx] = attObj;
        } else {
          arsenalState.attachments.push(attObj);
        }
      }

      saveArsenalAttachmentsState();
      renderArsenalAttachments();
      if (modal) modal.style.display = 'none';
      showToast('Модификации для ' + wepClass + ' успешно сохранены!', 'success');
    };
  }
}

// Generate Lua Code for AttachmentsConfig
function generateAttachmentsConfigLua() {
  if (!arsenalState.attachments || arsenalState.attachments.length === 0) {
    return 'NN_Arsenal.AttachmentsConfig = {}\n\n';
  }

  let lua = '-- 3. Модификации оружия (ArcCW)\n';
  lua += 'NN_Arsenal.AttachmentsConfig = {\n';

  arsenalState.attachments.forEach(att => {
    lua += '    ["' + att.wepClass + '"] = {\n';
    const sortedSlots = Object.entries(att.slots || {}).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
    sortedSlots.forEach(([sId, sData]) => {
      lua += '        [' + sId + '] = {\n';
      lua += '            name = "' + (sData.name || ('Слот ' + sId)).replace(/"/g, '\\"') + '",\n';
      lua += '            options = {\n';
      (sData.options || []).forEach(opt => {
        lua += '                { name = "' + (opt.name || '').replace(/"/g, '\\"') + '", class = "' + (opt.class || '').replace(/"/g, '\\"') + '" },\n';
      });
      lua += '            }\n';
      lua += '        },\n';
    });
    lua += '    },\n\n';
  });

  lua += '}\n\n';
  return lua;
}

// ============================================================================
// UNIFIED BACKUPS SYSTEM (ЕДИНЫЙ СРЕЗ ВСЕХ СИСТЕМ)
// ============================================================================
function getUnifiedBackups() {
  try {
    const raw = localStorage.getItem('collapsar_unified_backups');
    return raw ? JSON.parse(raw) : [];
  } catch(e) {
    console.error('Failed to get unified backups:', e);
    return [];
  }
}

function setUnifiedBackups(list) {
  try {
    localStorage.setItem('collapsar_unified_backups', JSON.stringify(list));
  } catch(e) {
    console.error('Failed to set unified backups:', e);
  }
}

function createUnifiedBackupSnapshot(label = 'Ручной общий срез', type = 'manual') {
  const list = getUnifiedBackups();

  const jobsData = {
    jobs: (typeof state !== 'undefined' && state.jobs) ? JSON.parse(JSON.stringify(state.jobs)) : [],
    categories: (typeof state !== 'undefined' && state.categories) ? JSON.parse(JSON.stringify(state.categories)) : [],
    formations: (typeof state !== 'undefined' && state.formations) ? JSON.parse(JSON.stringify(state.formations)) : []
  };

  const arsenalData = (typeof arsenalState !== 'undefined') ? {
    weapons: JSON.parse(JSON.stringify(arsenalState.weapons || [])),
    bodygroups: JSON.parse(JSON.stringify(arsenalState.bodygroups || [])),
    attachments: JSON.parse(JSON.stringify(arsenalState.attachments || [])),
    maxWeight: arsenalState.maxWeight || 50,
    armorWeights: JSON.parse(JSON.stringify(arsenalState.armorWeights || {}))
  } : null;

  const inventoryData = (typeof inventoryState !== 'undefined') ? {
    items: JSON.parse(JSON.stringify(inventoryState.items || [])),
    wepWeights: JSON.parse(JSON.stringify(inventoryState.wepWeights || {}))
  } : null;

  const now = new Date();
  const dateStr = now.toLocaleDateString('ru-RU') + ' ' + now.toLocaleTimeString('ru-RU');

  const snap = {
    id: Date.now(),
    label: label,
    type: type,
    dateStr: dateStr,
    timestamp: now.getTime(),
    storage: 'Локальный снимок (LocalStorage)',
    data: {
      jobs: jobsData,
      arsenal: arsenalData,
      inventory: inventoryData
    }
  };

  list.unshift(snap);
  if (list.length > 30) list.pop();
  setUnifiedBackups(list);
  updateBackupsBadges();
  renderUnifiedBackupsTable();
  return snap;
}

function updateBackupsBadges() {
  const uCount = document.getElementById('unified-backups-count');
  const jCount = document.getElementById('jobs-backups-count');
  const uList = getUnifiedBackups();
  const jList = (typeof getLocalBackups === 'function') ? getLocalBackups() : [];

  if (uCount) uCount.textContent = uList.length;
  if (jCount) jCount.textContent = jList.length;
}

function renderUnifiedBackupsTable() {
  const tbody = document.getElementById('unified-backups-table-body');
  if (!tbody) return;

  updateBackupsBadges();
  const list = getUnifiedBackups();

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 32px 20px; color: var(--text-secondary);">
          <div style="font-size: 28px; margin-bottom: 8px;">🛡️</div>
          <div style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">Общие резервные копии пока не созданы</div>
          <div style="font-size: 12px; margin-bottom: 12px;">Нажмите "Создать общий бэкап" для сохранения синхронного снимка всех трёх систем.</div>
          <button type="button" class="btn btn-primary btn-sm" onclick="createManualUnifiedBackupClick()">+ Создать первый общий срез</button>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map(b => {
    const jobsCount = b.data?.jobs?.jobs?.length || 0;
    const wepsCount = b.data?.arsenal?.weapons?.length || 0;
    const attsCount = b.data?.arsenal?.attachments?.length || 0;
    const invCount = b.data?.inventory?.items?.length || 0;

    const typeBadge = b.type === 'auto' 
      ? '<span class="meta-tag" style="color: #3b82f6; border-color: #3b82f6;">АВТОСРЕЗ</span>'
      : b.type === 'import'
      ? '<span class="meta-tag" style="color: #a855f7; border-color: #a855f7;">ИМПОРТ</span>'
      : '<span class="meta-tag" style="color: #00d2ff; border-color: #00d2ff;">ОБЩИЙ СРЕЗ</span>';

    return `
      <tr>
        <td>${typeBadge}</td>
        <td>
          <strong style="color: var(--text-primary); font-size: 14px;">${escapeHtml(b.label || 'Общий срез')}</strong>
          <div style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">
            <span style="color: #10b981;">${jobsCount} проф</span> • 
            <span style="color: #00d2ff;">${wepsCount} оружия</span> • 
            <span style="color: #f59e0b;">${attsCount} обвесов</span> • 
            <span style="color: #8b5cf6;">${invCount} спец. предм.</span>
          </div>
        </td>
        <td style="font-size: 13px; color: var(--text-secondary);">${escapeHtml(b.dateStr)}</td>
        <td style="font-size: 12px;"><span style="color: var(--text-secondary);">${escapeHtml(b.storage || 'LocalStorage')}</span></td>
        <td style="text-align: right; white-space: nowrap;">
          <div style="display: inline-flex; gap: 6px; align-items: center;">
            <button class="btn btn-primary btn-sm" onclick="restoreUnifiedBackup(${b.id})" title="Восстановить всё синхронно">
              Восстановить
            </button>
            <button class="btn btn-secondary btn-sm" onclick="exportSingleUnifiedBackup(${b.id})" title="Скачать .json">
              Скачать
            </button>
            <button class="btn btn-danger btn-sm" onclick="deleteUnifiedBackup(${b.id})" title="Удалить этот снимок">
              ✕
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.createManualUnifiedBackupClick = function() {
  createUnifiedBackupSnapshot('Ручной общий бэкап', 'manual');
  showToast('Синхронный срез всех трёх систем успешно сохранён!', 'success');
};

window.restoreUnifiedBackup = function(id) {
  const list = getUnifiedBackups();
  const snap = list.find(s => s.id === id);
  if (!snap) return;

  const msg = 'Восстановить конфигурации из среза "' + snap.label + '" (' + snap.dateStr + ')?\n\n' +
    'Будут восстановлены:\n' +
    '- Профессии: ' + (snap.data?.jobs?.jobs?.length || 0) + ' шт.\n' +
    '- Оружие арсенала: ' + (snap.data?.arsenal?.weapons?.length || 0) + ' шт.\n' +
    '- Модификации оружия: ' + (snap.data?.arsenal?.attachments?.length || 0) + ' шт.\n' +
    '- Спецоборудование: ' + (snap.data?.inventory?.items?.length || 0) + ' шт.';

  if (!confirm(msg)) return;

  // 1. Restore Jobs
  if (snap.data?.jobs && typeof state !== 'undefined') {
    state.jobs = JSON.parse(JSON.stringify(snap.data.jobs.jobs || []));
    state.categories = JSON.parse(JSON.stringify(snap.data.jobs.categories || []));
    state.formations = JSON.parse(JSON.stringify(snap.data.jobs.formations || []));
    if (typeof gatherSuggestions === 'function') gatherSuggestions();
    if (typeof updateStats === 'function') updateStats();
    if (typeof populateFilters === 'function') populateFilters();
    if (typeof populateDatalists === 'function') populateDatalists();
    if (typeof runDiagnostics === 'function') runDiagnostics();
    if (typeof renderJobs === 'function') renderJobs();
  }

  // 2. Restore Arsenal
  if (snap.data?.arsenal && typeof arsenalState !== 'undefined') {
    arsenalState.weapons = JSON.parse(JSON.stringify(snap.data.arsenal.weapons || []));
    arsenalState.bodygroups = JSON.parse(JSON.stringify(snap.data.arsenal.bodygroups || []));
    arsenalState.attachments = JSON.parse(JSON.stringify(snap.data.arsenal.attachments || []));
    arsenalState.maxWeight = snap.data.arsenal.maxWeight || 50;
    arsenalState.armorWeights = JSON.parse(JSON.stringify(snap.data.arsenal.armorWeights || {}));
    if (typeof saveArsenalState === 'function') saveArsenalState();
    if (typeof renderArsenalSubtab === 'function') renderArsenalSubtab(arsenalState.activeSubtab || 'weps');
    if (typeof renderArsenalAttachments === 'function') renderArsenalAttachments();
  }

  // 3. Restore Inventory
  if (snap.data?.inventory && typeof inventoryState !== 'undefined') {
    inventoryState.items = JSON.parse(JSON.stringify(snap.data.inventory.items || []));
    inventoryState.wepWeights = JSON.parse(JSON.stringify(snap.data.inventory.wepWeights || {}));
    if (typeof saveInventoryState === 'function') saveInventoryState();
    if (typeof renderInventorySubtab === 'function') renderInventorySubtab(inventoryState.activeSubtab || 'items');
  }

  const modal = document.getElementById('backups-modal');
  if (modal) modal.style.display = 'none';

  showToast('Все конфигурации (Профессии, Арсенал, Спецоборудование) успешно восстановлены!', 'success');
};

window.exportSingleUnifiedBackup = function(id) {
  const list = getUnifiedBackups();
  const snap = list.find(s => s.id === id);
  if (!snap) return;

  const jsonStr = JSON.stringify(snap, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'collapsar_unified_backup_' + snap.id + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Резервная копия скачана в формате .json', 'success');
};

window.deleteUnifiedBackup = function(id) {
  if (!confirm('Удалить эту резервную копию?')) return;
  const list = getUnifiedBackups();
  const filtered = list.filter(s => s.id !== id);
  setUnifiedBackups(filtered);
  updateBackupsBadges();
  renderUnifiedBackupsTable();
  showToast('Резервная копия удалена', 'success');
};

function openBackupsModal(preferredTab = 'unified') {
  if (typeof updateBackupsBadges === 'function') updateBackupsBadges();
  
  // Auto-create initial baseline backup if none exists and we have data
  try {
    const existing = getUnifiedBackups();
    if (existing.length === 0) {
      const hasJobs = typeof state !== 'undefined' && state.jobs && state.jobs.length > 0;
      const hasWeps = typeof arsenalState !== 'undefined' && arsenalState.weapons && arsenalState.weapons.length > 0;
      if (hasJobs || hasWeps) {
        createUnifiedBackupSnapshot('Начальное состояние (Автоматический срез)', 'auto');
      }
    }
  } catch(e) {
    console.error('Error auto-creating baseline backup:', e);
  }

  const tabUnified = document.getElementById('tab-btn-unified-backups');
  const tabJobs = document.getElementById('tab-btn-jobs-backups');
  const viewUnified = document.getElementById('unified-backups-view');
  const viewJobs = document.getElementById('jobs-backups-view');

  if (preferredTab === 'unified' && tabUnified && viewUnified) {
    tabUnified.classList.add('active');
    if (tabJobs) tabJobs.classList.remove('active');
    viewUnified.style.display = 'block';
    if (viewJobs) viewJobs.style.display = 'none';
    if (typeof renderUnifiedBackupsTable === 'function') renderUnifiedBackupsTable();
  } else if (preferredTab === 'jobs' && tabJobs && viewJobs) {
    tabJobs.classList.add('active');
    if (tabUnified) tabUnified.classList.remove('active');
    viewJobs.style.display = 'block';
    if (viewUnified) viewJobs.style.display = 'none';
    if (typeof renderLocalBackupsTable === 'function') renderLocalBackupsTable();
  } else {
    if (typeof renderUnifiedBackupsTable === 'function') renderUnifiedBackupsTable();
    if (typeof renderLocalBackupsTable === 'function') renderLocalBackupsTable();
  }

  const modal = document.getElementById('backups-modal');
  if (modal) modal.style.display = 'flex';
}
window.openBackupsModal = openBackupsModal;

function setupUnifiedBackupsEventListeners() {
  // Tabs switching in Backups modal
  const tabUnified = document.getElementById('tab-btn-unified-backups');
  const tabJobs = document.getElementById('tab-btn-jobs-backups');
  const viewUnified = document.getElementById('unified-backups-view');
  const viewJobs = document.getElementById('jobs-backups-view');

  if (tabUnified && tabJobs && viewUnified && viewJobs) {
    tabUnified.onclick = () => {
      tabUnified.classList.add('active');
      tabJobs.classList.remove('active');
      viewUnified.style.display = 'block';
      viewJobs.style.display = 'none';
      renderUnifiedBackupsTable();
    };

    tabJobs.onclick = () => {
      tabJobs.classList.add('active');
      tabUnified.classList.remove('active');
      viewJobs.style.display = 'block';
      viewUnified.style.display = 'none';
      if (typeof renderLocalBackupsTable === 'function') {
        renderLocalBackupsTable();
      }
    };
  }

  // Create manual unified backup
  const btnManualUnified = document.getElementById('btn-manual-unified-backup');
  if (btnManualUnified) {
    btnManualUnified.onclick = () => {
      createManualUnifiedBackupClick();
    };
  }

  // Export Unified Backup button
  const btnExportUnified = document.getElementById('btn-export-unified-backup') || document.getElementById('btn-export-current-unified');
  if (btnExportUnified) {
    btnExportUnified.onclick = () => {
      const snap = createUnifiedBackupSnapshot('Экспортированный общий срез', 'manual');
      exportSingleUnifiedBackup(snap.id);
    };
  }
  const btnExportCurrent = document.getElementById('btn-export-current-unified');
  if (btnExportCurrent && btnExportCurrent !== btnExportUnified) {
    btnExportCurrent.onclick = () => {
      const snap = createUnifiedBackupSnapshot('Экспортированный общий срез', 'manual');
      exportSingleUnifiedBackup(snap.id);
    };
  }

  // Import Unified Backup file input
  const fileInput = document.getElementById('unified-backup-file-input');
  if (fileInput) {
    fileInput.onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (!parsed || (!parsed.data && !parsed.jobs && !parsed.weapons)) {
            showToast('Неверный формат файла бэкапа!', 'error');
            return;
          }

          let snapData = parsed.data || parsed;
          const now = new Date();
          const snap = {
            id: Date.now(),
            label: 'Импорт: ' + file.name,
            type: 'import',
            dateStr: now.toLocaleDateString('ru-RU') + ' ' + now.toLocaleTimeString('ru-RU'),
            timestamp: now.getTime(),
            storage: 'Импортирован из файла',
            data: {
              jobs: snapData.jobs || (typeof state !== 'undefined' ? { jobs: state.jobs, categories: state.categories } : null),
              arsenal: snapData.arsenal || (typeof arsenalState !== 'undefined' ? { weapons: arsenalState.weapons, bodygroups: arsenalState.bodygroups, attachments: arsenalState.attachments } : null),
              inventory: snapData.inventory || (typeof inventoryState !== 'undefined' ? { items: inventoryState.items, wepWeights: inventoryState.wepWeights } : null)
            }
          };

          const list = getUnifiedBackups();
          list.unshift(snap);
          setUnifiedBackups(list);
          updateBackupsBadges();
          renderUnifiedBackupsTable();

          if (confirm('Бэкап из файла "' + file.name + '" импортирован! Восстановить конфигурации прямо сейчас?')) {
            restoreUnifiedBackup(snap.id);
          } else {
            showToast('Файл бэкапа успешно добавлен в список резервных копий!', 'success');
          }
        } catch(err) {
          console.error(err);
          showToast('Ошибка чтения файла бэкапа: ' + err.message, 'error');
        }
      };
      reader.readAsText(file);
      e.target.value = '';
    };
  }

  // Cross-module buttons that open unified backups
  const btnArsenalUnified = document.getElementById('btn-arsenal-unified-backup');
  if (btnArsenalUnified) {
    btnArsenalUnified.onclick = () => {
      const modal = document.getElementById('backups-modal');
      if (modal) {
        modal.style.display = 'flex';
        if (tabUnified) tabUnified.click();
      }
    };
  }

  const btnInvUnified = document.getElementById('btn-inv-unified-backup');
  if (btnInvUnified) {
    btnInvUnified.onclick = () => {
      const modal = document.getElementById('backups-modal');
      if (modal) {
        modal.style.display = 'flex';
        if (tabUnified) tabUnified.click();
      }
    };
  }

  // Main backups button in top toolbar
  const mainBackupsBtn = document.getElementById('btn-open-backups') || document.getElementById('open-backups-btn');
  if (mainBackupsBtn) {
    const origHandler = mainBackupsBtn.onclick;
    mainBackupsBtn.onclick = (e) => {
      if (typeof origHandler === 'function') origHandler(e);
      const modal = document.getElementById('backups-modal');
      if (modal) {
        modal.style.display = 'flex';
        if (tabUnified) tabUnified.click();
      }
    };
  }
}


  const statBackupsPill = document.getElementById('stat-backups-pill');
  if (statBackupsPill) {
    statBackupsPill.style.cursor = 'pointer';
    statBackupsPill.onclick = () => openBackupsModal('unified');
  }

// Initialize attachments and unified backups listeners
try {
  setupAttachmentsEventListeners();
  setupUnifiedBackupsEventListeners();
  updateBackupsBadges();
  renderUnifiedBackupsTable();
  updateArsenalAttachmentBadges();
} catch(e) {
  console.error('Initialization error in attachments/backups:', e);
}



// ============================================================================
// ARCCW WEAPON BALANCE CONTROLLER
// Centralized weapon stats rebalance, live DPS, diff comparison, and Lua exporter
// ============================================================================

const arccwState = {
  weapons: (typeof BUNDLED_ARCCW_DATA !== 'undefined' && BUNDLED_ARCCW_DATA.weapons) ? JSON.parse(JSON.stringify(BUNDLED_ARCCW_DATA.weapons)) : [],
  overrides: (typeof BUNDLED_ARCCW_DATA !== 'undefined' && BUNDLED_ARCCW_DATA.overrides) ? JSON.parse(JSON.stringify(BUNDLED_ARCCW_DATA.overrides)) : {},
  selectedClass: 'arccw_k_z6',
  searchQuery: '',
  activeCategory: 'all',
  sortBy: 'modified-first',
  rawLuaTail: (typeof ARCCW_LUA_TAIL !== 'undefined') ? ARCCW_LUA_TAIL : ''
};

function getWeaponStock(wepClass) {
  return arccwState.weapons.find(function(w) { return w.Class === wepClass; }) || null;
}

function getWeaponEffective(wepClass) {
  var stock = getWeaponStock(wepClass);
  var ovr = arccwState.overrides[wepClass] || {};
  if (!stock) {
    return Object.assign({
      Class: wepClass,
      Name: ovr.Name || wepClass,
      Damage: ovr.Damage || 30,
      DamageMin: ovr.DamageMin || 20,
      RPM: ovr.RPM || 450,
      Clip: ovr.Clip || 30,
      Num: ovr.Num || 1,
      Recoil: ovr.Recoil || 0.5,
      RecoilSide: ovr.RecoilSide || 0.3,
      RecoilRise: ovr.RecoilRise || 0.3,
      Range: ovr.Range || 300,
      RangeMin: ovr.RangeMin || 20,
      MOA: ovr.MOA || 5,
      Penetration: ovr.Penetration || 10,
      SpeedMult: ovr.SpeedMult || 1.0,
      SightedSpeedMult: ovr.SightedSpeedMult || 0.7,
      SightTime: ovr.SightTime || 0.25
    }, ovr);
  }
  return Object.assign({}, stock, ovr, {
    Damage: ovr.Damage !== undefined ? ovr.Damage : stock.Damage,
    DamageMin: ovr.DamageMin !== undefined ? ovr.DamageMin : stock.DamageMin,
    RPM: ovr.RPM !== undefined ? ovr.RPM : stock.RPM,
    Clip: ovr.Clip !== undefined ? ovr.Clip : stock.Clip,
    Num: ovr.Num !== undefined ? ovr.Num : (stock.Num || 1),
    Range: ovr.Range !== undefined ? ovr.Range : (stock.Range || 300),
    RangeMin: ovr.RangeMin !== undefined ? ovr.RangeMin : (stock.RangeMin || 20),
    Recoil: ovr.Recoil !== undefined ? ovr.Recoil : stock.Recoil,
    RecoilSide: ovr.RecoilSide !== undefined ? ovr.RecoilSide : (stock.RecoilSide || 0.3),
    RecoilRise: ovr.RecoilRise !== undefined ? ovr.RecoilRise : (stock.RecoilRise || 0.3),
    MOA: ovr.MOA !== undefined ? ovr.MOA : (stock.MOA || 5),
    Penetration: ovr.Penetration !== undefined ? ovr.Penetration : (stock.Penetration || 10),
    SpeedMult: ovr.SpeedMult !== undefined ? ovr.SpeedMult : (stock.SpeedMult || 1.0),
    SightedSpeedMult: ovr.SightedSpeedMult !== undefined ? ovr.SightedSpeedMult : (stock.SightedSpeedMult || 0.7),
    SightTime: ovr.SightTime !== undefined ? ovr.SightTime : (stock.SightTime || 0.25),
    HeatCapacity: ovr.HeatCapacity !== undefined ? ovr.HeatCapacity : stock.HeatCapacity,
    HeatDissipation: ovr.HeatDissipation !== undefined ? ovr.HeatDissipation : stock.HeatDissipation,
    HeatDelayTime: ovr.HeatDelayTime !== undefined ? ovr.HeatDelayTime : stock.HeatDelayTime
  });
}

function isWeaponModified(wepClass) {
  var ovr = arccwState.overrides[wepClass];
  if (!ovr) return false;
  return Object.keys(ovr).some(function(k) { return k !== 'Name'; });
}

function getWeaponCategoryKey(wep) {
  var t = (wep.TriviaClass || '').toLowerCase();
  var c = (wep.Class || '').toLowerCase();

  if (t.indexOf('shotgun') !== -1 || t.indexOf('scatter') !== -1) return 'shotgun';
  if (t.indexOf('sniper') !== -1 || c.indexOf('sniper') !== -1) return 'sniper';
  if (t.indexOf('repeater') !== -1 || t.indexOf('rotat') !== -1 || t.indexOf('machine gun') !== -1 || c.indexOf('z6') !== -1 || c.indexOf('z4') !== -1) return 'heavy';
  if (t.indexOf('pistol') !== -1 || t.indexOf('revolver') !== -1 || t.indexOf('handblaster') !== -1) return 'pistol';
  if (t.indexOf('launcher') !== -1 || t.indexOf('grenade') !== -1 || t.indexOf('mine') !== -1 || t.indexOf('explosive') !== -1 || c.indexOf('launcher') !== -1 || c.indexOf('nade') !== -1) return 'explosive';
  if (t.indexOf('rifle') !== -1 || t.indexOf('carbine') !== -1 || t.indexOf('carabine') !== -1 || t.indexOf('smg') !== -1 || t.indexOf('submachine') !== -1) return 'rifle';
  return 'rifle';
}

function calcArcCWDPS(dmg, rpm, num) {
  if (!dmg || !rpm) return 0;
  return Math.round(dmg * (rpm / 60) * (num || 1));
}

function renderArcCWCatalog() {
  var container = document.getElementById('arccw-cards-container');
  if (!container) return;

  var totalCount = arccwState.weapons.length;
  var modifiedCount = Object.keys(arccwState.overrides).filter(function(k) { return isWeaponModified(k); }).length;

  var statTotal = document.getElementById('stat-arccw-total');
  var statMod = document.getElementById('stat-arccw-modified');
  var modBadge = document.getElementById('mod-arccw-count');
  if (statTotal) statTotal.textContent = totalCount;
  if (statMod) statMod.textContent = modifiedCount;
  if (modBadge) modBadge.textContent = modifiedCount;

  var catCounts = { all: totalCount, modified: modifiedCount, rifle: 0, pistol: 0, heavy: 0, sniper: 0, shotgun: 0, explosive: 0 };
  arccwState.weapons.forEach(function(w) {
    var k = getWeaponCategoryKey(w);
    if (catCounts[k] !== undefined) catCounts[k]++;
  });

  Object.keys(catCounts).forEach(function(cat) {
    var el = document.getElementById('cat-count-' + cat);
    if (el) el.textContent = catCounts[cat];
  });

  var list = arccwState.weapons.slice();
  if (arccwState.activeCategory === 'modified') {
    list = list.filter(function(w) { return isWeaponModified(w.Class); });
  } else if (arccwState.activeCategory !== 'all') {
    list = list.filter(function(w) { return getWeaponCategoryKey(w) === arccwState.activeCategory; });
  }

  if (arccwState.searchQuery) {
    var q = arccwState.searchQuery.toLowerCase();
    list = list.filter(function(w) {
      return (w.Name && w.Name.toLowerCase().indexOf(q) !== -1) ||
             (w.Class && w.Class.toLowerCase().indexOf(q) !== -1) ||
             (w.Addon && w.Addon.toLowerCase().indexOf(q) !== -1);
    });
  }

  if (arccwState.sortBy === 'name') {
    list.sort(function(a, b) { return (a.Name || a.Class).localeCompare(b.Name || b.Class); });
  } else if (arccwState.sortBy === 'dps-desc') {
    list.sort(function(a, b) {
      var ea = getWeaponEffective(a.Class);
      var eb = getWeaponEffective(b.Class);
      return calcArcCWDPS(eb.Damage, eb.RPM, eb.Num) - calcArcCWDPS(ea.Damage, ea.RPM, ea.Num);
    });
  } else if (arccwState.sortBy === 'damage-desc') {
    list.sort(function(a, b) {
      var ea = getWeaponEffective(a.Class);
      var eb = getWeaponEffective(b.Class);
      return (eb.Damage || 0) - (ea.Damage || 0);
    });
  } else if (arccwState.sortBy === 'rpm-desc') {
    list.sort(function(a, b) {
      var ea = getWeaponEffective(a.Class);
      var eb = getWeaponEffective(b.Class);
      return (eb.RPM || 0) - (ea.RPM || 0);
    });
  } else {
    list.sort(function(a, b) {
      var ma = isWeaponModified(a.Class) ? 1 : 0;
      var mb = isWeaponModified(b.Class) ? 1 : 0;
      if (ma !== mb) return mb - ma;
      return (a.Name || a.Class).localeCompare(b.Name || b.Class);
    });
  }

  var statFiltered = document.getElementById('stat-arccw-filtered');
  if (statFiltered) statFiltered.textContent = list.length;
  var summaryEl = document.getElementById('arccw-catalog-summary');
  if (summaryEl) summaryEl.textContent = 'Показано ' + list.length + ' из ' + totalCount + ' единиц оружия';

  if (list.length === 0) {
    container.innerHTML = '<div style="padding: 40px; text-align: center; color: var(--text-muted); font-size: 12px;">Оружие по вашему запросу не найдено</div>';
    return;
  }

  if (!arccwState.selectedClass || !list.some(function(w) { return w.Class === arccwState.selectedClass; })) {
    arccwState.selectedClass = list[0].Class;
  }

  var html = '';
  list.forEach(function(w) {
    var isSel = w.Class === arccwState.selectedClass;
    var isMod = isWeaponModified(w.Class);
    var eff = getWeaponEffective(w.Class);
    var dps = calcArcCWDPS(eff.Damage, eff.RPM, eff.Num);

    html += '<div class="arccw-wep-card ' + (isSel ? 'active' : '') + ' ' + (isMod ? 'is-modified' : '') + '" data-wep="' + w.Class + '">';
    html += '  <div class="arccw-card-top">';
    html += '    <div class="arccw-card-title">';
    html += '      <span>' + escapeHtml(eff.Name || w.Name || w.Class) + '</span>';
    if (isMod) {
      html += '      <span class="arccw-badge mod-tag">● ИЗМЕНЕНО</span>';
    }
    html += '    </div>';
    html += '    <div class="arccw-card-badges">';
    html += '      <span class="arccw-badge">' + escapeHtml(w.TriviaClass || 'Blaster') + '</span>';
    html += '    </div>';
    html += '  </div>';
    html += '  <div class="arccw-card-class">' + escapeHtml(w.Class) + '</div>';
    html += '  <div class="arccw-card-stats">';
    html += '    <div class="arccw-card-stat">Урон: <b>' + eff.Damage + (eff.Num > 1 ? 'x' + eff.Num : '') + '</b></div>';
    html += '    <div class="arccw-card-stat">RPM: <b>' + eff.RPM + '</b></div>';
    html += '    <div class="arccw-card-stat">DPS: <b>' + dps + '</b></div>';
    html += '    <div class="arccw-card-stat">Обойма: <b>' + (eff.Clip || '-') + '</b></div>';
    html += '  </div>';
    html += '</div>';
  });

  container.innerHTML = html;

  container.querySelectorAll('.arccw-wep-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var cls = card.getAttribute('data-wep');
      arccwState.selectedClass = cls;
      container.querySelectorAll('.arccw-wep-card').forEach(function(c) { c.classList.remove('active'); });
      card.classList.add('active');
      renderArcCWInspector(cls);
    });
  });

  renderArcCWInspector(arccwState.selectedClass);
}

function renderArcCWInspector(wepClass) {
  var container = document.getElementById('arccw-inspector-container');
  if (!container) return;

  var stock = getWeaponStock(wepClass);
  var eff = getWeaponEffective(wepClass);
  var ovr = arccwState.overrides[wepClass] || {};
  var isMod = isWeaponModified(wepClass);
  var dps = calcArcCWDPS(eff.Damage, eff.RPM, eff.Num);
  var dpsMin = calcArcCWDPS(eff.DamageMin, eff.RPM, eff.Num);

  function field(prop, label, unit, step) {
    var val = eff[prop] !== undefined ? eff[prop] : '';
    var stockVal = stock ? stock[prop] : undefined;
    var changed = ovr[prop] !== undefined && stockVal !== undefined && ovr[prop] !== stockVal;
    var fhtml = '<div class="arccw-field ' + (changed ? 'is-changed' : '') + '">';
    fhtml += '  <label>';
    fhtml += '    <span>' + label + '</span>';
    if (changed) {
      fhtml += '    <span class="arccw-stock-diff">(было: ' + stockVal + ')</span>';
    } else if (stockVal !== undefined) {
      fhtml += '    <small>' + stockVal + '</small>';
    }
    fhtml += '  </label>';
    fhtml += '  <input type="number" step="' + (step || '1') + '" value="' + val + '" data-prop="' + prop + '" placeholder="' + (unit || '') + '">';
    fhtml += '</div>';
    return fhtml;
  }

  var h = '';
  h += '<div class="arccw-inspector-head">';
  h += '  <div class="arccw-inspector-titles">';
  h += '    <h3>';
  h += '      <i class="fas fa-crosshairs" style="color: var(--accent-gold);"></i>';
  h += '      <span>' + escapeHtml(eff.Name || wepClass) + '</span>';
  h += '      ' + (isMod ? '<span class="arccw-badge mod-tag">Модифицировано</span>' : '<span class="arccw-badge">Заводские параметры</span>');
  h += '    </h3>';
  h += '    <p>' + escapeHtml(wepClass) + ' &bull; ' + escapeHtml((stock && stock.Addon) || 'arccw') + ' &bull; ' + escapeHtml((stock && stock.TriviaClass) || 'Weapon') + '</p>';
  h += '  </div>';
  h += '  <div class="arccw-live-dps">';
  h += '    <div class="arccw-live-dps-item"><span>DPS ВБЛИЗИ</span><strong>' + dps + '</strong></div>';
  h += '    <div style="width: 1px; height: 24px; background: var(--border-color);"></div>';
  h += '    <div class="arccw-live-dps-item"><span>DPS ВДАЛИ</span><strong style="color: var(--text-secondary);">' + dpsMin + '</strong></div>';
  h += '  </div>';
  h += '</div>';

  h += '<div class="arccw-section-group">';
  h += '  <div class="arccw-group-title"><i class="fas fa-fire"></i> Урон и Дистанция</div>';
  h += '  <div class="arccw-fields-grid three-col">';
  h += field('Damage', 'Урон в упор', 'ед.', '1');
  h += field('DamageMin', 'Мин. урон', 'ед.', '1');
  h += field('Num', 'Дробин (Num)', 'шт.', '1');
  h += field('RangeMin', 'Старт спада (RangeMin)', 'м/юнит', '5');
  h += field('Range', 'Макс. дальность (Range)', 'м/юнит', '10');
  h += field('Penetration', 'Пробитие (Penetration)', 'мм', '1');
  h += '  </div>';
  h += '</div>';

  h += '<div class="arccw-section-group">';
  h += '  <div class="arccw-group-title"><i class="fas fa-bolt"></i> Скорострельность и Магазин</div>';
  h += '  <div class="arccw-fields-grid three-col">';
  h += field('RPM', 'Темп огня (RPM)', 'выстр/мин', '10');
  h += field('Clip', 'Размер обоймы', 'патр.', '1');
  h += field('AmmoPerShot', 'Расход за выстрел', 'патр.', '1');
  h += '  </div>';
  h += '</div>';

  h += '<div class="arccw-section-group">';
  h += '  <div class="arccw-group-title"><i class="fas fa-bullseye"></i> Точность и Разброс</div>';
  h += '  <div class="arccw-fields-grid">';
  h += field('MOA', 'Кучность ствола (MOA)', 'угл. мин', '0.1');
  h += field('HipDispersion', 'Разброс от бедра', 'штраф', '10');
  h += field('MoveDispersion', 'Разброс при беге', 'штраф', '10');
  h += field('JumpDispersion', 'Разброс в прыжке', 'штраф', '10');
  h += '  </div>';
  h += '</div>';

  h += '<div class="arccw-section-group">';
  h += '  <div class="arccw-group-title"><i class="fas fa-compress-arrows-alt"></i> Отдача</div>';
  h += '  <div class="arccw-fields-grid three-col">';
  h += field('Recoil', 'Вертикальная (Recoil)', 'сила', '0.05');
  h += field('RecoilSide', 'Боковой увод (Side)', 'сила', '0.05');
  h += field('RecoilRise', 'Подброс (Rise)', 'сила', '0.05');
  h += '  </div>';
  h += '</div>';

  h += '<div class="arccw-section-group">';
  h += '  <div class="arccw-group-title"><i class="fas fa-running"></i> Мобильность и Скорость</div>';
  h += '  <div class="arccw-fields-grid three-col">';
  h += field('SpeedMult', 'Скорость бега (SpeedMult)', '0.5-1.0', '0.05');
  h += field('SightedSpeedMult', 'Скорость в прицеле', '0.2-1.0', '0.05');
  h += field('SightTime', 'Время прицела (SightTime)', 'сек.', '0.05');
  h += '  </div>';
  h += '</div>';

  h += '<div class="arccw-section-group">';
  h += '  <div class="arccw-group-title"><i class="fas fa-thermometer-half"></i> Нагрев и Охлаждение</div>';
  h += '  <div class="arccw-fields-grid three-col">';
  h += field('HeatCapacity', 'Емкость нагрева', 'ед.', '1');
  h += field('HeatDissipation', 'Охлаждение в сек.', 'ед./сек', '1');
  h += field('HeatDelayTime', 'Задержка охлаждения', 'сек.', '0.1');
  h += '  </div>';
  h += '</div>';

  h += '<div class="arccw-inspector-actions">';
  h += '  <button class="btn btn-secondary" id="btn-arccw-reset-stock" type="button" ' + (!isMod ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : '') + '>';
  h += '    <i class="fas fa-undo"></i> Сбросить до заводских';
  h += '  </button>';
  h += '  <div style="display:flex;gap:8px;">';
  h += '    <button class="btn btn-save" id="btn-arccw-save-single" type="button">';
  h += '      <i class="fas fa-check"></i> Применить изменения';
  h += '    </button>';
  h += '  </div>';
  h += '</div>';

  container.innerHTML = h;

  container.querySelectorAll('input[data-prop]').forEach(function(inp) {
    inp.addEventListener('input', function() {
      var prop = inp.getAttribute('data-prop');
      var val = inp.value.trim();
      if (val === '') {
        deleteArcCWProp(wepClass, prop);
      } else {
        var numVal = parseFloat(val);
        setArcCWProp(wepClass, prop, isNaN(numVal) ? val : numVal);
      }

      var currentEff = getWeaponEffective(wepClass);
      var currentDPS = calcArcCWDPS(currentEff.Damage, currentEff.RPM, currentEff.Num);
      var currentDPSMin = calcArcCWDPS(currentEff.DamageMin, currentEff.RPM, currentEff.Num);
      var dpsItems = container.querySelectorAll('.arccw-live-dps-item strong');
      if (dpsItems && dpsItems[0]) dpsItems[0].textContent = currentDPS;
      if (dpsItems && dpsItems[1]) dpsItems[1].textContent = currentDPSMin;
    });
  });

  var btnReset = document.getElementById('btn-arccw-reset-stock');
  if (btnReset && isMod) {
    btnReset.addEventListener('click', function() {
      resetArcCWToStock(wepClass);
    });
  }

  var btnSaveSingle = document.getElementById('btn-arccw-save-single');
  if (btnSaveSingle) {
    btnSaveSingle.addEventListener('click', function() {
      saveArcCWToServer();
    });
  }
}

function setArcCWProp(wepClass, prop, val) {
  if (!arccwState.overrides[wepClass]) {
    var stock = getWeaponStock(wepClass);
    arccwState.overrides[wepClass] = {
      Name: stock ? stock.Name : wepClass
    };
  }
  arccwState.overrides[wepClass][prop] = val;

  var card = document.querySelector('.arccw-wep-card[data-wep="' + wepClass + '"]');
  if (card) {
    card.classList.toggle('is-modified', isWeaponModified(wepClass));
  }

  var modifiedCount = Object.keys(arccwState.overrides).filter(function(k) { return isWeaponModified(k); }).length;
  var modBadge = document.getElementById('mod-arccw-count');
  if (modBadge) modBadge.textContent = modifiedCount;
  var statMod = document.getElementById('stat-arccw-modified');
  if (statMod) statMod.textContent = modifiedCount;
}

function deleteArcCWProp(wepClass, prop) {
  if (arccwState.overrides[wepClass]) {
    delete arccwState.overrides[wepClass][prop];
    if (Object.keys(arccwState.overrides[wepClass]).length <= 1) {
      delete arccwState.overrides[wepClass];
    }
  }
}

function resetArcCWToStock(wepClass) {
  if (arccwState.overrides[wepClass]) {
    delete arccwState.overrides[wepClass];
  }
  showToast('Оружие ' + wepClass + ' сброшено до заводских параметров!', 'info');
  renderArcCWCatalog();
}

function generateArcCWLua() {
  var dateStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
  var lua = '-- ============================================================================\n' +
            '-- ArcCW Weapon Balance System for StarWarsRP\n' +
            '-- Модуль централизованного баланса вооружения ArcCW\n' +
            '-- Сгенерировано через Collapsar Config Editor: ' + dateStr + '\n' +
            '-- ============================================================================\n\n' +
            'ArcCW_Balance = ArcCW_Balance or {}\n' +
            'ArcCW_Balance.Enabled = true\n\n' +
            '-- Таблица ребаланса оружия\n' +
            '-- Все значения привязаны к классам SWEP\n' +
            'ArcCW_Balance.Weapons = {\n';

  var classes = Object.keys(arccwState.overrides).sort();
  classes.forEach(function(cls) {
    var ovr = arccwState.overrides[cls];
    if (!ovr || !isWeaponModified(cls)) return;

    lua += '    ["' + cls + '"] = {\n';
    if (ovr.Name) lua += '        Name = "' + ovr.Name + '",\n';
    if (ovr.Damage !== undefined) lua += '        Damage = ' + ovr.Damage + ',\n';
    if (ovr.DamageMin !== undefined) lua += '        DamageMin = ' + ovr.DamageMin + ',\n';
    if (ovr.Num !== undefined && ovr.Num > 1) lua += '        Num = ' + ovr.Num + ',\n';
    if (ovr.RPM !== undefined) lua += '        RPM = ' + ovr.RPM + ',\n';
    if (ovr.Clip !== undefined) lua += '        Clip = ' + ovr.Clip + ',\n';
    if (ovr.AmmoPerShot !== undefined) lua += '        AmmoPerShot = ' + ovr.AmmoPerShot + ',\n';
    if (ovr.Recoil !== undefined) lua += '        Recoil = ' + ovr.Recoil + ',\n';
    if (ovr.RecoilSide !== undefined) lua += '        RecoilSide = ' + ovr.RecoilSide + ',\n';
    if (ovr.RecoilRise !== undefined) lua += '        RecoilRise = ' + ovr.RecoilRise + ',\n';
    if (ovr.Range !== undefined) lua += '        Range = ' + ovr.Range + ',\n';
    if (ovr.RangeMin !== undefined) lua += '        RangeMin = ' + ovr.RangeMin + ',\n';
    if (ovr.MOA !== undefined) lua += '        MOA = ' + ovr.MOA + ',\n';
    if (ovr.Penetration !== undefined) lua += '        Penetration = ' + ovr.Penetration + ',\n';
    if (ovr.SpeedMult !== undefined) lua += '        SpeedMult = ' + ovr.SpeedMult + ',\n';
    if (ovr.SightedSpeedMult !== undefined) lua += '        SightedSpeedMult = ' + ovr.SightedSpeedMult + ',\n';
    if (ovr.SightTime !== undefined) lua += '        SightTime = ' + ovr.SightTime + ',\n';
    if (ovr.HeatCapacity !== undefined) lua += '        HeatCapacity = ' + ovr.HeatCapacity + ',\n';
    if (ovr.HeatDissipation !== undefined) lua += '        HeatDissipation = ' + ovr.HeatDissipation + ',\n';
    if (ovr.HeatDelayTime !== undefined) lua += '        HeatDelayTime = ' + ovr.HeatDelayTime + ',\n';
    lua += '    },\n';
  });

  lua += '}\n';

  if (arccwState.rawLuaTail) {
    lua += arccwState.rawLuaTail;
  }

  return lua;
}

async function saveArcCWToServer() {
  var saveBtn = document.getElementById('btn-arccw-save-server');
  var saveBtnExp = document.getElementById('btn-save-arccw-server-export');
  var saveBtnSingle = document.getElementById('btn-arccw-save-single');
  var origText = saveBtn ? saveBtn.innerHTML : '';
  var origTextSingle = saveBtnSingle ? saveBtnSingle.innerHTML : '';

  if (saveBtn) {
    saveBtn.disabled = true;
    saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Сохранение...';
  }
  if (saveBtnExp) {
    saveBtnExp.disabled = true;
    saveBtnExp.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Сохранение...';
  }
  if (saveBtnSingle) {
    saveBtnSingle.disabled = true;
    saveBtnSingle.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Сохранение...';
  }

  try {
    var luaContent = generateArcCWLua();
    var apiUrl = getApiUrl('/api/save-arccw');
    console.log('[ArcCW] Sending save request to:', apiUrl);

    var liveApi = (typeof api !== 'undefined' && api) || window.api;
    var isSocketReady = liveApi && liveApi.socket && liveApi.socket.readyState === 1;
    if (isSocketReady) {
      liveApi.sendCommand('editor_save_arccw', '', { lua: luaContent });
    }

    var res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        luaContent: luaContent,
        overrides: arccwState.overrides
      })
    });

    var rawText = await res.text();
    var data;
    try {
      data = JSON.parse(rawText);
    } catch (parseErr) {
      throw new Error('Ответ сервера не является JSON (код ' + res.status + '): ' + rawText.slice(0, 100));
    }

    if (res.ok && data.success) {
      var msg = isSocketReady
        ? 'Баланс ArcCW сохранён и применён на сервере и у всех игроков в игре!'
        : 'Баланс ArcCW успешно сохранён на сервере!';
      showToast(msg, 'success', 5000);
      var exportArea = document.getElementById('export-arccw-lua-text');
      if (exportArea) exportArea.value = luaContent;
      renderArcCWCatalog();
      if (isSocketReady) {
        setTimeout(function() {
          liveApi.sendCommand('get_editor_data', '');
        }, 400);
      }
    } else {
      showToast('Ошибка сохранения баланса: ' + (data.error || data.message || ('HTTP ' + res.status)), 'error');
    }
  } catch (err) {
    console.error('Save ArcCW balance error:', err);
    showToast('Ошибка соединения при сохранении: ' + err.message, 'error');
  } finally {
    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.innerHTML = origText;
    }
    if (saveBtnExp) {
      saveBtnExp.disabled = false;
      saveBtnExp.innerHTML = 'Сохранить на сервере';
    }
    if (saveBtnSingle) {
      saveBtnSingle.disabled = false;
      saveBtnSingle.innerHTML = origTextSingle || '<i class="fas fa-check"></i> Применить к оружию';
    }
  }
}

async function fetchArcCWData() {
  try {
    var apiUrl = getApiUrl('/api/arccw');
    var res = await fetch(apiUrl);
    if (res.ok) {
      var data = await res.json();
      if (data.success) {
        if (data.weapons && data.weapons.length > 0) {
          arccwState.weapons = data.weapons;
        }
        if (data.overrides && Object.keys(data.overrides).length > 0) {
          arccwState.overrides = data.overrides;
        }
        if (data.rawLua) {
          var splitIdx = data.rawLua.indexOf('ArcCW_Balance.Grenades = {');
          if (splitIdx !== -1) {
            var tail = data.rawLua.substring(splitIdx);
            var autoLoadIdx = tail.indexOf('collapsar_arccw_balance_latest.txt');
            if (autoLoadIdx !== -1) {
              var commentIdx = tail.lastIndexOf('--', autoLoadIdx);
              if (commentIdx !== -1) {
                tail = tail.substring(0, commentIdx).trimEnd() + '\n';
              }
            }
            arccwState.rawLuaTail = '\n-- ============================================================================\n-- БАЛАНС ГРАНАТ И ВЗРЫВЧАТКИ (Сущности брошенных гранат)\n-- ============================================================================\n' + tail;
          }
        }
        console.log('[ArcCW Balance] Synchronized with server data:', arccwState.weapons.length, 'weapons,', Object.keys(arccwState.overrides).length, 'overrides');
        renderArcCWCatalog();
        if (arccwState.selectedClass) {
          renderArcCWInspector(arccwState.selectedClass);
        }
      }
    }
  } catch (e) {
    console.warn('[ArcCW Balance] Backend fetch unavailable, using bundled data.');
  }
}

function setupArcCWEventListeners() {
  var arccwNavBtn = document.getElementById('tab-nav-arccw');
  if (arccwNavBtn) {
    arccwNavBtn.addEventListener('click', function() { switchMainModule('arccw'); });
  }

  document.querySelectorAll('#arccw-category-bar .arsenal-subtab').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#arccw-category-bar .arsenal-subtab').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      arccwState.activeCategory = btn.getAttribute('data-arccw-cat') || 'all';
      renderArcCWCatalog();
    });
  });

  var searchInput = document.getElementById('arccw-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      arccwState.searchQuery = e.target.value.trim();
      renderArcCWCatalog();
    });
  }

  var sortSelect = document.getElementById('arccw-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', function(e) {
      arccwState.sortBy = e.target.value;
      renderArcCWCatalog();
    });
  }

  var btnSave = document.getElementById('btn-arccw-save-server');
  if (btnSave) {
    btnSave.addEventListener('click', saveArcCWToServer);
  }
  var btnSaveExp = document.getElementById('btn-save-arccw-server-export');
  if (btnSaveExp) {
    btnSaveExp.addEventListener('click', saveArcCWToServer);
  }

  var btnExportView = document.getElementById('btn-arccw-export-view');
  var mainWorkspace = document.getElementById('arccw-workspace-main');
  var exportPane = document.getElementById('arccw-pane-export');
  var exportArea = document.getElementById('export-arccw-lua-text');
  if (btnExportView && mainWorkspace && exportPane && exportArea) {
    btnExportView.addEventListener('click', function() {
      exportArea.value = generateArcCWLua();
      mainWorkspace.style.display = 'none';
      exportPane.style.display = 'block';
    });
  }

  var btnCloseExp = document.getElementById('btn-close-arccw-export');
  if (btnCloseExp && mainWorkspace && exportPane) {
    btnCloseExp.addEventListener('click', function() {
      exportPane.style.display = 'none';
      mainWorkspace.style.display = 'grid';
    });
  }

  var btnCopy = document.getElementById('btn-copy-arccw-lua');
  if (btnCopy && exportArea) {
    btnCopy.addEventListener('click', function() {
      navigator.clipboard.writeText(exportArea.value).then(function() {
        showToast('Конфигурация sh_arccw_balance.lua скопирована!', 'success');
      });
    });
  }

  var btnDownload = document.getElementById('btn-download-arccw-lua');
  if (btnDownload && exportArea) {
    btnDownload.addEventListener('click', function() {
      var blob = new Blob([exportArea.value], { type: 'text/plain;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'sh_arccw_balance.lua';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Файл sh_arccw_balance.lua скачан!', 'success');
    });
  }
}


  // Window exposures
  window.renderArsenalAttachments = renderArsenalAttachments;
  window.openArsenalAttModal = openArsenalAttModal;
  window.editArsenalAttachment = editArsenalAttachment;
  window.duplicateArsenalAttachment = duplicateArsenalAttachment;
  window.deleteArsenalAttachment = deleteArsenalAttachment;
  window.addSlotPresetScopes = addSlotPresetScopes;
  window.addSlotPresetCartridges = addSlotPresetCartridges;
  window.addSlotPresetCartridgesSniper = addSlotPresetCartridgesSniper;
  window.addSlotPresetUBGL = addSlotPresetUBGL;
  window.addSlotPresetLauncher = addSlotPresetLauncher;

  window.openBackupsModal = openBackupsModal;
  window.renderUnifiedBackupsTable = renderUnifiedBackupsTable;
  window.createManualUnifiedBackupClick = createManualUnifiedBackupClick;
  window.restoreUnifiedBackup = restoreUnifiedBackup;
  window.exportSingleUnifiedBackup = exportSingleUnifiedBackup;
  window.deleteUnifiedBackup = deleteUnifiedBackup;
  window.createUnifiedBackupSnapshot = createUnifiedBackupSnapshot;

  window.setupArcCWEventListeners = setupArcCWEventListeners;
  window.renderArcCWCatalog = renderArcCWCatalog;
  window.renderArcCWInspector = renderArcCWInspector;
  window.fetchArcCWData = fetchArcCWData;
  window.arccwState = arccwState;

  function initAllSubsystems() {
    initEditorBundle();
    try {
      setupAttachmentsEventListeners();
      setupUnifiedBackupsEventListeners();
      updateBackupsBadges();
      renderUnifiedBackupsTable();
      updateArsenalAttachmentBadges();
    } catch(e) {
      console.error('Initialization error in attachments/backups:', e);
    }
    try {
      setupArcCWEventListeners();
      renderArcCWCatalog();
      fetchArcCWData();
    } catch(e2) {
      console.error('Initialization error in ArcCW subsystem:', e2);
    }
  }

  // Safe initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllSubsystems);
  } else {
    initAllSubsystems();
  }
})();
