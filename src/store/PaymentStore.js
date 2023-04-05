import { makeAutoObservable, runInAction } from 'mobx';

import { getWallet, setWallet } from '@Api/fetchPayment';

class PaymentStore {
  wallet = {};

  constructor() {
    makeAutoObservable(this);
  }

  async getWallet() {
    const wallet = await getWallet();

    runInAction(() => {
      this.wallet = wallet;
    });
  }

  async setBalanceToBuy(balance) {
    runInAction(() => {
      this.wallet.balanceToBuy = balance;
    });
    await setWallet(this.wallet);
  }

  async setBalanceToWithdraw(balance) {
    runInAction(() => {
      this.wallet.balanceToWithdraw = balance;
    });

    await setWallet(this.wallet);
  }

  async setCoins(coins) {
    runInAction(() => {
      this.wallet.coins = coins;
    });

    await setWallet(this.wallet);
  }
}

export default new PaymentStore();
