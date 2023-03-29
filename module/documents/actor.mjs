/**
 * Extend the base Actor document by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class MurderBalletActor extends Actor {

  /** @override */
  prepareData() {
    // Prepare data for the actor. Calling the super version of this executes
    // the following, in order: data reset (to clear active effects),
    // prepareBaseData(), prepareEmbeddedDocuments() (including active effects),
    // prepareDerivedData().
    super.prepareData();
  }

  /** @override */
  prepareBaseData() {
    // Data modifications in this step occur before processing embedded
    // documents or derived data.
  }

  /**
   * @override
   * Augment the basic actor data with additional dynamic data. Typically,
   * you'll want to handle most of your calculated/derived data in this step.
   * Data calculated in this step should generally not exist in template.json
   * (such as ability modifiers rather than ability scores) and should be
   * available both inside and outside of character sheets (such as if an actor
   * is queried and has a roll executed directly from it).
   */
  prepareDerivedData() {
    const actorData = this;
    const systemData = actorData.system;
    const flags = actorData.flags.murderballet || {};

    // Make separate methods for each Actor type (assassin, npc, etc.) to keep
    // things organized.
    this._prepareAssassinData(actorData);
    this._prepareRivalData(actorData);
	this._prepareEnemyData(actorData);
  }

  /**
   * Prepare Assassin type specific data
   */
  _prepareAssassinData(actorData) {
    if (actorData.type !== 'assassin') return;

    // Make modifications to data here. For example:
    const systemData = actorData.system;

  }

  /**
   * Prepare Rival type specific data.
   */
  _prepareRivalData(actorData) {
    if (actorData.type !== 'rival') return;

    // Make modifications to data here. For example:
    const systemData = actorData.system;

  }
  
    /**
   * Prepare Enemy type specific data.
   */
  _prepareEnemyData(actorData) {
    if (actorData.type !== 'enemy') return;

    // Make modifications to data here. For example:
    const systemData = actorData.system;
  }


  /**
   * Override getRollData() that's supplied to rolls.
   */
  getRollData() {
    const data = super.getRollData();

    // Prepare assassin roll data.
    this._getAssassinRollData(data);
    this._getRivalRollData(data);
	this._getEnemyRollData(data);

    return data;
  }

  /**
   * Prepare assassin roll data.
   */
  _getAssassinRollData(data) {
    if (this.type !== 'assassin') return;

    // Copy the ability scores to the top level, so that rolls can use
    // formulas like `@str.mod + 4`.
    if (data.abilities) {
      for (let [k, v] of Object.entries(data.abilities)) {
        data[k] = foundry.utils.deepClone(v);
      }
    }


  }

  /**
   * Prepare Rival roll data.
   */
  _getRivalRollData(data) {
    if (this.type !== 'rival') return;

    // Process additional Rival data here.
  }

  /**
   * Prepare Enemy roll data.
   */
  _getEnemyRollData(data) {
    if (this.type !== 'enemy') return;

    // Process additional Enemy data here.
  }

}