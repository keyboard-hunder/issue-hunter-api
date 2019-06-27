export const KLAYTN_TOKEN = 'KLAYTN_TOKEN';

export interface IKlaytn {
  makeIssue(
    userId: number,
    repositoryUrl: string,
    issueNumber: number,
    title: string,
    category: string,
    price: number,
  ): Promise<number>;
}
