export enum OverwatchRoles {
  ROLE_FLEX = 'Flex',
  ROLE_OFFENSE = 'Offensive',
  ROLE_DEFENSE = 'Defensive',
  ROLE_SUPPORT = 'Support',
  ROLE_TANK = 'Tank'
}

export class Roles {

  private role = null;
  private champions = [];

  constructor() { }

  setMainRole(name: string, champions: any): string {
    if (name === 'ToxicToast') {
      return `<b>${OverwatchRoles.ROLE_OFFENSE} - ${OverwatchRoles.ROLE_DEFENSE}</b>`;
    }
    //
    const roles = [];
    champions.forEach(champion => {
      if (champion.character_time > 0) {
        this.champions.push(champion.character_role);
      }
    });
    const set = new Set(this.champions.map(item => item));
    set.forEach(element => {
      roles.push(element);
    });
    if (set.size > 1) {
      const secondary = this.setRole(roles[0]);
      return `${OverwatchRoles.ROLE_FLEX} - ${secondary}`;
    } else {
      const role = this.setRole(roles[0]);
      return `${role}`;
    }
  }

  private setRole(role) {
    if (role === 'Offense') {
      const secondary = OverwatchRoles.ROLE_OFFENSE;
    }
    if (role === 'Defense') {
      const secondary = OverwatchRoles.ROLE_DEFENSE;
    }
    if (role === 'Tank') {
      const secondary = OverwatchRoles.ROLE_TANK;
    }
    if (role === 'Support') {
      const secondary = OverwatchRoles.ROLE_SUPPORT;
    }
    return role;
  }
}
