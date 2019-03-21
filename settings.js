//
// mod_settings
//   fab module settings
//

//
// edit existing process menu items
//
require(["mods/mod_ui","inputs/mod_inputs"], function(mod_ui, mod_inputs){
	mod_add_process([
		["name","PCB traces (1/128)"],
		["module","Roland_mill"],
		["controls","mod_path_image_21D_controls"],
		["routine","mod_Roland_Mill_path"],
		["command","mod_serial.py COM1 9600 dsrdtr"],
		["speed", "10"],
		["depth", "0.1"],
		["diameter", "0.2"],
		["offsets", "4"],
		["overlap", "25"],
		["error", "1.1"],
		["merge", "1.5"],
		])
	
	mod_edit_process([
		["name","PCB traces (1/64)"],
		["module","Roland_mill"],
		["command","mod_serial.py COM1 9600 dsrdtr"],
		["speed", "10"],
		["depth", "0.1"],
		["diameter", "0.4"],
		["offsets", "3"],
		["overlap", "25"],
		["error", "1.1"],
		["merge", "1.5"],
	   ])

	mod_edit_process([
		["name","PCB outline (1/32)"],
		["module","Roland_mill"],
		["command","mod_serial.py COM1 9600 dsrdtr"],
		["speed", "4"],
		["depth", "0.6"],
		["thickness", "1.7"],
		["diameter", "0.75"],
		["offsets", "1"],
		["error", "2"],
		["merge", "1.5"],
	   ])
	   	mod_add_process([
		["name","PCB drill (1/32)"],
		["module","Roland_mill"],
		["controls","mod_path_image_22D_controls"],
		["routine","mod_Roland_Mill_path"],
		["command","mod_serial.py COM1 9600 dsrdtr"],
		["speed", "4"],
		["depth", "0.6"],
		["thickness", "1.7"],
		["diameter", "0.75"],
		["offsets", "1"],
		["error", "2"],
		["merge", "1.5"],
		])
});
/*
mod_edit_process([
	["name","PCB traces (1/64)"],
	["module","Roland_mill"],
	["command",""],
	["speed", "10"],
	["depth", "0.1"],
	["diameter", "0.2"],
	["offsets", "3"],
	["overlap", "25"],
	["error", "1.1"],
	["merge", "1.5"],
   ])

mod_edit_process([
	["name","PCB outline (1/32)"],
	["module","Roland_mill"],
	["command",""],
	["speed", "4"],
	["depth", "0.6"],
	["thickness", "1.7"],
	["diameter", "0.75"],
	["offsets", "1"],
	["error", "2"],
	["merge", "1.5"],
   ])

mod_edit_process([
   ["name","wax rough cut (1/8)"],
   ["module","Roland_mill"],
   ["command","mod_print.py /dev/usb/lp2 ';'"],
   ])

mod_edit_process([
   ["name","wax finish cut (1/8)"],
   ["module","Roland_mill"],
   ["command","mod_print.py /dev/usb/lp2 ';'"],
   ])

mod_edit_process([
   ["name","7/16 plywood (1/8 mill)"],
   ["module","Shopbot"],
   ["cut_speed","55"],
   ["plunge_speed","30"],
   ])

//
// add new process menu items
//

mod_add_process([
   ["name","1/4 plywood (1/8 mill)"],
   ["module","Shopbot"],
   ["controls","mod_path_image_25D_controls"],
   ["routine","mod_Shopbot_image_25D_path"],
   ["command","gedit"],
   ["depth","3.175"],
   ["thickness","6.35"],
   ["diameter","3.175"],
   ["cut_speed","50"],
   ["plunge_speed","25"],
   ["offsets","1"],
   ["overlap","0"],
   ["error","1.1"],
   ["sort_threshold","1.5"],
   ])

mod_add_process([
   ["name","1/2 plywood (1/8 mill)"],
   ["module","Shopbot"],
   ["controls","mod_path_image_25D_controls"],
   ["routine","mod_Shopbot_image_25D_path"],
   ["command","gedit"],
   ["depth","3.175"],
   ["thickness","12.7"],
   ["diameter","3.175"],
   ["cut_speed","50"],
   ["plunge_speed","25"],
   ["offsets","1"],
   ["overlap","0"],
   ["error","1.1"],
   ["sort_threshold","1.5"],
   ])
*/