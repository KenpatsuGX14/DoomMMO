//=============================================================================
// VisuStella MZ - Main Menu Core
// VisuMZ_1_MainMenuCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MainMenuCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MainMenuCore = VisuMZ.MainMenuCore || {};
VisuMZ.MainMenuCore.version = 1.25;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.25] [MainMenuCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Main_Menu_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Main Menu Core plugin is designed to give you more control over the Main
 * Menu outside of RPG Maker MZ's editor's control. Game devs are given control
 * over how commands work, visual aesthetics pertaining to the Main Menu, and 
 * assign menu images to actors as background portraits.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general Main Menu settings.
 * * The ability to set Menu Background Portraits for individual actors.
 * * Flexibility in changing which commands appear in the Main Menu.
 * * Add new windows like the Playtime Window and Variable windows.
 * * Change the style of how the windows are arranged in the Main Menu.
 * * Change the way the status list is displayed and the way it's displayed.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 *
 * <Menu Portrait: filename>
 *
 * - Used for: Actor
 * - This is used with the "Portrait" style Main Menu List.
 * - Sets the menu image for the actor to 'filename'.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 *
 * ---
 * 
 * <Menu Portrait Offset: +x, +y>
 * <Menu Portrait Offset: -x, -y>
 * 
 * <Menu Portrait Offset X: +x>
 * <Menu Portrait Offset X: -x>
 * 
 * <Menu Portrait Offset Y: +y>
 * <Menu Portrait Offset Y: -y>
 *
 * - Used for: Actor
 * - This is used with the "Portrait" style Main Menu List.
 * - Offsets the X and Y coordinates for the menu image.
 * - Replace 'x' with a number value that offsets the x coordinate.
 * - Negative x values offset left. Positive x values offset right.
 * - Replace 'y' with a number value that offsets the y coordinate.
 * - Negative y values offset up. Positive x values offset down.
 * - This only applies to the Main Menu portraits.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Menu Image (Group)
 * Actor: Change Menu Image (Range)
 * Actor: Change Menu Image (JS)
 * - Changes the actor's Menu Image.
 * - Each version has a different means of selecting Actor ID's.
 *
 *   Actor ID:
 *   - Select which ID(s) to affect.
 *
 *   Filename:
 *   - Selected actor(s) will have their menu images changed to this.
 *
 * ---
 * 
 * Actor: Change Menu Image (JS) (v1.24)
 * - Changes an actor's Menu Image using JavaScript.
 * - Allows more control with more text entry.
 * 
 *   JS: Actor ID:
 *   - Enter which Actor ID to affect.
 *   - Uses JavaScript code.
 * 
 *   JS: Filename:
 *   - Enter the filename you wish to use.
 *   - Uses JavaScript code.
 * 
 * ---
 * 
 * === Menu Command Plugin Commands ===
 * 
 * ---
 * 
 * Menu Command: Clear Forced Settings
 * - Clear any forced settings for the menu command symbols.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Disable
 * - Forcefully disable specific menu commands via their symbols.
 * - Matching forced enabled symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Enable
 * - Forcefully enable specific menu commands via their symbols.
 * - Matching forced disabled symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Hide
 * - Forcefully hide specific menu commands via their symbols.
 * - Matching forced shown symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Show
 * - Forcefully show specific menu commands via their symbols.
 * - Matching forced hidden symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These general settings contain various settings on how the Main Menu scene
 * displays certain windows, alters how specific windows behave, and determines
 * which scenes would display actor menu images as background portraits.
 *
 * ---
 *
 * Gold Window
 * 
 *   Thinner Gold Window:
 *   - Make the Gold Window thinner in the Main Menu?
 *   - Used to match the Playtime and Variable Windows.
 *   - Only applies to the Command Window style: Default Vertical.
 * 
 *   Auto Adjust Height:
 *   - Automatically adjust the height for the thinner Gold Window?
 *
 *   Auto Adjust Y:
 *   - Automatically adjust the Y position for the thinner Gold Window?
 *
 * ---
 * 
 * Status Window
 * 
 *   Select Last?:
 *   - When picking a personal command from the Command Window, select the
 *     last picked actor or always the first?
 * 
 * ---
 *
 * Solo Party
 *
 *   Solo Quick Mode:
 *   - When selecting "Skills", "Equip", or "Status" with one party member,
 *     immediately go to the scene.
 *
 * ---
 *
 * Sub Menus
 *
 *   Menus with Actor BG's:
 *   - A list of the menus that would be compatible with Actor Menu Backgrounds
 *
 *   JS: Actor BG Action:
 *   - Code used to determine how to display the sprites upon loading.
 *
 * ---
 * 
 * Party Window
 * 
 *   Show Reserve Memebers:
 *   - Show reserve members while on the Main Menu scene?
 * 
 *   Hide Main Menu Only
 *   - If reserve members are hidden, hide them only in the main menu or
 *     all scenes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Command Window List
 * ============================================================================
 *
 * The Command Window functions as a hub to the various scenes linked from the
 * Main Menu. These include 'Item', 'Skill', 'Equip', 'Status', 'Save', and
 * so on. This Plugin Parameter is an array that lets you add, remove, and/or
 * alter the Command Window's various commands, how they're handled, whether or
 * not they're visible, and how they react when selected.
 *
 * These will require knowledge of JavaScript to use them properly.
 *
 * ---
 *
 * Command Window List
 * 
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   Subcategory:
 *   - The subcategory used for this command.
 *   - Leave empty for no subcategory.
 *
 *   Icon:
 *   - Icon used for this command.
 *   - Use 0 for no icon.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 * 
 *   JS: Personal Code:
 *   - JavaScript code that runs once the actor list is selected with this
 *     command highlighted.
 *
 * ---
 * 
 * ==== Subcategories ====
 * 
 * Subcategories are a new addition to the Main Menu Core version 1.18. When a
 * subcategory is set, it will only display Command Window items that belong
 * to that subcategory. Those Command Window items do not appear when there is
 * no subcategory active or if it's a different subcategory.
 * 
 * ---
 * 
 * To create a subcategory, a few things must be done:
 * 
 * 1. The subcategory symbol must be "subcategory".
 * 
 * 2. The string returned by JS: Ext determines the subcategory. In the default
 *    Plugin Parameters, 'datalog' is returned as the subcategory. This becomes
 *    the subcategory when picked.
 * 
 * 3. For the JS: Run Code, have the following code somewhere in it:
 * 
 *    const ext = arguments[0];
 *    this.setSubcategory(ext);
 * 
 * ---
 * 
 * To make a Command Window item be a part of a subcategory do the following:
 * 
 * 1. Take the JS: Ext string value (case sensitive).
 * 
 * 2. Set it as the target Command Window item's "Subcategory" value.
 * 
 * 3. If the subcategory doesn't exist, then this Command Window item will
 *    appear normally.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Playtime Window
 * ============================================================================
 *
 * The Playtime Window is an optional feature that can be displayed in the
 * Main Menu. As its name suggests, it displays the playtime of the player's
 * current play through.
 *
 * ---
 *
 * Playtime Window
 * 
 *   Enable:
 *   - Use the Playtime Window?
 * 
 *   Adjust Command Window:
 *   - Adjust the command window's height to fit in the Playtime Window?
 *
 *   Background Type:
 *   - Select background type for the Playtime window.
 * 
 *   Font Size:
 *   - Font size used for displaying Gold inside the Playtime window.
 * 
 *   Time Icon:
 *   - Icon displayed for the 'Time' label.
 * 
 *   Time Text:
 *   - Text for the display of 'Time' in the Playtime window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the Playtime window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Variable Window
 * ============================================================================
 *
 * The Variable Window is an optional feature that can be displayed in the
 * Main Menu. If enabled, the Variable Window will display variables of the
 * game dev's choice in the Main Menu itself.
 *
 * ---
 *
 * Variable Window
 * 
 *   Enable:
 *   - Use the Variable Window?
 * 
 *   Adjust Command Window:
 *   - Adjust the command window's height to fit in the Variable Window?
 *
 *   Background Type:
 *   - Select background type for the Variable window.
 * 
 *   Font Size:
 *   - Font size used for displaying Gold inside the Variable window.
 * 
 *   Variable List:
 *   - Select variables to be displayed into the window.
 *     Use \i[x] to determine their icon.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the Variable window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Command Window Style & Command Style Settings
 * ============================================================================
 *
 * This determines how the Main Menu appears based on the Command Window Style.
 * If anything but the 'Default' is used, then these settings will take over
 * the window placement settings for the Main Menu. This means that even if you
 * are using VisuStella's Core Engine, the window layouts will be overwritten.
 *
 * ---
 *
 * Command Window Style:
 * - Choose the positioning and style of the Main Menu Command Window.
 * - This will automatically rearrange windows.
 * 
 *   Default Vertical Side Style:
 *   - The default Main Menu layout style.
 *   - Affected by VisuStella's Core Engine's Plugin Parameter settings.
 * 
 *   Top Horizontal Style:
 *   - Puts the Command Window at the top of the screen.
 *   - Gold, Playlist, and Variable Windows are moved to the bottom.
 *   - The Actor List Window is placed in the middle.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 *
 *   Bottom Horizontal Style:
 *   - Puts the Command Window at the bottom of the screen.
 *   - Gold, Playlist, and Variable Windows are moved to the top.
 *   - The Actor List Window is placed in the middle.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 * 
 *   Mobile Full Screen Style:
 *   - Puts the Command Window at the center of the screen with larger buttons.
 *   - Gold, Playlist, and Variable Windows are moved to the bottom.
 *   - The Actor List Window is hidden until prompted to be selected.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 *
 * ---
 *
 * Command Style Settings
 *
 *   Style:
 *   - How do you wish to draw command entries in the Command Window?
 *   - Text Only: displays only text.
 *   - Icon Only: displays only the icon.
 *   - Icon + Text: displays icon first, then text.
 *   - Automatic: determines the best fit for the size
 *
 *   Text Alignment:
 *   - Decide how you want the text to be aligned.
 *   - Left, Center, or Right
 * 
 *   Rows:
 *   - Number of visible rows.
 *   - Applies only to Top, Bottom, and Mobile styles.
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - Applies only to Top, Bottom, and Mobile styles.
 * 
 *   Mobile Thickness:
 *   - The thickness of the buttons for mobile version.
 *   - Applies only to Top, Bottom, and Mobile styles.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status Graphic, Status List Style, & List Style Settings
 * ============================================================================
 *
 * Choose how the contents Actor Status List Window in the Main Menu appears.
 * This can range from the which actor graphic is drawn to the style used for
 * the data that's displayed.
 *
 * ---
 *
 * Status Graphic:
 * - Choose how the graphic for actor graphics appear in status-like menus.
 * 
 *   None:
 *   - Don't display any graphic for the actors.
 * 
 *   Face:
 *   - Display the actors' faces. This is the default option in RPG Maker MZ.
 *
 *   Map Sprite:
 *   - Display the actors' map sprites.
 * 
 *   Sideview Battler:
 *   - Display the actors' sideview battlers.
 *
 * ---
 *
 * Main Menu List Style
 * - Choose how the actor status list looks in the Main Menu.
 *
 * Inner-Menu List Style
 * - Choose how the actor status list looks in the inner menus like Scene_Item,
 *   Scene_Skill, etc.
 *
 *   Default Horizontal Style:
 *   - This is the default style found in RPG Maker MZ's Main Menu.
 *
 *   Vertical Style:
 *   - Makes the display for the actor list vertical instead of horizontal.
 *
 *   Portrait Style:
 *   - Similar to the vertical style, except each actor's Menu Image is
 *     displayed in the background instead. Portraits are required.
 *   - If there is no Menu Image used, this will switch over to the Vertical
 *     Style and use a face graphic instead.
 *
 *   Solo Style:
 *   - Used for solo party member games. Extends the whole view of the Status
 *     Window to accomodate a single actor.
 *
 *   Thin Horizontal Style:
 *   - Makes the selectable menu entries for the actors a single line thin.
 *
 *   Thicker Horizontal Style:
 *   - Makes the selectable menu entries for the actors two lines thick.
 *
 * ---
 *
 * List Styles
 *   JavaScript code used to determine how the individual styles are drawn.
 *
 *   JS: Default:
 *   JS: Vertical:
 *   JS: Portrait:
 *   JS: Solo:
 *   JS: Thin:
 *   JS: Thicker:
 *   - Code used to draw the data for these styles.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Mouse Cursor Settings
 * ============================================================================
 *
 * Add/enable a custom mouse cursor for your game. This will use a graphic
 * found in the game project's img/system/ folder to use as the custom mouse
 * cursor when hovering over the game.
 * 
 * Does not work on mobile devices.
 *
 * ---
 *
 * General Settings
 * 
 *   Enable?:
 *   - Enable custom cursor?
 *   - Requires a custom 'Idle' graphic.
 * 
 * ---
 * 
 * Graphic Settings
 * 
 *   Idle Filename:
 *   - Graphic used for mouse cursor when idle or moving.
 *   - Located in game project's img/system/ folder.
 *   - Required for a custom mouse cursor.
 * 
 *   Click Filename:
 *   - Graphic used for mouse cursor when clicked or held.
 *   - Located in game project's img/system/ folder.
 *   - Uses the 'Idle' graphic if 'Click' graphic is not used.
 * 
 * ---
 * 
 * Anchor Settings
 * 
 *   Anchor X:
 *   - Anchor X value for the custom cursor.
 *   - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *   Anchor Y:
 *   - Anchor Y value for the custom cursor.
 *   - 0.0 - top; 0.5 - middle; 1.0 - bottom
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.25: September 19, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Custom Mouse Cursor
 * ****  Add/enable a custom mouse cursor for your game.
 * 
 * Version 1.24: August 29, 2024
 * * Compatibility Update
 * ** When "Load" command is used with Save Core's Single-Save Mode,
 *    automatically load up the save instead of going to the Load Menu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Plugin Command renamed:
 * *** Actor: Change Menu Image (JS) to Actor: Change Menu Image (JS) (Legacy)
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** Actor: Change Menu Image (JS) (v1.24)
 * **** Changes an actor's Menu Image using JavaScript.
 * **** Allows more control with more text entry.
 * 
 * Version 1.23: February 15, 2024
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Battle Tactics' command.
 * *** This is for the upcoming VisuStella MZ plugins.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'battleGridTactics' option(s)
 *      and click copy. Go to the target project's Main Menu Core's 'Command
 *      Window List' plugin parameter. Paste the command where you want it
 *      to go.
 * 
 * Version 1.22: October 12, 2023
 * * Feature Update!
 * ** Subcategories are now maintained when exiting a scene pushed forward by
 *    a subcategory. Added by Olivia and sponsored by AndyL.
 * 
 * Version 1.21: April 13, 2023
 * * Bug Fixes!
 * ** Multiple subcategories should now work properly. Fix made by Arisu.
 * 
 * Version 1.20: March 16, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Bestiary' command.
 * *** This is for the upcoming VisuStella MZ plugins.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'bestiary' option(s) and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.19: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'CG Gallery', 'Credits Page', and 'Patch Notes' command.
 * *** This is for the upcoming VisuStella MZ plugins.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'cgGallery', 'creditsPage', or
 *      'patchNotes' option(s) and click copy. Go to the target project's Main
 *      Menu Core's 'Command Window List' plugin parameter. Paste the command
 *      where you want it to go.
 * 
 * Version 1.18: October 27, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added a new section into Plugin Parameters: Command Window List for
 *    "Subcategories" and adding info on how they are handled.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Tutorial List' command.
 * *** This is for the upcoming VisuMZ_2_TutorialPanelSys plugin.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'tutorialList' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * ** Subcategory called "Datalog" is now added.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'subcategory' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * **** Existing entries for Quest, Message Log, and Combat Log are now added
 *      to the Datalog subcategory.
 * * New Features!
 * ** Subcategory support is now added for the Main Menu Command Window.
 * *** Subcategories allow you to make some Command Window items invisible
 *     until a subcategory is selected. This helps reduce clutter and save room
 *     on the Command Window command list.
 * 
 * Version 1.17: August 18, 2022
 * * Bug Fixes!
 * ** Changed actor graphics now reflect properly for those using the default
 *    status menu. Fix made by Irina.
 * 
 * Version 1.16: April 21, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Menu Command: Clear Forced Settings
 * *** Menu Command: Force Disable
 * *** Menu Command: Force Enable
 * *** Menu Command: Force Hide
 * *** Menu Command: Force Show
 * **** These new Plugin Commands allow you to forcefully show, hide, enable,
 *      or disable Plugin Commands regardless of their required settings.
 * **** We are not responsible for errors that occur by accessing menus that
 *      should otherwise be disabled or hidden.
 * 
 * Version 1.15: February 10, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: October 25, 2021
 * * Bug Fixes!
 * ** Plugin Parameter settings for automatic Command Window height adjustment
 *    should now work properly. Fix made by Irina.
 * * Documentation Update!
 * ** Added a note for the Help File: Gold Window > Thinner Gold Window
 * *** Only applies to the Command Window style: Default Vertical.
 * 
 * Version 1.13: October 21, 2021
 * * Feature Update!
 * ** Rounding update applied to picture portraits so that coordinates aren't
 *    drawn on non-whole numbers due to base images having odd values. Update
 *    made by Olivia.
 * 
 * Version 1.12: July 16, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Message Log' command.
 * *** This is for the upcoming VisuMZ_3_MessageLog plugin.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'MessageLog' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.11: May 14, 2021
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Load' command after the 'Save' command.
 * *** This allows players to access the load game screen from the Main Menu.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'Load' option and click copy.
 *      Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.10: April 16, 2021
 * * Feature Update!
 * ** Default style for List Styles now have its code updated with the
 *    JS: Default plugin parameter for games whose vertical screen resolution
 *    is larger than normal.
 * *** To update this, do either of the following:
 * **** Open up the Main Menu Core Plugin Parameters. Select and press delete 
 *      on "List Style Settings". Press Enter. New updated settings will be
 *      replaced for the JS: Default settings.
 * **** Or Delete the existing VisuMZ_1_MainMenuCore.js in the Plugin Manager
 *      list and install the newest version.
 * 
 * Version 1.09: March 19, 2021
 * * Documentation Update!
 * ** Added clarity for the "Portrait Style" in Plugin Parameters section for
 *    "Status Graphic, Status List Style, & List Style Settings":
 * *** If there is no Menu Image used, this will switch over to the Vertical
 *     Style and use a face graphic instead.
 * 
 * Version 1.08: February 26, 2021
 * * Feature Update!
 * ** Default Plugin Parameters for the List Style Settings defaults have been
 *    updated with tighter coordinate values to allow for more accurate display
 *    of UI element positioning. Update made by Olivia.
 * 
 * Version 1.07: January 1, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Removed "<Menu Image: filename>" version of notetag to reduce confusion
 *    and to stick with the norm declared by the Battle Core.
 * * New Features!
 * ** New notetags added by Yanfly:
 * *** <Menu Portrait Offset: +x, +y>
 * *** <Menu Portrait Offset X: +x>
 * *** <Menu Portrait Offset Y: +y>
 * **** This is used with the "Portrait" style Main Menu list.
 * **** Offsets the X and Y coordinates for the menu portrait.
 * 
 * Version 1.06: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: October 11, 2020
 * * Documentation Update!
 * ** Documentation added for the new plugin parameter.
 * * New Features!
 * ** New plugin parameter added by Yanfly.
 * *** Plugin Parameters > General > Status Window > Select Last?
 * **** When picking a personal command from the Command Window, select the
 *      last picked actor or always the first?
 * 
 * Version 1.04: October 4, 2020
 * * Feature Update!
 * ** Certain windows will now pre-load all associated image types for the
 *    actor upon being created to avoid custom JS drawing problems.
 *    Change made by Irina.
 * ** Failsafes have been added to prevent non-existent variables from crashing
 *    the game if a user does not remove them from the variable list. Change
 *    made by Irina.
 * 
 * Version 1.03: September 20, 2020
 * * Documentation Update!
 * ** Added the alternative notetag <Menu Portrait: filename> that also works
 *    the same way as <Menu Image: filename>.
 * 
 * Version 1.02: September 13, 2020
 * * Compatibility Update!
 * ** Better compatibility for SV Actor graphics.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Skill check plugin parameter for show fixed. Fixed by Yanfly and Shaz.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Command Window List > skill >
 *     JS: Show > and changing 'this.needsCommand("item")' to
 *     'this.needsCommand("skill")'
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageGroup
 * @text Actor: Change Menu Image (Group)
 * @desc Changes the actor's Menu Image.
 * Select from a group of actor ID's to change.
 *
 * @arg Step1:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageRange
 * @text Actor: Change Menu Image (Range)
 * @desc Changes the actor's Menu Image.
 * Select from a range of actor ID's to change.
 *
 * @arg Step1
 * @text Actor ID Range
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to end at.
 * @default 4
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageJS
 * @text Actor: Change Menu Image (JS) (Legacy)
 * @desc Changes the actor's Menu Image.
 * Select from a group of actor ID's using JavaScript.
 *
 * @arg Step1:arrayeval
 * @text Actor ID(s)
 * @type string[]
 * @desc Enter which Actor ID(s) to affect.
 * You may use JavaScript code.
 * @default ["$gameVariables.value(1)"]
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageJS_v124
 * @text Actor: Change Menu Image (JS) (v1.24)
 * @desc Changes an actor's Menu Image using JavaScript.
 * Allows more control with more text entry.
 *
 * @arg ActorJS:func
 * @text JS: Actor ID
 * @type note
 * @desc Enter which Actor ID to affect.
 * Uses JavaScript code.
 * @default "// Get Actor ID here.\nlet actorID = 0;\nactorID = $gameParty.members()[0].actorId();\n\n// Return Actor ID\nreturn actorID;"
 *
 * @arg FilenameJS:func
 * @text JS: Filename
 * @type note
 * @desc Enter the filename you wish to use.
 * Uses JavaScript code.
 * @default "// Get Filename here.\nlet filename = 'Actor1_';\nfilename += String(Math.randomInt(8) + 1);\n\n// Return Filename\nreturn filename;"
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MenuCommand
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandClear
 * @text Menu Command: Clear Forced Settings
 * @desc Clear any forced settings for the menu command symbols.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceDisable
 * @text Menu Command: Force Disable
 * @desc Forcefully disable specific menu commands via their symbols.
 * Matching forced enabled symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceEnable
 * @text Menu Command: Force Enable
 * @desc Forcefully enable specific menu commands via their symbols.
 * Matching forced disabled symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceHide
 * @text Menu Command: Force Hide
 * @desc Forcefully hide specific menu commands via their symbols.
 * Matching forced shown symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceShow
 * @text Menu Command: Force Show
 * @desc Forcefully show specific menu commands via their symbols.
 * Matching forced hidden symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MainMenuCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General settings pertaining to the Main Menu and related.
 * @default {"GoldWindow":"","ThinGoldWindow:eval":"true","AutoGoldHeight:eval":"true","AutoGoldY:eval":"true","StatusWindow":"","StatusSelectLast:eval":"false","SoloParty":"","SoloQuick:eval":"true","SubMenus":"","ActorBgMenus:arraystr":"[\"Scene_Skill\"]","ActorBgMenuJS:func":"\"this.anchor.x = 0.5;\\nconst scale = 1.25;\\nthis.scale.x = this.scale.y = scale;\\nthis.x = Graphics.width;\\nthis.y = Graphics.height - (this.bitmap.height * Math.abs(scale));\\nthis._targetX = Graphics.width * 3 / 4;\\nthis._targetY = Graphics.height - (this.bitmap.height * Math.abs(scale));\\nthis._duration = 10;\\nthis.opacity = 0;\"","PartyWindow":"","ShowReserve:eval":"true","HideMainMenuOnly:eval":"true"}
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @parent General:struct
 * @type struct<Command>[]
 * @desc Window commands used by the Main Menu.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"item\",\"Icon:num\":\"208\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.item;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"item\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandItem();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"classChange\",\"Icon:num\":\"133\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.classChangeMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    this.isClassChangeCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled() &&\\\\n    this.isClassChangeCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_ClassChange);\\\"\"}","{\"Symbol:str\":\"skill\",\"Icon:num\":\"101\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.skill;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"skill\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Skill);\\\"\"}","{\"Symbol:str\":\"equip\",\"Icon:num\":\"137\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.equip;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"equip\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Equip);\\\"\"}","{\"Symbol:str\":\"status\",\"Icon:num\":\"82\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.status;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"status\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Status);\\\"\"}","{\"Symbol:str\":\"itemCrafting\",\"Icon:num\":\"223\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.ItemCraftingMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_ItemCraftingSys &&\\\\n    this.isItemCraftingCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isItemCraftingCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandItemCrafting();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"subcategory\",\"Subcategory:str\":\"\",\"Icon:num\":\"230\",\"TextStr:str\":\"Datalog\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return this.isSubcategoryVisible(arguments[1]);\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"// This becomes the subcategory name. Case-sensitive.\\\\n\\\\nreturn 'datalog';\\\"\",\"CallHandlerJS:func\":\"\\\"const ext = arguments[0];\\\\nthis.setSubcategory(ext);\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"quest\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"186\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.questCommandName;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_QuestSystem &&\\\\n    this.isQuestCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isQuestCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandQuest();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"bestiary\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"10\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.BestiaryMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_Bestiary &&\\\\n    this.isBestiaryCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isBestiaryCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandBestiary();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"tutorialList\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"187\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.tutorial.menuCmd;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_TutorialPanelSys &&\\\\n    this.isTutorialListCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isTutorialListCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandTutorialList();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"messageLog\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"193\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.MessageLogMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_3_MessageLog &&\\\\n    this.isMessageLogCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isMessageLogCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandMessageLog();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"combatLog\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"189\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.combatLog_BattleCmd_Name;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CombatLog &&\\\\n    this.isCombatLogCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCombatLogCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCombatLog();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"cgGallery\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"311\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.cgGalleryMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CGGallery &&\\\\n    this.isCgGalleryCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCgGalleryCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCgGallery();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"creditsPage\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"193\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.CreditsPageMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CreditsPage &&\\\\n    this.isCreditsPageCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCreditsPageCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCreditsPage();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"patchNotes\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"83\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.PatchNotesMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_PatchNotes &&\\\\n    this.isPatchNotesCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isPatchNotesCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPatchNotes();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"formation\",\"Icon:num\":\"75\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.formation;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"formation\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isFormationEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandFormation();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"battleGridTactics\",\"Subcategory:str\":\"\",\"Icon:num\":\"76\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.BattleGridTacticsMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_BattleGridSystem &&\\\\n    this.isBattleGridTacticsCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isBattleGridTacticsCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandBattleGridTactics();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"options\",\"Icon:num\":\"83\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"options\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isOptionsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"save\",\"Icon:num\":\"189\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.save;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"save\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isSaveEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandSave();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"load\",\"Icon:num\":\"191\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return 'Load';\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"save\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandLoad();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"commonEvent1\",\"Icon:num\":\"88\",\"TextStr:str\":\"Common Event 1\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return false;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return 1;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCommonEvent();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"commonEvent2\",\"Icon:num\":\"87\",\"TextStr:str\":\"Common Event 2\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return false;\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return 2;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"// Declare Ext\\\\nconst ext = arguments[0];\\\\n\\\\n// Declare Status Window\\\\nconst statusWindow = SceneManager._scene._statusWindow;\\\\n\\\\n// Declare Actor ID\\\\nconst actorId = statusWindow.actor(statusWindow.index()).actorId();\\\\n\\\\n// Set variable 1 to Actor ID\\\\n$gameVariables.setValue(1, actorId);\\\\n\\\\n// Prepare Common Event ext to run\\\\n$gameTemp.reserveCommonEvent(ext);\\\\n\\\\n// Exit Main Menu\\\\nSceneManager._scene.popScene();\\\"\"}","{\"Symbol:str\":\"gameEnd\",\"Icon:num\":\"187\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"gameEnd\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isGameEndEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandGameEnd();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}"]
 *
 * @param Playtime:struct
 * @text Playtime Window
 * @type struct<Playtime>
 * @desc Settings for the Playtime Window.
 * @default {"Enable:eval":"true","AdjustCommandHeight:func":"true","BgType:num":"0","FontSize:num":"24","Icon:num":"75","Time:str":"Time","WindowRect:func":"\"const rows = 1;\\nconst ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(rows, false);\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nlet wy = this.mainAreaBottom() - wh;\\nif (this._goldWindow) wy -= this._goldWindow.height;\\nif (this.canCreateVariableWindow()) wy -= this.variableWindowRect().height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param Variable:struct
 * @text Variable Window
 * @type struct<Variable>
 * @desc Settings for the Variable Window.
 * @default {"Enable:eval":"false","AdjustCommandHeight:func":"true","BgType:num":"0","FontSize:num":"24","VarList:arraynum":"[\"1\",\"2\"]","WindowRect:func":"\"const rows = VisuMZ.MainMenuCore.Settings.Variable.VarList.length;\\nconst ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(rows, false);\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nlet wy = this.mainAreaBottom() - wh;\\nif (this._goldWindow) wy -= this._goldWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param ParamBreak1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param CommandWindowStyle:str
 * @text Command Window Style
 * @type select
 * @option Default Vertical Side Style
 * @value default
 * @option Top Horizontal Style
 * @value top
 * @option Thin Top Horizontal Style
 * @value thinTop
 * @option Bottom Horizontal Style
 * @value bottom
 * @option Thin Bottom Horizontal Style
 * @value thinBottom
 * @option Mobile Full Screen Style
 * @value mobile
 * @desc Choose the positioning and style of the Main Menu Command Window. This will automatically rearrange windows.
 * @default top
 *
 * @param CustomCmdWin:struct
 * @text Command Style Settings
 * @parent CommandWindowStyle:str
 * @type struct<CustomCmdWin>
 * @desc Settings for the non-default Command Window Styles.
 * @default {"Style:str":"auto","TextAlign:str":"center","Rows:num":"2","Cols:num":"4","MobileThickness:num":"5"}
 *
 * @param ParamBreak2
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param StatusGraphic:str
 * @text Status Graphic
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler
 * @value svbattler
 * @desc Choose how the actor graphics appear in status-like menus.
 * @default face
 *
 * @param StatusListStyle:str
 * @text Main Menu List Style
 * @type select
 * @option Default Horizontal Style
 * @value default
 * @option Vertical Style
 * @value vertical
 * @option Portrait Style
 * @value portrait
 * @option Solo Style
 * @value solo
 * @option Thin Horizontal Style
 * @value thin
 * @option Thicker Horizontal Style
 * @value thicker
 * @desc Choose how the actor status list looks in the Main Menu.
 * @default portrait
 *
 * @param InnerMenuListStyle:str
 * @text Inner-Menu List Style
 * @parent StatusListStyle:str
 * @type select
 * @option Default Horizontal Style
 * @value default
 * @option Vertical Style
 * @value vertical
 * @option Portrait Style
 * @value portrait
 * @option Solo Style
 * @value solo
 * @option Thin Horizontal Style
 * @value thin
 * @option Thicker Horizontal Style
 * @value thicker
 * @desc Choose how the actor status list looks in the inner menus
 * like Scene_Item, Scene_Skill, etc.
 * @default default
 *
 * @param ListStyles:struct
 * @text List Style Settings
 * @parent StatusListStyle:str
 * @type struct<ListStyles>
 * @desc JavaScript code used to determine how the individual styles are drawn.
 * @default {"DefaultStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst sx = rect.x + 180;\\nconst sy = rect.y + rect.height / 2 - this.lineHeight() * 1.5;\\nconst lineHeight = this.lineHeight();\\nconst sx2 = sx + 180;\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorLevel(actor, sx, sy + lineHeight * 1);\\nthis.drawActorIcons(actor, sx, sy + lineHeight * 2);\\nthis.drawActorClass(actor, sx2, sy);\\n\\n// Place Gauges\\nconst sy2 = sy + lineHeight;\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nthis.placeGauge(actor, \\\"hp\\\", sx2, sy2);\\nthis.placeGauge(actor, \\\"mp\\\", sx2, sy2 + gaugeLineHeight);\\nconst roomForTp = (sy2 + gaugeLineHeight * 3) <= rect.y + rect.height;\\nif ($dataSystem.optDisplayTp && roomForTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx2, sy2 + gaugeLineHeight * 2);\\n}\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nconst sx3 = sx2 + 180;\\nconst sw = rect.width - sx3 - 2;\\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    const pw = Math.floor(sw / 2) - 24;\\n    let px = sx3;\\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, py, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            py += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n}\"","VerticalStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\\n\\n// Draw Actor Graphic\\nconst gw = rect.width;\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nconst gx = rect.x;\\nconst gy = Math.max(rect.y, rect.y + (rect.height - totalHeight - gh) / 2);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Actor Name\\nlet sx = rect.x;\\nlet sy = Math.max(gy + gh, rect.y + (rect.height - totalHeight + gh) / 2);\\nlet sw = rect.width;\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Draw Gauges\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nif ($dataSystem.optDisplayTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n}\"","PortraitStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Make Constants\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\\n\\n// Draw Actor Graphic\\nconst gw = rect.width;\\nconst gh = rect.height;\\nconst gx = rect.x;\\nconst gy = rect.y;\\nthis.drawItemActorMenuImage(actor, gx, gy, gw, gh);\\n\\n// Draw Dark Rectangle\\nlet sx = rect.x;\\nlet sy = Math.max(rect.y, rect.y + (rect.height - totalHeight));\\nlet sw = rect.width;\\nlet sh = rect.y + rect.height - sy;\\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\\n\\n// Draw Actor Name\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Draw Gauges\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nif ($dataSystem.optDisplayTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n}\"","SoloStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Make Constants\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\n\\n// Draw Actor Graphic\\nlet sx = rect.x;\\nlet sy = rect.y;\\nlet sw = rect.width;\\nlet sh = rect.height;\\n\\n// Portrait\\nif (actor.getMenuImage() !== '') {\\n    this.drawItemActorMenuImage(actor, rect.x, rect.y, rect.width, rect.height);\\n\\n// Everything Else\\n} else {\\n    const gx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - ImageManager.faceWidth) / 2));\\n    const gy = Math.max(0, rect.y + rect.height - Math.ceil(lineHeight * 4.5) - ImageManager.faceHeight);\\n    this.drawActorGraphic(actor, gx, gy, ImageManager.faceWidth, ImageManager.faceHeight);\\n}\\n\\n// Draw Dark Rectangle\\nsh = Math.ceil(lineHeight * 4.5);\\nsy = rect.y + rect.height - sh;\\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\\n\\n// Draw Actor Name\\nsw = Math.round(rect.width / 2);\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - 128) / 2));\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round(((rect.width / 2) - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round(((rect.width / 2) - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Prepare Stat Coordinates\\nsx = rect.x + Math.floor(rect.width / 2);\\nsw = rect.width / 2;\\nsh = rect.height;\\nconst sx3 = sx;\\nconst cw = rect.width - sx3 - 2;\\n\\n// Prepare Total Content Height to vertically center the content.\\nlet totalHeight = gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    totalHeight += lineHeight;\\n    totalHeight += Math.ceil(params.length / 2) * gaugeLineHeight;\\n}\\nconst equips = actor.equips();\\ntotalHeight += lineHeight;\\ntotalHeight += equips.length * lineHeight;\\nsy = Math.max(rect.y, rect.y + Math.floor((rect.height - totalHeight) / 2));\\n\\n// Place Gauges\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nif ($dataSystem.optDisplayTp) {\\n    sy += gaugeLineHeight;\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n    sy += gaugeLineHeight;\\n}\\nlet ny = sy;\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    sy += lineHeight;\\n    const pw = Math.floor(cw / 2) - 24;\\n    let px = sx3;\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, sy, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, sy, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            sy += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n    ny += lineHeight;\\n    ny += Math.ceil(params.length / 2) * gaugeLineHeight;\\n}\\n\\n// Draw Actor Equipment\\nthis.resetFontSettings();\\nsx = rect.x + Math.floor(rect.width / 2);\\nsy = ny + lineHeight;\\nsw = rect.width / 2;\\nfor (const equip of equips) {\\n    if (equip) {\\n        this.drawItemName(equip, sx, sy, sw);\\n        sy += lineHeight;\\n        if (sy + lineHeight > rect.y + rect.height) return;\\n    }\\n}\"","ThinStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst lineHeight = this.lineHeight();\\nlet sx = rect.x + 160;\\nlet sy = rect.y + ((rect.height - lineHeight) / 2) - 2;\\n\\n// Draw Actor Data\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\\n\\n// Place Gauges\\nsx += 180;\\nsy += (lineHeight - this.gaugeLineHeight()) / 2;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsx += 140;\\nif ((sx + 128) > rect.x + rect.width) return;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsx += 140;\\nif ((sx + 128) > rect.x + rect.width) return;\\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \\\"tp\\\", sx, sy);\"","ThickerStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nlet sx = rect.x + 160;\\nlet sy = rect.y + ((rect.height - (lineHeight * 2)) / 2) - 2;\\n\\n// Draw Actor Data\\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorClass(actor, sx, sy + lineHeight);\\n//this.drawActorLevel(actor, sx, sy + lineHeight);\\n\\n// Place Gauges\\nsx += 180;\\nsy = rect.y + ((rect.height - (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2))) / 2) - 2;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy + gaugeLineHeight);\\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \\\"tp\\\", sx, sy + (gaugeLineHeight * 2));\\nsx += 160;\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nconst sx3 = sx;\\nconst sw = rect.width - sx3 - 2;\\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    const pw = Math.floor(sw / 2) - 24;\\n    sy = rect.y + ((rect.height - (gaugeLineHeight * Math.ceil(params.length / 2))) / 2) - 2;\\n    let px = sx3;\\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, py, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            py += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n}\""}
 *
 * @param ParamBreak3
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MouseCursor:struct
 * @text Custom Mouse Cursor
 * @type struct<MouseCursor>
 * @desc Add/enable a custom mouse cursor for your game.
 * @default {"General":"","Enable:eval":"true","Graphics":"","idleFilename:str":"","clickFilename:str":"","Anchor":"","anchorX:num":"0.0","anchorY:num":"0.0"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Commands Struct
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc The symbol used for this command.
 * @default Symbol
 *
 * @param Subcategory:str
 * @text Subcategory
 * @desc The subcategory used for this command.
 * Leave empty for no subcategory.
 * @default 
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this command.
 * Use 0 for no icon.
 * @default 0
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this menu command.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param ShowJS:func
 * @text JS: Show
 * @type note
 * @desc JavaScript code used to determine if the item is shown or not.
 * @default "return true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @type note
 * @desc JavaScript code used to determine if the item is enabled or not.
 * @default "return true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @type note
 * @desc JavaScript code used to determine any ext data that should be added.
 * @default "return null;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this command is selected.
 * @default "const ext = arguments[0];"
 *
 * @param PersonalHandlerJS:func
 * @text JS: Personal Code
 * @type note
 * @desc JavaScript code that runs once the actor list is selected with this command highlighted.
 * @default "const ext = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param ThinGoldWindow:eval
 * @text Thinner Gold Window
 * @parent GoldWindow
 * @type boolean
 * @on Thinner
 * @off Normal
 * @desc Make the Gold Window thinner in the Main Menu?
 * Used to match the Playtime and Variable Windows.
 * @default true
 *
 * @param AutoGoldHeight:eval
 * @text Auto Adjust Height
 * @parent GoldWindow
 * @type boolean
 * @on Automatic
 * @off Manual
 * @desc Automatically adjust the height for the thinner Gold Window?
 * @default true
 *
 * @param AutoGoldY:eval
 * @text Auto Adjust Y
 * @parent GoldWindow
 * @type boolean
 * @on Automatic
 * @off Manual
 * @desc Automatically adjust the Y position for the thinner Gold Window?
 * @default true
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusSelectLast:eval
 * @text Select Last?
 * @parent StatusWindow
 * @type boolean
 * @on Last Picked Actor
 * @off Always First Actor
 * @desc When picking a personal command from the Command Window,
 * select the last picked actor or always the first?
 * @default false
 *
 * @param SoloParty
 * @text Solo Party
 *
 * @param SoloQuick:eval
 * @text Solo Quick Mode
 * @parent SoloParty
 * @type boolean
 * @on Quick
 * @off Normal
 * @desc When selecting "Skills", "Equip", or "Status" with one party member, immediately go to the scene.
 * @default true
 *
 * @param SubMenus
 * @text Sub Menus
 *
 * @param ActorBgMenus:arraystr
 * @text Menus with Actor BG's
 * @parent SubMenus
 * @type string[]
 * @desc A list of the menus that would be compatible with Actor Menu Backgrounds.
 * @default ["Scene_Skill","Scene_Equip","Scene_Status"]
 *
 * @param ActorBgMenuJS:func
 * @text JS: Actor BG Action
 * @parent SubMenus
 * @type note
 * @desc Code used to determine how to display the sprites upon loading.
 * @default "this.anchor.x = 0.5;\nconst scale = 1.25;\nthis.scale.x = this.scale.y = scale;\nthis.x = Graphics.width;\nthis.y = Graphics.height - (this.bitmap.height * Math.abs(scale));\nthis._targetX = Graphics.width * 3 / 4;\nthis._targetY = Graphics.height - (this.bitmap.height * Math.abs(scale));\nthis._duration = 10;\nthis.opacity = 0;"
 *
 * @param PartyWindow
 * @text Party Window
 *
 * @param ShowReserve:eval
 * @text Show Reserve Memebers
 * @parent PartyWindow
 * @type boolean
 * @on Show Reserve Members
 * @off Hide Reserve Members
 * @desc Show reserve members while on the Main Menu scene?
 * @default true
 *
 * @param HideMainMenuOnly:eval
 * @text Hide Main Menu Only
 * @parent ShowReserve:eval
 * @type boolean
 * @on Hide in Main Menu Only
 * @off Hide in all Scenes
 * @desc If reserve members are hidden, hide them only in the main menu or all scenes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Playtime Window
 * ----------------------------------------------------------------------------
 */
/*~struct~Playtime:
 *
 * @param Enable:eval
 * @text Use Window
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Use the Playtime Window?
 * @default true
 *
 * @param AdjustCommandHeight:eval
 * @text Adjust Command Window
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Adjust the command window's height to fit in the Playtime Window?
 * @default true
 *
 * @param BgType:num
 * @text Background Type
 * @type select
 * @option Window
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @desc Select background type for the Playtime window.
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside the Playtime window.
 * Default: 26
 * @default 20
 *
 * @param Icon:num
 * @text Time Icon
 * @desc Icon displayed for the 'Time' label.
 * @default 75
 *
 * @param Time:str
 * @text Time Text
 * @desc Text for the display of 'Time' in the Playtime window.
 * @default Time
 *
 * @param WindowRect:func
 * @text JS: X, Y, W, H
 * @type note
 * @desc Code used to determine the dimensions for the Playtime window.
 * @default "const rows = 1;\nconst ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(rows, false);\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nlet wy = this.mainAreaBottom() - wh;\nif (this._goldWindow) wy -= this._goldWindow.height;\nif (this.canCreateVariableWindow()) wy -= this.variableWindowRect().height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Variable Window
 * ----------------------------------------------------------------------------
 */
/*~struct~Variable:
 *
 * @param Enable:eval
 * @text Use Window
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Use the Variable Window?
 * @default false
 *
 * @param AdjustCommandHeight:eval
 * @text Adjust Command Window
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Adjust the command window's height to fit in the Variable Window?
 * @default true
 *
 * @param BgType:num
 * @text Background Type
 * @type select
 * @option Window
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @desc Select background type for the Variable window.
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside the Variable window.
 * Default: 26
 * @default 20
 *
 * @param VarList:arraynum
 * @text Variable List
 * @type variable[]
 * @desc Select variables to be displayed into the window.
 * Use \i[x] to determine their icon.
 * @default ["1","2","3"]
 *
 * @param WindowRect:func
 * @text JS: X, Y, W, H
 * @type note
 * @desc Code used to determine the dimensions for the Variable window.
 * @default "const rows = VisuMZ.MainMenuCore.Settings.Variable.VarList.length;\nconst ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(rows, false);\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nlet wy = this.mainAreaBottom() - wh;\nif (this._goldWindow) wy -= this._goldWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Horizontal Command Window Style
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomCmdWin:
 *
 * @param Style:str
 * @text Command Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw command entries in the Command Window?
 * @default auto
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Rows:num
 * @text Rows
 * @type number
 * @min 1
 * @desc Number of visible rows.
 * @default 2
 *
 * @param Cols:num
 * @text Columns
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 4
 *
 * @param MobileThickness:num
 * @text Mobile Thickness
 * @type number
 * @min 1
 * @desc The thickness of the buttons for mobile version.
 * @default 5
 *
 */
/* ----------------------------------------------------------------------------
 * List Style Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ListStyles:
 *
 * @param DefaultStyle:func
 * @text JS: Default
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + Math.floor((rect.height - gh) / 2);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst sx = rect.x + 180;\nconst sy = rect.y + rect.height / 2 - this.lineHeight() * 1.5;\nconst lineHeight = this.lineHeight();\nconst sx2 = sx + 180;\nthis.drawActorName(actor, sx, sy);\nthis.drawActorLevel(actor, sx, sy + lineHeight * 1);\nthis.drawActorIcons(actor, sx, sy + lineHeight * 2);\nthis.drawActorClass(actor, sx2, sy);\n\n// Place Gauges\nconst sy2 = sy + lineHeight;\nconst gaugeLineHeight = this.gaugeLineHeight();\nthis.placeGauge(actor, \"hp\", sx2, sy2);\nthis.placeGauge(actor, \"mp\", sx2, sy2 + gaugeLineHeight);\nconst roomForTp = (sy2 + gaugeLineHeight * 3) <= rect.y + rect.height;\nif ($dataSystem.optDisplayTp && roomForTp) {\n    this.placeGauge(actor, \"tp\", sx2, sy2 + gaugeLineHeight * 2);\n}\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nconst sx3 = sx2 + 180;\nconst sw = rect.width - sx3 - 2;\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    const pw = Math.floor(sw / 2) - 24;\n    let px = sx3;\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, py, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            py += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n}"
 *
 * @param VerticalStyle:func
 * @text JS: Vertical
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\n\n// Draw Actor Graphic\nconst gw = rect.width;\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nconst gx = rect.x;\nconst gy = Math.max(rect.y, rect.y + (rect.height - totalHeight - gh) / 2);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Actor Name\nlet sx = rect.x;\nlet sy = Math.max(gy + gh, rect.y + (rect.height - totalHeight + gh) / 2);\nlet sw = rect.width;\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Draw Gauges\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsy += gaugeLineHeight;\nif ($dataSystem.optDisplayTp) {\n    this.placeGauge(actor, \"tp\", sx, sy);\n}"
 *
 * @param PortraitStyle:func
 * @text JS: Portrait
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Make Constants\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\n\n// Draw Actor Graphic\nconst gw = rect.width;\nconst gh = rect.height;\nconst gx = rect.x;\nconst gy = rect.y;\nthis.drawItemActorMenuImage(actor, gx, gy, gw, gh);\n\n// Draw Dark Rectangle\nlet sx = rect.x;\nlet sy = Math.max(rect.y, rect.y + (rect.height - totalHeight));\nlet sw = rect.width;\nlet sh = rect.y + rect.height - sy;\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\n\n// Draw Actor Name\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Draw Gauges\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsy += gaugeLineHeight;\nif ($dataSystem.optDisplayTp) {\n    this.placeGauge(actor, \"tp\", sx, sy);\n}"
 *
 * @param SoloStyle:func
 * @text JS: Solo
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Make Constants\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\n\n// Draw Actor Graphic\nlet sx = rect.x;\nlet sy = rect.y;\nlet sw = rect.width;\nlet sh = rect.height;\n\n// Portrait\nif (actor.getMenuImage() !== '') {\n    this.drawItemActorMenuImage(actor, rect.x, rect.y, rect.width, rect.height);\n\n// Everything Else\n} else {\n    const gx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - ImageManager.faceWidth) / 2));\n    const gy = Math.max(0, rect.y + rect.height - Math.ceil(lineHeight * 4.5) - ImageManager.faceHeight);\n    this.drawActorGraphic(actor, gx, gy, ImageManager.faceWidth, ImageManager.faceHeight);\n}\n\n// Draw Dark Rectangle\nsh = Math.ceil(lineHeight * 4.5);\nsy = rect.y + rect.height - sh;\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\n\n// Draw Actor Name\nsw = Math.round(rect.width / 2);\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - 128) / 2));\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round(((rect.width / 2) - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round(((rect.width / 2) - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Prepare Stat Coordinates\nsx = rect.x + Math.floor(rect.width / 2);\nsw = rect.width / 2;\nsh = rect.height;\nconst sx3 = sx;\nconst cw = rect.width - sx3 - 2;\n\n// Prepare Total Content Height to vertically center the content.\nlet totalHeight = gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    totalHeight += lineHeight;\n    totalHeight += Math.ceil(params.length / 2) * gaugeLineHeight;\n}\nconst equips = actor.equips();\ntotalHeight += lineHeight;\ntotalHeight += equips.length * lineHeight;\nsy = Math.max(rect.y, rect.y + Math.floor((rect.height - totalHeight) / 2));\n\n// Place Gauges\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nif ($dataSystem.optDisplayTp) {\n    sy += gaugeLineHeight;\n    this.placeGauge(actor, \"tp\", sx, sy);\n    sy += gaugeLineHeight;\n}\nlet ny = sy;\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    sy += lineHeight;\n    const pw = Math.floor(cw / 2) - 24;\n    let px = sx3;\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, sy, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, sy, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            sy += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n    ny += lineHeight;\n    ny += Math.ceil(params.length / 2) * gaugeLineHeight;\n}\n\n// Draw Actor Equipment\nthis.resetFontSettings();\nsx = rect.x + Math.floor(rect.width / 2);\nsy = ny + lineHeight;\nsw = rect.width / 2;\nfor (const equip of equips) {\n    if (equip) {\n        this.drawItemName(equip, sx, sy, sw);\n        sy += lineHeight;\n        if (sy + lineHeight > rect.y + rect.height) return;\n    }\n}"
 *
 * @param ThinStyle:func
 * @text JS: Thin
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst lineHeight = this.lineHeight();\nlet sx = rect.x + 160;\nlet sy = rect.y + ((rect.height - lineHeight) / 2) - 2;\n\n// Draw Actor Data\nthis.drawActorName(actor, sx, sy);\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\n\n// Place Gauges\nsx += 180;\nsy += (lineHeight - this.gaugeLineHeight()) / 2;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsx += 140;\nif ((sx + 128) > rect.x + rect.width) return;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsx += 140;\nif ((sx + 128) > rect.x + rect.width) return;\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \"tp\", sx, sy);"
 *
 * @param ThickerStyle:func
 * @text JS: Thicker
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nlet sx = rect.x + 160;\nlet sy = rect.y + ((rect.height - (lineHeight * 2)) / 2) - 2;\n\n// Draw Actor Data\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\nthis.drawActorName(actor, sx, sy);\nthis.drawActorClass(actor, sx, sy + lineHeight);\n//this.drawActorLevel(actor, sx, sy + lineHeight);\n\n// Place Gauges\nsx += 180;\nsy = rect.y + ((rect.height - (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2))) / 2) - 2;\nthis.placeGauge(actor, \"hp\", sx, sy);\nthis.placeGauge(actor, \"mp\", sx, sy + gaugeLineHeight);\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \"tp\", sx, sy + (gaugeLineHeight * 2));\nsx += 160;\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nconst sx3 = sx;\nconst sw = rect.width - sx3 - 2;\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    const pw = Math.floor(sw / 2) - 24;\n    sy = rect.y + ((rect.height - (gaugeLineHeight * Math.ceil(params.length / 2))) / 2) - 2;\n    let px = sx3;\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, py, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            py += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n}"
 *
 */
/* ----------------------------------------------------------------------------
 * Mouse Cursor Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MouseCursor:
 *
 * @param General
 * @text General Settings
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Custom Cursor
 * @off Normal Cursor
 * @desc Enable custom cursor?
 * Requires a custom 'Idle' graphic.
 * @default true
 *
 * @param Graphics
 * @text Graphic Settings
 *
 * @param idleFilename:str
 * @text Idle Filename
 * @parent Graphics
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Graphic used for mouse cursor when idle or moving.
 * Required for a custom mouse cursor.
 * @default 
 *
 * @param clickFilename:str
 * @text Click Filename
 * @parent Graphics
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Graphic used for mouse cursor when clicked or held.
 * Uses the 'Idle' graphic if 'Click' graphic is not used.
 * @default 
 *
 * @param Anchor
 * @text Anchor Settings
 *
 * @param anchorX:num
 * @text Anchor X
 * @parent Anchor
 * @desc Anchor X value for the custom cursor.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.0
 *
 * @param anchorY:num
 * @text Anchor Y
 * @parent Anchor
 * @desc Anchor Y value for the custom cursor.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.0
 *
 */
//=============================================================================

const _0x6c9533=_0x2756;(function(_0x3427f8,_0x46daf2){const _0x53a350=_0x2756,_0x2afd6b=_0x3427f8();while(!![]){try{const _0xa770ce=-parseInt(_0x53a350(0x231))/0x1*(parseInt(_0x53a350(0x16e))/0x2)+-parseInt(_0x53a350(0x194))/0x3+parseInt(_0x53a350(0x20d))/0x4+-parseInt(_0x53a350(0x1f7))/0x5*(parseInt(_0x53a350(0x148))/0x6)+-parseInt(_0x53a350(0x195))/0x7*(parseInt(_0x53a350(0xc6))/0x8)+parseInt(_0x53a350(0x197))/0x9+parseInt(_0x53a350(0x1ee))/0xa;if(_0xa770ce===_0x46daf2)break;else _0x2afd6b['push'](_0x2afd6b['shift']());}catch(_0x3b16f6){_0x2afd6b['push'](_0x2afd6b['shift']());}}}(_0x4b1e,0x18975));var label=_0x6c9533(0x181),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x6c9533(0x136)](function(_0x17a536){const _0x4e7990=_0x6c9533;return _0x17a536['status']&&_0x17a536[_0x4e7990(0x123)][_0x4e7990(0x154)]('['+label+']');})[0x0];VisuMZ[label][_0x6c9533(0x16a)]=VisuMZ[label][_0x6c9533(0x16a)]||{},VisuMZ['ConvertParams']=function(_0x376bf8,_0x454cc6){const _0x3e1a15=_0x6c9533;for(const _0x4807c2 in _0x454cc6){if(_0x4807c2[_0x3e1a15(0x1b9)](/(.*):(.*)/i)){const _0x35bb50=String(RegExp['$1']),_0x29ae88=String(RegExp['$2'])['toUpperCase']()[_0x3e1a15(0xbe)]();let _0x123a89,_0x582ef6,_0x3c23b5;switch(_0x29ae88){case _0x3e1a15(0x1e8):_0x123a89=_0x454cc6[_0x4807c2]!==''?Number(_0x454cc6[_0x4807c2]):0x0;break;case _0x3e1a15(0x17b):_0x582ef6=_0x454cc6[_0x4807c2]!==''?JSON[_0x3e1a15(0xc2)](_0x454cc6[_0x4807c2]):[],_0x123a89=_0x582ef6[_0x3e1a15(0x106)](_0x2d783e=>Number(_0x2d783e));break;case _0x3e1a15(0x155):_0x123a89=_0x454cc6[_0x4807c2]!==''?eval(_0x454cc6[_0x4807c2]):null;break;case'ARRAYEVAL':_0x582ef6=_0x454cc6[_0x4807c2]!==''?JSON['parse'](_0x454cc6[_0x4807c2]):[],_0x123a89=_0x582ef6[_0x3e1a15(0x106)](_0x41ffb9=>eval(_0x41ffb9));break;case'JSON':_0x123a89=_0x454cc6[_0x4807c2]!==''?JSON[_0x3e1a15(0xc2)](_0x454cc6[_0x4807c2]):'';break;case'ARRAYJSON':_0x582ef6=_0x454cc6[_0x4807c2]!==''?JSON['parse'](_0x454cc6[_0x4807c2]):[],_0x123a89=_0x582ef6['map'](_0x273e6d=>JSON[_0x3e1a15(0xc2)](_0x273e6d));break;case _0x3e1a15(0x25f):_0x123a89=_0x454cc6[_0x4807c2]!==''?new Function(JSON['parse'](_0x454cc6[_0x4807c2])):new Function(_0x3e1a15(0x12a));break;case'ARRAYFUNC':_0x582ef6=_0x454cc6[_0x4807c2]!==''?JSON[_0x3e1a15(0xc2)](_0x454cc6[_0x4807c2]):[],_0x123a89=_0x582ef6[_0x3e1a15(0x106)](_0x82c637=>new Function(JSON[_0x3e1a15(0xc2)](_0x82c637)));break;case _0x3e1a15(0x13d):_0x123a89=_0x454cc6[_0x4807c2]!==''?String(_0x454cc6[_0x4807c2]):'';break;case _0x3e1a15(0x1fb):_0x582ef6=_0x454cc6[_0x4807c2]!==''?JSON['parse'](_0x454cc6[_0x4807c2]):[],_0x123a89=_0x582ef6['map'](_0x4be76e=>String(_0x4be76e));break;case _0x3e1a15(0xfe):_0x3c23b5=_0x454cc6[_0x4807c2]!==''?JSON['parse'](_0x454cc6[_0x4807c2]):{},_0x376bf8[_0x35bb50]={},VisuMZ[_0x3e1a15(0xbc)](_0x376bf8[_0x35bb50],_0x3c23b5);continue;case _0x3e1a15(0x1a5):_0x582ef6=_0x454cc6[_0x4807c2]!==''?JSON[_0x3e1a15(0xc2)](_0x454cc6[_0x4807c2]):[],_0x123a89=_0x582ef6[_0x3e1a15(0x106)](_0xf990dc=>VisuMZ[_0x3e1a15(0xbc)]({},JSON['parse'](_0xf990dc)));break;default:continue;}_0x376bf8[_0x35bb50]=_0x123a89;}}return _0x376bf8;},(_0xb8e1c9=>{const _0x16aa17=_0x6c9533,_0xe790aa=_0xb8e1c9[_0x16aa17(0x1e7)];for(const _0x6aa8c0 of dependencies){if(!Imported[_0x6aa8c0]){alert(_0x16aa17(0x1f2)[_0x16aa17(0xce)](_0xe790aa,_0x6aa8c0)),SceneManager[_0x16aa17(0x14a)]();break;}}const _0x5b9042=_0xb8e1c9[_0x16aa17(0x123)];if(_0x5b9042[_0x16aa17(0x1b9)](/\[Version[ ](.*?)\]/i)){const _0x57de3b=Number(RegExp['$1']);_0x57de3b!==VisuMZ[label][_0x16aa17(0x223)]&&(alert(_0x16aa17(0x1c7)[_0x16aa17(0xce)](_0xe790aa,_0x57de3b)),SceneManager[_0x16aa17(0x14a)]());}if(_0x5b9042['match'](/\[Tier[ ](\d+)\]/i)){const _0x242655=Number(RegExp['$1']);_0x242655<tier?(alert(_0x16aa17(0xdb)[_0x16aa17(0xce)](_0xe790aa,_0x242655,tier)),SceneManager[_0x16aa17(0x14a)]()):tier=Math[_0x16aa17(0x1a1)](_0x242655,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x16aa17(0x16a)],_0xb8e1c9['parameters']);})(pluginData),PluginManager[_0x6c9533(0x1b6)](pluginData[_0x6c9533(0x1e7)],_0x6c9533(0x203),_0x5ee310=>{const _0x59c0fc=_0x6c9533;VisuMZ[_0x59c0fc(0xbc)](_0x5ee310,_0x5ee310);const _0x3f440d=_0x5ee310['Step1'],_0x487524=_0x5ee310[_0x59c0fc(0x1df)];for(let _0x163dca of _0x3f440d){_0x163dca=parseInt(_0x163dca)||0x0;if(_0x163dca<=0x0)continue;const _0x11f7c6=$gameActors[_0x59c0fc(0x23c)](_0x163dca);if(!_0x11f7c6)continue;_0x11f7c6[_0x59c0fc(0xc3)](_0x487524);}}),PluginManager[_0x6c9533(0x1b6)](pluginData[_0x6c9533(0x1e7)],_0x6c9533(0x13a),_0x12f415=>{const _0x2beb69=_0x6c9533;VisuMZ[_0x2beb69(0xbc)](_0x12f415,_0x12f415);const _0x5d4076=_0x12f415['Step1End']>=_0x12f415['Step1Start']?_0x12f415[_0x2beb69(0xe2)]:_0x12f415['Step1End'],_0x599956=_0x12f415[_0x2beb69(0x247)]>=_0x12f415[_0x2beb69(0xe2)]?_0x12f415[_0x2beb69(0x247)]:_0x12f415[_0x2beb69(0xe2)],_0x32b0dd=Array(_0x599956-_0x5d4076+0x1)[_0x2beb69(0x237)]()[_0x2beb69(0x106)]((_0x6e5609,_0x1a0235)=>_0x5d4076+_0x1a0235),_0x41d539=_0x12f415['Step2'];for(let _0x14939e of _0x32b0dd){_0x14939e=parseInt(_0x14939e)||0x0;if(_0x14939e<=0x0)continue;const _0x32d515=$gameActors[_0x2beb69(0x23c)](_0x14939e);if(!_0x32d515)continue;_0x32d515[_0x2beb69(0xc3)](_0x41d539);}}),PluginManager[_0x6c9533(0x1b6)](pluginData[_0x6c9533(0x1e7)],_0x6c9533(0xd1),_0x5ef27e=>{const _0x52207f=_0x6c9533;VisuMZ[_0x52207f(0xbc)](_0x5ef27e,_0x5ef27e);const _0x3eced8=_0x5ef27e[_0x52207f(0x1e6)];let _0x463a44=[];while(_0x3eced8[_0x52207f(0xe7)]>0x0){const _0x5d175a=_0x3eced8[_0x52207f(0x1ca)]();Array[_0x52207f(0x1ce)](_0x5d175a)?_0x463a44=_0x463a44[_0x52207f(0x142)](_0x5d175a):_0x463a44['push'](_0x5d175a);}const _0xbea58=_0x5ef27e[_0x52207f(0x1df)];for(let _0x150019 of _0x463a44){_0x150019=parseInt(_0x150019)||0x0;if(_0x150019<=0x0)continue;const _0x18686a=$gameActors[_0x52207f(0x23c)](_0x150019);if(!_0x18686a)continue;_0x18686a[_0x52207f(0xc3)](_0xbea58);}}),PluginManager[_0x6c9533(0x1b6)](pluginData[_0x6c9533(0x1e7)],'ChangeActorMenuImageJS_v124',_0xeb4389=>{const _0x32f61d=_0x6c9533;VisuMZ[_0x32f61d(0xbc)](_0xeb4389,_0xeb4389);const _0x4353f1=_0xeb4389[_0x32f61d(0x241)](),_0x59283e=$gameActors['actor'](_0x4353f1)||null;if(!_0x59283e){console[_0x32f61d(0x209)](_0x32f61d(0x147));return;}const _0x4f98c0=_0xeb4389[_0x32f61d(0xcd)]();_0x59283e['setMenuImage'](_0x4f98c0);}),PluginManager[_0x6c9533(0x1b6)](pluginData[_0x6c9533(0x1e7)],_0x6c9533(0x1d6),_0x203c3a=>{const _0x2097d4=_0x6c9533;VisuMZ[_0x2097d4(0xbc)](_0x203c3a,_0x203c3a);const _0x5aba99=_0x203c3a['Symbols']||[];for(const _0x5200cb of _0x5aba99){$gameSystem['clearShowMainMenuCommand'](_0x5200cb);}}),PluginManager[_0x6c9533(0x1b6)](pluginData[_0x6c9533(0x1e7)],'MenuCommandForceEnable',_0x26b39b=>{const _0x12e131=_0x6c9533;VisuMZ[_0x12e131(0xbc)](_0x26b39b,_0x26b39b);const _0x571257=_0x26b39b[_0x12e131(0x1ea)]||[];for(const _0x27b5ff of _0x571257){$gameSystem['forceEnableMainMenuCommand'](_0x27b5ff);}}),PluginManager['registerCommand'](pluginData['name'],_0x6c9533(0x107),_0x452b9f=>{const _0x34eb8b=_0x6c9533;VisuMZ[_0x34eb8b(0xbc)](_0x452b9f,_0x452b9f);const _0x54d03f=_0x452b9f[_0x34eb8b(0x1ea)]||[];for(const _0x560078 of _0x54d03f){$gameSystem['forceDisableMainMenuCommand'](_0x560078);}}),PluginManager[_0x6c9533(0x1b6)](pluginData[_0x6c9533(0x1e7)],'MenuCommandForceHide',_0x1261d9=>{const _0x53d545=_0x6c9533;VisuMZ['ConvertParams'](_0x1261d9,_0x1261d9);const _0x396254=_0x1261d9[_0x53d545(0x1ea)]||[];for(const _0x48d9ec of _0x396254){$gameSystem[_0x53d545(0x268)](_0x48d9ec);}}),PluginManager['registerCommand'](pluginData[_0x6c9533(0x1e7)],_0x6c9533(0x264),_0xe62d16=>{const _0x558109=_0x6c9533;VisuMZ[_0x558109(0xbc)](_0xe62d16,_0xe62d16);const _0x201a2d=_0xe62d16['Symbols']||[];for(const _0x26be5d of _0x201a2d){$gameSystem['forceShowMainMenuCommand'](_0x26be5d);}}),VisuMZ[_0x6c9533(0x181)]['Scene_Boot_loadSystemImages_MC']=Scene_Boot[_0x6c9533(0x1c2)][_0x6c9533(0x1de)],Scene_Boot['prototype'][_0x6c9533(0x1de)]=function(){const _0x549155=_0x6c9533;VisuMZ['MainMenuCore']['Scene_Boot_loadSystemImages_MC']['call'](this),VisuMZ[_0x549155(0x181)][_0x549155(0x12c)]()&&VisuMZ[_0x549155(0x181)][_0x549155(0x146)]();},VisuMZ[_0x6c9533(0x181)]['IsCustomCursorEnabled']=function(){const _0x4c000d=_0x6c9533;if(Utils[_0x4c000d(0x17e)]())return![];const _0x5d54b7=VisuMZ[_0x4c000d(0x181)][_0x4c000d(0x16a)][_0x4c000d(0xd2)];if(!_0x5d54b7[_0x4c000d(0x138)])return![];return _0x5d54b7[_0x4c000d(0x22f)]&&_0x5d54b7[_0x4c000d(0x22f)][_0x4c000d(0xe7)]>0x0;},VisuMZ[_0x6c9533(0x181)][_0x6c9533(0x146)]=function(){const _0x1c5cc2=_0x6c9533,_0x1a9269=VisuMZ['MainMenuCore'][_0x1c5cc2(0x16a)][_0x1c5cc2(0xd2)],_0x2fc7c5=_0x1c5cc2(0x22d)+_0x1a9269[_0x1c5cc2(0x22f)]+_0x1c5cc2(0x22c),_0x153e44=_0x1c5cc2(0x22d)+(_0x1a9269[_0x1c5cc2(0x131)]||_0x1a9269[_0x1c5cc2(0x22f)])+'.png',_0x53ca05=new Image();_0x53ca05[_0x1c5cc2(0x157)]=_0x2fc7c5,_0x53ca05['onload']=function(){const _0xd1d505=_0x1c5cc2,_0x234a10=document[_0xd1d505(0x105)](_0xd1d505(0xe6));_0x234a10[_0xd1d505(0x258)][_0xd1d505(0x1c8)]=_0xd1d505(0x153),_0x234a10[_0xd1d505(0x258)][_0xd1d505(0x1fa)]=_0x53ca05['width']+'px',_0x234a10['style'][_0xd1d505(0x24c)]=_0x53ca05['height']+'px',_0x234a10[_0xd1d505(0x258)]['backgroundImage']=_0xd1d505(0x1dd)+_0x2fc7c5+')',_0x234a10[_0xd1d505(0x258)][_0xd1d505(0x13b)]=_0xd1d505(0x188),_0x234a10[_0xd1d505(0x258)]['zIndex']='1000',_0x234a10['style'][_0xd1d505(0xd4)]='none',document[_0xd1d505(0x169)][_0xd1d505(0x190)](_0x234a10),document[_0xd1d505(0x169)]['style'][_0xd1d505(0x1af)]=_0xd1d505(0x188),document['body'][_0xd1d505(0x258)][_0xd1d505(0x1ad)]='hidden',document[_0xd1d505(0x266)]('mousemove',function(_0x1f3a5b){const _0x118cb1=_0xd1d505;_0x234a10[_0x118cb1(0x258)]['display']='';let _0x336728=_0x1f3a5b[_0x118cb1(0x242)],_0x42aa6c=_0x1f3a5b[_0x118cb1(0x1a8)];_0x336728<=0x0&&_0x42aa6c<=0x0&&(_0x336728+=Graphics[_0x118cb1(0x1fa)]*0xa,_0x42aa6c+=Graphics[_0x118cb1(0x24c)]*0xa),_0x336728-=Math[_0x118cb1(0x1d4)](_0x1a9269[_0x118cb1(0x230)]*_0x53ca05[_0x118cb1(0x1fa)]),_0x42aa6c-=Math[_0x118cb1(0x1d4)](_0x1a9269[_0x118cb1(0x1f8)]*_0x53ca05[_0x118cb1(0x24c)]),_0x234a10['style']['left']=_0x336728+'px',_0x234a10[_0x118cb1(0x258)][_0x118cb1(0xf8)]=_0x42aa6c+'px';}),document[_0xd1d505(0x266)](_0xd1d505(0x19e),function(_0x436c58){const _0x356e22=_0xd1d505,_0x175e3d=_0x436c58['touches'][0x0];let _0x5606b3=_0x175e3d[_0x356e22(0x242)],_0x49e0e8=_0x175e3d[_0x356e22(0x1a8)];_0x5606b3-=Math[_0x356e22(0x1d4)](_0x1a9269[_0x356e22(0x230)]*_0x53ca05[_0x356e22(0x1fa)]),_0x49e0e8-=Math[_0x356e22(0x1d4)](_0x1a9269[_0x356e22(0x1f8)]*_0x53ca05[_0x356e22(0x24c)]),_0x234a10[_0x356e22(0x258)][_0x356e22(0x1d1)]=_0x5606b3+'px',_0x234a10['style']['top']=_0x49e0e8+'px';}),document[_0xd1d505(0x266)]('mousedown',function(){const _0x5b381a=_0xd1d505;_0x234a10['style'][_0x5b381a(0x1a0)]=_0x5b381a(0x1dd)+_0x153e44+')';}),document[_0xd1d505(0x266)](_0xd1d505(0x14b),function(){const _0x1e8755=_0xd1d505;_0x234a10[_0x1e8755(0x258)]['backgroundImage']=_0x1e8755(0x1dd)+_0x2fc7c5+')';});},_0x53ca05[_0x1c5cc2(0x16d)]=function(){const _0x2e64f1=_0x1c5cc2;console[_0x2e64f1(0xf4)](_0x2e64f1(0x152));};},VisuMZ['MainMenuCore'][_0x6c9533(0x1fe)]=SceneManager[_0x6c9533(0xea)],SceneManager['push']=function(_0xe83539){const _0x408cc2=_0x6c9533;_0xe83539===Scene_Menu&&($gameTemp['_mainMenuSubcategory']=undefined),VisuMZ[_0x408cc2(0x181)][_0x408cc2(0x1fe)]['call'](this,_0xe83539);},VisuMZ[_0x6c9533(0x181)][_0x6c9533(0x20a)]=Game_System['prototype']['initialize'],Game_System[_0x6c9533(0x1c2)]['initialize']=function(){const _0x410ff8=_0x6c9533;VisuMZ['MainMenuCore'][_0x410ff8(0x20a)]['call'](this),this['initMainMenuCore']();},Game_System['prototype'][_0x6c9533(0x168)]=function(){const _0x579a62=_0x6c9533;this[_0x579a62(0x235)]=this[_0x579a62(0x235)]||{'forceShow':[],'forceHide':[],'forceEnable':[],'forceDisable':[]};},Game_System[_0x6c9533(0x1c2)][_0x6c9533(0x17c)]=function(){const _0x376200=_0x6c9533;if(this['_mainMenuCore']===undefined)this[_0x376200(0x168)]();const _0x527306=[_0x376200(0x19d),'forceHide','forceEnable','forceDisable'];for(const _0x38a314 of _0x527306){this[_0x376200(0x235)][_0x38a314]=this[_0x376200(0x235)][_0x38a314]||[];}return this[_0x376200(0x235)];},Game_System[_0x6c9533(0x1c2)]['getMainMenuSymbolState']=function(_0xa15bae,_0x3aad0d){const _0x528e6b=_0x6c9533,_0x165b1f=this[_0x528e6b(0x17c)]();if(!_0x165b1f[_0x3aad0d])return![];return _0x165b1f[_0x3aad0d]['includes'](_0xa15bae);},Game_System[_0x6c9533(0x1c2)]['clearShowMainMenuCommand']=function(_0x5ec2f2){const _0x2426d4=_0x6c9533,_0x5c95dd=this['mainMenuCoreSettings'](),_0x31cc26=[_0x2426d4(0x19d),_0x2426d4(0x24b),_0x2426d4(0x210),_0x2426d4(0x19f)];for(const _0x35ccb7 of _0x31cc26){_0x5c95dd[_0x35ccb7][_0x2426d4(0x18e)](_0x5ec2f2);}},Game_System[_0x6c9533(0x1c2)][_0x6c9533(0x199)]=function(_0x2f3d2b){const _0x2fe196=_0x6c9533,_0x52edef=this[_0x2fe196(0x17c)]();!_0x52edef[_0x2fe196(0x19d)][_0x2fe196(0x154)](_0x2f3d2b)&&_0x52edef[_0x2fe196(0x19d)][_0x2fe196(0xea)](_0x2f3d2b),_0x52edef[_0x2fe196(0x24b)][_0x2fe196(0x18e)](_0x2f3d2b);},Game_System['prototype'][_0x6c9533(0x268)]=function(_0xfa0ddb){const _0x32f9af=_0x6c9533,_0x443e69=this[_0x32f9af(0x17c)]();!_0x443e69[_0x32f9af(0x24b)][_0x32f9af(0x154)](_0xfa0ddb)&&_0x443e69[_0x32f9af(0x24b)]['push'](_0xfa0ddb),_0x443e69[_0x32f9af(0x19d)]['remove'](_0xfa0ddb);},Game_System[_0x6c9533(0x1c2)][_0x6c9533(0x19b)]=function(_0x38c969){const _0x4686b6=_0x6c9533,_0x1698a0=this[_0x4686b6(0x17c)]();!_0x1698a0[_0x4686b6(0x210)][_0x4686b6(0x154)](_0x38c969)&&_0x1698a0[_0x4686b6(0x210)][_0x4686b6(0xea)](_0x38c969),_0x1698a0[_0x4686b6(0x19f)][_0x4686b6(0x18e)](_0x38c969);},Game_System[_0x6c9533(0x1c2)][_0x6c9533(0x17a)]=function(_0x8726e9){const _0x2eab87=_0x6c9533,_0x506fbe=this[_0x2eab87(0x17c)]();!_0x506fbe[_0x2eab87(0x19f)][_0x2eab87(0x154)](_0x8726e9)&&_0x506fbe[_0x2eab87(0x19f)][_0x2eab87(0xea)](_0x8726e9),_0x506fbe[_0x2eab87(0x210)]['remove'](_0x8726e9);},VisuMZ[_0x6c9533(0x181)][_0x6c9533(0x14c)]=Game_Actor['prototype'][_0x6c9533(0x151)],Game_Actor[_0x6c9533(0x1c2)]['setup']=function(_0x2f9ce0){const _0x35ff85=_0x6c9533;VisuMZ[_0x35ff85(0x181)][_0x35ff85(0x14c)]['call'](this,_0x2f9ce0),this[_0x35ff85(0x18c)]();},Game_Actor['prototype'][_0x6c9533(0x18c)]=function(){const _0x5ec07d=_0x6c9533;this[_0x5ec07d(0x248)]='',this['actor']()&&this[_0x5ec07d(0x23c)]()[_0x5ec07d(0xe4)][_0x5ec07d(0x1b9)](/<MENU (?:IMAGE|PORTRAIT):[ ](.*)>/i)&&(this[_0x5ec07d(0x248)]=String(RegExp['$1']));},Game_Actor[_0x6c9533(0x1c2)][_0x6c9533(0x124)]=function(){const _0x3ff918=_0x6c9533;if(this['_menuImage']===undefined)this[_0x3ff918(0x18c)]();return this[_0x3ff918(0x248)];},Game_Actor[_0x6c9533(0x1c2)][_0x6c9533(0xc3)]=function(_0x3c5400){const _0x4891f7=_0x6c9533;if(this[_0x4891f7(0x248)]===undefined)this[_0x4891f7(0x18c)]();this[_0x4891f7(0x248)]=_0x3c5400;},Game_Actor[_0x6c9533(0x1c2)][_0x6c9533(0x11e)]=function(){const _0x2b956d=_0x6c9533;if(this['actor']()[_0x2b956d(0xe4)]['match'](/<MENU (?:IMAGE|PORTRAIT) OFFSET X:[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);else{if(this['actor']()[_0x2b956d(0xe4)][_0x2b956d(0x1b9)](/<MENU (?:IMAGE|PORTRAIT) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);}return 0x0;},Game_Actor[_0x6c9533(0x1c2)][_0x6c9533(0x1c3)]=function(){const _0x5e14ba=_0x6c9533;if(this[_0x5e14ba(0x23c)]()[_0x5e14ba(0xe4)][_0x5e14ba(0x1b9)](/<MENU (?:IMAGE|PORTRAIT) OFFSET Y:[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);else{if(this[_0x5e14ba(0x23c)]()[_0x5e14ba(0xe4)]['match'](/<MENU (?:IMAGE|PORTRAIT) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i))return Number(RegExp['$2']);}return 0x0;},Scene_MenuBase[_0x6c9533(0x1c2)][_0x6c9533(0x208)]=function(){const _0x343d2f=_0x6c9533;return VisuMZ[_0x343d2f(0x181)][_0x343d2f(0x16a)][_0x343d2f(0x1eb)]['ActorBgMenus'][_0x343d2f(0x154)](this[_0x343d2f(0x1f4)][_0x343d2f(0x1e7)]);},VisuMZ[_0x6c9533(0x181)]['Scene_MenuBase_createBackground']=Scene_MenuBase[_0x6c9533(0x1c2)]['createBackground'],Scene_MenuBase[_0x6c9533(0x1c2)][_0x6c9533(0x1a3)]=function(){const _0x5f575b=_0x6c9533;VisuMZ[_0x5f575b(0x181)]['Scene_MenuBase_createBackground'][_0x5f575b(0x13c)](this),this[_0x5f575b(0x10a)]();},Scene_MenuBase[_0x6c9533(0x1c2)][_0x6c9533(0x10a)]=function(){const _0x4f213c=_0x6c9533;this[_0x4f213c(0x24f)]=new Sprite_MenuBackgroundActor(),this[_0x4f213c(0x25b)](this['_actorMenuBgSprite']);},VisuMZ[_0x6c9533(0x181)][_0x6c9533(0x1f5)]=Scene_MenuBase['prototype'][_0x6c9533(0x226)],Scene_MenuBase[_0x6c9533(0x1c2)][_0x6c9533(0x226)]=function(){const _0x330403=_0x6c9533;VisuMZ['MainMenuCore']['Scene_MenuBase_updateActor'][_0x330403(0x13c)](this),this['isDisplayActorMenuBackgroundImage']()&&this[_0x330403(0x24f)]&&this[_0x330403(0x24f)]['setActor'](this[_0x330403(0x1e5)]);},VisuMZ[_0x6c9533(0x181)][_0x6c9533(0x1b7)]=Scene_Menu['prototype']['create'],Scene_Menu['prototype'][_0x6c9533(0x238)]=function(){const _0x5ecf4c=_0x6c9533;VisuMZ[_0x5ecf4c(0x181)][_0x5ecf4c(0x1b7)][_0x5ecf4c(0x13c)](this),this[_0x5ecf4c(0x104)](),this[_0x5ecf4c(0x1d2)](),this[_0x5ecf4c(0x245)]();},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0xba)]=function(){const _0x245e56=_0x6c9533,_0x2e6b0d=this['commandWindowRect'](),_0x1d6cd8=new Window_MenuCommand(_0x2e6b0d);_0x1d6cd8[_0x245e56(0x166)](_0x245e56(0x127),this[_0x245e56(0xbd)][_0x245e56(0xe0)](this)),this[_0x245e56(0x1ef)](_0x1d6cd8),this[_0x245e56(0x18f)]=_0x1d6cd8;},VisuMZ['MainMenuCore'][_0x6c9533(0x22a)]=Scene_Menu[_0x6c9533(0x1c2)]['commandWindowRect'],Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x21f)]=function(){const _0x314989=_0x6c9533,_0xfe3544=this[_0x314989(0x1b2)]();if(_0xfe3544===_0x314989(0xf8))return this[_0x314989(0x18d)]();else{if(_0xfe3544===_0x314989(0x23e))return this[_0x314989(0x1e9)]();else{if(_0xfe3544===_0x314989(0xcf))return this[_0x314989(0x1a6)]();else{if(_0xfe3544===_0x314989(0xc1))return this[_0x314989(0x269)]();else{if(_0xfe3544===_0x314989(0x1d5))return this['commandWindowRectMobileStyle']();else{const _0x536e42=VisuMZ[_0x314989(0x181)]['Scene_Menu_commandWindowRect'][_0x314989(0x13c)](this);return this[_0x314989(0x233)](_0x536e42),_0x536e42;}}}}}},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x233)]=function(_0x5bd96c){const _0xd276a=_0x6c9533;this[_0xd276a(0x130)]()&&(_0x5bd96c[_0xd276a(0x24c)]-=this['playtimeWindowRect']()['height']),this[_0xd276a(0x222)]()&&(_0x5bd96c['height']-=this[_0xd276a(0xca)]()['height']);},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x18d)]=function(){const _0x18449e=_0x6c9533,_0x112421=VisuMZ[_0x18449e(0x181)][_0x18449e(0x16a)][_0x18449e(0x121)][_0x18449e(0x1bb)],_0x1c99a9=Graphics[_0x18449e(0x156)],_0x23c8b0=this['calcWindowHeight'](_0x112421,!![]),_0x3fab21=0x0,_0x4cd519=this[_0x18449e(0xee)]();return new Rectangle(_0x3fab21,_0x4cd519,_0x1c99a9,_0x23c8b0);},Scene_Menu['prototype'][_0x6c9533(0x1e9)]=function(){const _0x328f56=_0x6c9533,_0x593a19=VisuMZ[_0x328f56(0x181)][_0x328f56(0x16a)][_0x328f56(0x121)]['Rows'],_0x377cc1=Graphics['boxWidth'],_0x489a6f=this['calcWindowHeight'](0x1,!![]),_0x55164a=0x0,_0x292245=this[_0x328f56(0xee)]();return new Rectangle(_0x55164a,_0x292245,_0x377cc1,_0x489a6f);},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x1a6)]=function(){const _0x598d6f=_0x6c9533,_0x5b33e4=VisuMZ['MainMenuCore'][_0x598d6f(0x16a)]['CustomCmdWin'][_0x598d6f(0x1bb)],_0x252a5d=Graphics[_0x598d6f(0x156)],_0x11a5bf=this['calcWindowHeight'](_0x5b33e4,!![]),_0x392fdf=0x0,_0x4a4bcf=this[_0x598d6f(0xfd)]()-_0x11a5bf;return new Rectangle(_0x392fdf,_0x4a4bcf,_0x252a5d,_0x11a5bf);},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x269)]=function(){const _0x20445b=_0x6c9533,_0x41ca09=VisuMZ['MainMenuCore']['Settings'][_0x20445b(0x121)][_0x20445b(0x1bb)],_0x4ab1e6=Graphics[_0x20445b(0x156)],_0x100c88=this[_0x20445b(0x111)](0x1,!![]),_0x3de5d6=0x0,_0x4ff819=this[_0x20445b(0xfd)]()-_0x100c88;return new Rectangle(_0x3de5d6,_0x4ff819,_0x4ab1e6,_0x100c88);},Scene_Menu[_0x6c9533(0x1c2)]['commandWindowRectMobileStyle']=function(){const _0x4c98e2=_0x6c9533,_0x1f6772=VisuMZ[_0x4c98e2(0x181)][_0x4c98e2(0x16a)]['CustomCmdWin'][_0x4c98e2(0x1bb)],_0xccd348=Graphics['boxWidth'],_0x295f75=Window_MenuCommand[_0x4c98e2(0x1c2)]['fittingHeight'](_0x1f6772),_0x3c716d=0x0,_0x48beee=Math[_0x4c98e2(0x1d4)]((Graphics[_0x4c98e2(0x176)]-_0x295f75)/0x2);return new Rectangle(_0x3c716d,_0x48beee,_0xccd348,_0x295f75);},Scene_Menu['prototype'][_0x6c9533(0x1b2)]=function(){const _0x536c3f=_0x6c9533;return VisuMZ[_0x536c3f(0x181)]['Settings'][_0x536c3f(0xd6)];},Scene_Menu['prototype']['thinGoldWindow']=function(){const _0x100edc=_0x6c9533;if(this[_0x100edc(0x1b2)]()!=='default')return!![];return VisuMZ['MainMenuCore'][_0x100edc(0x16a)][_0x100edc(0x1eb)][_0x100edc(0x114)];},Scene_Menu[_0x6c9533(0x1c2)]['createGoldWindow']=function(){const _0x315c8b=_0x6c9533,_0x2e83c9=this['goldWindowRect']();this[_0x315c8b(0xdc)]=this['thinGoldWindow']()?new Window_ThinGold(_0x2e83c9):new Window_Gold(_0x2e83c9),this[_0x315c8b(0x1ef)](this[_0x315c8b(0xdc)]);},VisuMZ[_0x6c9533(0x181)][_0x6c9533(0xe3)]=Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x164)],Scene_Menu['prototype'][_0x6c9533(0x164)]=function(){const _0x375c30=_0x6c9533,_0x25fd5e=this[_0x375c30(0x1b2)]();if(['top',_0x375c30(0x23e),'mobile'][_0x375c30(0x154)](_0x25fd5e))return this[_0x375c30(0xeb)]();else{if([_0x375c30(0xcf),_0x375c30(0xc1)][_0x375c30(0x154)](_0x25fd5e))return this[_0x375c30(0x1a4)]();else{const _0x2f786f=VisuMZ[_0x375c30(0x181)][_0x375c30(0xe3)][_0x375c30(0x13c)](this);return this[_0x375c30(0x180)](_0x2f786f),_0x2f786f;}}},Scene_Menu[_0x6c9533(0x1c2)]['applyThinnerGoldWindowRect']=function(_0x6bfbaa){const _0x3651b1=_0x6c9533;if(this[_0x3651b1(0x1a2)]()){if(VisuMZ[_0x3651b1(0x181)][_0x3651b1(0x16a)][_0x3651b1(0x1eb)][_0x3651b1(0x158)]){const _0x194ddf=_0x6bfbaa[_0x3651b1(0x24c)]-this[_0x3651b1(0x111)](0x1,![]);_0x6bfbaa['y']+=_0x194ddf;}VisuMZ['MainMenuCore']['Settings'][_0x3651b1(0x1eb)]['AutoGoldHeight']&&(_0x6bfbaa[_0x3651b1(0x24c)]=this[_0x3651b1(0x111)](0x1,![]));}},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0xeb)]=function(){const _0x398b0b=_0x6c9533,_0x10bf69=this[_0x398b0b(0x1be)](),_0x326b54=this[_0x398b0b(0x111)](0x1,![]),_0x43ab4f=Graphics[_0x398b0b(0x156)]-_0x10bf69,_0xe9dcde=this[_0x398b0b(0xfd)]()-_0x326b54;return new Rectangle(_0x43ab4f,_0xe9dcde,_0x10bf69,_0x326b54);},Scene_Menu[_0x6c9533(0x1c2)]['goldWindowRectBottomStyle']=function(){const _0x57f9fa=_0x6c9533,_0x1a16a1=this[_0x57f9fa(0x1be)](),_0x29d4ed=this[_0x57f9fa(0x111)](0x1,![]),_0x45e345=Graphics[_0x57f9fa(0x156)]-_0x1a16a1,_0x3693e2=this['mainAreaTop']();return new Rectangle(_0x45e345,_0x3693e2,_0x1a16a1,_0x29d4ed);},VisuMZ['MainMenuCore'][_0x6c9533(0x15d)]=Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x1cd)],Scene_Menu['prototype'][_0x6c9533(0x1cd)]=function(){const _0x234cd2=_0x6c9533;VisuMZ['MainMenuCore'][_0x234cd2(0x15d)][_0x234cd2(0x13c)](this),this[_0x234cd2(0x236)]();},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x236)]=function(){const _0x34c5f7=_0x6c9533;this[_0x34c5f7(0x1b2)]()===_0x34c5f7(0x1d5)&&(this[_0x34c5f7(0x1c1)][_0x34c5f7(0xcb)]=0x0);},VisuMZ[_0x6c9533(0x181)][_0x6c9533(0x1f3)]=Scene_Menu[_0x6c9533(0x1c2)]['statusWindowRect'],Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x1b3)]=function(){const _0xddb871=_0x6c9533,_0x2a41fc=this[_0xddb871(0x1b2)]();if([_0xddb871(0xf8),_0xddb871(0x23e)]['includes'](_0x2a41fc))return this[_0xddb871(0x178)]();else{if([_0xddb871(0xcf),'thinBottom'][_0xddb871(0x154)](_0x2a41fc))return this[_0xddb871(0xe8)]();else return _0x2a41fc===_0xddb871(0x1d5)?this[_0xddb871(0xb7)]():VisuMZ[_0xddb871(0x181)][_0xddb871(0x1f3)][_0xddb871(0x13c)](this);}},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x178)]=function(){const _0x20c8fa=_0x6c9533,_0x3032f0=Graphics[_0x20c8fa(0x156)],_0x1d9115=this[_0x20c8fa(0x23f)]()-this[_0x20c8fa(0x18f)][_0x20c8fa(0x24c)]-this[_0x20c8fa(0xdc)][_0x20c8fa(0x24c)],_0x245b37=0x0,_0x450439=this[_0x20c8fa(0x18f)]['y']+this[_0x20c8fa(0x18f)][_0x20c8fa(0x24c)];return new Rectangle(_0x245b37,_0x450439,_0x3032f0,_0x1d9115);},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0xe8)]=function(){const _0x337a00=_0x6c9533,_0x564ebf=Graphics[_0x337a00(0x156)],_0x112fd9=this[_0x337a00(0x23f)]()-this[_0x337a00(0x18f)]['height']-this[_0x337a00(0xdc)][_0x337a00(0x24c)],_0x4549b2=0x0,_0xa6b000=this[_0x337a00(0xdc)]['y']+this[_0x337a00(0xdc)][_0x337a00(0x24c)];return new Rectangle(_0x4549b2,_0xa6b000,_0x564ebf,_0x112fd9);},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0xb7)]=function(){const _0x4b76e0=_0x6c9533,_0x3815d2=Graphics[_0x4b76e0(0x156)],_0x38cc2d=this[_0x4b76e0(0x23f)]()-this[_0x4b76e0(0xdc)][_0x4b76e0(0x24c)],_0x9f9f6=0x0,_0xc154fe=this[_0x4b76e0(0xfd)]()-this[_0x4b76e0(0xdc)][_0x4b76e0(0x24c)]-_0x38cc2d;return new Rectangle(_0x9f9f6,_0xc154fe,_0x3815d2,_0x38cc2d);},Scene_Menu['prototype'][_0x6c9533(0x104)]=function(){const _0x22a37c=_0x6c9533;if(!this['canCreatePlaytimeWindow']())return new Rectangle(0x0,0x0,0x0,0x0);const _0x377272=this[_0x22a37c(0x1c9)]();this['_playtimeWindow']=new Window_Playtime(_0x377272),this[_0x22a37c(0x234)][_0x22a37c(0xb3)](VisuMZ['MainMenuCore'][_0x22a37c(0x16a)]['Playtime'][_0x22a37c(0x143)]),this['addWindow'](this[_0x22a37c(0x234)]);},Scene_Menu['prototype'][_0x6c9533(0x20b)]=function(){const _0x505060=_0x6c9533;return VisuMZ['MainMenuCore'][_0x505060(0x16a)]['Playtime'][_0x505060(0x138)];},Scene_Menu['prototype'][_0x6c9533(0x130)]=function(){const _0x5fa24=_0x6c9533;return this['canCreatePlaytimeWindow']()&&(VisuMZ[_0x5fa24(0x181)][_0x5fa24(0x16a)]['Playtime'][_0x5fa24(0x1b1)]??!![]);},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x1c9)]=function(){const _0x4df0e9=_0x6c9533,_0xdd5a0d=this[_0x4df0e9(0x1b2)]();if([_0x4df0e9(0xf8),'thinTop',_0x4df0e9(0x1d5)][_0x4df0e9(0x154)](_0xdd5a0d))return this[_0x4df0e9(0x1c0)]();else return[_0x4df0e9(0xcf),_0x4df0e9(0xc1)]['includes'](_0xdd5a0d)?this[_0x4df0e9(0x1e1)]():VisuMZ[_0x4df0e9(0x181)][_0x4df0e9(0x16a)][_0x4df0e9(0xf1)][_0x4df0e9(0x134)]['call'](this);},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x1c0)]=function(){const _0x5bb266=_0x6c9533,_0x4c28df=this['mainCommandWidth'](),_0x2cced5=this['calcWindowHeight'](0x1,![]),_0x1ea429=0x0,_0x534f7b=this[_0x5bb266(0xfd)]()-_0x2cced5;return new Rectangle(_0x1ea429,_0x534f7b,_0x4c28df,_0x2cced5);},Scene_Menu['prototype'][_0x6c9533(0x1e1)]=function(){const _0x4a635c=_0x6c9533,_0x65e25=this[_0x4a635c(0x1be)](),_0x40527c=this['calcWindowHeight'](0x1,![]),_0x2dccbb=0x0,_0x36b297=this[_0x4a635c(0xee)]();return new Rectangle(_0x2dccbb,_0x36b297,_0x65e25,_0x40527c);},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x1d2)]=function(){const _0x14eb0a=_0x6c9533;if(!this[_0x14eb0a(0x1c6)]())return new Rectangle(0x0,0x0,0x0,0x0);const _0x5ee134=this[_0x14eb0a(0xca)]();this[_0x14eb0a(0x10c)]=new Window_MenuVariables(_0x5ee134),this['_variableWindow'][_0x14eb0a(0xb3)](VisuMZ[_0x14eb0a(0x181)][_0x14eb0a(0x16a)][_0x14eb0a(0x1e3)]['BgType']),this[_0x14eb0a(0x1ef)](this[_0x14eb0a(0x10c)]);},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x1c6)]=function(){const _0x3446d0=_0x6c9533;return VisuMZ['MainMenuCore'][_0x3446d0(0x16a)][_0x3446d0(0x1e3)]['Enable'];},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x222)]=function(){const _0x2b414b=_0x6c9533;return this[_0x2b414b(0x1c6)]()&&(VisuMZ[_0x2b414b(0x181)][_0x2b414b(0x16a)][_0x2b414b(0x1e3)][_0x2b414b(0x1b1)]??!![]);},Scene_Menu['prototype'][_0x6c9533(0xca)]=function(){const _0x45a165=_0x6c9533,_0x2d0245=this[_0x45a165(0x1b2)]();if([_0x45a165(0xf8),_0x45a165(0x23e),'mobile'][_0x45a165(0x154)](_0x2d0245))return this['variableWindowRectTopStyle']();else return['bottom',_0x45a165(0xc1)][_0x45a165(0x154)](_0x2d0245)?this[_0x45a165(0x1cf)]():VisuMZ['MainMenuCore']['Settings'][_0x45a165(0x1e3)][_0x45a165(0x134)]['call'](this);},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0xf7)]=function(){const _0x597501=_0x6c9533,_0x309eb9=Graphics[_0x597501(0x156)]-this['_goldWindow']['width']-(this['_playtimeWindow']?this[_0x597501(0x234)]['width']:0x0),_0x41f5b6=this['calcWindowHeight'](0x1,![]),_0x59b42a=this['_goldWindow']['x']-_0x309eb9,_0x6262b9=this[_0x597501(0xfd)]()-_0x41f5b6;return new Rectangle(_0x59b42a,_0x6262b9,_0x309eb9,_0x41f5b6);},Scene_Menu['prototype']['variableWindowRectBottomStyle']=function(){const _0x3456c9=_0x6c9533,_0x8d740a=Graphics[_0x3456c9(0x156)]-this[_0x3456c9(0xdc)][_0x3456c9(0x1fa)]-(this[_0x3456c9(0x234)]?this['_playtimeWindow'][_0x3456c9(0x1fa)]:0x0),_0x258b01=this[_0x3456c9(0x111)](0x1,![]),_0x1d069d=this[_0x3456c9(0xdc)]['x']-_0x8d740a,_0x892fd1=this[_0x3456c9(0xee)]();return new Rectangle(_0x1d069d,_0x892fd1,_0x8d740a,_0x258b01);},Scene_Menu['prototype']['createDummyWindow']=function(){const _0x47185c=_0x6c9533;if(!this[_0x47185c(0x141)]())return;const _0x5d286a=this[_0x47185c(0xca)]();this[_0x47185c(0x1cc)]=new Window_Base(_0x5d286a),this['_dummyWindow'][_0x47185c(0xb3)](VisuMZ[_0x47185c(0x181)]['Settings'][_0x47185c(0x1e3)][_0x47185c(0x143)]),this[_0x47185c(0x1ef)](this[_0x47185c(0x1cc)]);},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x141)]=function(){const _0x4cc1ce=_0x6c9533;if([_0x4cc1ce(0x1ab),'mobile'][_0x4cc1ce(0x154)](this[_0x4cc1ce(0x1b2)]()))return![];if(this[_0x4cc1ce(0x10c)])return![];return!![];},VisuMZ[_0x6c9533(0x181)][_0x6c9533(0x12f)]=Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x101)],Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x101)]=function(){const _0x5c90ff=_0x6c9533;if(this[_0x5c90ff(0x10e)]()&&this[_0x5c90ff(0x1c1)])$gameParty['setTargetActor']($gameParty[_0x5c90ff(0x211)]()[0x0]),this[_0x5c90ff(0xe9)]();else{if(this[_0x5c90ff(0x1b2)]()===_0x5c90ff(0x1d5))this[_0x5c90ff(0x1c1)][_0x5c90ff(0x145)]();VisuMZ[_0x5c90ff(0x181)]['Scene_Menu_commandPersonal'][_0x5c90ff(0x13c)](this);}},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x10e)]=function(){const _0xb91641=_0x6c9533;return VisuMZ['MainMenuCore'][_0xb91641(0x16a)][_0xb91641(0x1eb)][_0xb91641(0x20c)]&&$gameParty['members']()[_0xb91641(0xe7)]<=0x1;},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0xe9)]=function(){const _0xb84a45=_0x6c9533,_0x355228=this[_0xb84a45(0x18f)][_0xb84a45(0x1db)](),_0x7e92f=this[_0xb84a45(0x18f)]['currentExt']();for(const _0x2252f5 of Window_MenuCommand[_0xb84a45(0x1b5)]){if(_0x2252f5[_0xb84a45(0x20e)]===_0x355228){_0x2252f5['PersonalHandlerJS'][_0xb84a45(0x13c)](this,_0x7e92f);return;}}},VisuMZ[_0x6c9533(0x181)][_0x6c9533(0x257)]=Scene_Menu[_0x6c9533(0x1c2)]['onPersonalCancel'],Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0xde)]=function(){const _0x5cec2e=_0x6c9533;VisuMZ[_0x5cec2e(0x181)][_0x5cec2e(0x257)][_0x5cec2e(0x13c)](this);if(this['commandWindowStyle']()==='mobile')this[_0x5cec2e(0x1c1)][_0x5cec2e(0x1c5)]();},Scene_Menu['prototype'][_0x6c9533(0x177)]=function(){const _0x1a94f0=_0x6c9533,_0x55b4a1=parseInt(this[_0x1a94f0(0x18f)][_0x1a94f0(0x128)]());_0x55b4a1?($gameTemp['reserveCommonEvent'](_0x55b4a1),this['popScene']()):this[_0x1a94f0(0x18f)][_0x1a94f0(0x1a7)]();},VisuMZ[_0x6c9533(0x181)][_0x6c9533(0xf3)]=Scene_Menu['prototype'][_0x6c9533(0x19a)],Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x19a)]=function(){const _0x75e900=_0x6c9533;VisuMZ[_0x75e900(0x181)][_0x75e900(0xf3)]['call'](this);if(this[_0x75e900(0x1b2)]()===_0x75e900(0x1d5))this['_statusWindow'][_0x75e900(0x145)]();},VisuMZ['MainMenuCore'][_0x6c9533(0x219)]=Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x162)],Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x162)]=function(){const _0x465021=_0x6c9533;VisuMZ[_0x465021(0x181)][_0x465021(0x219)][_0x465021(0x13c)](this);if(this['commandWindowStyle']()===_0x465021(0x1d5))this[_0x465021(0x1c1)][_0x465021(0x1c5)]();},Scene_Menu[_0x6c9533(0x1c2)]['commandLoad']=function(){const _0x5d8937=_0x6c9533;Imported['VisuMZ_1_SaveCore']&&StorageManager[_0x5d8937(0xfc)]()===_0x5d8937(0xb9)?DataManager[_0x5d8937(0xf2)](0x0)[_0x5d8937(0x267)](()=>this[_0x5d8937(0x186)]())['catch'](()=>this['onSaveCoreLoadFailure']()):SceneManager[_0x5d8937(0xea)](Scene_Load);},Scene_Menu['prototype'][_0x6c9533(0xbd)]=function(){const _0x150905=_0x6c9533;this['_commandWindow'][_0x150905(0x263)]()!==''?this['_commandWindow'][_0x150905(0x125)]():this[_0x150905(0x118)]();},Scene_Menu['prototype'][_0x6c9533(0x186)]=function(){const _0x2b25a4=_0x6c9533;SoundManager[_0x2b25a4(0x24e)](),this[_0x2b25a4(0xdf)](),Scene_Load[_0x2b25a4(0x1c2)][_0x2b25a4(0x1ed)](),SceneManager['goto'](Scene_Map),this[_0x2b25a4(0xbf)]=!![],VisuMZ[_0x2b25a4(0x240)]['Settings'][_0x2b25a4(0x205)]['OnLoadSuccessJS'][_0x2b25a4(0x13c)](this);},Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x18b)]=function(){const _0x4e4028=_0x6c9533;SoundManager[_0x4e4028(0x1cb)](),VisuMZ['SaveCore'][_0x4e4028(0x16a)][_0x4e4028(0x205)][_0x4e4028(0xfb)][_0x4e4028(0x13c)](this),this[_0x4e4028(0x1f0)]();},VisuMZ[_0x6c9533(0x181)][_0x6c9533(0x228)]=Scene_Menu[_0x6c9533(0x1c2)]['terminate'],Scene_Menu[_0x6c9533(0x1c2)][_0x6c9533(0x1e2)]=function(){const _0x4f64bb=_0x6c9533;VisuMZ[_0x4f64bb(0x181)]['Scene_Title_terminate'][_0x4f64bb(0x13c)](this);if(this[_0x4f64bb(0xbf)])$gameSystem[_0x4f64bb(0x15f)]();};function Sprite_MenuBackgroundActor(){const _0x59dc03=_0x6c9533;this[_0x59dc03(0x215)](...arguments);}Sprite_MenuBackgroundActor[_0x6c9533(0x1c2)]=Object['create'](Sprite[_0x6c9533(0x1c2)]),Sprite_MenuBackgroundActor[_0x6c9533(0x1c2)][_0x6c9533(0x1f4)]=Sprite_MenuBackgroundActor,Sprite_MenuBackgroundActor[_0x6c9533(0x1c2)][_0x6c9533(0x215)]=function(){const _0x44988b=_0x6c9533;this[_0x44988b(0x1e5)]=null,this['_bitmapReady']=![],Sprite[_0x44988b(0x1c2)][_0x44988b(0x215)]['call'](this),this['x']=Graphics[_0x44988b(0x1fa)];},Sprite_MenuBackgroundActor[_0x6c9533(0x1c2)][_0x6c9533(0x139)]=function(_0x30e493){const _0x123b38=_0x6c9533;this['_actor']!==_0x30e493&&(this[_0x123b38(0x1e5)]=_0x30e493,this[_0x123b38(0x14f)]());},Sprite_MenuBackgroundActor[_0x6c9533(0x1c2)][_0x6c9533(0x14f)]=function(){const _0x22d1d1=_0x6c9533;this['_bitmapReady']=![],this[_0x22d1d1(0x1e5)]?(this[_0x22d1d1(0x117)]=ImageManager[_0x22d1d1(0xc4)](this[_0x22d1d1(0x1e5)][_0x22d1d1(0x124)]()),this['bitmap']['addLoadListener'](this[_0x22d1d1(0x160)][_0x22d1d1(0xe0)](this))):this[_0x22d1d1(0x117)]=new Bitmap(0x1,0x1);},Sprite_MenuBackgroundActor[_0x6c9533(0x1c2)]['onBitmapLoad']=function(){const _0x501a3a=_0x6c9533;this[_0x501a3a(0x224)]=!![],VisuMZ[_0x501a3a(0x181)][_0x501a3a(0x16a)][_0x501a3a(0x1eb)][_0x501a3a(0x13f)][_0x501a3a(0x13c)](this);},Sprite_MenuBackgroundActor['prototype'][_0x6c9533(0x102)]=function(){const _0x423178=_0x6c9533;Sprite['prototype'][_0x423178(0x102)][_0x423178(0x13c)](this),this[_0x423178(0x224)]&&(this[_0x423178(0xdd)](),this[_0x423178(0x1ec)](),this[_0x423178(0x183)]());},Sprite_MenuBackgroundActor[_0x6c9533(0x1c2)][_0x6c9533(0xdd)]=function(){const _0x46c539=_0x6c9533;if(this[_0x46c539(0x1a9)]>0x0){const _0x205d87=this['_duration'];this[_0x46c539(0x250)]=(this['opacity']*(_0x205d87-0x1)+0xff)/_0x205d87;}},Sprite_MenuBackgroundActor[_0x6c9533(0x1c2)]['updatePosition']=function(){const _0x42b610=_0x6c9533;if(this[_0x42b610(0x1a9)]>0x0){const _0x4c5f66=this[_0x42b610(0x1a9)];this['x']=(this['x']*(_0x4c5f66-0x1)+this[_0x42b610(0x15e)])/_0x4c5f66,this['y']=(this['y']*(_0x4c5f66-0x1)+this[_0x42b610(0x16f)])/_0x4c5f66;}},Sprite_MenuBackgroundActor[_0x6c9533(0x1c2)][_0x6c9533(0x183)]=function(){const _0x6c05eb=_0x6c9533;if(this[_0x6c05eb(0x1a9)]>0x0)this['_duration']--;},ImageManager[_0x6c9533(0x14d)]=ImageManager['svActorHorzCells']||0x9,ImageManager[_0x6c9533(0x175)]=ImageManager[_0x6c9533(0x175)]||0x6,Window_Base['prototype'][_0x6c9533(0xc8)]=function(_0x1bc9db,_0x2701e8,_0x778834){const _0x51f6ca=_0x6c9533,_0x95c6f8=_0x1bc9db[_0x51f6ca(0x1b9)](/\$/i),_0x4d49aa=ImageManager[_0x51f6ca(0x16b)](_0x1bc9db),_0x5f2cb3=_0x4d49aa[_0x51f6ca(0x1fa)]/(_0x95c6f8?0x1:ImageManager[_0x51f6ca(0x14d)]),_0x1d9a5f=_0x4d49aa['height']/(_0x95c6f8?0x1:ImageManager[_0x51f6ca(0x175)]),_0x593911=0x0,_0x186e8f=0x0;this[_0x51f6ca(0xe5)][_0x51f6ca(0x150)](_0x4d49aa,_0x593911,_0x186e8f,_0x5f2cb3,_0x1d9a5f,_0x2701e8-_0x5f2cb3/0x2,_0x778834-_0x1d9a5f);},Window_MenuCommand[_0x6c9533(0x1b5)]=VisuMZ[_0x6c9533(0x181)][_0x6c9533(0x16a)][_0x6c9533(0x163)],Window_MenuCommand[_0x6c9533(0x200)]=undefined,VisuMZ[_0x6c9533(0x181)]['Window_MenuCommand_initialize']=Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x215)],Window_MenuCommand['prototype'][_0x6c9533(0x215)]=function(_0x9def29){const _0x44fd44=_0x6c9533;this[_0x44fd44(0x207)]=$gameTemp[_0x44fd44(0x185)]||'',VisuMZ[_0x44fd44(0x181)]['Window_MenuCommand_initialize'][_0x44fd44(0x13c)](this,_0x9def29),this[_0x44fd44(0x1ff)](_0x9def29);},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x1ff)]=function(_0x3e138c){const _0x4d1010=_0x6c9533,_0x35ab8f=new Rectangle(0x0,0x0,_0x3e138c['width'],_0x3e138c['height']);this[_0x4d1010(0x252)]=new Window_Base(_0x35ab8f),this[_0x4d1010(0x252)][_0x4d1010(0x250)]=0x0,this[_0x4d1010(0x25b)](this[_0x4d1010(0x252)]),this['updateCommandNameWindow']();},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0xd3)]=function(){const _0x50bc7d=_0x6c9533;Window_HorzCommand[_0x50bc7d(0x1c2)][_0x50bc7d(0xd3)][_0x50bc7d(0x13c)](this);if(this[_0x50bc7d(0x252)])this[_0x50bc7d(0x140)]();},Window_MenuCommand['prototype'][_0x6c9533(0x140)]=function(){const _0x4c3195=_0x6c9533,_0x4c5547=this[_0x4c3195(0x252)];_0x4c5547[_0x4c3195(0xe5)][_0x4c3195(0x246)]();const _0xe07b49=this[_0x4c3195(0xf0)](this['index']());if(_0xe07b49===_0x4c3195(0x192)){const _0x5eced8=this[_0x4c3195(0x25e)](this['index']());let _0x4e4bc5=this[_0x4c3195(0xbb)](this[_0x4c3195(0x184)]());_0x4e4bc5=_0x4e4bc5['replace'](/\\I\[(\d+)\]/gi,''),_0x4c5547['resetFontSettings'](),this['commandNameWindowDrawBackground'](_0x4e4bc5,_0x5eced8),this[_0x4c3195(0xb8)](_0x4e4bc5,_0x5eced8),this[_0x4c3195(0x251)](_0x4e4bc5,_0x5eced8);}},Window_MenuCommand['prototype'][_0x6c9533(0xef)]=function(_0xbcb99d,_0x482983){},Window_MenuCommand[_0x6c9533(0x1c2)]['commandNameWindowDrawText']=function(_0x3f5122,_0x101c9b){const _0x139a66=_0x6c9533,_0x39d235=this['_commandNameWindow'];_0x39d235[_0x139a66(0x1bc)](_0x3f5122,0x0,_0x101c9b['y'],_0x39d235[_0x139a66(0x21c)],_0x139a66(0x11a));},Window_MenuCommand['prototype'][_0x6c9533(0x251)]=function(_0x3ba29a,_0x2c1815){const _0x127493=_0x6c9533,_0x355628=this[_0x127493(0x252)],_0x37d222=$gameSystem[_0x127493(0x1b8)](),_0xf4ac91=_0x2c1815['x']+Math['floor'](_0x2c1815[_0x127493(0x1fa)]/0x2)+_0x37d222;_0x355628['x']=_0x355628['width']/-0x2+_0xf4ac91,_0x355628['y']=Math[_0x127493(0xb4)](_0x2c1815[_0x127493(0x24c)]/0x4);},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x13e)]=function(){const _0x4bb631=_0x6c9533,_0x53d0a7=SceneManager[_0x4bb631(0x21a)][_0x4bb631(0x1b2)]();if(_0x53d0a7==='mobile'){const _0x589235=VisuMZ[_0x4bb631(0x181)][_0x4bb631(0x16a)]['CustomCmdWin'][_0x4bb631(0x1f6)];return this[_0x4bb631(0x206)]()*_0x589235+0x8;}else return Window_Command[_0x4bb631(0x1c2)][_0x4bb631(0x13e)]['call'](this);},Window_MenuCommand[_0x6c9533(0x1c2)]['makeCommandList']=function(){const _0x52c404=_0x6c9533;this[_0x52c404(0x122)]();},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x122)]=function(){const _0x348ad4=_0x6c9533;let _0x436226=0x0;for(const _0x358ee5 of Window_MenuCommand[_0x348ad4(0x1b5)]){let _0x1c5ab8=_0x358ee5[_0x348ad4(0x20e)];if(this[_0x348ad4(0x1b4)](_0x1c5ab8,_0x358ee5)){let _0x2fc192=_0x358ee5[_0x348ad4(0x221)];if(['',_0x348ad4(0x1aa)][_0x348ad4(0x154)](_0x2fc192))_0x2fc192=_0x358ee5['TextJS'][_0x348ad4(0x13c)](this);const _0xc36064=_0x358ee5[_0x348ad4(0x109)];_0xc36064>0x0&&this[_0x348ad4(0xd9)]()!==_0x348ad4(0x225)&&(_0x2fc192='\x5cI[%1]%2'[_0x348ad4(0xce)](_0xc36064,_0x2fc192));const _0x1557e5=this[_0x348ad4(0x11f)](_0x1c5ab8,_0x358ee5),_0x37941b=_0x358ee5[_0x348ad4(0x15b)][_0x348ad4(0x13c)](this);_0x1c5ab8===_0x348ad4(0x254)&&(_0x436226++,_0x1c5ab8+=_0x436226),this[_0x348ad4(0xd8)](_0x2fc192,_0x1c5ab8,_0x1557e5,_0x37941b),this[_0x348ad4(0x166)](_0x1c5ab8,_0x358ee5[_0x348ad4(0x149)][_0x348ad4(0xe0)](this,_0x37941b));}this['addSymbolBridge'](_0x1c5ab8);}},Window_MenuCommand[_0x6c9533(0x1c2)]['isMainMenuCommandVisible']=function(_0x327f26,_0x268708,_0xdaba33){const _0x1243be=_0x6c9533;if(!_0xdaba33){if(!this['isIncludedInSubcategory'](_0x327f26,_0x268708))return![];}if($gameSystem[_0x1243be(0x120)](_0x327f26,_0x1243be(0x19d)))return!![];if($gameSystem[_0x1243be(0x120)](_0x327f26,_0x1243be(0x24b)))return![];return _0x268708[_0x1243be(0xda)][_0x1243be(0x13c)](this,_0x327f26,_0x268708);},Window_MenuCommand['prototype'][_0x6c9533(0x11f)]=function(_0x57ba19,_0x466f50){const _0x432995=_0x6c9533;if($gameSystem['getMainMenuSymbolState'](_0x57ba19,_0x432995(0x210)))return!![];if($gameSystem[_0x432995(0x120)](_0x57ba19,'forceDisable'))return![];return _0x466f50['EnableJS']['call'](this,_0x57ba19,_0x466f50);},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x115)]=function(_0x36a222){const _0x3ebe2e=_0x6c9533;switch(_0x36a222){case _0x3ebe2e(0x179):this[_0x3ebe2e(0x202)]();break;case'formation':this[_0x3ebe2e(0x260)](),this[_0x3ebe2e(0x17d)]();break;case _0x3ebe2e(0x116):this[_0x3ebe2e(0x25a)]();break;case _0x3ebe2e(0x170):this['addSaveCommand']();break;case _0x3ebe2e(0x239):this[_0x3ebe2e(0x11d)]();break;}},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x202)]=function(){},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x260)]=function(){},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x17d)]=function(){},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x25a)]=function(){},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x100)]=function(){},Window_MenuCommand['prototype'][_0x6c9533(0x11d)]=function(){},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0xff)]=function(){const _0x49e8d9=_0x6c9533,_0x3f205c=SceneManager['_scene'][_0x49e8d9(0x1b2)]();if([_0x49e8d9(0x23e),_0x49e8d9(0xc1)]['includes'](_0x3f205c))return this[_0x49e8d9(0xf6)]?this['maxItems']():0x4;else return _0x3f205c!==_0x49e8d9(0x1ab)?VisuMZ['MainMenuCore'][_0x49e8d9(0x16a)][_0x49e8d9(0x121)][_0x49e8d9(0x193)]:Window_Command['prototype'][_0x49e8d9(0xff)][_0x49e8d9(0x13c)](this);},Window_MenuCommand[_0x6c9533(0x1c2)]['currentSubcategory']=function(){const _0x5f0efe=_0x6c9533;return this[_0x5f0efe(0x207)]||'';},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0xec)]=function(_0x45b6da,_0x415f45){const _0x3163d3=_0x6c9533,_0x3d6d7b=_0x415f45[_0x3163d3(0x187)]||'';if(!this[_0x3163d3(0x216)](_0x3d6d7b)&&this[_0x3163d3(0x263)]()==='')return!![];return _0x3d6d7b===this['currentSubcategory']();},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x216)]=function(_0x3e3f25){const _0x55ef17=_0x6c9533;return this['getSubcategoryList']()[_0x55ef17(0x154)](_0x3e3f25);},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x1d0)]=function(){const _0x108dee=_0x6c9533;if(Window_MenuCommand[_0x108dee(0x200)]!==undefined)return Window_MenuCommand['SUBCATEGORY_LIST'];Window_MenuCommand[_0x108dee(0x200)]=[];for(const _0x59b761 of Window_MenuCommand[_0x108dee(0x1b5)]){const _0x5cbe81=_0x59b761['Symbol'];if(_0x5cbe81!==_0x108dee(0x254))continue;const _0x2448d5=_0x59b761['ExtJS'][_0x108dee(0x13c)](this);Window_MenuCommand['SUBCATEGORY_LIST'][_0x108dee(0xea)](_0x2448d5);}return Window_MenuCommand[_0x108dee(0x200)];},Window_MenuCommand['prototype'][_0x6c9533(0x21b)]=function(_0xa94209){const _0x586629=_0x6c9533;if(!_0xa94209)return!![];const _0x2ae5a8=_0xa94209[_0x586629(0x15b)][_0x586629(0x13c)](this);for(const _0x6e55ec of Window_MenuCommand['_commandList']){if(_0x6e55ec===_0xa94209)continue;const _0xf3adaf=_0x6e55ec[_0x586629(0x187)]||'';if(_0xf3adaf!==_0x2ae5a8)continue;const _0x16d96c=_0x6e55ec[_0x586629(0x20e)];if(this['isMainMenuCommandVisible'](_0x16d96c,_0x6e55ec,!![]))return!![];}return![];},Window_MenuCommand['prototype'][_0x6c9533(0xb6)]=function(_0x133c90){const _0x5868c6=_0x6c9533;_0x133c90=_0x133c90;if(this[_0x5868c6(0x263)]()===_0x133c90)return;this[_0x5868c6(0x207)]=_0x133c90,$gameTemp[_0x5868c6(0x185)]=_0x133c90,this[_0x5868c6(0x1bd)](),this[_0x5868c6(0xd0)](0x0),this['setTopRow'](0x0),this['activate']();},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x125)]=function(){const _0x2a6299=_0x6c9533,_0x5948de=this['currentSubcategory']();this[_0x2a6299(0x207)]='',$gameTemp['_mainMenuSubcategory']=undefined,this[_0x2a6299(0x1bd)](),this[_0x2a6299(0x23d)](0x0);this['_scrollDuration']>0x1&&(this['_scrollDuration']=0x1,this[_0x2a6299(0x256)]());const _0x3d12f8=Math[_0x2a6299(0x1a1)](this[_0x2a6299(0x103)](_0x5948de),0x0);this[_0x2a6299(0xd5)](_0x3d12f8),this[_0x2a6299(0x1a7)]();},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x1f1)]=function(){const _0x42054e=_0x6c9533;return VisuMZ[_0x42054e(0x181)][_0x42054e(0x16a)][_0x42054e(0x121)][_0x42054e(0x11c)];},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x189)]=function(_0x1e910d){const _0x6a68c9=_0x6c9533,_0x3b4083=this[_0x6a68c9(0xf0)](_0x1e910d);if(_0x3b4083===_0x6a68c9(0xcc))this[_0x6a68c9(0x133)](_0x1e910d);else _0x3b4083==='icon'?this[_0x6a68c9(0x12e)](_0x1e910d):Window_Command[_0x6a68c9(0x1c2)][_0x6a68c9(0x189)][_0x6a68c9(0x13c)](this,_0x1e910d);},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0xd9)]=function(){const _0x285548=_0x6c9533;return VisuMZ[_0x285548(0x181)][_0x285548(0x16a)][_0x285548(0x121)][_0x285548(0x262)];},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0xf0)]=function(_0x1a3a06){const _0x280f5f=_0x6c9533,_0x1ed3a1=this[_0x280f5f(0xd9)]();if(_0x1ed3a1!==_0x280f5f(0x218))return _0x1ed3a1;else{const _0x42c029=this[_0x280f5f(0xbb)](_0x1a3a06);if(_0x42c029[_0x280f5f(0x1b9)](/\\I\[(\d+)\]/i)){const _0x29c403=this[_0x280f5f(0x25e)](_0x1a3a06),_0x3b85e6=this['textSizeEx'](_0x42c029)[_0x280f5f(0x1fa)];return _0x3b85e6<=_0x29c403[_0x280f5f(0x1fa)]?_0x280f5f(0xcc):_0x280f5f(0x192);}else return'text';}},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x133)]=function(_0x29217f){const _0x32403a=_0x6c9533,_0x14dbdf=this[_0x32403a(0x25e)](_0x29217f),_0x32fda3=this['commandName'](_0x29217f),_0x28afc1=this[_0x32403a(0x22e)](_0x32fda3)[_0x32403a(0x1fa)];this[_0x32403a(0x1fd)](this[_0x32403a(0xc0)](_0x29217f));let _0x4cea40=this[_0x32403a(0x1f1)]();if(_0x4cea40===_0x32403a(0x113))this[_0x32403a(0x1dc)](_0x32fda3,_0x14dbdf['x']+_0x14dbdf[_0x32403a(0x1fa)]-_0x28afc1,_0x14dbdf['y'],_0x28afc1);else{if(_0x4cea40===_0x32403a(0x11a)){const _0xbc822c=_0x14dbdf['x']+Math['floor']((_0x14dbdf['width']-_0x28afc1)/0x2);this[_0x32403a(0x1dc)](_0x32fda3,_0xbc822c,_0x14dbdf['y'],_0x28afc1);}else this[_0x32403a(0x1dc)](_0x32fda3,_0x14dbdf['x'],_0x14dbdf['y'],_0x28afc1);}},Window_MenuCommand[_0x6c9533(0x1c2)][_0x6c9533(0x12e)]=function(_0x49659e){const _0x4cb368=_0x6c9533;this['commandName'](_0x49659e)[_0x4cb368(0x1b9)](/\\I\[(\d+)\]/i);const _0x13737c=Number(RegExp['$1']),_0x36abfc=this['itemLineRect'](_0x49659e),_0x52dda7=_0x36abfc['x']+Math[_0x4cb368(0xb4)]((_0x36abfc[_0x4cb368(0x1fa)]-ImageManager[_0x4cb368(0x144)])/0x2),_0x2f9c77=_0x36abfc['y']+(_0x36abfc[_0x4cb368(0x24c)]-ImageManager['iconHeight'])/0x2;this[_0x4cb368(0x217)](_0x13737c,_0x52dda7,_0x2f9c77);},VisuMZ['MainMenuCore']['Window_StatusBase_loadFaceImages']=Window_StatusBase[_0x6c9533(0x1c2)]['loadFaceImages'],Window_StatusBase[_0x6c9533(0x1c2)]['loadFaceImages']=function(){const _0xc9c95b=_0x6c9533;VisuMZ[_0xc9c95b(0x181)]['Window_StatusBase_loadFaceImages']['call'](this),this[_0xc9c95b(0x119)]();},Window_StatusBase[_0x6c9533(0x1c2)]['loadOtherActorImages']=function(){const _0x5c8035=_0x6c9533;for(const _0x2d4957 of $gameParty['members']()){if(!_0x2d4957)continue;_0x2d4957['characterName']()&&ImageManager[_0x5c8035(0x201)](_0x2d4957[_0x5c8035(0x173)]()),_0x2d4957[_0x5c8035(0x135)]()&&ImageManager['loadSvActor'](_0x2d4957[_0x5c8035(0x135)]()),_0x2d4957[_0x5c8035(0x124)]()&&ImageManager[_0x5c8035(0xc4)](_0x2d4957[_0x5c8035(0x124)]());}},Window_StatusBase[_0x6c9533(0x1c2)][_0x6c9533(0x259)]=function(){const _0x1cd72b=_0x6c9533;return VisuMZ[_0x1cd72b(0x181)][_0x1cd72b(0x16a)][_0x1cd72b(0x10d)];},Window_StatusBase[_0x6c9533(0x1c2)][_0x6c9533(0x23b)]=function(_0x43b40f,_0x3c10e2,_0x34ccdd,_0x51a87d,_0x1580a7){const _0x210e84=_0x6c9533;_0x51a87d=_0x51a87d||ImageManager[_0x210e84(0x220)],_0x1580a7=_0x1580a7||ImageManager[_0x210e84(0x212)];const _0x5e661e=ImageManager[_0x210e84(0x220)],_0x52c5ad=_0x1580a7-0x2,_0x3e2131=_0x3c10e2+Math[_0x210e84(0xb4)]((_0x51a87d-_0x5e661e)/0x2);this[_0x210e84(0x1f4)]===Window_MenuStatus&&this['changePaintOpacity'](_0x43b40f[_0x210e84(0x1fc)]()),this['drawActorFace'](_0x43b40f,_0x3e2131,_0x34ccdd,_0x5e661e,_0x52c5ad),this[_0x210e84(0x1fd)](!![]);},Window_StatusBase[_0x6c9533(0x1c2)]['drawItemActorSprite']=function(_0x3cfb52,_0x2f4536,_0x3f7fa9,_0x4e0a9a,_0x10ba17){const _0x433db9=_0x6c9533;_0x4e0a9a=_0x4e0a9a||ImageManager[_0x433db9(0x220)],_0x10ba17=_0x10ba17||ImageManager['faceHeight'];const _0x3c490a=_0x3cfb52[_0x433db9(0x173)](),_0x499de9=_0x3cfb52[_0x433db9(0x196)](),_0x3a4ffb=ImageManager['loadCharacter'](_0x3c490a),_0x19d9fe=ImageManager[_0x433db9(0xd7)](_0x3c490a),_0x1bbdce=_0x3a4ffb[_0x433db9(0x1fa)]/(_0x19d9fe?0x3:0xc),_0x637ffc=_0x3a4ffb[_0x433db9(0x24c)]/(_0x19d9fe?0x4:0x8),_0x16e3b5=_0x4e0a9a,_0x6827cf=_0x10ba17-0x2,_0x4b06ac=_0x2f4536+Math[_0x433db9(0xb4)](_0x16e3b5/0x2),_0x48015f=_0x3f7fa9+Math[_0x433db9(0x25c)]((_0x10ba17+_0x637ffc)/0x2);this[_0x433db9(0x1f4)]===Window_MenuStatus&&this['changePaintOpacity'](_0x3cfb52[_0x433db9(0x1fc)]());const _0x1b4a33=Math[_0x433db9(0x21e)](_0x4e0a9a,_0x1bbdce),_0xc2254f=Math[_0x433db9(0x21e)](_0x10ba17,_0x637ffc),_0x171340=Math[_0x433db9(0xb4)](_0x2f4536+Math[_0x433db9(0x1a1)](_0x4e0a9a-_0x1bbdce,0x0)/0x2),_0x4027a4=Math[_0x433db9(0xb4)](_0x3f7fa9+Math[_0x433db9(0x1a1)](_0x10ba17-_0x637ffc,0x0)/0x2),_0x3b1f50=_0x19d9fe?0x0:_0x499de9,_0xae097=(_0x3b1f50%0x4*0x3+0x1)*_0x1bbdce,_0x13ccb5=Math[_0x433db9(0xb4)](_0x3b1f50/0x4)*0x4*_0x637ffc;this['contents'][_0x433db9(0x150)](_0x3a4ffb,_0xae097,_0x13ccb5,_0x1b4a33,_0xc2254f,_0x171340,_0x4027a4),this[_0x433db9(0x1fd)](!![]);},Window_StatusBase[_0x6c9533(0x1c2)][_0x6c9533(0x24a)]=function(_0x1ded2f,_0x320b24,_0x456843,_0x10fb72,_0x3aff09){const _0x25a01d=_0x6c9533;_0x10fb72=_0x10fb72||ImageManager[_0x25a01d(0x220)],_0x3aff09=_0x3aff09||ImageManager['faceHeight'];const _0x2ba01e=ImageManager[_0x25a01d(0x16b)](_0x1ded2f[_0x25a01d(0x135)]()),_0x439b36=_0x2ba01e[_0x25a01d(0x1fa)]/ImageManager[_0x25a01d(0x14d)],_0x2ca3d7=_0x2ba01e[_0x25a01d(0x24c)]/ImageManager[_0x25a01d(0x175)],_0x2ce9eb=_0x10fb72,_0x1724e1=_0x3aff09-0x2,_0x1c2998=_0x320b24+Math['floor'](_0x2ce9eb/0x2),_0x4cd961=_0x456843+Math[_0x25a01d(0x25c)]((_0x3aff09+_0x2ca3d7)/0x2);this[_0x25a01d(0x1f4)]===Window_MenuStatus&&this[_0x25a01d(0x1fd)](_0x1ded2f['isBattleMember']());const _0x136cc0=_0x1ded2f['hasStaticSvBattler']&&_0x1ded2f[_0x25a01d(0x171)](),_0x38e431=0x0,_0x2f1e69=0x0,_0x28b283=_0x136cc0?_0x2ba01e[_0x25a01d(0x1fa)]:_0x439b36,_0x51bffa=_0x136cc0?_0x2ba01e[_0x25a01d(0x24c)]:_0x2ca3d7,_0x25a13b=Math[_0x25a01d(0x21e)](0x1,_0x10fb72/_0x28b283,_0x3aff09/_0x51bffa),_0x1d670f=_0x25a13b*_0x28b283,_0x313fcd=_0x25a13b*_0x51bffa,_0x5cdc62=Math[_0x25a01d(0xb4)](_0x320b24+Math[_0x25a01d(0x1a1)](_0x10fb72-_0x1d670f,0x0)/0x2),_0x28c7ad=Math['floor'](_0x456843+Math[_0x25a01d(0x1a1)](_0x3aff09-_0x313fcd,0x0)/0x2);this[_0x25a01d(0xe5)][_0x25a01d(0x150)](_0x2ba01e,_0x38e431,_0x2f1e69,_0x28b283,_0x51bffa,_0x5cdc62,_0x28c7ad,_0x1d670f,_0x313fcd),this[_0x25a01d(0x1fd)](!![]);},Window_StatusBase['prototype'][_0x6c9533(0x229)]=function(_0x30e9fc,_0xf69513,_0x5be58b,_0x117dde,_0x19bc69){const _0xd3f369=_0x6c9533,_0x37d147=ImageManager[_0xd3f369(0xc4)](_0x30e9fc[_0xd3f369(0x124)]());_0x117dde=(_0x117dde||ImageManager[_0xd3f369(0x220)])-0x2,_0x19bc69=(_0x19bc69||ImageManager[_0xd3f369(0x212)])-0x2;const _0x36165f=_0x37d147['width'],_0x4a1782=_0x37d147[_0xd3f369(0x24c)],_0x36eee5=_0x117dde,_0x1f4ff5=_0x19bc69-0x2,_0x2d3be7=_0xf69513+Math[_0xd3f369(0xb4)](_0x36eee5/0x2),_0x46ea4a=_0x5be58b+Math['ceil']((_0x19bc69+_0x4a1782)/0x2);this[_0xd3f369(0x1f4)]===Window_MenuStatus&&this[_0xd3f369(0x1fd)](_0x30e9fc[_0xd3f369(0x1fc)]());const _0x15c0d8=Math[_0xd3f369(0x21e)](_0x117dde,_0x36165f),_0x4d289d=Math['min'](_0x19bc69,_0x4a1782),_0x353f31=_0xf69513+0x1,_0x289e27=Math[_0xd3f369(0x1a1)](_0x5be58b+0x1,_0x5be58b+_0x1f4ff5-_0x4a1782+0x3);let _0x106308=Math['round']((_0x36165f-_0x15c0d8)/0x2),_0x3f1051=Math['round']((_0x4a1782-_0x4d289d)/0x2);_0x106308-=_0x30e9fc['getMenuImageOffsetX'](),_0x3f1051-=_0x30e9fc[_0xd3f369(0x1c3)]();if(Imported[_0xd3f369(0xf9)]){if(VisuMZ[_0xd3f369(0xfa)][_0xd3f369(0x16a)][_0xd3f369(0x1e4)][_0xd3f369(0x19c)]){}}this[_0xd3f369(0xe5)][_0xd3f369(0x150)](_0x37d147,_0x106308,_0x3f1051,_0x15c0d8,_0x4d289d,_0x353f31,_0x289e27),this['changePaintOpacity'](!![]);},Window_Status['prototype'][_0x6c9533(0x15a)]=function(_0x26ce08,_0x195573,_0x11cad3,_0x21ae36,_0x3b6f5a){const _0x50c432=_0x6c9533;switch(this[_0x50c432(0x259)]()){case _0x50c432(0x188):break;case _0x50c432(0x17f):this[_0x50c432(0x249)](_0x26ce08,_0x195573,_0x11cad3,_0x21ae36,_0x3b6f5a);break;case _0x50c432(0x14e):this[_0x50c432(0x24a)](_0x26ce08,_0x195573,_0x11cad3,_0x21ae36,_0x3b6f5a);break;default:Window_StatusBase[_0x50c432(0x1c2)][_0x50c432(0x15a)][_0x50c432(0x13c)](this,_0x26ce08,_0x195573,_0x11cad3,_0x21ae36,_0x3b6f5a);break;}},VisuMZ['MainMenuCore'][_0x6c9533(0x255)]=Window_MenuStatus[_0x6c9533(0x1c2)][_0x6c9533(0x214)],Window_MenuStatus[_0x6c9533(0x1c2)][_0x6c9533(0x214)]=function(){const _0x50b562=_0x6c9533;VisuMZ['MainMenuCore']['Settings']['General'][_0x50b562(0x22b)]?VisuMZ[_0x50b562(0x181)][_0x50b562(0x255)][_0x50b562(0x13c)](this):this['smoothSelect'](0x0);},VisuMZ[_0x6c9533(0x181)][_0x6c9533(0x24d)]=Window_MenuStatus[_0x6c9533(0x1c2)][_0x6c9533(0x243)],Window_MenuStatus[_0x6c9533(0x1c2)][_0x6c9533(0x243)]=function(){const _0xbd4d6d=_0x6c9533;return this['showOnlyBattleMembers']()?$gameParty[_0xbd4d6d(0x213)]()[_0xbd4d6d(0xe7)]:VisuMZ[_0xbd4d6d(0x181)]['Window_MenuStatus_maxItems'][_0xbd4d6d(0x13c)](this);},Window_MenuStatus[_0x6c9533(0x1c2)][_0x6c9533(0xb2)]=function(){const _0x6042d3=_0x6c9533,_0x1634d8=VisuMZ[_0x6042d3(0x181)][_0x6042d3(0x16a)][_0x6042d3(0x1eb)];if(_0x1634d8[_0x6042d3(0x21d)]===undefined)_0x1634d8[_0x6042d3(0x21d)]=!![];const _0x3635e5=SceneManager[_0x6042d3(0x21a)];if(!_0x1634d8[_0x6042d3(0x21d)]){if(_0x1634d8[_0x6042d3(0x1d9)])return _0x3635e5['constructor']===Scene_Menu;return!![];}return![];},Window_MenuStatus['prototype'][_0x6c9533(0x159)]=function(){const _0x186aa8=_0x6c9533,_0x4a4560=SceneManager[_0x186aa8(0x21a)]['constructor'];return _0x4a4560===Scene_Menu?VisuMZ['MainMenuCore'][_0x186aa8(0x16a)][_0x186aa8(0x132)]:VisuMZ[_0x186aa8(0x181)]['Settings'][_0x186aa8(0x18a)];},Window_MenuStatus[_0x6c9533(0x1c2)][_0x6c9533(0x1e0)]=function(){const _0xff404d=_0x6c9533,_0x15c5bb=this['listStyle']();switch(_0x15c5bb){case'vertical':case'portrait':return 0x1;case _0xff404d(0x182):return 0x1;default:return $gameParty[_0xff404d(0x167)]();}},Window_MenuStatus['prototype']['maxCols']=function(){const _0x220830=_0x6c9533,_0x2e12d2=this[_0x220830(0x159)]();switch(_0x2e12d2){case _0x220830(0xc5):case _0x220830(0x112):return $gameParty[_0x220830(0x167)]();default:return 0x1;}},VisuMZ[_0x6c9533(0x181)][_0x6c9533(0x16c)]=Window_MenuStatus[_0x6c9533(0x1c2)][_0x6c9533(0x13e)],Window_MenuStatus[_0x6c9533(0x1c2)]['itemHeight']=function(){const _0x1fb6a9=_0x6c9533,_0x951833=this[_0x1fb6a9(0x159)]();switch(_0x951833){case'vertical':case'portrait':case _0x1fb6a9(0x182):return this[_0x1fb6a9(0xe1)];case'thin':return Window_Selectable[_0x1fb6a9(0x1c2)][_0x1fb6a9(0x13e)][_0x1fb6a9(0x13c)](this);case _0x1fb6a9(0xed):return this['lineHeight']()*0x2+0x8;default:return VisuMZ[_0x1fb6a9(0x181)]['Window_MenuStatus_itemHeight'][_0x1fb6a9(0x13c)](this);}},Window_MenuStatus[_0x6c9533(0x1c2)][_0x6c9533(0x189)]=function(_0x3da3d4){const _0x1801f8=_0x6c9533;this[_0x1801f8(0x1b0)](_0x3da3d4),this[_0x1801f8(0x12d)](_0x3da3d4);},VisuMZ[_0x6c9533(0x181)]['Window_MenuStatus_drawItemImage']=Window_MenuStatus[_0x6c9533(0x1c2)][_0x6c9533(0x108)],Window_MenuStatus['prototype'][_0x6c9533(0x1f9)]=function(_0x34215b,_0x41912d,_0x6ead0b,_0x8b075f,_0x3035ae){const _0x1a765b=_0x6c9533;switch(this[_0x1a765b(0x259)]()){case _0x1a765b(0x188):break;case _0x1a765b(0x17f):this[_0x1a765b(0x249)](_0x34215b,_0x41912d,_0x6ead0b+0x1,_0x8b075f,_0x3035ae-0x2);break;case _0x1a765b(0x14e):this[_0x1a765b(0x24a)](_0x34215b,_0x41912d,_0x6ead0b+0x1,_0x8b075f,_0x3035ae-0x2);break;default:this[_0x1a765b(0x23b)](_0x34215b,_0x41912d,_0x6ead0b,_0x8b075f,_0x3035ae);break;}},Window_MenuStatus[_0x6c9533(0x1c2)]['drawItemStatus']=function(_0x24130a){const _0x5e142e=_0x6c9533;this[_0x5e142e(0x1ba)]();const _0x17e4b6=this[_0x5e142e(0x23c)](_0x24130a),_0x3cd3a8=this[_0x5e142e(0x10b)](_0x24130a),_0x3b9771=this['listStyle']();switch(_0x3b9771){case _0x5e142e(0xc5):this[_0x5e142e(0x25d)](_0x17e4b6,_0x3cd3a8);break;case _0x5e142e(0x112):this[_0x5e142e(0x20f)](_0x17e4b6,_0x3cd3a8);break;case _0x5e142e(0x182):this[_0x5e142e(0x1bf)](_0x17e4b6,_0x3cd3a8);break;case _0x5e142e(0x126):this[_0x5e142e(0xf5)](_0x17e4b6,_0x3cd3a8);break;case _0x5e142e(0xed):this['drawItemStatusThickerStyle'](_0x17e4b6,_0x3cd3a8);break;default:this[_0x5e142e(0x172)](_0x17e4b6,_0x3cd3a8);break;}},Window_MenuStatus['prototype'][_0x6c9533(0x25d)]=function(_0x4906a4,_0x31cc58){const _0x414fbd=_0x6c9533;VisuMZ['MainMenuCore'][_0x414fbd(0x16a)]['ListStyles'][_0x414fbd(0x227)][_0x414fbd(0x13c)](this,_0x4906a4,_0x31cc58);},Window_MenuStatus['prototype'][_0x6c9533(0x20f)]=function(_0x529f6b,_0x2a5d36){const _0x425423=_0x6c9533;if(_0x529f6b[_0x425423(0x124)]()!==''){const _0x39febb=ImageManager['loadPicture'](_0x529f6b[_0x425423(0x124)]());_0x39febb['addLoadListener'](this['drawItemStatusPortraitStyleOnLoad'][_0x425423(0xe0)](this,_0x529f6b,_0x2a5d36));}else this[_0x425423(0x25d)](_0x529f6b,_0x2a5d36);},Window_MenuStatus[_0x6c9533(0x1c2)]['drawItemStatusPortraitStyleOnLoad']=function(_0x390a47,_0x587f50){const _0x194c55=_0x6c9533;VisuMZ[_0x194c55(0x181)][_0x194c55(0x16a)][_0x194c55(0x137)][_0x194c55(0x204)][_0x194c55(0x13c)](this,_0x390a47,_0x587f50);},Window_MenuStatus[_0x6c9533(0x1c2)][_0x6c9533(0x1bf)]=function(_0x29c90c,_0x1d74c8){const _0x533a4f=_0x6c9533,_0x5db74a=ImageManager['loadPicture'](_0x29c90c['getMenuImage']());_0x5db74a[_0x533a4f(0x1ae)](this['drawItemStatusSoloStyleOnLoad'][_0x533a4f(0xe0)](this,_0x29c90c,_0x1d74c8));},Window_MenuStatus[_0x6c9533(0x1c2)][_0x6c9533(0x265)]=function(_0x52a56d,_0x5ef06e){const _0xe9427a=_0x6c9533;VisuMZ['MainMenuCore']['Settings'][_0xe9427a(0x137)]['SoloStyle'][_0xe9427a(0x13c)](this,_0x52a56d,_0x5ef06e);},Window_MenuStatus[_0x6c9533(0x1c2)][_0x6c9533(0xf5)]=function(_0xe68b0b,_0x5c4a3b){const _0x704e34=_0x6c9533;VisuMZ['MainMenuCore'][_0x704e34(0x16a)][_0x704e34(0x137)][_0x704e34(0x110)][_0x704e34(0x13c)](this,_0xe68b0b,_0x5c4a3b);},Window_MenuStatus['prototype']['drawItemStatusThickerStyle']=function(_0x294ad2,_0x10ab21){const _0x38e75d=_0x6c9533;VisuMZ[_0x38e75d(0x181)][_0x38e75d(0x16a)][_0x38e75d(0x137)]['ThickerStyle'][_0x38e75d(0x13c)](this,_0x294ad2,_0x10ab21);},Window_MenuStatus[_0x6c9533(0x1c2)]['isExpGaugeDrawn']=function(){const _0x383c13=_0x6c9533,_0x5232d1=this['listStyle']();if([_0x383c13(0x126),_0x383c13(0xed)]['includes'](_0x5232d1))return![];return Window_StatusBase[_0x383c13(0x1c2)]['isExpGaugeDrawn']['call'](this);},Window_MenuStatus['prototype']['drawItemStatusDefaultStyle']=function(_0x172797,_0x2b2f2d){const _0x3a96f1=_0x6c9533;VisuMZ['MainMenuCore'][_0x3a96f1(0x16a)][_0x3a96f1(0x137)][_0x3a96f1(0xc9)][_0x3a96f1(0x13c)](this,_0x172797,_0x2b2f2d);},Window_SkillStatus['prototype'][_0x6c9533(0x15a)]=function(_0x44bead,_0x502611,_0x52642d,_0x1e62a6,_0x15e2f7){const _0x5bc297=_0x6c9533;switch(this[_0x5bc297(0x259)]()){case _0x5bc297(0x188):break;case _0x5bc297(0x17f):this[_0x5bc297(0x249)](_0x44bead,_0x502611,_0x52642d,_0x1e62a6,_0x15e2f7);break;case _0x5bc297(0x14e):this[_0x5bc297(0x24a)](_0x44bead,_0x502611,_0x52642d,_0x1e62a6,_0x15e2f7);break;default:Window_StatusBase['prototype'][_0x5bc297(0x15a)][_0x5bc297(0x13c)](this,_0x44bead,_0x502611,_0x52642d,_0x1e62a6,_0x15e2f7);break;}},Window_EquipStatus[_0x6c9533(0x1c2)][_0x6c9533(0x15a)]=function(_0x2aa5b3,_0x26ca49,_0x251463,_0x5ed61d,_0x53276e){const _0x593273=_0x6c9533;switch(this[_0x593273(0x259)]()){case'none':break;case _0x593273(0x17f):this[_0x593273(0x249)](_0x2aa5b3,_0x26ca49,_0x251463,_0x5ed61d,_0x53276e);break;case _0x593273(0x14e):this[_0x593273(0x24a)](_0x2aa5b3,_0x26ca49,_0x251463,_0x5ed61d,_0x53276e);break;default:Window_StatusBase[_0x593273(0x1c2)][_0x593273(0x15a)]['call'](this,_0x2aa5b3,_0x26ca49,_0x251463,_0x5ed61d,_0x53276e);break;}};function Window_ThinGold(){this['initialize'](...arguments);}Window_ThinGold[_0x6c9533(0x1c2)]=Object['create'](Window_Gold[_0x6c9533(0x1c2)]),Window_ThinGold[_0x6c9533(0x1c2)]['constructor']=Window_ThinGold,Window_ThinGold['prototype'][_0x6c9533(0x13e)]=function(){return this['lineHeight']();},Window_ThinGold[_0x6c9533(0x1c2)][_0x6c9533(0xc7)]=function(){const _0x1f0fca=_0x6c9533;return Window_Selectable[_0x1f0fca(0x1c2)][_0x1f0fca(0xc7)]['call'](this);};function Window_Playtime(){const _0x532e79=_0x6c9533;this[_0x532e79(0x215)](...arguments);}Window_Playtime[_0x6c9533(0x1c2)]=Object[_0x6c9533(0x238)](Window_Selectable[_0x6c9533(0x1c2)]),Window_Playtime[_0x6c9533(0x1c2)][_0x6c9533(0x1f4)]=Window_Playtime,Window_Playtime[_0x6c9533(0x1c2)][_0x6c9533(0x215)]=function(_0x196e1a){const _0x404289=_0x6c9533;this['_playtimeText']=$gameSystem[_0x404289(0x232)](),this[_0x404289(0x174)]=0x3c,Window_Selectable['prototype']['initialize'][_0x404289(0x13c)](this,_0x196e1a),this[_0x404289(0x1bd)]();},Window_Playtime[_0x6c9533(0x1c2)]['itemHeight']=function(){const _0x1671f0=_0x6c9533;return this[_0x1671f0(0x206)]();},Window_Playtime[_0x6c9533(0x1c2)]['update']=function(){const _0x4bb88b=_0x6c9533;Window_Selectable[_0x4bb88b(0x1c2)][_0x4bb88b(0x102)][_0x4bb88b(0x13c)](this),this['updateTimer']();},Window_Playtime[_0x6c9533(0x1c2)][_0x6c9533(0x191)]=function(){const _0x1127dd=_0x6c9533;if(this[_0x1127dd(0x174)]-->0x0){if(this[_0x1127dd(0x174)]<=0x0)this[_0x1127dd(0x1bd)]();}},Window_Playtime[_0x6c9533(0x1c2)][_0x6c9533(0x1bd)]=function(){const _0x5810af=_0x6c9533;this['_timer']=0x3c;const _0xedacff=this[_0x5810af(0x25e)](0x0),_0x3e119e=_0xedacff['x'],_0x1496e5=_0xedacff['y'],_0xb8a5ee=_0xedacff['width'];this[_0x5810af(0xe5)][_0x5810af(0x246)](),this['drawTimeIcon'](_0xedacff),this[_0x5810af(0x198)](_0xedacff),this['drawPlaytime'](_0xedacff);},Window_Playtime['prototype'][_0x6c9533(0x1ba)]=function(){const _0x5f4815=_0x6c9533;Window_Selectable['prototype'][_0x5f4815(0x1ba)][_0x5f4815(0x13c)](this),this['contents'][_0x5f4815(0x12b)]=VisuMZ[_0x5f4815(0x181)]['Settings']['Playtime'][_0x5f4815(0x1d7)];},Window_Playtime['prototype'][_0x6c9533(0x15c)]=function(_0x5f1e15){const _0x1f4be8=_0x6c9533;if(VisuMZ[_0x1f4be8(0x181)][_0x1f4be8(0x16a)]['Playtime']['Icon']>0x0){const _0x5e017e=VisuMZ[_0x1f4be8(0x181)]['Settings'][_0x1f4be8(0xf1)][_0x1f4be8(0x109)],_0x574892=_0x5f1e15['y']+(this[_0x1f4be8(0x206)]()-ImageManager[_0x1f4be8(0xb5)])/0x2;this['drawIcon'](_0x5e017e,_0x5f1e15['x'],_0x574892);const _0x2796f1=ImageManager[_0x1f4be8(0x144)]+0x4;_0x5f1e15['x']+=_0x2796f1,_0x5f1e15[_0x1f4be8(0x1fa)]-=_0x2796f1;}},Window_Playtime[_0x6c9533(0x1c2)]['drawTimeLabel']=function(_0x72e0a4){const _0x20d7ad=_0x6c9533;this[_0x20d7ad(0x1ba)](),this['changeTextColor'](ColorManager[_0x20d7ad(0x11b)]());const _0x210bd5=VisuMZ[_0x20d7ad(0x181)][_0x20d7ad(0x16a)][_0x20d7ad(0xf1)][_0x20d7ad(0x10f)];this[_0x20d7ad(0x1bc)](_0x210bd5,_0x72e0a4['x'],_0x72e0a4['y'],_0x72e0a4[_0x20d7ad(0x1fa)],'left'),this['resetTextColor']();},Window_Playtime[_0x6c9533(0x1c2)][_0x6c9533(0x1ac)]=function(_0x3e5cf9){const _0x337cfb=_0x6c9533,_0x2431c8=$gameSystem[_0x337cfb(0x232)]();this[_0x337cfb(0x1bc)](_0x2431c8,_0x3e5cf9['x'],_0x3e5cf9['y'],_0x3e5cf9[_0x337cfb(0x1fa)],'right');};function _0x2756(_0xd9332,_0x28f291){const _0x4b1e8d=_0x4b1e();return _0x2756=function(_0x2756b5,_0x3156d1){_0x2756b5=_0x2756b5-0xb2;let _0x499fb6=_0x4b1e8d[_0x2756b5];return _0x499fb6;},_0x2756(_0xd9332,_0x28f291);}function Window_MenuVariables(){const _0x15e721=_0x6c9533;this[_0x15e721(0x215)](...arguments);}Window_MenuVariables[_0x6c9533(0x1c2)]=Object[_0x6c9533(0x238)](Window_Selectable[_0x6c9533(0x1c2)]),Window_MenuVariables[_0x6c9533(0x1c2)][_0x6c9533(0x1f4)]=Window_MenuVariables,Window_MenuVariables[_0x6c9533(0x1c2)]['initialize']=function(_0x169e74){const _0x178ecb=_0x6c9533;Window_Selectable[_0x178ecb(0x1c2)][_0x178ecb(0x215)][_0x178ecb(0x13c)](this,_0x169e74),this[_0x178ecb(0x261)]=VisuMZ[_0x178ecb(0x181)]['Settings'][_0x178ecb(0x1e3)][_0x178ecb(0x253)],this['refresh']();},Window_MenuVariables['prototype']['itemHeight']=function(){return this['lineHeight']();},Window_MenuVariables[_0x6c9533(0x1c2)][_0x6c9533(0xff)]=function(){const _0x564e9d=_0x6c9533,_0x344ed1=SceneManager[_0x564e9d(0x21a)][_0x564e9d(0x1b2)]();return _0x344ed1===_0x564e9d(0x1ab)?0x1:VisuMZ['MainMenuCore'][_0x564e9d(0x16a)][_0x564e9d(0x1e3)]['VarList'][_0x564e9d(0xe7)];},Window_MenuVariables[_0x6c9533(0x1c2)]['resetFontSettings']=function(){const _0x36f1cd=_0x6c9533;Window_Selectable[_0x36f1cd(0x1c2)][_0x36f1cd(0x1ba)][_0x36f1cd(0x13c)](this),this[_0x36f1cd(0xe5)][_0x36f1cd(0x12b)]=VisuMZ['MainMenuCore'][_0x36f1cd(0x16a)][_0x36f1cd(0x1e3)][_0x36f1cd(0x1d7)],this['changeTextColor'](ColorManager['systemColor']());},Window_MenuVariables[_0x6c9533(0x1c2)][_0x6c9533(0x243)]=function(){const _0x2bcd5a=_0x6c9533;return this[_0x2bcd5a(0x261)][_0x2bcd5a(0xe7)];},Window_MenuVariables[_0x6c9533(0x1c2)][_0x6c9533(0x1c4)]=function(){const _0x5a3f3c=_0x6c9533,_0x422b4e=this[_0x5a3f3c(0x129)]();for(let _0x2803e0=0x0;_0x2803e0<this[_0x5a3f3c(0x1d3)]();_0x2803e0++){const _0xdd3ee6=_0x422b4e+_0x2803e0;_0xdd3ee6<this[_0x5a3f3c(0x243)]()&&(this[_0x5a3f3c(0x244)](_0xdd3ee6),this[_0x5a3f3c(0x189)](_0xdd3ee6));}},Window_MenuVariables[_0x6c9533(0x1c2)]['drawItemBackground']=function(_0x463cdf){},Window_MenuVariables[_0x6c9533(0x1c2)][_0x6c9533(0x189)]=function(_0x334cd8){const _0x5c2397=_0x6c9533,_0x1197e8=this['_data'][_0x334cd8];if(_0x1197e8<=0x0)return;if(!$dataSystem[_0x5c2397(0x1da)][_0x1197e8])return;const _0x388324=this['itemLineRect'](_0x334cd8);this[_0x5c2397(0x1ba)]();let _0x45be15=0x0,_0x11d7f7=$dataSystem[_0x5c2397(0x1da)][_0x1197e8][_0x5c2397(0xbe)]();_0x11d7f7[_0x5c2397(0x1b9)](/\\I\[(\d+)\]/i)&&(_0x45be15=Number(RegExp['$1']),_0x11d7f7=_0x11d7f7[_0x5c2397(0x165)](/\\I\[(\d+)\]/i,'')['trim']());if(_0x45be15>0x0){const _0x463d9e=_0x388324['y']+(this[_0x5c2397(0x206)]()-ImageManager[_0x5c2397(0xb5)])/0x2;this[_0x5c2397(0x217)](_0x45be15,_0x388324['x'],_0x463d9e);const _0x2cd046=ImageManager[_0x5c2397(0x144)]+0x4;_0x388324['x']+=_0x2cd046,_0x388324[_0x5c2397(0x1fa)]-=_0x2cd046;}this['drawText'](_0x11d7f7,_0x388324['x'],_0x388324['y'],_0x388324[_0x5c2397(0x1fa)],_0x5c2397(0x1d1)),this[_0x5c2397(0x1d8)](ColorManager[_0x5c2397(0x161)]()),this['drawText']($gameVariables[_0x5c2397(0x23a)](_0x1197e8),_0x388324['x'],_0x388324['y'],_0x388324[_0x5c2397(0x1fa)],_0x5c2397(0x113));};function _0x4b1e(){const _0x5adddb=['68964HiNdxM','7AHpCxs','characterIndex','463140TKkllU','drawTimeLabel','forceShowMainMenuCommand','commandFormation','forceEnableMainMenuCommand','PixelateImageRendering','forceShow','touchmove','forceDisable','backgroundImage','max','thinGoldWindow','createBackground','goldWindowRectBottomStyle','ARRAYSTRUCT','commandWindowRectBottomStyle','activate','pageY','_duration','Untitled','default','drawPlaytime','overflow','addLoadListener','cursor','drawPendingItemBackground','AdjustCommandHeight','commandWindowStyle','statusWindowRect','isMainMenuCommandVisible','_commandList','registerCommand','Scene_Menu_create','windowPadding','match','resetFontSettings','Rows','drawText','refresh','mainCommandWidth','drawItemStatusSoloStyle','playtimeWindowRectTopStyle','_statusWindow','prototype','getMenuImageOffsetY','drawAllItems','close','canCreateVariableWindow','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','position','playtimeWindowRect','shift','playBuzzer','_dummyWindow','createStatusWindow','isArray','variableWindowRectBottomStyle','getSubcategoryList','left','createVariableWindow','maxVisibleItems','round','mobile','MenuCommandClear','FontSize','changeTextColor','HideMainMenuOnly','variables','currentSymbol','drawTextEx','url(','loadSystemImages','Step2','numVisibleRows','playtimeWindowRectBottomStyle','terminate','Variable','QoL','_actor','Step1','name','NUM','commandWindowRectThinTopStyle','Symbols','General','updatePosition','reloadMapIfUpdated','4304190pPCjuU','addWindow','loadFailureConfirmationWindow','itemTextAlign','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Scene_Menu_statusWindowRect','constructor','Scene_MenuBase_updateActor','MobileThickness','10oNrRme','anchorY','drawActorGraphic','width','ARRAYSTR','isBattleMember','changePaintOpacity','SceneManager_push','createCommandNameWindow','SUBCATEGORY_LIST','loadCharacter','addMainCommands','ChangeActorMenuImageGroup','PortraitStyle','Save','lineHeight','_subcategory','isDisplayActorMenuBackgroundImage','log','Game_System_initialize','canCreatePlaytimeWindow','SoloQuick','220976ByApYU','Symbol','drawItemStatusPortraitStyle','forceEnable','members','faceHeight','battleMembers','selectLast','initialize','doesSubcategoryExist','drawIcon','auto','Scene_Menu_onFormationCancel','_scene','isSubcategoryVisible','innerWidth','ShowReserve','min','commandWindowRect','faceWidth','TextStr','adjustCommandHeightByVariable','version','_bitmapReady','text','updateActor','VerticalStyle','Scene_Title_terminate','drawItemActorMenuImage','Scene_Menu_commandWindowRect','StatusSelectLast','.png','img/system/','textSizeEx','idleFilename','anchorX','26VFUulY','playtimeText','adjustDefaultCommandWindowRect','_playtimeWindow','_mainMenuCore','adjustStatusWindowMobile','fill','create','gameEnd','value','drawItemActorFace','actor','setTopRow','thinTop','mainAreaHeight','SaveCore','ActorJS','pageX','maxItems','drawItemBackground','createDummyWindow','clear','Step1End','_menuImage','drawItemActorSprite','drawItemActorSvBattler','forceHide','height','Window_MenuStatus_maxItems','playLoad','_actorMenuBgSprite','opacity','commandNameWindowCenter','_commandNameWindow','VarList','subcategory','Window_MenuStatus_selectLast','updateSmoothScroll','Scene_Menu_onPersonalCancel','style','graphicType','addOptionsCommand','addChild','ceil','drawItemStatusVerticalStyle','itemLineRect','FUNC','addFormationCommand','_data','Style','currentSubcategory','MenuCommandForceShow','drawItemStatusSoloStyleOnLoad','addEventListener','then','forceHideMainMenuCommand','commandWindowRectThinBottomStyle','showOnlyBattleMembers','setBackgroundType','floor','iconHeight','setSubcategory','statusWindowRectMobileStyle','commandNameWindowDrawText','single','createCommandWindow','commandName','ConvertParams','commandCancel','trim','_loadSuccess','isCommandEnabled','thinBottom','parse','setMenuImage','loadPicture','vertical','1375760fbvtDZ','colSpacing','drawSvActor','DefaultStyle','variableWindowRect','openness','iconText','FilenameJS','format','bottom','select','ChangeActorMenuImageJS','MouseCursor','callUpdateHelp','display','smoothSelect','CommandWindowStyle','isBigCharacter','addCommand','commandStyle','ShowJS','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_goldWindow','updateOpacity','onPersonalCancel','fadeOutAll','bind','innerHeight','Step1Start','Scene_Menu_goldWindowRect','note','contents','div','length','statusWindowRectBottomStyle','onPersonalOk','push','goldWindowRectTopStyle','isIncludedInSubcategory','thicker','mainAreaTop','commandNameWindowDrawBackground','commandStyleCheck','Playtime','loadGame','Scene_Menu_commandFormation','error','drawItemStatusThinStyle','_list','variableWindowRectTopStyle','top','VisuMZ_0_CoreEngine','CoreEngine','OnLoadFailureJS','saveStyle','mainAreaBottom','STRUCT','maxCols','addSaveCommand','commandPersonal','update','findExt','createPlaytimeWindow','createElement','map','MenuCommandForceDisable','drawItemImage','Icon','createActorMenuBackgroundImageSprite','itemRect','_variableWindow','StatusGraphic','isSoloQuickMode','Time','ThinStyle','calcWindowHeight','portrait','right','ThinGoldWindow','addSymbolBridge','options','bitmap','popScene','loadOtherActorImages','center','systemColor','TextAlign','addGameEndCommand','getMenuImageOffsetX','isMainMenuCommandEnabled','getMainMenuSymbolState','CustomCmdWin','makeMainMenuCoreCommandList','description','getMenuImage','removeSubcategory','thin','cancel','currentExt','topIndex','return\x200','fontSize','IsCustomCursorEnabled','drawItemStatus','drawItemStyleIcon','Scene_Menu_commandPersonal','adjustCommandHeightByPlaytime','clickFilename','StatusListStyle','drawItemStyleIconText','WindowRect','battlerName','filter','ListStyles','Enable','setActor','ChangeActorMenuImageRange','pointerEvents','call','STR','itemHeight','ActorBgMenuJS','updateCommandNameWindow','needsDummyWindow','concat','BgType','iconWidth','open','SetupCustomCursor','NO\x20ACTOR\x20FOUND!','379794UVIMVg','CallHandlerJS','exit','mouseup','Game_Actor_setup','svActorHorzCells','svbattler','loadBitmap','blt','setup','Custom\x20cursor\x20image\x20failed\x20to\x20load.','absolute','includes','EVAL','boxWidth','src','AutoGoldY','listStyle','drawActorFace','ExtJS','drawTimeIcon','Scene_Menu_createStatusWindow','_targetX','onAfterLoad','onBitmapLoad','normalColor','onFormationCancel','CommandList','goldWindowRect','replace','setHandler','maxBattleMembers','initMainMenuCore','body','Settings','loadSvActor','Window_MenuStatus_itemHeight','onerror','8834miOWpt','_targetY','save','hasStaticSvBattler','drawItemStatusDefaultStyle','characterName','_timer','svActorVertCells','boxHeight','commandCommonEvent','statusWindowRectTopStyle','item','forceDisableMainMenuCommand','ARRAYNUM','mainMenuCoreSettings','addOriginalCommands','isMobileDevice','sprite','applyThinnerGoldWindowRect','MainMenuCore','solo','updateDuration','index','_mainMenuSubcategory','onSaveCoreLoadSuccess','Subcategory','none','drawItem','InnerMenuListStyle','onSaveCoreLoadFailure','initMenuImage','commandWindowRectTopStyle','remove','_commandWindow','appendChild','updateTimer','icon','Cols'];_0x4b1e=function(){return _0x5adddb;};return _0x4b1e();}