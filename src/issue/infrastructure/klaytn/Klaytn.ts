import { Injectable } from '@nestjs/common';
import Caver from 'caver-js'; // tslint:disable-line:import-name

import { ConfigService } from '../../../config/application/Config.service';
import abi from  './abi.json'; // tslint:disable-line:import-name
import { IKlaytn } from '../../application/util/Klaytn.interface';

@Injectable()
export class Klaytn implements IKlaytn {

  private contract: any;
  private account: any;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.initiateContract();
  }

  public async makeIssue(
    userId: number,
    repositoryUrl: string,
    issueNumber: number,
    title: string,
    category: string,
    price: number,
  ): Promise<number> {
    const address = await this.getAddress(userId);
    const issue = this.contract.methods.makeIssue(
      address,
      repositoryUrl,
      issueNumber,
      title,
      category,
      price,
    );

    return issue.send({
      from: this.account.address,
      gas: this.configService.getKlaytnConfig().gasLimit,
    });
  }

  private async getAddress(userId: number) {
    const { contractAddress } = this.configService.getKlaytnConfig();
    return this.contract.methods
      .githubToAddress(userId.toString())
      .call({ from: contractAddress });
  }

  private initiateContract() {
    const { url, contractAddress, privateKey } = this.configService.getKlaytnConfig();
    const caver = new Caver(url);
    this.contract = new caver.klay.Contract(abi, contractAddress, {
      from: '0x1234567890123456789012345678901234567891', // default from address
      gasPrice: '25000000000', // default gas price in peb, 25 Gpeb in this case
    });
    this.account = caver.klay.accounts.privateKeyToAccount(privateKey);
    caver.klay.accounts.wallet.add(this.account);
  }
}
