export enum OverwatchTiers {
  TIER_UNRANKED = 'unranked',
  TIER_BRONZE = 'bronze',
  TIER_SILVER = 'silver',
  TIER_GOLD = 'gold',
  TIER_PLATINUM = 'platinum',
  TIER_DIAMOND = 'diamond',
  TIER_MASTERS = 'master',
  TIER_GRANDMASTERS = 'grand-master',
  TIER_TOP500 = 'Top500'
}

export class Tiers {

  private tier = OverwatchTiers.TIER_UNRANKED;
  private currentTier = OverwatchTiers.TIER_UNRANKED;
  private ranking = 0;
  private needed = 0;

  constructor() { }

  setRanking(ranking: number): void {
    this.ranking = ranking;
    this.setTier();
  }

  compareTiers(isTier: string, shouldTier: string): string {
    return (isTier === shouldTier) ? isTier : shouldTier;
  }

  getTier(): string {
    return this.tier;
  }

  getCurrentTier(): string {
    return this.currentTier;
  }

  getNeeded(): number {
    return this.needed;
  }

  setTier(): void {
    if (this.ranking < 1) {
      this.tier = OverwatchTiers.TIER_UNRANKED;
      this.needed = 1 - this.ranking;
    }
    if (this.ranking >= 1 && this.ranking <= 1499) {
      this.currentTier = OverwatchTiers.TIER_BRONZE;
      this.tier = OverwatchTiers.TIER_SILVER;
      this.needed = 1500 - this.ranking;
    }
    if (this.ranking >= 1500 && this.ranking <= 1999) {
      this.currentTier = OverwatchTiers.TIER_SILVER;
      this.tier = OverwatchTiers.TIER_GOLD;
      this.needed = 2000 - this.ranking;
    }
    if (this.ranking >= 2000 && this.ranking <= 2499) {
      this.currentTier = OverwatchTiers.TIER_GOLD;
      this.tier = OverwatchTiers.TIER_PLATINUM;
      this.needed = 2500 - this.ranking;
    }
    if (this.ranking >= 2500 && this.ranking <= 2999) {
      this.currentTier = OverwatchTiers.TIER_PLATINUM;
      this.tier = OverwatchTiers.TIER_DIAMOND;
      this.needed = 3000 - this.ranking;
    }
    if (this.ranking >= 3000 && this.ranking <= 3499) {
      this.currentTier = OverwatchTiers.TIER_DIAMOND;
      this.tier = OverwatchTiers.TIER_MASTERS;
      this.needed = 3500 - this.ranking;
    }
    if (this.ranking >= 3500 && this.ranking <= 3999) {
      this.currentTier = OverwatchTiers.TIER_MASTERS;
      this.tier = OverwatchTiers.TIER_GRANDMASTERS;
      this.needed = 4000 - this.ranking;
    }
    if (this.ranking >= 4000) {
      this.currentTier = OverwatchTiers.TIER_GRANDMASTERS;
      this.tier = OverwatchTiers.TIER_UNRANKED;
      this.needed = 0;
    }
  }
}
