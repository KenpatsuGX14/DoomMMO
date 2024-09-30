//=============================================================================
// Yanfly Engine Plugins - Equip Core
// YEP_EquipCore.js
// Traducción al español: Rekiem
//=============================================================================

var Imported = Imported || {};
Imported.YEP_EquipCore = true;

var Yanfly = Yanfly || {};
Yanfly.Equip = Yanfly.Equip || {};

//=============================================================================
 /*:
 * @plugindesc v1.07 Permite que el sistema de equipo sea mas
 * flexible para permitir slots de equipos únicos por clase.
 * @author Yanfly Engine Plugins (Es)
 *
 * @param ---General---
 * @default
 *
 * @param Text Align
 * @desc Como alinear el texto para la ventana de comando.
 * left(Izquierda)    center(Centro)    right(Derecha)
 * @default center
 *
 * @param Finish Command
 * @desc El texto de comando usado para salir de la escena de equipo.
 * @default Finish
 *
 * @param Remove Text
 * @desc El texto usado para mostrar el comando "Remove" en la lista de
 * equipamiento de item.
 * @default Remove
 *
 * @param Remove Icon
 * @desc El icono usado para mostrar próximo del comando "Remove" en la
 * lista de equipamiento de item.
 * @default 16
 *
 * @param Empty Text
 * @desc El texto usado para mostrar una pieza de equipamiento "Empty".
 * @default <Empty>
 *
 * @param Empty Icon
 * @desc El icono usado para mostrar próximo de la pieza de equipamiento
 * "Empty" en la lista de equipo.
 * @default 16
 *
 * @param ---Rules(Reglas)---
 * @default
 *
 * @param Non-Removable Types
 * @desc Estos tipos tienen que tener siempre un item equipado y no pueden
 * estar vacíos. Separe los tipos de ID's con un espacio.
 * @default 1
 *
 * @param Non-Optimized Types
 * @desc Estos tipos serán ignorados cuando el personaje optimiza el equipo.
 * Separe los tipos de ID's con un espacio.
 * @default 5
 *
 * @help
 * ============================================================================
 * Introducción
 * ============================================================================
 *
 * Este plugin altera varios aspectos en relación al manejo de equipamiento.
 * Los cambios son los siguientes:
 *
 * 1. Scene_Equip
 * Scene_Equip se ha modificado para parecer diferente. Esto se hace
 * principalmente para hacer que las escenas del menú principal parezcan
 * uniformes y mantengan todo familiarizado para los jugadores. Además de eso,
 * la ventana de comando se ha ajustado para ser encajar mejor por plugins de 
 * extensión en el futuro podrán aficionar comandos en la ventana de comando
 * y/o la escena.
 *
 * 2. Equipment Type Handling - Manejo de Tipo de Equipo
 * Los personajes ya no tendrán mas un ajuste de slot de equipo universal.
 * Ahora, diferentes clases pueden usar diferentes configuraciones con solo
 * añadir algunos cuantos notetags en el notebox classe. Además de eso, los
 * tipos de quipo en el pasado con nombres iguales serian tratados como tipos
 * separados. Ahora, los tipos de equipos con nombres iguales serán tratados
 * como el mismo tipo.
 *
 * 3. Equipment Rulings - Reglas de Equipos
 * Ahora, ciertos tipos de equipos pueden o no ser removidos. Por ejemplo, este
 * plugin puede establecerlo de modo que el slot de Arma siempre deba de tener
 * equipada alguna cosa y que el jugador no pueda manualmente dejarlo vacio
 * (El juego, por otro lado, puede realizar esto a través de eventos). Además
 * de eso, optimizar equipos puede ser restringido para ciertos tipos de equipo
 * que son mejores si se deciden manualmente (como accesorios).
 *
 * 4. Parameter Control - Control de Parámetros
 * Los parámetros de equipo ahora pueden ser ajustados a través de notetags
 * para tener un valor grande o un valor personalizado (a través de código).
 * Esto permite a los equipos a no ser mas items estáticos, pero en su lugar,
 * el equipo ahora pueden ser dinámicos y pueden cambiar a lo largo del juego.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Usted puede usar los siguientes tags para cambiar la configuración del
 * equipo de una clase.
 *
 * Notetag de Clase:
 *   <Equip Slot: x>      Ejemplo: <Equip Slot: 1, 2, 3, 4, 5, 5, 5, 5>
 *   <Equip Slot: x, x, x>
 *   Cambia los slots de quipo de esta clase para X. Usar números repetidos
 *   hace que los tipos de quipo sean duplicados y que la clase puede equipar
 *   múltiples quipos de ese tipo. Para encontrar el ID de tipo de equipo, 
 *   vaya a la pestaña de Tipos de su banco de datos y procure buscar el tipo
 *   de ID.
 *
 *   Si no te gusta el método anterior para personalizar los slots de equipo,
 *   puede usar los siguientes notetags en su lugar.
 *
 *   <Equip Slot>         Ejemplo: <Equip Slot>
 *    string                        Weapon
 *    string                        Armor
 *    string                        Accessory
 *    string                        Accessory
 *   </Equip Slot>                 </Equip Slot>
 *   Reemplace 'string' con el nombre de entrada de tipo de equipo. Mayúsculas
 *   y minúsculas hacen la diferencia. entonces si el string no combina
 *   exactamente con el nombre de entrada, el slot no será concedido para la
 *   clase. Múltiples copias de los nombres de entrada significa que la clase 
 *   puede equipar múltiples equipamientos de ese tipo. Todo funciona de la 
 *   misma forma que el notetag previo.
 *
 * Notetag de Arma y Armadura:
 *   <stat: +x>
 *   <stat: -x>
 *   Permite a la pieza de arma o armadura a ganar o perder X cantidad de 
 *   status. Reemplace "stat" por "hp", "mp", "atk", "def", "mat", "mdf",
 *   "agi", o "luk" para alterar el status especifico. Esto permite a la
 *   pieza de equipo a ir mas allá de la limitación por defecto del editor
 *   desde que el valor máximo lo permita para ello. Los cambios realizados
 *   aquí alteran los parámetros de base
 *
 * ============================================================================
 * Lunatic Mode - Custom Parameters - Parámetros Personalizados
 * ============================================================================
 *
 *   <Custom Parameters>  Ejemplo: <Custom Parameters>
 *    code                          atk = $gameVariables.value(1);
 *    code                          mat = atk / 2;
 *    code                          all = $gameParty.members().length;
 *    code                         </Custom Parameters>
 *   </Code Parameters>
 *   Permite a los parámetros a tener tasas personalizadas ajustadas por código
 *   Los siguientes parámetros son definidos: 'maxhp', 'maxmp', 'atk', 'def',
 *   'mat', 'mdf', 'agi', 'luk', e 'all'. El parametro 'all' afectara a todos
 *   los parámetros. Los cambios realizados aquí no alteran los parámetros de
 *   base, pero en su lugar, son adicionados a los parámetros de base.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.07:
 * - Fixed a bug with 'Optimize' and 'Remove All' not refreshing windows.
 *
 * Version 1.06:
 * - Fixed a bug with 'Change Equipment' event where it would only change the
 * slot of the marked equipment rather than the slot type.
 *
 * Version 1.05:
 * - Fixed an issue where unequipping items can kill actors.
 *
 * Version 1.04a:
 * - Fixed a bug and rewrote the initializing equipment process.
 *
 * Version 1.03:
 * - Fixed an bug that resulted in null object errors.
 *
 * Version 1.02:
 * - Fixed an issue that did not keep HP and MP rates the same when using the
 * optimize and clear commands.
 *
 * Version 1.01:
 * - Fixed a bug that did not update the stats properly when compared.
 *
 * Version 1.00:
 * - Finished plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_EquipCore');
Yanfly.Param = Yanfly.Param || {};
Yanfly.Icon = Yanfly.Icon || {};

Yanfly.Param.EquipTextAlign = String(Yanfly.Parameters['Text Align']);
Yanfly.Param.EquipFinishCmd = String(Yanfly.Parameters['Finish Command']);
Yanfly.Param.EquipRemoveText = String(Yanfly.Parameters['Remove Text']);
Yanfly.Icon.RemoveEquip = Number(Yanfly.Parameters['Remove Icon']);
Yanfly.Param.EquipEmptyText = String(Yanfly.Parameters['Empty Text']);
Yanfly.Icon.EmptyEquip = Number(Yanfly.Parameters['Empty Icon']);
Yanfly.Data = String(Yanfly.Parameters['Non-Removable Types']);
Yanfly.Data = Yanfly.Data.split(' ');
Yanfly.Param.EquipNonRemove = [];
for (Yanfly.i = 0; Yanfly.i < Yanfly.Data.length; ++Yanfly.i) {
  Yanfly.Param.EquipNonRemove.push(parseInt(Yanfly.Data[Yanfly.i]));
};
Yanfly.Data = String(Yanfly.Parameters['Non-Optimized Types']);
Yanfly.Data = Yanfly.Data.split(' ');
Yanfly.Param.EquipNonOptimized = [];
for (Yanfly.i = 0; Yanfly.i < Yanfly.Data.length; ++Yanfly.i) {
  Yanfly.Param.EquipNonOptimized.push(parseInt(Yanfly.Data[Yanfly.i]));
};

//=============================================================================
// DataManager
//=============================================================================

Yanfly.Equip.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!Yanfly.Equip.DataManager_isDatabaseLoaded.call(this)) return false;
		DataManager.processEquipNotetags1($dataClasses);
    DataManager.processEquipNotetags2($dataWeapons);
    DataManager.processEquipNotetags2($dataArmors);
		return true;
};

DataManager.processEquipNotetags1 = function(group) {
	var note1 = /<(?:EQUIP SLOT|equip slots):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note2 = /<(?:EQUIP SLOT|equip slots)>/i;
  var note3 = /<\/(?:EQUIP SLOT|equip slots)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.equipSlots = [];
    var equipSlots = false;

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.equipSlots = obj.equipSlots.concat(array);
			} else if (line.match(note2)) {
        equipSlots = true;
      } else if (line.match(note3)) {
        equipSlots = false;
      } else if (equipSlots && line.match(/[ ]*(.*)/i)) {
        var name = String(RegExp.$1);
        var slotId = $dataSystem.equipTypes.indexOf(name);
        if (slotId >= 0) obj.equipSlots.push(slotId);
      }
		}
    if (obj.equipSlots.length <= 0) this.setDefaultEquipSlots(obj);
	}
};

DataManager.setDefaultEquipSlots = function(obj) {
    for (var i = 1; i < $dataSystem.equipTypes.length; ++i) {
      var name = $dataSystem.equipTypes[i];
      var slotId = $dataSystem.equipTypes.indexOf(name);
      if (slotId >= 0) obj.equipSlots.push(slotId);
    }
};

DataManager.processEquipNotetags2 = function(group) {
	var note1 = /<(?:PARAMETER EVAL|custom parameter|custom parameters)>/i;
  var note2 = /<\/(?:PARAMETER EVAL|custom parameter|custom parameters)>/i;
  var note3 = /<(.*):[ ]([\+\-]\d+)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.parameterEval = '';
    var parameterEval = false;

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
        parameterEval = true;
			} else if (line.match(note2)) {
        parameterEval = false;
      } else if (parameterEval) {
        obj.parameterEval = obj.parameterEval + line + '\n';
      } else if (line.match(note3)) {
        var stat = String(RegExp.$1).toUpperCase();
				var value = parseInt(RegExp.$2);
				switch (stat) {
					case 'HP':
		      case 'MAXHP':
		      case 'MAX HP':
						obj.params[0] = value;
						break;
					case 'MP':
		      case 'MAXMP':
		      case 'MAX MP':
		      case 'SP':
		      case 'MAXSP':
		      case 'MAX SP':
						obj.params[1] = value;
						break;
					case 'ATK':
		      case 'STR':
						obj.params[2] = value;
						break;
					case 'DEF':
						obj.params[3] = value;
						break;
					case 'MAT':
		      case 'INT' || 'SPI':
						obj.params[4] = value;
						break;
					case 'MDF':
		      case 'RES':
						obj.params[5] = value;
						break;
					case 'AGI':
		      case 'SPD':
						obj.params[6] = value;
						break;
					case 'LUK':
						obj.params[7] = value;
						break;
          }
			}
		}
	}
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.initEquips = function(equips) {
    var equips = this.convertInitEquips(equips);
    this.equipInitEquips(equips);
    this.releaseUnequippableItems(true);
    this.recoverAll();
    this.refresh();
};

Game_Actor.prototype.convertInitEquips = function(equips) {
    var items = [];
    for (var i = 0; i < equips.length; ++i) {
      var equipId = equips[i];
      if (equipId <= 0) continue;
      var equipType = $dataSystem.equipTypes[i + 1];
      if (equipType === $dataSystem.equipTypes[1] ||
      (i === 1 && this.isDualWield())) {
        var equip = $dataWeapons[equipId];
      } else {
        var equip = $dataArmors[equipId];
      }
      items.push(equip);
    }
    return items;
};

Game_Actor.prototype.equipInitEquips = function(equips) {
    var slots = this.equipSlots();
    var maxSlots = slots.length;
    this._equips = [];
    for (var i = 0; i < maxSlots; ++i) {
      this._equips[i] = new Game_Item();
    }
    for (var i = 0; i < maxSlots; ++i) {
      var slotType = slots[i];
      var equip = this.grabInitEquips(equips, slotType);
      if (this.canEquip(equip)) this._equips[i].setObject(equip);
    }
};

Game_Actor.prototype.grabInitEquips = function(equips, slotType) {
    var item = null;
    for (var i = 0; i < equips.length; ++i) {
      var equip = equips[i];
      if (!equip) continue;
      if (slotType === 1 && DataManager.isWeapon(equip)) {
        item = equip;
        break;
      } else if (equip.etypeId === slotType) {
        item = equip;
        break;
      }
    }
    if (item) equips[i] = null;
    return item;
};

Game_Actor.prototype.equipSlots = function() {
    var slots = this.currentClass().equipSlots.slice();
    if (slots.length >= 2 && this.isDualWield()) slots[1] = 1;
    return slots;
};

Yanfly.Equip.Game_Actor_equips = Game_Actor.prototype.equips;
Game_Actor.prototype.equips = function() {
    for (var i = 0; i < this.currentClass().equipSlots.length; ++i) {
      if (this._equips[i] === undefined || this._equips[i] === null) {
        this._equips[i] = new Game_Item();
      }
    }
    return Yanfly.Equip.Game_Actor_equips.call(this);
};

Yanfly.Equip.Game_Actor_changeEquip = Game_Actor.prototype.changeEquip;
Game_Actor.prototype.changeEquip = function(slotId, item) {
    if (!this._equips[slotId]) this._equips[slotId] = new Game_Item();
    Yanfly.Equip.Game_Actor_changeEquip.call(this, slotId, item);
};

Yanfly.Equip.Game_Actor_forceChangeEquip =
    Game_Actor.prototype.forceChangeEquip;
Game_Actor.prototype.forceChangeEquip = function(slotId, item) {
    if (!this._equips[slotId]) {
      this._equips[slotId] = new Game_Item();
      this._equips[slotId].setEquip(this.equipSlots()[slotId] === 1, 0);
    }
    Yanfly.Equip.Game_Actor_forceChangeEquip.call(this, slotId, item);
};

Yanfly.Equip.Game_Actor_isEquipChangeOk = Game_Actor.prototype.isEquipChangeOk;
Game_Actor.prototype.isEquipChangeOk = function(slotId) {
    if ($gameTemp._clearEquipments) {
      var typeId = this.equipSlots()[slotId];
      if (Yanfly.Param.EquipNonRemove.contains(typeId)) return false;
    }
    if ($gameTemp._optimizeEquipments) {
      var typeId = this.equipSlots()[slotId];
      if (Yanfly.Param.EquipNonOptimized.contains(typeId)) return false;
    }
    return Yanfly.Equip.Game_Actor_isEquipChangeOk.call(this, slotId);
};

Yanfly.Equip.Game_Actor_paramPlus = Game_Actor.prototype.paramPlus;
Game_Actor.prototype.paramPlus = function(paramId) {
    value = Yanfly.Equip.Game_Actor_paramPlus.call(this, paramId);
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
      var item = equips[i];
      if (!item) continue;
      value += this.customParamPlus(item, paramId);
      value += this.evalParamPlus(item, paramId);
    }
    return value;
};

Game_Actor.prototype.customParamPlus = function(item, paramId) {
    return 0;
};

Game_Actor.prototype.evalParamPlus = function(item, paramId) {
    if (!item) return 0;
    if (!item.parameterEval || item.parameterEval === '') return 0;
    var value = 0;
    var hp = 0;
    var maxhp = 0;
    var mhp = 0;
    var mp = 0;
    var maxmp = 0;
    var mmp = 0;
    var sp = 0;
    var maxsp = 0;
    var msp = 0;
    var atk = 0;
    var str = 0;
    var def = 0;
    var mat = 0;
    var int = 0;
    var spi = 0;
    var mdf = 0;
    var res = 0;
    var agi = 0;
    var spd = 0;
    var luk = 0;
    var all = 0;
    var a = this;
    var user = this;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    eval(item.parameterEval);
    switch (paramId) {
      case 0:
        value += hp + maxhp + mhp;
        break;
      case 1:
        value += mp + maxmp + mmp + sp + maxsp + msp;
        break;
      case 2:
        value += atk + str;
        break;
      case 3:
        value += def;
        break;
      case 4:
        value += mat + int + spi;
        break;
      case 5:
        value += mdf + res;
        break;
      case 6:
        value += agi + spd;
        break;
      case 7:
        value += luk;
        break;
    }
    return value + all;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

// Change Equipment
Game_Interpreter.prototype.command319 = function() {
    var actor = $gameActors.actor(this._params[0]);
    if (!actor) return true;
    var index = actor.equipSlots().indexOf(this._params[1]) + 1;
    actor.changeEquipById(index, this._params[2]);
    return true;
};

//=============================================================================
// Window_EquipCommand
//=============================================================================

Window_EquipCommand.prototype.windowWidth = function() {
    return 240;
};

Window_EquipCommand.prototype.maxCols = function() {
    return 1;
};

Window_EquipCommand.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows());
};

Window_EquipCommand.prototype.numVisibleRows = function() {
    return 4;
};

Window_EquipCommand.prototype.itemTextAlign = function() {
    return Yanfly.Param.EquipTextAlign;
};

Yanfly.Equip.Window_EquipCommand_makeCommandList =
    Window_EquipCommand.prototype.makeCommandList;
Window_EquipCommand.prototype.makeCommandList = function() {
    Yanfly.Equip.Window_EquipCommand_makeCommandList.call(this);
    this.addCustomCommand();
    this.addFinishCommand();
};

Window_EquipCommand.prototype.addCustomCommand = function() {
};

Window_EquipCommand.prototype.addFinishCommand = function() {
    this.addCommand(Yanfly.Param.EquipFinishCmd, 'cancel');
};

//=============================================================================
// Window_EquipSlot
//=============================================================================

Yanfly.Equip.Window_EquipSlot_setActor = Window_EquipSlot.prototype.setActor;
Window_EquipSlot.prototype.setActor = function(actor) {
    this.setSlotNameWidth(actor);
    Yanfly.Equip.Window_EquipSlot_setActor.call(this, actor);
};

Window_EquipSlot.prototype.isEnabled = function(index) {
    if (this._actor) {
      return Yanfly.Equip.Game_Actor_isEquipChangeOk.call(this._actor, index);
    } else {
      return false;
    }
};

Window_EquipSlot.prototype.drawItem = function(index) {
    if (!this._actor) return;
    var rect = this.itemRectForText(index);
    this.changeTextColor(this.systemColor());
    this.changePaintOpacity(this.isEnabled(index));
    var ww1 = this._nameWidth;
    this.drawText(this.slotName(index), rect.x, rect.y, ww1);
    var ww2 = rect.width - ww1;
    var item = this._actor.equips()[index];
    if (item) {
      this.drawItemName(item, rect.x + ww1, rect.y, ww2);
    } else {
      this.drawEmptySlot(rect.x + ww1, rect.y, ww2);
    }
    this.changePaintOpacity(true);
};

Window_EquipSlot.prototype.setSlotNameWidth = function(actor) {
    if (!actor) return;
    this._nameWidth = 0;
    for (var i = 0; i < actor.equipSlots().length; ++i) {
      var text = $dataSystem.equipTypes[actor.equipSlots()[i]] + ' ';
      this._nameWidth = Math.max(this._nameWidth, this.textWidth(text));
    }
};

Window_EquipSlot.prototype.drawEmptySlot = function(wx, wy, ww) {
    this.changePaintOpacity(false);
    var ibw = Window_Base._iconWidth + 4;
    this.resetTextColor();
    this.drawIcon(Yanfly.Icon.EmptyEquip, wx + 2, wy + 2);
    var text = Yanfly.Param.EquipEmptyText;
    this.drawText(text, wx + ibw, wy, ww - ibw);
};

//=============================================================================
// Window_EquipItem
//=============================================================================

Window_EquipItem.prototype.maxCols = function() {
    return 1;
};

Yanfly.Equip.Window_EquipItem_setSlotId = Window_EquipItem.prototype.setSlotId;
Window_EquipItem.prototype.setSlotId = function(slotId) {
    // do nothing
};

Yanfly.Equip.Window_EquipItem_includes = Window_EquipItem.prototype.includes;
Window_EquipItem.prototype.includes = function(item) {
    if (item === null && this._actor && this._data.length > 0) {
      var typeId = this._actor.equipSlots()[this._slotId];
      if (Yanfly.Param.EquipNonRemove.contains(typeId)) return false;
    }
    return Yanfly.Equip.Window_EquipItem_includes.call(this, item);
};

Yanfly.Equip.Window_EquipItem_isEnabled =
    Window_EquipItem.prototype.isEnabled;
Window_EquipItem.prototype.isEnabled = function(item) {
    if (item === null && this._actor) {
      var typeId = this._actor.equipSlots()[this._slotId];
      if (Yanfly.Param.EquipNonRemove.contains(typeId)) return false;
    }
    return Yanfly.Equip.Window_EquipItem_isEnabled.call(this, item);
};

Yanfly.Equip.Window_EquipItem_drawItem = Window_EquipItem.prototype.drawItem;
Window_EquipItem.prototype.drawItem = function(index) {
    var item = this._data[index];
    if (item === null) {
      this.drawRemoveEquip(index);
    } else {
      Yanfly.Equip.Window_EquipItem_drawItem.call(this, index);
    }
};

Window_EquipItem.prototype.drawRemoveEquip = function(index) {
    if (!this.isEnabled(null)) return;
    var rect = this.itemRect(index);
    rect.width -= this.textPadding();
    this.changePaintOpacity(true);
    var ibw = Window_Base._iconWidth + 4;
    this.resetTextColor();
    this.drawIcon(Yanfly.Icon.RemoveEquip, rect.x + 2, rect.y + 2);
    var text = Yanfly.Param.EquipRemoveText;
    this.drawText(text, rect.x + ibw, rect.y, rect.width - ibw);
};

//=============================================================================
// Window_StatCompare
//=============================================================================

function Window_StatCompare() {
    this.initialize.apply(this, arguments);
}

Window_StatCompare.prototype = Object.create(Window_Base.prototype);
Window_StatCompare.prototype.constructor = Window_StatCompare;

Window_StatCompare.prototype.initialize = function(wx, wy, ww, wh) {
    Window_Base.prototype.initialize.call(this, wx, wy, ww, wh);
    this._actor = null;
    this._tempActor = null;
    this.refresh();
};

Window_StatCompare.prototype.createWidths = function() {
		this._paramNameWidth = 0;
		this._paramValueWidth = 0;
		this._arrowWidth = this.textWidth('\u2192' + ' ');
		var buffer = this.textWidth(' ');
		for (var i = 0; i < 8; ++i) {
			var value1 = this.textWidth(TextManager.param(i));
			var value2 = this.textWidth(Yanfly.Util.toGroup(this._actor.paramMax(i)));
			this._paramNameWidth = Math.max(value1, this._paramNameWidth);
			this._paramValueWidth = Math.max(value2, this._paramValueWidth);
		}
		this._bonusValueWidth = this._paramValueWidth;
		this._bonusValueWidth += this.textWidth('(+)') + buffer;
		this._paramNameWidth += buffer;
		this._paramValueWidth;
		if (this._paramNameWidth + this._paramValueWidth * 2 + this._arrowWidth +
			this._bonusValueWidth > this.contents.width) this._bonusValueWidth = 0;
};

Window_StatCompare.prototype.setActor = function(actor) {
    if (this._actor === actor) return;
    this._actor = actor;
		this.createWidths();
    this.refresh();
};

Window_StatCompare.prototype.refresh = function() {
    this.contents.clear();
    if (!this._actor) return;
    for (var i = 0; i < 8; ++i) {
        this.drawItem(0, this.lineHeight() * i, i);
    }
};

Window_StatCompare.prototype.setTempActor = function(tempActor) {
    if (this._tempActor === tempActor) return;
    this._tempActor = tempActor;
    this.refresh();
};

Window_StatCompare.prototype.drawItem = function(x, y, paramId) {
		this.drawDarkRect(x, y, this.contents.width, this.lineHeight());
		this.drawParamName(y, paramId);
    this.drawCurrentParam(y, paramId);
		this.drawRightArrow(y);
    if (!this._tempActor) return;
		this.drawNewParam(y, paramId);
		this.drawParamDifference(y, paramId);
};

Window_StatCompare.prototype.drawDarkRect = function(dx, dy, dw, dh) {
    var color = this.gaugeBackColor();
    this.changePaintOpacity(false);
    this.contents.fillRect(dx + 1, dy + 1, dw - 2, dh - 2, color);
    this.changePaintOpacity(true);
};

Window_StatCompare.prototype.drawParamName = function(y, paramId) {
    var x = this.textPadding();
		this.changeTextColor(this.systemColor());
    this.drawText(TextManager.param(paramId), x, y, this._paramNameWidth);
};

Window_StatCompare.prototype.drawCurrentParam = function(y, paramId) {
    var x = this.contents.width - this.textPadding();
		x -= this._paramValueWidth * 2 + this._arrowWidth + this._bonusValueWidth;
		this.resetTextColor();
		var actorparam = Yanfly.Util.toGroup(this._actor.param(paramId));
    this.drawText(actorparam, x, y, this._paramValueWidth, 'right');
};

Window_StatCompare.prototype.drawRightArrow = function(y) {
		var x = this.contents.width - this.textPadding();
		x -= this._paramValueWidth + this._arrowWidth + this._bonusValueWidth;
		var dw = this.textWidth('\u2192' + ' ');
		this.changeTextColor(this.systemColor());
    this.drawText('\u2192', x, y, dw, 'center');
};

Window_StatCompare.prototype.drawNewParam = function(y, paramId) {
		var x = this.contents.width - this.textPadding();
		x -= this._paramValueWidth + this._bonusValueWidth;
		var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId);
		var actorparam = Yanfly.Util.toGroup(newValue);
		this.changeTextColor(this.paramchangeTextColor(diffvalue));
    this.drawText(actorparam, x, y, this._paramValueWidth, 'right');
};

Window_StatCompare.prototype.drawParamDifference = function(y, paramId) {
		var x = this.contents.width - this.textPadding();
		x -= this._bonusValueWidth;
		var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId);
		if (diffvalue === 0) return;
		var actorparam = Yanfly.Util.toGroup(newValue);
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
		var text = Yanfly.Util.toGroup(diffvalue);
		if (diffvalue > 0) {
			text = ' (+' + text + ')';
		} else {
			text = ' (' + text + ')';
		}
    this.drawText(text, x, y, this._bonusValueWidth, 'left');
};

//=============================================================================
// Scene_Equip
//=============================================================================

Scene_Equip.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createCommandWindow();
    this.createStatusWindow();
    this.createSlotWindow();
    this.createItemWindow();
    this.createCompareWindow();
    this.refreshActor();
};

Scene_Equip.prototype.createCommandWindow = function() {
    var wy = this._helpWindow.height;
    this._commandWindow = new Window_EquipCommand(0, wy, 240);
    this._commandWindow.setHelpWindow(this._helpWindow);
    this._commandWindow.setHandler('equip', this.commandEquip.bind(this));
    this._commandWindow.setHandler('optimize', this.commandOptimize.bind(this));
    this._commandWindow.setHandler('clear', this.commandClear.bind(this));
    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._commandWindow.setHandler('pageup', this.previousActor.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_Equip.prototype.createStatusWindow = function() {
    var wx = this._commandWindow.width;
    var wy = this._helpWindow.height;
    var ww = Graphics.boxWidth - wx;
    var wh = this._commandWindow.height;
    this._statusWindow = new Window_SkillStatus(wx, wy, ww, wh);
    this.addWindow(this._statusWindow);
};

Scene_Equip.prototype.createSlotWindow = function() {
    var wy = this._commandWindow.y + this._commandWindow.height;
    var ww = Graphics.boxWidth / 2;
    var wh = Graphics.boxHeight - wy;
    this._slotWindow = new Window_EquipSlot(0, wy, ww, wh);
    this._slotWindow.setHelpWindow(this._helpWindow);
    this._slotWindow.setHandler('ok',       this.onSlotOk.bind(this));
    this._slotWindow.setHandler('cancel',   this.onSlotCancel.bind(this));
    this.addWindow(this._slotWindow);
};

Scene_Equip.prototype.createItemWindow = function() {
    var wy = this._slotWindow.y;
    var ww = Graphics.boxWidth / 2;
    var wh = Graphics.boxHeight - wy;
    this._itemWindow = new Window_EquipItem(0, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this._slotWindow.setItemWindow(this._itemWindow);
    this.addWindow(this._itemWindow);
    this._itemWindow.hide();
};

Scene_Equip.prototype.createCompareWindow = function() {
    var wx = this._itemWindow.width;
		var wy = this._itemWindow.y;
		var ww = Graphics.boxWidth - wx;
		var wh = Graphics.boxHeight - wy;
		this._compareWindow = new Window_StatCompare(wx, wy, ww, wh);
    this._slotWindow.setStatusWindow(this._compareWindow);
		this._itemWindow.setStatusWindow(this._compareWindow);
    this.addWindow(this._compareWindow);
};

Yanfly.Equip.Scene_Equip_refreshActor = Scene_Equip.prototype.refreshActor;
Scene_Equip.prototype.refreshActor = function() {
    Yanfly.Equip.Scene_Equip_refreshActor.call(this);
    this._compareWindow.setActor(this.actor());
};

Yanfly.Equip.Scene_Equip_commandOptimize =
    Scene_Equip.prototype.commandOptimize;
Scene_Equip.prototype.commandOptimize = function() {
    $gameTemp._optimizeEquipments = true;
    var hpRate = this.actor().hp / Math.max(1, this.actor().mhp);
    var mpRate = this.actor().mp / Math.max(1, this.actor().mmp);
    Yanfly.Equip.Scene_Equip_commandOptimize.call(this);
    $gameTemp._optimizeEquipments = false;
    var hpAmount = Math.max(1, parseInt(this.actor().mhp * hpRate));
    this.actor().setHp(hpAmount);
		this.actor().setMp(parseInt(this.actor().mmp * mpRate));
    this._compareWindow.refresh();
    this._statusWindow.refresh();
};

Yanfly.Equip.Scene_Equip_commandClear = Scene_Equip.prototype.commandClear;
Scene_Equip.prototype.commandClear = function() {
    $gameTemp._clearEquipments = true;
    var hpRate = this.actor().hp / Math.max(1, this.actor().mhp);
    var mpRate = this.actor().mp / Math.max(1, this.actor().mmp);
    Yanfly.Equip.Scene_Equip_commandClear.call(this);
    $gameTemp._clearEquipments = false;
    var hpAmount = Math.max(1, parseInt(this.actor().mhp * hpRate));
    this.actor().setHp(hpAmount);
		this.actor().setMp(parseInt(this.actor().mmp * mpRate));
    this._compareWindow.refresh();
    this._statusWindow.refresh();
};

Yanfly.Equip.Scene_Equip_onSlotOk = Scene_Equip.prototype.onSlotOk;
Scene_Equip.prototype.onSlotOk = function() {
    this._itemWindow._slotId = -1;
    var slotId = this._slotWindow.index();
    Yanfly.Equip.Window_EquipItem_setSlotId.call(this._itemWindow, slotId);
    Yanfly.Equip.Scene_Equip_onSlotOk.call(this);
    this._itemWindow.show();
};

Yanfly.Equip.Scene_Equip_onItemOk = Scene_Equip.prototype.onItemOk;
Scene_Equip.prototype.onItemOk = function() {
    var hpRate = this.actor().hp / Math.max(1, this.actor().mhp);
    var mpRate = this.actor().mp / Math.max(1, this.actor().mmp);
    Yanfly.Equip.Scene_Equip_onItemOk.call(this);
    var hpAmount = Math.max(1, parseInt(this.actor().mhp * hpRate));
    this.actor().setHp(hpAmount);
		this.actor().setMp(parseInt(this.actor().mmp * mpRate));
    this._itemWindow.hide();
    this._statusWindow.refresh();
};

Yanfly.Equip.Scene_Equip_onItemCancel = Scene_Equip.prototype.onItemCancel;
Scene_Equip.prototype.onItemCancel = function() {
    Yanfly.Equip.Scene_Equip_onItemCancel.call(this);
    this._itemWindow.hide();
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

if (!Yanfly.Util.toGroup) {
		Yanfly.Util.toGroup = function(inVal) {
				return inVal;
		}
};

//=============================================================================
// End of File
//=============================================================================